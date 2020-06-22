/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
	this.val = (val === undefined ? 0 : val);
	this.next = (next === undefined ? null : next);
}

/**
 * Time complexity: O(L)
 * Space complexity: O(1)
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
	let start = head;
	let end = head;

	let count = 1;
	while (end.next) {
		count++;
		end = end.next;
	}
	let idx = count - n + 1;//第几个
	// 如果是第一个直接干掉
	if (idx === 1) {
		head = head.next;
		return head;
	}

	let i = 1;
	while (start.next) {
		if (i + 1 === idx) {
			end = start.next;
			start.next = end.next;
		} else {
			start = start.next;
		}
		i++;
	}
	return head;
};


let node7 = new ListNode(7);
let node6 = new ListNode(6, node7);
let node5 = new ListNode(5, node6);
let node4 = new ListNode(4, node5);
let node3 = new ListNode(3, node4);
let node2 = new ListNode(2, node3);
let node1 = new ListNode(1, node2);

let head = removeNthFromEnd(node1, 2);
while (head) {
	console.log(head.val);
	head = head.next;
}