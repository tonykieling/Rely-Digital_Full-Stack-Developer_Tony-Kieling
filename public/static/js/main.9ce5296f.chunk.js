(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{25:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),c=a.n(s),r=a(18),o=a.n(r),l=a(5),i=a.n(l),u=a(8),b=a(6),m=a(3),d=a(4),j=(a(25),a(9)),p=a.n(j),f={name:"",email:""};var O=function(){var e=Object(s.useRef)(null),t=Object(s.useRef)(null),a=Object(s.useRef)(null),c=Object(s.useState)(f),r=Object(d.a)(c,2),o=r[0],l=o.name,j=o.email,O=r[1],h=function(e){var t=e.target,a=t.name,n=t.value;O((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(b.a)({},a,n))}))},x=Object(s.useState)(!1),g=Object(d.a)(x,2),v=g[0],y=g[1],C=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];y(e)},N=Object(s.useState)({message:"Get Started Today",cssClass:"btn-form"}),S=Object(d.a)(N,2),k=S[0],w=S[1],T=function(t){w("OK"===t?Object(m.a)(Object(m.a)({},k),{},{message:"Data submitted successfully!",cssClass:"success-message"}):Object(m.a)(Object(m.a)({},k),{},{message:"Something bad happened. Try again later!",cssClass:"fail-message"})),setTimeout((function(){w(Object(m.a)(Object(m.a)({},k),{},{message:"Get Started Today",cssClass:"btn-form"})),"OK"===t&&O(Object(m.a)({},f)),y(),e.current.focus()}),2e3)},K=Object(s.useState)("btn-form"),R=Object(d.a)(K,2),E=R[0],F=R[1],z=function(){var t=Object(u.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.current.blur(),F("btn-form"===E?"btn-green":"btn-form"),I(),"display-dropbox"!==P){t.next=6;break}return e.current.focus(),t.abrupt("return");case 6:return"http://localhost:3333/contact",t.prev=7,t.next=10,p.a.get("http://localhost:3333/contact",{headers:{"Content-Type":"application/json"}});case 10:n=t.sent,_(n.data.content),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(7),console.log("### ERROR:",t.t0);case 17:case"end":return t.stop()}}),t,null,[[7,14]])})));return function(){return t.apply(this,arguments)}}(),B=Object(s.useState)("no-display-dropbox"),D=Object(d.a)(B,2),P=D[0],G=D[1],I=function(){G("no-display-dropbox"===P?"display-dropbox":"no-display-dropbox")},J=function(){var a=Object(u.a)(i.a.mark((function a(n){var s,c,r;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),"OK"===(s=l&&j?j.match("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")?"OK":"email":"both")){a.next=5;break}return"both"===s?(alert("Please, enter Name and Business Email."),l?t.current.focus():e.current.focus()):"email"===s&&(alert("Email seems to be invalid"),t.current.focus()),a.abrupt("return");case 5:return"http://localhost:3333/contact",c={name:l,email:j},a.prev=7,a.next=10,p.a.post("http://localhost:3333/contact",c,{headers:{"Content-Type":"application/json"}});case 10:r=a.sent,C(!0),r.data.message?T("OK"):T("NOK"),a.next=18;break;case 15:a.prev=15,a.t0=a.catch(7),console.log("### error post",a.t0);case 18:case"end":return a.stop()}}),a,null,[[7,15]])})));return function(e){return a.apply(this,arguments)}}(),L=Object(s.useState)(""),M=Object(d.a)(L,2),W=M[0],$=M[1],_=function(e){var t=e.length?e.map((function(e,t){return Object(n.jsxs)("li",{children:[e.name,", ",Object(n.jsx)("span",{className:"underline",children:e.email})]},t)})):Object(n.jsx)("li",{children:Object(n.jsx)("b",{children:"No entries right now"})},1);$(t)};return Object(n.jsxs)("div",{className:"foundation",children:[Object(n.jsx)("div",{className:"title-form",children:"We think your company would be a great fit!"}),Object(n.jsxs)("form",{children:[Object(n.jsx)("p",{className:"label-form",children:" Name "}),Object(n.jsx)("input",{autoFocus:!0,id:"name",className:"text-form",type:"text",name:"name",value:l,onChange:h,ref:e,disabled:v}),Object(n.jsx)("p",{className:"label-form",children:" Email "}),Object(n.jsx)("input",{id:"email",className:"text-form",type:"email",name:"email",value:j,onChange:h,ref:t,disabled:v})]}),Object(n.jsx)("button",{type:"button",className:k.cssClass,onClick:J,disabled:v,children:k.message}),Object(n.jsx)("button",{type:"button",className:E,onClick:z,ref:a,disabled:v,children:"Show Submissions"}),Object(n.jsx)("div",{className:P,children:Object(n.jsxs)("ul",{children:[W," "]})})]})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,45)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root")),h()}},[[44,1,2]]]);
//# sourceMappingURL=main.9ce5296f.chunk.js.map