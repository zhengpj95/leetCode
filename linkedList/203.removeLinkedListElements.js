/**
 * Remove all elements from a linked list of integers that have value val.
 * @author zheng
 * @date 2020/10/19 09:13:13
 */

const { ListNode, createList, traversal } = require('./ListNode');

/**
 * Time complexity: O(N)
 * Space complexity: O(1)
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function (head, val) {
	if (!head) return null;
	let dummy = new ListNode(0, head);
	// let prev = dummy;
	// let curr = head;
	// while (curr) {
	// 	if (curr.val === val) {
	// 		prev.next = curr.next;
	// 	} else {
	// 		prev = prev.next;
	// 	}
	// 	curr = curr.next;
	// }
	// return dummy.next;

	while (head && head.next) {
		if (head.next.val === val) {
			head.next = head.next.next;
		} else {
			head = head.next;
		}
	}
	return dummy.next;
};

let arr = [1, 2, 6, 3, 4, 5, 6];
let head = createList(arr);

console.log(traversal(removeElements(head.next, 6)));
