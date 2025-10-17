/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let result = "";

    // The logic is similar to base conversion, but modified because the "digits" are 1-26 (A-Z)
    // instead of 0-25 (standard base-26).
    while (columnNumber > 0) {
        // Step 1: Adjust the number by -1. This effectively maps 1-26 to 0-25.
        columnNumber--; 

        // Step 2: Find the remainder (digit value from 0 to 25).
        const remainder = columnNumber % 26;

        // Step 3: Convert the remainder (0-25) to its corresponding character ('A'-'Z').
        // String.fromCharCode('A'.charCodeAt(0) + remainder) converts the 0-25 value.
        const char = String.fromCharCode('A'.charCodeAt(0) + remainder);

        // Step 4: Prepend the character to the result string (we're calculating LSB first).
        result = char + result;

        // Step 5: Update the number for the next iteration by integer division.
        columnNumber = Math.floor(columnNumber / 26);
    }

    return result;
};