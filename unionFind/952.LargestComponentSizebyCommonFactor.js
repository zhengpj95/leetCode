/**
 * 参考写法
 * https://leetcode.com/problems/largest-component-size-by-common-factor/discuss/640347/Union-Find-Javascript-648ms
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var largestComponentSize = function (nums) {
	let list = [];
	let find = (x) => {
		if (!list[x]) {
			list[x] = x;
		}
		if (list[x] != x) {
			list[x] = find(list[x]);
		}
		return list[x];
	};
	let primesSet = (x) => {
		let res = [];
		for (let i = 2; i * i <= x; i++) {
			if (x % i == 0) {
				if (res.indexOf(i) < 0) {
					res.push(i);
				}
				if (res.indexOf(x / i) < 0) {
					res.push(x / i);
				}
			}
		}
		return res;
	};

	for (let num of nums) {
		let set = primesSet(num);
		for (let item of set) {
			list[find(item)] = find(num);
		}
	}

	const cntMap = new Map();
	for (let num of nums) {
		const parent = find(num);
		cntMap.set(parent, (cntMap.get(parent) || 0) + 1);
	}
	return Math.max(...cntMap.values());
};

let res = largestComponentSize([2, 3, 6, 7, 4, 12, 21, 39]);
console.log(res);
