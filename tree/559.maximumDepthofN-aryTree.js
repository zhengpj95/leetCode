/**
 * @author zheng
 * @date 2021/01/20 09:23:06
 */

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * Runtime: 88 ms, faster than 86.46% of JavaScript online submissions for Maximum Depth of N-ary Tree.
 * Memory Usage: 41.9 MB, less than 57.11% of JavaScript online submissions for Maximum Depth of N-ary Tree.
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
	if (!root) return 0;
	let max = 0;
	let stack = [];
	stack.push(root);
	while (stack.length) {
		let stack1 = [];
		while (stack.length) {
			let node = stack.pop();
			if (!node.children) continue;
			for (let i = 0; i < node.children.length; i++) {
				stack1.push(node.children[i]);
			}
		}
		max++;
		stack = [...stack1];
	}
	return max;
};
