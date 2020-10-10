/**
 * Given a root node reference of a BST and a key, delete the node with the given key in the BST.
 * Return the root node reference (possibly updated) of the BST.
 *
 * Basically, the deletion can be divided into two stages:
 * 1. Search for a node to remove.
 * 2. If the node is found, delete the node.
 *
 * Follow up: Can you solve it with time complexity O(height of tree)?
 * @author zheng
 * @date 2020/10/10 10:32:10
 */

const { TreeNode, createTree } = require('./TreeNode');

/**
 * 先找到要删除的结点，然后又找到要替换到此结点位置的结点，然后替换两结点值，这样结点联系就断开了，删除结点就麻烦了
 * 这样子的思路有很大的问题，BUG
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
const deleteNode = function (root, key) {
	if (!root) return null;
	if (key === undefined || key === null) return root;

	let findNode = (root, key) => {
		if (!root) return null;
		if (root.val === key) return root;
		if (key < root.val) return findNode(root.left, key);
		if (key > root.val) return findNode(root.right, key);
	};

	let findRight = (root) => {
		if (!root) return null;
		if (root.right) return findRight(root.right);
		return root;
	};

	let findLeft = (root) => {
		if (!root) return null;
		if (root.left) return findLeft(root.left);
		return root;
	};

	let findReplace = (root) => {
		if (!root) return null;
		if (root.left) return findRight(root.left);
		else return findLeft(root.right);
	};

	let node = findNode(root, key);
	if (!node) return null;
	let replaceNode = findReplace(node);

	let tmp = node.val;
	node.val = replaceNode.val;
	replaceNode.val = tmp;

	return root;
};

/**
 * Time complexity: O(H) H is height of tree
 * Space complexity: O(H)
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
const deleteNode2 = function (root, key) {
	if (!root) return null;
	if (key < root.val) {
		root.left = deleteNode2(root.left, key);
	} else if (key > root.val) {
		root.right = deleteNode2(root.right, key);
	} else {
		if (!root.left) return root.right;
		if (!root.right) return root.left;

		// 找出可替换的结点
		let leftMaxNode = root.left;
		while (leftMaxNode.right) {
			leftMaxNode = leftMaxNode.right;
		}
		// 替换值
		root.val = leftMaxNode.val;
		// 在带删除结点的左边删除用于替换的结点
		root.left = deleteNode2(root.left, leftMaxNode.val);
	}

	return root;
};

let arr = [5, 3, 6, 2, 4, null, 7];
let root = createTree(arr);

console.log(deleteNode2(root, 3));
