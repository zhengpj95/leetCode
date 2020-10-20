/**
 * Given a singly linked list, group all odd nodes together followed by the even nodes.
 * Please note here we are talking about the node number and not the value in the nodes.
 *
 * You should try to do it in place.
 * The program should run in O(1) space complexity and O(nodes) time complexity.
 * @author zheng
 * @date 2020/10/20 19:24:04
 */
const { ListNode, createList, traversal } = require('./ListNode');

/**
 * Time complexity: O(N)
 * Space complexity: O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
const oddEvenList = function (head) {
	if (!head || !head.next) return head;
	let node = head;
	let newHead = null;
	while (node && node.next) {
		let nxt = node.next;
		if (!newHead) newHead = nxt;
		node.next = node.next.next;
		if (nxt.next) {
			nxt.next = nxt.next.next;
		}
		if (node.next) {
			node = node.next;
		}
	}
	node.next = newHead;
	return head;
};

let arr = [1, 2, 3, 4, 5, 6];
let head = createList(arr);
console.log(traversal(oddEvenList(head.next)));
