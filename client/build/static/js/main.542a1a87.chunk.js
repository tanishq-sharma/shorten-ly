(this["webpackJsonpurl-frontend"]=this["webpackJsonpurl-frontend"]||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/logo.675dcfad.png"},18:function(e,t,a){e.exports=a(43)},23:function(e,t,a){},24:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),c=a.n(o),s=(a(23),a(24),a(2)),l=a.n(s),u=a(4),i=a(3),p=function(e){var t=e.onsubmit;return r.a.createElement("div",{className:"Input_wrapper"},r.a.createElement("form",{onSubmit:t},r.a.createElement("input",{id:"url",className:"field",placeholder:"Website URL"}),r.a.createElement("input",{type:"submit",id:"get",className:"button"}),r.a.createElement("input",{type:"reset",className:"button",defaultValue:"Reset"})))},m=a(5),d=a.n(m),f=a(16),h=a.n(f);function b(){return(b=Object(u.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h()({method:"post",url:d.a.Host+"api",headers:{},data:{longURL:t}}).then((function(e){var t=e.data;a(null,t)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=function(e,t){return b.apply(this,arguments)};function E(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),o=a[0],c=a[1],s=Object(n.useRef)(null);return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("textarea",{className:"field",ref:s,value:e.url})),document.queryCommandSupported("copy")&&r.a.createElement("div",null,r.a.createElement("button",{className:"button",onClick:function(e){s.current.select(),document.execCommand("copy"),e.target.focus(),c("Copied to your clipboard !")}},"Copy"),o))}var g=/^((http|https|ftp):\/\/)/,w=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(""),s=Object(i.a)(c,2),m=s[0],f=s[1];function h(){return(h=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=(a=t.target.url.value).toLowerCase(),!g.test(a)){e.next=9;break}return f(""),e.next=7,v(a,(function(e,t){o(d.a.Host+t.shortCode)}));case 7:e.next=10;break;case 9:f("please enter website starting with http:// or https://");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",null,r.a.createElement(p,{onsubmit:function(e){return h.apply(this,arguments)}}),m,r.a.createElement(E,{url:a}))},y=a(17),N=a.n(y);var x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",{className:"Heading"},"Short-ly",r.a.createElement("a",{className:"H"},"URLs shorter than your temper")),r.a.createElement("img",{className:"App-logo",src:N.a,alt:"logo"}),r.a.createElement(w,{className:"Copy"}," ")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t){e.exports={Host:"http://localhost:7000/"}}},[[18,1,2]]]);
//# sourceMappingURL=main.542a1a87.chunk.js.map