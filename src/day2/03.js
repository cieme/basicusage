class Observer {
  constructor(data) {
    this.walk(data);
  }
  walk(data) {
    // 1. 判断 data 是否是 对象
    if (!data || typeof data !== "object") return
    // 2. 遍历data对象所有属性
    Object.keys(data).forEach(key => {
      this.defineReactive(data, key, data[key]);
    })
  }
  defineReactive(obj, key, val) {
    // 为什么传递val  而不是获取
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get() {
        return val
      },
      set(newValue) {
        if (newValue === val) return
        val = newValue
        // next 发送通知
      }
    })
  }
}
class Vue {
  constructor(options) {
    // 1 通过属性保存选项的数据
    this.$options = options || {}
    this.$data = options.data || {}
    this.$el = typeof options.el === "string" ? document.querySelector(options.el) : options.el
    // 2 data 中成员 转换成 getter 和 setter 注入vue 实例中
    this._proxyData(this.$data);
    // 3 调用 observer 对象 监听数据的变化
    new Observer(this.$data)
    // 4 调用 compiler 对象 解析指令和差值表达式
  }
  _proxyData(data) {
    //遍历 data 中所有属性
    //把 data 的属性注入 vue 实例
    Object.keys(data).forEach(key => {
      Object.defineProperty(this, key, {
        // 可遍历,可枚举
        enumerable: true,
        configurable: true,
        get() {
          return data[key];
        },
        set(newValue) {
          if (newValue === data[key]) {
            return
          }
          data[key] = newValue
        }
      })
    })
  }
}
let vm = new Vue({
  el: `#app`,
  data: {
    msg: `hellow vue`,
    count: 10
  }
})
console.log(vm)
// 负责 data 属性 转化为 响应式 数据
// data 中 某个属性也是对象  把该属性转换成响应式数据
// 数据变化发送通知
// walk  遍历 data 所有属性  循环中 会调用 defineReactive
// defineReactive 定义响应式数据

