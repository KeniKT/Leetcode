/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let currentValue = n;
    return function() {
        const result = currentValue;
        currentValue ++ ;
        return result; 
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */