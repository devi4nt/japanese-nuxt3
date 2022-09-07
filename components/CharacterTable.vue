<script lang="ts" setup>
import { computed, ref, Ref, watch } from 'vue';
import { useIntervalFn } from '@vueuse/core';
import { Character } from '../classes/Character';
import { CharacterType, CharacterFilter, ICharacterGroupData } from '../interfaces/characters';
import { hiraganaTables } from '../constants/hiragana';
import { katakanaTables } from '../constants/katakana';
import { shuffle } from '../constants/shuffle';

const props = defineProps<{
  type: CharacterType;
  filter: CharacterFilter;
}>();

const tables = computed(() => (props.type === 'hiragana' ? hiraganaTables : katakanaTables));
const table = computed(() => tables.value.filter((item) => item.id === props.filter)[0]);

const filter = (regExp?: RegExp): Character[] => {
  const filtered: Character[] = [];
  table.value.characters.forEach((char) => {
    if (!regExp || regExp.test(char.romanji || '')) {
      filtered.push(char);
    }
  });
  return filtered;
};

const columns = computed(() => {
  const groupData: ICharacterGroupData[] = [];
  table.value.columns.forEach((group) => {
    const rowCharacters: Character[] = [];
    const filteredCharacters = filter(group.filter);
    table.value.rows.forEach((row) => {
      let matched = false;
      filteredCharacters.forEach((character) => {
        // n (include in A row)
        if (
          (character.romanji === 'n' && row.vowel?.romanji === 'a') ||
          character.vowel === row.vowel ||
          character.symbol === row.vowel?.symbol
        ) {
          rowCharacters.push(character);
          matched = true;
        }
      });
      if (!matched) {
        rowCharacters.push({ symbol: '' }); // spacer
      }
    });
    groupData.push({
      identifier: group.identifier,
      characters: rowCharacters,
    });
  });
  return groupData;
});

// drag and drop game
const active = ref(false);
const complete = ref(false);
const startBtn: Ref<HTMLElement | null> = ref(null);
const stopBtn: Ref<HTMLElement | null> = ref(null);
const resetBtn: Ref<HTMLElement | null> = ref(null);
const mistakes: Ref<HTMLElement | null> = ref(null);
const correct: Ref<HTMLElement | null> = ref(null);
const timer: Ref<HTMLElement | null> = ref(null);
const dragSource: Ref<HTMLElement | null> = ref(null);
const dragSourceElements: Ref<HTMLElement[]> = ref([]);
const dragElements: Ref<HTMLElement[]> = ref([]);
const draggingElement: Ref<HTMLElement | null> = ref(null);
const mistakeCount = ref(0);
const correctCount = ref(0);
const timerCount = ref(0);
const started: Ref<Date> = ref(new Date());

const { pause, resume } = useIntervalFn(() => {
  if (active.value && timer.value) {
    if (dragSource.value?.childElementCount) {
      timerCount.value = Math.round((new Date().getTime() - started.value.getTime()) / 1000);
    } else {
      // stop the timer, user has completed
      complete.value = true;
      pause();
    }
  }
}, 1000);

// pause it until the user
pause();

const drag = (event: MouseEvent) => {
  // keep track of what we're dragging
  draggingElement.value = event.currentTarget as HTMLElement;
};

const dragSetup = (element: HTMLElement) => {
  // console.log('setup', element, dragSource.value);
  if (dragSource.value) {
    // clone our drag element, make it draggable & setup the event listener
    const clonedNode = element.cloneNode(true) as HTMLElement;
    clonedNode.setAttribute('draggable', 'true');
    clonedNode.addEventListener('dragstart', (event: MouseEvent) => drag(event));
    clonedNode.classList.add('cursor-grab', 'text-white', 'bg-black/70', 'mr-1');

    // set the appropriate character
    const { romanji } = element.dataset;
    clonedNode.dataset.romanji = romanji;

    // hide the source element character
    element.classList.add('text-transparent', 'border-[#777777]');
    element.classList.remove('border-transparent');

    // copy the cloned drop element into the source area
    dragSource.value.appendChild(clonedNode);
  }
};

const dragReset = (element: HTMLElement) => {
  // console.log('reset', element, dragSource.value);
  if (dragSource.value) {
    element.classList.remove('text-transparent', 'border-[#777777]');
    element.classList.add('border-transparent');
  }
};

