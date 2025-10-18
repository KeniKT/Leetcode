/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let result = 0;
    const A_CHAR_CODE = 'A'.charCodeAt(0);

    // Iterate through the string from left to right
    for (let i = 0; i < columnTitle.length; i++) {
        const char = columnTitle[i];
        
        // 1. Calculate the value of the current character (A=1, B=2, ..., Z=26)
        // char.charCodeAt(0) gives the ASCII value of the character.
        // Subtracting 'A's ASCII value gives 0 for 'A', 1 for 'B', etc.
        // Adding 1 adjusts it to the desired 1-based value.
        const charValue = char.charCodeAt(0) - A_CHAR_CODE + 1;
        
        // 2. Update the result:
        // Multiplying the current result by 26 shifts it one "place" to the left 
        // in the base-26 system, similar to multiplying by 10 in base-10.
        // Then, we add the value of the new character.
        result = result * 26 + charValue;
    }

    return result;
};