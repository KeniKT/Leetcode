/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 * this.val = (val===undefined ? 0 : val)
 * this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    // If the list is empty or has only one node, there are no duplicates to remove.
    if (!head || !head.next) {
        return head;
    }

    let current = head;

    // Traverse the list as long as current and current.next exist
    while (current !== null && current.next !== null) {
        // If the current node's value is the same as the next node's value
        if (current.val === current.next.val) {
            // Skip the duplicate node by pointing current.next to current.next.next
            current.next = current.next.next;
        } else {
            // If values are different, move to the next node
            current = current.next;
        }
    }

    // Return the head of the modified list
    return head;
};