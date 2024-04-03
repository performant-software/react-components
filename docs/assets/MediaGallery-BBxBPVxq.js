import{j as d}from"./jsx-runtime-BTCK_S7S.js";import{_ as i}from"./extends-CCbyfPlC.js";import{r as t}from"./index-CBqU2yxZ.js";import{$ as P,b as D,c as b,d as v,a as A,f as N}from"./index-BC5k8oyH.js";import{g as _,c as m}from"./index-XZJElpGj.js";import{h as w,$ as F,a as j,b as T,c as k,d as L,e as U}from"./index-CAoC3wa_.js";import{c as G}from"./createLucideIcon-CT11eyui.js";const C="Dialog",[h,fe]=P(C),[S,f]=h(C),q=e=>{const{__scopeDialog:s,children:c,open:n,defaultOpen:r,onOpenChange:o,modal:a=!0}=e,l=t.useRef(null),u=t.useRef(null),[p=!1,g]=A({prop:n,defaultProp:r,onChange:o});return t.createElement(S,{scope:s,triggerRef:l,contentRef:u,contentId:m(),titleId:m(),descriptionId:m(),open:p,onOpenChange:g,onOpenToggle:t.useCallback(()=>g(M=>!M),[g]),modal:a},c)},E="DialogPortal",[V,R]=h(E,{forceMount:void 0}),X=e=>{const{__scopeDialog:s,forceMount:c,children:n,container:r}=e,o=f(E,s);return t.createElement(V,{scope:s,forceMount:c},t.Children.map(n,a=>t.createElement(_,{present:c||o.open},t.createElement(k,{asChild:!0,container:r},a))))},x="DialogOverlay",K=t.forwardRef((e,s)=>{const c=R(x,e.__scopeDialog),{forceMount:n=c.forceMount,...r}=e,o=f(x,e.__scopeDialog);return o.modal?t.createElement(_,{present:n||o.open},t.createElement(Y,i({},r,{ref:s}))):null}),Y=t.forwardRef((e,s)=>{const{__scopeDialog:c,...n}=e,r=f(x,c);return t.createElement(L,{as:N,allowPinchZoom:!0,shards:[r.contentRef]},t.createElement(v.div,i({"data-state":I(r.open)},n,{ref:s,style:{pointerEvents:"auto",...n.style}})))}),$="DialogContent",Z=t.forwardRef((e,s)=>{const c=R($,e.__scopeDialog),{forceMount:n=c.forceMount,...r}=e,o=f($,e.__scopeDialog);return t.createElement(_,{present:n||o.open},o.modal?t.createElement(z,i({},r,{ref:s})):t.createElement(B,i({},r,{ref:s})))}),z=t.forwardRef((e,s)=>{const c=f($,e.__scopeDialog),n=t.useRef(null),r=D(s,c.contentRef,n);return t.useEffect(()=>{const o=n.current;if(o)return w(o)},[]),t.createElement(O,i({},e,{ref:r,trapFocus:c.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:b(e.onCloseAutoFocus,o=>{var a;o.preventDefault(),(a=c.triggerRef.current)===null||a===void 0||a.focus()}),onPointerDownOutside:b(e.onPointerDownOutside,o=>{const a=o.detail.originalEvent,l=a.button===0&&a.ctrlKey===!0;(a.button===2||l)&&o.preventDefault()}),onFocusOutside:b(e.onFocusOutside,o=>o.preventDefault())}))}),B=t.forwardRef((e,s)=>{const c=f($,e.__scopeDialog),n=t.useRef(!1),r=t.useRef(!1);return t.createElement(O,i({},e,{ref:s,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:o=>{var a;if((a=e.onCloseAutoFocus)===null||a===void 0||a.call(e,o),!o.defaultPrevented){var l;n.current||(l=c.triggerRef.current)===null||l===void 0||l.focus(),o.preventDefault()}n.current=!1,r.current=!1},onInteractOutside:o=>{var a,l;(a=e.onInteractOutside)===null||a===void 0||a.call(e,o),o.defaultPrevented||(n.current=!0,o.detail.originalEvent.type==="pointerdown"&&(r.current=!0));const u=o.target;((l=c.triggerRef.current)===null||l===void 0?void 0:l.contains(u))&&o.preventDefault(),o.detail.originalEvent.type==="focusin"&&r.current&&o.preventDefault()}}))}),O=t.forwardRef((e,s)=>{const{__scopeDialog:c,trapFocus:n,onOpenAutoFocus:r,onCloseAutoFocus:o,...a}=e,l=f($,c),u=t.useRef(null),p=D(s,u);return F(),t.createElement(t.Fragment,null,t.createElement(j,{asChild:!0,loop:!0,trapped:n,onMountAutoFocus:r,onUnmountAutoFocus:o},t.createElement(T,i({role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":I(l.open)},a,{ref:p,onDismiss:()=>l.onOpenChange(!1)}))),!1)});const H="DialogClose",J=t.forwardRef((e,s)=>{const{__scopeDialog:c,...n}=e,r=f(H,c);return t.createElement(v.button,i({type:"button"},n,{ref:s,onClick:b(e.onClick,()=>r.onOpenChange(!1))}))});function I(e){return e?"open":"closed"}const Q=q,W=X,ee=K,te=Z,oe=J;/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=G("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),y=e=>d.jsx(Q,{open:e.manifestUrl,onOpenChange:e.onClose,children:d.jsxs(W,{children:[d.jsx(ee,{className:"dialog-overlay"}),d.jsxs(te,{className:"dialog-content",children:[d.jsx("div",{className:"pt-6 pb-2 text-sm w-full text-muted min-h-20",children:e.manifestUrl&&d.jsx(U,{iiifContent:e.manifestUrl,options:{informationPanel:{open:!1,renderToggle:!1}}})}),d.jsx(oe,{asChild:!0,children:d.jsx("button",{"aria-label":"Close",className:"dialog-close rounded-full",type:"button",children:d.jsx(ce,{className:"h-7 w-7 p-1.5"})})})]})]})}),ue=y;y.__docgenInfo={description:"This component renders a IIIF Viewer for the passed MediaContent record.",methods:[],displayName:"MediaGallery",props:{manifestUrl:{required:!0,flowType:{name:"string"},description:"URL of the IIIF manifest to render."},onClose:{required:!0,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the dialog is closed."}}};export{ue as M};
