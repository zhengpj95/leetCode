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

module.exports.ListNode = ListNode;
module.exports.createList = createList;
