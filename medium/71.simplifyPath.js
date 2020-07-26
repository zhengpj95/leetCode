/**
 * Given an absolute path for a file (Unix-style), simplify it. 
 * Or in other words, convert it to the canonical path.
 * Time complexity: O(n)
 * Space complexity: O(n)
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function (path) {
	// path = path.replace(/\/+/gi, '/');//去掉重复的/
	// if (path.slice(-1) == '/') {
	// 	path = path.slice(0, -1);//如最后一位是/，则移除
	// }

	let stack = [];
	let pathArr = path.split('/');

	for (let i = 0; i < pathArr.length; i++) {
		if (pathArr[i] === '.' || pathArr[i] === '') {
			continue;
		} else if (pathArr[i] === '..' && stack.length) {
			stack.pop();
		} else if (pathArr[i] !== '..') {
			stack.push(pathArr[i]);
		}
	}

	let result = '';
	for (let item of stack) {
		result += '/' + item;
	}
	return result === '' ? '/' : result; //"/" + stack.join('/');
};

/** 
 * Time complexity: O(n)
 * Space complexity: O(n)
 * @param {string} path
 * @return {string}
 */
const simplifyPath2 = function (path) {
	let stack = [];
	let arr = path.split('/');
	arr = arr.filter(item => item && item !== '.');

	arr.forEach(item => {
		if (item === '..') {
			stack.pop();
		} else {
			stack.push(item);
		}
	});

	return '/' + stack.join('/');
};

/** 
 * Time complexity: O(n)
 * Space complexity: O(n)
 * @param {string} path
 * @return {string}
 */
const simplifyPath3 = function (path) {
	let stack = [];
	let arr = path.split(/\/+/gi);

	arr.forEach(item => {
		if (item === '' || item === '.') {
			return;
		}
		if (item === '..') {
			stack.pop();
		} else {
			stack.push(item);
		}
	});

	return '/' + stack.join('/');
};

// let path = '/../';
let path = '/a/../../b/../c//.//././////ab';
console.log(simplifyPath3(path));;