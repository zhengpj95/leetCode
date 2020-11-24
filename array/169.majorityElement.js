/**
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * You may assume that the array is non-empty and the majority element always exist in the array.
 * @author zheng
 * @date 2020/11/24 22:13:09
 */

/**
 * Time complexity: O(nlogn)
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
	nums = nums.sort((a, b) => a - b);
	return nums[Math.floor(nums.length / 2)];
};

/**
 * Boyer-Moore Voting Algorithm
 * 这个算法的思想就比如：两队打战，至少有一方的人数对另一方多1（这个是必须保证的），双方的士兵一一同归于尽，最后剩下一个人的一方就是胜利的。
 * 		同理，在此算法中，剩下的最后一个就是结果了。
 * Time complexity: O(n)
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement2 = function (nums) {
	let count = 0;
	let result = 0;

	nums.forEach((item) => {
		if (count == 0) {
			result = item;
		}
		count += result === item ? 1 : -1;
	});
	return result;
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement2([2, 2, 1, 1, 1, 2, 2]));
