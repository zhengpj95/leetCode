const { TreeNode } = require('./TreeNode');

/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
	if (!preorder || !preorder.length) {
		return null;
	}
	let top = preorder.shift();
	let left = [];
	let right = [];
	for (let pre of preorder) {
		if (pre <= top) {
			left.push(pre);
		} else {
			right.push(pre);
		}
	}
	let root = new TreeNode(top);
	root.left = bstFromPreorder(left);
	root.right = bstFromPreorder(right);
	return root;
};

console.log(bstFromPreorder([1, 3]));
