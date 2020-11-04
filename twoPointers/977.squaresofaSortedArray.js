/**
 * Given an array of integers A sorted in non-decreasing order,
 * return an array of the squares of each number, also in sorted non-decreasing order.
 *
 * Note:
 * 1 <= A.length <= 10000
 * -10000 <= A[i] <= 10000
 * A is sorted in non-decreasing order.
 * @author zheng
 * @date 2020/11/04 18:59:55
 */

/**
 * Sorting
 * Time complexity: O(nlogn)
 * Space complexity: O(1)
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares = function (A) {
	for (let i = 0; i < A.length; i++) {
		A[i] = A[i] * A[i];
	}
	A.sort((a, b) => a - b);
	return A;
};

/**
 * Two Pointers
 * 从数组的正负数分解点开始往两边遍历，小的就加入新数组，最后再处理左右两边没有遍历到的情况
 * 这里使用双指针实在太巧妙了，我都没有想到
 * Time complexity: O(n)
 * Space complexity: O(n)
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares2 = function (A) {
	let leftIdx = -1;
	for (let num of A) {
		if (num >= 0) break;
		if (num < 0) {
			leftIdx++;
		}
	}

	let result = [];
	let rightIdx = leftIdx + 1;
	while (leftIdx >= 0 && rightIdx < A.length) {
		let num1 = A[leftIdx] * A[leftIdx];
		let num2 = A[rightIdx] * A[rightIdx];
		if (num1 <= num2) {
			result.push(num1);
			leftIdx--;
		} else {
			result.push(num2);
			rightIdx++;
		}
	}

	while (leftIdx >= 0) {
		result.push(A[leftIdx] * A[leftIdx]);
		leftIdx--;
	}
	while (rightIdx < A.length) {
		result.push(A[rightIdx] * A[rightIdx]);
		rightIdx++;
	}
	return result;
};

console.log(sortedSquares2([-4, -1, 0, 3, 10]));
console.log(sortedSquares2([-7, -3, 2, 3, 11]));
