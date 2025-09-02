/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 * this.val = (val===undefined ? 0 : val)
 * this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if (!head || left === right) {
        return head;
    }

    // Create a dummy node to handle the case where left = 1
    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    // Move prev to the node before the left-th node
    for (let i = 0; i < left - 1; i++) {
        prev = prev.next;
    }

    // Start of the sublist to be reversed
    let current = prev.next;

    // Reverse the sublist from left to right
    for (let i = 0; i < right - left; i++) {
        const nextNode = current.next;
        current.next = nextNode.next;
        nextNode.next = prev.next;
        prev.next = nextNode;
    }

    return dummy.next;
};