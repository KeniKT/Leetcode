/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const m = word1.length;
    const n = word2.length;
    
    // dp[i][j] will be the minimum distance between word1's first i characters
    // and word2's first j characters.
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
    
    // Base cases
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i; // Converting word1[0...i-1] to an empty string requires i deletions
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j; // Converting an empty string to word2[0...j-1] requires j insertions
    }
    
    // Fill the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                // Minimum of insertion, deletion, and replacement
                dp[i][j] = 1 + Math.min(
                    dp[i][j - 1],    // Insertion
                    dp[i - 1][j],    // Deletion
                    dp[i - 1][j - 1] // Replacement
                );
            }
        }
    }
    
    return dp[m][n];
};