!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=118)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(68))},function(t,n,e){var r=e(0),o=e(40),i=e(3),c=e(43),u=e(44),a=e(69),f=o("wks"),s=r.Symbol,p=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)||(u&&i(s,t)?f[t]=s[t]:f[t]=p("Symbol."+t)),f[t]}},function(t,n,e){var r=e(5);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(7),o=e(8),i=e(16);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(4);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n,e){var r=e(7),o=e(42),i=e(2),c=e(35),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(72),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(0),o=e(6),i=e(3),c=e(25),u=e(32),a=e(13),f=a.get,s=a.enforce,p=String(String).split("String");(t.exports=function(t,n,e,u){var a=!!u&&!!u.unsafe,f=!!u&&!!u.enumerable,l=!!u&&!!u.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),s(e).source=p.join("string"==typeof n?n:"")),t!==r?(a?!l&&t[n]&&(f=!0):delete t[n],f?t[n]=e:o(t,n,e)):f?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports={}},function(t,n,e){var r,o,i,c=e(73),u=e(0),a=e(5),f=e(6),s=e(3),p=e(31),l=e(29),v=u.WeakMap;if(c){var d=new v,y=d.get,h=d.has,m=d.set;r=function(t,n){return m.call(d,t,n),n},o=function(t){return y.call(d,t)||{}},i=function(t){return h.call(d,t)}}else{var g=p("state");l[g]=!0,r=function(t,n){return f(t,g,n),n},o=function(t){return s(t,g)?t[g]:{}},i=function(t){return s(t,g)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n){t.exports=!1},function(t,n,e){"use strict";var r=e(18),o=e(67),i=e(12),c=e(13),u=e(58),a=c.set,f=c.getterFor("Array Iterator");t.exports=u(Array,"Array",(function(t,n){a(this,{type:"Array Iterator",target:r(t),index:0,kind:n})}),(function(){var t=f(this),n=t.target,e=t.kind,r=t.index++;return!n||r>=n.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==e?{value:r,done:!1}:"values"==e?{value:n[r],done:!1}:{value:[r,n[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(8).f,o=e(3),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(55),o=e(24);t.exports=function(t){return r(o(t))}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){var r=e(0),o=e(33).f,i=e(6),c=e(10),u=e(25),a=e(74),f=e(47);t.exports=function(t,n){var e,s,p,l,v,d=t.target,y=t.global,h=t.stat;if(e=y?r:h?r[d]||u(d,{}):(r[d]||{}).prototype)for(s in n){if(l=n[s],p=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!f(y?s:d+(h?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;a(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),c(e,s,l,t)}}},function(t,n,e){var r=e(19);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"d",(function(){return o})),e.d(n,"a",(function(){return i})),e.d(n,"e",(function(){return c})),e.d(n,"c",(function(){return u})),e.d(n,"f",(function(){return a}));e(15),e(50),e(38);function r(t){const n=document.createElement.bind(document);return document.createElement=(...e)=>(t(...e),n(...e)),()=>{document.createElement=n}}function o(t){const n=history.pushState.bind(history);return history.pushState=(...e)=>(t(...e),n(...e)),()=>{history.pushState=n}}function i(t,n){[].concat(n).forEach(n=>{t.addEventListener(n,t=>t.stopImmediatePropagation(),!0)})}function c(t){return["hls","m3u8"].includes(t)}function u(t){Function.prototype.apply=function(n,e=[]){const r=t.bind(n)(...e);if(void 0===r||r)return this.bind(n)(...e)}}function a(t){VIP_CRACK_INSTALL(t)}},,function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(0),o=e(6);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(0),o=e(5),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n,e){var r=e(28),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports={}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,e){var r=e(40),o=e(43),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,e){var r=e(41),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n,e){var r=e(7),o=e(59),i=e(16),c=e(18),u=e(35),a=e(3),f=e(42),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=c(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,e){var r=e(64),o=e(12),i=e(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,n,e){var r=e(5);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r,o=e(2),i=e(56),c=e(30),u=e(29),a=e(46),f=e(26),s=e(31),p=s("IE_PROTO"),l=function(){},v=function(t){return"<script>"+t+"<\/script>"},d=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;d=r?function(t){t.write(v("")),t.close();var n=t.parentWindow.Object;return t=null,n}(r):((n=f("iframe")).style.display="none",a.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var e=c.length;e--;)delete d.prototype[c[e]];return d()};u[p]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(l.prototype=o(t),e=new l,l.prototype=null,e[p]=t):e=d(),void 0===n?e:i(e,n)}},function(t,n,e){var r=e(24);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(0),o=e(91),i=e(15),c=e(6),u=e(1),a=u("iterator"),f=u("toStringTag"),s=i.values;for(var p in o){var l=r[p],v=l&&l.prototype;if(v){if(v[a]!==s)try{c(v,a,s)}catch(t){v[a]=s}if(v[f]||c(v,f,p),o[p])for(var d in i)if(v[d]!==i[d])try{c(v,d,i[d])}catch(t){v[d]=i[d]}}}},function(t,n){t.exports=function(t,n,e){if(!(t instanceof n))throw TypeError("Incorrect "+(e?e+" ":"")+"invocation");return t}},function(t,n,e){var r=e(14),o=e(41);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(0),o=e(25),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(7),o=e(4),i=e(26);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n,e){var r=e(4);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){var r=e(3),o=e(18),i=e(70).indexOf,c=e(29);t.exports=function(t,n){var e,u=o(t),a=0,f=[];for(e in u)!r(c,e)&&r(u,e)&&f.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~i(f,e)||f.push(e));return f}},function(t,n,e){var r=e(9);t.exports=r("document","documentElement")},function(t,n,e){var r=e(4),o=/#|\.prototype\./,i=function(t,n){var e=u[c(t)];return e==f||e!=a&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,e){"use strict";var r,o,i,c=e(49),u=e(6),a=e(3),f=e(1),s=e(14),p=f("iterator"),l=!1;[].keys&&("next"in(i=[].keys())?(o=c(c(i)))!==Object.prototype&&(r=o):l=!0),null==r&&(r={}),s||a(r,p)||u(r,p,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:l}},function(t,n,e){var r=e(3),o=e(37),i=e(31),c=e(77),u=i("IE_PROTO"),a=Object.prototype;t.exports=c?Object.getPrototypeOf:function(t){return t=o(t),r(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,n,e){"use strict";var r,o,i,c,u=e(20),a=e(14),f=e(0),s=e(9),p=e(80),l=e(10),v=e(62),d=e(17),y=e(81),h=e(5),m=e(19),g=e(39),x=e(11),b=e(32),S=e(82),j=e(84),O=e(85),w=e(51).set,T=e(86),P=e(87),E=e(88),L=e(54),_=e(89),M=e(13),A=e(47),I=e(1),k=e(90),C=I("species"),D="Promise",N=M.get,R=M.set,F=M.getterFor(D),V=p,G=f.TypeError,q=f.document,H=f.process,z=s("fetch"),J=L.f,W=J,B="process"==x(H),U=!!(q&&q.createEvent&&f.dispatchEvent),Y=A(D,(function(){if(!(b(V)!==String(V))){if(66===k)return!0;if(!B&&"function"!=typeof PromiseRejectionEvent)return!0}if(a&&!V.prototype.finally)return!0;if(k>=51&&/native code/.test(V))return!1;var t=V.resolve(1),n=function(t){t((function(){}),(function(){}))};return(t.constructor={})[C]=n,!(t.then((function(){}))instanceof n)})),K=Y||!j((function(t){V.all(t).catch((function(){}))})),X=function(t){var n;return!(!h(t)||"function"!=typeof(n=t.then))&&n},Q=function(t,n,e){if(!n.notified){n.notified=!0;var r=n.reactions;T((function(){for(var o=n.value,i=1==n.state,c=0;r.length>c;){var u,a,f,s=r[c++],p=i?s.ok:s.fail,l=s.resolve,v=s.reject,d=s.domain;try{p?(i||(2===n.rejection&&nt(t,n),n.rejection=1),!0===p?u=o:(d&&d.enter(),u=p(o),d&&(d.exit(),f=!0)),u===s.promise?v(G("Promise-chain cycle")):(a=X(u))?a.call(u,l,v):l(u)):v(o)}catch(t){d&&!f&&d.exit(),v(t)}}n.reactions=[],n.notified=!1,e&&!n.rejection&&$(t,n)}))}},Z=function(t,n,e){var r,o;U?((r=q.createEvent("Event")).promise=n,r.reason=e,r.initEvent(t,!1,!0),f.dispatchEvent(r)):r={promise:n,reason:e},(o=f["on"+t])?o(r):"unhandledrejection"===t&&E("Unhandled promise rejection",e)},$=function(t,n){w.call(f,(function(){var e,r=n.value;if(tt(n)&&(e=_((function(){B?H.emit("unhandledRejection",r,t):Z("unhandledrejection",t,r)})),n.rejection=B||tt(n)?2:1,e.error))throw e.value}))},tt=function(t){return 1!==t.rejection&&!t.parent},nt=function(t,n){w.call(f,(function(){B?H.emit("rejectionHandled",t):Z("rejectionhandled",t,n.value)}))},et=function(t,n,e,r){return function(o){t(n,e,o,r)}},rt=function(t,n,e,r){n.done||(n.done=!0,r&&(n=r),n.value=e,n.state=2,Q(t,n,!0))},ot=function(t,n,e,r){if(!n.done){n.done=!0,r&&(n=r);try{if(t===e)throw G("Promise can't be resolved itself");var o=X(e);o?T((function(){var r={done:!1};try{o.call(e,et(ot,t,r,n),et(rt,t,r,n))}catch(e){rt(t,r,e,n)}})):(n.value=e,n.state=1,Q(t,n,!1))}catch(e){rt(t,{done:!1},e,n)}}};Y&&(V=function(t){g(this,V,D),m(t),r.call(this);var n=N(this);try{t(et(ot,this,n),et(rt,this,n))}catch(t){rt(this,n,t)}},(r=function(t){R(this,{type:D,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=v(V.prototype,{then:function(t,n){var e=F(this),r=J(O(this,V));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=B?H.domain:void 0,e.parent=!0,e.reactions.push(r),0!=e.state&&Q(this,e,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,n=N(t);this.promise=t,this.resolve=et(ot,t,n),this.reject=et(rt,t,n)},L.f=J=function(t){return t===V||t===i?new o(t):W(t)},a||"function"!=typeof p||(c=p.prototype.then,l(p.prototype,"then",(function(t,n){var e=this;return new V((function(t,n){c.call(e,t,n)})).then(t,n)}),{unsafe:!0}),"function"==typeof z&&u({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return P(V,z.apply(f,arguments))}}))),u({global:!0,wrap:!0,forced:Y},{Promise:V}),d(V,D,!1,!0),y(D),i=s(D),u({target:D,stat:!0,forced:Y},{reject:function(t){var n=J(this);return n.reject.call(void 0,t),n.promise}}),u({target:D,stat:!0,forced:a||Y},{resolve:function(t){return P(a&&this===i?V:this,t)}}),u({target:D,stat:!0,forced:K},{all:function(t){var n=this,e=J(n),r=e.resolve,o=e.reject,i=_((function(){var e=m(n.resolve),i=[],c=0,u=1;S(t,(function(t){var a=c++,f=!1;i.push(void 0),u++,e.call(n,t).then((function(t){f||(f=!0,i[a]=t,--u||r(i))}),o)})),--u||r(i)}));return i.error&&o(i.value),e.promise},race:function(t){var n=this,e=J(n),r=e.reject,o=_((function(){var o=m(n.resolve);S(t,(function(t){o.call(n,t).then(e.resolve,r)}))}));return o.error&&r(o.value),e.promise}})},function(t,n,e){var r,o,i,c=e(0),u=e(4),a=e(11),f=e(21),s=e(46),p=e(26),l=e(52),v=c.location,d=c.setImmediate,y=c.clearImmediate,h=c.process,m=c.MessageChannel,g=c.Dispatch,x=0,b={},S=function(t){if(b.hasOwnProperty(t)){var n=b[t];delete b[t],n()}},j=function(t){return function(){S(t)}},O=function(t){S(t.data)},w=function(t){c.postMessage(t+"",v.protocol+"//"+v.host)};d&&y||(d=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return b[++x]=function(){("function"==typeof t?t:Function(t)).apply(void 0,n)},r(x),x},y=function(t){delete b[t]},"process"==a(h)?r=function(t){h.nextTick(j(t))}:g&&g.now?r=function(t){g.now(j(t))}:m&&!l?(i=(o=new m).port2,o.port1.onmessage=O,r=f(i.postMessage,i,1)):!c.addEventListener||"function"!=typeof postMessage||c.importScripts||u(w)||"file:"===v.protocol?r="onreadystatechange"in p("script")?function(t){s.appendChild(p("script")).onreadystatechange=function(){s.removeChild(this),S(t)}}:function(t){setTimeout(j(t),0)}:(r=w,c.addEventListener("message",O,!1))),t.exports={set:d,clear:y}},function(t,n,e){var r=e(53);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(r)},function(t,n,e){var r=e(9);t.exports=r("navigator","userAgent")||""},function(t,n,e){"use strict";var r=e(19),o=function(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=r(n),this.reject=r(e)};t.exports.f=function(t){return new o(t)}},function(t,n,e){var r=e(4),o=e(11),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(7),o=e(8),i=e(2),c=e(57);t.exports=r?Object.defineProperties:function(t,n){i(t);for(var e,r=c(n),u=r.length,a=0;u>a;)o.f(t,e=r[a++],n[e]);return t}},function(t,n,e){var r=e(45),o=e(30);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){"use strict";var r=e(20),o=e(61),i=e(49),c=e(78),u=e(17),a=e(6),f=e(10),s=e(1),p=e(14),l=e(12),v=e(48),d=v.IteratorPrototype,y=v.BUGGY_SAFARI_ITERATORS,h=s("iterator"),m=function(){return this};t.exports=function(t,n,e,s,v,g,x){o(e,n,s);var b,S,j,O=function(t){if(t===v&&L)return L;if(!y&&t in P)return P[t];switch(t){case"keys":case"values":case"entries":return function(){return new e(this,t)}}return function(){return new e(this)}},w=n+" Iterator",T=!1,P=t.prototype,E=P[h]||P["@@iterator"]||v&&P[v],L=!y&&E||O(v),_="Array"==n&&P.entries||E;if(_&&(b=i(_.call(new t)),d!==Object.prototype&&b.next&&(p||i(b)===d||(c?c(b,d):"function"!=typeof b[h]&&a(b,h,m)),u(b,w,!0,!0),p&&(l[w]=m))),"values"==v&&E&&"values"!==E.name&&(T=!0,L=function(){return E.call(this)}),p&&!x||P[h]===L||a(P,h,L),l[n]=L,v)if(S={values:O("values"),keys:g?L:O("keys"),entries:O("entries")},x)for(j in S)(y||T||!(j in P))&&f(P,j,S[j]);else r({target:n,proto:!0,forced:y||T},S);return S}},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){"use strict";var r=e(48).IteratorPrototype,o=e(36),i=e(16),c=e(17),u=e(12),a=function(){return this};t.exports=function(t,n,e){var f=n+" Iterator";return t.prototype=o(r,{next:i(1,e)}),c(t,f,!1,!0),u[f]=a,t}},function(t,n,e){var r=e(10);t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},function(t,n,e){var r=e(1),o=e(12),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,n,e){var r=e(83),o=e(11),i=e(1)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:c?o(n):"Object"==(r=o(n))&&"function"==typeof n.callee?"Arguments":r}},function(t,n,e){var r=e(2);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},,function(t,n,e){var r=e(1),o=e(36),i=e(8),c=r("unscopables"),u=Array.prototype;null==u[c]&&i.f(u,c,{configurable:!0,value:o(null)}),t.exports=function(t){u[c][t]=!0}},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){var r=e(44);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){var r=e(18),o=e(27),i=e(71),c=function(t){return function(n,e,c){var u,a=r(n),f=o(a.length),s=i(c,f);if(t&&e!=e){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n,e){var r=e(28),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n,e){var r=e(0);t.exports=r},function(t,n,e){var r=e(0),o=e(32),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,e){var r=e(3),o=e(75),i=e(33),c=e(8);t.exports=function(t,n){for(var e=o(n),u=c.f,a=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||u(t,s,a(n,s))}}},function(t,n,e){var r=e(9),o=e(76),i=e(60),c=e(2);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(45),o=e(30).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(4);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,n,e){var r=e(2),o=e(79);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,e={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),n=e instanceof Array}catch(t){}return function(e,i){return r(e),o(i),n?t.call(e,i):e.__proto__=i,e}}():void 0)},function(t,n,e){var r=e(5);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,n,e){var r=e(0);t.exports=r.Promise},function(t,n,e){"use strict";var r=e(9),o=e(8),i=e(1),c=e(7),u=i("species");t.exports=function(t){var n=r(t),e=o.f;c&&n&&!n[u]&&e(n,u,{configurable:!0,get:function(){return this}})}},function(t,n,e){var r=e(2),o=e(63),i=e(27),c=e(21),u=e(34),a=e(65),f=function(t,n){this.stopped=t,this.result=n};(t.exports=function(t,n,e,s,p){var l,v,d,y,h,m,g,x=c(n,e,s?2:1);if(p)l=t;else{if("function"!=typeof(v=u(t)))throw TypeError("Target is not iterable");if(o(v)){for(d=0,y=i(t.length);y>d;d++)if((h=s?x(r(g=t[d])[0],g[1]):x(t[d]))&&h instanceof f)return h;return new f(!1)}l=v.call(t)}for(m=l.next;!(g=m.call(l)).done;)if("object"==typeof(h=a(l,x,g.value,s))&&h&&h instanceof f)return h;return new f(!1)}).stop=function(t){return new f(!0,t)}},function(t,n,e){var r={};r[e(1)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,n,e){var r=e(1)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i={};i[r]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},function(t,n,e){var r=e(2),o=e(19),i=e(1)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||null==(e=r(c)[i])?n:o(e)}},function(t,n,e){var r,o,i,c,u,a,f,s,p=e(0),l=e(33).f,v=e(11),d=e(51).set,y=e(52),h=p.MutationObserver||p.WebKitMutationObserver,m=p.process,g=p.Promise,x="process"==v(m),b=l(p,"queueMicrotask"),S=b&&b.value;S||(r=function(){var t,n;for(x&&(t=m.domain)&&t.exit();o;){n=o.fn,o=o.next;try{n()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},x?c=function(){m.nextTick(r)}:h&&!y?(u=!0,a=document.createTextNode(""),new h(r).observe(a,{characterData:!0}),c=function(){a.data=u=!u}):g&&g.resolve?(f=g.resolve(void 0),s=f.then,c=function(){s.call(f,r)}):c=function(){d.call(p,r)}),t.exports=S||function(t){var n={fn:t,next:void 0};i&&(i.next=n),o||(o=n,c()),i=n}},function(t,n,e){var r=e(2),o=e(5),i=e(54);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},function(t,n,e){var r=e(0);t.exports=function(t,n){var e=r.console;e&&e.error&&(1===arguments.length?e.error(t):e.error(t,n))}},function(t,n){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,n,e){var r,o,i=e(0),c=e(53),u=i.process,a=u&&u.versions,f=a&&a.v8;f?o=(r=f.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";e.r(n);e(15),e(38);var r=e(22);const o={injected:{handler(t,n){const e=t.response&&JSON.parse(t.response);if(e&&e.vinfo){const r=JSON.parse(e.vinfo),o=2!==r.vl.vi[0].st;n(o,{referrer:o}),r.vl.vi[0].st=2,r.preview=0,e.vinfo=JSON.stringify(r),delete e.ad,t.response=JSON.stringify(e)}},url:["https://vd.l.qq.com/proxyhttp","https://vi.l.qq.com/proxyhttp"],operator:"include",type:"ajax"}},i={init(){Object(r.d)(()=>{window.postMessage({operate:"resolveSourceInfo",resolveSourceInfo:!0},"*")})},beforeGetVideoDom(){},getVideoDom(t,{resolve:n}){const e=Object(r.b)((...t)=>{if("video"!==t[0].toLowerCase())return;const r=document.querySelector("video");r&&(n(r),e())})},afterGetVideoDom(t){Object(r.a)(t.getVideoDom(),"error")},afterPlay(t){const n=t.getVideoDom(),e=PLAYER.getVid(),r=localStorage.getItem("txp-history-playtime"),o=r&&JSON.parse(r),i=o&&o[e];i&&(n.currentTime=i,n.play())},playHistoryTime(t){const n=t.getVideoDom();setTimeout(()=>{const t=document.querySelector("[data-action=clickTips]");if(!t)return n.play();const e=t.innerText,[r=0,o=0,i=0]=Array(3).concat(e.split(":")).map(t=>parseInt(t)).splice(-3);n.currentTime=60*r*60+60*o+i,n.play()},800)}};Object(r.f)({name:"qq",url:"qq.com/x/cover",version:"0.0.2",network:o,core:i})}]);