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
var sortList = function(head) {
    // Base case: 0 or 1 element list is already sorted
    if (!head || !head.next) {
        return head;
    }

    // 1. Split the list into two halves
    let slow = head;
    let fast = head;
    let prev = null; // To break the link

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    // 'slow' is now the head of the second half
    // 'prev' is the tail of the first half
    // Break the link to separate the two halves
    if (prev) {
        prev.next = null;
    }

    // 2. Recursively sort the two halves
    const left = sortList(head);
    const right = sortList(slow);

    // 3. Merge the two sorted halves
    return merge(left, right);
};

/**
 * Helper function to merge two sorted linked lists
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const merge = (l1, l2) => {
    // Dummy node to start the merged list
    const dummy = new ListNode(0);
    let current = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    // Attach the remaining nodes (if any)
    if (l1) {
        current.next = l1;
    } else if (l2) {
        current.next = l2;
    }

    return dummy.next;
};

// Note: The ListNode definition is assumed to be available in the execution environment
/*
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
*/