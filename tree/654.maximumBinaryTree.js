/**
 * Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:
 * 1. The root is the maximum number in the array.
 * 2. The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
 * 3. The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
 * Construct the maximum tree by the given array and output the root node of this tree.
 */
// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 * @param {number[]} nums
 * @return {TreeNode}
 */
const constructMaximumBinaryTree = function (nums) {
	let build = function (nums, start, end) {
		if (start > end) {
			return null;
		}
		let maxValue = Number.MIN_SAFE_INTEGER;
		let idx = -1;
		for (let i = start; i <= end; i++) {
			if (nums[i] >= maxValue) {
				maxValue = nums[i];
				idx = i;
			}
		}
		let root = new TreeNode(maxValue);
		root.left = build(nums, start, idx - 1);
		root.right = build(nums, idx + 1, end);
		return root;
	};
	let root = build(nums, 0, nums.length - 1);
	return root;
};

let arr = [3, 2, 1, 6, 0, 5];
console.log(constructMaximumBinaryTree(arr));
