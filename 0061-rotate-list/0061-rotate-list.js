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
var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) {
        return head;
    }

    // Step 1: Find the length of the list and the last node
    let len = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        len++;
    }

    // Step 2: Calculate the effective number of rotations
    k = k % len;
    if (k === 0) {
        return head;
    }

    // Step 3: Find the new tail and perform the rotation
    let newTail = head;
    for (let i = 0; i < len - k - 1; i++) {
        newTail = newTail.next;
    }

    const newHead = newTail.next;
    tail.next = head;
    newTail.next = null;

    return newHead;
};