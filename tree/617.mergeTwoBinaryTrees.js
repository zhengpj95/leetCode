/**
 * @author zheng
 * @date 2021/01/02 20:04:58
 */

let { TreeNode, createTree } = require('./TreeNode');

/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
	let merge = (root1, root2) => {
		if (!root1) {
			return root2;
		}
		if (!root2) {
			return root1;
		}
		root1.val += root2.val;
		root1.left = merge(root1.left, root2.left);
		root1.right = merge(root1.right, root2.right);
		return root1;
	};
	return merge(t1, t2);
};

/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees2 = function (t1, t2) {
	if (!t1) return t2;
	if (!t2) return t1;
	let stack = [[t1, t2]];
	while (stack.length > 0) {
		let [leftNode, rightNode] = stack.shift();
		if (!leftNode || !rightNode) {
			continue;
		}
		leftNode.val += rightNode.val;
		if (!leftNode.left) {
			leftNode.left = rightNode.left;
		} else {
			stack.push([leftNode.left, rightNode.left]);
		}
		if (!leftNode.right) {
			leftNode.right = rightNode.right;
		} else {
			stack.push([leftNode.right, rightNode.right]);
		}
	}
	return t1;
};

// let levelTraversal = (root) => {
// 	let res = [];
// 	let list = [root];

// 	while (list.length > 0) {
// 		let node = list.shift();
// 		res.push(node.val);
// 		if (node.left) {
// 			list.push(node.left);
// 		}
// 		if (node.right) {
// 			list.push(node.right);
// 		}
// 	}
// 	return res;
// };

let t1 = createTree([1, 3, 2, 5]);
let t2 = createTree([2, 1, 3, null, 4, null, 7]);
let res = mergeTrees(t1, t2);
console.log(res);
// console.log(levelTraversal(res));
