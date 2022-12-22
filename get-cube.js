// https://adventjs.dev/en/challenges/2022/6
function createCube(size) {
    function addOffset(amount) {
      return String.fromCharCode(32).repeat(amount);
    }
    function reducer (template, row, idx, arr) {
      template+=row;
      return idx < arr.length - 1 ? template + '\n' : template;
    }
  
    let rowsCube = [];
    const basePattern = '_\\'.repeat(size);
    for(let row = 0; row < size; row++) {
      let incrementalPattern = '/\\'.repeat(row + 1);
      let completePattern = incrementalPattern + basePattern;
      const spaces = size - (row + 1);
      const offset = addOffset(spaces);
      completePattern = `${offset}${completePattern}`
      rowsCube.push(completePattern);
    }
  
    const basePatternInverse = '_/'.repeat(size);
    for(let row = size; row > 0; row--) {
      let incrementalPattern = '\\/'.repeat(row);
      let completePattern = incrementalPattern + basePatternInverse;
      const spaces = size - row;
      const offset = addOffset(spaces);
      completePattern = `${offset}${completePattern}`
      rowsCube.push(completePattern);
    }
    
    return rowsCube.reduce(reducer,``);
  }



  const cube = createCube(20);
  console.error(cube);

// output:
//   /\_\_\_\
//  /\/\_\_\_\
// /\/\/\_\_\_\
// \/\/\/_/_/_/
//  \/\/_/_/_/
//   \/_/_/_/


const cubeOfOne = createCube(1);
console.log(cubeOfOne);

// output:
// /\_\
// \/_/

const cubeOfTwo = createCube(2);
console.log(cubeOfTwo);

// output:
//  /\_\_\
// /\/\_\_\
// \/\/_/_/
//  \/_/_/