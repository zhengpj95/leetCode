/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
	let stack = [-1];
	let maxSize = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] == '(') {
			stack.push(i);
		} else {
			stack.pop();
			if (!stack.length) {
				stack.push(i)
			} else {
				maxSize = Math.max(maxSize, i - stack[stack.length - 1])
			}
		}
	}
	return maxSize;
};

console.log(longestValidParentheses("(()"));
console.log(longestValidParentheses(")()())"));
console.log(longestValidParentheses("())((())"))