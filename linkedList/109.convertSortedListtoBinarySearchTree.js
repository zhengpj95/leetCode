/**
 * Given the head of a singly linked list where elements are sorted in ascending order,
 * convert it to a height balanced BST.
 * For this problem, a height-balanced binary tree is defined as a binary tree
 * in which the depth of the two subtrees of every node never differ by more than 1.
 *
 * Related Topics: LinkList Depth-First Search
 *
 * @author zheng
 * @date 2020/10/14 14:40:47
 */

const { ListNode, createList } = require('./ListNode');
const { TreeNode } = require('../tree/TreeNode');

/**
 * 和 108.conertSortedArrayToBinarySearchTree 一样的，先转换成排序数组，然后再转成树
 * Time complexity: O(N)
 * Space complexity: O(N)
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST = function (head) {
	if (!head) return null;
	let arr = [];
	while (head) {
		arr.push(head.val);
		head = head.next;
	}

	let createTree = (arr, start, end) => {
		if (start > end) return null;
		let mid = Math.floor((end + start) / 2);
		let node = new TreeNode(arr[mid]);
		node.left = createTree(arr, start, mid - 1);
		node.right = createTree(arr, mid + 1, end);
		return node;
	};

	let tree = createTree(arr, 0, arr.length - 1);
	return tree;
};

let arr = [-10, -3, 0, 5, 9];
let head = createList(arr);
console.log(sortedListToBST(head.next));
