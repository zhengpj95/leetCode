/**
 * Given an integer array nums where every element appears three times except for one,
 * which appears exactly once. Find the single element and return it.
 *
 * Constraints:
 * 1 <= nums.length <= 3 * 10^4
 * -2^31 <= nums[i] <= 2^x31 - 1
 * Each element in nums appears exactly three times except for one element which appears once.
 *
 * Follow up: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 * @author zheng
 * @date 2021/01/07 22:12:38
 */

/**
 * O(T)=O(n)
 * O(S)=O(n)
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	let obj = {};
	for (let num of nums) {
		obj[num] = (obj[num] || 0) + 1;
	}
	for (let num of nums) {
		if (obj[num] == 1) {
			return num;
		}
	}
	return -1;
};

/**
 * O(T)=O(32n)
 * O(S)=O(1)
 * 思路：nums元素全部转换成二进制，计算32位上 1 的个数，如果大于等于 3 了，证明其出现了多次（有多个元素在这一位上有1）
 * 那么让其对 3 求余。最后留下的二进制中的 1 就是所求元素的 1 了。
 * （这个3，是因为除了一个元素外其他元素都出现3次。那么如果出现5次，那对5求余即可）
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber2 = function (nums) {
	let res = 0;
	for (let i = 0; i < 32; i++) {
		let sum = 0;
		for (let num of nums) {
			if (((num >> i) & 1) == 1) {
				sum++;
			}
		}
		sum %= 3;
		res |= sum << i;
	}
	return res;
};

let arr = [2, 2, 3, 2];
console.log(singleNumber2(arr));
