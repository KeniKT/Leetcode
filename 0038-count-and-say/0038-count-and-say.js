/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) {
        return "1";
    }

    // Recursive call to get the previous string in the sequence
    let prevString = countAndSay(n - 1);
    let result = "";
    let count = 0;

    // Iterate through the previous string to perform run-length encoding
    for (let i = 0; i < prevString.length; i++) {
        count++;
        // If it's the last character OR the next character is different
        if (i + 1 === prevString.length || prevString[i] !== prevString[i + 1]) {
            result += count.toString() + prevString[i];
            count = 0; // Reset count for the next run
        }
    }
    return result;
};