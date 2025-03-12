class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1) > len(s2):
            return False

        s1_count = {}
        for char in s1:
            s1_count[char] = s1_count.get(char, 0) + 1

        s2_count = {}
        for i in range(len(s1)):
            s2_count[s2[i]] = s2_count.get(s2[i], 0) + 1

        if s1_count == s2_count:
            return True

        for i in range(len(s1), len(s2)):
            s2_count[s2[i]] = s2_count.get(s2[i], 0) + 1
            s2_count[s2[i - len(s1)]] -= 1
            if s2_count[s2[i - len(s1)]] == 0:
                del s2_count[s2[i - len(s1)]]

            if s1_count == s2_count:
                return True

        return False