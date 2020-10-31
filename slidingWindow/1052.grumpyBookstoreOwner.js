/**
 * Today, the bookstore owner has a store open for customers.length minutes.
 * Every minute, some number of customers (customers[i]) enter the store,
 * and all those customers leave after the end of that minute.
 *
 * On some minutes, the bookstore owner is grumpy.
 * If the bookstore owner is grumpy on the i-th minute, grumpy[i] = 1, otherwise grumpy[i] = 0.
 * When the bookstore owner is grumpy,
 * the customers of that minute are not satisfied, otherwise they are satisfied.
 *
 * The bookstore owner knows a secret technique to keep themselves not grumpy for X minutes straight, but can only use it once.
 * Return the maximum number of customers that can be satisfied throughout the day.
 *
 * Note:
 * 1 <= X <= customers.length == grumpy.length <= 20000
 * 0 <= customers[i] <= 1000
 * 0 <= grumpy[i] <= 1
 * @author zheng
 * @date 2020/10/31 14:31:33
 */

/**
 * 固定X的窗口大小，在窗口内老板保持不生气，窗口前后的分钟数+窗口内的分钟数假设就是最大值
 * 不断的移动窗口，判断最大值即可
 * 这种方式感觉有点投机取巧，在窗口移动前已经知道窗口后面的分钟数了
 * Time complexity: O(n) n = customers.length
 * Space complexity: O(n)
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
const maxSatisfied = function (customers, grumpy, X) {
	let left = 0,
		right = 0;
	let max = 0;
	let windowCount = 0; //窗口内的值
	let beforeWinCount = 0; //窗口前的值

	let afterCountDp = []; //窗口后的值
	let afterCount = 0;
	for (let i = customers.length - 1; i >= 0; i--) {
		if (grumpy[i] === 0) {
			afterCount += customers[i];
		}
		afterCountDp[i] = afterCount;
	}

	while (right < customers.length) {
		windowCount += customers[right];
		left = right - X;
		if (left >= 0) {
			windowCount -= customers[left];
			if (grumpy[left] === 0) {
				beforeWinCount += customers[left];
			}
		}
		let tmp = grumpy[right] === 0 ? afterCountDp[right] - customers[right] : afterCountDp[right];
		max = Math.max(max, windowCount + beforeWinCount + tmp);
		right++;
	}

	return max;
};

let customers = [1, 0, 1, 2, 1, 1, 7, 5, 10, 1, 1, 2],
	grumpy = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
	X = 3;

customers = [1, 0, 1, 2, 1, 1, 7, 5, 10, 1, 1, 1, 1];
grumpy = [0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0];
X = 3;
console.log(`result = `, maxSatisfied(customers, grumpy, X));
