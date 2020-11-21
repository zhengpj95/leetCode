/**
 * In an array A of 0s and 1s, how many non-empty subarrays have sum S?
 * Note:
 * A.length <= 30000
 * 0 <= S <= A.length
 * A[i] is either 0 or 1.
 * @author zheng
 * @date 2020/11/21 12:53:37
 */

/**
 * 前缀和1
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
const numSubarraysWithSum = function (A, S) {
	// A.length+1
	let prefixSum = new Array(A.length + 1).fill(0);
	for (let i = 0; i < A.length; i++) {
		prefixSum[i + 1] = A[i] + prefixSum[i];
	}

	let sum = 0;
	let map = new Map();
	// 对于每个前缀和，prefixSum[i]+S 若存在与map中，证明存在这样的一个子数组
	for (let item of prefixSum) {
		sum += map.has(item) ? map.get(item) : 0;
		map.set(item + S, map.has(item + S) ? map.get(item + S) + 1 : 1);
	}
	return sum;
};

/**
 * 前缀和2
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
const numSubarraysWithSum1 = function (A, S) {
	let sum = 0;

	// let preSum = [0];
	// for (let i = 0; i < A.length; i++) {
	// 	preSum[i + 1] = preSum[i] + A[i];
	// }

	// time complexity: O(n^2)
	// for (let i = 1; i <= A.length; i++) {
	// 	for (let j = 0; j < i; j++) {
	// 		if (preSum[i] - preSum[j] === S) {
	// 			sum++;
	// 		}
	// 	}
	// }

	// // 优化1，对于每个preSum[i]，是否存在preSum[i]-S
	// let map = new Map();
	// for (let i = 0; i < preSum.length; i++) {
	// 	sum += map.has(preSum[i] - S) ? map.get(preSum[i] - S) : 0;
	// 	map.set(preSum[i], map.has(preSum[i]) ? map.get(preSum[i]) + 1 : 1);
	// }

	// 优化2
	let map = new Map();
	map.set(0, 1);
	let preSum1 = 0;
	for (let i = 0; i < A.length; i++) {
		preSum1 += A[i];
		sum += map.has(preSum1 - S) ? map.get(preSum1 - S) : 0;
		map.set(preSum1, map.has(preSum1) ? map.get(preSum1) + 1 : 1);
	}
	return sum;
};

/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
const numSubarraysWithSum2 = function (A, S) {
	let low = 0,
		high = 0;
	let suml = 0,
		sumh = 0;
	let sum = 0;
	for (let i = 0; i < A.length; i++) {
		suml += A[i];
		// 对于满足S时，i固定了，low对应此时子数组的左边界的最左边[low, i]
		while (low < i && suml > S) {
			suml -= A[low++];
		}

		sumh += A[i];
		// high对应此时子数组的左边界的最右边[high, i]
		while (high < i && (sumh > S || (sumh === S && A[high] === 0))) {
			sumh -= A[high++];
		}
		// 从[low, i] => [high, i]，low和high这之间的范围加上[high,i]都是满足条件的子数组
		if (suml === S) {
			sum += high - low + 1;
		}
	}
	return sum;
};

let A = [1, 0, 1, 0, 1, 1, 1],
	S = 2;
(A = [0, 0, 0, 0, 0]), (S = 0);
console.log(numSubarraysWithSum(A, S));
console.log(numSubarraysWithSum1(A, S));
// console.log(numSubarraysWithSum2(A, S));
