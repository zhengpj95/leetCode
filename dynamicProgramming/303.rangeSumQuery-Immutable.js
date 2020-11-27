/**
 * Given an integer array nums,
 * find the sum of the elements between indices i and j (i ≤ j), inclusive.
 *
 * Implement the NumArray class:
 * NumArray(int[] nums) Initializes the object with the integer array nums.
 * int sumRange(int i, int j) Return the sum of the elements of the nums array in the range [i, j] inclusive (i.e., sum(nums[i], nums[i + 1], ... , nums[j]))
 *
 * Constraints:
 * 0 <= nums.length <= 10^4
 * -10^5 <= nums[i] <= 10^5
 * 0 <= i <= j < nums.length
 * At most 10^4 calls will be made to sumRange.
 * @author zheng
 * @date 2020/11/27 11:17:27
 */

// /**
//  * @param {number[]} nums
//  */
// var NumArray = function (nums) {
// 	this.nums = nums;
// };

// /**
//  * 最基础解法
//  * @param {number} i
//  * @param {number} j
//  * @return {number}
//  */
// NumArray.prototype.sumRange = function (i, j) {
// 	let sum = 0;
// 	for (; i <= j; i++) {
// 		sum += this.nums[i];
// 	}
// 	return sum;
// };

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
	this.nums = nums;
	this.dp = null;
};

/**
 * Time complexity: O(n) 或 O(1)
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
	if (!this.dp) {
		this.dp = [];
		for (let i = 0; i < this.nums.length; i++) {
			this.dp[i] = i === 0 ? this.nums[0] : this.nums[i] + this.dp[i - 1];
		}
	}
	if (i === 0) return this.dp[j];
	return this.dp[j] + (this.nums[i] - this.dp[i]);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
