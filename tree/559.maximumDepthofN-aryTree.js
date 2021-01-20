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
 * BFS
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

/**
 * DFS
 * Runtime: 84 ms, faster than 95.71% of JavaScript online submissions for Maximum Depth of N-ary Tree.
 * Memory Usage: 41.4 MB, less than 86.23% of JavaScript online submissions for Maximum Depth of N-ary Tree.
 * @param {Node} root
 * @return {number}
 */
var maxDepth2 = function (root) {
	if (!root) return 0;
	let max = 0;
	let dfs = (root, depth) => {
		if (!root || !root.children) return 0;
		max = Math.max(max, depth);
		for (let i = 0; i < root.children.length; i++) {
			dfs(root.children[i], depth + 1);
		}
	};
	dfs(root, 1);
	return max;
};

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth3 = function (root) {
	if (!root) return 0;
	let max = 0;
	let stack = [[root, 1]];
	while (stack.length) {
		let [node, depth] = [...stack.pop()];
		if (!node) continue;
		max = Math.max(max, depth);
		if (!node.children) continue;
		for (let i = 0; i < node.children.length; i++) {
			stack.push([node.children[i], depth + 1]);
		}
	}
	return max;
};

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth4 = function (root) {
	if (!root) return 0;
	if (!root.children.length) return 1;
	return 1 + Math.max(...root.children.map((item) => maxDepth(item)));
};
