/**
 * O(T): O(n)
 * O(S): O(n)
 * 遇到 ( ，则把其索引加入栈中
 * 遇到 ) ，则需出栈，如果此时栈为空，则这一部分的子字符串为一小组，重新把当前的索引放入栈中；若不空，则计算索引的长度即可。
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