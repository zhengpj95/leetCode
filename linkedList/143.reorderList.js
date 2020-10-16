/**
 * Given a singly linked list L: L0→L1→…→Ln-1→Ln,
 * reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…
 * You may not modify the values in the list's nodes, only nodes itself may be changed.
 * @author zheng
 * @date 2020/10/16 09:49:11
 */

const { ListNode, createList, traversal } = require('./ListNode');

/**
 * Time complexity: O(N)
 * Space complexity: O(N)
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function (head) {
	if (!head) return;
	let map = new Map();
	let count = 0;
	let curr = head;
	while (curr) {
		count++;
		map.set(count, curr);
		curr = curr.next;
	}

	let dummyHead = new ListNode(0);
	let dummy = dummyHead;
	let mid = Math.ceil(count / 2);
	for (let i = 1; i <= mid; i++) {
		let node1 = map.get(i);
		dummy.next = node1;
		dummy = dummy.next;
		let node2 = map.get(count + 1 - i);
		if (node2 && node2 !== node1) {
			dummy.next = node2;
			dummy = dummy.next;
		}
	}
	dummy.next = null;
	head = dummyHead.next;
};

/**
 * 1. 找到中间结点，把链表分为两个部分，第二个链表从中间结点后面一个结点开始算，如果结点为偶数个，则从中间两个结点偏后的那个结点开始
 * 2. 第二个链表倒序
 * 3. 把第二个链表依次插入第一个链表中
 * Time complexity: O(N)
 * Space complexity: O(1)
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList1 = function (head) {
	if (!head) return;
	// 1. 选择链表中间结点
	let mid = head;
	let fast = head;
	while (fast && fast.next) {
		fast = fast.next.next;
		if (!fast) break;
		mid = mid.next;
	}
	// 把链表分为两半
	let dummyHead = new ListNode(0, mid.next);
	mid.next = null;
	// 2. 把第二个链表倒序

	// 3. 重建链表

	console.log(traversal(dummyHead));
};

let head = createList([1, 2, 3, 4, 5, 6, 7, 8]);
// reorderList(head.next);
// console.log(traversal(head.next));

reorderList1(head.next);
