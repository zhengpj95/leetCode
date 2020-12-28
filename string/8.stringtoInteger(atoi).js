/**
 *
 * @author zheng
 * @date 2020/12/28 23:37:37
 */

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
	if (!s || s.trim().length < 1) {
		return 0;
	}

	let trimStr = s.trim();
	//第一个字符不是 0~9 + -
	if (!trimStr[0].match(/[0-9+-]/)) {
		return 0;
	}
	//第一个字符是 + -，但是第二个字符不是数字
	if (trimStr[0].match(/[-+]/) && trimStr[1] != undefined && !trimStr[1].match(/[0-9]/)) {
		return 0;
	}

	let part = s.match(/[0-9]/);
	if (part == null || part == undefined) {
		return 0;
	}

	let str = '';
	for (let i = part.index; i < s.length; i++) {
		if (s[i].match(/[0-9]/)) {
			str += s[i];
		} else {
			break;
		}
	}

	// let minus = part.index > 0 && s[part.index - 1] == '-';
	let sign = part.index > 0 && s[part.index - 1] == '-' ? -1 : 1;
	if (+str >= Math.pow(2, 31)) {
		return Math.pow(2, 31) * sign - (sign < 0 ? 0 : 1);
	}
	return +str * sign;
};
