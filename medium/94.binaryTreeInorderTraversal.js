
// Definition for a binary tree node.
function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

/**
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

let nums = inorderTraversal(node1);
console.log(nums);
