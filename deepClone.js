/**
 * 手写深克隆
 * @param {*} obj 克隆的对象
 * @param {*} cache WeakMap
 */
function deepCopy(obj, cache = new WeakMap()) {
  // 1.判断是否为对象
  if (!obj instanceof Object) return obj
  
  console.log({cache})
  // 2.防止循环引用
  if (cache.get(obj)) return cache.get(obj)
  
  // 支持函数
  if (obj instanceof Function) {
    return function () {
      return obj.apply(this, arguments)
    }
  }
  // 支持日期
  if (obj instanceof Date) return new Date(obj)
  
  // 支持正则对象
  if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags)
  // 还可以增加其他对象，比如：Map, Set等，根据情况判断增加即可，面试点到为止就可以了

  // 3.数组是 key 为数字的特殊对象
  const res = Array.isArray(obj) ? [] : {}

  // 4.缓存 copy 的对象，用于处理循环引用的情况
  cache.set(obj, res)

  Object.keys(obj).forEach((key) => {
      res[key] = obj[key] instanceof Object ? deepCopy(obj[key], cache) : obj[key]
  });
  return res
}

// 测试
const source = {
  name: 'Jack',
  meta: {
    age: 12,
    birth: new Date('1997-10-10'),
    array: [1, 2, { a: 1 }],
    say() {
      console.log('Hello');
    }
  }
}

// source.source = source
const newObj = deepCopy(source)
console.log({newObj})
console.log(newObj.meta.array[2] === source.meta.array[2]); // false
console.log(newObj.meta.birth === source.meta.birth); // false