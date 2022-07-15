# BackTracking

## 1. DFS + Recursion

回溯算法就是 **递归** 和 **DFS** 的应用。

回溯算法的核心思想：

- 选择这个路径段（做选择）
- 继续递归下去
- 不满足条件回到这个路径段时，把这个路径段移除（撤销选择）

```javascript
// 核心思路
for遍历选择列表
  // 做选择
  该选择不在选择列表中
  加入路径中
  backtrack(路径, 选择列表) // 这里要灵活变通，可以加上if判断，满足即可退出当前递归
  // 撤销选择
  从路径移除
  该选择重新加入选择列表中
```

## 2. 有序数组的去重

有的题目需要去重，在递归下一层的时候就去重是最好的。

如果在得到一个结果后，再去跟结果集判断是否有重复的，这样的思路所需的时间复杂度会很高。

所以在做选择的时候，我们就判断这个选择是否会导致出现重复的结果。

比如题目 *[LeetCode 40. Combination Sum2](https://leetcode.com/problems/combination-sum-ii/)* ，同一个位置的情况下，如果出现重复的元素，那么就可能会出现重复的组合。所以我们在递归下一层时候，就过滤同一个位置的相同的元素。

```javascript
const combinationSum2 = function (candidates, target) {
  let result = [];
  candidates.sort((a, b) => a - b);
  let backtrace = (candidates, track, idx) => {
    let sum = track.reduce((a, b) => a + b, 0);
    if (sum === target) {
      result.push([...track]);
      return;
    }
    if (sum > target) {
      return;
    }

    for (let i = idx; i < candidates.length; i++) {
      // 过滤同一个位置可能出现相同的元素
      if (i > idx && candidates[i] === candidates[i - 1]) continue;
      track.push(candidates[i]);
      backtrace(candidates, track, i + 1);
      track.pop();
    }
  };

  backtrace(candidates, [], 0);
  return result;
};
```

## 3. 使用 Hash 去重

例如题目 *[LeetCode 47.Permutation2](https://leetcode.com/problems/permutations-ii/)* 中，是元素的排列，每个排列的元素都是有序的。如 [1,1,2] 和 [1,2,1] 就是两个排列，但是它们算一个组合[1,1,2]。

这道题目中我们不能像 *40. Combination Sum2* 一样的去重方式。

在这道题目中，我们使用了 *Hash* 表，因为我们是遍历 Hash 表，那么在每个位置上我们的元素都是唯一的。

```javascript
const permuteUnique = function (nums) {
  let result = [];

  let map = new Map();
  for (let num of nums) {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1);
  }

  /**
   * @param {number[]} nums
   * @param {number[]} track
   * @param {Map} map
   */
  let backtrack = (nums, track, map) => {
    if (track.length === nums.length) {
      result.push([...track]);
      return;
    }

    // 遍历map，在同一个位置就不会出现重复的数字了
    for (let entry of map.entries()) {
      let [key, value] = entry;
      if (value === 0) continue;
      track.push(key);
      map.set(key, value - 1);
      backtrack(nums, track, map);
      track.pop();
      map.set(key, value);
    }
  };
  backtrack(nums, [], map);
  return result;
};
```

## 4. N-Queens

N皇后问题，就是每行每列每对角线上都不能存在皇后，否则皇后就会攻击对方。所以N皇后问题就转变成 **判断同列和对角线上是否存在皇后**。

例如 [LeetCode 51. N-Queens](https://leetcode.com/problems/n-queens/)

N皇后问题2，就是判断满足条件的个数，我们可以像上面的一样，找出满足条件的结果，再计算数量即可。这道题主要就是判断对角线和同列上是否有皇后即可，那么可以使用三个boolean数组，对角线上的行列号相加减的结果是一样的，那么就是可以使用数组的同一个位置判断对角线是否有皇后。

例如 [LeetCode 52. N-Queens II](https://leetcode.com/problems/n-queens-ii/)
