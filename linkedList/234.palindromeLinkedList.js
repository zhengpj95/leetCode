/**
 * Given a singly linked list, determine if it is a palindrome.
 * Follow up:
 * Could you do it in O(n) time and O(1) space?
 * @author zheng
 * @date 2020/10/20 17:33:32
 */

const { ListNode, createList, traversal } = require('./ListNode');

/**
 * Time complexity: O(N)
 * Space complexity: O(N/2)
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function (head) {
	if (!head) return true;
	let fast = head,
		slow = head;
	let values = [];

	while (fast && fast.next) {
		values.push(slow.val);
		slow = slow.next;
		fast = fast.next.next;
	}

	if (fast) slow = slow.next;
	while (slow) {
		let val = values.pop();
		if (slow.val !== val) return false;
		slow = slow.next;
	}
	return true;
};

/**
 * 双指针，链表[a, b)倒序
 * 此方法是前半链表倒序，奇数个结点时就要新加一个中间结点
 * 可以换成倒序后半部分结点，如果是奇数个时，slow还需向下移动一个
 * Time complexity: O(N)
 * Space complexity: O(1)
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome2 = function (head) {
	if (!head) return true;
	let fast = head,
		slow = head;

	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}
	// 奇数个结点，复制插入一个中间结点
	if (fast) {
		let newNode = new ListNode(slow.val);
		newNode.next = slow.next;
		slow.next = newNode;
		slow = slow.next;
	}

	// 前半链表倒序
	fast = head;
	let pre = null;
	while (fast != slow) {
		let nxt = fast.next;
		fast.next = pre;
		pre = fast;
		fast = nxt;
	}

	// 两链表判断相等
	while (slow && pre) {
		if (slow.val !== pre.val) {
			return false;
		}
		slow = slow.next;
		pre = pre.next;
	}
	return true;
};

let arr = [1, 2, 3, 4, 5, 3, 2, 1];
let head = createList(arr);
console.log(isPalindrome2(head.next));
