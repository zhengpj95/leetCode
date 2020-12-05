/**
 * Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
 * Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?
 *
 * Constraints:
 * n == nums.length
 * 1 <= n <= 10^4
 * 0 <= nums[i] <= n
 * All the numbers of nums are unique.
 * @author zheng
 * @date 2020/12/05 23:08:39
 */

/**
 * O(T)=O(n)
 * O(S)=O(n)
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
	let n = nums.length;
	let arr = new Array(n + 1);
	for (let i = 0; i < n; i++) {
		arr[nums[i]] = 1;
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == null) {
			return i;
		}
	}
};

/**
 * O(T)=O(n)
 * O(S)=O(1)
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber2 = function (nums) {
	let n = nums.length;
	let expectSum = 0;
	for (let i = 0; i <= n; i++) {
		expectSum += i;
	}
	let sum = nums.reduce((prev, next) => prev + next);
	return expectSum - sum;
};

/**
 * O(T)=O(n)
 * O(S)=O(1)
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber3 = function (nums) {
	let missing = nums.length;
	for (let i = 0; i < nums.length; i++) {
		missing ^= i ^ nums[i];
	}
	return missing;
};
