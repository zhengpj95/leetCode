/**
 * @author zheng
 * @date 2021/02/25 17:13:23
 */

const { TreeNode } = require('./TreeNode');

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {
	if (!root) return [];
	let obj = {};
	let maxCount = 0;
	let result = [];

	let dfs = (root) => {
		if (!root) return 0;
		let leftValue = dfs(root.left);
		let rightValue = dfs(root.right);
		let sum = leftValue + rightValue + root.val;
		obj[sum] = (obj[sum] || 0) + 1;
		maxCount = Math.max(obj[sum], maxCount);
		return sum;
	};

	dfs(root);

	// for (let [k, v] of Object.entries(obj)) {
	// 	if (v == maxCount) {
	// 		result.push(parseInt(k));
	// 	}
	// }

	result = Object.entries(obj)
		.filter(([, b]) => b == maxCount)
		.map((a) => parseInt(a));
	return result;
};
