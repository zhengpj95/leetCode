/**
 * Given a sorted linked list, delete all duplicates such that each element appear only once.
 * @author zheng
 * @date 2020/10/13 14:20:55
 */

const { ListNode, createList } = require('./ListNode');

/**
 * 使用双指针
 * Time complexity: O(N)
 * Space complexity: O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
	if (!head || !head.next) return head;
	let slow = head;
	let fast = head.next;
	while (fast) {
		if (fast.val !== slow.val) {
			slow.next = fast;
			slow = slow.next;
		}
		fast = fast.next;
	}
	slow.next = null;
	return head;
};

/**
 * Time complexity: O(N)
 * Space complexity: O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates2 = function (head) {
	if (!head || !head.next) return head;
	let curr = head;

	while (curr && curr.next) {
		if (curr.val === curr.next.val) {
			curr.next = curr.next.next;
		} else {
			curr = curr.next;
		}
	}
	return head;
};

let arr = [1, 1, 2, 3, 3];
let node = createList(arr);
let res = deleteDuplicates(node.next);
while (res) {
	console.log(res.val);
	res = res.next;
}
