/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const m = s.length;
    const n = p.length;

    // dp[i][j] will be true if the first i characters of s match the first j characters of p.
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(false));

    // Base case: empty string matches empty pattern.
    dp[0][0] = true;

    // Initialize the first row for patterns with '*'
    // An empty string s can match patterns like a*, a*b*, etc.
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            // p[j-1] is '*', so it can match zero of the preceding element.
            // This means we can "skip" the * and the preceding character.
            dp[0][j] = dp[0][j - 2];
        }
    }

    // Fill the rest of the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === '*') {
                // Case 1: The '*' matches zero of the preceding element.
                // The match depends on whether s[:i] matches p[:j-2].
                // This means we ignore p[j-2] and p[j-1].
                const zeroOccurrences = dp[i][j - 2];

                // Case 2: The '*' matches one or more of the preceding element.
                // This requires s[i-1] to match p[j-2], AND the remaining string s[:i-1]
                // to match the current pattern p[:j].
                const oneOrMoreOccurrences = (s[i - 1] === p[j - 2] || p[j - 2] === '.') && dp[i - 1][j];

                dp[i][j] = zeroOccurrences || oneOrMoreOccurrences;
            } else {
                // If p[j-1] is a normal character or '.', a match occurs if:
                // 1. s[i-1] matches p[j-1]
                // 2. The previous parts of the strings matched (dp[i-1][j-1] is true)
                if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
                    dp[i][j] = dp[i - 1][j - 1];
                }
            }
        }
    }

    return dp[m][n];
};