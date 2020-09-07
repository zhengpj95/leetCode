/**
 * You are given an array of k linked-lists lists,
 * each linked-list is sorted in ascending order.
 * Merge all the linked-lists into one sorted linked-list and return it.
 */

// Definition for singly-linked list.
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

/**
 * Approach 1: Brute Force
 * Time Complexity: O(nlogn)
 * Space Complexity: O(n)
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists1 = function (lists) {
	let result = [];

	// O(n)
	for (let i in lists) {
		let node = lists[i];
		while (node) {
			result.push(node.val);
			node = node.next;
		}
	}

	// O(nlogn)
	result.sort((a, b) => a - b);

	let list = new ListNode();
	let node = list;
	// O(n)
	for (let i = 0; i < result.length; i++) {
		node.next = new ListNode(result[i]);
		node = node.next;
	}

	return list.next;
};

let node5 = new ListNode(5, null);
let node4 = new ListNode(4, node5);
let node1 = new ListNode(1, node4);

let node44 = new ListNode(4, null);
let node33 = new ListNode(3, node44);
let node11 = new ListNode(1, node33);

let node666 = new ListNode(6, null);
let node222 = new ListNode(2, node666);

let list = [[node1], [node11], [node222]];

console.log(mergeKLists1(list));
