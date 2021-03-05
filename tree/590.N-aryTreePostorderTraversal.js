/**
 * @author zheng
 * @date 2021/03/05 14:55:20
 */

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
	let result = [];
	let dfs = (root) => {
		if (!root) return;
		if (root.children && root.children.length) {
			for (let i = 0; i < root.children.length; i++) {
				dfs(root.children[i]);
			}
		}
		result.push(root.val);
	};
	dfs(root);
	return result;
};
