class Solution:
    def grayCode(self, n: int) -> list[int]:
        # The number of elements in an n-bit Gray code sequence is 2^n.
        # This can be calculated as 1 << n (left shift 1 by n bits).
        sequence_length = 1 << n

        # Initialize an empty list to store the Gray code sequence.
        result = []

        # Iterate from 0 up to (2^n - 1)
        for i in range(sequence_length):
            # Calculate the Gray code for 'i' using the formula: G(i) = i ^ (i >> 1)
            # i >> 1 performs a right bit shift, effectively dividing i by 2 and discarding the remainder.
            # ^ is the bitwise XOR operator.
            gray_code_num = i ^ (i >> 1)
            result.append(gray_code_num)

        return result