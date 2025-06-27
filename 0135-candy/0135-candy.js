/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const n = ratings.length;
    if (n === 0) {
        return 0;
    }

    // Initialize candies array with 1 for each child
    const candies = new Array(n).fill(1);

    // Left-to-right pass
    // Ensure children with higher ratings than their left neighbor get more candies
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    // Right-to-left pass
    // Ensure children with higher ratings than their right neighbor get more candies
    // Also, take the maximum to satisfy both left and right neighbor conditions
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }

    // Calculate the total number of candies
    let totalCandies = 0;
    for (let i = 0; i < n; i++) {
        totalCandies += candies[i];
    }

    return totalCandies;
};