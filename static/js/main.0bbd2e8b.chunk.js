(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(45)},19:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),l=a.n(r),o=(a(19),a(1)),c=(a(21),a(23),a(2));var s=function(e){var t=e.updateStep,a=e.step,r=Object(n.useState)(3),l=Object(o.a)(r,2),s=l[0],u=l[1],m=Object(n.useState)("hsl(256, 256, 256)"),g=Object(o.a)(m,2),d=g[0],p=g[1],b=Object(n.useState)("flex"),f=Object(o.a)(b,2),j=f[0],h=f[1];return i.a.createElement(c.motion.div,{id:"landingPage",animate:{backgroundColor:d,display:1==a?"flex":"none"}},i.a.createElement(c.motion.div,{id:"leadingBall",whileHover:{scale:1.5},whileTap:{scale:s},transition:{type:"spring",stiffness:400,damping:10,duration:1,times:[0,.5,1]},animate:{y:[-1e3,1e3,-500,500,-100,100,0],display:j},drag:"x",onClick:function(){u(s+1.5),s>7&&(p("hsl(0, 0, 0)"),h("none"),t())}},i.a.createElement(c.motion.div,{className:"clickable",animate:{opacity:[0,1]},transition:{duration:3}},"Tap me")))},u=a(10);a(43);var m=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)("10rem"),s=Object(o.a)(l,2),m=s[0],g=s[1],d=Object(n.useState)("10rem"),p=Object(o.a)(d,2),b=p[0],f=p[1],j=Object(n.useState)(E()),h=Object(o.a)(j,2),v=h[0],O=h[1];function E(){var e=window;return{innerWidth:e.innerWidth,innerHeight:e.innerHeight}}Object(n.useEffect)(function(){function e(){O(E())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}},[]);var w=0,y=["images/gul1.jpeg","images/gul2.jpeg","images/gul3.jpeg","images/gul4.jpeg","images/gul5.jpeg","images/gul6.jpeg","images/gul7.jpeg","images/gul8.jpeg","images/gul9.jpeg","images/gul10.jpeg","images/gul11.jpeg","images/gul12.jpeg"],S=Object(n.useState)([y[w]]),k=Object(o.a)(S,2),C=k[0],x=k[1],N={scale:1.2,boxShadow:"0rem 0rem 10rem rgba(241, 90, 34, 1)",backgroundColor:"rgba(241, 90, 34, 0.1)",color:"rgba(256, 256, 256, 1)",transition:{duration:.5}};return i.a.createElement("div",null,i.a.createElement(c.motion.div,{id:"triangle",className:"shapeObject",animate:{borderRadius:10,height:["0rem",b],width:["0rem",m],display:a?"none":"flex"},onClick:function(){r(!0),f("30rem"),g("30rem");var e=setInterval(function(){++w==y.length?clearInterval(e):x(function(e){return[].concat(Object(u.a)(e),[y[w]])})},3e3)},whileHover:N,whileTap:N},i.a.createElement(c.motion.div,{className:"clickable shapeObjectTitle",animate:{opacity:[0,1]},transition:{type:"spring",stiffness:100,delay:5,duration:3}},i.a.createElement("span",null,"Let's have a look at the birthday girl"))),a?C.map(function(e,t){return i.a.createElement(c.motion.div,{key:t,animate:{display:a?"flex":"none",height:["0rem","30rem"],width:["0rem","30rem"],position:"absolute",top:Math.floor(Math.random()*(v.innerHeight-500)+0),left:Math.floor(Math.random()*(v.innerWidth-500)+0)},transition:{type:"spring",stiffness:500},className:"bdayGirlPictureContainer"},i.a.createElement("img",{src:e,className:"bdayGirlPicture"}))}):null)};var g=function(e){e.updateStep;var t=e.step;return i.a.createElement(c.motion.div,{id:"landingPage",className:"relative",animate:{backgroundColor:"hsl(0, 0, 0)",color:"hsl(256, 256, 256)",display:2==t?"flex":"none"},transition:{type:"spring",stiffness:100,delay:1,duration:3}},i.a.createElement(m,null))};var d=function(){var e=Object(n.useState)(1),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(),c=Object(o.a)(l,2),u=(c[0],c[1],function(){r(a+1)});return i.a.createElement("div",null,i.a.createElement("div",{id:"desktopSite"},i.a.createElement(s,{updateStep:u,step:a}),i.a.createElement(g,{updateStep:u,step:a})))},p=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,47)).then(function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),i(e),r(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(d,null))),p()}},[[11,3,2]]]);
//# sourceMappingURL=main.0bbd2e8b.chunk.js.map