/**
 * 自定义Apply实现
 * @param context 上下文this对象
 * @param args  传递参数数组（参数数组）
 * 用法：fn.apply(thisObj, 数组参数)
 * 作用：对this的强绑定，改变函数执行时的this指向。
 */


Function.prototype.myApply = function (context, args = []) {
  // 判断传入的context是否为对象，若不为object则指向全局window
  context = (typeof context === 'object' ? context : window)

  // 防止覆盖掉原有属性
  const key = Symbol()

  // 这里的this为需要执行的方法（say函数）
  context[key] = this

  // 方法执行
  const result = context[key](...args)
  delete context[key]
  return result
}

const me = {
  name: 'Apply'
}


function say(arg1, arg2) {
  console.log('this指向', this)
  console.log(`My name is ${this.name || 'default'}`)
  console.log('传递的参数', arg1, arg2)
}

say(1, 2)

say.myApply(me, [3, 4])