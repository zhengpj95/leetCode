/**
 * Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
 * k is a positive integer and is less than or equal to the length of the linked list.
 * If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.
 *
 * Follow up:
 * Could you solve the problem in O(1) extra memory space?
 * You may not alter the values in the list's nodes, only nodes itself may be changed.
 * @author zheng
 * @date 2020/10/13 11:29:23
 */

/**
 * 和 24.Swap Node in Pairs 类似，都是reverse结点，这里是每k个reverse一次
 * 充分利用头结点的性质
 * 每k个一组，从每组的第二个元素开始往前插入，当然也可以每个元素都往前插入，即使是每组第一个元素
 */

const { ListNode, createList, traversal } = require('./ListNode');

/**
 * Time complexity: O(N)
 * Space complexity: O(1)
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = function (head, k) {
	if (!head) return null;
	if (k === 1) return head;
	// 结点数小于 k 直接返回
	let count = 0;
	let curr = head;
	while (curr) {
		count++;
		curr = curr.next;
	}
	if (k > count) return head;

	let newHead = new ListNode(0);
	newHead.next = head;
	let time = Math.floor(count / k); //多少轮
	let currHead = newHead;

	// 找到的结点往前插入即可
	while (time > 0) {
		// 每轮移动 time-1 个结点
		let kk = k;
		let nextN = head.next;
		while (kk > 1) {
			head.next = nextN.next;
			nextN.next = currHead.next;
			currHead.next = nextN;
			nextN = head.next;
			kk--;
		}
		currHead = head;
		head = head.next;
		time--;
	}
	return newHead.next;
};

/**
 * 递归法
 * Time complexity: O(N)
 * Space complexity: O(N/k)
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup2 = function (head, k) {
	if (!head || k === 1) return head;
	// 反转两结点间的链表 [start, end)
	let reverse = (start, end) => {
		let curr = start;
		let prev = null;
		while (curr !== end) {
			let temp = curr.next;
			curr.next = prev;
			prev = curr;
			curr = temp;
		}
		return prev;
	};

	// 链表区间 [aNode, bNode)
	let aNode = head,
		bNode = head;
	for (let i = 0; i < k; i++) {
		// 不足k个，不需要反转，base case
		if (!bNode) {
			return head;
		}
		bNode = bNode.next;
	}

	let newHead = reverse(aNode, bNode);
	// aNode 此时是 newHead 的最后一个结点
	aNode.next = reverseKGroup2(bNode, k);
	return newHead;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let list = createList(arr); // 带头结点的
let res = reverseKGroup2(list.next, 3);
console.log(traversal(res));
