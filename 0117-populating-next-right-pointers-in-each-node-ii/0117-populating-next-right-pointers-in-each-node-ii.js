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

    let head = root;
    
    while (head) {
        // Dummy node to build the next level's linked list
        let dummy = new Node();
        let curr = dummy;
        
        // Traverse the current level using the 'next' pointers
        while (head) {
            if (head.left) {
                curr.next = head.left;
                curr = curr.next;
            }
            if (head.right) {
                curr.next = head.right;
                curr = curr.next;
            }
            // Move to the next node on the same level
            head = head.next;
        }
        
        // Move to the next level, which starts at dummy.next
        head = dummy.next;
    }
    
    return root;
};