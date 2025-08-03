/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0;
    let sign = 1;
    let result = 0;
    const n = s.length;

    // 1. Ignore leading whitespace
    while (i < n && s[i] === ' ') {
        i++;
    }

    // Handle case with only whitespace
    if (i === n) {
        return 0;
    }

    // 2. Determine sign
    if (s[i] === '-') {
        sign = -1;
        i++;
    } else if (s[i] === '+') {
        i++;
    }

    // Define 32-bit integer bounds
    const MAX_INT = Math.pow(2, 31) - 1;
    const MIN_INT = -Math.pow(2, 31);

    // 3. Read digits and build the number
    while (i < n && s[i] >= '0' && s[i] <= '9') {
        const digit = s[i] - '0';

        // Check for overflow before adding the next digit
        if (sign === 1) {
            if (result > Math.floor(MAX_INT / 10) || (result === Math.floor(MAX_INT / 10) && digit > 7)) {
                return MAX_INT;
            }
        } else { // sign === -1
            // Use MAX_INT for comparison to handle the negative range correctly
            // The absolute value of MIN_INT is 2^31, while MAX_INT is 2^31-1.
            // When building the number positively, we need to compare against 2^31.
            // For simplicity, we can use MAX_INT/10 and handle the last digit check.
            if (result > Math.floor(MAX_INT / 10) || (result === Math.floor(MAX_INT / 10) && digit > 8)) {
                return MIN_INT;
            }
        }

        result = result * 10 + digit;
        i++;
    }

    // 4. Apply sign and return
    return result * sign;
};