const { TreeNode, createTree } = require('./TreeNode');

/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
	if (!root) {
		return false;
	}
	let list = [root];
	while (list.length > 0) {
		let sameLevel = [];
		let len = list.length;
		while (len-- > 0) {
			let node = list.shift();
			sameLevel.push(node.val);
			if (node.left && node.right && (node.left.val == x || node.left.val == y) && (node.right.val == x || node.right.val == y)) {
				return false;
			}
			if (sameLevel.indexOf(x) > -1 && sameLevel.indexOf(y) > -1) {
				return true;
			}
			if (node.left) {
				list.push(node.left);
			}
			if (node.right) {
				list.push(node.right);
			}
		}
	}
	return false;
};

let root = createTree([1, 2, 3, null, null, null, 4, null, 5]);
console.log(isCousins(root, 3, 2));
