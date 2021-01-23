/**
 *
 * @author zheng
 * @date 2021/01/23 16:10:40
 */

/**
 * O(T)=O(nlogn)
 * O(S)=O(n)
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
	let map = new Map();
	for (let word of words) {
		map.set(word, (map.get(word) || 0) + 1);
	}
	let list = Array.from(map.entries());
	list.sort((a, b) => {
		// 对字母排序
		if (b[1] == a[1]) {
			if (a[0] > b[0]) return 1;
			else if (a[0] < b[0]) return -1;
			else return 0;
		}
		return b[1] - a[1];
	});
	let res = [];
	for (let i = 0; i < k; i++) {
		res.push(list[i][0]);
	}
	return res;
};
