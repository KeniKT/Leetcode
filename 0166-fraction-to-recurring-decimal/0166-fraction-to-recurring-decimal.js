/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    // Handle the case where the numerator is 0
    if (numerator === 0) {
        return "0";
    }

    // Determine the sign of the result
    const sign = (numerator < 0) ^ (denominator < 0) ? "-" : "";

    // Work with absolute values for the long division process
    let num = Math.abs(numerator);
    let den = Math.abs(denominator);

    // Part 1: Integer part
    let integerPart = Math.floor(num / den);
    let result = sign + integerPart.toString();

    // Calculate the initial remainder
    let remainder = num % den;

    // If the remainder is 0, it's a terminating decimal
    if (remainder === 0) {
        return result;
    }

    // Start of the fractional part
    result += ".";

    // Map to store remainders and their corresponding position in the fractional part
    // The position is relative to the start of the fractional part (i.e., after the '.')
    // Key: remainder, Value: index in the 'fractionalPart' string
    const remainderMap = new Map();
    let fractionalPart = "";
    let index = 0;

    // Part 2: Fractional part simulation
    while (remainder !== 0) {
        // If this remainder has been seen before, a repeating block is found
        if (remainderMap.has(remainder)) {
            const repeatingStartIndex = remainderMap.get(remainder);

            // Split the fractional part into non-repeating and repeating parts
            const nonRepeating = fractionalPart.substring(0, repeatingStartIndex);
            const repeating = fractionalPart.substring(repeatingStartIndex);

            // Construct the final result with parentheses
            return sign + integerPart + "." + nonRepeating + "(" + repeating + ")";
        }

        // Store the current remainder and its index before the division step
        remainderMap.set(remainder, index);

        // Multiply the remainder by 10 to simulate bringing down a zero
        remainder *= 10;

        // Calculate the next digit
        const digit = Math.floor(remainder / den);
        fractionalPart += digit.toString();

        // Calculate the new remainder
        remainder %= den;

        // Move to the next position
        index++;
    }

    // If the loop finishes because remainder is 0, it's a terminating decimal
    return result + fractionalPart;
};