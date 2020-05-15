/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class ListNode {
	constructor(value, next) {
		this.val = value ? value : 0;
		this.next = next ? next : null;
	}
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
	if (!l1) {
		return l2;
	}
	if (!l2) {
		return l1;
	}

	let list = new ListNode(-1);
	let head = list; //save the head
	while (l1 && l2) {
		if (l1.val < l2.val) {
			list.next = l1;
			l1 = l1.next;
		} else {
			list.next = l2;
			l2 = l2.next;
		}
		list = list.next;
	}
	if (l1) {
		list.next = l1;
	}
	if (l2) {
		list.next = l2;
	}
	return head.next;
};

let n = new ListNode(0);
let n1 = new ListNode(-1);
console.log(mergeTwoLists(n, n1));