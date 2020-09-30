/**
 * Definition for a binary tree node.
 * @param {any} val
 * @param {TreeNode} left
 * @param {TreeNode} right
 */
function TreeNode(val, left, right) {
	this.val = val === undefined || val === null ? 0 : val;
	this.left = left === undefined || left === null ? null : left;
	this.right = right === undefined || right === null ? null : right;
}

/**
 * 由层次遍历数组转换成树，如果是非叶子结点的，其左右子树为空的话用null替代
 * 例如：[3, 9, 20, null, null, 15, 7]
 * 			3
 * 		9	   20
 * 			 15  7
 * @param {any[]} nums
 * @returns {TreeNode}
 */
function createTree(nums) {
	if (!nums || !nums.length) return null;
	let root = new TreeNode(nums[0]);
	let list = [root];

	for (let i = 1; i < nums.length; ) {
		let parent = list.shift();
		let lValue = nums[i++];
		if (lValue !== undefined && lValue !== null) {
			parent.left = new TreeNode(lValue);
			list.push(parent.left);
		} else {
			parent.left = null;
		}

		let rValue = nums[i++];
		if (rValue !== undefined && rValue !== null) {
			parent.right = new TreeNode(rValue);
			list.push(parent.right);
		} else {
			parent.right = null;
		}
	}
	return root;
}

/**
 * 完全二叉树以及满二叉树的树高
 * @param {TreeNode} root
 */
function getTreeHeight(root) {
	return !root ? 0 : 1 + getTreeHeight(root.left);
}

/**
 * 二叉树的高度
 * @param {TreeNode} root
 */
function getBinaryTreeHeight(root) {
	if (!root) return 0;
	let height = 0;
	let queue = [root];

	while (queue.length) {
		height++;
		let size = queue.length;
		for (let i = 0; i < size; i++) {
			let node = queue.shift();
			if (node.left) {
				queue.push(node.left);
			}
			if (node.right) {
				queue.push(node.right);
			}
		}
	}
	return height;
}

/**
 * 二叉树结点数
 * @param {TreeNode} root
 */
function getTreeCount(root) {
	if (!root) return 0;
	let count = 0;
	let queue = [root];

	while (queue.length) {
		let size = queue.length;
		while (size-- > 0) {
			count++;
			let node = queue.shift();
			if (node.left) {
				queue.push(node.left);
			}
			if (node.right) {
				queue.push(node.right);
			}
		}
	}
	return count;
}

/**
 * Definition for a binary tree node with next pointer.
 * @param {any} val
 * @param {NextNode} left
 * @param {NextNode} right
 * @param {NextNode} next
 */
function NextNode(val, left, right, next) {
	this.val = val === undefined ? null : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
	this.next = next === undefined ? null : next;
}

module.exports.TreeNode = TreeNode;
module.exports.createTree = createTree;
module.exports.getTreeHeight = getTreeHeight;
module.exports.NextNode = NextNode;

// Test Code
let arr = [3, 9, 20, 1, 2, 15, 7];
let root = createTree(arr);
// console.log(createTree(arr));
// console.log(getTreeHeight(createTree(arr)));
// console.log(getTreeHeight(null));
console.log(getBinaryTreeHeight(root));
console.log(getTreeCount(root));

// 方式一
// module.exports.xxx = xxx
// 方式二
// exports = {};
// module.exports = exports;
