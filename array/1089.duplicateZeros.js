/**
 * Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.
 * Note that elements beyond the length of the original array are not written.
 * Do the above modifications to the input array in place, do not return anything from your function.
 *
 * Note:
 * 1 <= arr.length <= 10000
 * 0 <= arr[i] <= 9
 * @author zheng
 * @date 2020/11/04 17:10:51
 */

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const duplicateZeros = function (arr) {
	let size = arr.length + arr.filter((item) => item == 0).length;
	let len = arr.length;
	let idx = size - 1;
	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[i] !== 0) {
			if (idx < len) arr[idx] = arr[i];
		} else {
			if (idx < len) arr[idx] = 0;
			idx--;
			if (idx < len) arr[idx] = 0;
		}
		idx--;
	}
};

let arr = [0, 0, 0, 0, 0, 0, 0];
arr = [8, 4, 5, 0, 0, 0, 0, 7];
arr = [1, 0, 2, 3, 0, 4, 5, 0];
duplicateZeros(arr);
console.log(arr);
