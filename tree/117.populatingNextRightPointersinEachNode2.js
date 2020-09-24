/**
 * Given a binary tree
 * Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
 * Initially, all next pointers are set to NULL.
 * @author zheng
 * @date 2020/09/24
 */

const { NextNode } = require('./TreeNode');

/**
 * 层次遍历，每一层都设置next指针
 * Time complexity: O(n)
 * Space complexity: O(m) m为某层的最大结点数
 * @param {NextNode} root
 * @return {NextNode}
 */
const connect = function (root) {
	if (!root) return null;
	let list = [root];

	while (list.length) {
		let count = list.length;
		for (let i = 0; i < count; i++) {
			if (list[i] && list[i + 1] && i + 1 < count) {
				list[i].next = list[i + 1];
			} else {
				list[i].next = null;
			}
			if (list[i].left) {
				list.push(list[i].left);
			}
			if (list[i].right) {
				list.push(list[i].right);
			}
		}
		list = list.slice(count);
	}
	return root;
};

let node4 = new NextNode(4);
let node5 = new NextNode(5);
let node2 = new NextNode(2, node4, node5);
let node7 = new NextNode(7);
let node3 = new NextNode(3, null, node7);
let node1 = new NextNode(1, node2, node3);

connect(node1);
console.log(node1);
