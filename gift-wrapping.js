// https://adventjs.dev/en/challenges/2022/1

function wrapping(gifts) {
    return gifts.map(gft => {
      let symbol_ = '*';
      let giftWithSymbol = `${symbol_}${gft}${symbol_}`;
      let repeatSymbol = symbol_.repeat(gft.length+2);
      let res = `${repeatSymbol}\n${giftWithSymbol}\n${repeatSymbol}`;
      return res;
    });
}

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped);
