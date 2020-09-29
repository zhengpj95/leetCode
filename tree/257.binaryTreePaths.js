/**
 * Given a binary tree, return all root-to-leaf paths.
 * @author zheng
 * @date 2020/09/29 16:42:38
 */

const { TreeNode, createTree } = require('./TreeNode');

/**
 * DFS
 * Time complexity: O(N)
 * Space complexity: O(N) 递归调用
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = function (root) {
	if (!root) return [];
	let result = [];

	let treePath = function (root, str) {
		if (!root.left && !root.right) {
			result.push(str);
			return;
		}
		if (root.left) {
			treePath(root.left, str + `->${root.left.val}`);
		}
		if (root.right) {
			treePath(root.right, str + `->${root.right.val}`);
		}
	};

	treePath(root, `${root.val}`);

	return result;
};

/**
 * BFS
 * Time complexity: O(N)
 * Space complexity: 叶子结点数
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths2 = function (root) {
	if (!root) return [];
	let result = [];
	let stack = [[root, `${root.val}`]];

	while (stack.length) {
		let [node, str] = stack.pop();
		if (!node.left && !node.right) {
			result.push(str);
			continue;
		}

		if (node.left) {
			stack.push([node.left, str + `->${node.left.val}`]);
		}
		if (node.right) {
			stack.push([node.right, str + `->${node.right.val}`]);
		}
	}

	return result;
};

/**
 * Time complexity: O(N)
 * Space complexity: O(N)
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths3 = function (root) {
	if (!root) return [];
	let paths = [];

	let dfs = function (root, path, paths) {
		if (!root.left && !root.right) {
			paths.push(path);
			return;
		}

		if (root.left) {
			dfs(root.left, path + `->${root.left.val}`, paths);
		}
		if (root.right) {
			dfs(root.right, path + `->${root.right.val}`, paths);
		}
	};

	// let paths2 = [];
	// let dfs2 = function (root, arr) {
	// 	if (!root) return;
	// 	arr.push(root.val);

	// 	if (!root.left && !root.right) {
	// 		paths2.push([...arr].join('->'));
	// 	}
	// 	dfs2(root.left, [...arr]);
	// 	dfs2(root.right, [...arr]);
	// };
	// dfs2(root, []);

	dfs(root, `${root.val}`, paths);
	return paths;
};

let arr = [1, 2, 3, 4, 5, 7, 8];
let root = createTree(arr);
console.time();
console.log(binaryTreePaths(root));
console.timeEnd();
console.time();
console.log(binaryTreePaths2(root));
console.timeEnd();
console.time();
console.log(binaryTreePaths3(root));
console.timeEnd();
