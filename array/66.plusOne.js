/**
 * Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
 * The digits are stored such that the most significant digit is at the head of the list, 
 * and each element in the array contain a single digit.
 * You may assume the integer does not contain any leading zero, except the number 0 itself.
 * @param {number[]} digits
 * @return {number[]}
 */

const plusOne = function (digits) {
	let len = digits.length;
	if (!len) {
		return [1];
	}

	let index = len;
	digits[index - 1] += 1;
	while (--index >= 0) {
		if (digits[index] < 10) {
			break;
		}
		digits[index] = 0;
		if (digits[index - 1]) {
			digits[index - 1] += 1;
		} else {
			digits.unshift(1);
			break;
		}
	}
	return digits;
};

/**
 * 数组每一项只能为一位数
 * @param {number[]} digits 
 */
const plusOne1 = function (digits) {
	digits = digits.reverse();
	let over = 1;
	const result = digits.map(item => {
		let newItem = item + over;
		over = newItem > 9 ? 1 : 0;
		return newItem % 10;
	})
	if (over > 0) {
		result.push(over);
	}
	return result.reverse();
}

/**
 * 数组的每一项可以为两位数
 * @param {number[]} digits 
 */
const plusOneOther = function (digits) {
	digits = digits.reverse()
	let overflow = 1
	const result = digits.map(element => {
		const newRawElement = element + overflow
		overflow = Math.floor(newRawElement / 10)
		return newRawElement % 10
	})
	if (overflow > 0) {
		result.push(overflow)
	}
	return result.reverse()
};

console.log(plusOne([4, 19, 19]));
console.log(plusOne1([9, 19, 19]));
console.log(plusOneOther([4, 19, 19]));
// console.log(plusOne([1, 2, 3]));