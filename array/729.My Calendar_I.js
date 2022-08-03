/**
 *
 */
var MyCalendar = function () {
	this.list = [];
};

/**
 * Brute Force
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
	if (!this.list.length) {
		this.list.push([start, end]);
		return true;
	}
	for (let item of this.list) {
		if (item[0] < end && start < item[1]) {
			return false;
		}
	}
	this.list.push([start, end]);
	return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
