class Solution:
    def carFleet(self, target: int, position: list[int], speed: list[int]) -> int:
        cars = sorted(zip(position, speed), reverse=True)
        times = [(target - p) / s for p, s in cars]
        fleets = 0
        stack = []
        for time in times:
            if not stack or time > stack[-1]:
                fleets += 1
                stack.append(time)
        return fleets