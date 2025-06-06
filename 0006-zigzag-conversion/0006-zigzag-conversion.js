/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }

    const rows = new Array(numRows).fill('');
    let currentRow = 0;
    let goingDown = false; // Initially, we are going down (from row 0 to numRows-1)

    for (let i = 0; i < s.length; i++) {
        rows[currentRow] += s[i];

        // Change direction if we hit the top or bottom row
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        // Move to the next row
        if (goingDown) {
            currentRow++;
        } else {
            currentRow--;
        }
    }

    return rows.join('');
};