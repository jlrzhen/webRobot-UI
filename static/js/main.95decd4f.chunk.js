(this.webpackJsonprobot=this.webpackJsonprobot||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),o=n(4),a=n.n(o),r=(n(9),n(2));n(10);function j(e,t,n,c){console.log("".concat(e," ").concat(t," ").concat(n)),fetch("".concat(c).concat(e,"/").concat(t))}var i=n(0);var d=function(e){var t=Object(c.useState)(100),n=Object(r.a)(t,1)[0],s=Object(c.useState)(0),o=Object(r.a)(s,2),a=o[0],d=o[1],u=Object(c.useState)(0),l=Object(r.a)(u,2),b=l[0],h=l[1],O=function(){j(0,n,!0,e.url),h(100)},p=function(){j(0,-1*n,!0,e.url),h(-100)},x=function(){j(-1*n,0,!0,e.url),d(-100)},m=function(){j(n,0,!0,e.url),d(100)},v=function(){j(0,0,!1,e.url),h(0),d(0)};return Object(i.jsx)("div",{className:"Component",children:Object(i.jsxs)("header",{className:"Component-header",children:[Object(i.jsx)("span",{children:a}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:"x "}),Object(i.jsx)("input",{id:"slider",type:"range",min:"-100",max:"100",value:a})]}),Object(i.jsxs)("span",{children:[" ",b]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:"y "}),Object(i.jsx)("input",{id:"slider",type:"range",min:"-100",max:"100",value:b})]}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{className:"movement",onMouseDown:O,onMouseUp:v,onTouchStart:O,onTouchEnd:v,children:Object(i.jsx)("p",{children:"forwards"})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{id:"left",className:"movement",onMouseDown:x,onMouseUp:v,onTouchStart:x,onTouchEnd:v,children:Object(i.jsx)("p",{children:"left"})}),Object(i.jsx)("span",{children:" "}),Object(i.jsx)("div",{id:"right",className:"movement",onMouseDown:m,onMouseUp:v,onTouchStart:m,onTouchEnd:v,children:Object(i.jsx)("p",{children:"right"})})]}),Object(i.jsx)("div",{className:"movement",onMouseDown:p,onMouseUp:v,onTouchStart:p,onTouchEnd:v,children:Object(i.jsx)("p",{children:"backwards"})})]})})};n(12);var u=function(){var e=Object(c.useState)(),t=Object(r.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(),a=Object(r.a)(o,2),j=a[0],u=a[1];return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsx)("br",{}),Object(i.jsx)("p",{children:n}),Object(i.jsx)("input",{id:"addressInput"}),Object(i.jsx)("button",{onClick:function(){s(document.getElementById("addressInput").value),u("https://".concat(document.getElementById("addressInput").value,":5000/")),document.getElementById("addressInput").value=""},children:"Set"}),Object(i.jsx)(d,{url:j})]})})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),o(e),a(e)}))};a.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(u,{})}),document.getElementById("root")),l()}],[[13,1,2]]]);
//# sourceMappingURL=main.95decd4f.chunk.js.map