function decorateTree(base) {
    function getChars(str) {
        let res = '';
        for (let j = 0; j < str.length - 1; j++) {
            let a = str.charCodeAt(j);
            let b = str.charCodeAt(j + 1);
            if (a === b)
                res += String.fromCharCode(a);
            else res += String.fromCharCode(228 - (a + b));
        }
        return res.split('').join(' ');
    }
    const arrStr = [];
    arrStr.push(base);
    const baseL = base.replaceAll(' ', '').length;
    for (let i = 0; i < baseL - 1; i++) {
        let c = arrStr[i];
        let r = getChars(c.replaceAll(' ', ''));
        arrStr.push(r);
    }
    return arrStr.reverse();
}

console.log(decorateTree('B B P R P R R'));


//console.log(decorateTree('B P R P'));
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

//console.log(decorateTree('B B'));
// ['B', 'B B']

let b = 'B';
let p = 'P';
let r = 'R';
let lower = 'b'
console.log(b.charCodeAt(0) + p.charCodeAt(0) + r.charCodeAt(0), lower.charCodeAt(0))
console.log(b.charCodeAt(0))
console.log(p.charCodeAt(0))
console.log(r.charCodeAt(0))
