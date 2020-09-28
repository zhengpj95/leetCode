/**
 * Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.
 * Constraints:
 * The number of elements of the BST is between 1 to 10^4.
 * You may assume k is always valid, 1 ≤ k ≤ BST's total elements.
 * @author zheng
 * @date 2020/09/28 10:28:23
 */

const { TreeNode, createTree } = require('./TreeNode');

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function (root, k) {
	if (!root || k < 1) return -1;
	let nums = [];
	let traversal = function (root) {
		if (!root) return;
		traversal(root.left);
		nums.push(root.val);
		traversal(root.right);
	};
	traversal(root);
	if (k - 1 > nums.length) return -1;
	return nums[k - 1];
};

/**
 * Time complexity: O(nlogn)
 * Space complexity: O(logn) 或 O(h) h为树深度
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest2 = function (root, k) {
	if (!root || k < 1) return -1;

	let list = [];
	let currNode = root;
	// Math.floor(logn) + 1
	while (currNode) {
		list.push(currNode);
		currNode = currNode.left;
	}

	let idx = 0;
	root = list.pop();
	// n * Math.ceil(log(n+1))
	while (root) {
		idx++;
		if (idx === k) {
			return root.val;
		}
		let rNode = root.right;
		while (rNode) {
			list.push(rNode);
			rNode = rNode.left;
		}
		root = list.pop();
	}
	return -1;
};

let arr = [5, 3, 6, 2, 4, null, null, 1];
let root = createTree(arr);
console.log(kthSmallest2(root, 4));
