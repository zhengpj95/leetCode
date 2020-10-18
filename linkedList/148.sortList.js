/**
 * Given the head of a linked list, return the list after sorting it in ascending order.
 * Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?
 * @author zheng
 * @date 2020/10/17 21:13:25
 */

/**
 * 题意要求时间复杂度是 O(nlogn)，使用147题的方法，时间复杂度是O(n^2)，不符合要求。
 * 如果能O(n)空间复杂度，则可以把链表变成有序数组，再重新建立链表
 *
 * 一定要记住所有排序算法，以及其时空复杂度
 * 					时间复杂度（最好，平均，最坏）		空间复杂度		是否稳定（相同的数值，排序前在前的排序后是否还在前）
 * 直接插入排序		O(n) 	O(n^2)		O(n^2)			O(1)			是
 * 冒泡排序			O(n)	O(n^2)		O(n^2)		    O(1)			是
 * 简单选择排序		O(n^2)	O(n^2)		O(n^2)			O(1)			否
 * 希尔排序												O(1)			否
 * 快速排序			O(nlogn) O(nlogn) O(n^2)			O(logn)			否
 * 堆排序			O(nlogn) O(nlogn) O(nlogn)			O(1)			否
 * 2-路归并排序		O(nlogn) O(nlogn) O(nlogn)			O(n)			是
 * 基数排序			O(d(n+r)) O(d(n+r)) O(d(n+r))		O(r)			是
 */

/**
 * https://leetcode.com/problems/sort-list/solution/
 */

const { ListNode, createList, traversal } = require('./ListNode');

/**
 * Approach 1: Top Down Merge Sort  ------  Divide and Conquer Strategy
 * Time complexity: O(nlogn)
 * Space complxity: O(logn) where n is the number of nodes in linked list.
 * 					Since the problem is recursive, we need additional space to store the recursive call stack.
 * 					The maximum depth of the recursion tree is logn
 * @param {ListNode} head
 * @return {ListNode}
 */
const sortList = function (head) {
	if (!head || !head.next) return head;

	let mid = getListByMid(head);
	let list1 = sortList(head);
	let list2 = sortList(mid);
	return merge(list1, list2);
};

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 */
let merge = (list1, list2) => {
	let dummy = new ListNode(0);
	let tail = dummy;

	while (list1 && list2) {
		if (list1.val < list2.val) {
			tail.next = list1;
			list1 = list1.next;
		} else {
			tail.next = list2;
			list2 = list2.next;
		}
		tail = tail.next;
	}
	tail.next = list1 ? list1 : list2;
	return dummy.next;
};

/**
 * 获取中间点后的链表
 * @param {ListNode} head
 */
let getListByMid = (head) => {
	let prev = null,
		slow = head,
		fast = head;
	while (fast && fast.next) {
		prev = slow;
		slow = slow.next;
		fast = fast.next.next;
	}
	prev.next = null;
	return slow;
};

/**
 * Approach 2: Brute Force
 * Time complexity: O(N)
 * Space complexity: O(N)
 * @param {ListNode} head
 * @return {ListNode}
 */
const bruteSortList = function (head) {
	if (!head) return null;
	let nodes = [];
	let curr = head;
	while (curr) {
		nodes.push(curr);
		curr = curr.next;
	}
	nodes.sort((a, b) => a.val - b.val);

	let dummy = new ListNode(0);
	let tail = dummy;
	for (let item of nodes) {
		tail.next = item;
		tail = tail.next;
		item.next = null;
	}
	return dummy.next;
};

let arr = [4, 2, 1, 3]; //[-1, 5, 3, 4, 0];
let head = createList(arr);
// console.log(traversal(sortList(head.next)));

console.log(traversal(bruteSortList(head.next)));
