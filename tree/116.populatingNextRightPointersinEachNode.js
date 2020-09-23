/**
 * You are given a perfect binary tree where all leaves are on the same level, and every parent has two children.
 * The binary tree has the following definition:
 * struct Node {
 * 	int val;
 *  Node *left;
 *  Node *right;
 *  Node *next;
 * }
 *
 * Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
 * Initially, all next pointers are set to NULL.
 */

// Definition for a Node.
function Node(val, left, right, next) {
	this.val = val === undefined ? null : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
	this.next = next === undefined ? null : next;
}

/**
 * Time Complexity: O(n)
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
	if (!root) {
		return null;
	}
	let connectTwoNode = function (node1, node2) {
		if (!node1 || !node2) {
			return;
		}
		node1.next = node2;

		connectTwoNode(node1.left, node1.right);
		connectTwoNode(node2.left, node2.right);
		connectTwoNode(node1.right, node2.left);
	};
	connectTwoNode(root.left, root.right);
	return root;
};

/**
 * Time Complexity: O(树高*最后一层结点数)
 * @param {Node} root
 * @returns {Node}
 */
var connect2 = function (root) {
	if (!root) return null;
	let pre = root;
	while (pre.left) {
		let cur = pre;
		while (cur) {
			cur.left.next = cur.right;
			cur.right.next = cur.next ? cur.next.left : null;
			cur = cur.next;
		}

		pre = pre.left;
	}
	return root;
};

let node4 = new Node(4);
let node5 = new Node(5);
let node2 = new Node(2, node4, node5);
let node6 = new Node(6);
let node7 = new Node(7);
let node3 = new Node(3, node6, node7);
let node1 = new Node(1, node2, node3);

console.log(connect2(node1));
