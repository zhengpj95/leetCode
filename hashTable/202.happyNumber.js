/**
 * Write an algorithm to determine if a number n is "happy".
 *
 * A happy number is a number defined by the following process:
 * Starting with any positive integer, replace the number by the sum of the squares of its digits,
 * and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
 * Those numbers for which this process ends in 1 are happy numbers.
 *
 * Return True if n is a happy number, and False if not.
 * @author zheng
 * @date 2020/10/22 11:18:33
 */

/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
	let checkIsHappy = (n, set) => {
		let arr = n.toString().split('');
		let res = 0;
		for (let i of arr) {
			res += Math.pow(Number(i), 2);
		}
		if (res === 1) return true;
		if (set.has(res)) return false;
		else set.add(res);
		return checkIsHappy(res, set);
	};
	let set = new Set();
	let res = checkIsHappy(n, set);
	return res;
};

/**
 * 使用快慢指针，快指针2步，慢指针1步，当它们相遇，即出现环的时候，
 * 如果相遇点不是1，那么永远都不会有 happy number
 * @param {number} n
 * @return {boolean}
 */
const isHappy2 = function (n) {
	let digitSum = (num) => {
		let sum = 0;
		while (num) {
			let temp = num % 10;
			sum += temp * temp;
			num = Math.floor(num / 10);
		}
		return sum;
	};

	let slow = n;
	let fast = digitSum(n); //必须从下一位开始
	while (slow !== fast) {
		console.log(slow, fast);
		slow = digitSum(slow);
		fast = digitSum(digitSum(fast));
		if (fast === 1) return true;
	}
	return slow === 1;
};
console.log(isHappy2(19));
