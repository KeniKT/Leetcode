/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagrams = new Map();

    for (const str of strs) {
        // Create the canonical key by sorting the string
        const sortedStr = str.split('').sort().join('');

        // If the key exists, push the current string to its value array
        if (anagrams.has(sortedStr)) {
            anagrams.get(sortedStr).push(str);
        } else {
            // Otherwise, create a new entry with the key and a new array
            anagrams.set(sortedStr, [str]);
        }
    }

    // Return the values of the map, which are the grouped arrays
    return Array.from(anagrams.values());
};