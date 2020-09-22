/**
 * Given inorder and postorder traversal of a tree, construct the binary tree.
 */

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}
/**
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
	let build = function (inorder, inStart, inEnd, postorder, postStart, postEnd) {
		if (inStart > inEnd) {
			return null;
		}

		let rootValue = postorder[postEnd]; //后序的最后一个结点就是根节点
		let index = 0;
		for (let i = inStart; i <= inEnd; i++) {
			if (inorder[i] == rootValue) {
				index = i;
				break;
			}
		}

		let root = new TreeNode(rootValue);
		root.left = build(inorder, inStart, index - 1, postorder, postStart, postStart + (index - inStart) - 1);
		root.right = build(inorder, index + 1, inEnd, postorder, postStart + (index - inStart), postEnd - 1);
		return root;
	};

	let root = build(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1);
	return root;
};

let inArr = [9, 3, 15, 20, 7];
let postArr = [9, 15, 7, 20, 3];

console.log(buildTree(inArr, postArr));
