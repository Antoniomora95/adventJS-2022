// https://adventjs.dev/en/challenges/2022/7

function getGiftsToRefill(a1, a2, a3) {
    let store = {
        visited: {},
        refill: {}
    };
    const getReducer = function (currentLocation) {
        return function (store, gift) {
            const {visited, refill} = store;
            const giftExistsAt = visited[gift];
            if (giftExistsAt && giftExistsAt !== currentLocation) {
                delete refill[gift];
            } else {
                visited[gift] = currentLocation;
                refill[gift] = currentLocation;
            }
            return store;
        }
    }

    store = a1.reduce(getReducer('a1'), store);
    store = a2.reduce(getReducer('a2'), store);
    store = a3.reduce(getReducer('a3'), store);

    return Object.keys(store.refill);
}

const a1 = ['bike', 'car', 'bike', 'bike']
const a2 = ['car', 'bike', 'doll', 'car']
const a3 = ['bike', 'pc', 'pc']

console.log(getGiftsToRefill(a1, a2, a3));