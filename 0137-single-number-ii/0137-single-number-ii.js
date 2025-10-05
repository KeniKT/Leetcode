/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // The result will be stored in 'result'.
    let result = 0;

    // We iterate through all 32 bits of an integer (0 to 31).
    // JavaScript uses 64-bit floats for all numbers, but bitwise operations
    // treat numbers as 32-bit signed integers. We only need to check up to 32 bits.
    for (let i = 0; i < 32; i++) {
        // 'sum' will store the count of numbers in 'nums' that have the i-th bit set.
        let sum = 0;
        // 'mask' is a number with only the i-th bit set.
        // We use '1 << i' to create the mask.
        const mask = 1 << i;

        for (const num of nums) {
            // Check if the i-th bit of 'num' is set using the bitwise AND operation.
            // (num & mask) will be non-zero (equal to mask) if the bit is set.
            if (num & mask) {
                sum++;
            }
        }

        // Since every number appears three times except for one, 
        // the total 'sum' of the i-th bits across all numbers must satisfy:
        // sum = (3 * k) + (i-th bit of single number)
        // Therefore, (sum % 3) gives us the i-th bit of the single number.
        if (sum % 3 !== 0) {
            // If the i-th bit of the single number is 1, we set the i-th bit 
            // in our 'result'.
            // The bitwise OR operation (result | mask) does this.
            result |= mask;
        }
    }

    // After checking all 32 bits, 'result' holds the single number.
    return result;
};