from typing import List

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if not nums:
            return 0

        # Pointer for the next unique element's position
        i = 0

        # Pointer to iterate through the array
        for j in range(1, len(nums)):
            # If the current element is different from the element at 'i'
            # it means we found a new unique element.
            if nums[j] != nums[i]:
                i += 1  # Move 'i' to the next position
                nums[i] = nums[j] # Place the unique element at 'nums[i]'

        # The number of unique elements is i + 1 (since i is 0-indexed)
        return i + 1