/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    const result = [];
    let intervalId;

    const executeAndLog = () => {
        const returned = fn(...args);
        const time = Math.floor(performance.now() - start);
        result.push({"time": time, "returned": returned});
    };

    const start = performance.now();
    executeAndLog();

    intervalId = setInterval(executeAndLog, t);

    const cancelFn = () => {
        clearInterval(intervalId);
    };

    return cancelFn;
};