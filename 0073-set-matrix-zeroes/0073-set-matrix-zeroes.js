/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    let isFirstRowZero = false;
    let isFirstColZero = false;

    // Check if the first row has any zeros
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) {
            isFirstRowZero = true;
            break;
        }
    }

    // Check if the first column has any zeros
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            isFirstColZero = true;
            break;
        }
    }

    // Use the first row and column to mark rows/cols to be zeroed
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // Zero out rows based on markers in the first column
    for (let i = 1; i < m; i++) {
        if (matrix[i][0] === 0) {
            for (let j = 1; j < n; j++) {
                matrix[i][j] = 0;
            }
        }
    }

    // Zero out columns based on markers in the first row
    for (let j = 1; j < n; j++) {
        if (matrix[0][j] === 0) {
            for (let i = 1; i < m; i++) {
                matrix[i][j] = 0;
            }
        }
    }

    // Handle the first row and column
    if (isFirstRowZero) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }
    if (isFirstColZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
};