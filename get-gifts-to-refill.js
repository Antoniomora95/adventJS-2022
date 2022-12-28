// https://adventjs.dev/en/challenges/2022/7

function getGiftsToRefill(a1, a2, a3) {
    let state = {
        unique: new Set(a1),
        ignore: new Set()
    }
    a2 = [...new Set(a2)];
    a3 = [...new Set(a3)];

    const getReducer = function () {
        return function (state, gift) {
            const {unique, ignore} = state;
            const notUnique = unique.has(gift);
            const isIgnored = ignore.has(gift);
            if (notUnique) {
                unique.delete(gift);
                ignore.add(gift);
            } else if (!notUnique && !isIgnored) {
                unique.add(gift);
            }
            return state;
        }
    }

    state = a2.reduce(getReducer(), state);
    state = a3.reduce(getReducer(), state);
    return [...state.unique];
}

const a1 = ['bike', 'car', 'bike', 'bike']
const a2 = ['car', 'bike', 'doll', 'car']
const a3 = ['bike', 'pc', 'pc']

console.log(getGiftsToRefill(a1, a2, a3));
