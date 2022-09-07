<script lang="ts" setup>
import { useNavigationStore } from '../stores/navigation.store';

const { navItems } = useNavigationStore();
</script>

<template>
  <NuxtLayout>
    <SubMenu :items="navItems" />
  </NuxtLayout>
</template>

<style scoped></style>
