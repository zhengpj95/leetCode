
// Definition for a binary tree node.
function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

/**
 * 递归
 * Time complexity: O(n)
 * Space complexity: 最坏的情况O(n)，平均情况O(logn)
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
	let nums = [];
	let tranversal = function (root) {
		if (!root) return;
		tranversal(root.left);
		nums.push(root.val);
		tranversal(root.right);
	};
	tranversal(root);
	return nums;
};

/**
 * 基于栈的遍历
 * Time complexity: O(n)
 * Space complexity: O(n)
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal2 = function (root) {
	let nums = [];
	let stack = [];
	let curNode = root;
	// 结点存在或者栈未空
	while (curNode || stack.length) {
		while (curNode) {
			stack.push(curNode);
			curNode = curNode.left;
		}
		curNode = stack.pop();
		nums.push(curNode.val);
		curNode = curNode.right;
	}
	return nums;
};

// =============test=============

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
node1.left = null;
node1.right = node2;
node2.left = node3;
node2.right = node4;
node3.left = node3.right = null;
node4.left = node4.right = null;

let nums = inorderTraversal2(node1);
console.log(nums);


