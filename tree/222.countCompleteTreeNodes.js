/**
 * Given a complete binary tree, count the number of nodes.
 * @author zheng
 * @date 2020/09/27 10:25:18
 */

const { TreeNode, createTree, getTreeHeight } = require("./TreeNode");

/**
 * Time complexity: O(n)
 * Space complexity: O(2^(h-1)) 或者 O(2^(h-2))  最后一层或者倒数第二层的结点数，h为树高
 * @param {TreeNode} root
 * @return {number}
 */
const countNodes = function (root) {
	if (!root) return 0;
	let result = 0;
	let list = [root];

	while (list.length) {
		let size = list.length;
		result += size;
		while (size) {
			let node = list.shift();
			if (node.left) {
				list.push(node.left);
			}
			if (node.right) {
				list.push(node.right);
			}
			size--;
		}
	}
	return result;
};

/**
 * Time complexity: O(logn)
 * Space complexity: O(1)
 * @param {TreeNode} root
 * @return {number}
 */
const countNodes2 = function (root) {
	let total = 0;
	let h = getTreeHeight(root) - 1; //顶点层为0开始算

	while (root) {
		if (getTreeHeight(root.right) - 1 == h - 1) {
			total += 1 << h;
			root = root.right;
		} else {
			total += 1 << (h - 1);
			root = root.left;
		}
		// console.log('nums = ', total);
		h--;
	}
	return total;
};

/**
 * Time complexity: O(logn * logn)  【logn约为树高，logn向下取整+1，或者log(n+1)向上取整】递归logn次，每次递归计算子树高又为logn
 * Space complexity: O(logn)
 * @param {TreeNode} root
 * @return {number}
 */
const countNodes3 = function (root) {
	let treeDepth = (root, isLeft) => {
		let depth = 0;
		while (root) {
			depth++;
			root = isLeft ? root.left : root.right;
		}
		return depth;
	};

	let leftH = treeDepth(root);
	let rightH = treeDepth(root);

	// console.log('leftH = %s, rightH = %s', leftH, rightH);
	// 若是满二叉树就返回结果
	if (leftH === rightH) {
		return (1 << leftH) - 1; // Math.pow(2, leftH) - 1;
	}
	return 1 + countNodes3(root.left) + countNodes3(root.right);
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let root = createTree(arr);
console.log(countNodes(root));
// console.log(`==========================`);
console.log(countNodes2(root));
// console.log(`==========================`);
console.log(countNodes3(root));
