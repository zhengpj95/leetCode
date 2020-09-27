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
module.exports.NextNode = NextNode;

// Test Code
// let arr1 = [3, 9, 20, 1, 2, 15, 7, 7];
// console.log(createTree(arr1));
// console.log(getTreeHeight(createTree(arr1)));
// console.log(getTreeHeight(null));

// 方式一
// module.exports.xxx = xxx
// 方式二
// exports = {};
// module.exports = exports;
