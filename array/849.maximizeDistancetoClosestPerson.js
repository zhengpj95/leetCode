/**
 * You are given an array representing a row of seats where seats[i] = 1 represents a person sitting in the ith seat,
 * and seats[i] = 0 represents that the ith seat is empty (0-indexed).
 * There is at least one empty seat, and at least one person sitting.
 * Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized.
 * Return that maximum distance to the closest person.
 *
 * Constraints:
 * 2 <= seats.length <= 2 * 10^4
 * seats[i] is 0 or 1.
 * At least one seat is empty.
 * At least one seat is occupied.
 * @author zheng
 * @date 2020/10/29 18:30:41
 */

/**
 * 有bug
 * 想使用滑动窗口解决，找出最大窗口即可，
 * 但是有些边界情况不适用，比如最大值是坐在最左边或者最右边的时候，这个时候是不能用除法的了
 *
 * @param {number[]} seats
 * @return {number}
 */
const haveBugFunc = function (seats) {
	if (seats.length == 2) return 1;
	let left = 0,
		right = 0;
	let max = 0;
	let lastLeft = 0;

	while (right < seats.length) {
		let num = seats[right];

		max = Math.max(max, right - left);
		if (num === 1) {
			lastLeft = left;
			left = right;
		}
		right++;
	}
	if (seats[right - 1] === 0) {
		if (right - left - 1 >= max) return right - left - 1;
	} else if (seats[lastLeft] === 0 && seats[right - 1] === 1) {
		if (right - lastLeft - 1 >= max) return right - lastLeft - 1;
	}
	return Math.floor(max / 2);
};

/**
 * @param {number[]} seats
 * @return {number}
 */
const maxDistToClosest = function (seats) {};

let arr = [0, 0, 1, 0, 1, 1];
console.log(haveBugFunc(arr));
