/**
 * Invert a binary tree.
 */
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
	let invert = function (root) {
		if (!root) {
			return null;
		}

		let node = root.left;
		root.left = root.right;
		root.right = node;

		invert(root.left);
		invert(root.right);

		return root;
	};

	root = invert(root);
	return root;
};

let node1 = new TreeNode(1);
let node3 = new TreeNode(3);
let node2 = new TreeNode(2, node1, node3);
let node6 = new TreeNode(6);
let node9 = new TreeNode(9);
let node7 = new TreeNode(7, node6, node9);
let node4 = new TreeNode(4, node2, node7);

console.log(invertTree(node4));
