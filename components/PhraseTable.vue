<script lang="ts" setup>
import { Phrase } from '../classes/Phrase';

defineProps<{
  title: string;
  phrases: Phrase[];
}>();
</script>

<template>
  <div>
    <h4 class="mb-2">{{ title }}</h4>
    <table class="w-full text-white bg-black/70">
      <tbody>
        <tr
          v-for="(phrase, phraseIndex) in phrases"
          :key="phraseIndex"
          class="transition-colors ease-in-out duration-150 hover:bg-white/10"
        >
          <td class="p-2 w-1/2 border">
            <InlinePhrase :phrase="phrase" />
          </td>
          <td class="p-2 w-1/2 border">
            <template v-if="phrase.english?.length">
              <template v-for="(letter, index) in phrase.english" :key="index">
                {{ letter }}<template v-if="index !== phrase.english.length - 1">, </template>
              </template>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
