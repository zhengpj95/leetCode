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
 * @param {ListNode} head
 * @return {ListNode}
 */
const insertionSortList = function (head) {
	if (!head) return null;
	let dummy = new ListNode(0, head);
	let start = dummy;
	// let currNode = dummy.next;
	// while (currNode) {

	// 	while (start && start.val < currNode.val) {
	// 		start = start.next;
	// 	}

	// 	start = dummy;
	// 	currNode = currNode.next;
	// }
};

let arr = [6, 5, 3, 1, 8, 7, 2, 4];
let head = createList(arr);
console.log(insertionSortList(head.next));
