/**
 * 思路：循环剔除叶子节点，直到最后剩下1或2个节点，表明这就是高度最小的树的根节点了
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
let findMinHeightTrees = function (n, edges) {
	if (!n) {
		return [];
	}
	if (n == 1) {
		return [0];
	}

	let map = {};
	for (let i = 0; i < n; i++) {
		map[i] = [];
	}

	for (let edgs of edges) {
		map[edgs[0]].push(edgs[1]);
		map[edgs[1]].push(edgs[0]);
	}

	let leaves = []; //叶子节点 || 度为1的点
	for (let i = 0; i < n; i++) {
		if (map[i].length == 1) {
			leaves.push(i);
		}
	}

	while (n > 2) {
		n -= leaves.length;
		let newLeaves = [];
		for (let leaf of leaves) {
			let node = map[leaf][0];
			let list = map[node];
			list.splice(list.indexOf(leaf), 1);
			if (list.length == 1) {
				newLeaves.push(node);
			}
		}
		leaves = newLeaves;
	}

	// console.log(map, leaves);
	return leaves;
};

let n = 3,
	edges = [
		[0, 1],
		[0, 2],
	];

let res = findMinHeightTrees(n, edges);
console.log(res);
