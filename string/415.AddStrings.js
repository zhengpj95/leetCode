/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
	let result = '';
	let add = 0;
	for (let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0; i--, j--) {
		let n1 = i < 0 ? 0 : num1.charAt(i) - '0';
		let n2 = j < 0 ? 0 : num2.charAt(j) - '0';
		let n3 = n1 + n2 + add;
		result = `${n3 % 10}${result}`;
		add = Math.floor(n3 / 10);
	}
	if (add > 0) {
		result = `${add}${result}`;
	}
	return result;
};

let res = addStrings('9333852702227987', '85731737104263');
console.log(res);
