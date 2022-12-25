// https://adventjs.dev/en/challenges/2022/12
function selectSleigh(distance, sleighs) {
    let best = null;
    for (let s of sleighs) {
        const { name, consumption } = s;
        const t = consumption * distance;
        if (t > 20)
            break;
        best = name;
    }
    return best;
}


const distance = 30
const sleighs = [
    { name: "Gorusuke", consumption: 0.3 },
    { name: "Madeval", consumption: 0.5 },
    { name: "Lolivier", consumption: 0.7 },
    { name: "Hyuuh", consumption: 1 }
]

console.log(selectSleigh(distance, sleighs)); // => "Madeval"