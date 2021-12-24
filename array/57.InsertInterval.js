/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
	let result = [];
	/**
	 * 三种情况：前，后，merge
	 */
	for (let i = 0; i < intervals.length; i++) {
		let item = intervals[i];
		if (!newInterval || item[1] < newInterval[0]) {
			result.push(item);
		} else if (newInterval[1] < item[0]) {
			result.push(newInterval, item);
			newInterval = null;
		} else {
			newInterval[0] = Math.min(newInterval[0], item[0]);
			newInterval[1] = Math.max(newInterval[1], item[1]);
		}
	}
	if (newInterval) {
		result.push(newInterval);
	}
	return result;
};

// let intervals = [
// 		[1, 2],
// 		[3, 5],
// 		[6, 7],
// 		[8, 10],
// 		[12, 16],
// 	],
// 	newInterval = [4, 8];
let intervals = [
		[1, 3],
		[6, 9],
	],
	newInterval = [2, 5];
console.log(insert(intervals, newInterval));
