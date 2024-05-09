import{_ as L}from"./objectWithoutProperties--RY0eV0u.js";import{_ as D}from"./toPropertyKey-BcUJYDQU.js";import{_ as R}from"./defineProperty-DcNpp85p.js";import{r as j}from"./index-C0dDX-lL.js";import{g as _}from"./_commonjsHelpers-BosuxZz1.js";import{I as ee,w as te,g as re,c as d,a as ne}from"./utils-DCllE6BU.js";var ae={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};const se=_(ae);var oe=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function z(e){var r={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},t=e.match(/<\/?([^\s]+?)[/\s>]/);if(t&&(r.name=t[1],(se[t[1]]||e.charAt(e.length-2)==="/")&&(r.voidElement=!0),r.name.startsWith("!--"))){var s=e.indexOf("-->");return{type:"comment",comment:s!==-1?e.slice(4,s):""}}for(var u=new RegExp(oe),n=null;(n=u.exec(e))!==null;)if(n[0].trim())if(n[1]){var o=n[1].trim(),v=[o,""];o.indexOf("=")>-1&&(v=o.split("=")),r.attrs[v[0]]=v[1],u.lastIndex--}else n[2]&&(r.attrs[n[2]]=n[3].trim().substring(1,n[3].length-1));return r}var ie=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,ue=/^\s*$/,pe=Object.create(null);function M(e,r){switch(r.type){case"text":return e+r.content;case"tag":return e+="<"+r.name+(r.attrs?function(t){var s=[];for(var u in t)s.push(u+'="'+t[u]+'"');return s.length?" "+s.join(" "):""}(r.attrs):"")+(r.voidElement?"/>":">"),r.voidElement?e:e+r.children.reduce(M,"")+"</"+r.name+">";case"comment":return e+"<!--"+r.comment+"-->"}}var ce={parse:function(e,r){r||(r={}),r.components||(r.components=pe);var t,s=[],u=[],n=-1,o=!1;if(e.indexOf("<")!==0){var v=e.indexOf("<");s.push({type:"text",content:v===-1?e:e.substring(0,v)})}return e.replace(ie,function(m,E){if(o){if(m!=="</"+t.name+">")return;o=!1}var x,k=m.charAt(1)!=="/",P=m.startsWith("<!--"),b=E+m.length,O=e.charAt(b);if(P){var T=z(m);return n<0?(s.push(T),s):((x=u[n]).children.push(T),s)}if(k&&(n++,(t=z(m)).type==="tag"&&r.components[t.name]&&(t.type="component",o=!0),t.voidElement||o||!O||O==="<"||t.children.push({type:"text",content:e.slice(b,e.indexOf("<",b))}),n===0&&s.push(t),(x=u[n-1])&&x.children.push(t),u[n]=t),(!k||t.voidElement)&&(n>-1&&(t.voidElement||t.name===m.slice(2,-1))&&(n--,t=n===-1?s:u[n]),!o&&O!=="<"&&O)){x=n===-1?s:u[n].children;var y=e.indexOf("<",b),g=e.slice(b,y===-1?void 0:y);ue.test(g)&&(g=" "),(y>-1&&n+x.length>=0||g!==" ")&&x.push({type:"text",content:g})}}),s},stringify:function(e){return e.reduce(function(r,t){return r+M("",t)},"")}},le=["format"],fe=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function J(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})),t.push.apply(t,s)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?J(Object(t),!0).forEach(function(s){R(e,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):J(Object(t)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})}return e}function W(e,r){if(!e)return!1;var t=e.props?e.props.children:e.children;return r?t.length>0:!!t}function $(e){return e?e.props?e.props.children:e.children:[]}function ve(e){return Object.prototype.toString.call(e)!=="[object Array]"?!1:e.every(function(r){return j.isValidElement(r)})}function S(e){return Array.isArray(e)?e:[e]}function me(e,r){var t=f({},r);return t.props=Object.assign(e.props,r.props),t}function X(e,r){if(!e)return"";var t="",s=S(e),u=r.transSupportBasicHtmlNodes&&r.transKeepBasicHtmlNodesFor?r.transKeepBasicHtmlNodesFor:[];return s.forEach(function(n,o){if(typeof n=="string")t+="".concat(n);else if(j.isValidElement(n)){var v=Object.keys(n.props).length,m=u.indexOf(n.type)>-1,E=n.props.children;if(!E&&m&&v===0)t+="<".concat(n.type,"/>");else if(!E&&(!m||v!==0))t+="<".concat(o,"></").concat(o,">");else if(n.props.i18nIsDynamicList)t+="<".concat(o,"></").concat(o,">");else if(m&&v===1&&typeof E=="string")t+="<".concat(n.type,">").concat(E,"</").concat(n.type,">");else{var x=X(E,r);t+="<".concat(o,">").concat(x,"</").concat(o,">")}}else if(n===null)d("Trans: the passed in value is invalid - seems you passed in a null child.");else if(D(n)==="object"){var k=n.format,P=L(n,le),b=Object.keys(P);if(b.length===1){var O=k?"".concat(b[0],", ").concat(k):b[0];t+="{{".concat(O,"}}")}else d("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",n)}else d("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",n)}),t}function ye(e,r,t,s,u,n){if(r==="")return[];var o=s.transKeepBasicHtmlNodesFor||[],v=r&&new RegExp(o.join("|")).test(r);if(!e&&!v)return[r];var m={};function E(y){var g=S(y);g.forEach(function(i){typeof i!="string"&&(W(i)?E($(i)):D(i)==="object"&&!j.isValidElement(i)&&Object.assign(m,i))})}E(e);var x=ce.parse("<0>".concat(r,"</0>")),k=f(f({},m),u);function P(y,g,i){var c=$(y),w=O(c,g.children,i);return ve(c)&&w.length===0?c:w}function b(y,g,i,c,w){y.dummy&&(y.children=g),i.push(j.cloneElement(y,f(f({},y.props),{},{key:c}),w?void 0:g))}function O(y,g,i){var c=S(y),w=S(g);return w.reduce(function(p,a,h){var N=a.children&&a.children[0]&&a.children[0].content&&t.services.interpolator.interpolate(a.children[0].content,k,t.language);if(a.type==="tag"){var A=c[parseInt(a.name,10)];!A&&i.length===1&&i[0][a.name]&&(A=i[0][a.name]),A||(A={});var l=Object.keys(a.attrs).length!==0?me({props:a.attrs},A):A,F=j.isValidElement(l),B=F&&W(a,!0)&&!a.voidElement,K=v&&D(l)==="object"&&l.dummy&&!F,V=D(e)==="object"&&e!==null&&Object.hasOwnProperty.call(e,a.name);if(typeof l=="string"){var H=t.services.interpolator.interpolate(l,k,t.language);p.push(H)}else if(W(l)||B){var Y=P(l,a,i);b(l,Y,p,h)}else if(K){var Z=O(c,a.children,i);p.push(j.cloneElement(l,f(f({},l.props),{},{key:h}),Z))}else if(Number.isNaN(parseFloat(a.name)))if(V){var q=P(l,a,i);b(l,q,p,h,a.voidElement)}else if(s.transSupportBasicHtmlNodes&&o.indexOf(a.name)>-1)if(a.voidElement)p.push(j.createElement(a.name,{key:"".concat(a.name,"-").concat(h)}));else{var G=O(c,a.children,i);p.push(j.createElement(a.name,{key:"".concat(a.name,"-").concat(h)},G))}else if(a.voidElement)p.push("<".concat(a.name," />"));else{var Q=O(c,a.children,i);p.push("<".concat(a.name,">").concat(Q,"</").concat(a.name,">"))}else if(D(l)==="object"&&!F){var C=a.children[0]?N:null;C&&p.push(C)}else a.children.length===1&&N?p.push(j.cloneElement(l,f(f({},l.props),{},{key:h}),N)):p.push(j.cloneElement(l,f(f({},l.props),{},{key:h})))}else if(a.type==="text"){var I=s.transWrapTextNodes,U=n?s.unescape(t.services.interpolator.interpolate(a.content,k,t.language)):t.services.interpolator.interpolate(a.content,k,t.language);I?p.push(j.createElement(I,{key:"".concat(a.name,"-").concat(h)},U)):p.push(U)}return p},[])}var T=O([{dummy:!0,children:e||[]}],x,S(e||[]));return $(T[0])}function xe(e){var r=e.children,t=e.count,s=e.parent,u=e.i18nKey,n=e.context,o=e.tOptions,v=o===void 0?{}:o,m=e.values,E=e.defaults,x=e.components,k=e.ns,P=e.i18n,b=e.t,O=e.shouldUnescape,T=L(e,fe),y=j.useContext(ee)||{},g=y.i18n,i=y.defaultNS,c=P||g||ne();if(!c)return te("You will need to pass in an i18next instance by using i18nextReactModule"),r;var w=b||c.t.bind(c)||function(H){return H};n&&(v.context=n);var p=f(f({},re()),c.options&&c.options.react),a=k||w.ns||i||c.options&&c.options.defaultNS;a=typeof a=="string"?[a]:a||["translation"];var h=E||X(r,p)||p.transEmptyNodeValue||u,N=p.hashTransKey,A=u||(N?N(h):h),l=m?v.interpolation:{interpolation:f(f({},v.interpolation),{},{prefix:"#$?",suffix:"?$#"})},F=f(f(f(f({},v),{},{count:t},m),l),{},{defaultValue:h,ns:a}),B=A?w(A,F):h,K=ye(x||r,B,c,p,F,O),V=s!==void 0?s:p.defaultTransParent;return V?j.createElement(V,T,K):K}export{xe as T};