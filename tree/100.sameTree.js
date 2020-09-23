/**
 * Given two binary trees, write a function to check if they are the same or not.
 * Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
 */
// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}
/**
 * Time Complexity: O(n)
 * Space Complexity: O(log(N)) in the best case of completely balanced tree
 * 		and O(N) in the worst case of completely unbalanced tree, to keep a recursion stack. 调用栈需要消耗空间
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
	let isSame = function (p, q) {
		if (!p && !q) {
			return true;
		}
		if (!p || !q || p.val != q.val) {
			return false;
		}
		return isSame(p.left, q.left) && isSame(p.right, q.right);
	};

	return isSame(p, q);
};

let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node1 = new TreeNode(1, node2, node3);

let node22 = new TreeNode(2);
let node33 = new TreeNode(3);
let node11 = new TreeNode(1, node22, node33);

console.log(isSameTree(node3, node33));
console.log(isSameTree(node1, node33));
console.log(isSameTree(node1, node11));
