
const data = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
}

const NTH_ELEMENT_END = 2;


const removeNthFromEnd = (head, n) => {
    const getDigitsFromObject = (linkedList, digitsList) => {
      if (!linkedList) {
          return;
      }
      const {val, next} = linkedList;
      digitsList.push(val);
      getDigitsFromObject(next, digitsList);
      return digitsList;
    }
  
    const allDigits = getDigitsFromObject(head, []);
  
    const realNthIndex =  n * -1;
    allDigits.splice(realNthIndex, 1);
  
    if (allDigits.length < 1) {
      return null;
    }
  
    const getLinkedListFromArray = (arrayDigits) => {
        const baseNode = {
            val: null,
            next: null
        }
        const buildNestedList = (list, idx) => {
            const val = list[idx];
            const head = {...baseNode};
            head.val = val;
            
            const i = idx + 1;
            if (i <= list.length - 1) {
                head.next = buildNestedList(list, i);
            }
            return head;
        }
        return buildNestedList(arrayDigits, 0);
    }
    const response = getLinkedListFromArray(allDigits);
  
    return response;
  };

console.log(removeNthFromEnd(data, NTH_ELEMENT_END), 'removeNthFromEnd');