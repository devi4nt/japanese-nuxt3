<script lang="ts" setup>
import { JapaneseNumber } from '../classes/JapaneseNumber';

defineProps<{
  title: string;
  numbers: JapaneseNumber[];
}>();
</script>

<template>
  <h4 class="mb-2">{{ title }}</h4>
  <table class="w-full text-white bg-black/70">
    <thead>
      <tr>
        <th class="text-left p-2 w-auto border">#</th>
        <th class="text-left p-2 w-1/4 border">Kanji</th>
        <th class="text-left p-2 w-1/4 border">Sino Japanese</th>
        <th class="text-left p-2 w-1/4 border">Kanji</th>
        <th class="text-left p-2 w-1/4 border">Native Japanese</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(number, numberIndex) in numbers"
        :key="numberIndex"
        class="transition-colors ease-in-out duration-150 hover:bg-white/10"
      >
        <td class="p-2 w-auto border">{{ number.decimal }}</td>
        <td class="p-2 w-1/4 border text-2xl">{{ number.sinoKanji.symbol }}</td>
        <td class="p-2 w-1/4 border">
          <InlinePhrase v-for="(phrase, index) in number.sinoPhrases" :key="index" :phrase="phrase" />
        </td>
        <td class="p-2 w-1/4 border">{{ number.nativeKanji?.symbol || '' }}</td>
        <td class="p-2 w-1/4 border">
          <InlinePhrase v-for="(phrase, index) in number.nativePhrases" :key="index" :phrase="phrase" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
