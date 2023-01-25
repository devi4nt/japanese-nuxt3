<script lang="ts" setup>
import { commonVerbs } from '../constants/verbs'
</script>

<template>
  <NuxtLayout>
    <h3 class="text-lg">
      Verbs
    </h3>
    <PhraseTable title="Common verbs" :phrases="commonVerbs" />
  </NuxtLayout>
</template>

<style scoped></style>
