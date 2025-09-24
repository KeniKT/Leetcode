/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let s1 = -Infinity; // State 1: After 1st buy
    let s2 = -Infinity; // State 2: After 1st sell
    let s3 = -Infinity; // State 3: After 2nd buy
    let s4 = -Infinity; // State 4: After 2nd sell
    let s0 = 0;         // State 0: Initial state, no transaction

    for (const price of prices) {
        // After 2nd sell (s4)
        s4 = Math.max(s4, s3 + price);
        // After 2nd buy (s3)
        s3 = Math.max(s3, s2 - price);
        // After 1st sell (s2)
        s2 = Math.max(s2, s1 + price);
        // After 1st buy (s1)
        s1 = Math.max(s1, s0 - price);
    }
    
    // The maximum profit is either from completing two transactions (s4)
    // or from completing only one transaction (s2).
    // The s4 value will implicitly include cases where only one transaction occurred,
    // as the second transaction profit could be 0, so max(s2, s4) is not required.
    // Let's analyze s4: s4 depends on s3, which depends on s2.
    // If we only do one transaction, s3 will stay -infinity, so s4 will be -infinity.
    // Therefore, we need to check s2. The final profit is the maximum of all sell states.
    // However, the problem statement says "at most two transactions," so the final profit
    // is the maximum of s2 and s4, representing 1 or 2 transactions.
    
    return Math.max(0, s2, s4);
};