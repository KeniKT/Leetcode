var isScramble = function(s1, s2) {
    // Memoization table using a Map for string pairs
    const memo = new Map();

    function check(str1, str2) {
        // Create a unique key for memoization
        const key = str1 + '#' + str2;
        if (memo.has(key)) {
            return memo.get(key);
        }

        // Base case 1: If strings are identical, they are scrambled
        if (str1 === str2) {
            memo.set(key, true);
            return true;
        }

        const n = str1.length;

        // Base case 2: If length is 1 and not identical (already checked above), they are not scrambled
        if (n === 1) {
            memo.set(key, false);
            return false;
        }

        // Optimization: Check character counts. If different, they cannot be scrambled.
        const charCount1 = new Array(26).fill(0);
        const charCount2 = new Array(26).fill(0);
        for (let i = 0; i < n; i++) {
            charCount1[str1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            charCount2[str2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }
        for (let i = 0; i < 26; i++) {
            if (charCount1[i] !== charCount2[i]) {
                memo.set(key, false);
                return false;
            }
        }

        // Recursive step: Try all possible splits
        for (let i = 1; i < n; i++) {
            // Scenario 1: No swap
            // s1 = s1[0...i-1] + s1[i...n-1]
            // s2 = s2[0...i-1] + s2[i...n-1]
            const s1_left_no_swap = str1.substring(0, i);
            const s1_right_no_swap = str1.substring(i);
            const s2_left_no_swap = str2.substring(0, i);
            const s2_right_no_swap = str2.substring(i);

            if (check(s1_left_no_swap, s2_left_no_swap) &&
                check(s1_right_no_swap, s2_right_no_swap)) {
                memo.set(key, true);
                return true;
            }

            // Scenario 2: With swap
            // s1 = s1[0...i-1] + s1[i...n-1]
            // s2 = s2[n-i...n-1] + s2[0...n-i-1]  (s2_right_swapped + s2_left_swapped)
            const s1_left_swap = str1.substring(0, i);
            const s1_right_swap = str1.substring(i);
            const s2_left_swap = str2.substring(n - i); // This is the part that corresponds to s1_left after swap
            const s2_right_swap = str2.substring(0, n - i); // This is the part that corresponds to s1_right after swap

            if (check(s1_left_swap, s2_left_swap) &&
                check(s1_right_swap, s2_right_swap)) {
                memo.set(key, true);
                return true;
            }
        }

        // If no split and recursive call returned true
        memo.set(key, false);
        return false;
    }

    return check(s1, s2);
};