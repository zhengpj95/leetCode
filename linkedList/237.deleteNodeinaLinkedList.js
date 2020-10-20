/**
 * Write a function to delete a node in a singly-linked list.
 * You will not be given access to the head of the list,
 * instead you will be given access to the node to be deleted directly.
 * It is guaranteed that the node to be deleted is not a tail node in the list.
 * @author zheng
 * @date 2020/10/20 18:50:58
 */
const { ListNode, createList, traversal } = require('./ListNode');

/**
 * 保证不是尾结点，故待删除结点与后面的结点值不断交换，最后删除最后一个结点
 * Time complexity: O(N)
 * Space complexity: O(1)
 * @param {ListNode} node 要删除的结点
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = function (node) {
	if (!node) return;
	let tail = node;
	let pre = null;
	while (tail && tail.next) {
		pre = tail;
		tail.val = tail.next.val;
		tail = tail.next;
	}
	pre.next = null;
};

/**
 * Time complexity: O(1)
 * Space complexity: O(1)
 * @param {ListNode} node 要删除的结点
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode2 = function (node) {
	if (!node) return;
	node.val = node.next.val;
	node.next = node.next.next;
};

let arr = [4, 5, 1, 9];
let head = createList(arr);
deleteNode2(head.next.next); // delete 5
console.log(traversal(head.next));
