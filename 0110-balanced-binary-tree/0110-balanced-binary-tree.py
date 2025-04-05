# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        def get_height(node: Optional[TreeNode]) -> int:
            if not node:
                return 0
            left_height = get_height(node.left)
            right_height = get_height(node.right)
            return max(left_height, right_height) + 1

        def is_balanced_helper(node: Optional[TreeNode]) -> bool:
            if not node:
                return True
            left_height = get_height(node.left)
            right_height = get_height(node.right)
            if abs(left_height - right_height) > 1:
                return False
            return is_balanced_helper(node.left) and is_balanced_helper(node.right)

        return is_balanced_helper(root)

    def isBalancedOptimized(self, root: Optional[TreeNode]) -> bool:
        def check_balance(node: Optional[TreeNode]) -> int:
            if not node:
                return 0
            left_height = check_balance(node.left)
            if left_height == -1:
                return -1
            right_height = check_balance(node.right)
            if right_height == -1:
                return -1
            if abs(left_height - right_height) > 1:
                return -1
            return max(left_height, right_height) + 1

        return check_balance(root) != -1
