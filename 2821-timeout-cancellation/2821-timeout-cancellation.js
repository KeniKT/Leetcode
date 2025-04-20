/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    let timeoutId;
    let hasBeenCancelled = false;
    const result = [];

    timeoutId = setTimeout(() => {
        if (!hasBeenCancelled) {
            const returnedValue = fn(...args);
            result.push({"time": t, "returned": returnedValue});
        }
    }, t);

    const cancelFn = () => {
        clearTimeout(timeoutId);
        hasBeenCancelled = true;
    };

    return cancelFn;
};