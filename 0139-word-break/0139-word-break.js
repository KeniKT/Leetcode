/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const n = s.length;
    // 1. Convert wordDict to a Set for O(1) average-time lookups
    const wordSet = new Set(wordDict);

    // 2. Initialize DP array
    // dp[i] is true if s[0...i-1] can be segmented
    const dp = new Array(n + 1).fill(false);
    dp[0] = true; // Base case: an empty string can always be segmented

    // 3. Fill the DP table
    // i represents the length of the prefix s[0...i-1]
    for (let i = 1; i <= n; i++) {
        // j represents the split point: s[0...j-1] and s[j...i-1]
        for (let j = 0; j < i; j++) {
            // dp[j] is true (prefix s[0...j-1] is segmentable)
            if (dp[j]) {
                // The substring is s from index j up to length i-j
                const word = s.substring(j, i);
                
                // Check if the current substring s[j...i-1] is in the dictionary
                if (wordSet.has(word)) {
                    // If both conditions are met, then s[0...i-1] is segmentable
                    dp[i] = true;
                    // Found a valid segmentation, move to the next length i
                    break; 
                }
            }
        }
    }

    // 4. The result is stored in dp[n]
    return dp[n];
};