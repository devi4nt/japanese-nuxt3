<script lang="ts" setup>
import { numbers } from '../constants/numbers'
</script>

<template>
  <NuxtLayout>
    <h2 class="text-lg">
      Numbers
    </h2>
    <NumberTable title="" :numbers="numbers" />
  </NuxtLayout>
</template>

<style scoped></style>
