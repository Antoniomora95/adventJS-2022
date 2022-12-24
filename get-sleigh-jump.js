// https://adventjs.dev/en/challenges/2022/10
function checkJump(heights) {
    function reducer(path, _, i, h) {
        let curr = h[i];
        let last = h[i - 1];
        const subs = path.substring(path.length - 1);
        const up = '1';
        const down = '0';
        if (last !== undefined && curr > last && subs !== up)
            return path + up;
        else if (curr < last && subs !== down)
            return path + down;
        return path;
    }
    const res = heights.reduce(reducer, '');
    return res === '10';
}



const heights = [1, 3, 8, 5, 2]
console.log(checkJump(heights)); // true

/*
It's `true`.
The jump goes up-down.

    8 (highest point)
   ↗ ↘
  3   5
 ↗     ↘
1       2
*/

const heights2 = [1, 7, 3, 5]
console.log(checkJump(heights2)); // false

/*
It's `false`.
It goes up-down-up.

  7   5 
 ↗ ↘ ↗
1   3
*/