(this["webpackJsonpintermediate-todo"]=this["webpackJsonpintermediate-todo"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),r=n(6),i=n.n(r),a=n(7),u=n(5),s=(n(12),n(0));function d(t){var e=t.todoList,n=t.completeTodo;return Object(s.jsx)("ul",{className:"todo-list",children:e.map((function(t){return Object(s.jsx)(j,{todo:t,completeTodo:n},t.text)}))})}function j(t){var e=t.todo,n=t.completeTodo;return Object(s.jsx)("li",{onClick:function(){n(e)},children:e.text})}function x(){var t=Object(c.useState)([{text:"Ace the interview"},{text:"Make coffee"}]),e=Object(u.a)(t,2),n=e[0],o=e[1],r=Object(c.useState)({text:""}),i=Object(u.a)(r,2),j=i[0],x=i[1];return Object(s.jsxs)("div",{className:"app-wrapper",children:[Object(s.jsx)(d,{todoList:n,completeTodo:function(t){var e=n.filter((function(e){return e.text!==t.text}));o(e)}}),Object(s.jsxs)("div",{children:[Object(s.jsx)("input",{type:"text",onChange:function(t){return x({text:t.target.value})},value:j.text}),Object(s.jsx)("button",{onClick:function(){return function(t){""!==t.text&&(o([].concat(Object(a.a)(n),[t])),x({text:""}))}(j)},children:"OK"})]})]})}var l=document.getElementById("root");i.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(x,{})}),l)}},[[14,1,2]]]);
//# sourceMappingURL=main.d3d51208.chunk.js.map