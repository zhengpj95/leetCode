/**
 * Given an array of intervals where intervals[i] = [starti, endi],
 * merge all overlapping intervals,
 * and return an array of the non-overlapping intervals that cover all the intervals in the input.
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	if (!intervals || !intervals.length) {
		return [];
	}
	intervals.sort((a, b) => a[0] - b[0]);
	for (let i = 0; i < intervals.length - 1; i++) {
		if (intervals[i][1] >= intervals[i + 1][0]) {
			intervals[i][1] = Math.max(intervals[i][1], ...intervals[i + 1]);
			intervals.splice(i + 1, 1);
			i--;
		}
	}
	return intervals;
};
