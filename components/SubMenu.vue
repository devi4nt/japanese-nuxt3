<script lang="ts" setup>
import { INav } from '../interfaces/nav'

defineProps<{
  items: INav[];
}>()
</script>

<template>
  <ul v-for="(item, index) in items" :key="index">
    <li class="pr-10">
      <h2 class="text-black/50 font-bold">
        <NuxtLink :to="item.url">
          {{ item.text }}
        </NuxtLink>
      </h2>
    </li>
    <li v-for="(subItem, subIndex) in item.items" :key="subIndex" class="pl-4">
      <NuxtLink :to="subItem.url" class="text-black/50 hover:text-black/90">
        {{ subItem.text }}<small v-if="subItem.suffix" class="text-sm"> - {{ subItem.suffix }}</small>
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped></style>
