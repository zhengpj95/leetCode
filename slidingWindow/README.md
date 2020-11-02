# Sliding Window

## 使用 HashTable

```javascript
// LeetCode 的第三题， *3. Longest Substring Without Repeating Characters* 返回最长的无重复的字串长度
// 在这到题目中使用 Map 来记录窗口移动过程中字母的数量，但字母的数量大于 1 时，窗口就要开始缩小

const lengthOfLongestSubstring3 = function (s) {
  let size = s.length;
  if (size <= 1) return size;

  let left = 0,
    right = 0;
  let window = new Map();
  let max = 0;

  while (right < size) {
    let char = s[right];
    window.set(char, window.has(char) ? window.get(char) + 1 : 1);
    right++;

    while (window.get(char) > 1) {
      let lChar = s[left];
      window.set(lChar, window.get(lChar) - 1);
      left++;
    }

    // [left, right) 左闭右开，此时 right 已经加多 1 了，不需包含 right 处字符
    max = Math.max(max, right - left);
  }
  return max;
};
```

## 使用计数器

```javascript
// LeetCode 的第76题，*76. Minimum Window Substring*，给定两个字符串 S，T，在 S 中找出包含 T 的所有字符的字串
// 在这道题中，我们需要一个变量来记录已经匹配 T 中的字母，因为 T 中可存在重复的字母

const minWindow = function (s, t) {
  if (!t || !t.length || !s || !s.length || s.length < t.length) return '';

  let needMap = new Map();
  let windowMap = new Map();
  for (let i = 0; i < t.length; i++) {
    needMap.set(t[i], needMap.has(t[i]) ? needMap.get(t[i]) + 1 : 1);
    windowMap.set(t[i], 0);
  }

  let res = null;
  let valid = 0; //t的字母数量
  let left = 0,
    right = 0;

  // 右指针未到末尾
  while (right < s.length) {
    // 扩张窗口
    let addChar = s[right];
    right++;
    if (needMap.has(addChar)) {
      windowMap.set(addChar, windowMap.get(addChar) + 1);
      if (needMap.get(addChar) === windowMap.get(addChar)) valid++;
    }

    // 有满足条件的子字符串，开始收缩窗口，寻找最小字符串
    while (valid === needMap.size) {
      let str = s.slice(left, right);
      if (res === null || str.length < res.length) res = str;

      let removeChar = s[left];
      left++;

      // 这一步刚好和扩张窗口对称
      if (needMap.has(removeChar)) {
        if (needMap.get(removeChar) === windowMap.get(removeChar)) valid--;
        windowMap.set(removeChar, windowMap.get(removeChar) - 1);
      }
    }
  }
  return res === null ? '' : res;
};
```

## 使用单调栈或单调数组

```javascript
// LeetCode 的第239题，*239. Sliding Window Maximum*
// 给一个数组，找出数组中每 k 个元素组成的子数组的最大值，
// 这个数组是无序的，如果每个子数组都要去遍历找到最大值，那显然时间复杂度会很高，
// 此时，我们可以使用一个单调队列/单调数组来记录窗口滑动过程中，窗口内数组的排序
// 因为是要排序的，而且窗口大小固定，队列内比新加入的元素小的可以移除

// 定义一个单调队列
class MonotonicQueue {
  constructor() {
    this.queue = [];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  getSize() {
    return this.queue.length;
  }

  getHead() {
    return this.isEmpty() ? null : this.queue[0];
  }

  getTail() {
    return this.isEmpty() ? null : this.queue[this.getSize() - 1];
  }

  addData(ele) {
    while (!this.isEmpty() && this.getTail() < ele) {
      this.queue.pop();
    }
    this.queue.push(ele);
    return true;
  }

  removeData(ele) {
    if (!this.isEmpty() && this.getHead() === ele) {
      this.queue.shift();
    }
    return true;
  }
}
// 使用单调队列解法
const maxSlidingWindow = function (nums, k) {
  let window = new MonotonicQueue();
  let res = [];
  let left = 0,
    right = 0;

  while (right < nums.length) {
    left = right - k + 1;
    window.addData(nums[right]);
    if (left >= 0) {
      res.push(window.getHead());
      window.removeData(nums[left]);
    }
    right++;
  }
  return res;
};

// 另外我们也可以使用数组来实现
const maxSlidingWindowWithArray = function (nums, k) {
  let result = [];
  let sortedArr = []; //单调数组

  for (let i = 0; i < nums.length; i++) {
    // 数组内比新加入的元素小的都移除
    while (sortedArr.length > 0 && sortedArr[sortedArr.length - 1] < nums[i]) {
      sortedArr.pop();
    }
    sortedArr.push(nums[i]);

    let idx = i - k + 1;
    if (idx >= 0) {
      result.push(sortedArr[0]);
      // 移除窗口的元素不一定是队列头元素，故要加判断
      if (sortedArr[0] == nums[idx]) sortedArr.shift();
    }
  }
  return result;
};
```
