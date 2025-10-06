/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    const n = s.length;
    if (n <= 1) {
        return 0;
    }

    // 1. Pre-calculate all palindrome substrings
    // isP[i][j] is true if s[i..j] is a palindrome
    const isP = Array(n).fill(0).map(() => Array(n).fill(false));

    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            if (s[i] === s[j] && (j - i < 2 || isP[i + 1][j - 1])) {
                isP[i][j] = true;
            }
        }
    }

    // 2. Dynamic Programming for Minimum Cuts
    // dp[i] is the minimum cuts needed for the prefix s[0..i]
    // The length of the prefix is i + 1
    const dp = Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        // Base case: maximum cuts is i (cutting before every character)
        // Also, if s[0..i] is a palindrome, 0 cuts are needed.
        if (isP[0][i]) {
            dp[i] = 0;
            continue;
        }

        // Initialize dp[i] to the maximum possible cuts (i)
        // This corresponds to partitioning into s[0], s[1], ..., s[i]
        dp[i] = i; 

        // Check for partitions: s[0..j-1] | s[j..i] where s[j..i] is a palindrome
        // j starts at 1 because we already handled j=0 (s[0..i] is palindrome)
        for (let j = 1; j <= i; j++) {
            // s[j..i] is the last segment
            if (isP[j][i]) {
                // dp[j-1] is the min cuts for the prefix s[0..j-1]
                // + 1 for the cut before s[j]
                dp[i] = Math.min(dp[i], dp[j - 1] + 1);
            }
        }
    }

    // The result is the minimum cuts for the whole string s[0..n-1]
    return dp[n - 1];
};