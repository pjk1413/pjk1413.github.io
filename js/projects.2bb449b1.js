(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["projects"],{"01c4":function(t,e,n){"use strict";n("9c25")},"0cb2":function(t,e,n){var i=n("e330"),a=n("7b0b"),c=Math.floor,r=i("".charAt),o=i("".replace),s=i("".slice),l=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,d=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,i,u,p){var f=n+t.length,h=i.length,v=d;return void 0!==u&&(u=a(u),v=l),o(p,v,(function(a,o){var l;switch(r(o,0)){case"$":return"$";case"&":return t;case"`":return s(e,0,n);case"'":return s(e,f);case"<":l=u[s(o,1,-1)];break;default:var d=+o;if(0===d)return a;if(d>h){var p=c(d/10);return 0===p?a:p<=h?void 0===i[p-1]?r(o,1):i[p-1]+r(o,1):a}l=i[d-1]}return void 0===l?"":l}))}},"14c3":function(t,e,n){var i=n("da84"),a=n("c65b"),c=n("825a"),r=n("1626"),o=n("c6b6"),s=n("9263"),l=i.TypeError;t.exports=function(t,e){var n=t.exec;if(r(n)){var i=a(n,t,e);return null!==i&&c(i),i}if("RegExp"===o(t))return a(s,t,e);throw l("RegExp#exec called on incompatible receiver")}},"159b":function(t,e,n){var i=n("da84"),a=n("fdbc"),c=n("785a"),r=n("17c2"),o=n("9112"),s=function(t){if(t&&t.forEach!==r)try{o(t,"forEach",r)}catch(e){t.forEach=r}};for(var l in a)a[l]&&s(i[l]&&i[l].prototype);s(c)},"17c2":function(t,e,n){"use strict";var i=n("b727").forEach,a=n("a640"),c=a("forEach");t.exports=c?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"2d22":function(t,e,n){"use strict";n.r(e);n("a4d3"),n("e01a");var i=n("7a23"),a=function(t){return Object(i["v"])("data-v-2fd1bba9"),t=t(),Object(i["t"])(),t},c={class:"media-space-small"},r=a((function(){return Object(i["g"])("div",{class:"container"},[Object(i["g"])("div",{class:"center-left"},[Object(i["g"])("h1",{id:"heading",class:"raleway fc-dark h2 m-0"})])],-1)})),o={class:"w-75 mx-auto"},s={class:"raleway fc-secondary"};function l(t,e,n,a,l,d){var u=Object(i["z"])("Item");return Object(i["s"])(),Object(i["f"])("div",c,[r,Object(i["g"])("div",o,[Object(i["g"])("div",s,[(Object(i["s"])(!0),Object(i["f"])(i["a"],null,Object(i["y"])(l.projects,(function(t){return Object(i["s"])(),Object(i["d"])(u,{key:t.title,title:t.title,description:t.description,tech:t.tech,company:t.company},null,8,["title","description","tech","company"])})),128))])])])}var d=[{title:"Data Catalog Interface",description:"A small Flask server that served static content, scheduled and ran periodic update scripts, kept a robust log of all changes and user actions, and assisted in the management of user access to the catalog.",tech:["Python","HTML","CSS","Javascript","Jinja","Flask","SQLite"],company:"Spectrum/Charter 2022",links:[]},{title:"LOGMOD",description:"An Air Force web application designed to assist the airforce in loading/unloading and scheduling of airplanes. Updated outdated backend pieces and updated front end to utilize Vue.js.",tech:["Java","Spring","HTML","CSS","Vue.js","Bootstrap4/5","Bootstrap-Vue","Oracle","Jenkins","AWS","Liquibase","Keycloak"],company:"FEDITC 2021",links:[]},{title:"Blueprint Legal",description:"A SPA website to advertise the services of a small lawfirm.  Provides a contact form as well.",tech:["HTML","CSS","React","Bootstrap4/5","Redux"],company:"Blueprint Legal",links:["http://blueprintlegal.org/"]},{title:"Gradely",description:"A SIS (Student Information System) built as a capstone project.  Application has the ability to restrict user access based on user type, message other members, \n        keep track of assignments, grades, student progress.  ",tech:["Java","Spring Boot","HTML","CSS","React","Bootstrap4/5","Redux","MySQL","Apache Tomcat"],company:"Claim Academy 2020",links:[]}],u=n("0647"),p={class:"item-container p-1"},f=["id"],h=["id"],v=["id"],g=["id"],b=["id"];function y(t,e,n,a,c,r){return Object(i["s"])(),Object(i["f"])("div",{onClick:e[0]||(e[0]=function(){return r.expand&&r.expand.apply(r,arguments)})},[Object(i["g"])("div",p,[Object(i["g"])("div",{id:"description"+n.title,class:"description bg-light br-3 w-100 m-05"},[Object(i["g"])("div",{id:"content"+n.title,class:"fc-dark content"},null,8,h),Object(i["g"])("div",{id:"content"+n.company,class:"fc-dark content"},null,8,v),Object(i["g"])("div",{id:"content"+n.title+"tech",class:"fc-dark content"},null,8,g),Object(i["g"])("div",{id:"thumbnail"+n.title,class:"thumbnail bg-secondary fc-white h6 p-05 br-3 w-100"},Object(i["B"])(n.title),9,b)],8,f)])])}n("d3b7"),n("159b"),n("99af"),n("ac1f"),n("5319");var m=n("a5c6"),x={name:"Item",props:{description:String,title:String,company:String,tech:Array},computed:{smallScreen:function(){return window.screen.availWidth<768}},methods:{buildContent:function(){var t="";this.tech.forEach((function(e){t+='<button class="border-solid br-4 bg-warning fc-dark bc-warning mx-02">'.concat(e,"</button>")}));var e='\n            <div>\n                <div class="">'.concat(this.description,'</div>\n                <div class="italic p-05">').concat(this.company,'</div>\n                <div class=" pt-05">\n                    ').concat(t,"\n                </div>\n            </div>\n            ");return e},expand:function(){var t=document.getElementById("thumbnail"+this.title),e=document.getElementById("description"+this.title),n=document.getElementById("content"+this.title);if(this.smallScreen)if("none"==n.style.display||void 0==n.style.display){e.style.height="120px",e.style.padding="5px";var i=t.getBoundingClientRect();n.style.left=i.x-14-16+"px",setTimeout((function(){n.style.padding="5px",n.style.display="block",n.style.top=i.height+5+"px",n.style.opacity=0,e.style.height=e.scrollHeight+"px"}),400),Object(m["a"])("content"+this.title,this.buildContent(),200,5)}else t.style.height="30px",e.style.height="40px",e.style.padding="0px",n.style.display="none";else if("100%"==t.style.width||""==t.style.width){t.style.width="30%",t.style.height="120px",e.style.height="120px",e.style.padding="10px";var a=parseInt(t.style.width.replace("%",""))-10;setTimeout((function(){n.style.opacity=0;var e=t.getBoundingClientRect();n.style.left=e.x+e.width*(a/100)+"px",n.style.maxWidth=e.width+"px",n.style.display="block"}),200),setTimeout((function(){e.style.height=e.scrollHeight+"px"}),400),Object(m["a"])("content"+this.title,this.buildContent(),200,5)}else t.style.width="100%",t.style.height="30px",e.style.height="40px",e.style.padding="0px",n.style.display="none"}}},j=(n("01c4"),n("6b0d")),w=n.n(j);const O=w()(x,[["render",y],["__scopeId","data-v-913e59fc"]]);var k=O,S={components:{Item:k},name:"Projects",data:function(){return{projects:d}},mounted:function(){Object(u["a"])("heading","Projects",100,{x:0,y:0},50,"bold-name dark",!1)},methods:{}};n("dace");const I=w()(S,[["render",l],["__scopeId","data-v-2fd1bba9"]]);e["default"]=I},5319:function(t,e,n){"use strict";var i=n("2ba4"),a=n("c65b"),c=n("e330"),r=n("d784"),o=n("d039"),s=n("825a"),l=n("1626"),d=n("5926"),u=n("50c4"),p=n("577e"),f=n("1d80"),h=n("8aa5"),v=n("dc4a"),g=n("0cb2"),b=n("14c3"),y=n("b622"),m=y("replace"),x=Math.max,j=Math.min,w=c([].concat),O=c([].push),k=c("".indexOf),S=c("".slice),I=function(t){return void 0===t?t:String(t)},E=function(){return"$0"==="a".replace(/./,"$0")}(),C=function(){return!!/./[m]&&""===/./[m]("a","$0")}(),A=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));r("replace",(function(t,e,n){var c=C?"$":"$0";return[function(t,n){var i=f(this),c=void 0==t?void 0:v(t,m);return c?a(c,t,i,n):a(e,p(i),t,n)},function(t,a){var r=s(this),o=p(t);if("string"==typeof a&&-1===k(a,c)&&-1===k(a,"$<")){var f=n(e,r,o,a);if(f.done)return f.value}var v=l(a);v||(a=p(a));var y=r.global;if(y){var m=r.unicode;r.lastIndex=0}var E=[];while(1){var C=b(r,o);if(null===C)break;if(O(E,C),!y)break;var A=p(C[0]);""===A&&(r.lastIndex=h(o,u(r.lastIndex),m))}for(var B="",T=0,$=0;$<E.length;$++){C=E[$];for(var L=p(C[0]),M=x(j(d(C.index),o.length),0),R=[],H=1;H<C.length;H++)O(R,I(C[H]));var J=C.groups;if(v){var P=w([L],R,M,o);void 0!==J&&O(P,J);var F=p(i(a,void 0,P))}else F=g(L,o,M,R,J,a);M>=T&&(B+=S(o,T,M)+F,T=M+L.length)}return B+S(o,T)}]}),!A||!E||C)},"8aa5":function(t,e,n){"use strict";var i=n("6547").charAt;t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},"99af":function(t,e,n){"use strict";var i=n("23e7"),a=n("da84"),c=n("d039"),r=n("e8b5"),o=n("861d"),s=n("7b0b"),l=n("07fa"),d=n("8418"),u=n("65f0"),p=n("1dde"),f=n("b622"),h=n("2d00"),v=f("isConcatSpreadable"),g=9007199254740991,b="Maximum allowed index exceeded",y=a.TypeError,m=h>=51||!c((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),x=p("concat"),j=function(t){if(!o(t))return!1;var e=t[v];return void 0!==e?!!e:r(t)},w=!m||!x;i({target:"Array",proto:!0,forced:w},{concat:function(t){var e,n,i,a,c,r=s(this),o=u(r,0),p=0;for(e=-1,i=arguments.length;e<i;e++)if(c=-1===e?r:arguments[e],j(c)){if(a=l(c),p+a>g)throw y(b);for(n=0;n<a;n++,p++)n in c&&d(o,p,c[n])}else{if(p>=g)throw y(b);d(o,p++,c)}return o.length=p,o}})},"9c25":function(t,e,n){},a5c6:function(t,e,n){"use strict";function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:20,a=document.getElementById(t);a.style.opacity=0;var c=0;function r(){setTimeout((function(){null!=e&&(a.innerHTML=e),c<1?(c+=.01,a.style.opacity=c):clearInterval(o)}),n)}var o=setInterval(r,i)}n.d(e,"a",(function(){return i}))},a640:function(t,e,n){"use strict";var i=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&i((function(){n.call(null,e||function(){throw 1},1)}))}},d784:function(t,e,n){"use strict";n("ac1f");var i=n("e330"),a=n("6eeb"),c=n("9263"),r=n("d039"),o=n("b622"),s=n("9112"),l=o("species"),d=RegExp.prototype;t.exports=function(t,e,n,u){var p=o(t),f=!r((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),h=f&&!r((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return e=!0,null},n[p](""),!e}));if(!f||!h||n){var v=i(/./[p]),g=e(p,""[t],(function(t,e,n,a,r){var o=i(t),s=e.exec;return s===c||s===d.exec?f&&!r?{done:!0,value:v(e,n,a)}:{done:!0,value:o(n,e,a)}:{done:!1}}));a(String.prototype,t,g[0]),a(d,p,g[1])}u&&s(d[p],"sham",!0)}},dace:function(t,e,n){"use strict";n("ecdd")},ecdd:function(t,e,n){}}]);
//# sourceMappingURL=projects.2bb449b1.js.map