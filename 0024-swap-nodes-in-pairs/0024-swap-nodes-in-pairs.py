# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # Handle edge cases: empty list or list with only one node
        if not head or not head.next:
            return head

        # Create a dummy node to simplify handling the head of the list
        dummy = ListNode(0)
        dummy.next = head
        
        # 'prev' will always point to the node before the current pair
        prev = dummy

        while prev.next and prev.next.next:
            # Identify the two nodes to be swapped
            first_node = prev.next
            second_node = prev.next.next

            # Perform the swap
            # 1. 'prev' bypasses 'first_node' and points to 'second_node'
            prev.next = second_node
            # 2. 'first_node' (which was 'prev.next') now points to the node after 'second_node'
            first_node.next = second_node.next
            # 3. 'second_node' points back to 'first_node'
            second_node.next = first_node

            # Move 'prev' forward by two nodes to prepare for the next pair
            # 'first_node' is now the second node in the swapped pair
            prev = first_node
        
        # The new head of the list is dummy.next
        return dummy.next