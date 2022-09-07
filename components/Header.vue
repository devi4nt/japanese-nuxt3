<script lang="ts" setup>
import { useNavigationStore } from '../stores/navigation.store';

const { navItems } = useNavigationStore();
</script>

<template>
  <div class="relative h-14">
    <div class="fixed top-0 left-0 right-0 w-full h-14 overflow-hidden p-4 bg-custom-gray/95">
      <ul class="h-7 overflow-hidden">
        <li class="pr-10">
          <h1 class="text-white font-bold">
            <NuxtLink to="/">Japanese</NuxtLink>
          </h1>
        </li>
        <li v-for="(item, index) in navItems" :key="index" class="pl-4">
          <NuxtLink :to="item.url" class="text-white/50 hover:text-white/80 hover:underline">
            {{ item.text }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
li {
  @apply inline-block;
}
</style>
