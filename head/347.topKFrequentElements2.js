/**
 * Given a non-empty array of integers, return the k most frequent elements.
 * @author zheng
 * @date 2021/01/05 22:28:43
 */

/**
 * Runtime: 84 ms, faster than 96.48% of JavaScript online submissions for Top K Frequent Elements.
 * Memory Usage: 40.4 MB, less than 97.49% of JavaScript online submissions for Top K Frequent Elements.
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
	if (k == nums.length) return nums;
	if (k == 0) return [];

	let obj = nums.reduce((map, val) => {
		let key = val;
		map[key] = map[key] ? map[key] + 1 : 1;
		return map;
	}, {});
	let res = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
	return res.slice(0, k);
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent2 = function (nums, k) {
	if (k == nums.length) return nums;
	if (k == 0) return [];

	let map = new Map();
	for (let num of nums) {
		map.set(num, (map.get(num) || 0) + 1);
	}

	let res = [];
	[...map.entries()]
		.sort((a, b) => b[1] - a[1])
		.slice(0, k)
		.forEach((item) => res.push(item[0]));
	return res;
};

let nums = [1, 1, 1, 2, 2, 3, 4, 4],
	k = 3;
console.log(topKFrequent2(nums, k));
