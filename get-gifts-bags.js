// https://adventjs.dev/en/challenges/2022/17

function carryGifts(gifts, maxWeight) {
    let groups = [];
    gifts = gifts.filter(g => g.length <= maxWeight);
    if (gifts.length < 1)
      return [];
    groups.push(gifts[0]);
    function canMerge(acc, curr, max) {
         acc = acc.replace(/\s/g, '');
        return (acc.length + curr.length) <= max;
    }
    for (let i = 1; i < gifts.length; i++) {
        const curr = gifts[i];
        const acc = groups[groups.length - 1];
        const merge = canMerge(acc, curr, maxWeight);
        if (merge) {
            let last = groups.pop();
            groups.push(`${last} ${curr}`);
        } else {
            groups.push(curr);
        }
    }
    return groups;
}

console.log(carryGifts(['game', 'bike', 'book', 'toy'], 10)); // ['game bike', 'book toy']
console.log(carryGifts(['game', 'bike', 'book', 'toy'], 7)) // ['game', 'bike', 'book toy']
console.log(carryGifts(['game', 'bike', 'book', 'toy'], 4)) // ['game', 'bike', 'book', 'toy']
console.log(carryGifts(['toy', 'gamme', 'toy', 'bike'], 6)) // ['toy', 'gamme', 'toy', 'bike']