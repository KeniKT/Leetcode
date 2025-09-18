/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 * this.val = (val===undefined ? 0 : val)
 * this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val)
 * this.left = (left===undefined ? null : left)
 * this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if (!head) {
        return null;
    }
    
    // Base case for a single node
    if (!head.next) {
        return new TreeNode(head.val);
    }
    
    // Find the middle of the list using slow and fast pointers
    let slow = head;
    let fast = head;
    let prev = null; // Pointer to the node before slow
    
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // slow is now the middle node, which will be the root
    let root = new TreeNode(slow.val);
    
    // Sever the list to get the left sublist
    if (prev) {
        prev.next = null;
    }
    
    // Recursively build the left and right subtrees
    if (prev) {
        root.left = sortedListToBST(head);
    }
    
    root.right = sortedListToBST(slow.next);
    
    return root;
};