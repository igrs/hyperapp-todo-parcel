require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var a=e[n]=new t.Module;r[n][0].call(a.exports,i,a,a.exports)}return e[n].exports}function o(){this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({25:[function(require,module,exports) {
"use strict";function e(e,n){for(var t,r=[],o=[],i=arguments.length;i-- >2;)r.push(arguments[i]);for(;r.length;)if((t=r.pop())&&t.pop)for(i=t.length;i--;)r.push(t[i]);else null!=t&&!0!==t&&!1!==t&&o.push(t);return"function"==typeof e?e(n||{},o):{nodeName:e,attributes:n||{},children:o,key:n&&n.key}}function n(e,n,t,r){var o,i=[],u=r&&r.children[0]||null,l=u&&function e(n,t){return{nodeName:n.nodeName.toLowerCase(),attributes:{},children:t.call(n.childNodes,function(n){return 3===n.nodeType?n.nodeValue:e(n,t)})}}(u,[].map),a=s(e),f=s(n);return d(function e(n,t,r){for(var o in r)"function"==typeof r[o]?function(e,o){r[e]=function(e){return"function"==typeof(e=o(e))&&(e=e(p(n,a),r)),e&&e!==(t=p(n,a))&&!e.then&&d(a=h(n,s(t,e),a)),e}}(o,r[o]):e(n.concat(o),t[o]=t[o]||{},r[o]=s(r[o]))}([],a,f)),f;function c(){o=!o;var e=t(a,f);for(r&&!o&&(u=function e(n,t,r,o,u,l){if(o===r);else if(null==r)t=n.insertBefore(N(o,u),t);else if(o.nodeName&&o.nodeName===r.nodeName){!function(e,n,t,r){for(var o in s(n,t))t[o]!==("value"===o||"checked"===o?e[o]:n[o])&&m(e,o,t[o],r,n[o]);t.onupdate&&i.push(function(){t.onupdate(e,n)})}(t,r.attributes,o.attributes,u=u||"svg"===o.nodeName);for(var a=[],f={},c={},d=0;d<r.children.length;d++){a[d]=t.childNodes[d];var h=r.children[d],p=v(h);null!=p&&(f[p]=[a[d],h])}for(var d=0,g=0;g<o.children.length;){var h=r.children[d],y=o.children[g],p=v(h),k=v(y);if(c[p])d++;else if(null==k)null==p&&(e(t,a[d],h,y,u),g++),d++;else{var w=f[k]||[];p===k?(e(t,w[0],w[1],y,u),d++):w[0]?e(t,t.insertBefore(w[0],a[d]),w[1],y,u):e(t,a[d],null,y,u),g++,c[k]=y}}for(;d<r.children.length;){var h=r.children[d];null==v(h)&&b(t,a[d],h),d++}for(var d in f)c[f[d][1].key]||b(t,f[d][0],f[d][1])}else o.nodeName===r.nodeName?t.nodeValue=o:(t=n.insertBefore(N(o,u),l=t),b(n,l,r));return t}(r,u,l,l=e));e=i.pop();)e()}function d(){o||(o=!o,setTimeout(c))}function s(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t}function h(e,n,t){var r={};return e.length?(r[e[0]]=e.length>1?h(e.slice(1),n,t[e[0]]):n,s(t,r)):n}function p(e,n){for(var t=0;t<e.length;t++)n=n[e[t]];return n}function v(e){return e?e.key:null}function m(e,n,t,r,o){if("key"===n);else if("style"===n)for(var i in s(o,t))e[n][i]=null==t||null==t[i]?"":t[i];else"function"==typeof t||n in e&&!r?e[n]=null==t?"":t:null!=t&&!1!==t&&e.setAttribute(n,t),null!=t&&!1!==t||e.removeAttribute(n)}function N(e,n){var t="string"==typeof e||"number"==typeof e?document.createTextNode(e):(n=n||"svg"===e.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",e.nodeName):document.createElement(e.nodeName);if(e.attributes){e.attributes.oncreate&&i.push(function(){e.attributes.oncreate(t)});for(var r=0;r<e.children.length;r++)t.appendChild(N(e.children[r],n));for(var o in e.attributes)m(t,o,e.attributes[o],n)}return t}function b(e,n,t,r){function o(){e.removeChild(function e(n,t,r){if(r=t.attributes){for(var o=0;o<t.children.length;o++)e(n.childNodes[o],t.children[o]);r.ondestroy&&r.ondestroy(n)}return n}(n,t))}t.attributes&&(r=t.attributes.onremove)?r(n,o):o()}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.h=e,exports.app=n;
},{}],35:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=exports.generateUUID=function(){return(""+1e7+-1e3+-4e3+-8e3+-1e11).replace(/1|0/g,function(){return(0|16*Math.random()).toString(16)})};
},{}],26:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addTodo=void 0;var e=require("../utils/generate-uuid"),o=exports.addTodo=function(o){return o.todos.concat({done:!1,id:(0,e.generateUUID)(),value:o.input})};
},{"../utils/generate-uuid":35}],27:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=exports.removeTodo=function(e,t){return e.todos.filter(function(e){return t.target.dataset.uuid!==e.id})};
},{}],28:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=exports.toggleTodo=function(e,t){return e.todos.map(function(e){return t.target.dataset.uuid===e.id?Object.assign({},e,{done:!e.done}):e})};
},{}],29:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=exports.editTodo=function(t,e){return t.todos.map(function(t){return e.target.dataset.uuid===t.id?Object.assign({},t,{value:e.target.textContent}):t})};
},{}],22:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.actions=void 0;var t=require("./add-todo"),o=require("./remove-todo"),e=require("./toggle-todo"),r=require("./edit-todo"),n=exports.actions={add:function(){return function(o){return{input:"",todos:(0,t.addTodo)(o)}}},input:function(t){return function(o){return{input:t}}},remove:function(t){return function(e){return{todos:(0,o.removeTodo)(e,t)}}},toggle:function(t){return function(o){return{todos:(0,e.toggleTodo)(o,t)}}},edit:function(t){return function(o){return{todos:(0,r.editTodo)(o,t)}}},editEnter:function(t){return function(o){t.preventDefault(),t.target.blur()}}};
},{"./add-todo":26,"./remove-todo":27,"./toggle-todo":28,"./edit-todo":29}],36:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){return JSON.parse(window.localStorage.getItem("todoapp"))},e=function(t){return window.localStorage.setItem("todoapp",JSON.stringify(t))};exports.getStateFromStorage=t,exports.storeStateInStorage=e;
},{}],23:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.state=void 0;var e=require("../utils/local-storage"),t=exports.state=(0,e.getStateFromStorage)()||{input:"",placeholder:"Add new todo",todos:[]};
},{"../utils/local-storage":36}],30:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.HeaderView=void 0;var e=require("hyperapp"),l=exports.HeaderView=function(){return(0,e.h)("header",null,[(0,e.h)("h2",null,["todo"]),(0,e.h)("p",null,[(0,e.h)("em",null,[(0,e.h)("small",null,["tap text to edit todo"])]),(0,e.h)("a",{href:"https://github.com/marcusasplund/hyperapp-todo-parcel/"},[" ",(0,e.h)("small",null,["source"])])])])};
},{"hyperapp":25}],38:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.RemoveButton=void 0;var e=require("hyperapp"),t=exports.RemoveButton=function(t){var o=t.id,r=t.actions;return(0,e.h)("button",{"aria-label":"Remove",class:"button button-small button-outline","data-uuid":o,onclick:r.remove},["x"])};
},{"hyperapp":25}],39:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ToggleButton=void 0;var t=require("hyperapp"),e=exports.ToggleButton=function(e){var o=e.id,u=e.actions;return(0,t.h)("button",{"aria-label":"Toggle",class:"button button-small button-outline","data-uuid":o,onclick:u.toggle},["✓"])};
},{"hyperapp":25}],37:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TodoItem=void 0;var t=require("hyperapp"),e=require("./remove-button"),o=require("./toggle-button"),n=exports.TodoItem=function(n){var i=n.actions,r=n.todo;return(0,t.h)("div",{class:"item row"},[(0,t.h)("div",{class:"left"},[(0,t.h)(e.RemoveButton,{actions:i,id:r.id},[]),(0,t.h)(o.ToggleButton,{actions:i,id:r.id},[])]),(0,t.h)("div",{class:r.done?"done right":"right",onclick:function(t){r.done||(t.target.contentEditable=!0,t.target.focus())},onkeydown:function(t){13===t.keyCode&&(t.target.contentEditable=!1,i.editEnter(t))},"data-uuid":r.id,oninput:function(t){return r.value=t.target.textContent||""},onblur:function(t){return i.edit(t)}},[r.value])])};
},{"hyperapp":25,"./remove-button":38,"./toggle-button":39}],31:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TodoList=void 0;var t=require("hyperapp"),e=require("./todo-item"),o=exports.TodoList=function(o){var r=o.state,i=o.actions;return r.todos.filter(function(t){return!t.done}).map(function(o){return(0,t.h)(e.TodoItem,{todo:o,actions:i},[])})};
},{"hyperapp":25,"./todo-item":37}],32:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TodoInput=void 0;var e=require("hyperapp"),t=exports.TodoInput=function(t){var r=t.state,n=t.actions;return(0,e.h)("div",{class:"row"},[(0,e.h)("input",{oncreate:function(e){return e.focus()},type:"text","aria-label":r.placeholder,onkeyup:function(e){var t=e.target.value;return 13===e.keyCode&&""!==t?n.add():null},oninput:function(e){var t=e.target.value;return n.input(t)},value:r.input,placeholder:r.placeholder},[])])};
},{"hyperapp":25}],33:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TodoListDone=void 0;var e=require("hyperapp"),o=require("./todo-item"),t=exports.TodoListDone=function(t){var r=t.state,n=t.actions;return r.todos.filter(function(e){return e.done}).map(function(t){return(0,e.h)(o.TodoItem,{todo:t,actions:n},[])})};
},{"hyperapp":25,"./todo-item":37}],34:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.StateDisplay=void 0;var e=require("hyperapp"),t=require("../utils/local-storage"),r=exports.StateDisplay=function(r){var a=r.state;return(0,e.h)("pre",null,[(0,e.h)("code",{onupdate:(0,t.storeStateInStorage)(a)},[JSON.stringify(a,null,2)])])};
},{"hyperapp":25,"../utils/local-storage":36}],24:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.view=void 0;var e=require("hyperapp"),t=require("./header-view"),i=require("./todo-list"),o=require("./todo-input"),r=require("./todo-list-done"),s=require("./state-display"),a=exports.view=function(a,d){return(0,e.h)("div",{class:"container"},[(0,e.h)(t.HeaderView,null,[]),(0,e.h)(i.TodoList,{state:a,actions:d},[]),(0,e.h)(o.TodoInput,{state:a,actions:d},[]),(0,e.h)(r.TodoListDone,{state:a,actions:d},[]),(0,e.h)(s.StateDisplay,{state:a},[])])};
},{"hyperapp":25,"./header-view":30,"./todo-list":31,"./todo-input":32,"./todo-list-done":33,"./state-display":34}],21:[function(require,module,exports) {

},{}],10:[function(require,module,exports) {
"use strict";var e=require("hyperapp"),r=require("./actions/"),t=require("./state/"),s=require("./views/");require("./styles/app.scss"),(0,e.app)(t.state,r.actions,s.view,document.getElementById("todo"));
},{"hyperapp":25,"./actions/":22,"./state/":23,"./views/":24,"./styles/app.scss":21}]},{},[10])