const drop = (event: MouseEvent, element: HTMLElement) => {
  // console.log('drop', element, 'romanji', element.dataset.romanji, 'match romanji', draggingElement.value);
  if (element.dataset.romanji === draggingElement.value?.dataset.romanji) {
    correctCount.value += 1;
    if (dragSource.value && draggingElement.value) {
      dragSource.value.removeChild(draggingElement.value);
    }
    dragReset(element);
  } else {
    mistakeCount.value += 1;
    element.classList.add('bg-custom-red');
    setTimeout(() => {
      element.classList.remove('bg-custom-red');
    }, 500);
  }
};

const start = () => {
  active.value = true;
  started.value = new Date();
  timerCount.value = 0;

  // shuffle drop elements
  shuffle<HTMLElement>(dragElements.value);

  for (let index = 0; index < dragElements.value.length; index += 1) {
    dragSetup(dragElements.value[index]);
  }

  resume();
};

const reset = () => {
  active.value = false;
  while (dragSource.value && dragSource.value.firstChild) {
    dragSource.value.removeChild(dragSource.value.firstChild);
  }
  pause();
};

const stop = () => {
  active.value = false;
  for (let index = 0; index < dragElements.value.length; index += 1) {
    dragReset(dragElements.value[index]);
  }
  reset();
  pause();
};

watch(dragSourceElements, () => {
  console.log('drag elements changed:', dragSourceElements);
  for (let x = 0; x < dragSourceElements.value.length; x += 1) {
    const element = dragSourceElements.value[x];
    if (element?.parentElement) {
      // setup the drop, dragover event listeners
      element.parentElement?.addEventListener('drop', (event: MouseEvent) => drop(event, element));
      element.parentElement?.addEventListener('dragover', (event: MouseEvent) => event.preventDefault());

      dragElements.value.push(element);
    }
  }
});
</script>
<template>
  <div>
    <button ref="startBtn" class="border-custom-green hover:bg-custom-green hover:text-white" @click="start()">
      Start
    </button>
    <button
      v-if="active && !complete"
      ref="stopBtn"
      class="border-custom-red hover:bg-custom-red hover:text-white"
      @click="stop()"
    >
      Stop
    </button>
    <button
      v-if="complete"
      ref="resetBtn"
      class="border-custom-gray hover:bg-custom-gray hover:text-white"
      @click="reset()"
    >
      Reset
    </button>
    <div v-if="active" ref="mistakes" class="badge bg-custom-red w-8">{{ mistakeCount }}</div>
    <div v-if="active" ref="correct" class="badge bg-custom-green w-8">{{ correctCount }}</div>
    <span v-if="active" ref="timer">
      <span v-if="timerCount" class="float-right mt-1 text-custom-gray">{{
        `${timerCount + (timerCount > 1 ? ' seconds' : ' second')}`
      }}</span>
    </span>
    <h3 class="text-lg mt-4">
      {{ table.text }}<span class="text-sm text-custom-gray/50"> - {{ table.suffix }}</span>
    </h3>
    <table class="w-full text-white bg-black/70">
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="index" class="text-left p-2 border">
            {{ column.identifier }}
          </th>
          <th v-if="table.rows" class="text-center w-10 p-2 border"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td v-for="(column, index) in columns" :key="index" class="text-left p-2 border">
            <div v-for="(char, charIndex) in column.characters" :key="charIndex" class="h-8">
              <span v-if="char.symbol" :data-romanji="char.romanji">
                <span
                  ref="dragSourceElements"
                  class="transition-colors ease-in-out duration-200 text-2xl border border-dashed border-transparent"
                  :data-type="type"
                  :data-romanji="char.romanji"
                  :data-symbol="char.symbol"
                >
                  {{ char.symbol }}
                </span>
                <small class="text-sm text-white/70 ml-2">{{ char.romanji }}</small>
              </span>
              <template v-else>&nbsp;</template>
            </div>
          </td>
          <td v-if="table.rows" class="text-left p-2 pt-4 border">
            <small v-for="(row, index) in table.rows" :key="index" class="block text-2xl h-8">{{
              row.identifier
            }}</small>
          </td>
        </tr>
      </tbody>
    </table>
    <div ref="dragSource" class="text-2xl"></div>
  </div>
</template>

<style scoped>
small {
  @apply text-lg text-white opacity-60 ml-2;
}
button {
  @apply rounded-md border px-3 py-1 float-right ml-2 mb-2;
}
.badge {
  @apply rounded-md text-white font-bold float-right ml-2 mt-1 px-1 text-center;
}
</style>
