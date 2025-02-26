from typing import List

class Solution:
    def subarraySum(self, nums: List[int]) -> int:
        n = len(nums)
        prefix = [0] * (n + 1)  # Prefix sum array
        
        # Compute prefix sum
        for i in range(n):
            prefix[i + 1] = prefix[i] + nums[i]
        
        total_sum = 0
        for i in range(n):
            start = max(0, i - nums[i])
            total_sum += prefix[i + 1] - prefix[start]
        
        return total_sum
