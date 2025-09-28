/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    // Handle the base case where numRows is 0
    if (numRows === 0) {
        return [];
    }

    // Initialize the triangle with the first row
    const triangle = [[1]];

    // Iterate from the second row up to the numRows-th row
    for (let i = 1; i < numRows; i++) {
        // The previous row is the last one added to the triangle
        const prevRow = triangle[i - 1];
        // Initialize the new row
        const newRow = [];

        // The first element of every row is 1
        newRow.push(1);

        // Calculate the inner elements of the new row
        // Each number is the sum of the two numbers directly above it
        // We iterate from the second element (index 1) up to the second-to-last element (index prevRow.length - 1)
        for (let j = 1; j < prevRow.length; j++) {
            newRow.push(prevRow[j - 1] + prevRow[j]);
        }

        // The last element of every row is 1
        newRow.push(1);

        // Add the newly created row to the triangle
        triangle.push(newRow);
    }

    return triangle;
};