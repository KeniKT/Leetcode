/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // Initialize the result (the running XOR value) to 0.
    let single = 0;

    // Iterate through all the elements in the array.
    for (const num of nums) {
        // XOR the current number with the running result.
        // If a number appears twice, it will XOR with itself and become 0.
        // The unique number will be XORed with 0 (or a chain of 0s), resulting in itself.
        single ^= num;
    }

    // The final value of 'single' is the number that appears only once.
    return single;
};