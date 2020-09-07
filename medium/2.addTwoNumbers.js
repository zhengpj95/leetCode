// Definition for singly-linked list.
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	let result = [];
	let addValue = 0;
	let newValue = 0;
	while (l1 || l2) {
		if (l1 && l2) {
			newValue = l1.val + l2.val;
		} else if (l1 && !l2) {
			newValue = l1.val;
		} else if (!l1 && l2) {
			newValue = l2.val;
		}
		if (addValue > 0) {
			newValue += addValue;
		}
		addValue = Math.floor(newValue / 10);
		if (newValue >= 10) {
			newValue = newValue % 10;
		}
		result.push(newValue);
		l1 = l1 ? l1.next : null;
		l2 = l2 ? l2.next : null;
	}
	if (addValue) {
		result.push(addValue);
	}

	let list = null;
	for (let i = 0; i < result.length; i++) {
		list = insertTail(list, result[i]);
	}
	return list;
};

/**
 * @param {ListNode} list
 * @param {number} val
 */
var insertTail = function (list, val) {
	if (!list) {
		list = new ListNode(val, null);
		return list;
	}
	let head = list;
	while (head.next) {
		head = head.next;
	}
	head.next = new ListNode(val, null);
	return list;
};

let node1 = new ListNode(1, null);
let node9 = new ListNode(9, null);
let newNode9 = new ListNode(9, node9);

let result = addTwoNumbers(node1, newNode9);
console.log(result);
