<script lang="ts" setup>
import { hiraganaTables } from '../../constants/hiragana'
</script>

<template>
  <div>
    <CharacterTable v-for="(table, index) in hiraganaTables" :key="index" type="hiragana" :filter="table.id" />
  </div>
</template>

<style scoped></style>
