/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    const result = [];

    function flatten(currentArr, currentDepth) {
        for (const element of currentArr) {
            if (Array.isArray(element) && currentDepth < n) {
                flatten(element, currentDepth + 1);
            } else {
                result.push(element);
            }
        }
    }

    flatten(arr, 0);
    return result;
};