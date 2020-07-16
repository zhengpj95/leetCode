//  Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = !val ? 0 : val;
	this.left = !left ? null : left;
	this.right = !right ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = function (root) {
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

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal2 = function (root) {
	let res = [];
	let stack = [];
	let curNode = root;
	while (curNode) {
		res.push(curNode.val);
		if (curNode.right) {
			stack.push(curNode.right);
		}
		curNode = curNode.left;
		if (!curNode && stack.length) {
			curNode = stack.pop();
		}
	}
	return res;
};

let node5 = new TreeNode(5);
let node4 = new TreeNode(4);
let node3 = new TreeNode(3, null, node5);
let node2 = new TreeNode(2, node3, node4);
let node1 = new TreeNode(1, null, node2);

console.log(preorderTraversal(node1));
console.log(preorderTraversal2(node1));
