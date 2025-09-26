/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (!board || board.length === 0) {
        return;
    }

    const m = board.length;
    const n = board[0].length;

    // Depth-First Search function to mark border-connected 'O's as 'E'
    const dfs = (r, c) => {
        // Base case: out of bounds, not an 'O', or already marked 'E'
        if (r < 0 || r >= m || c < 0 || c >= n || board[r][c] !== 'O') {
            return;
        }

        board[r][c] = 'E'; // Mark as uncapturable (Escaped/Edge-connected)

        // Explore all 4 adjacent cells
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    };

    // 1. Identify and Mark Uncapturable 'O's on the borders

    // Traverse the top (r=0) and bottom (r=m-1) borders
    for (let c = 0; c < n; c++) {
        if (board[0][c] === 'O') {
            dfs(0, c);
        }
        if (board[m - 1][c] === 'O') {
            dfs(m - 1, c);
        }
    }

    // Traverse the left (c=0) and right (c=n-1) borders
    for (let r = 1; r < m - 1; r++) { // Start and end at 1 and m-2 to avoid re-checking corners
        if (board[r][0] === 'O') {
            dfs(r, 0);
        }
        if (board[r][n - 1] === 'O') {
            dfs(r, n - 1);
        }
    }

    // 2. Final Traversal: Capture surrounded 'O's and restore uncapturable 'O's
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (board[r][c] === 'O') {
                // Surrounded 'O' -> Capture
                board[r][c] = 'X';
            } else if (board[r][c] === 'E') {
                // Uncapturable 'E' -> Restore
                board[r][c] = 'O';
            }
        }
    }
};