/**
 * Given an n-ary tree, return the level order traversal of its nodes' values.
 *
 * Nary-Tree input serialization is represented in their level order traversal,
 * each group of children is separated by the null value.
 * @author zheng
 * @date 2020/09/30 15:51:41
 */

/**
 * n叉树结点
 * @param {any} val
 * @param {any[]} children
 */
function NaryTree(val, children) {
	this.val = val === null || val === undefined ? 0 : val;
	this.children = children && children.length ? children : [];
}

/**
 * Time complexity: O(N) ？？ O(N^2) ？？ O(H*k) k代表k叉树，H代表树高
 * Space complexity: O(N-1) 最坏情况，一个根结点，其他都是同一级的结点
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
	if (!root) return [];
	let queue = [root];
	let result = [];

	while (queue.length) {
		let arr = [];
		let size = queue.length;
		while (size-- > 0) {
			let node = queue.shift();
			arr.push(node.val);

			if (node.children.length) {
				queue.push(...node.children);
			}
		}
		result.push(arr);
	}

	return result;
};

let node1 = new NaryTree(1);
let node3 = new NaryTree(3);
let node2 = new NaryTree(2);
let node4 = new NaryTree(4);
let node5 = new NaryTree(5);
let node6 = new NaryTree(6);
node3.children = [node5, node6];
node1.children = [node3, node2, node4];
// console.log(node1);

console.log(levelOrder(node1));
