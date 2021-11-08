let multiply = function (num1, num2) {
	if (num1 === '0' || num2 === '0') {
		return '0';
	}

	num1 = num1.split('').reverse();
	num2 = num2.split('').reverse();

	let result = new Array(num1.length + num2.length).fill(0);
	for (let pos2 = 0; pos2 < num2.length; pos2++) {
		let digit2 = Number(num2[pos2]);
		for (let pos1 = 0; pos1 < num1.length; pos1++) {
			let digit1 = Number(num1[pos1]);
			let currentPos = pos1 + pos2;

			let product = digit1 * digit2 + result[currentPos];
			result[currentPos] = product % 10;
			result[currentPos + 1] += Math.floor(product / 10);
		}
	}

	if (result[result.length - 1] == 0) {
		result.pop();
	}

	return result.reverse().join('');
};

let res = multiply('367908', '2123123');
console.log(res);
