/**
 * A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.
 * Return a deep copy of the list.
 *
 * The Linked List is represented in the input/output as a list of n nodes.
 * Each node is represented as a pair of [val, random_index] where:
 * val: an integer representing Node.val
 * random_index: the index of the node (range from 0 to n-1) where random pointer points to, or null if it does not point to any node.
 * @author zheng
 * @date 2020/10/15 10:10:35
 */

/**
 * 这个方法太巧妙了，按我固定的思维，肯定做不出这道题，或者说 random 控制不了，其指向肯定有问题的。
 */

// Definition for a Node.
function Node(val, next, random) {
	this.val = val;
	this.next = next;
	this.random = random;
}

/**
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = function (head) {
	if (!head) return head;
	// 每个结点都复制一份，且插入其结点后面
	let newHead = head;
	while (newHead) {
		let newNode = new Node(newHead.val);
		newNode.next = newHead.next;
		newHead.next = newNode;
		newHead = newHead.next.next;
	}

	// 操作复制结点的random
	let curr = head;
	while (curr) {
		if (curr.random) {
			curr.next.random = curr.random.next;
		}
		curr = curr.next.next;
	}

	// 断开连接，复制的结点单独建立连接
	let copyHead = head.next;
	let original = head;
	while (original) {
		let copyNode = original.next;
		original.next = copyNode.next;
		original = original.next;
		copyNode.next = original ? original.next : null;
		copyNode = copyNode.next;
	}
	return copyHead;
};

let node5 = new Node(1);
let node4 = new Node(10, node5);
let node3 = new Node(11, node4);
let node2 = new Node(13, node3);
let node1 = new Node(7, node2);
node1.random = null;
node2.random = node1;
node3.random = node5;
node4.random = node3;
node5.random = node1;
let head = copyRandomList(node1);
while (head) {
	console.log(head.val);
	head = head.next;
}
