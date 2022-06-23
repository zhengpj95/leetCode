/**
 * 优先队列
 */
class PriorityQueue {
	/**
	 * 传入比较排序函数，默认从小到大排序输出
	 * @param {Function} compare
	 */
	constructor(compare = (a, b) => a > b) {
		this.count = 0;
		this.list = [];
		this.compare = compare;
	}

	isEmpty() {
		return this.count == 0;
	}

	getTop() {
		return this.isEmpty() ? null : this.list[1];
	}

	getParent(k = 1) {
		return Math.floor(k / 2);
	}

	leftChildren(k = 1) {
		return k * 2;
	}

	rightChildren(k = 1) {
		return k * 2 + 1;
	}

	exchange(i, j) {
		if (i > this.count || j > this.count) return;
		let temp = this.list[i];
		this.list[i] = this.list[j];
		this.list[j] = temp;
	}

	isLarge(i, j) {
		return this.compare(this.list[i], this.list[j]);
	}

	swim(k = this.count) {
		while (k > 1 && this.isLarge(this.getParent(k), k)) {
			this.exchange(this.getParent(k), k);
			k = this.getParent(k);
		}
	}

	sink(k = 1) {
		while (this.leftChildren(k) <= this.count) {
			let max = this.leftChildren(k);
			if (this.rightChildren(k) <= this.count && this.isLarge(max, this.rightChildren(k))) {
				max = this.rightChildren(k);
			}
			if (this.isLarge(max, k)) break;
			this.exchange(k, max);
			k = max;
		}
	}

	enqueue(ele) {
		this.list[++this.count] = ele;
		this.swim();
	}

	dequeue() {
		if (this.isEmpty()) return null;
		let max = this.list[1];
		this.exchange(1, this.count);
		this.list[this.count--] = null;
		this.sink();
		return max;
	}
}
module.exports.PriorityQueue = PriorityQueue;
