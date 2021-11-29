class DisjointSet {
	constructor() {
		this.list = {};
	}

	/* this.list[x]==x 表示最顶级的parent元素了，表明在同一个集合里 */
	find(x) {
		if (this.list[x] == null) {
			this.list[x] = x;
		}
		if (this.list[x] != x) {
			this.list[x] = this.find(this.list[x]);
		}
		return this.list[x];
	}

	union(x, y) {
		let xr = this.find(x);
		let yr = this.find(y);
		this.list[xr] = yr;
	}
}

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
	let ds = new DisjointSet();
	let nameMap = {};

	for (let [name, ...emails] of accounts) {
		for (let email of emails) {
			ds.union(email, emails[0]);
			nameMap[email] = name;
		}
	}

	// 具有共同的parent的放在一起（属于相同集合）
	let emailMap = {};
	for (let email of Object.keys(ds.list)) {
		let parent = ds.find(email);
		if (!emailMap[parent]) {
			emailMap[parent] = [];
		}
		emailMap[parent].push(email);
	}

	// let result = [];
	// for (let [email, emails] of Object.entries(emailMap)) {
	// 	result.push([nameMap[email], ...emails.sort()]);
	// }
	// console.log(result);
	// return result;

	return Object.entries(emailMap).map(([email, x]) => [nameMap[email], ...x.sort()]);
};

let accounts = [
	['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
	['John', 'johnsmith@mail.com', 'john00@mail.com'],
	['Mary', 'mary@mail.com'],
	['John', 'johnnybravo@mail.com'],
];

accountsMerge(accounts);
