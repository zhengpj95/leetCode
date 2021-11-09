/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function (words, puzzles) {
	let maskWord = (word) => {
		let mask = 0;
		for (let i = 0; i < word.length; i++) {
			mask |= 1 << (word.charCodeAt(i) - 'a'.charCodeAt(0));
		}
		return mask;
	};
	let map = {};
	words.forEach((item) => {
		if (map[maskWord(item)]) {
			map[maskWord(item)]++;
		} else {
			map[maskWord(item)] = 1;
		}
	});

	let res = [];
	for (let puz of puzzles) {
		let mask = maskWord(puz);
		let submask = mask;
		let first = 1 << (puz.charCodeAt(0) - 'a'.charCodeAt(0));
		let curr = 0;
		while (submask) {
			if (submask & first && map[submask]) {
				curr += map[submask];
			}
			submask = (submask - 1) & mask;
		}
		res.push(curr);
	}

	const wordMap = new Map();
	const aCharCode = 'a'.charCodeAt(0);
	words.forEach((word) => {
		let mask = 0;
		for (let i = 0; i < word.length; i++) {
			mask |= 1 << (word.charCodeAt(i) - aCharCode);
		}
		if (wordMap.has(mask)) {
			wordMap.set(mask, wordMap.get(mask) + 1);
		} else {
			wordMap.set(mask, 1);
		}
	});
	return res;
};

let words = ['aaaa', 'asas', 'able', 'ability', 'actt', 'actor', 'access'];
let puzzles = ['aboveyz', 'abrodyz', 'abslute', 'absoryz', 'actresz', 'gaswxyz'];

let res = findNumOfValidWords(words, puzzles);
console.log(res);
