/**
 * Given a non-empty, singly linked list with head node head, return a middle node of linked list.
 * If there are two middle nodes, return the second middle node.
 * Since the list has two middle nodes, we return the second one.
 * @author zheng
 * @date 2020/10/18 11:14:12
 */

const { ListNode, createList, traversal } = require('./ListNode');

/**
 * Time complexity: O(n/2)
 * Space complexity: O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function (head) {
	if (!head) return null;
	let slow = head,
		fast = head;
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow;
};

/**
 * 链断开
 * Time complexity: O(n/2)
 * Space complexity: O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode2 = function (head) {
	if (!head) return null;
	let prev = null,
		slow = head,
		fast = head;
	while (fast && fast.next) {
		prev = slow;
		slow = slow.next;
		fast = fast.next.next;
	}
	prev.next = null;
	return slow;
};

let arr = [1, 2, 3, 4, 5, 6];
let head = createList(arr);
console.log(middleNode(head.next));
