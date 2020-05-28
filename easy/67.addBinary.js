/**
 * Given two binary strings, return their sum (also a binary string).
 * The input strings are both non-empty and contains only characters 1 or 0.
 */

/**
 * 超过Number的范围就不行了。
 * 如果sum大于Number能表示的范围时，就不对了。只能实现字符串较短的转换。
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
	let sum = Number(a) + Number(b);
	if (sum < 2) {
		return sum + '';
	}

	let temp = '';
	while (sum > 0) {
		let overflow = sum % 10;
		if (overflow > 1) {
			temp += overflow % 2;
			sum = Math.floor(sum / 10) + 1;
		} else {
			temp += overflow;
			sum = Math.floor(sum / 10);
		}
	}

	let res = '';
	for (let i = temp.length - 1; i >= 0; i--) {
		res += temp[i];
	}
	return res;
};

/**
 * 使用数组的解法，逢二进一
 * @param {string} a
 * @param {string} b
 * @returns {string}
 */
const addBinary2 = function (a, b) {
	let arr1 = a.split('').reverse();
	let arr2 = b.split('').reverse();

	let min = Math.min(arr1.length, arr2.length);
	let newArr = [];
	for (let i = 0; i < min; i++) {
		newArr.push(Number(arr1.shift()) + Number(arr2.shift()));
	}
	if (arr1.length) {
		newArr = newArr.concat(arr1.map((item) => parseInt(item)));
	}
	if (arr2.length) {
		newArr = newArr.concat(arr2.map((item) => parseInt(item)));
	}

	let overflow = 0;
	let result = newArr.map((item) => {
		let newItem = item + overflow;
		overflow = newItem > 1 ? 1 : 0;
		return newItem % 2;
	});
	if (overflow) {
		result.push(1);
	}

	let res = '';
	result.reverse().map((item) => {
		res += item;
	});
	return res;
};

/**
 * 使用BigInt类型来出来
 * 0b => binary 二进制
 * 0h => hex	十六进制
 * 0c => octal 	八进制
 * 0d => decmal	十进制
 *
 * Runtime: 68 ms, faster than 48.11% of JavaScript online submissions for Add Binary.
 * Memory Usage: 33.9 MB, less than 92.86% of JavaScript online submissions for Add Binary.
 *
 * @param {string} a
 * @param {string} b
 */
var addBinary3 = function (a, b) {
	const aBin = `0b${a}`;
	const bBin = `0b${b}`;
	const sum = BigInt(aBin) + BigInt(bBin);
	return sum.toString(2);
};

console.log(addBinary3('11', '1'));
console.log(addBinary3('1010', '1011'));
