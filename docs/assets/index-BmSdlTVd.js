import{R as o,r as $,e as T}from"./index-C0dDX-lL.js";import{$ as O,b as x,g as C,f as _}from"./index-CIyLsbPd.js";function w(e){const r=e+"CollectionProvider",[d,a]=O(r),[b,u]=d(r,{collectionRef:{current:null},itemMap:new Map}),R=l=>{const{scope:t,children:i}=l,c=o.useRef(null),n=o.useRef(new Map).current;return o.createElement(b,{scope:t,itemMap:n,collectionRef:c},i)},M=e+"CollectionSlot",S=o.forwardRef((l,t)=>{const{scope:i,children:c}=l,n=u(M,i),s=x(t,n.collectionRef);return o.createElement(C,{ref:s},c)}),E=e+"CollectionItemSlot",p="data-radix-collection-item",I=o.forwardRef((l,t)=>{const{scope:i,children:c,...n}=l,s=o.useRef(null),m=x(t,s),f=u(E,i);return o.useEffect(()=>(f.itemMap.set(s,{ref:s,...n}),()=>void f.itemMap.delete(s))),o.createElement(C,{[p]:"",ref:m},c)});function v(l){const t=u(e+"CollectionConsumer",l);return o.useCallback(()=>{const c=t.collectionRef.current;if(!c)return[];const n=Array.from(c.querySelectorAll(`[${p}]`));return Array.from(t.itemMap.values()).sort((f,A)=>n.indexOf(f.ref.current)-n.indexOf(A.ref.current))},[t.collectionRef,t.itemMap])}return[{Provider:R,Slot:S,ItemSlot:I},v,a]}const g=T.useId||(()=>{});let h=0;function L(e){const[r,d]=$.useState(g());return _(()=>{e||d(a=>a??String(h++))},[e]),e||(r?`radix-${r}`:"")}const N=$.createContext(void 0);function y(e){const r=$.useContext(N);return e||r||"ltr"}export{w as $,y as a,L as b};
