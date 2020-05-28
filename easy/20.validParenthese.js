const parenthese = {
	'[': ']',
	'(': ')',
	'{': '}'
}


var isValid = function (s) {
	let stack = [];
	for (let i = 0; i < s.length; i++) {
		if (parenthese[s[i]]) {
			stack.push(s[i]);
		} else {
			let item = stack.pop();
			if (!parenthese[item] || parenthese[item] != s[i]) {
				return false;
			}
		}
	}
	return !stack.length;
};

console.log(isValid("()[]{}"));
console.log(isValid("(]"));