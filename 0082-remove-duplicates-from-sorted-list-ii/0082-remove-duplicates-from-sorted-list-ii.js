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
    let dummy = new ListNode(0, head);
    let prev = dummy;
    
    while (head && head.next) {
        if (head.val === head.next.val) {
            // Find the end of the duplicate sequence
            while (head.next && head.val === head.next.val) {
                head = head.next;
            }
            // Skip all duplicates by updating prev.next
            prev.next = head.next;
        } else {
            // No duplicates, move prev forward
            prev = prev.next;
        }
        // Always advance head
        head = head.next;
    }
    
    return dummy.next;
};