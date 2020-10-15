/**
 * Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
 * There is a cycle in a linked list if there is some node in the list
 * that can be reached again by continuously following the next pointer.
 * Internally, pos is used to denote the index of the node that tail's next pointer is connected to.
 * Note that pos is not passed as a parameter.
 * Notice that you should not modify the linked list.
 *
 * Follow up:
 * Can you solve it using O(1) (i.e. constant) memory?
 * @author zheng
 * @date 2020/10/15 15:52:54
 */

const { ListNode, createList } = require('./ListNode');

/**
 * 双指针法
 * fast指针2步，slow指针1步，当它们相遇的时候，假设slow跑了k步，那么fast就跑了2k步，也就是环的长度为k，
 * 此时slow和fast指针都已在环内的了(如果有环的话，如果无环时，fast必为null，此时要return)
 * 再假设环的起点到两指针的相遇点的距离为m，则从相遇点继续前进 k - m 到达环起点，从头开始走 k - m 步也会到环起点
 *
 * Time complexity: O(N)
 * Space complexity: O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = function (head) {
	if (!head) return null;
	let fast = head;
	let slow = head;
	while (fast && fast.next) {
		fast = fast.next.next;
		slow = slow.next;
		if (fast === slow) break;
	}

	// 无环情况下，且结点数为奇数个时，fast指向最后一个结点
	if (!fast || !fast.next) return null;

	slow = head;
	while (slow !== fast) {
		fast = fast.next;
		slow = slow.next;
	}
	return fast;
};

let node2 = new ListNode(2);
let node1 = new ListNode(3, node2);
let node4 = new ListNode(-4, node2);
let node3 = new ListNode(0, node4);
node2.next = node3;

let head = createList([1, 2, 3]);
console.log(detectCycle(head.next));
