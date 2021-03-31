/**
 * 函数防抖
 * 作用：在限定时间内执行会重新定时
 * @param {*} func 函数
 * @param {*} interval 定时间隔
 */

const myAction = function () {
  console.log("函数防抖：多次触发只会执行一次")
}

function debounce(func, interval = 1000) {
  var timer = null
  return () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(func, interval)
  }
}

document.onmousemove = debounce(myAction)
