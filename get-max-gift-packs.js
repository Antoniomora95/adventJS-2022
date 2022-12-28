// https://adventjs.dev/en/challenges/2022/3

function distributeGifts(packOfGifts, reindeers) {
  const w = packOfGifts.join('').length;
  const c = reindeers.join('').length * 2;
  return Math.floor(c/w);
}


const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]