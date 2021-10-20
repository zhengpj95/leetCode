/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	// return s = s.trim().split(/\s+/).reverse().join(' ');

	if (!s) {
		return '';
	}
	s = s.trim().split(/\s+/).reverse();
	let low = 0,
		high = s.length - 1;
	while (low < high) {
		let tem = s[low];
		s[low] = s[high];
		s[high] = tem;
		low++;
		high--;
	}
	return s.join(' ');
};

reverseWords('a good   example');
