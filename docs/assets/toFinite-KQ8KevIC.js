import{U as e,F as n}from"./getElementType-CckcRzoH.js";var o=/\s/;function c(r){for(var t=r.length;t--&&o.test(r.charAt(t)););return t}var I=/^\s+/;function m(r){return r&&r.slice(0,c(r)+1).replace(I,"")}var f=NaN,p=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,y=/^0o[0-7]+$/i,N=parseInt;function d(r){if(typeof r=="number")return r;if(e(r))return f;if(n(r)){var t=typeof r.valueOf=="function"?r.valueOf():r;r=n(t)?t+"":t}if(typeof r!="string")return r===0?r:+r;r=m(r);var i=b.test(r);return i||y.test(r)?N(r.slice(2),i?2:8):p.test(r)?f:+r}var s=1/0,x=17976931348623157e292;function T(r){if(!r)return r===0?r:0;if(r=d(r),r===s||r===-s){var t=r<0?-1:1;return t*x}return r===r?r:0}export{d as a,T as t};