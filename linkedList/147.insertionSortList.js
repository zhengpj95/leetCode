/**
 * Sort a linked list using insertion sort.
 *
 * Algorithm of Insertion Sort:
 * 1. Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.
 * 2. At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.
 * 3. It repeats until no input elements remain.
 * @author zheng
 * @date 2020/10/16 23:12:05
 */

const { ListNode, createList, traversal } = require('./ListNode');

/**
 * Time complexity: O(N^2)
 * Space complexity: O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
const insertionSortList = function (head) {
	if (!head) return null;
	let dummy = new ListNode(0);
	let start = dummy;

	while (head) {
		let node = head;
		head = head.next;
		node.next = null;

		while (start && start.next && start.next.val < node.val) {
			start = start.next;
		}

		node.next = start.next;
		start.next = node;

		start = dummy;
	}

	return dummy.next;
};

let arr = [6, 5, 3, 1, 8, 7, 2, 4];
let head = createList(arr);
console.log(traversal(insertionSortList(head.next)));
