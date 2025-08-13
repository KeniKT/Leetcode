/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let maxArea = 0;
  const stack = []; // Stores indices
  const n = heights.length;

  for (let i = 0; i <= n; i++) {
    // We add an extra bar of height 0 at the end to process remaining bars in the stack
    const h = (i === n) ? 0 : heights[i];
    
    // While the current bar is shorter than the bar at the top of the stack
    while (stack.length > 0 && heights[stack[stack.length - 1]] > h) {
      const height = heights[stack.pop()];
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, height * width);
    }
    
    stack.push(i);
  }

  return maxArea;
};