/**
 * @author zheng
 * @date 2021/01/02 20:04:58
 */

let { TreeNode, createTree } = require('./TreeNode');
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
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
