/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 1) {
        return "";
    }

    let maxLength = 1; // A single character is always a palindrome
    let start = 0;

    // Helper function to expand around a center
    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLength) {
                maxLength = right - left + 1;
                start = left;
            }
            left--;
            right++;
        }
    };

    for (let i = 0; i < s.length; i++) {
        // Odd length palindromes (e.g., "aba")
        expandAroundCenter(i, i);

        // Even length palindromes (e.g., "abba")
        expandAroundCenter(i, i + 1);
    }

    return s.substring(start, start + maxLength);
};