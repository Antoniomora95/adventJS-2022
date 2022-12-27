function carryGifts(gifts, maxWeight) {
    let groups = [];
    gifts = gifts.filter(g => g.length <= maxWeight);
    function canMerge(acc, curr, max) {
        acc = acc.replaceAll(' ', '');
        return (acc.length + curr.length) <= max;
    }
    for (let i = 0; i < gifts.length; i++) {
        const curr = gifts[i];
        const acc = groups[groups.length - 1];
        const merge = canMerge(acc || '', curr, maxWeight);
        if (merge) {
            let last = groups.pop();
            const merged = last ? `${last} ${curr}` : curr;
            groups.push(merged);
        } else {
            groups.push(curr);
        }
    }
    return groups;
}