/**
 * Given an array of integers and an integer k,
 * you need to find the total number of continuous subarrays whose sum equals to k.
 * @author zheng
 * @date 2020/10/10 18:46:44
 */

/**
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

let arr = [1, 1, 1, 3, 2];
console.log(subarraySum(arr, 2));
