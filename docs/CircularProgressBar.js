!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.CircularProgressBar=e():t.CircularProgressBar=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=34)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(36))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(3),o=n(7),i=n(8);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(0),o=n(15).f,i=n(5),c=n(39),u=n(12),a=n(44),s=n(53);t.exports=function(t,e){var n,f,l,p,h,v=t.target,d=t.global,y=t.stat;if(n=d?r:y?r[v]||u(v,{}):(r[v]||{}).prototype)for(f in e){if(p=e[f],l=t.noTargetGet?(h=o(n,f))&&h.value:n[f],!s(d?f:v+(y?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(n,f,p,t)}}},function(t,e,n){var r=n(3),o=n(18),i=n(19),c=n(11),u=Object.defineProperty;e.f=r?u:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(16),o=n(10);t.exports=function(t){return r(o(t))}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(4);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(0),o=n(5);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(26),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(0),o=n(22),i=n(2),c=n(23),u=n(30),a=n(55),s=o("wks"),f=r.Symbol,l=a?f:f&&f.withoutSetter||c;t.exports=function(t){return i(s,t)||(u&&i(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},function(t,e,n){var r=n(3),o=n(37),i=n(8),c=n(9),u=n(11),a=n(2),s=n(18),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=c(t),e=u(e,!0),s)try{return f(t,e)}catch(t){}if(a(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,n){var r=n(1),o=n(17),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(3),o=n(1),i=n(38);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(21),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e,n){var r=n(0),o=n(12),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r=n(43),o=n(21);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.2",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e){t.exports={}},function(t,e,n){var r=n(46),o=n(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(17);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(10);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(4),o=n(27),i=n(14)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var r=n(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){var r,o,i=n(0),c=n(57),u=i.process,a=u&&u.versions,s=a&&a.v8;s?o=(r=s.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,e,n){"use strict";var r=n(59).forEach,o=n(62),i=n(63),c=o("forEach"),u=i("forEach");t.exports=c&&u?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(t,e,n){"use strict";n.r(e);n(35),n(58),n(64),n(65),n(68),n(70);function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(e){var n=e.pieName;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.pieName=n,this.pieElement=document.querySelectorAll(".".concat(n)),this.onChange(this.pieElement)}var e,n,o;return e=t,(n=[{key:"onChange",value:function(t){var e=this;if("IntersectionObserver"in window){var n=new IntersectionObserver((function(r){return r.forEach((function(r){r.intersectionRatio>.75&&(t.forEach((function(t,n){t.dataset==r.target.dataset&&e.createSvg(r.target,n)})),n.unobserve(r.target))}))}),{root:null,rootMargin:"0px",threshold:0});t.forEach((function(t){return n.observe(t)}))}else t.forEach((function(t,n){return e.createSvg(t,n)}))}},{key:"hexTorgb",value:function(t){var e=t.substring(1,7);return"".concat(parseInt(e.substring(0,2),16),", ").concat(parseInt(e.substring(2,4),16),", ").concat(parseInt(e.substring(4,6),16))}},{key:"circularBar",value:function(){var t=this,e=document.querySelector(".".concat(this.pieName,"-circle-").concat(this.index));this.percentElement();for(var n={colorSlice:this.colorSlice,strokeWidth:this.strokeWidth,end:this.end,time:this.time,round:this.round,percent:this.percent,number:this.number,index:this.index},r=function(r){setTimeout((function(){if(!(r>n.percent)){n.number&&t.percentElementUpdate(r,n.index);var o=parseInt(2.64*r);e.setAttribute("style","fill: transparent; stroke: ".concat(n.colorSlice,"; stroke-width: ").concat(n.strokeWidth,"; stroke-dashoffset: 66; stroke-dasharray: ").concat(o," ").concat(n.end-o,"; ").concat(n.round))}}),r*n.time)},o=0;o<=n.end;o++)r(o);var i=this.colorCircle?"":"border-radius: 50%; box-shadow: inset 0px 0px ".concat(this.strokeWidth,"px ").concat(this.strokeWidth,"px rgba(").concat(this.hexTorgb(this.colorSlice),", ").concat(this.opacity,")");this.pieElement[this.index].setAttribute("style","width: ".concat(this.size,"px; height: ").concat(this.size,"px;  position: relative; ").concat(i))}},{key:"percentElement",value:function(){var t=document.createElement("div");t.className="".concat(this.pieName,"-percent-").concat(this.index),t.setAttribute("style","position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); font-size: ".concat(this.fontSize,"; font-weight: ").concat(this.fontWeight,"; color: ").concat(this.fontColor)),this.pieElement[this.index].appendChild(t)}},{key:"percentElementUpdate",value:function(t,e){return document.querySelector(".".concat(this.pieName,"-percent-").concat(e)).innerText="".concat(t,"%")}},{key:"createSvg",value:function(t,e){var n=JSON.parse(t.dataset.pie),r=n.round,o=n.percent,i=n.colorSlice,c=n.strokeWidth,u=n.opacity,a=n.number,s=n.colorCircle,f=n.size,l=n.fontSize,p=n.fontWeight,h=n.fontColor,v=n.time;n.end,console.log(r),this.index=e,this.percent=o||65,this.round=r?"stroke-linecap: round;":"",this.colorSlice=i||"#00a1ff",this.strokeWidth=c||10,this.opacity=u||.1,this.number=void 0===a,this.colorCircle=s,this.size=f||200,this.fontSize=l||"3rem",this.fontWeight=p||700,this.fontColor=h||"#365b74",this.time=v||30,this.end=264;var d=document.createElementNS("http://www.w3.org/2000/svg","svg"),y=this.circleSvg(),g=this.circleSvg();y.setAttributeNS(null,"class","".concat(this.pieName,"-circle-").concat(this.index)),this.colorCircle&&(g.setAttributeNS(null,"fill","transparent"),g.setAttributeNS(null,"style","fill: transparent; stroke: ".concat(this.colorCircle,"; stroke-width: ").concat(this.strokeWidth,"px;")),d.appendChild(g)),d.setAttributeNS(null,"width",this.size),d.setAttributeNS(null,"height",this.size),d.setAttributeNS(null,"viewBox","0 0 100 100"),d.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),d.appendChild(y),this.pieElement[this.index].appendChild(d),this.circularBar()}},{key:"circleSvg",value:function(){var t=document.createElementNS("http://www.w3.org/2000/svg","circle");return t.setAttributeNS(null,"cx",50),t.setAttributeNS(null,"cy",50),t.setAttributeNS(null,"r",42),t}}])&&r(e.prototype,n),o&&r(e,o),t}();e.default=o},function(t,e,n){"use strict";var r=n(6),o=n(1),i=n(27),c=n(4),u=n(28),a=n(13),s=n(54),f=n(29),l=n(56),p=n(14),h=n(31),v=p("isConcatSpreadable"),d=h>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),y=l("concat"),g=function(t){if(!c(t))return!1;var e=t[v];return void 0!==e?!!e:i(t)};r({target:"Array",proto:!0,forced:!d||!y},{concat:function(t){var e,n,r,o,i,c=u(this),l=f(c,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?c:arguments[e],g(i)){if(p+(o=a(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,p++)n in i&&s(l,p,i[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(l,p++,i)}return l.length=p,l}})},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(0),o=n(4),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,e,n){var r=n(0),o=n(5),i=n(2),c=n(12),u=n(20),a=n(40),s=a.get,f=a.enforce,l=String(String).split("String");(t.exports=function(t,e,n,u){var a=!!u&&!!u.unsafe,s=!!u&&!!u.enumerable,p=!!u&&!!u.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),f(n).source=l.join("string"==typeof e?e:"")),t!==r?(a?!p&&t[e]&&(s=!0):delete t[e],s?t[e]=n:o(t,e,n)):s?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||u(this)}))},function(t,e,n){var r,o,i,c=n(41),u=n(0),a=n(4),s=n(5),f=n(2),l=n(42),p=n(24),h=u.WeakMap;if(c){var v=new h,d=v.get,y=v.has,g=v.set;r=function(t,e){return g.call(v,t,e),e},o=function(t){return d.call(v,t)||{}},i=function(t){return y.call(v,t)}}else{var x=l("state");p[x]=!0,r=function(t,e){return s(t,x,e),e},o=function(t){return f(t,x)?t[x]:{}},i=function(t){return f(t,x)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!a(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(0),o=n(20),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e,n){var r=n(22),o=n(23),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e){t.exports=!1},function(t,e,n){var r=n(2),o=n(45),i=n(15),c=n(7);t.exports=function(t,e){for(var n=o(e),u=c.f,a=i.f,s=0;s<n.length;s++){var f=n[s];r(t,f)||u(t,f,a(e,f))}}},function(t,e,n){var r=n(25),o=n(47),i=n(52),c=n(19);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(0);t.exports=r},function(t,e,n){var r=n(48),o=n(51).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(2),o=n(9),i=n(49).indexOf,c=n(24);t.exports=function(t,e){var n,u=o(t),a=0,s=[];for(n in u)!r(c,n)&&r(u,n)&&s.push(n);for(;e.length>a;)r(u,n=e[a++])&&(~i(s,n)||s.push(n));return s}},function(t,e,n){var r=n(9),o=n(13),i=n(50),c=function(t){return function(e,n,c){var u,a=r(e),s=o(a.length),f=i(c,s);if(t&&n!=n){for(;s>f;)if((u=a[f++])!=u)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,e,n){var r=n(26),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(1),o=/#|\.prototype\./,i=function(t,e){var n=u[c(t)];return n==s||n!=a&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,e,n){"use strict";var r=n(11),o=n(7),i=n(8);t.exports=function(t,e,n){var c=r(e);c in t?o.f(t,c,i(0,n)):t[c]=n}},function(t,e,n){var r=n(30);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){var r=n(1),o=n(14),i=n(31),c=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[];return(e.constructor={})[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e,n){var r=n(25);t.exports=r("navigator","userAgent")||""},function(t,e,n){"use strict";var r=n(6),o=n(32);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,e,n){var r=n(60),o=n(16),i=n(28),c=n(13),u=n(29),a=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,f=4==t,l=6==t,p=5==t||l;return function(h,v,d,y){for(var g,x,m=i(h),b=o(m),S=r(v,d,3),w=c(b.length),E=0,O=y||u,j=e?O(h,w):n?O(h,0):void 0;w>E;E++)if((p||E in b)&&(x=S(g=b[E],E,m),t))if(e)j[E]=x;else if(x)switch(t){case 3:return!0;case 5:return g;case 6:return E;case 2:a.call(j,g)}else if(f)return!1;return l?-1:s||f?f:j}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},function(t,e,n){var r=n(61);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){"use strict";var r=n(1);t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){var r=n(3),o=n(1),i=n(2),c=Object.defineProperty,u=function(t){throw t};t.exports=function(t,e){e||(e={});var n=[][t],a=!!i(e,"ACCESSORS")&&e.ACCESSORS,s=i(e,0)?e[0]:u,f=i(e,1)?e[1]:void 0;return!!n&&!o((function(){if(a&&!r)return!0;var t={length:-1},e=function(e){a?c(t,e,{enumerable:!0,get:u}):t[e]=1};e(1),e(2147483646),e(4294967294),n.call(t,s,f)}))}},function(t,e,n){var r=n(6),o=n(3);r({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperty:n(7).f})},function(t,e,n){var r=n(6),o=n(66);r({global:!0,forced:parseInt!=o},{parseInt:o})},function(t,e,n){var r=n(0),o=n(67).trim,i=n(33),c=r.parseInt,u=/^[+-]?0[Xx]/,a=8!==c(i+"08")||22!==c(i+"0x16");t.exports=a?function(t,e){var n=o(String(t));return c(n,e>>>0||(u.test(n)?16:10))}:c},function(t,e,n){var r=n(10),o="["+n(33)+"]",i=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),u=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:u(1),end:u(2),trim:u(3)}},function(t,e,n){var r=n(0),o=n(69),i=n(32),c=n(5);for(var u in o){var a=r[u],s=a&&a.prototype;if(s&&s.forEach!==i)try{c(s,"forEach",i)}catch(t){s.forEach=i}}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){}]).default}));