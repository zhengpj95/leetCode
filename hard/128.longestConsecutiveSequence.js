/**
 * dp
 * Given an unsorted array of integers,
 * find the length of the longest consecutive elements sequence.
 * Your algorithm should run in O(n) complexity.
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
	if (!nums.length) {
		return 0;
	}

	nums.sort((a, b) => a - b);
	nums = [...new Set(nums)];

	let dp = new Array(nums.length).fill(1); //[1];
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] === nums[i - 1] + 1) {
			dp[i] = dp[i - 1] + 1;
		} else {
			dp[i] = 1;
		}
	}

	return Math.max(...dp);
};

/**
 * sorting
 * @param {number[]} nums
 */
const longestConsecutive2 = function (nums) {
	if (!nums.length) {
		return 0;
	}

	nums.sort((a, b) => a - b);
	let cur = 1;
	let max = 1;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] === nums[i - 1]) {
			continue;
		}
		if (nums[i] === nums[i - 1] + 1) {
			cur += 1;
		} else {
			max = Math.max(max, cur);
			cur = 1;
		}
	}
	return Math.max(cur, max);
};

/**
 * HashSet and Intelligent Sequence Building
 * @param {number[]} nums
 */
const longestConsecutive3 = function (nums) {};

let arr = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];
let res = longestConsecutive(arr);
console.log(res);
console.log(longestConsecutive2(arr));

// 创建指定长度的数组，并填充1
// let a = new Array(8).fill(1);
// console.log(a);
