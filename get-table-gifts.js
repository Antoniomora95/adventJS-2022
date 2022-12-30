function printTable(gifts) {
    let left = 0;
    let right = 0;
    // GiftQuantity = 11
    gifts.unshift({ name: 'Gift', quantity: 'Quantity' });

    for (let i = 0; i < gifts.length; i++) {
        let l = gifts[i].name.length;
        let r = gifts[i].quantity.toString().length;
        if (l > left)
            left = l;
        if (r > right)
            right = r;
    }
    let above = '+'.repeat(19 + (left - 4) + (right - 8)) + '\n';
    let below = '*'.repeat(19 + (left - 4) + (right - 8));

    const lineLeft = '-'.repeat(left);
    const lineRight = '-'.repeat(right);
    gifts.splice(1, 0, { name: lineLeft, quantity: lineRight });


    const getMissingOffset = ({ left, right, name, quantity }) => {
        const cl = left - name.length;
        const cr = right - quantity.toString().length;
        const ml = ' '.repeat(cl);
        const mr = ' '.repeat(cr);
        return {
            ml,
            mr
        }
    }

    const content = gifts.map((gift) => {
        const { name, quantity } = gift;
        const { ml, mr } = getMissingOffset({ left, right, name, quantity })
        const template = `| ${name}${ml} | ${quantity}${mr} |\n`
        return template;
    });
    return above + content.join('') + below;
}

const gifts = [
    { name: 'PlayStation 5', quantity: 9234782374892 },
    { name: 'Book Learn Web Dev', quantity: 23531 }
]

console.log(printTable(gifts));

console.log(printTable([
    { name: 'Game', quantity: 2 },
    { name: 'Bike', quantity: 1 },
    { name: 'Book', quantity: 3 }
]));




console.log(new Date().toLocaleString());

// ++++++++++++++++++++++++++++++++++++++
// | Gift               | Quantity      |
// | ------------------ | ------------- |
// | PlayStation 5      | 9234782374892 |
// | Book Learn Web Dev | 23531         |
// **************************************