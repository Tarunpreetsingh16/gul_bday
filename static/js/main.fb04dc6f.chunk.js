(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(53)},19:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(9),r=a.n(i),l=(a(19),a(2)),c=(a(21),a(23),a(1));var s=function(e){var t=e.updateStep,a=e.step,i=Object(n.useState)(3),r=Object(l.a)(i,2),s=r[0],u=r[1],m=Object(n.useState)("hsl(256, 256, 256)"),d=Object(l.a)(m,2),h=d[0],p=(d[1],Object(n.useState)("flex")),g=Object(l.a)(p,2),b=g[0],f=g[1],w=Object(n.useState)(!1),v=Object(l.a)(w,2),y=v[0],E=v[1];return Object(n.useEffect)(function(){setTimeout(function(){f("none"),E(!0)},5e3)}),o.a.createElement(c.motion.div,{id:"landingPage",animate:{backgroundColor:h,display:1===a?"flex":"none"}},o.a.createElement(c.motion.div,{transition:{type:"spring",stiffness:400,damping:10,duration:1,times:[0,.5,1]},animate:{display:b,opacity:[0,1],fontSize:"2rem"}},"Disclaimer: Nerdy stuff but I wanted to create something for you \ud83d\ude04"),y?o.a.createElement(c.motion.div,{id:"leadingBall",whileHover:{scale:1.5},whileTap:{scale:s},transition:{type:"spring",stiffness:400,damping:10,duration:1,times:[0,.5,1]},animate:{y:[-1e3,1e3,-500,500,-100,100,0]},drag:"x",onClick:function(){u(s+1.5),s>7&&(t(),f("flex"),E(!1))}},o.a.createElement(c.motion.div,{className:"clickable",animate:{opacity:[0,1]},transition:{delay:1,duration:3}},"Tap me")):null)},u=a(10);a(43);var m=function(e){var t=e.step,a=e.updateStep,i=Object(n.useState)(!1),r=Object(l.a)(i,2),s=r[0],m=r[1],d=Object(n.useState)(I()),h=Object(l.a)(d,2),p=h[0],g=h[1],b=Object(n.useState)(!1),f=Object(l.a)(b,2),w=f[0],v=f[1],y=Object(n.useState)("none"),E=Object(l.a)(y,2),j=E[0],k=E[1],O=Object(n.useRef)(null);function I(){var e=window;return{innerWidth:e.innerWidth,innerHeight:e.innerHeight}}Object(n.useEffect)(function(){function e(){g(I())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}},[]);var S=0,M=["images/gul12.jpeg","images/gul2.jpeg","images/gul3.jpeg","images/gul4.jpeg","images/gul5.jpeg","images/gul6.jpeg","images/gul7.jpeg","images/gul8.jpeg","images/gul9.jpeg","images/gul10.jpeg","images/gul11.jpeg","images/gul1.jpeg"],x=Object(n.useState)([]),N=Object(l.a)(x,2),C=N[0],T=N[1];Object(n.useEffect)(function(){C.length===M.length-1?O.current.scrollIntoView():0===C.length&&(k("none"),s&&a(),m(!1))},[C.length]);var W={scale:1.2,boxShadow:"0rem 0rem 10rem rgba(241, 90, 34, 1)",backgroundColor:"rgba(241, 90, 34, 0.1)",color:"rgba(256, 256, 256, 1)",transition:{duration:.5}};return 2===t?o.a.createElement("div",null,o.a.createElement(c.motion.div,{id:"square",className:"shapeObject",animate:{borderRadius:10,height:"10rem",width:"10rem",display:s?"none":"flex"},onClick:function(){m(!0),k("flex");var e=setInterval(function(){++S===M.length?clearInterval(e):T(function(e){return[].concat(Object(u.a)(e),[M[S]])})},3e3)},whileHover:W,whileTap:W,onMouseEnter:function(){return v(!0)},onMouseLeave:function(){return v(!1)}},o.a.createElement(c.motion.div,{className:"clickable shapeObjectTitle"},w?o.a.createElement("span",null,"Let's have a look at our birthday girl"):null)),s?C.map(function(e,t){return o.a.createElement(c.motion.div,{key:t,animate:{display:s?"flex":"none",height:["0rem","30rem"],width:["0rem","30rem"],position:"absolute",top:Math.floor(Math.random()*(p.innerHeight-500)+0),left:Math.floor(Math.random()*(p.innerWidth-500)+0)},transition:{type:"spring",stiffness:500},className:"bdayGirlPictureContainer"},o.a.createElement("img",{src:e,className:"bdayGirlPicture",alt:e}))}):null,o.a.createElement(c.motion.div,{ref:O,className:"backButton",animate:{display:j,position:"absolute",right:10,bottom:10},whileHover:{scale:1.2},whileTap:{scale:1.1},onClick:function(){var e=0,t=setInterval(function(){e===M.length?clearInterval(t):(T(function(e){return e.slice(0,e.length-1)}),e++)},100)}},"Go back")):null};a(45);var d=function(e){var t=e.updateStep,a=e.step,i=Object(n.useState)(!1),r=Object(l.a)(i,2),s=r[0],u=r[1],m=Object(n.useState)(!1),d=Object(l.a)(m,2),h=d[0],p=d[1],g=Object(n.useRef)(null);Object(n.useEffect)(function(){g||g.current.scrollIntoView()});var b={scale:1.2,boxShadow:"0rem 0rem 10rem rgba(241, 90, 34, 1)",backgroundColor:"rgba(241, 90, 34, 0.1)",color:"rgba(256, 256, 256, 1)",transition:{duration:.5}};return 3===a?o.a.createElement("div",null,o.a.createElement(c.motion.div,{id:"square",className:"shapeObject",animate:{borderRadius:10,height:"10rem",width:"10rem",display:s?"none":"flex"},onClick:function(){u(!0)},whileHover:b,whileTap:b,onMouseEnter:function(){return p(!0)},onMouseLeave:function(){return p(!1)}},o.a.createElement(c.motion.div,{className:"clickable shapeObjectTitle"},h?o.a.createElement("span",null,"Let's look at the bacha in action"):null)),s?o.a.createElement("div",null,o.a.createElement("div",{className:"videosContainer"},["Videos/bday_girl.mp4","Videos/gul_skip.mp4","Videos/gul_hoop.mp4","Videos/gul_dunking.mp4"].map(function(e){return o.a.createElement("div",{class:"outerBorder"},o.a.createElement("video",{controls:!0,loop:!0,autoPlay:!0,className:"video"},o.a.createElement("source",{src:e,type:"video/mp4"}),"Your browser does not support the video tag."))})),o.a.createElement(c.motion.div,{ref:g,className:"backButton",animate:{position:"absolute",right:10,bottom:10},whileHover:{scale:1.2},whileTap:{scale:1.1},onClick:function(){u(!1),t()}},"Go back")):null):null};a(47);var h=function(e){var t=e.updateStep,a=e.step,i=Object(n.useState)(!1),r=Object(l.a)(i,2),s=r[0],u=r[1],m=Object(n.useState)(!1),d=Object(l.a)(m,2),h=d[0],p=d[1],g=Object(n.useState)("exploring things with you!"),b=Object(l.a)(g,2),f=b[0],w=b[1],v=Object(n.useState)(0),y=Object(l.a)(v,2),E=y[0],j=y[1],k=Object(n.useRef)(null),O=["making fun of you \ud83e\udd13","how we decide to eat healthy and end up having unhealthy \ud83c\udf1a\ud83c\udf1d","enjoy spending time with you \ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffd","how you look \ud83d\udc78\ud83c\udffb","how much understanding you are \ud83e\udef1\ud83c\udffc\u200d\ud83e\udef2\ud83c\udffd","how much caring you are \ud83e\udef6\ud83c\udffd","we have the same compassion for puppies \ud83d\udc36","you! \u2764\ufe0f"],I={scale:1.2,boxShadow:"0rem 0rem 10rem rgba(241, 90, 34, 1)",backgroundColor:"rgba(241, 90, 34, 0.1)",color:"rgba(256, 256, 256, 1)",transition:{duration:.5}};return 4===a?o.a.createElement("div",null,o.a.createElement(c.motion.div,{id:"square",className:"shapeObject",animate:{borderRadius:10,height:"10rem",width:"10rem",display:s?"none":"flex"},onClick:function(){u(!0)},whileHover:I,whileTap:I,onMouseEnter:function(){return p(!0)},onMouseLeave:function(){return p(!1)}},o.a.createElement(c.motion.div,{className:"clickable shapeObjectTitle"},h?o.a.createElement("span",null,"Letter for the birthday girl"):null)),s?o.a.createElement("div",null,o.a.createElement(c.motion.div,{animate:{color:"white",fontSize:"2rem",padding:"3rem 1rem"},transition:{duration:2},id:"letter"},"I was so confused what to do for your birthday. When I decided to write a letter for you, I realized you easily forget things and you will lose the letter for sure. So I decided to put it all together on this site, which will stay with you forever and anywhere.",o.a.createElement("br",null),o.a.createElement("br",null),"I want to write things about us and how my life has changed since we met; however, I do not want to take your day and make it about us. So, I will only say a few things. ",o.a.createElement("br",null),o.a.createElement("br",null),"In the past 6 months, we have learnt a lot about each other. I still remember the day when we first met in Guelph. I was so nervous because that was my first time meeting a stranger. It's engraved in my mind when I was looking for you in the parking lot, and you snuck behind me. In that moment, I did not know what to say, and I am happy I did not say anything foolish; otherwise, I wouldn't have found such a pefect girl. I do not know how you have been bearing me as I know sometimes, day in-day out, you easily get irritated and mad because of the things I do. Sometimes you get mad even if I do not do anything and that is funny to me, like yesterday I was making this site for you and needed some time, but you got mad \ud83e\udd37\ud83c\udffd\u200d\u2642\ufe0f. Thanks to you that I get to explore things. You have filled both the places in my life, a friend and a lovely partner. I hope we stay the same and keep exploring new things to do.",o.a.createElement("br",null),o.a.createElement("br",null),"There is one thing that I will never forget. I was alone for almost 2.5 years and I was sure that I will be stuck in my past forever, but you came along. You made my eyes sparkle for the first time in past 2.5 years. I knew right during our first meeting that you and I were going to be more than just 2 strangers. I remember that awkward bye when we first met. I was so ecstatic, adrenaline rushing through veins, I forgot how and what to say once a date was over.",o.a.createElement("br",null),o.a.createElement("br",null),"I do not know what happened that made me reinstall Dil Mil and text you, but I am glad I did. Sorry for making it about me but I just wanted to let you know how you changed everything. ",o.a.createElement("br",null),o.a.createElement("br",null),"Happy Birthday Gurman! I wish we spend your next thousand birthdays together. I love ",o.a.createElement("span",{id:"iLove",onClick:function(){var e=E;e===O.length&&(j(0),e=0),w(O[e]),j(e+1)}},f),"."),o.a.createElement("div",null,o.a.createElement(c.motion.div,{ref:k,className:"backButton",animate:{position:"absolute",right:10,bottom:10},whileHover:{scale:1.2},whileTap:{scale:1.1},onClick:function(){u(!1),t()}},"Go back"))):null):null};a(49);var p=function(e){var t=e.resetStep,a=e.step,i=e.pauseInstrumental,r=Object(n.useState)(!1),s=Object(l.a)(r,2),u=s[0],m=s[1],d=Object(n.useState)(!1),h=Object(l.a)(d,2),p=h[0],g=h[1],b=Object(n.useState)(E()),f=Object(l.a)(b,2),w=f[0],v=f[1],y=Object(n.useRef)(null);function E(){var e=window;return{innerWidth:e.innerWidth,innerHeight:e.innerHeight}}Object(n.useEffect)(function(){function e(){v(E())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}},[]),Object(n.useEffect)(function(){y||y.current.scrollIntoView()});for(var j={scale:1.2,boxShadow:"0rem 0rem 10rem rgba(241, 90, 34, 1)",backgroundColor:"rgba(241, 90, 34, 0.1)",color:"rgba(256, 256, 256, 1)",transition:{duration:.5}},k=[],O=0;O<5;O++)k.push(o.a.createElement(c.motion.div,{key:O,animate:{zIndex:999,position:"absolute",bottom:0,y:["0vh","-100vh"],x:["".concat(Math.floor(Math.random()*(w.innerWidth-500)+10),"px"),"".concat(Math.floor(Math.random()*(w.innerWidth-500)-200),"px"),"".concat(Math.floor(Math.random()*(w.innerWidth-500)+350),"px"),"".concat(Math.floor(Math.random()*(w.innerWidth-500)+250),"px"),"".concat(Math.floor(Math.random()*(w.innerWidth-500)+100),"px"),"".concat(Math.floor(Math.random()*(w.innerWidth-500)+50),"px"),"".concat(Math.floor(Math.random()*(w.innerWidth-500)+150),"px"),"".concat(Math.floor(Math.random()*(w.innerWidth-500)-50),"px"),"".concat(Math.floor(Math.random()*(w.innerWidth-500)+100),"px"),"".concat(Math.floor(Math.random()*(w.innerWidth-500)-100),"px"),"".concat(Math.floor(Math.random()*(w.innerWidth-500)-300),"px"),"".concat(Math.floor(Math.random()*(w.innerWidth-500)+200),"px"),"".concat(Math.floor(Math.random()*(w.innerWidth-500)+300),"px")]},transition:{repeat:1/0,duration:Math.floor(20*Math.random()+5)}},o.a.createElement("img",{src:"images/balloon".concat(O,".png"),alt:"balloon",width:"30%"})));return 5===a?o.a.createElement("div",null,o.a.createElement(c.motion.div,{id:"square",className:"shapeObject",animate:{borderRadius:10,height:"10rem",width:"10rem",display:u?"none":"flex"},onClick:function(){m(!0),i()},whileHover:j,whileTap:j,onMouseEnter:function(){return g(!0)},onMouseLeave:function(){return g(!1)}},o.a.createElement(c.motion.div,{className:"clickable shapeObjectTitle"},p?o.a.createElement("span",null,"Lastly ... "):null)),u?o.a.createElement("div",null,o.a.createElement("div",{style:{fontSize:"1rem",position:"absolute",left:10,bottom:100}},"Turn up the volume lol"),o.a.createElement(c.motion.div,{animate:{color:"white",fontSize:"2rem",padding:"3rem 1rem",opacity:[0,1]},transition:{delay:1,duration:2},id:"bdayWishContainer"},o.a.createElement("img",{src:"images/gullu_bhai.jpg",alt:"gullu bhai"}),o.a.createElement(c.motion.div,{animate:{top:["-50%","50%"]},transition:{type:"spring",stiffness:100,damping:40,delay:3,duration:2},id:"wish"},"Happy Birthday Gullu Bhai! \ud83c\udf82")),o.a.createElement("audio",{loop:!0,autoPlay:!0},o.a.createElement("source",{src:"Audio/bday_song.m4a",type:"audio/x-m4a"}),"Your browser does not support the audio element."),o.a.createElement("div",null,o.a.createElement(c.motion.div,{ref:y,className:"backButton",animate:{position:"absolute",right:10,bottom:10},whileHover:{scale:1.2},whileTap:{scale:1.1},onClick:function(){m(!1),t()}},"Go back")),k.map(function(e){return e})):null):null};a(51);var g=function(e){var t=e.updateStep,a=e.step,n=e.resetStep;return a>=2?o.a.createElement(c.motion.div,null,o.a.createElement(c.motion.div,{animate:{color:"white",opacity:[0,1],padding:"2rem 0",textAlign:"center",fontSize:"1.2rem"},id:"scanText"},"Scan the screen with the cursor to explore...\ud83d\udd75\ud83c\udffb\u200d\u2640\ufe0f"),o.a.createElement(c.motion.div,{id:"landingPage",className:"relative",animate:{color:"hsl(256, 256, 256)"},transition:{type:"spring",stiffness:100,delay:1,duration:3}},o.a.createElement("div",{className:"row"},o.a.createElement(m,{step:a,updateStep:t}),o.a.createElement("div",{className:"col"},o.a.createElement(d,{step:a,updateStep:t}),o.a.createElement(p,{step:a,resetStep:n,pauseInstrumental:function(){document.getElementById("instrumentalBdaySong").pause()}})),o.a.createElement("div",{className:"alignRightExtreme"},o.a.createElement(h,{step:a,updateStep:t})))),o.a.createElement("audio",{loop:!0,autoPlay:!0,id:"instrumentalBdaySong"},o.a.createElement("source",{src:"Audio/music_bday.mp3",type:"audio/mp3"}),"Your browser does not support the audio element.")):null};var b=function(){var e=Object(n.useState)(1),t=Object(l.a)(e,2),a=t[0],i=t[1],r=function(){i(a+1)};return o.a.createElement("div",null,o.a.createElement("div",{id:"mobileSite"},o.a.createElement(s,{updateStep:r,step:a}),o.a.createElement(g,{updateStep:r,step:a,resetStep:function(){i(1)}})),o.a.createElement("div",{id:"desktopSite"},"Please open this on a desktop browser"))},f=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,55)).then(function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),o(e),i(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null))),f()}},[[11,3,2]]]);
//# sourceMappingURL=main.fb04dc6f.chunk.js.map