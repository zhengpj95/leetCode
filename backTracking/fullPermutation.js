/**
 * 全排列
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
