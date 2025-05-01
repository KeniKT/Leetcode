/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const mergedMap = new Map();

    for (const obj of arr1) {
        mergedMap.set(obj.id, { ...obj });
    }

    for (const obj of arr2) {
        const existingObj = mergedMap.get(obj.id);
        if (existingObj) {
            mergedMap.set(obj.id, { ...existingObj, ...obj });
        } else {
            mergedMap.set(obj.id, { ...obj });
        }
    }

    const joinedArray = Array.from(mergedMap.values());
    joinedArray.sort((a, b) => a.id - b.id);

    return joinedArray;
};