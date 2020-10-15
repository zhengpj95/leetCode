/**
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 *
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 *
 * Follow up:
 * Can you solve it using O(1) (i.e. constant) memory?
 * @author zheng
 * @date 2020/10/15 15:08:00
 */

const { ListNode, createList } = require('./ListNode');

/**
 * 双指针，一个跑快一个跑慢，最后会相遇
 * Time complexity: O(N)
 * Space coplexity: O(1)
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
	if (!head) return false;
	let slow = head;
	let fast = head;

	while (fast && fast.next) {
		fast = fast.next.next;
		slow = slow.next;
		if (fast === slow) return true;
	}

	return false;
};

/**
 * Time complexity: O(N)
 * Space coplexity: O(N)
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle2 = function (head) {
	if (!head) return false;
	let map = new Map();
	while (head) {
		if (map.has(head)) {
			return true;
		} else {
			map.set(head, 1);
		}
		head = head.next;
	}
	return false;
};

let node2 = new ListNode(2);
let node1 = new ListNode(3, node2);
let node4 = new ListNode(-4, node2);
let node3 = new ListNode(0, node4);
node2.next = node3;

console.log(hasCycle2(node1));
