(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(42)},18:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(9),c=n.n(o),l=(n(18),n(1)),r=(n(20),n(22),n(2));var u=function(e){var t=e.updateStep,n=e.step,o=Object(a.useState)(3),c=Object(l.a)(o,2),u=c[0],s=c[1],d=Object(a.useState)("hsl(256, 256, 256)"),p=Object(l.a)(d,2),m=p[0],f=p[1],b=Object(a.useState)("flex"),g=Object(l.a)(b,2),v=g[0],S=g[1];return i.a.createElement(r.motion.div,{id:"landingPage",animate:{backgroundColor:m,display:1==n?"flex":"none"}},i.a.createElement(r.motion.div,{id:"leadingBall",whileHover:{scale:1.5},whileTap:{scale:u},transition:{type:"spring",stiffness:400,damping:10,duration:1,times:[0,.5,1]},animate:{y:[-1e3,1e3,-500,500,-100,100,0],display:v},drag:"x",onClick:function(){s(u+1.5),u>7&&(f("hsl(0, 0, 0)"),S("none"),t())}},i.a.createElement(r.motion.div,{className:"clickable",animate:{opacity:[0,1]},transition:{duration:3}},"Tap me")))};var s=function(e){e.updateStep;var t=e.step;return i.a.createElement(r.motion.div,{id:"landingPage",animate:{backgroundColor:"hsl(0, 0, 0)",color:"hsl(256, 256, 256)",display:2==t?"flex":"none"}},"testin")};var d=function(){var e=Object(a.useState)(1),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(),r=Object(l.a)(c,2),d=(r[0],r[1],function(){o(n+1)});return i.a.createElement("div",null,i.a.createElement(u,{updateStep:d,step:n}),i.a.createElement(s,{updateStep:d,step:n}))},p=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,44)).then(function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(d,null))),p()}},[[10,3,2]]]);
//# sourceMappingURL=main.48a6bafa.chunk.js.map