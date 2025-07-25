class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1

        while left <= right:
            mid = left + (right - left) // 2

            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                # Target is in the right half, or should be inserted after mid
                left = mid + 1
            else: # nums[mid] > target
                # Target is in the left half, or should be inserted before mid
                right = mid - 1
        
        # If the loop finishes, the target was not found.
        # 'left' now represents the index where the target should be inserted.
        return left