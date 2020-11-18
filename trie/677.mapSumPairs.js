/**
 * Implement the MapSum class:
 * - MapSum() Initializes the MapSum object.
 * - void insert(String key, int val) Inserts the key-val pair into the map. If the key already existed, the original key-value pair will be overridden to the new one.
 * - int sum(string prefix) Returns the sum of all the pairs' value whose key starts with the prefix.
 *
 * Constraints:
 * 1 <= key.length, prefix.length <= 50
 * key and prefix consist of only lowercase English letters.
 * 1 <= val <= 1000
 * At most 50 calls will be made to insert and sum.
 * @author zheng
 * @date 2020/11/18 10:51:58
 */

/**
 * 方式一：直接使用Map，insert时直接插入 <key, value> 键值对；计算sum时，则需遍历map，找出key中以prefix开头的值
 * 方式二：Prefix Hashmap，一个map保存每一个<key, value>；另一个map则遍历key，并保存<prefix, value>
 * 方式三：Trie
 */

/**
 * Initialize your data structure here.
 */
const MapSum = function () {
	this.root = {};
};

/**
 * 判断这个key是否已经存在，存在则更新值；
 * 否则则加入，并更新路径值
 * Time complexity: O(n) n=key.length
 * Space complexity: O(1)
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
	let obj = this.find(key);
	let hadWord = obj && obj.isEnd ? true : false;
	let oldValue = hadWord ? obj.endValue : 0;

	let root = this.root;
	for (let k of key.split('')) {
		if (!root[k]) {
			root[k] = { value: val };
		} else {
			if (hadWord) {
				root[k].value = root[k].value - oldValue + val;
			} else {
				root[k].value += val;
			}
		}
		root = root[k];
	}
	root.isEnd = true;
	root.endValue = val;
};

/**
 * Time complexity: O(n) n=prefix.length
 * Space complexity: O(1)
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
	let root = this.root;
	for (let k of prefix.split('')) {
		if (!root[k]) {
			return 0;
		}
		root = root[k];
	}
	return root && root.value ? root.value : 0;
};

/**
 * Time complexity: O(n) n=word.length
 * Space complexity: O(1)
 * @param {string} word
 * @returns {any}
 */
MapSum.prototype.find = function (word) {
	let root = this.root;
	for (let k of word.split('')) {
		if (!root[k]) {
			return null;
		}
		root = root[k];
	}
	return root;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

let map = new MapSum();
map.insert('abt', 8);
map.insert('ab', 4);
map.insert('abt', 2);
console.log(map.root);
console.log(`sum = `, map.sum('ab'));
// console.log(map.find('ab'));
