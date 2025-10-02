/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    const m = s.length;
    const n = t.length;

    // dp[i][j] will store the number of distinct subsequences of s[0...i-1] 
    // that equal t[0...j-1].
    // Dimensions: (m+1) x (n+1)
    // We use BigInt for safety since the problem guarantees the answer fits in a 32-bit signed integer, 
    // but the intermediate calculations might potentially exceed standard safe integer limit (though unlikely for a constraint of 1000).
    // Given the constraint, standard number should be fine, but using BigInt is a common pattern 
    // for DP problems involving counts/sums just in case. However, since the problem 
    // explicitly mentions 32-bit, we will use standard Numbers.
    
    // Initialize the DP table with zeros.
    const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

    // Base Case 1: t is an empty string (j=0)
    // There is 1 way to form an empty string t from any prefix of s (by choosing no characters).
    for (let i = 0; i <= m; i++) {
        dp[i][0] = 1;
    }

    // Base Case 2: s is an empty string (i=0) and t is not empty (j>0)
    // dp[0][j] is already 0 from initialization.

    // Fill the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // Case 1: s[i-1] != t[j-1]
            if (s[i - 1] !== t[j - 1]) {
                // We must form t[0...j-1] using s[0...i-2].
                dp[i][j] = dp[i - 1][j];
            } 
            // Case 2: s[i-1] == t[j-1]
            else {
                // Option A: Exclude s[i-1]. Form t[0...j-1] using s[0...i-2].
                const waysExcluding = dp[i - 1][j];
                
                // Option B: Include s[i-1] to match t[j-1]. Form t[0...j-2] using s[0...i-2].
                const waysIncluding = dp[i - 1][j - 1];
                
                dp[i][j] = waysExcluding + waysIncluding;
            }
        }
    }

    // The result is the number of distinct subsequences of s that equal t
    return dp[m][n];
};