<script lang="ts" setup>
import { ref } from 'vue'

const year = ref(new Date().getFullYear())
</script>

<template>
  <div class="relative h-10">
    <div class="fixed bottom-0 left-0 right-0 w-full h-10 p-3 bg-black/50 text-white text-sm leading-none">
      &copy; <b>{{ year }}</b> - designed & built by
      <NuxtLink to="https://github.com/devi4nt" class="text-white/50 hover:text-white/80 hover:underline">
        devi4nt
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
