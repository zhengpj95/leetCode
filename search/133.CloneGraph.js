/**
 * https://leetcode.com/problems/clone-graph/
 * Constraints:
 * The number of nodes in the graph is in the range [0, 100].
 * 1 <= Node.val <= 100
 * Node.val is unique for each node.
 * There are no repeated edges and no self-loops in the graph.
 * The Graph is connected and all nodes can be visited starting from the given node.
 */

// Definition for a Node.
function Node(val, neighbors) {
	this.val = val === undefined ? 0 : val;
	this.neighbors = neighbors === undefined ? [] : neighbors;
}

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
	if (!node) {
		return node;
	}
	let visited = [];

	let dfs = (node) => {
		if (!node) {
			return node;
		}
		if (visited[node.val]) {
			return visited[node.val];
		}
		let cloned = new Node(node.val);
		visited[node.val] = cloned;

		if (node.neighbors && node.neighbors.length) {
			for (let neighbor of node.neighbors) {
				cloned.neighbors.push(dfs(neighbor));
			}
		}
		return cloned;
	};

	return dfs(node);
};

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph2 = function (node) {
	if (!node) {
		return node;
	}
	let build = (node, map) => {
		if (!node || map.has(node.val)) {
			return;
		}
		let cloned = new Node(node.val);
		map.set(node.val, cloned);

		if (node.neighbors) {
			for (let n of node.neighbors) {
				build(n, map);
			}
		}
	};

	let connect = (node, map, visited) => {
		if (!node || visited.has(node.val)) {
			return;
		}
		visited.set(node.val, true);
		let cloned = map.get(node.val);
		if (!cloned) {
			return;
		}
		if (node.neighbors) {
			for (let n of node.neighbors) {
				cloned.neighbors.push(map.get(n.val));
				connect(n, map, visited);
			}
		}
	};

	let map = new Map();
	build(node, map);
	let visited = new Map();
	connect(node, map, visited);

	return map.get(node.val);
};
