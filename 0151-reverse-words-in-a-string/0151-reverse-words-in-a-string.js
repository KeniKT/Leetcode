/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // 1. Trim leading/trailing spaces and split the string by one or more spaces
    const words = s.trim().split(/\s+/);

    // 2. Reverse the array of words
    words.reverse();

    // 3. Join the words back together with a single space
    return words.join(' ');
};