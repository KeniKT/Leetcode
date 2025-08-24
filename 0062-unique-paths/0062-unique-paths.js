/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // Create an m x n grid initialized with zeros
    const dp = Array(m).fill(0).map(() => Array(n).fill(0));

    // Initialize the first column with 1s
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }

    // Initialize the first row with 1s
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1;
    }

    // Fill the rest of the grid
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    // The number of unique paths to the bottom-right corner is at dp[m-1][n-1]
    return dp[m - 1][n - 1];
};