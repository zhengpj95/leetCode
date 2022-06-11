/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
	let sum = nums.reduce((a, b) => {
		return a + b;
	}, 0);
	if (sum == x) {
		return nums.length;
	}
	let target = sum - x;
	let subSum = 0;
	let left = 0,
		right = 0;
	let rst = Number.MIN_SAFE_INTEGER;

	while (right < nums.length) {
		// 扩大
		subSum += nums[right];

		// 缩小
		while (subSum >= target && left <= right) {
			if (subSum == target) {
				rst = Math.max(rst, right - left + 1);
			}
			subSum -= nums[left];
			left++;
		}
		right++;
	}

	return rst == Number.MIN_SAFE_INTEGER ? -1 : nums.length - rst;
};

// console.log(minOperations([1, 1, 4, 2, 3], 5));
// console.log(minOperations([5, 6, 7, 8, 9], 4));
// console.log(minOperations([5, 2, 3, 1, 1], 5));
// console.log(minOperations([1, 1], 3));
// console.log(minOperations([3, 2, 20, 1, 1, 3], 10));
console.log(minOperations([8828, 9581, 49, 9818, 9974, 9869, 9991, 10000, 10000, 10000, 9999, 9993, 9904, 8819, 1231, 6309], 134365));
