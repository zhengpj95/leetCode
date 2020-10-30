/**
 * A subarray A[i], A[i+1], ..., A[j] of A is said to be turbulent if and only if:
 * For i <= k < j, A[k] > A[k+1] when k is odd, and A[k] < A[k+1] when k is even;
 * OR, for i <= k < j, A[k] > A[k+1] when k is even, and A[k] < A[k+1] when k is odd.
 *
 * That is, the subarray is turbulent if the comparison sign flips between each adjacent pair of elements in the subarray.
 * Return the length of a maximum size turbulent subarray of A.
 *
 * Note:
 * 1 <= A.length <= 40000
 * 0 <= A[i] <= 10^9
 * @author zheng
 * @date 2020/10/30 10:14:21
 */

/**
 * 大小大小 ><><><...
 * 小大小大 <><><>...
 * 这种思路比较直接，没有转换、变换、化简的思想
 * 肯定还有更简洁的方式，用了两个 while 循环
 * Time complexity: O(n) n=A.length
 * Space complexity: O(1)
 * @param {number[]} A
 * @return {number}
 */
const maxTurbulenceSize = function (A) {
	if (A.length <= 1) return 1;
	let max = 0;
	let left = 0,
		right = 0;

	while (right < A.length - 1) {
		if ((right & 1) === 1 && A[right] > A[right + 1]) {
			max = Math.max(max, right - left + 2);
		} else if ((right & 1) === 0 && A[right] < A[right + 1]) {
			max = Math.max(max, right - left + 2);
		} else {
			max = Math.max(max, 1); //如果是连续的相等数字，也要判断
			left = right + 1;
		}
		right++;
	}

	left = right = 0;
	while (right < A.length - 1) {
		if ((right & 1) === 1 && A[right] < A[right + 1]) {
			max = Math.max(max, right - left + 2);
		} else if ((right & 1) === 0 && A[right] > A[right + 1]) {
			max = Math.max(max, right - left + 2);
		} else {
			max = Math.max(max, 1);
			left = right + 1;
		}
		right++;
	}
	return max;
};

console.log(maxTurbulenceSize([9, 9]));
