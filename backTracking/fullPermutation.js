/**
 * 全排列
 *
 * 排列：如果要想在 n 个物品中，按顺序的选择 k 个物品，那么选择的方式总共有这么多种：
 * P(n, k) = n! / (n - k)!   ((k-k)! = 1)
 *
 * 组合：如果要想在 n 个物品中，选择 k 个物品出来，选择的顺序无所谓，那么选择的方式总共有这么多种：
 * C(n, k) = n! / (n - k)! * k!
 */

/**
 * 输入一组不重复的数字，返回它们的全排列
 * @param {number[]} nums
 * @returns {number[]}
 */
const fullPermutation = function (nums) {
	if (!nums || !nums.length) return [];
	let res = [];

	/**
	 * @param {number[]} nums
	 * @param {number[]} track 记录路径
	 */
	let backtrack = (nums, track) => {
		// 结束条件
		if (track.length === nums.length) {
			res.push([...track]);
			return;
		}

		for (let item of nums) {
			if (track.indexOf(item) >= 0) continue;
			// 做选择
			track.push(item);
			// 进入下一层决策树
			backtrack(nums, track);
			// 取消选择
			track.pop();
		}
	};
	backtrack(nums, []);
	return res;
};

let arr = [1, 2, 3];
let res = fullPermutation(arr);
console.log(res);
