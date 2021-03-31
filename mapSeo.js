/**
 * 找出nums数组中相加等于target的数组索引下标
 */

let nums = [2, 7, 11, 15], target = 9

const twoSum = function (nums, target) {
  // 用对象来模拟 map，存储遍历过的元素和索引
  const map = {};
  const len = nums.length;
  // 遍历数组
  for (let i = 0; i < len; i++) {
    const cur = nums[i];
    const diff = target - cur;
    // 看看差值 在不在 map里
    if (diff in map) {
      // 在就返回答案
      return [map[diff], i];
    }
    // 不在就存储，继续遍历
    map[cur] = i;
  }
}



console.log(twoSum(nums, target))

