/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    // Handle the first row
    for (let j = 1; j < n; j++) {
        grid[0][j] += grid[0][j - 1];
    }

    // Handle the first column
    for (let i = 1; i < m; i++) {
        grid[i][0] += grid[i - 1][0];
    }

    // Iterate through the rest of the grid
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
        }
    }

    // The bottom-right cell contains the minimum path sum
    return grid[m - 1][n - 1];
};