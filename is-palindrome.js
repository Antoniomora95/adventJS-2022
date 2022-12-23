// https://adventjs.dev/en/challenges/2022/8

function checkPart(part) {
    function reverseCopy(base) {
        return [...base].reverse();
    }
    let baseArray = part.toLowerCase().split('');
    let reverseArray = reverseCopy(baseArray);
    const equal = reverseArray.join('') === part;
    if (equal)
        return true;

    for (let i = 0; i < baseArray.length; i++) {
        const copyArray = [...baseArray];
        copyArray.splice(i, 1);

        const copyReverse = reverseCopy(copyArray);
        const isEqual = copyArray.join('') === copyReverse.join('');
        if (isEqual)
            return true;
    }
    return false;
}

const isPalindrome = checkPart("miidim"); // true
console.log(isPalindrome);

const isPalindrome2 = checkPart("zzzoonzzz"); // true
console.log(isPalindrome);