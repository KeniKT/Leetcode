/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    const n = s.length;

    for (let i = 0; i < n; i++) {
        const currentValue = romanMap[s[i]];
        // If there's a next character and current value is less than the next value
        if (i < n - 1 && currentValue < romanMap[s[i + 1]]) {
            total -= currentValue; // Subtract
        } else {
            total += currentValue; // Add
        }
    }

    return total;
};