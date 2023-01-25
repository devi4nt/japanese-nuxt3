<script lang="ts" setup>
import { Kanji } from '../classes/Kanji'
import { Phrase } from '../classes/Phrase'

defineProps<{
  phrase: Phrase;
}>()
</script>

<template>
  <span>
    <span v-for="(symbol, index) in phrase.symbols" :key="index" class="text-2xl">{{ symbol.symbol }}</span>
  </span>
  <small>
    <span v-if="phrase.romanji" class="text-sm text-white/70 ml-2 mr-2">
      {{ phrase.romanji }}
    </span>
    <span v-else class="text-sm text-white/70 ml-2 mr-2">
      <template v-for="(subSymbol, subSymbolIndex) in phrase.symbols" :key="subSymbolIndex">
        <template v-if="subSymbol instanceof Kanji">
          <template v-for="(item, furiganaIndex) in subSymbol.furigana" :key="furiganaIndex">
            {{ item.romanji }}
          </template>
        </template>
        <template v-else>
          {{ subSymbol.romanji }}
        </template>
      </template>
    </span>
  </small>
</template>

<style scoped></style>
