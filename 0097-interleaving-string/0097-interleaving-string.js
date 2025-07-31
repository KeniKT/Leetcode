/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    const L1 = s1.length;
    const L2 = s2.length;
    const L3 = s3.length;

    if (L1 + L2 !== L3) {
        return false;
    }

    // Space optimization: Ensure s2 is the shorter string for O(min(L1, L2)) space.
    // However, for simplicity and to match the usual DP structure, we'll keep s2 as the column dimension.
    // If we wanted strict O(min(L1,L2)), we would swap s1 and s2 if L1 > L2.
    // For this problem, the constraint is O(s2.length) specifically.

    // dp[j] will store whether s1[0...i] and s2[0...j] can form s3[0...i+j]
    // where 'i' is the current row being computed.
    const dp = new Array(L2 + 1).fill(false);

    // Base case: empty s1 and empty s2 can form empty s3
    dp[0] = true;

    // Initialize the first row (i = 0, using only s2 characters)
    for (let j = 1; j <= L2; j++) {
        if (s2[j - 1] === s3[j - 1] && dp[j - 1]) {
            dp[j] = true;
        } else {
            dp[j] = false; // Important to explicitly set to false if not true
        }
    }

    // Fill the rest of the DP table
    for (let i = 1; i <= L1; i++) {
        // For the current row 'i', handle the first element (j = 0)
        // dp[0] here represents dp[i][0]
        // It depends on dp[i-1][0] (which is the current dp[0] value before this iteration's updates)
        // and s1[i-1] matching s3[i-1]
        if (s1[i - 1] === s3[i - 1] && dp[0]) {
            dp[0] = true;
        } else {
            dp[0] = false; // If it was true from previous row but no match, set to false
        }


        for (let j = 1; j <= L2; j++) {
            const charS3 = s3[i + j - 1];
            
            // Option 1: Take character from s1
            // Requires s1[i-1] to match s3[i+j-1] AND dp[i-1][j] to be true
            // dp[i-1][j] is the dp[j] value *before* current row's update for j
            // But this is complicated with 1D DP.
            // When computing dp[j] for current 'i', dp[j] still holds the value from 'i-1'.
            // dp[j-1] holds the value for 'i' and 'j-1'.

            // Let's use two temporary boolean variables for clarity
            let current_dp_val = false;

            // Option 1: Take character from s1 (s1[i-1] and dp[i-1][j])
            // dp[j] currently holds dp[i-1][j]
            if (s1[i - 1] === charS3 && dp[j]) {
                current_dp_val = true;
            }

            // Option 2: Take character from s2 (s2[j-1] and dp[i][j-1])
            // dp[j-1] has already been updated for the current 'i'
            if (s2[j - 1] === charS3 && dp[j - 1]) {
                current_dp_val = current_dp_val || true;
            }
            
            dp[j] = current_dp_val;
        }
    }

    return dp[L2];
};