

const action = () => {
  console.log('节流函数执行')
}

/**
 * 函数节流
 * 在限定时间内，只会执行一次
 * @param {*} func 执行函数
 * @param {*} wait 定时间隔
 */
function throttle(func, wait) {
  let timeout
  return function() {
    if(!timeout) {
      timeout = setTimeout(() => {
        timeout = null
        func()
      }, wait);
    }
  }
}


document.onmousemove = throttle(action, 2000)
