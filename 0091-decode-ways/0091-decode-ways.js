/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s === null || s.length === 0 || s[0] === '0') {
        return 0;
    }

    const n = s.length;
    // dp[i] represents the number of ways to decode s[0...i-1]
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1; // Base case for empty string

    for (let i = 1; i <= n; i++) {
        // One-digit case
        const oneDigit = parseInt(s.substring(i - 1, i));
        if (oneDigit >= 1 && oneDigit <= 9) {
            dp[i] += dp[i - 1];
        }

        // Two-digit case
        if (i > 1) {
            const twoDigits = parseInt(s.substring(i - 2, i));
            if (twoDigits >= 10 && twoDigits <= 26) {
                dp[i] += dp[i - 2];
            }
        }
    }

    return dp[n];
};