/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let count = 0;
    const cols = new Set();
    const posDiagonals = new Set(); // r + c
    const negDiagonals = new Set(); // r - c

    function backtrack(row) {
        // Base case: If we have successfully placed a queen in each row up to n-1
        if (row === n) {
            count++;
            return;
        }

        // Iterate through each column to place a queen in the current row
        for (let col = 0; col < n; col++) {
            // Check if the current position is valid
            const posDiag = row + col;
            const negDiag = row - col;

            if (!cols.has(col) && !posDiagonals.has(posDiag) && !negDiagonals.has(negDiag)) {
                // Place the queen
                cols.add(col);
                posDiagonals.add(posDiag);
                negDiagonals.add(negDiag);

                // Recurse to the next row
                backtrack(row + 1);

                // Backtrack: Remove the queen to explore other possibilities
                cols.delete(col);
                posDiagonals.delete(posDiag);
                negDiagonals.delete(negDiag);
            }
        }
    }

    backtrack(0);
    return count;
};