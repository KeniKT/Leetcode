/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    const nums = [];
    const factorials = [1];
    let result = '';

    // Initialize nums and pre-calculate factorials
    for (let i = 1; i <= n; i++) {
        nums.push(i);
        factorials[i] = factorials[i-1] * i;
    }

    // Adjust k to be 0-based
    k--;

    for (let i = n - 1; i >= 0; i--) {
        // Calculate the index of the number to pick
        const index = Math.floor(k / factorials[i]);
        
        // Append the number to the result and remove it from the list
        result += nums[index];
        nums.splice(index, 1);
        
        // Update k for the next iteration
        k %= factorials[i];
    }
    
    return result;
};