/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const result = [];
    const n = s.length;

    function isPalindrome(str) {
        let left = 0;
        let right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    function backtrack(start, path) {
        // Base case: if we've reached the end of the string, add the current path to the result.
        if (start === n) {
            result.push([...path]);
            return;
        }

        // Recursive step: explore all possible substrings from the current position.
        for (let i = start; i < n; i++) {
            const substring = s.substring(start, i + 1);
            if (isPalindrome(substring)) {
                // If the substring is a palindrome, add it to the path.
                path.push(substring);
                // Recursively call for the rest of the string.
                backtrack(i + 1, path);
                // Backtrack: remove the last added substring to explore other partitions.
                path.pop();
            }
        }
    }

    backtrack(0, []);
    return result;
};