from typing import List

class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        matrix = [[0] * n for _ in range(n)]
        
        top, bottom = 0, n - 1
        left, right = 0, n - 1
        
        num = 1
        
        while top <= bottom and left <= right:
            # Fill from left to right (top row)
            for c in range(left, right + 1):
                matrix[top][c] = num
                num += 1
            top += 1
            
            # Fill from top to bottom (right column)
            for r in range(top, bottom + 1):
                matrix[r][right] = num
                num += 1
            right -= 1
            
            # Fill from right to left (bottom row) - only if there's a row left
            if top <= bottom:
                for c in range(right, left - 1, -1):
                    matrix[bottom][c] = num
                    num += 1
                bottom -= 1
            
            # Fill from bottom to top (left column) - only if there's a column left
            if left <= right:
                for r in range(bottom, top - 1, -1):
                    matrix[r][left] = num
                    num += 1
                left += 1
                
        return matrix