/**
 * @author zheng
 * @date 2021/03/04 19:48:53
 */

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
	let result = [];

	let dfs = (root) => {
		if (!root) return;
		result.push(root.val);
		if (root.children && root.children.length) {
			for (let item of root.children) {
				dfs(item);
			}
		}
	};

	dfs(root);
	return result;
};
