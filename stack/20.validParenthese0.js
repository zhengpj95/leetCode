/**
 * @param {string} s
 * @return {boolean}
 */

const parenthese = {
	'[': 1,
	'(': 2,
	'{': 3,
	'}': 4,
	')': 5,
	']': 6
}
const MaxCount = 7;

var isValid = function (s) {
	if (!isLeft(s[0])) {
		return false;
	}

	let stack = [];
	for (let i = 0; i < s.length; i++) {
		let item = s[i];

		if (isLeft(item)) {
			stack.push(parenthese[item]);
			continue;
		}

		let stackItem = stack.pop();
		if (parenthese[item] + stackItem != MaxCount) {
			return false;
		}
	}

	if (stack.length) {
		return false;
	}
	return true;
};

var isLeft = function (char) {
	if (!char) {
		return false;
	}

	let type = parenthese[char];
	return type == parenthese['('] ||
		type == parenthese['['] ||
		type == parenthese['{']
}

console.log(isValid("()[]{}"));