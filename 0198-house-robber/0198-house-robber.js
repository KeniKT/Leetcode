/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length;

    // Handle edge cases for small arrays
    if (n === 0) {
        return 0; // No houses, no money
    }
    if (n === 1) {
        return nums[0]; // Only one house, rob it
    }

    // Initialize DP array
    // dp[i] will store the maximum amount of money that can be robbed
    // from the first i houses (i.e., nums[0] to nums[i-1]).
    // We use n + 1 size for 1-based indexing clarity, but only need n if using 0-based.
    // We can optimize space later, but let's start with a clear DP array.
    const dp = new Array(n).fill(0);

    // Base cases
    // dp[0]: Max money from the first house (nums[0])
    dp[0] = nums[0];
    
    // dp[1]: Max money from the first two houses (nums[0], nums[1])
    // This is simply the maximum of the two amounts, as robbing both is forbidden.
    dp[1] = Math.max(nums[0], nums[1]);

    // Fill the DP array starting from the third house (index 2)
    for (let i = 2; i < n; i++) {
        // At house 'i', we have two choices:

        // 1. Rob house 'i':
        //    The total money is nums[i] plus the max money from non-adjacent
        //    houses up to i-2. This is dp[i-2].
        const robCurrent = nums[i] + dp[i - 2];

        // 2. Skip house 'i':
        //    The total money is the same as the max money from the
        //    first i-1 houses, which is dp[i-1].
        const skipCurrent = dp[i - 1];

        // We take the maximum of these two choices for dp[i]
        dp[i] = Math.max(robCurrent, skipCurrent);
    }

    // The result is the maximum amount of money from all 'n' houses.
    return dp[n - 1];
};