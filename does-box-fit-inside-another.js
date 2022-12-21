// https://adventjs.dev/en/challenges/2022/4

function fitsInOneBox(boxes) {
    function callback(mapBoxes, box) {
        return mapBoxes.has(box.l) ? mapBoxes : mapBoxes.set(box.l, box);
    }

    const mapBoxes = boxes.reduce(callback, new Map());

    if (boxes.length !== mapBoxes.size)
        return false;

    let length = null;
    let width = null;
    let height = null;
    let doesBoxFit = true;
    while (mapBoxes.size && doesBoxFit) {
        let key = Math.min(...mapBoxes.keys())
        let { l, w, h } = mapBoxes.get(key);
        if (l > length && w > width && h > height) {
            length = l;
            width = w;
            height = h;
        } else {
            doesBoxFit = false;
        }
        mapBoxes.delete(key);
    }
    return doesBoxFit;
}

console.log(fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 }
  ])) // true


  const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
  ]

  console.log(fitsInOneBox(boxes)) // false

  const boxes2 = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
  ]
  
console.log(fitsInOneBox(boxes2))// true