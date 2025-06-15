/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    // Sort the citations in descending order
    citations.sort((a, b) => b - a);

    let h = 0;
    // Iterate through the sorted citations
    for (let i = 0; i < citations.length; i++) {
        // If the current paper's citation count is greater than or equal to
        // the number of papers considered so far (i + 1),
        // then i + 1 is a possible h-index.
        // We want the maximum such h, so we keep updating h.
        if (citations[i] >= i + 1) {
            h = i + 1;
        } else {
            // If citations[i] < i + 1, it means that from this point onwards,
            // the number of papers (i + 1) will be greater than their citations.
            // So, we can stop and the current 'h' is our maximum h-index.
            break;
        }
    }
    return h;
};