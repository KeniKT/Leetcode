from typing import List

class Solution:
    def separateSquares(self, squares: List[List[int]]) -> float:
        def compute_area(y_mid: float) -> float:
            above, below = 0, 0
            
            for x, y, l in squares:
                top = y + l
                if y_mid <= y:
                    above += l * l
                elif y_mid >= top:
                    below += l * l
                else:
                    above += (top - y_mid) * l
                    below += (y_mid - y) * l

            return above - below
        
        lo = min(y for _, y, _ in squares)
        hi = max(y + l for _, y, l in squares)

        eps = 1e-6
        while hi - lo > eps:
            mid = (lo + hi) / 2
            if compute_area(mid) > 0:
                lo = mid
            else:
                hi = mid

        return round(lo, 5)
