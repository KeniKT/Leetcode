/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 * this.val = (val===undefined ? 0 : val)
 * this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    // Create a dummy node to handle edge cases, particularly for the new head of the list
    const dummy = new ListNode(0, head);
    let prev = dummy;
    let curr = head;

    while (curr) {
        // Step 1: Check if there are k nodes to reverse
        let tail = curr;
        let count = 0;
        while (tail && count < k) {
            tail = tail.next;
            count++;
        }

        if (count < k) {
            // Not enough nodes left, break the loop
            break;
        }

        // Step 2: Reverse the k nodes
        let reverseHead = curr;
        let prevGroupTail = prev; // The node before the current k-group

        for (let i = 0; i < k; i++) {
            let nextNode = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextNode;
        }

        // Step 3: Link the reversed group
        // The original `head` of the group becomes the `tail` of the reversed group.
        // It's `next` pointer should point to the next `k` nodes.
        const nextGroupHead = reverseHead;
        prevGroupTail.next = prev; // `prev` is the new head of the reversed group.
        nextGroupHead.next = curr;

        // Step 4: Prepare for the next iteration
        // The new `prev` is the original `head` of the group
        prev = nextGroupHead;
    }

    return dummy.next;
};