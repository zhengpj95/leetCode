/**
 * A valid encoding of an array of words is any reference string s and array of indices indices such that:
 * 		words.length == indices.length
 * 		The reference string s ends with the '#' character.
 * 		For each index indices[i], the substring of s starting from indices[i] and up to (but not including) the next '#' character is equal to words[i].
 * Given an array of words, return the length of the shortest reference string s possible of any valid encoding of words.
 */

/**
 * stupid method
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function (words) {
	if (words.length == 1) {
		return words[0].length + 1;
	}
	words = words.map((w) => {
		return w.split("").reverse().join("");
	});
	words.sort();
	// 相同前缀开头的，移除
	words = words.filter((value, index, ary) => {
		return !(ary[index + 1] || "").startsWith(value);
	});
	return words.reduce((rst, w) => rst + w.length + 1, 0);
};

/**
 * 使用 Set 的特性，如果已经存在 words[i] 的某部分，则删除这部分
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding2 = function (words) {
	let set = new Set(words);
	for (let word of words) {
		for (let i = 1; i < word.length; i++) {
			if (set.has(word.slice(i))) {
				set.delete(word.slice(i));
			}
		}
	}
	return Array.from(set).join("#").length + 1;
};

let words = ["sp", "p", "grah", "qwosp"];
// words = ["time", "me", "bell"];
console.log(minimumLengthEncoding2(words));
