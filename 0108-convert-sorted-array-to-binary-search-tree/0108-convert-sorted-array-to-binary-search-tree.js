/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val)
 * this.left = (left===undefined ? null : left)
 * this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    // Helper function for the recursive process
    function convert(left, right) {
        // Base case: if the subarray is empty, return null
        if (left > right) {
            return null;
        }

        // Find the middle element to serve as the root
        const mid = Math.floor((left + right) / 2);
        const root = new TreeNode(nums[mid]);

        // Recursively build the left subtree
        root.left = convert(left, mid - 1);
        
        // Recursively build the right subtree
        root.right = convert(mid + 1, right);

        return root;
    }

    // Start the recursion with the entire array
    return convert(0, nums.length - 1);
};