<script lang="ts" setup>
import { commonAdjectives } from '../constants/adjectives'
</script>

<template>
  <NuxtLayout>
    <h3 class="text-lg">
      Adjectives
    </h3>
    <PhraseTable title="Common adjectives" :phrases="commonAdjectives" />
  </NuxtLayout>
</template>

<style scoped></style>
