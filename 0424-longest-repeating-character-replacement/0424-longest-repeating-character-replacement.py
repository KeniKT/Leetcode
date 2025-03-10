class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        left = 0
        max_length = 0
        char_counts = {}

        for right, char in enumerate(s):
            char_counts[char] = char_counts.get(char, 0) + 1

            max_freq = max(char_counts.values())

            if (right - left + 1) - max_freq > k:
                char_counts[s[left]] -= 1
                left += 1

            max_length = max(max_length, right - left + 1)

        return max_length