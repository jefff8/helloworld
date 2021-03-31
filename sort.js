let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3

let merge = function (nums1, m, nums2, n) {
  // num1里面多余的元素删掉，并且将num2里面的元素插入到num1里面
  nums1.splice(m, n, ...nums2.slice(0, n))
  // 排序
  // nums1.sort((a, b) => a - b)
  nums1.sort()
  return nums1
};

console.log(merge(nums1, m, nums2, n))