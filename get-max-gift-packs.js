// https://adventjs.dev/en/challenges/2022/3
function distributeGifts(packOfGifts, reindeers) {
    const packWeightFn = (totalWeight, weight) => totalWeight + weight.length;
    const reindeersCapacityFn = (capacity, reindeer) => ((reindeer.length * 2) + capacity);
  
    const packWeight = packOfGifts.reduce(packWeightFn, 0);
    const reeindersCapacity = reindeers.reduce(reindeersCapacityFn, 0);
    return Math.floor(reeindersCapacity / packWeight);
  }

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24
console.log(distributeGifts(packOfGifts, reindeers)); // 2