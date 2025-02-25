from typing import List

class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        n = len(digits)
        
        for i in range(n - 1, -1, -1):
            if digits[i] < 9:
                digits[i] += 1
                return digits
            digits[i] = 0
        
        return [1] + digits

solution = Solution()
print(solution.plusOne([1, 2, 3]))
print(solution.plusOne([4, 3, 2, 1]))
print(solution.plusOne([9]))