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
var insertionSortList = function(head) {
    // Handle edge case: empty list or list with only one node is already sorted
    if (!head || !head.next) {
        return head;
    }

    // Create a dummy node to act as the start of the sorted list.
    // This simplifies the insertion logic, especially when inserting before the original head.
    const dummy = new ListNode(0);
    dummy.next = head;

    // 'sortedTail' points to the last node of the sorted part of the list.
    // Initially, the first node (head) is considered sorted.
    let sortedTail = head;
    
    // 'current' is the node from the unsorted part to be inserted.
    let current = head.next;

    // Iterate through the unsorted part of the list
    while (current) {
        // If the current node is greater than or equal to the sortedTail, 
        // it's already in the correct sorted position (at the end of the sorted part).
        // We just extend the sorted part by one node.
        if (current.val >= sortedTail.val) {
            sortedTail = current;
            current = current.next; // Move to the next node to be inserted
        } else {
            // The current node needs to be inserted somewhere *before* sortedTail.
            
            // 1. Detach 'current' from the unsorted list
            // We need to update sortedTail.next to skip the 'current' node,
            // as 'current' is about to be moved.
            sortedTail.next = current.next; 
            
            // Temporarily store the node to be inserted
            const nodeToInsert = current; 
            
            // Move 'current' to the next node in the original list for the next iteration
            current = current.next;

            // 2. Find the correct insertion spot in the sorted list (starting from dummy.next)
            let prev = dummy; // 'prev' tracks the node *before* the insertion point
            let runner = dummy.next; // 'runner' is the current node being checked in the sorted part

            // Iterate through the sorted list until we find the spot where runner.val >= nodeToInsert.val
            while (runner.val < nodeToInsert.val) {
                prev = runner;
                runner = runner.next;
            }

            // 3. Insert 'nodeToInsert' between 'prev' and 'runner'
            // The insertion spot is after 'prev' and before 'runner'.
            nodeToInsert.next = runner;
            prev.next = nodeToInsert;
        }
    }

    // The sorted list starts at dummy.next
    return dummy.next;
};

// Note: The ListNode function definition is assumed to be available 
// (as provided in the problem description).
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }