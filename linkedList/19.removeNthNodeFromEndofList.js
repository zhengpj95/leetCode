/**
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 * Follow up: Could you do this in one pass?
 */
const { ListNode, createList, traversal } = require('./ListNode');

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
	let idx = count - n + 1; //第几个
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

/**
 * 双指针法，快慢指针相差n个元素，当fast指针指向null时，slow指针指向倒数第n+1个元素
 * Time complexity: O(L)
 * Space complexity: O(1)
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd2 = function (head, n) {
	let newHead = new ListNode(0, head);
	let fast = newHead;
	let slow = newHead;
	for (let i = 0; i < n + 1; i++) {
		fast = fast.next;
	}
	while (fast) {
		fast = fast.next;
		slow = slow.next;
	}
	slow.next = slow.next.next;
	return newHead.next;
};

let arr = [1, 2, 3, 4, 5, 6, 7];
let node = createList(arr);
let head = removeNthFromEnd2(node.next, 2);
console.log(traversal(head));
