import { h } from "snabbdom/src/package/h";
import { init } from "snabbdom/src/package/init";
import { thunk } from "snabbdom/src/package/thunk";
/**
 * 1 div> h1+p
 */
let patch = init([]);
let vnode = h('div#container.cls', [
  h("h1", "element---h1"),
  h("p", "ppppppp"),
]);
let app = document.querySelector("#app");
let oldvnode = patch(app, vnode);
setTimeout(() => {
  vnode = h('div#container.cls', [
    h("h1", "hellow"),
    h("p", "222"),
  ]);
  patch(oldvnode, vnode);
  patch(oldvnode, h("!"))
}, 2e3);
