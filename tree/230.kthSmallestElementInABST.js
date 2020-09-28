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

/**
 * Time complexity: O(H+k) where H is a tree height.
 * 		This complexity is defined by the stack, which contains at least H + k elements, since before starting to pop out one has to go down to a leaf.
 * 		This results in O(logN+k) for the balanced tree and O(N+k) for completely unbalanced tree with all the nodes in the left subtree.
 * Space complexity: O(H) to keep the stack, where H is a tree height.
 * 		That makes O(N) in the worst case of the skewed tree, and O(logN) in the average case of the balanced tree.
 * @param {TreeNode} root
 * @param {Number} k
 */
const kthSmallest3 = function (root, k) {
	if (!root || k < 1) return -1;
	let list = [];

	while (1) {
		while (root) {
			list.push(root);
			root = root.left;
		}

		root = list.pop();
		if (--k === 0) return root.val;
		root = root.right;
	}
};

/**
 * Time complexity: O(H + k)  先进入最左结点，然后再开始寻找Kth结点
 * Space complexity: O(H) where H is a tree height.
 * @param {TreeNode} root
 * @param {Number} k
 */
const kthSmallest4 = function (root, k) {
	if (!root || k < 1) return -1;
	let stack = [];
	let idx = 0;

	while (stack.length || root) {
		if (root) {
			stack.push(root);
			root = root.left;
		} else {
			let node = stack.pop();
			if (++idx === k) return node.val;
			root = node.right;
		}
	}
	return -1;
};

let arr = [5, 3, 6, 2, 4, null, null, 1];
let root = createTree(arr);
console.log(kthSmallest2(root, 4));
console.log(kthSmallest3(root, 5));
console.log(kthSmallest4(root, 2));
