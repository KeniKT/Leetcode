class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        merged = []
        i, j = 0, 0
        len1, len2 = len(word1), len(word2)

        while i < len1 and j < len2:
            merged.append(word1[i])
            merged.append(word2[j])
            i += 1
            j += 1

        merged.append(word1[i:])
        merged.append(word2[j:])

        return "".join(merged)

