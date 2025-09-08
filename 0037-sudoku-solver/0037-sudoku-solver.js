/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    /**
     * The main backtracking function to solve the Sudoku puzzle.
     * @param {character[][]} currentBoard The board to solve.
     * @return {boolean} True if a solution is found, false otherwise.
     */
    function backtrack(currentBoard) {
        // Find the next empty cell on the board
        const emptyCell = findEmpty(currentBoard);

        // If there are no empty cells, the puzzle is solved.
        if (!emptyCell) {
            return true;
        }

        const [row, col] = emptyCell;

        // Iterate through possible numbers from 1 to 9
        for (let num = 1; num <= 9; num++) {
            const charNum = num.toString();

            // If the number is valid to place, make the move
            if (isValid(currentBoard, row, col, charNum)) {
                currentBoard[row][col] = charNum;

                // Recursively call backtrack for the next empty cell
                if (backtrack(currentBoard)) {
                    return true;
                }

                // If the recursive call returns false, it means this move was wrong.
                // Backtrack by resetting the cell to '.'
                currentBoard[row][col] = '.';
            }
        }

        // No number from 1-9 worked, so we need to backtrack further.
        return false;
    }

    /**
     * Finds the next empty cell ('.') on the board.
     * @param {character[][]} board The Sudoku board.
     * @return {[number, number] | null} The coordinates of the empty cell, or null if none exist.
     */
    function findEmpty(board) {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === '.') {
                    return [row, col];
                }
            }
        }
        return null;
    }

    /**
     * Checks if a number can be legally placed in a given cell.
     * @param {character[][]} board The Sudoku board.
     * @param {number} row The row index.
     * @param {number} col The column index.
     * @param {string} num The number to check.
     * @return {boolean} True if the placement is valid, false otherwise.
     */
    function isValid(board, row, col, num) {
        // Check row
        for (let c = 0; c < 9; c++) {
            if (board[row][c] === num) {
                return false;
            }
        }

        // Check column
        for (let r = 0; r < 9; r++) {
            if (board[r][col] === num) {
                return false;
            }
        }

        // Check 3x3 sub-box
        const startRow = Math.floor(row / 3) * 3;
        const startCol = Math.floor(col / 3) * 3;
        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                if (board[startRow + r][startCol + c] === num) {
                    return false;
                }
            }
        }

        return true;
    }

    // Start the backtracking process
    backtrack(board);
};
