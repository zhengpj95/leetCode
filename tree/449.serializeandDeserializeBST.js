/**
 * Serialization is converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer,
 * or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
 *
 * Design an algorithm to serialize and deserialize a binary search tree.
 * There is no restriction on how your serialization/deserialization algorithm should work.
 * You need to ensure that a binary search tree can be serialized to a string,
 * and this string can be deserialized to the original tree structure.
 *
 * The encoded string should be as compact as possible.
 * @author zheng
 * @date 2020/10/09 20:03:21
 */

const { TreeNode, createTree } = require('./TreeNode');

const NULL_NODE = '#';
const SEPARATOR = ',';

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = function (root) {
	if (!root) return '';
	let arr = [];

	let traversal = (root) => {
		if (!root) {
			arr.push(NULL_NODE);
			return;
		}

		arr.push(root.val);
		traversal(root.left);
		traversal(root.right);
	};

	traversal(root);

	return arr.join(SEPARATOR);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function (data) {
	if (!data) return null;
	let arr = data.split(SEPARATOR);

	let buildTree = () => {
		let val = arr.shift();
		if (val === NULL_NODE) {
			return null;
		}
		let node = new TreeNode(val);
		node.left = buildTree();
		node.right = buildTree();
		return node;
	};

	let root = buildTree();
	return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

let arr = [2, 1, 3];
console.log(deserialize(serialize(createTree(arr))));
