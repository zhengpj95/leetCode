/**
 * Reverse a singly linked list.
 * Follow up:
 * A linked list can be reversed either iteratively or recursively. Could you implement both?
 * @author zheng
 * @date 2020/10/19 10:08:44
 */
const { ListNode, createList, traversal } = require('./ListNode');

/**
 * 迭代
 * Time complexity: O(N)
 * Space complexity: O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
	if (!head) return null;
	let dummy = new ListNode(0, head);
	let tail = head;

	while (tail && tail.next) {
		let node = tail.next;
		tail.next = node.next;
		node.next = null;

		node.next = dummy.next;
		dummy.next = node;
	}
	return dummy.next;
};

let arr = [1, 2, 3, 4, 5];
let head = createList(arr);
console.log(traversal(reverseList(head.next)));
