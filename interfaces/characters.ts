import { Character } from '../classes/Character';
import { Hiragana } from '../classes/Hiragana';
import { Katakana } from '../classes/Katakana';

export type CharacterType = 'hiragana' | 'katakana';
export type CharacterFilter = 'monographs' | 'digraphs' | 'diacritics' | 'digraphs-diacritics';

export interface ICharacterGroup {
  identifier: string;
  filter?: RegExp;
  romanji?: string;
  vowel?: Hiragana | Katakana;
}

export interface ICharacterGroupData {
  identifier: string;
  characters: Character[];
}

export interface ICharacterTable {
  id: CharacterFilter;
  text: string;
  url: string;
  suffix: string;
  characters: Hiragana[] | Katakana[];
  columns: ICharacterGroup[];
  rows: ICharacterGroup[];
}
