import{r as $,a as T,R as o}from"./index-CBqU2yxZ.js";import{f as O,$ as _,a as x,g as C}from"./index-dIAcmska.js";const g=T.useId||(()=>{});let h=0;function w(e){const[r,d]=$.useState(g());return O(()=>{e||d(i=>i??String(h++))},[e]),e||(r?`radix-${r}`:"")}function L(e){const r=e+"CollectionProvider",[d,i]=_(r),[b,u]=d(r,{collectionRef:{current:null},itemMap:new Map}),R=l=>{const{scope:t,children:a}=l,c=o.useRef(null),n=o.useRef(new Map).current;return o.createElement(b,{scope:t,itemMap:n,collectionRef:c},a)},M=e+"CollectionSlot",S=o.forwardRef((l,t)=>{const{scope:a,children:c}=l,n=u(M,a),s=x(t,n.collectionRef);return o.createElement(C,{ref:s},c)}),E=e+"CollectionItemSlot",p="data-radix-collection-item",I=o.forwardRef((l,t)=>{const{scope:a,children:c,...n}=l,s=o.useRef(null),m=x(t,s),f=u(E,a);return o.useEffect(()=>(f.itemMap.set(s,{ref:s,...n}),()=>void f.itemMap.delete(s))),o.createElement(C,{[p]:"",ref:m},c)});function v(l){const t=u(e+"CollectionConsumer",l);return o.useCallback(()=>{const c=t.collectionRef.current;if(!c)return[];const n=Array.from(c.querySelectorAll(`[${p}]`));return Array.from(t.itemMap.values()).sort((f,A)=>n.indexOf(f.ref.current)-n.indexOf(A.ref.current))},[t.collectionRef,t.itemMap])}return[{Provider:R,Slot:S,ItemSlot:I},v,i]}const N=$.createContext(void 0);function y(e){const r=$.useContext(N);return e||r||"ltr"}export{w as $,L as a,y as b};
