import { h } from "snabbdom/src/package/h";
import { init } from "snabbdom/src/package/init";
import { thunk } from "snabbdom/src/package/thunk";
/**
 * 1 hello world
 * init 返回值 patch 函数 作用对比两个 vnode 的差异更新到真实 dom
 * params[1] 标签+选择器
 * params[2] 如果是str 那么就是 textcontiner
 */
let patch = init([]);
let vnode = h('div#container.cls', {
  hook: {
    init(vnode) {
      console.log(vnode.elm)
    },
    create(emptyVnode, vnode) {
      console.log(vnode.elm);
    }
  }

}, "hello world");
let app = document.querySelector("#app");
let oldVnode = patch(app, vnode);
vnode = h("div", "update");
patch(oldVnode, vnode)
