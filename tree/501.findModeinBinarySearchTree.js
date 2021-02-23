/**
 * @author zheng
 * @date 2021/02/23 16:12:42
 */

const { TreeNode, createTree } = require('./TreeNode');
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
	if (!root) return [];
	let obj = {};
	let moreFre = 0;
	let helper = (root) => {
		if (!root) return;
		helper(root.left);
		obj[root.val] = (obj[root.val] || 0) + 1;
		moreFre = Math.max(moreFre, obj[root.val]);
		helper(root.right);
	};
	helper(root);

	let result = [];
	for (let [k, v] of Object.entries(obj)) {
		if (v == moreFre) {
			result.push(parseInt(k));
		}
	}
	return result;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode2 = function (root) {
	if (!root) return [];
	let result = [];
	let cur_count = 0;
	let max_count = 0;
	let preNode = null;

	let dfs = (root) => {
		if (!root) return;
		dfs(root.left);

		cur_count = preNode && root.val == preNode.val ? cur_count + 1 : 1;

		if (cur_count == max_count) {
			result.push(root.val);
		} else if (cur_count > max_count) {
			result = [root.val];
			max_count = cur_count;
		}

		preNode = root;
		dfs(root.right);
	};
	dfs(root);

	return result;
};

let root = createTree([1, null, 2, 2]);
console.log(findMode(root));
