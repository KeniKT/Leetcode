/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    const n = nums.length;
    if (n < 2) {
        return 0;
    }

    // 1. Find min and max values
    let minVal = nums[0];
    let maxVal = nums[0];
    for (let i = 1; i < n; i++) {
        minVal = Math.min(minVal, nums[i]);
        maxVal = Math.max(maxVal, nums[i]);
    }

    if (minVal === maxVal) {
        return 0;
    }

    // 2. Calculate the minimum possible gap (bucket size)
    // The bucket size is ceil((maxVal - minVal) / (n - 1))
    // We use Math.ceil to ensure the size is at least the average gap.
    const bucketSize = Math.ceil((maxVal - minVal) / (n - 1));

    // 3. Determine the number of buckets
    // There will be at most n-1 non-empty buckets, plus the one containing maxVal.
    // We only need (maxVal - minVal) / bucketSize + 1 buckets.
    // For n elements, we create n-1 buckets (not including the maxVal's bucket).
    // The number of buckets is the number of intervals, n-1, plus 1 for the max value.
    // A simpler approach is to use the formula:
    const numBuckets = Math.floor((maxVal - minVal) / bucketSize) + 1;
    
    // We will use min/max of each bucket. Initialize with Infinity/-Infinity
    const buckets = new Array(numBuckets).fill(null).map(() => ({ min: Infinity, max: -Infinity, empty: true }));

    // 4. Populate buckets
    for (const num of nums) {
        // Skip maxVal as it should always be in the last bucket which is handled implicitly
        // and its only purpose is to define the range.
        if (num === maxVal) continue;

        // Calculate bucket index
        const bucketIndex = Math.floor((num - minVal) / bucketSize);

        // Update min and max for the bucket
        const bucket = buckets[bucketIndex];
        bucket.min = Math.min(bucket.min, num);
        bucket.max = Math.max(bucket.max, num);
        bucket.empty = false;
    }

    // 5. Find the maximum gap
    let maxGap = 0;
    let prevMax = minVal; // Start with the overall minimum element

    for (let i = 0; i < numBuckets; i++) {
        const bucket = buckets[i];

        // Skip empty buckets
        if (bucket.empty) {
            continue;
        }

        // The maximum gap occurs between the maximum of the previous non-empty bucket
        // and the minimum of the current non-empty bucket.
        maxGap = Math.max(maxGap, bucket.min - prevMax);

        // Update the maximum element seen so far (from the current non-empty bucket)
        prevMax = bucket.max;
    }

    // Final check: the gap between the last bucket's max and the overall maxVal
    maxGap = Math.max(maxGap, maxVal - prevMax);

    return maxGap;
};