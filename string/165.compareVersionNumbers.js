/**
 * @author zheng
 * @date 2021/01/15 19:34:19
 */

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
	let arr1 = [],
		arr2 = [];
	version1.split('.').forEach((item) => arr1.push(Number(item)));
	version2.split('.').forEach((item) => arr2.push(Number(item)));

	let maxSize = arr1.length > arr2.length ? arr1.length : arr2.length;
	if (arr1.length != maxSize) {
		for (let i = arr1.length; i < maxSize; i++) {
			arr1.push(0);
		}
	}
	if (arr2.length != maxSize) {
		for (let i = arr2.length; i < maxSize; i++) {
			arr2.push(0);
		}
	}

	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] != arr2[i]) {
			return arr1[i] > arr2[i] ? 1 : arr1[i] < arr2[i] ? -1 : 0;
		}
	}
	return 0;
};
