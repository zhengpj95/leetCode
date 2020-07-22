/**
 * nSum problem
 * Time compplexity:
 * @param {number[]} nums
 * @param {number} n
 * @param {number} start
 * @param {number} target
 */
const nSum = function (nums, n, start, target) {
	nums.sort((a, b) => a - b);
	let res = [];

	if (n === 2) {
		let low = start;
		let high = nums.length - 1;
		while (low < high) {
			let left = nums[low];
			let right = nums[high];
			let sum = left + right;
			if (sum < target) {
				while (low < high && nums[low] === left) low++;
			} else if (sum > target) {
				while (low < high && nums[high] === right) high--;
			} else {
				res.push([left, right]);
				while (low < high && nums[low] === left) low++;
				while (low < high && nums[high] === right) high--;
			}
		}
	} else {
		for (let i = start; i < nums.length; i++) {
			let sumRes = nSum(nums, n - 1, i + 1, target - nums[i]);
			for (let item of sumRes) {
				res.push([nums[i], ...item]);
			}
			while (i < nums.length - 1 && nums[i] === nums[i + 1]) i++;
		}
	}
	return res;
};

console.log(nSum([-1, 0, 1, 2, -1, -4], 3, 0, 1));
console.log(nSum([-1, 0, 1, 2, -1, -4], 3, 0, 0));
console.log(nSum([0, 0, 0, 0, 0, 0], 3, 0, 0));
console.log(nSum([1, -1, -1, 0], 3, 0, 0));
