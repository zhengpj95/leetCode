/**
 * @author zheng
 * @date 2021/01/18 23:09:11
 */

const { ListNode, createList, traversal } = require('./ListNode');

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
	if (k < 1) return head;
	let firstK = null;
	let head1 = head;
	while (k-- > 0) {
		firstK = head1;
		head1 = head1.next;
	}
	let head2 = head;
	while (head1) {
		head1 = head1.next;
		head2 = head2.next;
	}
	[firstK.val, head2.val] = [head2.val, firstK.val];
	return head;
};

let head = createList([1, 2, 3, 4, 5]);
console.log(traversal(swapNodes(head.next, 2)));
