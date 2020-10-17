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

const { ListNode, createList, traversal } = require('./ListNode');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const sortList = function (head) {
	if (!head) return null;
	let dummy = new ListNode(0);
};

let arr = [4, 2, 1, 3]; //[-1, 5, 3, 4, 0];
let head = createList(arr);
console.log(traversal(sortList(head.next)));
