/**
 * Given an array A of 0s and 1s, we may change up to K values from 0 to 1.
 * Return the length of the longest (contiguous) subarray that contains only 1s.
 *
 * Note:
 * 1 <= A.length <= 20000
 * 0 <= K <= A.length
 * A[i] is 0 or 1
 * @author zheng
 * @date 2020/10/30 09:33:44
 */

/**
 * 和 424.Longest Repeating Character Replacement 相似的思路
 * 不断的扩大窗口，但窗口内的可替换数量大于给定值 K 时，就要缩小窗口了
 * Time complexity: O(n) n=A.length
 * Space complexity: O(1)
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const longestOnes = function (A, K) {
	if (K >= A.length) return K;
	let max = 0;
	let replaceCount = 0;
	let left = 0,
		right = 0;

	while (right < A.length) {
		if (A[right] === 0) {
			replaceCount++;
		}

		while (replaceCount > K) {
			if (A[left] == 0) {
				replaceCount--;
			}
			left++;
		}
		max = Math.max(max, right - left + 1);
		right++;
	}
	return max;
};

let A = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
	K = 3;
console.log(longestOnes(A, K));
