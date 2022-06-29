/**
 * 读题都读到蒙的题目。看了好几遍都不清楚排序规则是什么。
 *
 * 规则：
 * 	1.people[i][0] 是身高，对身高排序
 * 	2.people[i][1] 是跟自己一样高或者比自己高的人数，使用插入排序
 *
 * 输入: [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
 * 排序: [[7,0], [7,1], [6,1], [5,0], [5,2], [4,4]]
 * 插入排序:
 * 	[[7,0]]
 * 	[[7,0],[7,1]]
 * 	[[7,0],[6,1],[7,1]]
 * 	[[5,0],[7,0],[6,1],[7,1]]
 * 	[[5,0],[7,0],[5,2],[6,1],[7,1]]
 * 	[[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
 * 输出: [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
 */
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
	people.sort((a, b) => {
		if (a[0] == b[0]) {
			return a[1] - b[1];
		}
		return b[0] - a[0];
	});

	// let queue = [];
	// for (let i = 0; i < people.length; i++) {
	// 	insectionSort(queue, people[i]);
	// }
	// return queue;

	let queue = [];
	for (let person of people) {
		queue.splice(person[1], 0, person);
	}
	return queue;
};

/**
 * @param {number[][]} queue
 * @param {number[]} person
 */
var insectionSort = function (queue, person) {
	let pos = 0;
	let cnt = 0;
	for (let i = 0; i < queue.length; i++) {
		if (queue[i][0] >= person[0]) {
			cnt++;
		}
		if (cnt == person[1]) {
			pos = i + 1;
			break;
		}
	}

	queue.splice(pos, 0, person);

	// if (!queue.length) {
	// 	queue.push(person);
	// } else {
	// 	let i = queue.length;
	// 	while (i > pos) {
	// 		queue[i] = queue[i - 1];
	// 		i--;
	// 	}
	// 	queue[pos] = person;
	// }
};

let people = [
	[7, 0],
	[4, 4],
	[7, 1],
	[5, 0],
	[6, 1],
	[5, 2],
];
// people = [
// 	[6, 0],
// 	[5, 0],
// 	[4, 0],
// 	[3, 2],
// 	[2, 2],
// 	[1, 4],
// ];
console.log(reconstructQueue(people));
