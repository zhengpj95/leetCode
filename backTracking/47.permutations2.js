/**
 * Given a collection of numbers, nums, that might contain duplicates,
 * return all possible unique permutations in any order.
 *
 * Constraints:
 * 1 <= nums.length <= 8
 * -10 <= nums[i] <= 10
 * @author zheng
 * @date 2020/11/11 09:00:59
 */

/**
 * 关键点也在于如何去重。在遍历递归的时候就要做好去重判断。
 * 能否还像 题目40. CombinationSum2 一样呢？显然不行了，题目40是组合，单个组合内的元素是无序的，遍历数组时只管后面的就可以了。
 * 这道题肯定不能这样做。
 * 所以使用 hash 表，遍历 hash 表就不会在同一个位置出现重复的元素了。
 */

/**
 * Time Complexity: O(∑P(N,k)   k=1~n)   where P(N, k) = N!/(N-k)! = N(N−1)...(N−k+1)
 * Space Complexity: O(N)
 * 		First of all, we build a hash table out of the input numbers. In the worst case where each number is unique, we would need O(N) space for the table.
 * 		Since we applied recursion in the algorithm which consumes some extra space in the function call stack, we would need another O(N) space for the recursion.
 * 		During the exploration, we keep a candidate of permutation along the way, which takes yet another O(N).
 * 		To sum up, the total space complexity would be O(N)+O(N)+O(N)=O(N).
 * 		Note, we did not take into account the space needed to hold the results. Otherwise, the space complexity would become O(N⋅N!).
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function (nums) {
	let result = [];

	let map = new Map();
	for (let num of nums) {
		map.set(num, map.has(num) ? map.get(num) + 1 : 1);
	}

	/**
	 * @param {number[]} nums
	 * @param {number[]} track
	 * @param {Map} map
	 */
	let backtrack = (nums, track, map) => {
		if (track.length === nums.length) {
			result.push([...track]);
			return;
		}

		// 遍历map，在同一个位置就不会出现重复的数字了
		for (let entry of map.entries()) {
			let [key, value] = entry;
			if (value === 0) continue;
			track.push(key);
			map.set(key, value - 1);
			backtrack(nums, track, map);
			track.pop();
			map.set(key, value);
		}
	};
	backtrack(nums, [], map);
	return result;
};

let nums = [1, 2, 3];
nums = [1, 1, 2];
console.log(permuteUnique(nums));
