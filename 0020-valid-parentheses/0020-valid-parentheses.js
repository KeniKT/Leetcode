/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (map[char]) { // If it's a closing bracket
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        } else { // If it's an opening bracket
            stack.push(char);
        }
    }

    return stack.length === 0;
};