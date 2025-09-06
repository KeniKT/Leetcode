/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const result = [];
    const n = s.length;

    function backtrack(start, segments) {
        // Base case: we have four segments and have used all characters
        if (segments.length === 4) {
            if (start === n) {
                result.push(segments.join('.'));
            }
            return;
        }

        // Loop through possible lengths for the current segment (1, 2, or 3 digits)
        for (let i = 1; i <= 3; i++) {
            const end = start + i;
            if (end > n) {
                break; // Stop if we go beyond the string length
            }

            const segment = s.substring(start, end);

            // Check for leading zeros. A segment can't have a leading zero unless it's just "0".
            if (segment.length > 1 && segment[0] === '0') {
                continue;
            }

            // Check if the segment is a valid number (0-255)
            const num = parseInt(segment, 10);
            if (num >= 0 && num <= 255) {
                segments.push(segment); // Add the valid segment
                backtrack(end, segments); // Recurse
                segments.pop(); // Backtrack: remove the last segment
            }
        }
    }

    // Edge case: A valid IP has a total length of 4 to 12 digits
    if (n < 4 || n > 12) {
        return [];
    }
    
    backtrack(0, []);
    return result;
};