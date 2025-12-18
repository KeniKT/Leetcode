/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 * this.val = (val===undefined ? 0 : val)
 * this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // Create a dummy node to act as the head of the resulting list
    const dummyHead = new ListNode(0);
    // 'current' will be used to build and traverse the new list
    let current = dummyHead;
    let carry = 0;
    
    // Loop continues as long as there are digits in either list or a carry remains
    while (l1 !== null || l2 !== null || carry !== 0) {
        // Get the value of the current node or 0 if the list is exhausted
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        
        // Calculate the sum of the two digits and the carry
        const sum = val1 + val2 + carry;
        
        // The new carry is the tens place (e.g., 17 / 10 = 1)
        carry = Math.floor(sum / 10);
        
        // The new digit is the ones place (e.g., 17 % 10 = 7)
        const digit = sum % 10;
        
        // Create the new node for the result list and append it
        current.next = new ListNode(digit);
        // Move the 'current' pointer forward
        current = current.next;
        
        // Advance the input list pointers (if they are not null)
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    
    // The result is the node immediately following the dummy head
    return dummyHead.next;
};