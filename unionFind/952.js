/**
 * 并查集
 * Union-Find
 * Disjoint Set
 * 判断多个元素是否在同一集合里，让同一集合里的元素都统一到同一个parent
 */
class DisjointSet {
	constructor() {
		this.list = [];
	}

	/* this.list[x]==x 表示最顶级的parent元素了，表明在同一个集合里 */
	find(x) {
		if (this.list[x] == null) {
			this.list[x] = x;
		}
		if (this.list[x] != x) {
			this.list[x] = this.find(this.list[x]);
		}
		return this.list[x];
	}

	union(x, y) {
		let xr = this.find(x);
		let yr = this.find(y);
		this.list[xr] = yr;
	}
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var largestComponentSize = function (nums) {
	// 找出一个数的公因数
	let primesSet = (x) => {
		let res = [];
		for (let i = 2; i * i <= x; i++) {
			if (x % i != 0) continue;
			if (res.indexOf(i) < 0) res.push(i);
			let res1 = primesSet(x / i);
			if (res1 && res1.length) {
				for (let item of res1) {
					if (res.indexOf(item) < 0) {
						res.push(item);
					}
				}
			}
		}
		if (!res.length) {
			res.push(x);
		}
		return res;
	};

	// 把数组根据公因数划分成集合，加入的是数组索引
	let map = {};
	for (let i = 0; i < nums.length; i++) {
		primes = primesSet(nums[i]);
		for (let item of primes) {
			if (!map[item]) {
				map[item] = [];
			}
			map[item].push(i);
		}
	}

	// 把相同集合的联合起来
	let ds = new DisjointSet();
	for (let key in map) {
		let list = map[key];
		for (let i = 0; i < list.length - 1; i++) {
			ds.union(list[i], list[i + 1]);
		}
	}
	// console.log(ds);

	// 找出最大的集合
	let countMap = new Map();
	for (let i = 0; i < nums.length; i++) {
		let parent = ds.find(i);
		countMap.set(parent, (countMap.get(parent) || 0) + 1);
	}
	// console.log(ds);

	return Math.max(...countMap.values());
};

let res = largestComponentSize([2, 3, 6, 7, 4, 12, 21, 39, 41]);
console.log(res);

/**
 * 以 [2, 3, 6, 7, 4, 12, 21, 39, 41] 为例子：
 *
 * 刚开始时 ds.list = []  （可以根据 nums 的长度，构建ds.list=[0,1,2,3,4,5,6,7,8]）
 * 2:[2,6,4,12]对应的索引[0,2,4,5] ==> 构建的 ds.list = [2, null, 4, null, 5, 5]
 * 3:[3,6,12,21,39]对应的索引[1,2,5,6,7] ==> 构建的 ds.list = [2, 5, 5, null, 5, 6, 7, 7]
 * 7:[7,21]对应的索引[3,6] ==> 构建的 ds.list = [2, 5, 5, 7, 5, 6, 7, 7]
 * 13:[39]对应的索引[7] ==> 构建的 ds.list = 不变 （为什么没变化呢，因为上面代码中使用的是union方法，只有两个及以上元素才会调用）
 * 41:[41]对应的索引[8] ==> 构建的 ds.list = 不变
 *
 * 最后遍历一遍数组，找出最大的具有相同的顶级parent元素的个数即可（表明在同一个集合里）
 * 最后ds.list=[7, 7, 7, 7, 7, 7, 7, 7, 8] （前8个元素具有统一的parent，表明在同一个集合里）
 */
