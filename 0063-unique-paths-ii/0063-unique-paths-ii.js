/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;

    // If the starting cell is an obstacle, there are no paths.
    if (obstacleGrid[0][0] === 1) {
        return 0;
    }

    const dp = Array(m).fill(0).map(() => Array(n).fill(0));

    // Base case: The starting cell has 1 path to itself.
    dp[0][0] = 1;

    // Fill the first column
    for (let i = 1; i < m; i++) {
        // If there's an obstacle, path count is 0. Otherwise, it's the same as the cell above.
        if (obstacleGrid[i][0] === 0) {
            dp[i][0] = dp[i-1][0];
        }
    }

    // Fill the first row
    for (let j = 1; j < n; j++) {
        // If there's an obstacle, path count is 0. Otherwise, it's the same as the cell to the left.
        if (obstacleGrid[0][j] === 0) {
            dp[0][j] = dp[0][j-1];
        }
    }

    // Fill the rest of the DP table
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 0) {
                // Number of paths is the sum of paths from above and from the left
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
        }
    }

    return dp[m-1][n-1];
};