/**
 * 数组去重
 * 每个去重方法都统一省略判断传入的值是否为数组这一步骤
 * 判断数组方法：Array.isArray(arr)
 * 返回bool：true即为数组，false不是数组不进行判断
 */

let arr = [1, 1, 'string', 'string', true, true, false, false, undefined, undefined, null, null, NaN, NaN, 0, 0, {}, {}, {a: 1}, {a: 1}]

/**
 * 以下方法：A
 * 都能去重
 */
function uniqueA (arr) {
  let newArr = []
  let obj = {}
  arr.forEach(item => {
    if (typeof item !== 'object') {
      if (newArr.indexOf(item) === -1) {
        newArr.push(item)
      }
    } else {
      let str = JSON.stringify(item)
      if (!obj[str]) {
        newArr.push(item)
        obj[str] = true
      }
    }
  })
  return newArr
}


/**
 * 以下方法：B
 * 深层引用类型对象无法去重 { a: 1 }
 */
function uniqueB(arr) {
  let obj = {}
  return arr.filter(function (item) {
    return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
  })
}



/**
 * 以下方法：C
 * {} 无法去重
 */
function uniqueC1(arr) {
  return Array.from(new Set(arr)) // 简写：[...new Set(arr)]
}

function uniqueC2(arr) {
  var array = []
  for (var i = 0; i < arr.length; i++) {
    if (!array.includes(arr[i])) { //includes 检测数组是否有某个值
      array.push(arr[i])
    }
  }
  return array
}




/**
 * 以下方法：D
 * NaN、{} 无法去重
 */
function uniqueD(arr) {
  return arr.filter(function (item, index, arr) {
    //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
    return arr.indexOf(item, 0) === index
  });
}

function uniqueD2(arr) {
  var array = []
  for (var i = 0; i < arr.length; i++) {
    if (array.indexOf(arr[i]) === -1) {
      array.push(arr[i])
    }
  }
  return array
}


console.log(uniqueA(arr))