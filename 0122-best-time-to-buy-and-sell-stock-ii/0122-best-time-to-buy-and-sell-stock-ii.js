/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let totalProfit = 0;

    // Iterate through the prices array starting from the second day
    for (let i = 1; i < prices.length; i++) {
        // If today's price is greater than yesterday's price,
        // it means we can make a profit by buying yesterday and selling today.
        if (prices[i] > prices[i - 1]) {
            totalProfit += prices[i] - prices[i - 1];
        }
    }

    return totalProfit;
};