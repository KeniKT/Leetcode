/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // Sort the intervals based on their start times
    intervals.sort((a, b) => a[0] - b[0]);

    const mergedIntervals = [];

    for (const interval of intervals) {
        // If mergedIntervals is empty or the current interval does not overlap with the last merged interval
        if (mergedIntervals.length === 0 || interval[0] > mergedIntervals[mergedIntervals.length - 1][1]) {
            mergedIntervals.push(interval);
        } else {
            // There is an overlap, so merge the current interval with the last merged interval
            // Update the end time of the last merged interval to be the maximum of the current end and the last merged end
            mergedIntervals[mergedIntervals.length - 1][1] = Math.max(mergedIntervals[mergedIntervals.length - 1][1], interval[1]);
        }
    }

    return mergedIntervals;
};