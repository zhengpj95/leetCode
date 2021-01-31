const { TreeNode, createTree } = require('./TreeNode');
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
	let res = [];
	let traversal = (root) => {
		if (!root) {
			return;
		}
		traversal(root.left);
		traversal(root.right);
		res.push(root.val);
	};
	traversal(root);
	return res;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal2 = function (root) {
	let res = [];
	let stack = [];
	let curNode = root;

	while (curNode) {
		res.unshift(curNode.val);
		if (curNode.left) {
			stack.push(curNode.left);
		}
		if (curNode.right) {
			stack.push(curNode.right);
		}
		curNode = stack.pop();
	}
	return res;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal3 = function (root) {
	let res = [];
	let stack = [];
	let node = root;
	while (node) {
		if (node.left) {
			stack.push(node.left);
		}
		if (node.right) {
			stack.push(node.right);
		}
		res.push(node.val);
		node = stack.pop();
	}
	res = res.reverse();
	return res;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var morrisTraversal = (root) => {
	let res = [];
	let tail = null;
	let node = root;
	while (node) {
		tail = node.right;
		if (!tail) {
			res.push(node.val);
		} else {
			while (tail.left != null && tail.left != node) {
				tail = tail.left;
			}
			if (!tail.left) {
				tail.left = node;
				res.push(node.val);
				node = node.right;
				continue;
			} else {
				tail.left = null;
			}
		}
		node = node.left;
	}
	return res.reverse();
};

let root = createTree([1, 3, 4, 5, 7, 6, 8]);
console.log(postorderTraversal(root).join('-'));
console.log(postorderTraversal2(root).join('-'));
console.log(morrisTraversal(root).join('-'));
