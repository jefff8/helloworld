const myAction = function () {
  console.log("函数防抖：多次触发只会执行一次");
}

/**
 * 函数防抖
 * 作用：在限定时间内执行会重新定时
 * @param {*} func 函数
 * @param {*} interval 定时间隔
 */
function debounce(func, interval = 1000) {
  var t = null;
  return function () {
    clearTimeout(t);
    t = setTimeout(func, interval);
  }
}

document.onmousemove = debounce(myAction);