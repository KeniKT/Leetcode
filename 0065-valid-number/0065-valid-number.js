/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    let hasE = false;
    let hasDot = false;
    let hasDigits = false;

    // Trim leading/trailing whitespace
    s = s.trim();

    if (s.length === 0) {
        return false;
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char >= '0' && char <= '9') {
            hasDigits = true;
        } else if (char === '+' || char === '-') {
            // A sign is valid only at the start or after an exponent
            if (i > 0 && s[i - 1] !== 'e' && s[i - 1] !== 'E') {
                return false;
            }
        } else if (char === '.') {
            // A dot is valid only if we haven't seen one and haven't seen an exponent
            if (hasDot || hasE) {
                return false;
            }
            hasDot = true;
        } else if (char === 'e' || char === 'E') {
            // An exponent is valid only if we have seen digits and haven't seen an exponent yet
            if (hasE || !hasDigits) {
                return false;
            }
            hasE = true;
            // The part after 'e' must have digits, so reset the flag
            hasDigits = false;
        } else {
            // Any other character is invalid
            return false;
        }
    }

    // The number is valid only if it ends with a digit
    return hasDigits;
};