class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        left = 0
        max_length = 0
        char_counts = {}
        for right in range(len(s)):
            char_counts[s[right]] = char_counts.get(s[right], 0) + 1
            max_count = max(char_counts.values()) if char_counts else 0
            window_size = right - left + 1
            if window_size - max_count > k:
                char_counts[s[left]] -= 1
                left += 1
            max_length = max(max_length, right - left + 1)
        return max_length