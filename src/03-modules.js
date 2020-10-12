import { h } from "snabbdom/src/package/h";
import { init } from "snabbdom/src/package/init";
import { thunk } from "snabbdom/src/package/thunk";
import { styleModule } from "snabbdom/src/package/modules/style"
import { eventListenersModule } from "snabbdom/src/package/modules/eventlisteners"
/**
 * 1 div> h1+p
 */
let patch = init([styleModule, eventListenersModule]);
let vnode = h('div', {
  style: {
    backgroundColor: "red"
  }, on: {
    click: function () {
      console.log(this)
    }
  }
}, [
  h("h1", "element---h1"),
  h("p", "ppppppp"),
]);
let app = document.querySelector("#app");
patch(app, vnode);
