/**
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
 * For example, this binary tree [1,2,2,3,4,4,3] is symmetric.
 * But the following [1,2,2,null,3,null,3] is not:
 */
// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}
/**
 * Approach 1: Recursive
 * Time complexity: O(n)  Because we traverse the entire input tree once, the total run time is O(n), where nn is the total number of nodes in the tree.
 * Space complexity : The number of recursive calls is bound by the height of the tree.
 * 		In the worst case, the tree is linear and the height is in O(n).
 * 		Therefore, space complexity due to recursive calls on the stack is O(n) in the worst case.
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
	if (!root) return true;
	let isMirror = function (node1, node2) {
		if (!node1 && !node2) return true;
		if (!node1 || !node2) return false;
		return node1.val == node2.val && isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left);
	};

	return isMirror(root, root);
};

/**
 * Approach 2: Iterative
 * Instead of recursion, we can also use iteration with the aid of a queue.
 * Each two consecutive nodes in the queue should be equal, and their subtrees a mirror of each other.
 * Initially, the queue contains root and root. Then the algorithm works similarly to BFS, with some key differences.
 * Each time, two nodes are extracted and their values compared. Then, the right and left children of the two nodes are inserted in the queue in opposite order.
 * The algorithm is done when either the queue is empty, or we detect that the tree is not symmetric (i.e. we pull out two consecutive nodes from the queue that are unequal).
 *
 * Time complexity : O(n). Because we traverse the entire input tree once, the total run time is O(n), where nn is the total number of nodes in the tree.
 * Space complexity : There is additional space required for the search queue. In the worst case, we have to insert O(n) nodes in the queue. Therefore, space complexity is O(n).
 * @param {TreeNode} root
 * @returns {boolean}
 */
var isSymmetric2 = function (root) {
	if (!root) return true;
	let list = [];
	list.push(root, root);
	while (list.length > 0) {
		let node1 = list.pop();
		let node2 = list.pop();
		if (!node1 && !node2) continue;
		if (!node1 || !node2 || node1.val != node2.val) return false;
		list.push(node1.left, node2.right);
		list.push(node1.right, node2.left);
	}
	return true;
};

let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node2 = new TreeNode(2, node3, node4);

let newNode3 = new TreeNode(3);
let newNode4 = new TreeNode(4);
let newNode2 = new TreeNode(2, newNode4, newNode3);

let node1 = new TreeNode(1, node2, newNode2);
console.log(isSymmetric(node1));
console.log(isSymmetric2(node1));
