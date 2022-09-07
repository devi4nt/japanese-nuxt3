import { defineStore } from 'pinia';
import { ref, Ref } from 'vue';
import { hiraganaNavItems } from '../constants/hiragana';
import { katakanaNavItems } from '../constants/katakana';
import { INav } from '../interfaces/nav';

export const useNavigationStore = defineStore('navigation', () => {
  const hiraganaNavItem: Ref<INav> = ref({
    text: 'Hiragana',
    url: '/hiragana',
    items: hiraganaNavItems,
  });

  const katakanaNavItem: Ref<INav> = ref({
    text: 'Katakana',
    url: '/katakana',
    items: katakanaNavItems,
  });

  const navItems: Ref<INav[]> = ref([
    hiraganaNavItem.value,
    katakanaNavItem.value,
    { text: 'Numbers', url: '/numbers', items: [] },
    { text: 'Words', url: '/words', items: [] },
    { text: 'Verbs', url: '/verbs', items: [] },
    { text: 'Adjectives', url: '/adjectives', items: [] },
  ]);

  return {
    navItems,
    hiraganaNavItem,
    katakanaNavItem,
  };
});
