/**
 * Given preorder and inorder traversal of a tree, construct the binary tree.
 */

// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}
/**
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
	let build = function (preorder, preStart, preEnd, inorder, inStart, inEnd) {
		if (preStart > preEnd) {
			return null;
		}
		//前序的第一个就是根结点
		let rootValue = preorder[preStart];
		//中序中找出上面找到的根结点的位置，此位置左边是左子树，右边是右子树。index-inStart 就是左子树节点数（根据中序遍历特性，根节点前的节点都是左子树节点）
		let index = inorder.indexOf(rootValue);

		let root = new TreeNode(rootValue); //根结点
		// 左子树，先序遍历中 [左边界+1, index-inStart] 的元素就对应了中序遍历中 [左边界, index-1] 的元素
		root.left = build(preorder, preStart + 1, preStart + (index - inStart), inorder, inStart, index - 1);
		// 右子树，先序遍历中 [左边界+1+左子树节点数目, 右边界] 的元素就对应了中序遍历中 [index+1, 右边界] 的元素
		root.right = build(preorder, preStart + (index - inStart) + 1, preEnd, inorder, index + 1, inEnd);
		return root;
	};

	let root = build(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
	return root;
};

let preArr = [3, 9, 20, 15, 7];
let inArr = [9, 3, 15, 20, 7];

console.log(buildTree(preArr, inArr));
