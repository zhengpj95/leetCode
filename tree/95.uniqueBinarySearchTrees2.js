// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = (val === undefined ? 0 : val);
	this.left = (left === undefined ? null : left);
	this.right = (right === undefined ? null : right);
}

/**
 * Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1 ... n.
 * Constraints: 0 <= n <= 8
 * 
 * Time complexity: O(n^2)
 * @param {number} n
 * @return {TreeNode[]}
 */
const generateTrees = function (n) {
	if (n === 0) return [];
	if (n === 1) return [{ val: n, left: null, right: null }];
	return getTrees(1, n);
};

const getTrees = (start, end) => {
	let res = [];
	if (start > end) {
		res.push(null);
		return res;
	}

	for (let i = start; i <= end; ++i) {
		let left = getTrees(start, i - 1) || [];
		let right = getTrees(i + 1, end) || [];
		for (let lnode of left) {
			for (let rnode of right) {
				let node = new TreeNode(i);
				node.left = lnode;
				node.right = rnode;
				res.push(node);
			}
		}
	}
	return res;
};

let res = generateTrees(3);
console.log(res);