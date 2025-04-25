/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completedCount = 0;
        const numFunctions = functions.length;

        if (numFunctions === 0) {
            resolve([]);
            return;
        }

        functions.forEach((func, index) => {
            func()
                .then((value) => {
                    results[index] = value;
                    completedCount++;
                    if (completedCount === numFunctions) {
                        resolve(results);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */