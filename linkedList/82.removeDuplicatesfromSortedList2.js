/**
 * Given a sorted linked list, delete all nodes that have duplicate numbers,
 * leaving only distinct numbers from the original list.
 * Return the linked list sorted as well.
 * @author zheng
 * @date 2020/10/13 14:49:23
 */

const { ListNode, createList } = require('./ListNode');

/**
 * Time complexity: O(N)
 * Space complexity: O(N) 不重复的结点都重新创建了
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
	if (!head || !head.next) return head;
	let newHead = new ListNode(0);
	let pre = newHead;
	let cur = head;

	while (cur) {
		let isSame = false;
		while (cur.next && cur.val === cur.next.val) {
			isSame = true;
			cur = cur.next;
		}
		if (!isSame) {
			console.log(cur);
			pre.next = new ListNode(cur.val);
			pre = pre.next;
		}
		cur = cur.next;
	}

	return newHead.next;
};

/**
 * 直接使用 head && head.next 的格式就好，不需要新建两个表示 head 和 head.next（反而显得有点难理解了）
 * Time complexity: O(N)
 * Space complexity: O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates2 = function (head) {
	if (!head || !head.next) return head;
	let dummyHead = new ListNode(0);
	dummyHead.next = head;
	let pre = dummyHead;

	while (head && head.next) {
		if (head.val === head.next.val) {
			while (head && head.next && head.val === head.next.val) {
				head = head.next;
			}
			//此步前的head属于重复的元素，故要 head = head.next 跳过这一组相同的元素
			head = head.next;
			pre.next = head;
		} else {
			pre = pre.next;
			head = head.next;
		}
	}
	return dummyHead.next;
};

/**
 * Time complexity: O(N)
 * Space complexity: O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates3 = function (head) {
	if (!head || !head.next) return head;
	let dummyHead = new ListNode(0);
	dummyHead.next = head;
	let pre = dummyHead;

	while (head) {
		while (head.next && head.val === head.next.val) {
			head = head.next;
		}
		if (pre.next === head) {
			pre = pre.next;
		} else {
			// 此处的 pre 不移动，因为当前的 head 可能是重复的元素
			pre.next = head.next;
		}
		head = head.next;
	}
	return dummyHead.next;
};

let arr = [1, 2, 3, 3, 4, 4, 5];
let node = createList(arr);
let res = deleteDuplicates3(node.next);

while (res) {
	console.log(res.val);
	res = res.next;
}
