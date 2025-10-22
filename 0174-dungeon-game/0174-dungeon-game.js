/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    const m = dungeon.length;
    const n = dungeon[0].length;
    
    // DP table: DP[i][j] is the minimum health required upon *entering* room (i, j) 
    // to reach the princess.
    const dp = Array(m).fill(0).map(() => Array(n).fill(0));
    
    // 1. Base Case: Princess's room (m-1, n-1)
    // The knight must have at least 1 health remaining *after* the room's effect.
    // required_health_in - dungeon[m-1][n-1] >= 1
    // required_health_in >= 1 - dungeon[m-1][n-1]
    // Since required_health_in must be at least 1, we take max(1, ...)
    dp[m - 1][n - 1] = Math.max(1, 1 - dungeon[m - 1][n - 1]);

    // 2. Fill Last Row (moving right to left)
    for (let j = n - 2; j >= 0; j--) {
        // Only move right: required_health_out = dp[m-1][j+1]
        const required_health_out = dp[m - 1][j + 1];
        // Required health to enter (m-1, j): max(1, required_health_out - dungeon[m-1][j])
        dp[m - 1][j] = Math.max(1, required_health_out - dungeon[m - 1][j]);
    }

    // 3. Fill Last Column (moving bottom to top)
    for (let i = m - 2; i >= 0; i--) {
        // Only move down: required_health_out = dp[i+1][n-1]
        const required_health_out = dp[i + 1][n - 1];
        // Required health to enter (i, n-1): max(1, required_health_out - dungeon[i][n-1])
        dp[i][n - 1] = Math.max(1, required_health_out - dungeon[i][n - 1]);
    }

    // 4. Fill the rest of the DP table (moving bottom-right to top-left)
    for (let i = m - 2; i >= 0; i--) {
        for (let j = n - 2; j >= 0; j--) {
            // Knight can move Down (i+1, j) or Right (i, j+1).
            // We choose the path that requires the minimum health upon *entering* the next room.
            const min_required_health_next = Math.min(dp[i + 1][j], dp[i][j + 1]);
            
            // Required health to enter (i, j): max(1, min_required_health_next - dungeon[i][j])
            dp[i][j] = Math.max(1, min_required_health_next - dungeon[i][j]);
        }
    }

    // 5. The result is the minimum health required upon entering the starting room (0, 0).
    return dp[0][0];
};