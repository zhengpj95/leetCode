/**
 * @author zheng
 * @date 2021/01/25 21:10:17
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
	let map = new Map();
	for (let item of arr) {
		map.set(item, (map.get(item) || 0) + 1);
	}

	// let values = [...map.values()].sort((a, b) => a - b);
	// for (let i = 0; i < values.length - 1; i++) {
	// 	if (values[i] == values[i + 1]) return false;
	// }

	// let set = new Set();
	// for (let item of map.values()) {
	// 	if (set.has(item)) {
	// 		return false;
	// 	}
	// 	set.add(item);
	// }
	// return true;

	let values = [...map.values()];
	return new Set(values).size == values.length;
};
