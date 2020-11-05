/**
 * Your friend is typing his name into a keyboard.
 * Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.
 * You examine the typed characters of the keyboard.
 * Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.
 *
 * Constraints:
 * 1 <= name.length <= 1000
 * 1 <= typed.length <= 1000
 * The characters of name and typed are lowercase letters.
 * @author zheng
 * @date 2020/11/05 11:36:29
 */

/**
 * Time complexity: O(m+n)
 * Space complexity: O(1)
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
const isLongPressedName = function (name, typed) {
	if (typed.length < name.length) return false;

	let i = 0,
		j = 0;
	for (; i < name.length && j < typed.length; ) {
		if (i === 0 && name[0] !== typed[0]) return false; //第一个字符不等
		if (name[i] !== typed[j] && typed[j] !== name[i - 1]) return false; //字符不等且typed[j]!=name[i-1]，即typed[j]不是因长按键入的

		if (name[i] === typed[j]) {
			i++;
			j++;
		} else if (name[i] != typed[j] && typed[j] === name[i - 1]) {
			j++;
		}
	}
	if (i !== name.length) return false;
	if (i === name.length) {
		// 还需判断typed后的字符是否是长按键入的
		while (j < typed.length) {
			if (typed[j] != typed[j - 1]) return false;
			j++;
		}
	}
	return true;
};

let name = 'alex',
	typed = 'aaleex';
console.log(isLongPressedName(name, typed));
(name = 'saeed'), (typed = 'ssaaedd');
(name = 'alex'), (typed = 'alexxr');
console.log(isLongPressedName(name, typed));
