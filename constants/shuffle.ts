/**
 * mixes up the elements of an array in place
 *
 * @param array the array we wish to shuffle
 * @returns shuffled array (technically not required, since the array is modified in place)
 */
export const shuffle = <T>(array: T[]): T[] => {
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    // eslint-disable-next-line no-plusplus
    currentIndex--;

    // And swap it with the current element.
    // eslint-disable-next-line no-param-reassign
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};
