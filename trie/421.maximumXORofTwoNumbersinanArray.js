/**
 * Given an integer array nums, return the maximum result of nums[i] XOR nums[j], where 0 ≤ i ≤ j < n.
 * Follow up: Could you do this in O(n) runtime?
 *
 * Constraints:
 * 1 <= nums.length <= 2 * 10^4
 * 0 <= nums[i] <= 2^31 - 1
 * @author zheng
 * @date 2020/11/19 10:49:50
 */

/**
 * 方式一：位操作，时间复杂度很高O(n^n)
 * 方式二：Trie？但是如何操作呢？初步思路：
 * 			1. 插入每个数字时，都与前面的异或后插入
 * 				查找时，找出最长的那一条路径且最大的，也就是每条路径都需要遍历，
 * 				在路径分叉点时，选择结点值是1的路径，但是又没法知道路径长度，所以还是全部遍历
 * 			2. 或者插入时，以异或后的二进制数长度为key，值是数组形式，
 * 				查找时，找最长的key即可，再在其中选择路径，只选择结点值是1的路径即可
 * 			3. 这样的操作一样是O(n^n)的时间复杂度呀
 */

/**
 * Bit Manipulation
 * Time complexity: O(n^n) n=nums.length
 * Space complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */
const findMaximumXOR = function (nums) {
	if (nums.length < 2) return 0;
	let result = Number.MIN_SAFE_INTEGER;
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			result = Math.max(result, nums[i] ^ nums[j]);
		}
	}
	return result;
};

let nums = [3, 10, 5, 25, 2, 8];
nums = [1];
// nums = [2, 4];
// nums = [8, 10, 2];
nums = [14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70];
console.log(findMaximumXOR(nums));
