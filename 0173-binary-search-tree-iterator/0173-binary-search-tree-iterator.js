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
 */
var BSTIterator = function(root) {
    // Stack to store the nodes. It will hold the path to the current smallest unvisited node.
    this.stack = [];
    this._pushLeft(root);
};

/**
 * Helper function to push a node and all its left children onto the stack.
 * This prepares the stack so the top is the next smallest element.
 * @param {TreeNode} node
 */
BSTIterator.prototype._pushLeft = function(node) {
    while (node !== null) {
        this.stack.push(node);
        node = node.left;
    }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    // The next smallest element is always at the top of the stack.
    const node = this.stack.pop();
    
    // After visiting the node, we need to find the next smallest element.
    // This will be the smallest element in the *right* subtree of the popped node.
    if (node.right !== null) {
        this._pushLeft(node.right);
    }
    
    return node.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    // If the stack is not empty, there is a next element to visit.
    return this.stack.length > 0;
};

/** * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */