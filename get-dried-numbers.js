// https://adventjs.dev/en/challenges/2022/18
function dryNumber(dry, numbers) {
    let missing = [];
    const dried = dry.toString();
    for (let i = 1; i <= numbers; i++) {
        let curr = i.toString();
        curr.includes(dried) && missing.push(i);
    }
    return missing;
}
console.log(dryNumber(1, 15)) // [1, 10, 11, 12, 13, 14, 15]

// we don't have ink for the number 1
// we have to print 15 barcodes from 1 to 15
// the barcodes that will be wrong because of the lack of ink are:
// 1, 10, 11, 12, 13, 14, 15

console.log(dryNumber(2, 20)) // [2, 12, 20]