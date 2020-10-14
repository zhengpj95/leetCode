/**
 * Reverse a linked list from position m to n. Do it in one-pass.
 * Note: 1 ≤ m ≤ n ≤ length of list.
 * @author zheng
 * @date 2020/10/14 11:29:45
 */

/**
 * 移动结点，注意结点要先连接后断开
 * 注意插入的位置，以及连接的位置
 */
const { ListNode, createList, traversal } = require('./ListNode');

/**
 * Time complexity: O(N)
 * Space complexity: O(1)
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
const reverseBetween = function (head, m, n) {
	if (!head) return head;
	let dummy = new ListNode(0, head);

	// 找到m前的结点
	let start = 1;
	if (m !== 1) {
		while (head) {
			start++;
			if (start === m) break;
			head = head.next;
		}
	} else {
		head = dummy;
	}

	let count = n - m; //需移动多少个结点
	let pp = head.next; //第m个结点不需要移动，从m+1个开始移动
	while (pp && count > 0) {
		let newHead = head.next;
		head.next = pp.next;
		pp.next = pp.next.next;
		head.next.next = newHead;
		count--;
	}
	return dummy.next;
};

let arr = [1, 2, 3, 4, 5];
let head = createList(arr);
let res = reverseBetween(head.next, 1, 5);
console.log(traversal(res));
