function decorateTree(base) {
    const p = { 'BB': 'B', 'BP': 'R', 'BR': 'P', 'RP': 'B', 'PB': 'R', 'RB': 'P', 'PR': 'B' };
    const arrStr = [];
    arrStr.unshift(base);
    const baseLength = base.replaceAll(' ', '').length;
    for (let i = 0; i < baseLength - 1; i++) {
        const iterationsNeeded = (baseLength - 1) - i;
        let c = arrStr[0];
        c = c.replaceAll(' ', '');
        let r = '';
        for (let j = 0; j < iterationsNeeded; j++) {
            let k = c.charAt(j) + c.charAt(j + 1);
            r += p[k] ?? c.charAt(j);
        }
        r = r.split('').join(' ');
        arrStr.unshift(r);
    }
    return arrStr;
}

console.log(decorateTree('B B P R P R R'));


console.log(decorateTree('B P R P'));
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

console.log(decorateTree('B B'));
 // ['B', 'B B']