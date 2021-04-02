/**
 * 自定义bind实现
 * @param context 上下文this对象
 * @returns {Function}
 * 用法：fn.bind(thisObj, arg1, arg2, argN)
 * 作用：对this的强绑定，改变函数执行时的this指向。
 */

Function.prototype.myBind = function (context) {
  // 判断传入的context是否为对象，若不为object则指向全局window
  context = (typeof context === 'object' ? context : window)
  return (...args)=>{
    this.call(context, ...args)
  }
}

const me = {
  name: 'Jack'
}
const other = {
  name: 'Jackson'
}

function say() {
  console.log(`My name is ${this.name || 'default'}`)
}

const meSay = say.myBind(me)
meSay()

const otherSay = say.myBind(other)
otherSay()