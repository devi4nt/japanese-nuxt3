<script lang="ts" setup>
import { useNavigationStore } from '../stores/navigation.store';

const { hiraganaNavItem } = useNavigationStore();
</script>

<template>
  <NuxtLayout>
    <SubMenu :items="[hiraganaNavItem]" />
    <NuxtPage />
  </NuxtLayout>
</template>

<style scoped></style>
