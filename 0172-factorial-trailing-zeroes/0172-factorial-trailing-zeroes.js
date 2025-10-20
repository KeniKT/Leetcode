/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    // If n is negative, the factorial is undefined for integers, 
    // but the constraint says 0 <= n, so we mostly ignore this.
    if (n < 0) {
        return 0;
    }

    let count = 0;
    let powerOf5 = 5;

    // The loop continues as long as n divided by powerOf5 is greater than 0.
    // This is equivalent to powerOf5 <= n.
    // The division and floor operation calculates the number of multiples of powerOf5 
    // less than or equal to n.
    while (powerOf5 <= n) {
        // Add the number of multiples of the current power of 5
        count += Math.floor(n / powerOf5);
        
        // Prepare for the next power of 5: 5 -> 25 -> 125 -> ...
        // We use Math.floor(n / 5) repeatedly, which is the iterative approach.
        // E.g., for n=26:
        // n/5 = 5 (multiples of 5: 5, 10, 15, 20, 25)
        // n/25 = 1 (multiple of 25: 25)
        // Total = 5 + 1 = 6.
        // 
        // Iterative update (alternative):
        // powerOf5 *= 5;
        
        // A more common and often simpler iterative implementation:
        // Update n by dividing it by 5. The sum is implicitly built up.
        // E.g., for n=26:
        // 1. n=26. count += floor(26/5) = 5. n = floor(26/5) = 5.
        // 2. n=5. count += floor(5/5) = 1. n = floor(5/5) = 1.
        // 3. n=1. Loop terminates as n is not >= 5 (or n < 5).
        // Total = 5 + 1 = 6.
        n = Math.floor(n / 5);
    }
    
    return count;
};