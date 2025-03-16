
class Solution:
    def dailyTemperatures(self, temperatures: list[int]) -> list[int]:
        n = len(temperatures)
        answer = [0] * n
        stack = []  # Stack to store (temperature, index) pairs

        for i, temp in enumerate(temperatures):
            while stack and temp > stack[-1][0]:
                prev_temp, prev_index = stack.pop()
                answer[prev_index] = i - prev_index
            stack.append((temp, i))

        return answer

