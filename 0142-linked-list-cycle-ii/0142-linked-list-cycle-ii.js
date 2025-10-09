/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 * this.val = val;
 * this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (head === null || head.next === null) {
        return null;
    }

    let slow = head;
    let fast = head;

    // 1. Detect the cycle
    // Loop until fast and slow meet, or fast reaches the end (no cycle)
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            // Cycle detected
            
            // 2. Find the start of the cycle
            let ptr1 = head;
            let ptr2 = slow; // slow is at the meeting point

            // Move both pointers one step at a time until they meet.
            // This meeting point is the start of the cycle.
            while (ptr1 !== ptr2) {
                ptr1 = ptr1.next;
                ptr2 = ptr2.next;
            }

            return ptr1;
        }
    }

    // If the loop finishes without the pointers meeting, there is no cycle
    return null;
};