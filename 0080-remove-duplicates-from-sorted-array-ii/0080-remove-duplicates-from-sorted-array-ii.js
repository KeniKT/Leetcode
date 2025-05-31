/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length <= 2) {
        return nums.length;
    }

    let i = 2; // Slow pointer, indicates the position to place the next valid element
    
    // Fast pointer 'j' iterates through the array from the third element
    for (let j = 2; j < nums.length; j++) {
        // If the current element (nums[j]) is different from the element
        // two positions behind the slow pointer (nums[i - 2]),
        // it means nums[j] can be included.
        // This handles both new distinct numbers and the second occurrence of a number.
        if (nums[j] !== nums[i - 2]) {
            nums[i] = nums[j]; // Place nums[j] at the current 'i' position
            i++; // Move the slow pointer forward
        }
    }

    return i; // 'i' is the new length of the array with duplicates removed
};