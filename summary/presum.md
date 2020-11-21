# 前缀和技巧

**前缀和技巧** 主要用于解决数组的子数组问题。

使用前缀和的经典题目：

- [560.Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)
- [930.Binary Subarrays With Sum](https://leetcode.com/problems/binary-subarrays-with-sum/)

## 1. 什么是前缀和

这里以 LeetCode 的一道题目，*560. Subarray Sum Equals K*，来讲解前缀和技巧。

题目中给定一个数组 `nums` 和一个数字 `k`，找出数组中连续的子数组的和等于给定值 `k` 的子数组数量。

这道题就是枚举每一组子数组，然后求和，统计等于 k 的子数组数目。但是这样的操作，显然时间复杂度很高，而且可能会超时，在面试中面试官明显不想看到这种代码思路。

这里我们就展示一波 **前缀和技巧** 吧。

前缀前缀前缀，明显就是当前数组元素 i 的前面的元素的之和的意思嘛。我们开启一个数组长度是 原数组长度+1 的新数组 `preSums` ，其中每一个元素都是其前面的元素之和，注意不包括当前元素本身。

以 `nums = [1, 2, 3]` 为例，我们得到的 `preSums` 就会是 `[0, 1, 3, 6]`。

你看，前缀和数组就是这么简单，当然做题时也要灵活变通，有时候我们不一定需要开启一个新数组的，只要一个变量来存放操作过程中的前缀和即可。

```javascript
// 构造前缀和数组
let getPreSum = (nums) => {
  let preSum = [0];
  for (let i = 0; i < nums.length; i++) {
    preSum[i+1] = preSum[i] + nums[i];
  }
  return preSum;
}
```

既然得到了前缀和数组了，那么这道题只要前缀和之间存在差值为 `k` 的，就是存在这样的一个子数组了。

```javascript
let subarraySum = (nums, k) => {
  let perSum = getPreSum(nums);
  
  let count = 0;
  for (let i = 1; i <= nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (preSum[i] - preSum[j] === k) {
        count++;
      }
    }
  }
  return count;
}
```

上面的解法的时间复杂度是O(n^2)，空间复杂度是O(n)，`n` 是`nums` 的长度。到这里，我们就解决了一道题目了，但是时空复杂度有点高，我们有什么方法优化呢？

## 2. 优化

上面的解法中，我们有两个for循环，其主要的作用就是找出当前 `i` 的前缀和，与其前面的前缀和元素 `j` 之间是否存在差值 `k`，如果存在，那么元素 j 到 i 的子数组元素之和就是 `k` ，显然这就是一个结果。

因此，我们可以使用一个 *Map* 结构，在遍历过程中，如果Map中存在 `preSum - k` 的键值对，说明存在子数组之和等于 `k` 的子数组，如果没有则把当前 `preSum` 存入键值对。

```javascript
const subarraySum2 = function (nums, k) {
  let map = new Map();
  map.set(0, 1);

  let result = 0;
  let preSum = 0;
  for (let i = 0; i < nums.length; i++) {
    preSum += nums[i];
    result += map.get(preSum - k) ? map.get(preSum - k) : 0;
    map.set(preSum, map.has(preSum) ? map.get(preSum) + 1 : 1);
  }
  return result;
};
```

注意一下哦，在开启前缀和数组时我们的序号0的元素是不存元素的，默认0，因为存在 (k - 0) 的一个前缀和；所以建立一个 Map 时，我们也需存入 (0,1) 的一个键值对。

至此，我们的时间复杂度降至 O(n) 了。

## 3. 总结

对于子数组之和的操作，我们都要联想到 **前缀和** 这个技巧，并且能否使用 HashTable 优化算法。

学习算法，最重要的是思维，是能快速联想到使用什么算法、使用什么结构的反应能力。

题解连接：

- [560. Subarray Sum Equals K](../hashTable/560.subarraySumEqualsK.js)
- [930. Binary Subarrays With Sum](../twoPointers/930.binarySubarraysWithSum.js)
