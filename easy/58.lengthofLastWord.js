/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
	let m = s.trim().match(/(\w)+$/)
	console.log(m);
	return m ? m[0].length : 0;
	// let arr = s.trim().split(' ');
	// console.log(arr, typeof arr);
	// return arr ? arr[arr.length - 1].length : 0;
};

console.log(lengthOfLastWord('hello word'));