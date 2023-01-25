<script lang="ts" setup>
import { katakanaTables } from '../../constants/katakana'
</script>

<template>
  <div>
    <CharacterTable v-for="(table, index) in katakanaTables" :key="index" type="katakana" :filter="table.id" />
  </div>
</template>

<style scoped></style>
