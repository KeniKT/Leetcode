from typing import List

class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []

        phone_map = {
            '2': "abc",
            '3': "def",
            '4': "ghi",
            '5': "jkl",
            '6': "mno",
            '7': "pqrs",
            '8': "tuv",
            '9': "wxyz"
        }

        result = []
        
        # current_combination: A list of characters representing the current combination being built.
        # index: The index of the digit we are currently processing in the 'digits' string.
        def backtrack(index, current_combination):
            # Base case: If we have processed all digits, add the current combination to the result.
            if index == len(digits):
                result.append("".join(current_combination))
                return

            digit = digits[index]
            letters = phone_map[digit]

            # Iterate through each letter for the current digit
            for letter in letters:
                current_combination.append(letter)  # Choose
                backtrack(index + 1, current_combination) # Explore
                current_combination.pop()           # Unchoose (backtrack)

        backtrack(0, [])
        return result