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
 * Time Complexity: O(nlogn) ==> n is the total number of nodes.
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

/**
 * Approach 2: Merge lists one by one
 * Time Complexity: O(kn) ==> k is the number of linked lists.
 * Space Complexity: O(1)
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists2 = function (lists) {
	// merge two sorted linked list in O(n) time
	// where n is the total number of nodes in two lists.
	// O(l1.length + l2.length)
	let mergeTwoLists = function (l1, l2) {
		let res = new ListNode();
		let node = res;
		while (l1 && l2) {
			if (l1.val < l2.val) {
				node.next = l1;
				node = node.next;
				l1 = l1.next;
			} else {
				node.next = l2;
				node = node.next;
				l2 = l2.next;
			}
		}
		if (l1) {
			node.next = l1;
		}
		if (l2) {
			node.next = l2;
		}
		return res.next;
	};

	// O(kn)
	let list = null;
	for (let i in lists) {
		list = mergeTwoLists(list, lists[i]);
	}

	return list;
};

/**
 * Approach 2: Compare one by one
 * Time Complexity: O(kn) ==> k is the number of linked lists.
 * 		Almost every selection of node in final linked costs O(k)O(k) (\text{k-1}k-1 times comparison).
 * 		There are NN nodes in the final linked list.
 * Space Complexity: O(1) / O(n)
 * 		O(1) It's not hard to apply in-place method-connect selected nodes instead of creating new nodes to fill the new linked list.
 * 		O(n) Creating a new linked list costs O(n)O(n) space.
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists3 = function (lists) {
	// O(k)
	let findMinNode = function (lists) {
		let flag = -1;
		let min = Number.MAX_SAFE_INTEGER;
		for (let i = 0; i < lists.length; i++) {
			if (!lists[i]) {
				continue;
			}
			if (lists[i].val < min) {
				min = lists[i].val;
				flag = i;
			}
		}

		let res = null;
		if (flag >= 0) {
			res = lists[flag];
			lists[flag] = lists[flag].next;
			res.next = null;
		}

		return res;
	};

	let resNode = (curNode = new ListNode());
	let min = findMinNode(lists);
	// O(kn) ==> n is total number of nodes
	while (min) {
		curNode.next = min;
		curNode = curNode.next;
		min = findMinNode(lists);
	}
	return resNode.next;
};

let node5 = new ListNode(5, null);
let node4 = new ListNode(4, node5);
let node1 = new ListNode(1, node4);

let node44 = new ListNode(4, null);
let node33 = new ListNode(3, node44);
let node11 = new ListNode(1, node33);

let node666 = new ListNode(6, null);
let node222 = new ListNode(2, node666);

let list = [node1, node11, node222];

// console.log(mergeKLists1(list));
// console.log(mergeKLists2(list));
console.log(mergeKLists3(list));
