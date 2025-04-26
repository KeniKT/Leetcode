var cancellable = function(fn, args, t) {
    let timeoutId;
    const result = [];  // optional, for tracking

    timeoutId = setTimeout(() => {
        const returnedValue = fn(...args);
        result.push({ "time": t, "returned": returnedValue });
    }, t);

    const cancelFn = () => {
        clearTimeout(timeoutId);
    };

    return cancelFn;
};
