<script lang="ts" setup>
import { useNavigationStore } from '../stores/navigation.store'

const { katakanaNavItem } = useNavigationStore()
</script>

<template>
  <NuxtLayout>
    <SubMenu :items="[katakanaNavItem]" />
    <NuxtPage />
  </NuxtLayout>
</template>

<style scoped></style>
