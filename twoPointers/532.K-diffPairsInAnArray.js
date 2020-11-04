/**
 * Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.
 *
 * A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:
 * 0 <= i, j < nums.length
 * i != j|nums[i] - nums[j]| == k
 * Notice that |val| denotes the absolute value of val.
 *
 * Constraints:
 * 1 <= nums.length <= 10^4
 * -10^7 <= nums[i] <= 10^7
 * 0 <= k <= 10^7
 * @author zheng
 * @date 2020/11/04 10:44:24
 */

/**
 * 分开 k===0 和 k!==0 的情况
 * Time complexity: O(n) n = nums.length
 * Space complexity: O(n)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findPairs = function (nums, k) {
	if (!nums || nums.length <= 1) return 0;

	if (k === 0) {
		let result = 0;
		let map = new Map();
		for (let num of nums) {
			map.set(num, map.has(num) ? map.get(num) + 1 : 1);
			if (map.get(num) === 2) result++;
		}
		return result;
	}

	nums.sort((a, b) => a - b);
	nums = removeDuplicate(nums);
	let result = 0;
	let slow = 0,
		fast = 1;

	while (fast < nums.length) {
		while (nums[fast] - nums[slow] > k) {
			slow++;
		}
		if (nums[fast] - nums[slow] === k && fast != slow) result++;

		fast++;
	}
	return result;
};

/**
 * @param {number[]} nums
 * @returns {number[]}
 */
const removeDuplicate = (nums) => {
	let idx = 0;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] !== nums[idx]) {
			nums[++idx] = nums[i];
		}
	}
	return nums.slice(0, idx + 1);
};

/**
 * 使用 Map
 * 如果 k===0 时，从map中检查 nums[i]对应的值>1 即可
 * 如果 k > 0 时，从map中检查存在 nums[i]+k 即可
 *
 * 因为此题是要判断 数组的任两元素之差等于给定值，那么我就可以判断 每个元素值+给定值 是否存在于数组中即可，使用map来判断也可以
 * Time complexity: O(n) n = nums.length
 * Space complexity: O(n)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findPairs2 = function (nums, k) {
	let map = new Map();
	for (let num of nums) {
		map.set(num, map.has(num) ? map.get(num) + 1 : 1);
	}

	let result = 0;

	// // 这里是遍历数组，则需要去重，否则存在重复的情况
	// nums = removeDuplicate(nums.sort((a, b) => a - b));
	// for (let num of nums) {
	// 	if ((k === 0 && map.get(num) > 1) || (k > 0 && map.has(num + k))) {
	// 		result++;
	// 	}
	// }

	// 这里遍历Map.entries，不存在重复的情况
	result = 0;
	let entry = map.entries();
	for (let item of entry) {
		if ((k === 0 && item[1] > 1) || (k > 0 && map.has(item[0] + k))) {
			result++;
		}
	}
	return result;
};

let nums = [3, 1, 4, 1, 5],
	k = 2;
// (nums = [1, 2, 3, 4, 5]), (k = 1);
// (nums = [1, 3, 1, 5, 4]), (k = 0);
// (nums = [1, 2, 4, 4, 3, 3, 0, 9, 2, 3]), (k = 3);
// (nums = [-1, -2, -3]), (k = 1);
// (nums = [1, 1, 1, 1, 1]), (k = 0);
// console.log(findPairs(nums, k));
console.log(findPairs2(nums, k));
