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

let arr = [1, 2, 3, 3, 4, 2, 1];
let head = createList(arr);
console.log(isPalindrome(head.next));
