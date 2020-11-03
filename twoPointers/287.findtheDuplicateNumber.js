/**
 * Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
 * There is only one duplicate number in nums, return this duplicate number.
 *
 * Follow-ups:
 * How can we prove that at least one duplicate number must exist in nums?
 * Can you solve the problem without modifying the array nums?
 * Can you solve the problem using only constant, O(1) extra space?
 * Can you solve the problem with runtime complexity less than O(n^2)?
 *
 * Constraints:
 * 2 <= n <= 3 * 104
 * nums.length == n + 1
 * 1 <= nums[i] <= n
 * All the integers in nums appear only once except for precisely one integer which appears two or more times.
 * @author zheng
 * @date 2020/11/03 09:48:33
 */

/**
 * The first two approaches mentioned do not satisfy the constraints given in the prompt,
 * but they are solutions that you might be likely to come up with during a technical interview. As an interviewer,
 * I personally would not expect someone to come up with the cycle detection solution unless they have heard it before.
 *
 * If we want to prove that there is at least one duplicate number must exist in nums.
 * We should find the maximum and the minimum number in the nums,
 * if the nums size is bigger than the distance between the maximum and minimum number, there is at least on duplicate number.
 */

/**
 * Approach 1: Set
 * Time complexity: O(n)
 * Space complexity: O(n)
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function (nums) {
	let set = new Set();
	for (let num of nums) {
		if (set.has(num)) return num;
		set.add(num);
	}
	return -1;
};

/**
 * Approach 2: Sorting
 * Time complexity: O(nlogn)  排序算法
 * Space complexity: O(1) or O(n) 此处直接修改原数组了，如果不能修改原数组，则需要 O(n) Space
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate2 = function (nums) {
	nums.sort((a, b) => a - b);
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] === nums[i - 1]) {
			return nums[i];
		}
	}
	return -1;
};

let nums = [1, 3, 4, 2, 2];
console.log(findDuplicate(nums));
console.log(findDuplicate2([3, 1, 3, 4, 2]));
console.log(findDuplicate2([1, 1]));
console.log(findDuplicate2([1, 1, 2]));
