// https://adventjs.dev/challenges/2022/22

function checkStepNumbers(systemNames, stepNumbers) {
    const c = new Map();
    for (let i = 0; i < systemNames.length; i++) {
      const key = systemNames[i];
      const num = stepNumbers[i];
      if (c.has(key) && c.get(key) >= num)
        return false;
      else 
        c.set(key, num);
    }   
    return true; 
  }



  const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"]
const stepNumbers = [1, 33, 10, 2, 44, 20]

console.log(checkStepNumbers(systemNames, stepNumbers)); // => true

// tree_1 has steps: [1, 2]
// tree_2 has steps: [33, 44]
// house has steps: [10, 20]

// true: The steps of each system are in strictly increasing order

console.log(checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10])) // => false

// tree_1 has steps: [2, 1]
// house has steps: [10]

// false: tree_1 has steps in decreasing order