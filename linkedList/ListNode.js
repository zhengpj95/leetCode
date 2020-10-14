/**
 * @param {any} val
 * @param {ListNode} next
 */
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

/**
 * 创建单链表
 * @param {any[]} list
 * @returns {ListNode}
 */
function createList(list) {
	if (!list || !list.length) return null;
	let head = new ListNode();
	let currNode = head;
	for (let ele of list) {
		let node = new ListNode(ele);
		currNode.next = node;
		currNode = currNode.next;
	}
	return head;
}

/**
 * 遍历链表，返回数组
 * @param {ListNode} head
 * @return {any[]}
 */
function traversal(head) {
	if (!head) return [];
	let arr = [];
	while (head) {
		arr.push(head.val);
		head = head.next;
	}
	return arr;
}

module.exports.ListNode = ListNode;
module.exports.createList = createList;
module.exports.traversal = traversal;
