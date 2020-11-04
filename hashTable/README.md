# HashTable

## 求差值

在给定的数组中，是否存在任意两个数的差值等于给定值的情况。

我们可以遍历数组或者把数组转换成 Map 然后遍历 Map，只要存在 *当前值+差值* ，就存在这样的数对。另外可能需要考虑重复的情况。

```javascript
let map = new Map();
for (let num of nums) {
  map.set(num, map.has(num) ? map.get(num) + 1 : 1);
}
// 如果不能存在重复的情况，那么遍历 Map 是最方便的，
// 如果是遍历数组的话，需要考虑数组去重问题。
// 另外可能要考虑差值是不是为0的情况，如果为0的，map中的值大于1即可
let entry = map.entries();
for (let item of entry) {
  if ((k === 0 && item[1] > 1) || (k > 0 && map.has(item[0] + k))) {
    result++;
  }
}
```

参考题目：

[532. K-diff Pairs in an Array](../twoPointers/532.K-diffPairsInAnArray.js)

求数组元素之和的题目，也是同样的思路。
