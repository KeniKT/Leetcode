/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }

    const rows = matrix.length;
    const cols = matrix[0].length;
    const heights = new Array(cols).fill(0);
    let maxArea = 0;

    for (let i = 0; i < rows; i++) {
        // Update the heights array for the current row
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === '1') {
                heights[j]++;
            } else {
                heights[j] = 0;
            }
        }

        // Calculate the largest rectangle in the current histogram
        maxArea = Math.max(maxArea, largestRectangleInHistogram(heights));
    }

    return maxArea;
};

// Helper function to find the largest rectangle in a histogram
function largestRectangleInHistogram(heights) {
    let maxArea = 0;
    const stack = [];
    const n = heights.length;

    for (let i = 0; i <= n; i++) {
        const h = (i === n) ? 0 : heights[i];
        while (stack.length > 0 && heights[stack[stack.length - 1]] >= h) {
            const height = heights[stack.pop()];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }
    return maxArea;
}