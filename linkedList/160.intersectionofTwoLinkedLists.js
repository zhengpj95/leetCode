/**
 * Write a program to find the node at which the intersection of two singly linked lists begins.
 * Notes:
 * If the two linked lists have no intersection at all, return null.
 * The linked lists must retain their original structure after the function returns.
 * You may assume there are no cycles anywhere in the entire linked structure.
 * Each value on each linked list is in the range [1, 10^9].
 * Your code should preferably run in O(n) time and use only O(1) memory.
 * @author zheng
 * @date 2020/10/18 20:47:00
 */

const { ListNode, createList, traversal } = require("./ListNode");

/**
 * Approach 1: Hast Table
 * Time complexity: O(max(m, n))
 * Space complexity: O(m) or O(n)
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function (headA, headB) {
	if (!headA || !headB) return null;
	let set = new Set();
	while (headA) {
		set.add(headA);
		headA = headA.next;
	}
	while (headB) {
		if (set.has(headB)) {
			return headB;
		}
		headB = headB.next;
	}
	return null;
};

/**
 * Approach 2: Brute Force
 * Time complexity: O(mn)
 * Space complexity: O(1)
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const bruteForceFunc = function (headA, headB) {
	if (!headA || !headB) return null;
	while (headA) {
		let nodeB = headB;
		while (nodeB) {
			if (headA === nodeB) {
				return nodeB;
			}
			nodeB = nodeB.next;
		}
		headA = headA.next;
	}
	return null;
};

/**
 * https://leetcode.com/problems/intersection-of-two-linked-lists/discuss/2116221/Visual-Explanation-or-One-Pass-JAVA
 * 当listA和listB长度不一样后，listA+listB == listB+listA，所以同步遍历时，当其中一方到末尾后就接着遍历另一个list。
 * 如果两list有相同的节点，那么其就处于同一位置上了。
 *
 * 当pA=headB,pB=headA，从头开始遍历时，pA和pB后的结点长度是相同的了
 * Approach 3: Two Pointers
 * Time complexity: O(m+n)
 * Space complexity: O(1)
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const twoPointersFunc = function (headA, headB) {
	if (!headA || !headB) return null;
	let pA = headA;
	let pB = headB;

	while (pA !== pB) {
		pA = pA ? pA.next : headB;
		pB = pB ? pB.next : headA;
	}

	return pA;
};

let arr1 = [4, 1];
let arr2 = [5, 6, 1];
let head = createList(arr1);
let head2 = createList(arr2);

let commonNode = createList([8, 4, 5]);
let cur = head;
while (cur && cur.next) {
	cur = cur.next;
}
cur.next = commonNode.next;
cur = head2;
while (cur && cur.next) {
	cur = cur.next;
}
cur.next = commonNode.next;

console.log(getIntersectionNode(head.next, head2.next));
console.log(bruteForceFunc(head.next, head2.next));
console.log(twoPointersFunc(head.next, head2.next));
