<script lang="ts" setup>
import { usefulPhrases } from '../constants/phrases';
import { colours } from '../constants/colours';
import { months } from '../constants/months';
import { days } from '../constants/days';
import { seasons } from '../constants/seasons';
</script>

<template>
  <NuxtLayout>
    <h2 class="text-lg">Words</h2>
    <PhraseTable title="Useful phrases" :phrases="usefulPhrases"></PhraseTable>
    <PhraseTable title="Colours" :phrases="colours" class="mt-4"></PhraseTable>
    <PhraseTable title="Months" :phrases="months" class="mt-4"></PhraseTable>
    <PhraseTable title="Days" :phrases="days" class="mt-4"></PhraseTable>
    <PhraseTable title="Seasons" :phrases="seasons" class="mt-4"></PhraseTable>
  </NuxtLayout>
</template>

<style scoped></style>
