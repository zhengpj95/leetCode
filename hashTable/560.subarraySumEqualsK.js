/**
 * Given an array of integers and an integer k,
 * you need to find the total number of continuous subarrays whose sum equals to k.
 * @author zheng
 * @date 2020/10/10 18:46:44
 */

/**
 * 前缀和技巧
 * Time complexity: O(N^2)
 * Space complexity: O(N)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function (nums, k) {
	let preSum = [0];
	for (let i = 0; i < nums.length; i++) {
		preSum[i + 1] = preSum[i] + nums[i];
	}

	let result = 0;
	for (let i = 1; i <= nums.length; i++) {
		for (let j = 0; j < i; j++) {
			if (preSum[i] - preSum[j] === k) {
				result++;
			}
		}
	}
	return result;
};

/**
 * 前缀和技巧 + 缓存
 * Time complexity: O(N)
 * Space complexity: O(N)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum2 = function (nums, k) {
	let map = new Map();
	map.set(0, 1);

	let result = 0;
	let preSum = 0; //前n项和
	for (let i = 0; i < nums.length; i++) {
		preSum += nums[i];

		// let target = preSum - k;
		// if (map.has(target)) {
		// 	result += map.get(target);
		// }
		result += map.get(preSum - k) ? map.get(preSum - k) : 0;

		map.set(preSum, map.has(preSum) ? map.get(preSum) + 1 : 1);
	}
	return result;
};

let arr = [1, 1, 1, 3, 2];
console.log(subarraySum(arr, 2));
console.log(subarraySum2(arr, 2));
