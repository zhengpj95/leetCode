/**
 * The set [1, 2, 3, ..., n] contains a total of n! unique permutations.
 * By listing and labeling all of the permutations in order, we get the following sequence for n = 3:
 * 1. "123"
 * 2. "132"
 * 3. "213"
 * 4. "231"
 * 5. "312"
 * 6. "321"
 * Given n and k, return the kth permutation sequence.
 *
 * Constraints:
 * 1 <= n <= 9
 * 1 <= k <= n!
 * @author zheng
 * @date 2020/11/14 09:05:29
 */

/**
 * Time Limit Exceeded
 * 找到就该退出，不需要找出全部
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = function (n, k) {
	let result = [];

	/**
	 * @param {number} n
	 * @param {number[]} track
	 */
	let backtrack = (n, track) => {
		if (track.length === n) {
			result.push([...track].join(''));
			return;
		}

		for (let i = 1; i <= n; i++) {
			if (track.includes(i)) continue;
			backtrack(n, [...track, i], i + 1);
		}
	};

	backtrack(n, []);
	return result[k - 1];
};

/**
 * 耗时太多了，击败5%，下一步怎么优化呢？？？？
 * Runtime: 7072 ms, faster than 5.51% of JavaScript online submissions for Permutation Sequence.
 * Memory Usage: 44.6 MB, less than 23.85% of JavaScript online submissions for Permutation Sequence.
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation2 = function (n, k) {
	let result;
	/**
	 * @param {number} n
	 * @param {string} track
	 */
	let backtrack = (n, track) => {
		if (track.length === n) {
			if (--k < 1) return track;
		}

		for (let i = 1; i <= n; i++) {
			if (track.includes(i)) continue;
			if (result) return;
			let res = backtrack(n, track + i, i + 1);
			if (res && res.length === n && !result) {
				result = res;
			}
		}
	};
	backtrack(n, '');
	return result;
};

/**
 * 新思路：一位一位的确定
 * 如 n = 4，k = 15 时
 * 则 第一位分别是 1, 2, 3, 4 时，则其各有 (n-1)! 个子项
 * 类似的第二位是非第一位数字时，也有 (n-2)! 个子项
 * 。。。
 * 当我们找 k = 15 时，可以跳过第一位是1和2的，从第一位是3开始，
 * 此时就在第一位是3的第15-12 (15 - (4-1)! * 2)个，此时又可以跳过第二位是1的，从2开始，
 * 此时就在第二位是2的第15-12-2 (15 - (4-1)! * 2 - (3-1)! * 1)个，此时就是第二位是2的第1个元素了
 *
 * Runtime: 60 ms, faster than 100.00% of JavaScript online submissions for Permutation Sequence.
 * Memory Usage: 38.8 MB, less than 82.57% of JavaScript online submissions for Permutation Sequence.
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation3 = function (n, k) {
	if (n === 1) return '1';
	let factorial = [1];
	let nums = [];
	for (let i = 1; i <= n; i++) {
		nums.push(i);
		factorial.push(factorial[i - 1] * i);
	}

	let result = '';
	k--; //需先减1，因为每个组都是从下标0开始算的
	for (let i = 1; i <= n; i++) {
		let index = Math.floor(k / factorial[n - i]); //对于每一位，计算跳过多少组
		result += nums[index]; //确定当前位
		nums.splice(index, 1); //把当前位从nums中移除，此位不会再出现
		k -= index * factorial[n - i]; //对于每一位，在此组的第几个位置
	}
	return result;
};

let n = 3,
	k = 3;

(n = 9), (k = 25996);
// (n = 4), (k = 15);
// (n = 3), (k = 1);
console.time('a');
console.time('b');
console.log(getPermutation2(n, k));
console.timeEnd('a');
console.log(getPermutation3(n, k));
console.timeEnd('b');
