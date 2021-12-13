/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var nthMagicalNumber = function (n, a, b) {
	let gcd = (x, y) => {
		if (x == 0) return y;
		return gcd(y % x, x);
	};

	const MOD = 10 ** 9 + 7;
	const L = (a / gcd(a, b)) * b;
	const M = L / a + L / b - 1;
	const q = Math.trunc(n / M),
		r = n % M;

	let result = (q * L) % MOD;
	if (r == 0) {
		return result;
	}

	let heads = [a, b];
	for (let i = 0; i < r - 1; ++i) {
		if (heads[0] <= heads[1]) heads[0] += a;
		else heads[1] += b;
	}

	result += Math.min(heads[0], heads[1]);
	return result % MOD;
};
