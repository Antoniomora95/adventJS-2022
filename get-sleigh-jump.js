// https://adventjs.dev/en/challenges/2022/10

function checkJump(heights) {
  
    let last = heights[0];
    let path = '';
    for (let i = 1; i < heights.length; i++) {
      const now = heights[i];
      if (now > last) {
        path = `${path}1`;
      } else if (now < last) {
        path = `${path}0`
      }
      last = now;
    }
    // increase score from 10 to 40 thanks to
    /*https://stackoverflow.com/questions/55636593/remove-consecutive-duplicate-characters-in-a-string-javascript */
    const clean = path.replace(/(.)\1+/g, '$1')
    return clean === '10';
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