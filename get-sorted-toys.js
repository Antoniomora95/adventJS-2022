function sortToys(toys, positions) {
    const swiped = new Array(toys.length);
    const min = Math.min(...positions);
    toys.forEach((toy, i) => {
        const idx = positions[i] - min;
        swiped[idx] = toy;
    });
    return swiped;
}


const toys = ['ball', 'doll', 'car', 'puzzle']
const positions = [2, 3, 1, 0]

console.log(sortToys(toys, positions));
// ['puzzle', 'car', 'ball', 'doll']

const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo']
const morePositions = [8, 6, 5, 7, 9]

console.log(sortToys(moreToys, morePositions));
// ['ps4', 'xbox', 'switch', 'pc', 'nintendo']