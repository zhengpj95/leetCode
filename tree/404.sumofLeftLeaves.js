/**
 * Find the sum of all left leaves in a given binary tree.
 * @author zheng
 * @date 2020/09/30 14:25:47
 */

const { TreeNode, createTree } = require('./TreeNode');

/**
 * Time complexity: O(N)
 * Space complexity: O(N)
 * @param {TreeNode} root
 * @return {number}
 */
const sumOfLeftLeaves = function (root) {
	if (!root) return 0;
	let sum = 0;

	let findLeft = (root, isLeft) => {
		if (!root) return 0;
		if (root.left) {
			findLeft(root.left, true);
		}
		if (root.right) {
			findLeft(root.right, false);
		}
		if (!root.left && !root.right && isLeft) {
			sum += root.val;
		}
	};
	findLeft(root, false);
	return sum;
};

/**
 * Time complexity: O(N)
 * Space complexity: O(N)
 * @param {TreeNode} root
 * @return {number}
 */
const sumOfLeftLeaves2 = function (root) {
	let findLeft = (root, isLeft) => {
		if (!root) return 0;
		if (!root.left && !root.right && isLeft) {
			return root.val;
		}
		return findLeft(root.left, true) + findLeft(root.right, false);
	};
	return findLeft(root, false);
};

/**
 * Time complexity: O(N)
 * Space complexity: O(N)
 * @param {TreeNode} root
 * @return {number}
 */
const sumOfLeftLeaves3 = function (root) {
	if (!root) return 0;
	let sum = 0;
	let queue = [root];

	while (queue.length) {
		let node = queue.shift();
		if (node.left) {
			if (!node.left.left && !node.left.right) {
				sum += node.left.val;
			} else {
				queue.push(node.left);
			}
		}
		if (node.right) {
			// 判断是否是非叶子结点再入队，若是右叶子结点则无需多操作
			if (node.right.left || node.right.right) {
				queue.push(node.right);
			}
		}
	}
	return sum;
};

let arr = [3, 9, 20, null, null, 15, 7];
let root = createTree(arr);
console.log(sumOfLeftLeaves(root));
console.log(sumOfLeftLeaves(createTree([1]))); // 输出0

console.log(sumOfLeftLeaves2(root));
console.log(sumOfLeftLeaves3(root));
