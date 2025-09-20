/**
 * Definition for a Node.
 * function Node(val, left, right, next) {
 * this.val = val === undefined ? null : val;
 * this.left = left === undefined ? null : left;
 * this.right = right === undefined ? null : right;
 * this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) {
        return root;
    }

    let level_start = root;

    while (level_start.left) {
        let current = level_start;
        while (current) {
            // Case 1: Connect children of the same parent
            current.left.next = current.right;

            // Case 2: Connect the right child to the left child of the next node
            if (current.next) {
                current.right.next = current.next.left;
            }
            
            // Move to the next node on the current level
            current = current.next;
        }
        // Move to the next level
        level_start = level_start.left;
    }

    return root;
};