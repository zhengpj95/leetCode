/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
	let min1 = 0;
	let min2 = Number.MAX_SAFE_INTEGER;
	let preSum = [0];
	for (let i = 0; i < nums.length; i++) {
		preSum[i + 1] = preSum[i] + nums[i];
	}

	for (let num of preSum) {
		if (num < 0) {
			min1 = Math.min(min1, num);
		}
		if (num >= 0) {
			min2 = Math.min(min2, num);
		}
	}
	if (min2 == 0) {
		min2 = 1;
	}
	return Math.abs(min2 - min1);
};

let nums = [-3, 2, -3, 4, 2];
console.log(minStartValue(nums));
