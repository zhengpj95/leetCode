/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function (characters, combinationLength) {
	this.list = [];
	characters = characters.split('').sort().join('');
	let backtracking = (characters, index, str) => {
		if (str.length == combinationLength) {
			this.list.push(str);
			return;
		}
		for (let i = index; i < characters.length; i++) {
			backtracking(characters, i + 1, str + characters[i]);
		}
	};
	backtracking(characters, 0, '');
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function () {
	return this.list.shift();
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function () {
	return this.list.length > 0;
};

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

var obj = new CombinationIterator('abc', 2);
console.log(obj);
