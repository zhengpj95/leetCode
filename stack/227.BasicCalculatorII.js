/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
	if (!s || !s.length) {
		return 0;
	}
	s = s.replace(/[ ]/gi, '');
	let size = s.length;
	if (!size) {
		return 0;
	}

	let stack = [];
	let oper = '+';
	let num = 0;
	for (let i = 0; i < size; i++) {
		let char = s.charAt(i);
		if (char.match(/[0-9]/)) {
			num = num * 10 + Number(char);
		}
		if (char.match(/[\+\-\*\/]/) || i == size - 1) {
			if (oper == '+') {
				stack.push(num);
			} else if (oper == '-') {
				stack.push(num * -1);
			} else if (oper == '*') {
				stack.push(stack.pop() * num);
			} else if (oper == '/') {
				let pop = stack.pop();
				let divNum = Math.floor(pop / num);
				if (pop < 0) {
					divNum = Math.ceil(Number(pop) / num);
				}
				stack.push(divNum);
			}
			num = 0;
			oper = char;
		}
	}
	let result = 0;
	while (stack.length) {
		result += stack.pop();
	}
	return result;
};

// console.log(calculate('3+2*2'));
// console.log(calculate(' 3/2 '));
// console.log(calculate(' 3+5 / 2 '));
console.log(calculate('14-3/2'));
