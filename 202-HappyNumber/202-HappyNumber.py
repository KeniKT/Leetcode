class Solution:
    def isHappy(self, n: int) -> bool:
        def get_next(number):
            # Calculate the sum of the squares of the digits
            total_sum = 0
            while number > 0:
                digit = number % 10
                total_sum += digit ** 2
                number = number // 10
            return total_sum
        
        seen = set()
        while n != 1 and n not in seen:
            seen.add(n)
            n = get_next(n)
        
        # If we exit the loop because n == 1, it's a happy number
        return n == 1