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
