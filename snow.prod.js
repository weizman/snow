(function(){"use strict";(()=>{var e={586:(e,t,n)=>{const r=n(228),{getFramesArray:o,getFrameTag:i}=n(648),{getOnload:c,setOnload:a,removeAttribute:s,addEventListener:u}=n(14);function l(e){if(!i(e))return;u(e,"load",(function(){r(e)}));const t=c(e);t&&(a(e,null),s(e,"onload"),a(e,t))}e.exports=function(e){for(let t=0;t<e.length;t++){const n=e[t],r=o(n,!0);for(let e=0;e<r.length;e++)l(r[e])}}},750:e=>{e.exports=function(e){e&&e.contentWindow}},832:(e,t,n)=>{const{Object:r,Function:o}=n(14),{isTagFramable:i}=n(648),{error:c,ERR_EXTENDING_FRAMABLES_BLOCKED:a}=n(312);e.exports=function(e){const t=r.getOwnPropertyDescriptor(e.CustomElementRegistry.prototype,"define");t.configurable=t.writable=!0;const n=t.value;var s;t.value=(s=n,function(e,t,n){let r=n;if(n){const t=n.extends;i(t+"")&&c(a,e,n)&&(r=void 0)}return o.prototype.call.call(s,this,e,t,r)}),r.defineProperty(e.CustomElementRegistry.prototype,"define",t)}},228:(e,t,n)=>{const r=n(851),o=n(750),{shadows:i,toArray:c,getFramesArray:a,getContentWindowOfFrame:s,getOwnerWindowOfNode:u}=n(648),{Object:l,getFrameElement:p}=n(14);function f(e,t){let n=-1;for(;e[++n];){if(r(e[n],e,l))continue;if(p(e[n])===t)return e[n];const o=f(e[n],t);if(o)return o}for(let n=0;n<i.length;n++){const r=i[n];if(u(r)!==e)continue;const o=a(r,!1);for(let e=0;e<o.length;e++){const n=o[e],r=s(n);if(n===t)return r;const i=f(r,t);if(i)return i}}return null}e.exports=function(e){e=c(e);for(let t=0;t<e.length;t++){const n=e[t];if("object"!=typeof n)continue;o(n);const r=f(top,n);r&&top.SNOW_WINDOW(r)}}},328:(e,t,n)=>{const{getFramesArray:r}=n(648),{Array:o,stringToLowerCase:i,split:c,getAttribute:a,setAttribute:s,getTemplateContent:u,getChildElementCount:l,createElement:p,getInnerHTML:f,setInnerHTML:m,remove:g,DocumentFragment:d}=n(14),{warn:y,WARN_DECLARATIVE_SHADOWS:w}=n(312),E=d.prototype.querySelectorAll;function O(e,t){let n="top."+(e?"SNOW_FRAME":"SNOW_WINDOW")+"(this);";return t&&(n="<script>"+n+"document.currentScript.remove();<\/script>"),n}function h(e){let t=a(e,"onload");return!!t&&(t=O(!0,!1)+t,s(e,"onload",t),!0)}function v(e){let t=a(e,"src")||"";const[n,r]=c(t,":");return"javascript"===i(n)&&(t="javascript:"+O(!1,!1)+r,s(e,"src",t),!0)}function D(e){let t=a(e,"srcdoc");if(t){t=O(!1,!0)+t;const n=new o(t);return _(n,!0),s(e,"srcdoc",n[0]),!0}return!1}function _(e,t){for(let i=0;i<e.length;i++){const c=p(document,"template");m(c,e[i]);const a=u(c);if(!l(a))continue;let s=!1;if(t){const e=p(document,"script");e.textContent=O(!1,!1),a.insertBefore(e,a.firstChild),s=!0}const d=E.call(a,"template[shadowroot]");for(let t=0;t<d.length;t++)n=d[t],o=e[i],y(w,n,o),g(n),s=!0;const _=r(a,!1);for(let e=0;e<_.length;e++){const t=_[e];s=h(t)||s,s=v(t)||s,s=D(t)||s}s&&(e[i]=f(c))}var n,o}e.exports={handleHTML:_}},352:(e,t,n)=>{const r=n(228),o=n(832),i=n(583),c=n(459),a=n(58),{hookShadowDOM:s}=n(373),{Object:u,addEventListener:l,getFrameElement:p}=n(14),{isMarked:f,mark:m}=n(111),{error:g,ERR_PROVIDED_CB_IS_NOT_A_FUNCTION:d,ERR_MARK_NEW_WINDOW_FAILED:y}=n(312);function w(e,t){const n=u.create(null);n.value=t,u.defineProperty(top,e,n)}function E(e){try{const t=!f(e);return t&&m(e),t}catch(t){g(y,e,t)}return E(e)}function O(e){E(e)&&(function(e){!function(e){const t=p(e);l(t,"load",(function(){r(t)}))}(e),o(e),i(e),c(e,"load"),a(e),s(e)}(e),h(e))}let h;e.exports=function(e,t){if(!h){if("function"!=typeof e&&g(d,e))return;w("SNOW_WINDOW",(function(e){O(e)})),w("SNOW_FRAME",(function(e){r(e)})),h=e}O(t||top)}},58:(e,t,n)=>{const{protectShadows:r}=n(373),o=n(586),{getFramesArray:i,shadows:c}=n(648),{getParentElement:a,slice:s,Object:u,Function:l}=n(14),{handleHTML:p}=n(328),f=n(228),m={DocumentFragment:["replaceChildren","append","prepend"],Document:["replaceChildren","append","prepend","write","writeln"],Node:["appendChild","insertBefore","replaceChild"],Element:["innerHTML","outerHTML","insertAdjacentHTML","replaceWith","insertAdjacentElement","append","before","prepend","after","replaceChildren"],ShadowRoot:["innerHTML"],HTMLIFrameElement:["srcdoc"]};function g(e,t){function n(e){o(e),o(c),p(e,t)}function u(e,t){const n=i(t,!1);f(n),f(e),r(!0)}return function(){const t=s(arguments),r=a(this)||this;n(t);const o=l.prototype.apply.call(e,this,t);return u(t,r),o}}e.exports=function(e){for(const t in m){const n=m[t];for(let r=0;r<n.length;r++){const o=n[r],i=u.getOwnPropertyDescriptor(e[t].prototype,o),c=i.set?"set":"value";i[c]=g(i[c],"srcdoc"===o),i.configurable=!0,"value"===c&&(i.writable=!0),u.defineProperty(e[t].prototype,o,i)}}}},459:(e,t,n)=>{const r=n(228),{removeEventListener:o,addEventListener:i,slice:c,Map:a,Object:s}=n(14),u=new a;function l(e,t,n){if(t)return t.handleEvent?t.handleEvent.apply(t,n):t.apply(e,n)}function p(e,t){return function(n,o,a){let s=o;return n===t&&(u.has(o)||u.set(o,(function(){r(this);const e=c(arguments);l(this,o,e)})),s=u.get(o)),i(this||e,n,s,a)}}function f(e,t){return function(n,r,i){let c=r;return n===t&&(c=u.get(r),u.delete(r)),o(this||e,n,c,i)}}e.exports=function(e,t){s.defineProperty(e.EventTarget.prototype,"addEventListener",{configurable:!0,writable:!0,value:p(e,t)}),s.defineProperty(e.EventTarget.prototype,"removeEventListener",{configurable:!0,writable:!0,value:f(e,t)})}},312:(e,t,n)=>{const{console:r}=n(14);e.exports={warn:function(e,t,n){let o;switch(e){case 5:const e=t,i=n;o=!1,r.warn("SNOW:","removing html string representing a declarative shadow:",e,"\n",`"${i}"`,".","\n","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/32#issuecomment-1239273328",".");break;case 3:const c=t,a=n;o=!0,r.warn("SNOW:",o?"":"NOT",'blocking open attempt to "javascript:" url:',c,"by window: ",a,".","\n","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/44#issuecomment-1369687802",".");break;case 2:const s=t,u=n;o=!0,r.warn("SNOW:","blocking access to property:",`"${s}"`,"of opened window: ",u,".","\n","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/2#issuecomment-1239264255",".")}return o},error:function(e,t,n){let o;switch(e){case 6:const e=t,i=n;o=!0,r.error("SNOW:",`"${e}"`,"extending attempt","of framable elements such as provided",i,"is blocked to prevent bypass",".","\n","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/56#issuecomment-1374899809",".","\n");break;case 1:const c=t,a=n;o=!0,r.error("SNOW:","failed to mark new window:",c,".","\n","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/33#issuecomment-1239280063",".","\n","in order to maintain a bulletproof defense mechanism, failing to mark a new window typically causes an infinite loop",".","\n","error caught:","\n",a);break;case 4:const s=t;o=!0,r.error("SNOW:",'first argument must be of type "function", instead got:',s,".","\n","therefore, snow bailed and is not applied to the page until this is fixed.")}return o},ERR_MARK_NEW_WINDOW_FAILED:1,WARN_OPEN_API_LIMITED:2,WARN_OPEN_API_URL_ARG_JAVASCRIPT_SCHEME:3,ERR_PROVIDED_CB_IS_NOT_A_FUNCTION:4,WARN_DECLARATIVE_SHADOWS:5,ERR_EXTENDING_FRAMABLES_BLOCKED:6}},111:(e,t,n)=>{const{Map:r,Object:o,Array:i}=n(14),c=(Math.random()+1).toString(36).substring(7),a=new r;e.exports={isMarked:function(e){if(!a.has(e))return!1;const t=o.getOwnPropertyDescriptor(e,"SNOW_ID");if(!t||!o.hasOwnProperty.call(t,"value"))return!1;if("function"!=typeof t.value)return!1;const n=a.get(e);return t.value(c)===n},mark:function(e){const t=new i,n=o.create(null);n.value=e=>e===c&&t,o.defineProperty(e,"SNOW_ID",n),a.set(e,t)}}},14:e=>{e.exports=function(e){const t=function(e){return function(e,t){const n=e.document.createElement("iframe");(e.document.head||e.document.documentElement).appendChild(n);const r=function(e){const{console:t,Proxy:n,JSON:r,Attr:o,String:i,Function:c,Map:a,Node:s,Document:u,DocumentFragment:l,ShadowRoot:p,Object:f,Reflect:m,Array:g,Element:d,HTMLElement:y,HTMLTemplateElement:w,EventTarget:E,HTMLIFrameElement:O,HTMLFrameElement:h,HTMLObjectElement:v}=e,D={console:t,Proxy:n,JSON:r,Attr:o,String:i,Function:c,Map:a,Node:s,Document:u,DocumentFragment:l,ShadowRoot:p,Object:f,Reflect:m,Array:g,Element:d,HTMLElement:y,HTMLTemplateElement:w,EventTarget:E,HTMLIFrameElement:O,HTMLFrameElement:h,HTMLObjectElement:v};return D.document={createElement:e.document.createElement},D}(n.contentWindow);return n.parentElement.removeChild(n),r}(e)}(e),{console:n,Proxy:r,Function:o,String:i,Map:c,Node:a,Document:s,DocumentFragment:u,ShadowRoot:l,Object:p,Reflect:f,Array:m,Element:g,HTMLElement:d,HTMLTemplateElement:y,EventTarget:w,HTMLIFrameElement:E,HTMLFrameElement:O,HTMLObjectElement:h}=t;return p.assign(t,{iframeContentWindow:p.getOwnPropertyDescriptor(E.prototype,"contentWindow").get,frameContentWindow:p.getOwnPropertyDescriptor(O.prototype,"contentWindow").get,objectContentWindow:p.getOwnPropertyDescriptor(h.prototype,"contentWindow").get,createElement:p.getOwnPropertyDescriptor(s.prototype,"createElement").value,slice:p.getOwnPropertyDescriptor(m.prototype,"slice").value,split:p.getOwnPropertyDescriptor(i.prototype,"split").value,nodeType:p.getOwnPropertyDescriptor(a.prototype,"nodeType").get,tagName:p.getOwnPropertyDescriptor(g.prototype,"tagName").get,getInnerHTML:p.getOwnPropertyDescriptor(g.prototype,"innerHTML").get,setInnerHTML:p.getOwnPropertyDescriptor(g.prototype,"innerHTML").set,toString:p.getOwnPropertyDescriptor(p.prototype,"toString").value,getOnload:p.getOwnPropertyDescriptor(d.prototype,"onload").get,setOnload:p.getOwnPropertyDescriptor(d.prototype,"onload").set,getAttribute:p.getOwnPropertyDescriptor(g.prototype,"getAttribute").value,setAttribute:p.getOwnPropertyDescriptor(g.prototype,"setAttribute").value,removeAttribute:p.getOwnPropertyDescriptor(g.prototype,"removeAttribute").value,remove:p.getOwnPropertyDescriptor(g.prototype,"remove").value,addEventListener:p.getOwnPropertyDescriptor(w.prototype,"addEventListener").value,removeEventListener:p.getOwnPropertyDescriptor(w.prototype,"removeEventListener").value,getTemplateContent:p.getOwnPropertyDescriptor(y.prototype,"content").get,getChildElementCount:p.getOwnPropertyDescriptor(u.prototype,"childElementCount").get,getFrameElement:p.getOwnPropertyDescriptor(e,"frameElement").get,getParentElement:p.getOwnPropertyDescriptor(a.prototype,"parentElement").get,getOwnerDocument:p.getOwnPropertyDescriptor(a.prototype,"ownerDocument").get,getDefaultView:p.getOwnPropertyDescriptor(s.prototype,"defaultView").get}),{console:n,Proxy:r,Object:p,Reflect:f,Function:o,Node:a,Element:g,Document:s,DocumentFragment:u,ShadowRoot:l,Array:m,Map:c,getContentWindow:function(e,n){switch(n){case"IFRAME":return t.iframeContentWindow.call(e);case"FRAME":return t.frameContentWindow.call(e);case"OBJECT":return t.objectContentWindow.call(e);default:return null}},stringToLowerCase:function(e){return t.String.prototype.toLowerCase.call(e)},stringStartsWith:function(e,n){return t.String.prototype.startsWith.call(e,n)},parse:function(e,n){return t.JSON.parse(e,n)},stringify:function(e,n,r){return t.JSON.stringify(e,n,r)},slice:function(e,n,r){return t.slice.call(e,n,r)},split:function(e,n){return t.split.call(e,n)},nodeType:function(e){return t.nodeType.call(e)},tagName:function(e){return t.tagName.call(e)},toString:function(e){return t.toString.call(e)},getOnload:function(e){return t.getOnload.call(e)},setOnload:function(e,n){return t.setOnload.call(e,n)},remove:function(e){return t.remove.call(e)},removeAttribute:function(e,n){return t.removeAttribute.call(e,n)},getAttribute:function(e,n){return t.getAttribute.call(e,n)},setAttribute:function(e,n,r){return t.setAttribute.call(e,n,r)},addEventListener:function(e,n,r,o){return t.addEventListener.call(e,n,r,o)},removeEventListener:function(e,n,r,o){return t.removeEventListener.call(e,n,r,o)},createElement:function(e,n,r){return t.createElement.call(e,n,r)},getInnerHTML:function(e){return t.getInnerHTML.call(e)},setInnerHTML:function(e,n){return t.setInnerHTML.call(e,n)},getTemplateContent:function(e){return t.getTemplateContent.call(e)},getChildElementCount:function(e){return t.getChildElementCount.call(e)},getFrameElement:function(e){return t.Function.prototype.call.call(t.getFrameElement,e)},getParentElement:function(e){return t.getParentElement.call(e)},getOwnerDocument:function(e){return t.getOwnerDocument.call(e)},getDefaultView:function(e){return t.getDefaultView.call(e)}}}(top)},583:(e,t,n)=>{const{stringToLowerCase:r,stringStartsWith:o,slice:i,Function:c,Object:a,Reflect:s,Proxy:u,Map:l}=n(14),{warn:p,WARN_OPEN_API_LIMITED:f,WARN_OPEN_API_URL_ARG_JAVASCRIPT_SCHEME:m}=n(312),g=new l;function d(e,t){const n=new a(null);return a.defineProperty(n,"closed",{get:function(){return t.closed}}),a.defineProperty(n,"close",{value:function(){return t.close()}}),a.defineProperty(n,"focus",{value:function(){return t.focus()}}),a.defineProperty(n,"postMessage",{value:function(e,n,r){return t.postMessage(e,n,r)}}),new u(n,{get:function(n,r){let o=s.get(n,r);return s.has(n,r)||s.has(t,r)&&(p(f,r,e)||(o=s.get(t,r))),o},set:function(){}})}e.exports=function(e){!function(e){const t=a.getOwnPropertyDescriptor(e.MessageEvent.prototype,"source"),n=t.get;t.get=function(){const e=n.call(this);return g.get(e)||e},a.defineProperty(e.MessageEvent.prototype,"source",t)}(e),e.open=function(e,t){return function(){const n=i(arguments),a=n[0]+"",s=n[1],u=n[2];if(o(r(a),"javascript")&&p(m,a,e))return null;const l=c.prototype.call.call(t,this,a,s,u);if(!l)return null;top.SNOW_WINDOW(l);const f=d(e,l);return g.set(l,f),f}}(e,e.open)}},373:(e,t,n)=>{const r=n(228),{getFramesArray:o,shadows:i}=n(648),{Object:c,Function:a}=n(14);function s(e){for(let t=0;t<i.length;t++){const n=i[t];if(e&&!n.isConnected)continue;const c=o(n,!1);r(c)}}e.exports={hookShadowDOM:function(e){const t=c.getOwnPropertyDescriptor(e.Element.prototype,"attachShadow");t.configurable=t.writable=!0;const n=t.value;var r;t.value=(r=n,function(e){const t=a.prototype.call.call(r,this,e);return i.push(t),s(!0),t}),c.defineProperty(e.Element.prototype,"attachShadow",t)},protectShadows:s}},648:(e,t,n)=>{const{tagName:r,nodeType:o,slice:i,Array:c,parse:a,stringify:s,Node:u,Document:l,DocumentFragment:p,Element:f,ShadowRoot:m,getContentWindow:g,getDefaultView:d,getOwnerDocument:y,stringToLowerCase:w}=n(14),E=new c;function O(e){return E.includes(e)}function h(e){const t=w(e);return"iframe"===t||"frame"===t||"object"===t||"embed"===t}function v(e){if(!e||"object"!=typeof e)return null;if(o(e)!==f.prototype.ELEMENT_NODE)return null;if(O(e))return null;const t=r(e);return h(t)?t:null}function D(e){return c.isArray(e)||(e=new c(e)),e}function _(e,t){let n=!1;for(let r=0;r<t.length;r++)e.includes(t[r])||(e.push(t[r]),n=!0);return n}e.exports={toArray:D,isTagFramable:h,getOwnerWindowOfNode:function(e){return d(y(e))},getContentWindowOfFrame:function(e){return g(e,v(e))},getFramesArray:function(e,t){const n=new c;if(null===e||"object"!=typeof e)return n;if("string"==typeof a(s(r=e,((e,t)=>e||r!==t?"":t)))||!function(e){if(O(e))return!0;const t=o(e);return t===f.prototype.ELEMENT_NODE||t===f.prototype.DOCUMENT_FRAGMENT_NODE||t===f.prototype.DOCUMENT_NODE}(e))return n;var r;const g=function(e){if(O(e))return m;switch(o(e)){case u.prototype.DOCUMENT_NODE:return l;case u.prototype.DOCUMENT_FRAGMENT_NODE:return p;default:return f}}(e).prototype.querySelectorAll.call(e,"iframe,frame,object,embed");return _(n,i(g)),t&&_(n,D(e)),n},getFrameTag:v,shadows:E}},626:e=>{e.exports={SRC_IS_NOT_A_WINDOW:'provided argument "src" must be a proper window of instance Window',DST_IS_NOT_A_WINDOW:'provided argument "dst" must be a proper window of instance Window',SRC_IS_NOT_SAME_ORIGIN_AS_WINDOW:'provided argument "src" must be a window in the same origin as the current context window'}},851:(e,t,n)=>{const{DST_IS_NOT_A_WINDOW:r,SRC_IS_NOT_A_WINDOW:o,SRC_IS_NOT_SAME_ORIGIN_AS_WINDOW:i}=n(626);function c(e,t){const n=t(e);return n===n.window}function a(e,t,n){return null===n.getPrototypeOf.call(t,e)}e.exports=function(e,t=window,n=window.Object){if(!c(t,n))throw new Error(o);if(!c(e,n))throw new Error(r);if(a(window,t,n))throw new Error(i);return a(e,t,n)}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e,t=n(352),r=n.n(t);e=top,Object.defineProperty(e,"SNOW",{value:r()})})()})();}())