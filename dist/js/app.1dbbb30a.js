(function(t){function e(e){for(var o,r,a=e[0],u=e[1],s=e[2],l=0,f=[];l<a.length;l++)r=a[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&f.push(c[r][0]),c[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,r=1;r<n.length;r++){var a=n[r];0!==c[a]&&(o=!1)}o&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={app:0},c={app:0},i=[];function a(t){return u.p+"js/"+({about:"about",contact:"contact",projects:"projects",resume:"resume"}[t]||t)+"."+{about:"333f8e10",contact:"1a2642df",projects:"080cb792",resume:"21e50fce"}[t]+".js"}function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1,contact:1,projects:1,resume:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="css/"+({about:"about",contact:"contact",projects:"projects",resume:"resume"}[t]||t)+"."+{about:"686b2fad",contact:"374fba43",projects:"22fa07ed",resume:"836f287c"}[t]+".css",c=u.p+o,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var s=i[a],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===c))return e()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){s=f[a],l=s.getAttribute("data-href");if(l===o||l===c)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||c,i=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[t],d.parentNode.removeChild(d),n(i)},d.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(d)})).then((function(){r[t]=0})));var o=c[t];if(0!==o)if(o)e.push(o[2]);else{var i=new Promise((function(e,n){o=c[t]=[e,n]}));e.push(o[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=a(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=c[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}c[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0647":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n("2909");function r(t,e,n,r){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"info",a=arguments.length>6&&void 0!==arguments[6]&&arguments[6];setTimeout((function(){console.log(r);for(var c=document.getElementById(t),u=function(t){setTimeout((function(){for(var n="",r=e.indexOf("^"),u=e.indexOf("*"),s=0;s<=t;s++){var l=e.substring(0,s);0!=t&&(l=e.substring(s-1,s)),n+=s==r+1?"<span class='"+i+"'>":s==u+1?"</span>":l}t==Object(o["a"])(e).length+1?a?setInterval((function(){c.innerHTML=n+"&nbsp",setTimeout((function(){c.innerHTML=n+"_"}),400)}),800):c.innerHTML=n+"&nbsp":c.innerHTML=n+"_"}),n*t)},s=0;s<Object(o["a"])(e).length+2;s++)u(s)}),c)}},"130e":function(t,e,n){"use strict";n("8c0e")},3581:function(t,e,n){"use strict";n("a9c3")},3712:function(t,e,n){"use strict";n("bb10")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function r(t,e,n,r,c,i){var a=Object(o["z"])("Navbar"),u=Object(o["z"])("router-view");return Object(o["s"])(),Object(o["f"])(o["a"],null,[Object(o["i"])(a),Object(o["i"])(u)],64)}n("7fb9");var c=function(t){return Object(o["v"])("data-v-4c64d006"),t=t(),Object(o["t"])(),t},i={class:"z-front"},a={key:0,id:"nav",class:"mx-auto center w-75"},u={key:1,id:"nav",class:"navbar-media"},s=c((function(){return Object(o["g"])("i",{class:"material-icons light",style:{"font-size":"36px"}},"menu",-1)})),l={id:"myNav",class:"overlay"},f={class:"overlay-content"};function d(t,e,n,r,c,d){var b=Object(o["z"])("NavItem"),p=Object(o["z"])("b-button");return Object(o["s"])(),Object(o["f"])("div",i,[d.showNavbar?(Object(o["s"])(),Object(o["f"])("div",a,[Object(o["i"])(b,{title:"Home",link:"/",position:"1"}),Object(o["i"])(b,{title:"About",link:"about",position:"2"}),Object(o["i"])(b,{title:"Resume",link:"resume",position:"3"}),Object(o["i"])(b,{title:"Projects",link:"projects",position:"4"}),Object(o["i"])(b,{title:"Contact",link:"contact",position:"5"})])):(Object(o["s"])(),Object(o["f"])("div",u,[Object(o["i"])(p,{class:"w-100 center-icon bg-dark",onClick:d.openNav},{default:Object(o["E"])((function(){return[s]})),_:1},8,["onClick"]),Object(o["g"])("div",l,[Object(o["g"])("a",{href:"javascript:void(0)",class:"closebtn",onClick:e[0]||(e[0]=function(t){return d.closeNav()})},"×"),Object(o["g"])("div",f,[Object(o["i"])(b,{title:"Home",link:"/",onClick:e[1]||(e[1]=function(t){return d.closeNav()})}),Object(o["i"])(b,{title:"About",link:"about",onClick:e[2]||(e[2]=function(t){return d.closeNav()})}),Object(o["i"])(b,{title:"Resume",link:"resume",onClick:e[3]||(e[3]=function(t){return d.closeNav()})}),Object(o["i"])(b,{title:"Projects",link:"projects",onClick:e[4]||(e[4]=function(t){return d.closeNav()})}),Object(o["i"])(b,{title:"Contact",link:"contact",onClick:e[5]||(e[5]=function(t){return d.closeNav()})})])])]))])}n("9911");function b(t,e,n,r,c,i){var a=Object(o["z"])("router-link");return Object(o["s"])(),Object(o["d"])(a,{id:n.title,class:Object(o["o"])("quicksand nav-link bolder mx-4 ".concat(n.color)),to:n.link},null,8,["id","class","to"])}n("a9e3");var p=n("0647"),m={props:{title:String,link:String,color:{type:String,default:"secondary"},typeIn:{type:Boolean,default:!0},position:Number},mounted:function(){if(this.typeIn){var t=800*this.position;Object(p["a"])(this.title,this.title,100,{x:0,y:0},t,"bold-name secondary",!1)}else document.getElementById(this.title).innerText=this.title}},v=(n("130e"),n("6b0d")),h=n.n(v);const j=h()(m,[["render",b],["__scopeId","data-v-7f058408"]]);var O=j,g={name:"Navbar",components:{NavItem:O},computed:{showNavbar:function(){return window.screen.availWidth>450}},data:function(){return{}},mounted:function(){},methods:{openNav:function(){document.getElementById("myNav").style.width="100%"},closeNav:function(){document.getElementById("myNav").style.width="0%"}}};n("3712");const y=h()(g,[["render",d],["__scopeId","data-v-4c64d006"]]);var k=y,N={name:"App",components:{Navbar:k}};n("3581");const w=h()(N,[["render",r]]);var C=w,_=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),T=[{path:"/",name:"Home",component:function(){return n.e("about").then(n.bind(null,"b3d7"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"ef4c"))}},{path:"/contact",name:"Contact",component:function(){return n.e("contact").then(n.bind(null,"410a"))}},{path:"/resume",name:"Resume",component:function(){return n.e("resume").then(n.bind(null,"8864"))}},{path:"/projects",name:"Projects",component:function(){return n.e("projects").then(n.bind(null,"2d22"))}}],x=Object(_["a"])({history:Object(_["b"])("/"),routes:T}),E=x;Object(o["c"])(C).use(E).mount("#app")},"7fb9":function(t,e,n){},"8c0e":function(t,e,n){},a9c3:function(t,e,n){},bb10:function(t,e,n){}});
//# sourceMappingURL=app.1dbbb30a.js.map