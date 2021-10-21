var RandomizedSet = function () {
	this.map = {};
	this.list = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
	if (this.map[val] != null) {
		return false;
	}
	this.map[val] = this.list.length; //map中保存的是索引
	this.list.push(val);
	return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
	if (this.map[val] == null) {
		return false;
	}
	let idx = this.map[val];
	let last = this.list.pop();

	// 如果remove的不是最后一个，就把最后一个替代要移除的那个
	if (idx != this.list.length) {
		this.list[idx] = last; //位置更新
		this.map[last] = idx; //索引更新
	}

	delete this.map[val];
	return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
	return this.list[Math.floor(Math.random() * this.list.length)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var obj = new RandomizedSet();
console.log(obj.insert(10));
console.log(obj.insert(11));
console.log(obj.insert(12));
console.log(obj.insert(13));
console.log(obj.insert(14));
console.log(obj.getRandom());
// console.log(obj.remove(10));
console.log(obj);
console.log(obj.remove(11));
console.log(obj);
