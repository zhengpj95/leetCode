/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
	let res = [];
	let dfs = (node, path) => {
		// console.log(node, path);
		path.push(node);
		if (node === graph.length - 1) {
			res.push(path);
			return;
		}
		for (let edge of graph[node]) {
			dfs(edge, [...path]);
		}
	};
	dfs(0, []);
	return res;
};
