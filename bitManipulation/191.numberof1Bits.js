/**
 * Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).
 *
 * Note:
 * Note that in some languages such as Java, there is no unsigned integer type.
 * In this case, the input will be given as a signed integer type.
 * It should not affect your implementation, as the integer's internal binary representation is the same,
 * whether it is signed or unsigned.
 * In Java, the compiler represents the signed integers using 2's complement notation.
 * Therefore, in Example 3 above, the input represents the signed integer. -3.
 *
 * Follow up: If this function is called many times, how would you optimize it?
 * Constraints: The input must be a binary string of length 32
 * @author zheng
 * @date 2020/11/21 14:00:43
 */

/**
 * Time complexity: O(32) = O(1)
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
	let result = 0;
	let bit = 1;
	for (let i = 0; i < 32; i++) {
		if (n & bit) {
			result++;
		}
		bit <<= 1; // bit *= 2;
	}
	return result;
};

/**
 * 这个是很巧妙的操作 0&1=0,1&1=1
 * 对于n，从最低位的1开始，此时n&(n-1)后，n还不为0，证明n中还有1
 * Time complexity: O(32) = O(1)
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight2 = function (n) {
	let result = 0;
	while (n != 0) {
		result++;
		n = n & (n - 1);
	}
	return result;
};

/**
 * @param {number} n
 */
var hammingWeight3 = function (n) {
	return n.toString(2).replace(/0/g, "").length;
};

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight4 = function (n) {
	let result = 0;
	while (n > 0) {
		result += n & 1;
		n >>>= 1;
	}
	return result;
};

console.log(hammingWeight(00000000000000000000000000001011));
console.log(hammingWeight2(00000000000000000000000000001011));
console.log(hammingWeight3(00000000000000000000000000001011));
