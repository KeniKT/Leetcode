/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val === undefined ? 0 : val)
 * this.left = (left === undefined ? null : left)
 * this.right = (right === undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    // If the root is null, there is no tree, so return an empty array.
    if (!root) {
        return [];
    }

    // This array will store the values of the nodes we can see from the right side.
    const result = [];
    // A queue is used for level-order traversal (BFS). Start with the root node.
    const queue = [root];

    // Continue the traversal as long as there are nodes in the queue.
    while (queue.length > 0) {
        // Get the number of nodes at the current level.
        const levelSize = queue.length;

        // Iterate through all the nodes at the current level.
        for (let i = 0; i < levelSize; i++) {
            // Dequeue the first node from the current level.
            const currentNode = queue.shift();

            // The rightmost node of the current level is the last one we process in this loop.
            // When i equals the size of the level minus 1, we have reached the last node.
            if (i === levelSize - 1) {
                result.push(currentNode.val);
            }

            // Enqueue the left child if it exists.
            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            // Enqueue the right child if it exists.
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
    }

    return result;
};
