const { ListNode, createList, traversal } = require("./ListNode");

/**
 * 这个函数写的质量不高，要分开 k 大于等于 或者 小于 链表的长度
 * 这两部分应该统一起来
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
	if (k == 1) {
		return [head];
	}

	// 统计长度
	let size = 0;
	let curNode = head;
	while (curNode) {
		size++;
		curNode = curNode.next;
	}

	let result = [];
	if (k >= size) {
		let newHead = head;
		while (newHead) {
			let newNode = newHead;
			newHead = newHead.next;
			newNode.next = null;
			result.push(newNode);
		}
		if (result.length < k) {
			for (let i = result.length; i < k; i++) {
				result.push(null);
			}
		}
	} else {
		let eachLen = Math.floor(size / k); //每部分的平均长度
		let extra = size % k; //剩余的个数，把其平均分给前面几个部分

		// 利用双指针
		let left = head;
		let right = head;
		while (k > 0) {
			let partLen = eachLen + (extra > 0 ? 1 : 0); //真实的每部分长度
			let pre = right;
			while (partLen > 0 && right) {
				pre = right;
				right = right.next;
				partLen--;
			}
			if (pre) {
				pre.next = null;
			}
			result.push(left);
			left = right;
			extra--;
			k--;
		}
	}
	// for (let item of result) {
	// 	console.log(traversal(item));
	// }
	return result;
};

let head = createList([0, 1, 2, 3, 4]);
splitListToParts(head.next, 3);
