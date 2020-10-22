/**
 * Given a non-empty array of integers nums,
 * every element appears twice except for one. Find that single one.
 *
 * Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?
 * @author zheng
 * @date 2020/10/22 10:27:54
 */

/**
 * Approach 1: Hash Table
 * Time complexity: O(N)
 * Space complexity: O(N)
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
	if (!nums || nums.length <= 1) return nums[0];
	let map = new Map();
	for (let item of nums) {
		map.set(item, map.has(item) ? map.get(item) + 1 : 1);
	}
	for (let item of map.entries()) {
		if (item[1] === 1) return item[0];
	}
	return 0;
};

/**
 * Approach 2: Math
 * 2 ∗ (a+b+c) − (a+a+b+b+c) = c
 * Time complexity: O(N)
 * Space complexity: O(N)
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber2 = function (nums) {
	let set = new Set();
	let setSum = 0,
		numSum = 0;
	for (let item of nums) {
		if (!set.has(item)) {
			set.add(item);
			setSum += item;
		}
		numSum += item;
	}
	return 2 * setSum - numSum;
};

/**
 * Approach 2: Bit Manipulation
 * 异或操作：对应二进制位，相同为0，相异为1，（0^0=0, 1^1=0, 1^0=1, 0^1=1
 * Time complexity: O(N)
 * Space complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber3 = function (nums) {
	let res = 0;
	for (let item of nums) {
		res ^= item;
	}
	return res;
};

let arr = [2, 2, 1, 1, 3];
console.log(singleNumber3(arr));
