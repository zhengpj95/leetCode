/**
 * Two elements of a binary search tree (BST) are swapped by mistake.
 * Recover the tree without changing its structure.
 *
 * Follow up:
 * A solution using O(n) space is pretty straight forward.
 * Could you devise a constant space solution?
 */

// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * Time complexity: O(n)
 * Space complexity: O(1) ?? 递归的空间复杂度能算 O(1) 吗？O(logn)?
 * 我这个递归函数里没有开启新的空间，都是利用函数外部的引用，能算 O(1) 吗？
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const recoverTree = function (root) {
	let firstEle = null;
	let secondEle = null;
	let preEle = null;

	let traversal = (root) => {
		if (!root) {
			return;
		}

		traversal(root.left);

		// do something
		if (!firstEle && preEle && preEle.val >= root.val) {
			firstEle = preEle;
		}
		if (firstEle && preEle && preEle.val >= root.val) {
			secondEle = root;
		}
		preEle = root;

		traversal(root.right);
	};

	traversal(root);
	// 找到了两个元素
	if (firstEle && secondEle) {
		let tempVal = firstEle.val;
		firstEle.val = secondEle.val;
		secondEle.val = tempVal;
	}
};

/**
 * @param {TreeNode} root
 */
const preOrderTraversal = function (root) {
	let res = [];
	let traversal = (root) => {
		if (!root) {
			return;
		}
		res.push(root.val);
		traversal(root.left);
		traversal(root.right);
	};
	traversal(root);
	return res;
};

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
node1.left = node3;
node3.right = node2;

console.log(preOrderTraversal(node1));
recoverTree(node1);
console.log(preOrderTraversal(node1));
