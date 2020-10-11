/**
 * Given a linked list, swap every two adjacent nodes and return its head.
 * You may not modify the values in the list's nodes. Only nodes itself may be changed.
 * @author zheng
 * @date 2020/10/11 10:21:33
 */

const { ListNode, createList } = require('./ListNode');

/**
 * 利用头结点
 * Time complexity: O(N)
 * Space complexity: O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function (head) {
	if (!head || !head.next) return head;
	let newHead = new ListNode(0); //添加头结点
	newHead.next = head;

	let curr = head;
	let head1 = newHead;
	let nextN = null;
	while (curr && curr.next) {
		nextN = curr.next;
		// 交换两结点
		curr.next = nextN.next;
		nextN.next = curr;

		head1.next = nextN;
		head1 = curr;
		curr = curr.next;
	}

	return newHead.next;
};

let arr = [1, 2, 3, 4];
let head = createList(arr);
// console.log(head);
console.log(swapPairs(head.next));
