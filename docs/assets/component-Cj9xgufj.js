import{r as m}from"./index-C0dDX-lL.js";var C=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},l=new WeakMap,p=new WeakMap,h={},S=0,_=function(e){return e&&(e.host||_(e.parentNode))},k=function(e,t){return t.map(function(r){if(e.contains(r))return r;var n=_(r);return n&&e.contains(n)?n:(console.error("aria-hidden",r,"in not contained inside",e,". Doing nothing"),null)}).filter(function(r){return!!r})},x=function(e,t,r,n){var u=k(t,Array.isArray(e)?e:[e]);h[r]||(h[r]=new WeakMap);var a=h[r],o=[],c=new Set,g=new Set(u),v=function(i){!i||c.has(i)||(c.add(i),v(i.parentNode))};u.forEach(v);var s=function(i){!i||g.has(i)||Array.prototype.forEach.call(i.children,function(f){if(c.has(f))s(f);else{var d=f.getAttribute(n),E=d!==null&&d!=="false",b=(l.get(f)||0)+1,A=(a.get(f)||0)+1;l.set(f,b),a.set(f,A),o.push(f),b===1&&E&&p.set(f,!0),A===1&&f.setAttribute(r,"true"),E||f.setAttribute(n,"true")}})};return s(t),c.clear(),S++,function(){o.forEach(function(i){var f=l.get(i)-1,d=a.get(i)-1;l.set(i,f),a.set(i,d),f||(p.has(i)||i.removeAttribute(n),p.delete(i)),d||i.removeAttribute(r)}),S--,S||(l=new WeakMap,l=new WeakMap,p=new WeakMap,h={})}},q=function(e,t,r){r===void 0&&(r="data-aria-hidden");var n=Array.from(Array.isArray(e)?e:[e]),u=t||C(e);return u?(n.push.apply(n,Array.from(u.querySelectorAll("[aria-live]"))),x(n,u,r,"aria-hidden")):function(){return null}},y=function(){return y=Object.assign||function(t){for(var r,n=1,u=arguments.length;n<u;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},y.apply(this,arguments)};function j(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,n=Object.getOwnPropertySymbols(e);u<n.length;u++)t.indexOf(n[u])<0&&Object.prototype.propertyIsEnumerable.call(e,n[u])&&(r[n[u]]=e[n[u]]);return r}function H(e,t,r){if(r||arguments.length===2)for(var n=0,u=t.length,a;n<u;n++)(a||!(n in t))&&(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))}function w(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function P(e,t){var r=m.useState(function(){return{value:e,callback:t,facade:{get current(){return r.value},set current(n){var u=r.value;u!==n&&(r.value=n,r.callback(n,u))}}}})[0];return r.callback=t,r.facade}var M=new WeakMap;function K(e,t){var r=P(t||null,function(n){return e.forEach(function(u){return w(u,n)})});return m.useLayoutEffect(function(){var n=M.get(r);if(n){var u=new Set(n),a=new Set(e),o=r.current;u.forEach(function(c){a.has(c)||w(c,null)}),a.forEach(function(c){u.has(c)||w(c,o)})}M.set(r,e)},[e]),r}function W(e){return e}function T(e,t){t===void 0&&(t=W);var r=[],n=!1,u={read:function(){if(n)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:e},useMedium:function(a){var o=t(a,n);return r.push(o),function(){r=r.filter(function(c){return c!==o})}},assignSyncMedium:function(a){for(n=!0;r.length;){var o=r;r=[],o.forEach(a)}r={push:function(c){return a(c)},filter:function(){return r}}},assignMedium:function(a){n=!0;var o=[];if(r.length){var c=r;r=[],c.forEach(a),o=r}var g=function(){var s=o;o=[],s.forEach(a)},v=function(){return Promise.resolve().then(g)};v(),r={push:function(s){o.push(s),v()},filter:function(s){return o=o.filter(s),r}}}};return u}function L(e){e===void 0&&(e={});var t=T(null);return t.options=y({async:!0,ssr:!1},e),t}var O=function(e){var t=e.sideCar,r=j(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var n=t.read();if(!n)throw new Error("Sidecar medium not found");return m.createElement(n,y({},r))};O.isSideCarExport=!0;function z(e,t){return e.useMedium(t),O}var D=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function I(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=D();return t&&e.setAttribute("nonce",t),e}function N(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function B(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Q=function(){var e=0,t=null;return{add:function(r){e==0&&(t=I())&&(N(t,r),B(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},R=function(){var e=Q();return function(t,r){m.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&r])}},F=function(){var e=R(),t=function(r){var n=r.styles,u=r.dynamic;return e(n,u),null};return t};export{j as _,y as a,H as b,L as c,z as e,q as h,F as s,K as u};
