var jump = function(nums) {
    let n = nums.length;
    if (n <= 1) {
        return 0;
    }

    let jumps = 0;
    let current_reach = 0;
    let farthest_reach = 0;

    for (let i = 0; i < n - 1; i++) {
        farthest_reach = Math.max(farthest_reach, i + nums[i]);

        // If we've reached the end of the current jump's range,
        // we must make another jump.
        if (i === current_reach) {
            jumps++;
            current_reach = farthest_reach;

            // Optimization: if we can already reach the end, we're done.
            if (current_reach >= n - 1) {
                return jumps;
            }
        }
    }
    
    return jumps;
};