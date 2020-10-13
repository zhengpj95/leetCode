/**
 * Given a linked list, rotate the list to the right by k places, where k is non-negative.
 * @author zheng
 * @date 2020/10/13 13:22:28
 */

/**
 * 旋转链表
 * 临界条件及时退出
 * 找到要移动的结点的位置，划分链表，分别操作对应指针，注意新的最后结点的 next 要置为 null
 */
const { ListNode, createList } = require('./ListNode');

/**
 * Time complexity: O(N)
 * Space complexity: O(1)
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = function (head, k) {
	if (!head || k === 0) return head;
	let count = 0;
	let curr = head;
	while (curr) {
		count++;
		curr = curr.next;
	}

	let newHead = new ListNode(0);
	newHead.next = head;
	k = k % count;
	if (k === 0) return head;

	let splitNode = head;
	let reamin = count - k;

	while (splitNode) {
		if (--reamin === 0) {
			break;
		}
		splitNode = splitNode.next;
	}

	let lastNode = splitNode;
	newHead.next = lastNode.next;
	while (lastNode.next) {
		lastNode = lastNode.next;
	}
	lastNode.next = head;
	splitNode.next = null;
	return newHead.next;
};

let arr = [1, 2, 3, 4, 5];
let list = createList(arr);
let res = rotateRight(list.next, 4);
console.log(res);
while (res) {
	console.log(res.val);
	res = res.next;
}
