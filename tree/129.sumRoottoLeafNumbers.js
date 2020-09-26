/**
 * Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.
 * An example is the root-to-leaf path 1->2->3 which represents the number 123.
 * Find the total sum of all root-to-leaf numbers.
 * @author zheng
 * @date 2020/09/26
 */

const { TreeNode, createTree } = require('./TreeNode');

/**
 * Time complexity: O(n)
 * Space complexity: O(路经数目+最多结点层的结点数)?? 约等于O(n)??
 * @param {TreeNode} root
 * @return {number}
 */
const sumNumbers = function (root) {
	if (!root) return 0;
	let list = [[root, []]];
	let result = [];
	while (list.length) {
		let [node, arr] = list.shift();
		let newArr = [...arr, node.val];
		if (!node.left && !node.right) {
			result.push(newArr);
		}
		if (node.left) {
			list.push([node.left, newArr]);
		}
		if (node.right) {
			list.push([node.right, newArr]);
		}
	}

	let total = 0;
	for (let item of result) {
		total += parseInt(item.toString().replace(/,/gi, ''));
	}
	return total;
};

/**
 * Time complexity: O(n)
 * Space complexity: O(n) 递归调用栈
 * @param {TreeNode} root
 * @return {number}
 */
const sumNumbers2 = function (root) {
	let sum = function (root, total) {
		if (!root) return 0;
		total = total * 10 + root.val; //new value
		if (!root.left && !root.right) {
			return total;
		}
		return sum(root.left, total) + sum(root.right, total);
	};

	return sum(root, 0);
};

let arr = [4, 9, 0, 5, 1];
let root = createTree(arr);
console.log(sumNumbers(root));
console.log(sumNumbers2(root));
