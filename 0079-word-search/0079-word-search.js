/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    function backtrack(r, c, k) {
        // Base case: we've found all characters in the word
        if (k === word.length) {
            return true;
        }

        // Base case: out of bounds or character doesn't match
        if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== word[k]) {
            return false;
        }

        // Mark the cell as visited by changing its character
        const temp = board[r][c];
        board[r][c] = '#';

        // Explore neighbors: up, down, right, left
        const found = backtrack(r + 1, c, k + 1) ||
                      backtrack(r - 1, c, k + 1) ||
                      backtrack(r, c + 1, k + 1) ||
                      backtrack(r, c - 1, k + 1);

        // Backtrack: restore the original character
        board[r][c] = temp;

        return found;
    }

    // Iterate through each cell as a potential starting point
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (backtrack(r, c, 0)) {
                return true;
            }
        }
    }

    return false;
};