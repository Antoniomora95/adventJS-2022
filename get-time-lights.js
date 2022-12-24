function countTime(leds) {
    let time = 0;
    let missingLeds = leds.filter(led => led !== 1).length;
    if (missingLeds === 0)
        return time;
    let strLeds = leds.join('');
    while (strLeds.indexOf('0') !== -1) {
        time += 1;
        let localLeds = strLeds.charAt(strLeds.length - 1) + strLeds;
        const replacedLeds = localLeds.replaceAll('10', '11');
        const restoredLeds = replacedLeds.substring(1);
        strLeds = restoredLeds;
    }
    return time * 7;
}

const leds = [0, 1, 1, 0, 1]
console.log(countTime(leds), 'result'); // 7
// 7 seconds because in the first change
// all the lights turned on
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]