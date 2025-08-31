/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] === target) {
            return true;
        }

        // Handle the case where duplicates make it impossible to tell which side is sorted
        if (nums[low] === nums[mid] && nums[mid] === nums[high]) {
            low++;
            high--;
            continue;
        }

        // Check if the left half is sorted
        if (nums[low] <= nums[mid]) {
            // Check if the target is in the left sorted half
            if (nums[low] <= target && target < nums[mid]) {
                high = mid - 1;
            } else {
                // Target is in the right half
                low = mid + 1;
            }
        } 
        // Otherwise, the right half must be sorted
        else {
            // Check if the target is in the right sorted half
            if (nums[mid] < target && target <= nums[high]) {
                low = mid + 1;
            } else {
                // Target is in the left half
                high = mid - 1;
            }
        }
    }

    return false;
};