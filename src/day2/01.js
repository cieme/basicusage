// import vue from 'vue';
// let vm = new vue({
//   data() {
//     return {}
//   },
//   render: (h) => h
// }).$mount("#app");
// vm.$on("dataChange", _ => {
//   console.log("dataChange");
// })
// vm.$on("dataChange", _ => {
//   console.log("dataChange1");
// })
// vm.$emit("dataChange")
//
class EventEmitter {
  constructor() {
    // {click:[fn1,fn2],change:[fn]}
    this.subs = Object.create(null);
  }
  $on(eventType, handler) {
    this.subs[eventType] = this.subs[eventType] || [];
    this.subs[eventType].push(handler);
  }
  $emit(eventType) {
    if (this.subs[eventType]) {
      this.subs[eventType].forEach(handler => {
        handler();
      });
    }
  }
}
/**
 * 发布
 * 订阅
 * 事件中心
 */
let em = new EventEmitter();
em.$on("click", _ => {
  console.log("click1")
})
em.$on("click", _ => {
  console.log("click2")
})
em.$emit("click")
