/**
 * Given an unsorted array of integers,
 * find the length of longest increasing subsequence.
 *
 * Input: [10,9,2,5,3,7,101,18]
 * Output: 4
 * Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
 */

/**
 * Time complexity: O(n^2)
 * Space complexity: O(n)
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
	let len = nums.length;
	let dp = [];
	for (let i = 0; i < len; i++) {
		dp[i] = 1; //初始都是1，因为包括自身长度
	}

	for (let i = 0; i < len; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[i] > nums[j]) {
				dp[i] = Math.max(dp[i], dp[j] + 1);
			}
		}
	}

	let res = 0;
	for (let i = 0; i < len; i++) {
		res = Math.max(res, dp[i]);
	}
	return res;
};

/**
 * 像纸牌游戏一样，能在左边的牌中叠加的才叠加，不能的就开辟新的一堆放纸牌
 * 在每堆牌中最上面的那张牌就是最长的子序列之一。故堆的长度就是最长子序列了。
 * Time complexity: O(nlogn)
 * Space complexity: O(n)
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS2 = function (nums) {
	let top = [];
	let piles = 0;

	for (let i = 0; i < nums.length; i++) {
		let poker = nums[i];
		let left = 0,
			right = piles;

		while (left < right) {
			let mid = Math.floor((left + right) / 2);
			if (top[mid] < poker) {
				left = mid + 1;
			} else {
				right = mid;
			}
		}

		if (left === piles) {
			piles++;
		}
		// 放入牌后，数组都是有序得了
		top[left] = poker;
	}
	return piles;
};

let arr = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(arr));
console.log(lengthOfLIS2(arr));
