import { Phrase } from '../classes/Phrase';
import { hiragana } from './hiragana';

export const usefulPhrases: Phrase[] = [
  new Phrase([hiragana.ha, hiragana.i], undefined, ['yes', 'right', 'ok']),
  new Phrase([hiragana.i, hiragana.i, hiragana.e], undefined, ['no']),
  new Phrase([hiragana.su, hiragana.me, hiragana.ma, hiragana.se, hiragana.n], undefined, ['excuse me']),
  new Phrase([hiragana.go, hiragana.me, hiragana.n, hiragana.na, hiragana.sa, hiragana.i], "gomen'nasai", ['sorry']),
  new Phrase([hiragana.do, hiragana.zo], undefined, ['go ahead', 'after you']),
  new Phrase([hiragana.do, hiragana.mo], undefined, ['thanks']),
  new Phrase([hiragana.a, hiragana.ri, hiragana.ga, hiragana.to, hiragana.u], 'arigatō', ['thank you']),
  new Phrase(
    [hiragana.do, hiragana.mo, hiragana.a, hiragana.ri, hiragana.ga, hiragana.to, hiragana.u],
    'domo arigatō',
    ['thank you very much']
  ),
  new Phrase(
    [hiragana.o, hiragana.ha, hiragana.yo, hiragana.u, hiragana.go, hiragana.za, hiragana.i, hiragana.ma, hiragana.su],
    'ohayou gozaimasu',
    ['good morning']
  ),
  new Phrase([hiragana.ko, hiragana.n, hiragana.ni, hiragana.chi, hiragana.wa], 'konnichiwa', [
    'good day',
    'good afternoon',
  ]),
  new Phrase([hiragana.o, hiragana.ya, hiragana.su, hiragana.mi, hiragana.na, hiragana.sa, hiragana.i], undefined, [
    'good night',
  ]),
  new Phrase([hiragana.ko, hiragana.n, hiragana.ba, hiragana.n, hiragana.wa], 'konbanwa', ['good evening']),
  new Phrase([hiragana.sa, hiragana.yo, hiragana.u, hiragana.na, hiragana.ra], 'sayounara', ['good bye']),
];
