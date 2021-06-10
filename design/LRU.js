class LinkedNode {
	constructor(key, val, pre, next) {
		this.key = key != null ? key : 0;
		this.val = val != null ? val : 0;
		this.pre = pre != null ? pre : null;
		this.next = next != null ? next : null;
	}
}

class DoubleLinkedList {
	constructor() {
		this.head = new LinkedNode();
		this.tail = null;
		this.count = 0;
	}

	isEmpty() {
		return this.count == 0;
	}

	/**
	 * @param {LinkedNode} node
	 */
	insertHead(node) {
		if (!node) return false;
		if (this.isEmpty()) {
			this.head.next = node;
			node.pre = this.head;
			this.tail = node;
		} else {
			node.next = this.head.next;
			this.head.next.pre = node;
			this.head.next = node;
			node.pre = this.head;
		}
		this.count++;
		return true;
	}

	// /**
	//  * @param {LinkedNode} node
	//  */
	// insertTail(node) {
	// 	if (!node) return false;
	// 	if (this.isEmpty()) {
	// 		this.head.next = node;
	// 		node.pre = this.head;
	// 		this.tail = node;
	// 	} else {
	// 		let currNode = this.head.next;
	// 		while (currNode.next) {
	// 			currNode = currNode.next;
	// 		}
	// 		currNode.next = node;
	// 		node.pre = currNode;
	// 	}
	// 	this.count++;
	// 	return true;
	// }

	// /**
	//  * @param {LinkedNode} node
	//  */
	// checkNode(node) {
	// 	if (this.isEmpty()) {
	// 		return false;
	// 	}
	// 	let head = this.head.next;
	// 	while (head) {
	// 		if (head.key == node.key) {
	// 			// head.val = node.val; //key已存在，变更val
	// 			return true;
	// 		}
	// 		head = head.next;
	// 	}
	// 	return false;
	// }

	// /**
	//  * @param {LinkedNode} node
	//  */
	// insertToHead(node) {
	// 	let have = this.checkNode(node);
	// 	if (have) return;
	// 	this.count--;
	// 	this.insertHead(node);
	// }

	print() {
		if (this.isEmpty()) return [];
		let result = [];
		let head = this.head.next;
		while (head) {
			result.push([head.key, head.val]);
			head = head.next;
		}
		return result;
	}

	/**
	 * @param {LinkedNode} node
	 * @returns {boolean}
	 */
	isFirstNode(node) {
		if (this.isEmpty()) return true; //为空
		let first = this.head.next;
		return first.key == node.key;
	}

	getSpecialNode(node) {
		let head = this.head.next;
		while (head) {
			if (head.key == node.key) {
				return head;
			}
			head = head.next;
		}
		return null;
	}

	/**
	 * @param {LinkedNode} node
	 * @returns
	 */
	moveToHead(node, isPut = false) {
		if (!node) return;
		if (this.isFirstNode(node)) {
			if (isPut) {
				this.head.next.val = node.val; //存在，需要更改val
			}
			return;
		}
		let curNode = this.getSpecialNode(node);
		if (isPut) {
			curNode.val = node.val;
		}
		let preNode = curNode.pre;
		preNode.next = curNode.next;
		if (curNode == this.tail) {
			this.tail = curNode.pre;
		}
		if (curNode.next) {
			curNode.next.pre = preNode;
		}
		this.count--;
		this.insertHead(curNode);
	}

	deleteTail() {
		if (this.isEmpty()) {
			return;
		}
		let result = this.tail;
		if (this.count == 1) {
			this.tail = null;
		} else {
			this.tail = result.pre;
			this.tail.next = null;
		}
		this.count--;
		return result;
	}
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
	this.capacity = capacity;
	this.list = new DoubleLinkedList();
	this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
	if (this.capacity == 0 || !this.map.has(key)) {
		return -1;
	}
	let node = new LinkedNode(key);
	this.list.moveToHead(node);
	return this.map.get(key);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
	let node = new LinkedNode(key, value);
	let have = this.map.has(key); //链表中已存在，则移动到表头且更改val；否则插入头部且移除尾部
	let isMax = this.capacity == this.list.count; //达到最大容量
	this.map.set(key, value);
	if (have) {
		// 容量无关；移动到头部，且改变val
		this.list.moveToHead(node, true);
	} else {
		this.list.insertHead(node); //插入头部
		if (isMax) {
			// 移除尾部
			let tail = this.list.deleteTail();
			if (tail) {
				this.map.delete(tail.key);
			}
		}
	}
};

LRUCache.prototype.print = function () {
	console.log(this.list.print());
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// let list = new DoubleLinkedList();
// list.insertHead(new LinkedNode(2, 2));
// list.insertHead(new LinkedNode(1, 2));
// console.log(list.print());
// list.insertToHead(new LinkedNode(1, 9));
// list.insertToHead(new LinkedNode(2, 0));
// console.log(list.print());

let obj = new LRUCache(2);
obj.put(1, 1);
obj.put(2, 2);
console.log(obj.get(1));
obj.put(3, 3);
console.log(obj.get(2));
obj.put(4, 4);
console.log(obj.get(1));
console.log(obj.get(3));
console.log(obj.get(4));
obj.print();
console.log(obj);
console.log(obj.get(2));

// let obj = new LRUCache(1);
// obj.put(2, 1);
// console.log(obj.get(1));
// obj.print();
