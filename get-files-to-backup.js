// https://adventjs.dev/challenges/2022/13

function getFilesToBackup(lastBackup, changes) {
    const getReducer = (lastBackup) => {
        return (uniques, c) => {
            const [id, date] = c;
            if (date > lastBackup)
               uniques.add(id);
            return uniques;
        }
    }
    const res = changes.reduce(getReducer(lastBackup), new Set());
    return [...res].sort((a, b) => a - b);
}


const lastBackup = 1546300800

const changes = [
    [3, 1546301100],
    [2, 1546300800],
    [1, 1546300800],
    [1, 1546300900],
    [1, 1546301000]
]

console.log(getFilesToBackup(lastBackup, changes), 'res');