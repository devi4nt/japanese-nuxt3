import { IRomanji } from '../interfaces/romanji';

export class Character {
  symbol: string;

  romanji?: keyof IRomanji;

  // eslint-disable-next-line no-use-before-define
  vowel?: Character;

  constructor(symbol: string, romanji?: keyof IRomanji) {
    this.symbol = symbol;
    this.romanji = romanji;
  }
}
