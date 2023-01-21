
const memo = {
    '0': 0,
    '1': 1,
    '2': 1
};
const start = new Date().getTime();
function getFibonacciNumber (num, memo) {
    if (num in memo) {
        return memo[num];
    }
    const res = getFibonacciNumber(num -1, memo) + getFibonacciNumber(num - 2, memo);
    memo[num] = res;
    console.log('unique', {num1: num -1, num2: num-2, res});
    return res;
}

console.log(getFibonacciNumber(23, memo));
const end = new Date().getTime();
console.log(end - start, 'milisec');

// const start = new Date().getTime();
// function getFibonacciNumber2 (num) {
//     if (num <= 2)
//         return 1;
//     const res = getFibonacciNumber2(num -1) + getFibonacciNumber2(num - 2);
//     console.log('repetead', {num1: num -1, num2: num-2, res});
//     return res;
// }
// console.log(getFibonacciNumber2(23));
// const end = new Date().getTime();
// console.log(end - start, 'milisec');

// function fibonacci(n) {
//     let cache = {};
//     function calcFib(n) {
//       if (n in cache) {
//         return cache[n];
//       }
//       if (n <= 2) {
//         return 1;
//       }
//       let fib = calcFib(n - 1) + calcFib(n - 2);
//       cache[n] = fib;
//       return fib;
//     }
//     return calcFib(n);
//   }



// console.log(fibonacci(9));