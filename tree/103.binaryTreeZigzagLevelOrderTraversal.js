/**
 * Given a binary tree, return the zigzag level order traversal of its nodes' values.
 * (ie, from left to right, then right to left for the next level and alternate between).
 */
// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
	if (!root) {
		return [];
	}

	let result = [];
	let list = [root];
	while (list.length > 0) {
		let arr = [];
		let len = list.length;
		for (let i = 0; i < len; i++) {
			let node = list.shift();
			arr.push(node.val);
			if (node.left) {
				list.push(node.left);
			}
			if (node.right) {
				list.push(node.right);
			}
		}
		result.push(arr);
	}
	// 得到结果后，再进行对应的反转
	for (let i = 0; i < result.length; i++) {
		if (i & 1) {
			result[i].reverse();
		}
	}
	return result;
};

/**
 * Time complexity: O(n) ??
 * Space complexity: O(n)
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder2 = function (root) {
	if (!root) {
		return [];
	}

	let result = [];
	let list = [root];
	let isZigzag = false; //控制z型方向
	while (list.length > 0) {
		let arr = [];
		let len = list.length;
		for (let i = 0; i < len; i++) {
			let node = list.shift();
			if (isZigzag) {
				arr.unshift(node.val);
			} else {
				arr.push(node.val);
			}
			if (node.left) {
				list.push(node.left);
			}
			if (node.right) {
				list.push(node.right);
			}
		}
		result.push(arr);
		isZigzag = !isZigzag;
	}
	return result;
};

let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node2 = new TreeNode(22, node3, node4);
let newNode3 = new TreeNode(32);
let newNode4 = new TreeNode(41);
let newNode2 = new TreeNode(2, newNode4, newNode3);
let node1 = new TreeNode(1, node2, newNode2);

console.log(zigzagLevelOrder(node1));
console.log(zigzagLevelOrder2(node1));
