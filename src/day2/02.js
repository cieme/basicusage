/**
 * 观察者模式 无事件中心
 * 观察者 watcher
 *      update() 事件发生时,处理逻辑更新视图
 * 发布者  dep
 *      subs[] 存储所有观察者
 *      addsub()  添加观察者
 *      notify()  事件发生时,调用观察者 upadte 更新视图
 */
class Dep {
  constructor() {
    this.subs = []
  }
  addsub(sub) {
    if (sub && sub.update) {
      this.subs.push(sub);
    }
  }
  notify() {
    this.subs.forEach(sub => {
      sub.update()
    })
  }
}
class Watcher {
  update() {
    console.log("update")
  }
}
let dep = new Dep()
let watcher = new Watcher()
// 往发布者添加订阅者
dep.addsub(watcher)
// 通知订阅者
dep.notify()
