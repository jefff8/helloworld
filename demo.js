var obj = {
  a: 1,
  foo: function (b) {
    b = b || this.a
    return function (c) {
      console.log(`${this.a} ${b} ${c} = ${this.a + b + c}`)
    }
  }
}

var a = 2
var obj2 = { a: 3 }


obj.foo(a).call(obj2, 1) // 3 2 1
obj.foo.call(obj2)(1) // 2 3 1

