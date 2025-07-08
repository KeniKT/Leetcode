/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) {
        return 1;
    }

    // Handle negative exponents
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    let result = 1;
    while (n > 0) {
        // If n is odd, multiply x with result
        if (n % 2 === 1) {
            result *= x;
        }
        // Square x
        x *= x;
        // Divide n by 2 (integer division)
        n = Math.floor(n / 2);
    }

    return result;
};