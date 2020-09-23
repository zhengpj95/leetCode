/**
 * Given a binary tree, flatten it to a linked list in-place.
 */
// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
	if (!root) return null;

	let flatten2 = function (root) {
		if (!root) return;
		flatten2(root.left);
		flatten2(root.right);

		let lnode = root.left;
		let rnode = root.right;

		// 将左子树变成右子树，左子树置空
		root.right = lnode;
		root.left = null;

		// 将原右子树变成新右子树的右子树
		let node = root;
		while (node.right) {
			node = node.right;
		}
		node.right = rnode;
	};

	flatten2(root);
};

let node1 = new TreeNode(1);
let node3 = new TreeNode(3);
let node2 = new TreeNode(2, node1, node3);
let node6 = new TreeNode(6);
let node9 = new TreeNode(9);
let node7 = new TreeNode(7, node6, node9);
let node4 = new TreeNode(4, node2, node7);

flatten(node4);

// console.log(node4);
let newNode = node4;
let arr = [];
while (newNode) {
	arr.push(newNode.val);
	newNode = newNode.right;
}
console.log(arr);
