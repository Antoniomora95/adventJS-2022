function printTable(gifts) {
    let above = '+'.repeat(19)+'\n';
    let below = '*'.repeat(19);
    const header = '| Gift | Quantity |\n';
    const content = gifts.map((gift) => {
        const { name, quantity } = gift;
        //here we have to add the lines.
        const template = `| ${name} | ${quantity} |\n`
        return template;
    });
    return above + header + content.join('') + below;
  }


  console.log(printTable([
    { name: 'Game', quantity: 2 },
    { name: 'Bike', quantity: 1 },
    { name: 'Book', quantity: 3 }
  ]));




console.log(new Date().toLocaleString());