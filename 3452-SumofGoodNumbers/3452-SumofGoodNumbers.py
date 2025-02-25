from typing import List

class Solution:
    def sumOfGoodNumbers(self, nums: List[int], k: int) -> int:
        total = 0
        n = len(nums)
        
        for i in range(n):
            is_good = True
            
            if i - k >= 0 and nums[i] <= nums[i - k]:
                is_good = False
            
            if i + k < n and nums[i] <= nums[i + k]:
                is_good = False
            
            if is_good:
                total += nums[i]
        
        return total

solution = Solution()
print(solution.sumOfGoodNumbers([1, 3, 2, 1, 5, 4], 2))
print(solution.sumOfGoodNumbers([2, 1], 1))