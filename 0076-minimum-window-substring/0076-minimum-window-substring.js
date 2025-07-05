/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (t.length === 0) {
        return "";
    }

    const tCharCounts = {};
    for (let char of t) {
        tCharCounts[char] = (tCharCounts[char] || 0) + 1;
    }

    let windowCharCounts = {};
    let matchedChars = 0; // Number of characters in t that are matched in the current window
    let minLength = Infinity;
    let minWindowStart = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        let charRight = s[right];
        windowCharCounts[charRight] = (windowCharCounts[charRight] || 0) + 1;

        if (tCharCounts[charRight] !== undefined && windowCharCounts[charRight] <= tCharCounts[charRight]) {
            matchedChars++;
        }

        while (matchedChars === t.length) {
            // Current window is valid, try to shrink it
            let currentWindowLength = right - left + 1;
            if (currentWindowLength < minLength) {
                minLength = currentWindowLength;
                minWindowStart = left;
            }

            let charLeft = s[left];
            windowCharCounts[charLeft]--;

            if (tCharCounts[charLeft] !== undefined && windowCharCounts[charLeft] < tCharCounts[charLeft]) {
                matchedChars--;
            }
            left++;
        }
    }

    if (minLength === Infinity) {
        return "";
    } else {
        return s.substring(minWindowStart, minWindowStart + minLength);
    }
};