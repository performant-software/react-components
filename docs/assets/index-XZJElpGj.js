import{_ as M}from"./extends-CCbyfPlC.js";import{r as n,a as L,R as N}from"./index-CBqU2yxZ.js";import{e as h,b as g,$ as S,d as _,c as U,a as k,f as T}from"./index-BC5k8oyH.js";import{r as F}from"./index-DZGZymok.js";const q=L.useId||(()=>{});let B=0;function G(e){const[t,s]=n.useState(q());return h(()=>{e||s(o=>o??String(B++))},[e]),e||(t?`radix-${t}`:"")}function V(e,t){return n.useReducer((s,o)=>{const r=t[s][o];return r??s},e)}const P=e=>{const{present:t,children:s}=e,o=j(t),r=typeof s=="function"?s({present:o.isPresent}):n.Children.only(s),i=g(o.ref,r.ref);return typeof s=="function"||o.isPresent?n.cloneElement(r,{ref:i}):null};P.displayName="Presence";function j(e){const[t,s]=n.useState(),o=n.useRef({}),r=n.useRef(e),i=n.useRef("none"),p=e?"mounted":"unmounted",[x,l]=V(p,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return n.useEffect(()=>{const c=E(o.current);i.current=x==="mounted"?c:"none"},[x]),h(()=>{const c=o.current,$=r.current;if($!==e){const R=i.current,d=E(c);e?l("MOUNT"):d==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l($&&R!==d?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,l]),h(()=>{if(t){const c=b=>{const d=E(o.current).includes(b.animationName);b.target===t&&d&&F.flushSync(()=>l("ANIMATION_END"))},$=b=>{b.target===t&&(i.current=E(o.current))};return t.addEventListener("animationstart",$),t.addEventListener("animationcancel",c),t.addEventListener("animationend",c),()=>{t.removeEventListener("animationstart",$),t.removeEventListener("animationcancel",c),t.removeEventListener("animationend",c)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(x),ref:n.useCallback(c=>{c&&(o.current=getComputedStyle(c)),s(c)},[])}}function E(e){return(e==null?void 0:e.animationName)||"none"}const y="Collapsible",[z,oe]=S(y),[H,O]=z(y),J=n.forwardRef((e,t)=>{const{__scopeCollapsible:s,open:o,defaultOpen:r,disabled:i,onOpenChange:p,...x}=e,[l=!1,c]=k({prop:o,defaultProp:r,onChange:p});return n.createElement(H,{scope:s,disabled:i,contentId:G(),open:l,onOpenToggle:n.useCallback(()=>c($=>!$),[c])},n.createElement(_.div,M({"data-state":I(l),"data-disabled":i?"":void 0},x,{ref:t})))}),K="CollapsibleTrigger",Q=n.forwardRef((e,t)=>{const{__scopeCollapsible:s,...o}=e,r=O(K,s);return n.createElement(_.button,M({type:"button","aria-controls":r.contentId,"aria-expanded":r.open||!1,"data-state":I(r.open),"data-disabled":r.disabled?"":void 0,disabled:r.disabled},o,{ref:t,onClick:U(e.onClick,r.onOpenToggle)}))}),D="CollapsibleContent",W=n.forwardRef((e,t)=>{const{forceMount:s,...o}=e,r=O(D,e.__scopeCollapsible);return n.createElement(P,{present:s||r.open},({present:i})=>n.createElement(X,M({},o,{ref:t,present:i})))}),X=n.forwardRef((e,t)=>{const{__scopeCollapsible:s,present:o,children:r,...i}=e,p=O(D,s),[x,l]=n.useState(o),c=n.useRef(null),$=g(t,c),b=n.useRef(0),R=b.current,d=n.useRef(0),f=d.current,C=p.open||x,m=n.useRef(C),u=n.useRef();return n.useEffect(()=>{const a=requestAnimationFrame(()=>m.current=!1);return()=>cancelAnimationFrame(a)},[]),h(()=>{const a=c.current;if(a){u.current=u.current||{transitionDuration:a.style.transitionDuration,animationName:a.style.animationName},a.style.transitionDuration="0s",a.style.animationName="none";const v=a.getBoundingClientRect();b.current=v.height,d.current=v.width,m.current||(a.style.transitionDuration=u.current.transitionDuration,a.style.animationName=u.current.animationName),l(o)}},[p.open,o]),n.createElement(_.div,M({"data-state":I(p.open),"data-disabled":p.disabled?"":void 0,id:p.contentId,hidden:!C},i,{ref:$,style:{"--radix-collapsible-content-height":R?`${R}px`:void 0,"--radix-collapsible-content-width":f?`${f}px`:void 0,...e.style}}),C&&r)});function I(e){return e?"open":"closed"}const re=J,ce=Q,se=W;function ae(e){const t=e+"CollectionProvider",[s,o]=S(t),[r,i]=s(t,{collectionRef:{current:null},itemMap:new Map}),p=d=>{const{scope:f,children:C}=d,m=N.useRef(null),u=N.useRef(new Map).current;return N.createElement(r,{scope:f,itemMap:u,collectionRef:m},C)},x=e+"CollectionSlot",l=N.forwardRef((d,f)=>{const{scope:C,children:m}=d,u=i(x,C),a=g(f,u.collectionRef);return N.createElement(T,{ref:a},m)}),c=e+"CollectionItemSlot",$="data-radix-collection-item",b=N.forwardRef((d,f)=>{const{scope:C,children:m,...u}=d,a=N.useRef(null),v=g(f,a),A=i(c,C);return N.useEffect(()=>(A.itemMap.set(a,{ref:a,...u}),()=>void A.itemMap.delete(a))),N.createElement(T,{[$]:"",ref:v},m)});function R(d){const f=i(e+"CollectionConsumer",d);return N.useCallback(()=>{const m=f.collectionRef.current;if(!m)return[];const u=Array.from(m.querySelectorAll(`[${$}]`));return Array.from(f.itemMap.values()).sort((A,w)=>u.indexOf(A.ref.current)-u.indexOf(w.ref.current))},[f.collectionRef,f.itemMap])}return[{Provider:p,Slot:l,ItemSlot:b},R,o]}const Y=n.createContext(void 0);function ie(e){const t=n.useContext(Y);return e||t||"ltr"}export{ae as $,oe as a,ie as b,G as c,re as d,ce as e,se as f,P as g};
