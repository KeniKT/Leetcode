/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    // Split both version strings into arrays of revision strings
    const revisions1 = version1.split('.');
    const revisions2 = version2.split('.');

    // Get the maximum length to ensure we iterate through all parts
    const maxLength = Math.max(revisions1.length, revisions2.length);

    // Iterate through the revisions from left to right
    for (let i = 0; i < maxLength; i++) {
        // Get the i-th revision for version1. If it doesn't exist, treat as "0".
        // Use parseInt to convert the revision string to an integer, which automatically
        // handles ignoring leading zeros (e.g., "01" becomes 1).
        const rev1 = i < revisions1.length ? parseInt(revisions1[i], 10) : 0;

        // Get the i-th revision for version2. If it doesn't exist, treat as "0".
        const rev2 = i < revisions2.length ? parseInt(revisions2[i], 10) : 0;

        // Compare the integer revisions
        if (rev1 < rev2) {
            return -1; // version1 < version2
        } else if (rev1 > rev2) {
            return 1;  // version1 > version2
        }
        // If rev1 === rev2, continue to the next revision
    }

    // If the loop completes, all comparable revisions were equal
    // (including the padded 0s), so the versions are equal.
    return 0;
};