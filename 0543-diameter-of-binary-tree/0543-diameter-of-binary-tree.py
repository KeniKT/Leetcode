# Definition for a binary tree node.
from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        def getHeightDiameter(node):
            if not node:
                return -1, 0
            left_height, left_diameter = getHeightDiameter(node.left)
            right_height, right_diameter = getHeightDiameter(node.right)
            current_height = 1 + max(left_height, right_height)
            current_diameter = max(left_diameter, right_diameter, left_height + right_height + 2)
            return current_height, current_diameter
            
        if not root:
            return 0
            
        _, diameter = getHeightDiameter(root)
        return diameter