/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const MAX_INT = 2147483647;
    const MIN_INT = -2147483648;

    let reversed = 0;
    let sign = x < 0 ? -1 : 1;
    let num = Math.abs(x);

    while (num > 0) {
        let digit = num % 10;

        if (reversed > MAX_INT / 10 || (reversed === Math.floor(MAX_INT / 10) && digit > 7)) {
            return 0;
        }
        
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }

    reversed *= sign;

    if (reversed < MIN_INT || reversed > MAX_INT) {
        return 0;
    }

    return reversed;
};