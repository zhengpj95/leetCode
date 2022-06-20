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

let words = ["sp", "p", "grah", "qwosp"];
// words = ["time", "me", "bell"];
console.log(minimumLengthEncoding(words));
