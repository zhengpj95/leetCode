var RandomizedSet = function () {
	this.root = {};
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
	if (this.root[val] != null) {
		return false;
	}
	this.root[val] = val;
	return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
	if (this.root[val] == null) {
		return false;
	}
	delete this.root[val];
	return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
	let keys = Object.keys(this.root);
	let size = keys.length;
	let random = Math.floor(Math.random() * size);
	return this.root[keys[random]];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var obj = new RandomizedSet();
console.log(obj.remove(0));
console.log(obj.remove(0));
console.log(obj.insert(0));
console.log(obj.getRandom());
console.log(obj.remove(0));
console.log(obj.insert(0));
