import{g as c}from"./_commonjsHelpers-BosuxZz1.js";import{r as p,a as d}from"./createClass-CyHhwgEe.js";import"./defineProperty-BYUWwell.js";import{r as f}from"./index-CBqU2yxZ.js";var m=p();const v=c(m);var h=d();const N=c(h);var C=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,b={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},x=function(e){return b[e]},y=function(e){return e.replace(C,x)},k={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:y},w,q=f.createContext();function z(){return k}var B=function(){function a(){v(this,a),this.usedNamespaces={}}return N(a,[{key:"addUsedNamespaces",value:function(t){var n=this;t.forEach(function(r){n.usedNamespaces[r]||(n.usedNamespaces[r]=!0)})}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),a}();function D(){return w}function L(){if(console&&console.warn){for(var a,e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&(t[0]="react-i18next:: ".concat(t[0])),(a=console).warn.apply(a,t)}}var i={};function I(){for(var a=arguments.length,e=new Array(a),t=0;t<a;t++)e[t]=arguments[t];typeof e[0]=="string"&&i[e[0]]||(typeof e[0]=="string"&&(i[e[0]]=new Date),L.apply(void 0,e))}function F(a,e,t){a.loadNamespaces(e,function(){if(a.isInitialized)t();else{var n=function r(){setTimeout(function(){a.off("initialized",r)},0),t()};a.on("initialized",n)}})}function E(a,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=e.languages[0],r=e.options?e.options.fallbackLng:!1,s=e.languages[e.languages.length-1];if(n.toLowerCase()==="cimode")return!0;var o=function(l,g){var u=e.services.backendConnector.state["".concat(l,"|").concat(g)];return u===-1||u===2};return t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!o(e.isLanguageChangingTo,a)?!1:!!(e.hasResourceBundle(n,a)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||o(n,a)&&(!r||o(s,a)))}function R(a,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!e.languages||!e.languages.length)return I("i18n.languages were undefined or empty",e.languages),!0;var n=e.options.ignoreJSONStructure!==void 0;return n?e.hasLoadedNamespace(a,{precheck:function(s,o){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&s.services.backendConnector.backend&&s.isLanguageChangingTo&&!o(s.isLanguageChangingTo,a))return!1}}):E(a,e,t)}function j(a){return a.displayName||a.name||(typeof a=="string"&&a.length>0?a:"Unknown")}export{q as I,B as R,D as a,j as b,L as c,z as g,R as h,F as l,I as w};
