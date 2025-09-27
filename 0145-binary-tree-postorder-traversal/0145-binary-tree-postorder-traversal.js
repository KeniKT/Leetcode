/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val)
 * this.left = (left===undefined ? null : left)
 * this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if (root === null) {
        return [];
    }
    
    const stack = [root];
    const result = []; // This will store the R-R-L traversal initially

    while (stack.length > 0) {
        const node = stack.pop();
        
        // Add the node's value to the result (building the R-R-L traversal)
        result.push(node.val); 

        // Push children onto the stack. 
        // We want R-R-L traversal, so we process Root, then push Left, then Right.
        // The LIFO nature of the stack means Right is popped and processed *before* Left.
        
        // If the node has a left child, push it.
        if (node.left) {
            stack.push(node.left);
        }
        
        // If the node has a right child, push it.
        if (node.right) {
            stack.push(node.right);
        }
    }
    
    // The 'result' currently holds Root -> Right -> Left.
    // Reversing it gives Left -> Right -> Root (Postorder).
    return result.reverse();
};