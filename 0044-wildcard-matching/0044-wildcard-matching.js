/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const sLen = s.length;
    const pLen = p.length;

    // dp[i][j] will be true if the first i characters of s match the first j characters of p
    const dp = Array(sLen + 1).fill(null).map(() => Array(pLen + 1).fill(false));

    // Base case: empty string matches empty pattern
    dp[0][0] = true;

    // Handle patterns with '*' at the beginning, e.g., "*", "**", "*a*"
    // An empty string can match a pattern of only '*'s
    for (let j = 1; j <= pLen; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1];
        }
    }

    // Fill the DP table
    for (let i = 1; i <= sLen; i++) {
        for (let j = 1; j <= pLen; j++) {
            if (p[j - 1] === '?' || s[i - 1] === p[j - 1]) {
                // If the characters match or p has '?', we look at the diagonal
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                // '*' can match an empty sequence (dp[i][j-1])
                // or one or more characters (dp[i-1][j])
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
            } else {
                // No match
                dp[i][j] = false;
            }
        }
    }

    // The result is the value at the bottom-right corner of the table
    return dp[sLen][pLen];
};