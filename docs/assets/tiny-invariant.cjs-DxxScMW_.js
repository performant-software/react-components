import{g as c}from"./_commonjsHelpers-BosuxZz1.js";var l={},a;function v(){if(a)return l;a=1;var f=Object.prototype.hasOwnProperty;function s(t,e,i){for(i of t.keys())if(u(i,e))return i}function u(t,e){var i,r,n;if(t===e)return!0;if(t&&e&&(i=t.constructor)===e.constructor){if(i===Date)return t.getTime()===e.getTime();if(i===RegExp)return t.toString()===e.toString();if(i===Array){if((r=t.length)===e.length)for(;r--&&u(t[r],e[r]););return r===-1}if(i===Set){if(t.size!==e.size)return!1;for(r of t)if(n=r,n&&typeof n=="object"&&(n=s(e,n),!n)||!e.has(n))return!1;return!0}if(i===Map){if(t.size!==e.size)return!1;for(r of t)if(n=r[0],n&&typeof n=="object"&&(n=s(e,n),!n)||!u(r[1],e.get(n)))return!1;return!0}if(i===ArrayBuffer)t=new Uint8Array(t),e=new Uint8Array(e);else if(i===DataView){if((r=t.byteLength)===e.byteLength)for(;r--&&t.getInt8(r)===e.getInt8(r););return r===-1}if(ArrayBuffer.isView(t)){if((r=t.byteLength)===e.byteLength)for(;r--&&t[r]===e[r];);return r===-1}if(!i||typeof t=="object"){r=0;for(i in t)if(f.call(t,i)&&++r&&!f.call(e,i)||!(i in e)||!u(t[i],e[i]))return!1;return Object.keys(e).length===r}}return t!==t&&e!==e}return l.dequal=u,l}var g="Invariant failed";function h(f,s){if(!f)throw new Error(g)}var y=h;const w=c(y);export{w as i,v as r,y as t};