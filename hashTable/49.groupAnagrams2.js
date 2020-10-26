/**
 * 上一个解法中，虽然使用了map，但是没有对数组每一项进行排序，使用了3个for循环，时间复杂度太高了
 * 对于 map，get到的如果是数组，可以直接push新元素进来
 * @author zheng
 * @date 2020/10/26 20:26:38
 */

/**
 * Time complexity: O(n * m) n is length of strs, m is strs[i] length
 * Space complexity: O(n)
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
	let map = new Map();
	for (let item of strs) {
		let newItem = item.split('').sort().join('');
		if (map.has(newItem)) map.get(newItem).push(item);
		else map.set(newItem, [item]);
	}
	return [...map.values()];
};

let strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(groupAnagrams(strs));
