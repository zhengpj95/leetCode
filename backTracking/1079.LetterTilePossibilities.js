/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
	let map = {};

	let getStr = (track) => {
		let result = '';
		for (let i = 0; i < track.length; i++) {
			result += tiles[track[i]];
		}
		return result;
	};

	let backtrack = (track) => {
		let visited = getStr(track);
		if (map[visited]) {
			return;
		}
		let _track = getStr(track);
		if (_track) map[_track] = _track;
		for (let i = 0; i < tiles.length; i++) {
			if (track.indexOf(i) > -1) continue; //已经遍历过的索引
			track.push(i);
			backtrack(track);
			track.pop();
		}
	};
	backtrack([]);
	return Object.keys(map).length;
};

let tiles = 'AAB';
let res = numTilePossibilities(tiles);
console.log(res);
