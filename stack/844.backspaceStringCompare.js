/**
 * Given two strings S and T, return if they are equal
 * when both are typed into empty text editors.
 * # means a backspace character.
 *
 * Note that after backspacing an empty text, the text will continue empty.
 *
 * Note:
 * 1 <= S.length <= 200
 * 1 <= T.length <= 200
 * S and T only contain lowercase letters and '#' characters.
 *
 * Follow up:
 * Can you solve it in O(N) time and O(1) space?
 * @author zheng
 * @date 2020/11/05 10:53:47
 */

/**
 * Stack
 * Time complexity: O(m+n)
 * Space complexity: O(m+n)
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = function (S, T) {
	let stack = [];
	let stack2 = [];
	for (let i = 0; i < S.length; i++) {
		if (S.length > 0 && S[i] == '#') {
			stack.pop();
		} else if (S[i] !== '#') {
			stack.push(S[i]);
		}
	}
	for (let i = 0; i < T.length; i++) {
		if (T.length > 0 && T[i] == '#') {
			stack2.pop();
		} else if (T[i] !== '#') {
			stack2.push(T[i]);
		}
	}

	// if (stack.length !== stack2.length) return false;
	// for (let i = 0; i < stack.length; i++) {
	// 	if (stack[i] !== stack2[i]) return false;
	// }
	// return true;

	S = stack.join('');
	T = stack2.join('');
	return S === T;
};

/**
 * 删除 # 以及 其前一个字母，略显麻烦
 * Time complexity: O(m+n)
 * Space complexity: O(1)
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare2 = function (S, T) {
	for (let i = 0; i < S.length; ) {
		if (i === 0 && S[i] === '#') {
			S = S.slice(i + 1);
			i--;
		} else if (S[i] === '#') {
			S = S.slice(0, i - 1) + S.slice(i + 1);
			i -= 2;
		} else {
			i++;
		}
	}
	for (let i = 0; i < T.length; ) {
		if (i === 0 && T[i] === '#') {
			T = T.slice(i + 1);
			i--;
		} else if (T[i] === '#') {
			T = T.slice(0, i - 1) + T.slice(i + 1);
			i -= 2;
		} else {
			i++;
		}
	}
	return S === T;
};

let S = 'ab#c',
	T = 'ad#c';
console.log(backspaceCompare2(S, T));
(S = 'ab##'), (T = 'c#d#');
console.log(backspaceCompare2(S, T));
(S = 'a##c'), (T = '#a#c');
console.log(backspaceCompare2(S, T));
(S = 'a#c'), (T = 'b');
console.log(backspaceCompare2(S, T));
