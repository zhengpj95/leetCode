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

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences2 = function (arr) {
	let obj = {};
	for (let item of arr) {
		obj[item] = (obj[item] || 0) + 1;
	}

	let obj2 = {};
	let res = true;
	Object.values(obj).map((item) => {
		if (obj2[item]) res = false;
		obj2[item] = true;
	});
	return res;
};
