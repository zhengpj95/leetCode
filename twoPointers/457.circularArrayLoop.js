/**
 * You are given a circular array nums of positive and negative integers.
 * If a number k at an index is positive, then move forward k steps.
 * Conversely, if it's negative (-k), move backward k steps.
 * Since the array is circular, you may assume that the last element's next element is the first element,
 * and the first element's previous element is the last element.
 *
 * Determine if there is a loop (or a cycle) in nums.
 * A cycle must start and end at the same index and the cycle's length > 1.
 * Furthermore, movements in a cycle must all follow a single direction.
 * In other words, a cycle must not consist of both forward and backward movements.
 *
 * Note:
 * -1000 ≤ nums[i] ≤ 1000
 * nums[i] ≠ 0
 * 1 ≤ nums.length ≤ 5000
 *
 * Follow up:
 * Could you solve it in O(n) time complexity and O(1) extra space complexity?
 * @author zheng
 * @date 2020/11/03 11:55:40
 */

/**
 * Time complexity: O(n) n = nums.length
 * Space complexity: O(n)
 * @param {number[]} nums
 * @return {boolean}
 */
const circularArrayLoop = function (nums) {
	if (!nums || nums.length < 1) return false;
	let size = nums.length;
	let visited = new Array(size).fill(0);

	for (let i = 0; i < size; i++) {
		if (visited[i]) continue;
		let slow = i;
		let fast = getIndex(i, nums);

		// 乘法保证同方向，保证 slow 和 fast 的下一个为同方向的
		while (nums[i] * nums[fast] > 0 && nums[i] * nums[getIndex(fast, nums)] > 0) {
			if (slow === fast) {
				// 环的长度为1的不算
				if (slow === getIndex(slow, nums)) break;
				return true;
			}
			slow = getIndex(slow, nums);
			fast = getIndex(getIndex(fast, nums), nums);
		}

		let idx = i;
		while (nums[idx] * nums[i] > 0 && visited[idx] === 0) {
			visited[idx] = 1;
			idx = getIndex(idx, nums);
		}
	}
	return false;
};

/**
 * @param {number} i
 * @param {number[]} nums
 */
const getIndex = (i, nums) => {
	let size = nums.length;
	return ((i + nums[i]) % size) + (i + nums[i] >= 0 ? 0 : size);
};

let nums = [2, -1, 1, 2, 2];
console.log(circularArrayLoop(nums)); // true
console.log(circularArrayLoop([-1, 2])); // false
console.log(circularArrayLoop([-2, 1, -1, -2, -2])); // false
console.log(circularArrayLoop([-1, -1, -1])); // true
console.log(circularArrayLoop([1, 1, 1, 1, 1, 1, 1, 1, 1, -5])); // false
