/**
 * Given a string s containing only digits,
 * return all possible valid IP addresses that can be obtained from s. You can return them in any order.
 *
 * A valid IP address consists of exactly four integers, each integer is between 0 and 255,
 * separated by single dots and cannot have leading zeros.
 * For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses
 * and "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.
 *
 * Constraints:
 * 0 <= s.length <= 3000
 * s consists of digits only.
 * @author zheng
 * @date 2020/11/15 19:47:36
 */

/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = function (s) {
	if (s.length < 4 || s.length > 12) return [];
	if (s.length === 4) return [s.split('').join('.')];
	if (s.length === 12) {
		let res = [];
		for (let i = 0; i < 12; i += 3) {
			res.push(s.substr(i, 3));
		}
		if (res.some((item) => parseInt(item) > 255)) return [];
		return [res.join('.')];
	}

	let isValid = (str) => {
		if (str.length > 3 || !str || (str[0] == '0' && str.length > 1) || parseInt(str) > 255) {
			return false;
		}
		return true;
	};

	let result = [];
	let size = s.length;
	for (let i = 1; i <= 3; i++) {
		for (let j = 1; j <= 3 && i + j < size; j++) {
			for (let k = 1; k <= 3 && i + j + k < size; k++) {
				let s1 = s.substr(0, i);
				let s2 = s.substr(i, j);
				let s3 = s.substr(i + j, k);
				let s4 = s.substr(i + j + k);
				if (isValid(s1) && isValid(s2) && isValid(s3) && isValid(s4)) {
					result.push(`${s1}.${s2}.${s3}.${s4}`);
				}
			}
		}
	}
	return result;
};

let s = '101023';
console.log(restoreIpAddresses(s));
