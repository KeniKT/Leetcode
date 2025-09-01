/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 * this.val = (val===undefined ? 0 : val)
 * this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    // Create two dummy nodes to serve as the heads of the two partitions
    let less_head = new ListNode(0);
    let greater_head = new ListNode(0);

    // Initialize pointers for the tails of the two partitions
    let less_tail = less_head;
    let greater_tail = greater_head;

    // Iterate through the original linked list
    let current_node = head;
    while (current_node !== null) {
        if (current_node.val < x) {
            // Node value is less than x, append to the 'less' list
            less_tail.next = current_node;
            less_tail = less_tail.next;
        } else {
            // Node value is greater than or equal to x, append to the 'greater' list
            greater_tail.next = current_node;
            greater_tail = greater_tail.next;
        }
        // Move to the next node in the original list
        current_node = current_node.next;
    }

    // Connect the 'less' partition to the 'greater' partition
    less_tail.next = greater_head.next;
    
    // Set the end of the 'greater' partition to null to avoid cycles
    greater_tail.next = null;

    // The new head is the node after the dummy 'less_head'
    return less_head.next;
};