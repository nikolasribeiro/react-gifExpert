(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(8),c=n.n(a),i=n(2),s=n(10),u=n(0),o=function(e){var t=e.setCategories,n=Object(r.useState)(""),a=Object(i.a)(n,2),c=a[0],o=a[1];return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),""!==c.trim()?(t((function(e){return[c].concat(Object(s.a)(e))})),o("")):alert("El input no puede estar vacio")},children:Object(u.jsx)("input",{type:"text",value:c,onChange:function(e){o(e.target.value)}})})},j=n(11),p=n(7),d=n.n(p),l=n(9),g=n(5),b=n.n(g),f=function(){var e=Object(l.a)(d.a.mark((function e(t){var n,r,a,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"0LQx5cOC6jCgJ7glKLq6eogRc8KKIGZg",n="https://api.giphy.com/v1/gifs/search?q=".concat(t,"&limit=10&api_key=").concat("0LQx5cOC6jCgJ7glKLq6eogRc8KKIGZg"),e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return a=e.sent,c=a.data,i=c.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();f.propTypes={category:b.a.string.isRequired};var O=function(e){var t=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){f(e).then((function(e){c({data:e,loading:!1})}))}),[e]),a};O.propTypes={category:b.a.string.isRequired};var x=function(e){var t=e.title,n=e.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(u.jsx)("img",{src:n,alt:t}),Object(u.jsx)("p",{children:t})]})},h=function(e){var t=e.category,n=O(t),r=n.data,a=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h3",{children:[" ",t," "]}),a?"loading...":Object(u.jsx)("div",{className:"card-grid",children:r.map((function(e){return Object(u.jsx)(x,Object(j.a)({},e),e.id)}))})]})},m=function(){var e=Object(r.useState)(["One Punch"]),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategories:a}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(e){return Object(u.jsx)(h,{category:e},e)}))})]})};n(20);c.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.119da4c3.chunk.js.map