/**
 * Given an arbitrary ransom note string and another string containing letters from all the magazines,
 * write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.
 * Each letter in the magazine string can only be used once in your ransom note.
 *
 * Constraints: You may assume that both strings contain only lowercase letters.
 * @author zheng
 * @date 2021/01/04 22:14:06
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
	let map = new Map();
	for (let i = 0; i < magazine.length; i++) {
		map.set(magazine[i], map.has(magazine[i]) ? map.get(magazine[i]) + 1 : 1);
	}

	for (let i = 0; i < ransomNote.length; i++) {
		let char = ransomNote[i];
		if (!map.has(char) || map.get(char) <= 0) {
			return false;
		}
		map.set(char, map.get(char) - 1);
	}
	return true;
};

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct2 = function (ransomNote, magazine) {
	for (let i = 0; i < ransomNote.length; i++) {
		let char = ransomNote[i];
		if (magazine.includes(char)) {
			magazine = magazine.replace(char, '');
		} else {
			return false;
		}
	}
	return true;
};
