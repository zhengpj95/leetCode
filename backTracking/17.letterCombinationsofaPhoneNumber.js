/**
 * Given a string containing digits from 2-9 inclusive,
 * return all possible letter combinations that the number could represent.
 * Return the answer in any order.
 *
 * A mapping of digit to letters (just like on the telephone buttons) is given below.
 * Note that 1 does not map to any letters.
 *
 * Constraints:
 * 0 <= digits.length <= 4
 * digits[i] is a digit in the range ['2', '9'].
 * @author zheng
 * @date 2020/11/10 09:57:57
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
	if (!digits || !digits.length) return [];
	let digitList = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
	if (digits.length === 1) return digitList[digits[0]].split('');
	let list = [];
	for (let i = 0; i < digits.length; i++) {
		list.push(digitList[digits[i]]);
	}

	let result = [];
	let backtrack = (list, track, firstIdx) => {
		if (track.length === digits.length) {
			result.push([...track].join(''));
			return;
		}
		// i对应当前要选择的按键字符串，j对应其单个字符
		for (let i = firstIdx; i < list.length; i++) {
			for (let j = 0; j < list[i].length; j++) {
				track.push(list[i][j]);
				backtrack(list, track, i + 1);
				track.pop();
			}
		}
	};

	backtrack(list, [], 0);
	return result;
};

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations2 = function (digits) {
	if (!digits || !digits.length) return [];
	const map = {
		2: 'abc',
		3: 'def',
		4: 'ghi',
		5: 'jkl',
		6: 'mno',
		7: 'pqrs',
		8: 'tuv',
		9: 'wxyz',
	};

	let result = [];
	let backtrack = (index, str) => {
		if (str.length === digits.length) {
			result.push(str);
			return;
		}

		for (let letter of map[digits[index]]) {
			// 做选择，递归，撤销选择
			str = str + letter;
			backtrack(index + 1, str);
			str = str.slice(0, -1);
			// 简洁
			// backtrack(index + 1, str + letter);
		}
	};
	backtrack(0, '');
	return result;
};

// console.log(letterCombinations('234'));
console.log(letterCombinations2('23'));
