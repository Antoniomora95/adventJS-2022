// https://adventjs.dev/en/challenges/2022/4

function fitsInOneBox(boxes) {
    boxes.sort((a, b) => a.l - b.l);
    let {l: lp, w: wp, h: hp} = boxes[0];
    for(let i = 1; i < boxes.length; i++) {
        const {l, w, h} = boxes[i];
        if (l <= lp || w <= wp || h <= hp)
            return false;
        lp = l, wp = w, hp = h;
    }
    return true;
}

console.log(fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 }
])) // true


const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
]

console.log(fitsInOneBox(boxes)) // false

const boxes2 = [
    { l: 1, w: 1, h: 1 },
    { l: 1, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
]

console.log(fitsInOneBox(boxes2))// true