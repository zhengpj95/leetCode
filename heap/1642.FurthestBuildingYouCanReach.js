/**
 * You are given an integer array heights representing the heights of buildings, some bricks, and some ladders.
 * You start your journey from building 0 and move to the next building by possibly using bricks or ladders.
 * While moving from building i to building i+1 (0-indexed),
 * If the current building's height is greater than or equal to the next building's height, you do not need a ladder or bricks.
 * If the current building's height is less than the next building's height, you can either use one ladder or (h[i+1] - h[i]) bricks.
 * Return the furthest building index (0-indexed) you can reach if you use the given ladders and bricks optimally.
 */

const { PriorityQueue } = require("./PriorityQueue");
/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (heights, bricks, ladders) {
	let queue = new PriorityQueue((a, b) => a < b);
	let neededBricks = 0;
	for (let i = 0; i < heights.length - 1; i++) {
		// next building is maller than current, jump it
		if (heights[i] >= heights[i + 1]) {
			continue;
		}
		let diff = heights[i + 1] - heights[i];
		neededBricks += diff;
		// count of needed bricks is greater than given bricks
		if (ladders == 0 && neededBricks > bricks) {
			return i;
		}
		// continue move to next building
		if (ladders == 0 && neededBricks <= bricks) {
			continue;
		}
		queue.enqueue(diff);
		// get the max diff, use ladders to replace it needed bricks
		if (neededBricks > bricks) {
			let top = queue.dequeue();
			neededBricks -= top;
			ladders--;
		}
	}
	return heights.length - 1;
};
let heights = [4, 2, 7, 6, 9, 14, 12],
	bricks = 5,
	ladders = 1;
// (heights = [4, 12, 2, 7, 3, 18, 20, 3, 19]), (bricks = 10), (ladders = 2);
// (heights = [14, 3, 19, 3]), (bricks = 17), (ladders = 0);
console.log(furthestBuilding(heights, bricks, ladders));
