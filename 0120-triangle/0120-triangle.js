/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    // Start from the second-to-last row and move up
    for (let i = triangle.length - 2; i >= 0; i--) {
        // Iterate through each element in the current row
        for (let j = 0; j < triangle[i].length; j++) {
            // Update the current element with the minimum path sum
            triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
        }
    }
    // The top element now holds the minimum path sum
    return triangle[0][0];
};