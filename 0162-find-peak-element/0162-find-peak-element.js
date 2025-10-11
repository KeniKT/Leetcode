/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    // The constraints ensure that nums.length >= 1, so the loop will always run.
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        
        // If nums[mid] < nums[mid + 1], we are on an increasing slope.
        // A peak must exist to the right (including mid + 1).
        // Example: [1, 2, 3, 1] -> mid=1 (value 2), mid+1=2 (value 3). We move right.
        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } 
        // If nums[mid] > nums[mid + 1], we are on a decreasing slope or at a peak.
        // A peak must exist at or to the left of mid.
        // Example: [1, 2, 3, 1] -> mid=2 (value 3), mid+1=3 (value 1). We move left (including mid).
        else {
            right = mid;
        }
    }
    
    // When left == right, we have found the index of a peak element.
    return left; // or right
};