import { IRomanji } from '../interfaces/romanji';
import { Character } from './Character';

export class Furigana extends Character {
  // eslint-disable-next-line no-useless-constructor
  constructor(symbol: string, romanji: keyof IRomanji) {
    super(symbol, romanji);
  }
}
