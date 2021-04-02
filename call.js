/**
 * 自定义call实现
 * @param context 上下文this对象
 * @param args 传递动态参数（参数列表）
 * 用法：fn.apply(thisObj, arg1, arg2, argN)
 * 作用：对this的强绑定，改变函数执行时的this指向。
 */

Function.prototype.myCall = function (context, ...args) {
  // 判断传入的context是否为对象，若不为object则指向全局window
  context = (typeof context === 'object' ? context : window)
  
  // 关键步骤，在 context 上调用方法，触发 this 绑定为 context，使用 Symbol 防止原有属性的覆盖
  const key = Symbol()

  // 这里的this为需要执行的方法
  context[key] = this

  // 方法执行
  const res = context[key](...args)
  delete context[key]
  return res
}

const me = {
  name: 'Call'
}

function say(arg1, arg2) {
  console.log('this指向', this)
  console.log(`My name is ${this.name || 'default'}`)
  console.log('传递的参数', arg1, arg2)
}

say(1, 2)

say.myCall(me, 3, 4)