import{j as l}from"./jsx-runtime-BTCK_S7S.js";import{_ as d}from"./extends-CCbyfPlC.js";import{r as t}from"./index-CBqU2yxZ.js";import{b as M,m as v,e as y,n as P,g,o as N,p as A,r as F,h as x,d as j,i as b,s as q,t as T,u as L,a as G}from"./index-C_X5wfCI.js";import{c as h}from"./createLucideIcon-CT11eyui.js";const D="Dialog",[C,pe]=M(D),[S,u]=C(D),U=e=>{const{__scopeDialog:a,children:o,open:r,defaultOpen:c,onOpenChange:n,modal:s=!0}=e,i=t.useRef(null),f=t.useRef(null),[$=!1,m]=j({prop:r,defaultProp:c,onChange:n});return t.createElement(S,{scope:a,triggerRef:i,contentRef:f,contentId:b(),titleId:b(),descriptionId:b(),open:$,onOpenChange:m,onOpenToggle:t.useCallback(()=>m(k=>!k),[m]),modal:s},o)},E="DialogPortal",[B,R]=C(E,{forceMount:void 0}),V=e=>{const{__scopeDialog:a,forceMount:o,children:r,container:c}=e,n=u(E,a);return t.createElement(B,{scope:a,forceMount:o},t.Children.map(r,s=>t.createElement(v,{present:o||n.open},t.createElement(q,{asChild:!0,container:c},s))))},_="DialogOverlay",X=t.forwardRef((e,a)=>{const o=R(_,e.__scopeDialog),{forceMount:r=o.forceMount,...c}=e,n=u(_,e.__scopeDialog);return n.modal?t.createElement(v,{present:r||n.open},t.createElement(K,d({},c,{ref:a}))):null}),K=t.forwardRef((e,a)=>{const{__scopeDialog:o,...r}=e,c=u(_,o);return t.createElement(T,{as:L,allowPinchZoom:!0,shards:[c.contentRef]},t.createElement(x.div,d({"data-state":I(c.open)},r,{ref:a,style:{pointerEvents:"auto",...r.style}})))}),p="DialogContent",Y=t.forwardRef((e,a)=>{const o=R(p,e.__scopeDialog),{forceMount:r=o.forceMount,...c}=e,n=u(p,e.__scopeDialog);return t.createElement(v,{present:r||n.open},n.modal?t.createElement(Z,d({},c,{ref:a})):t.createElement(z,d({},c,{ref:a})))}),Z=t.forwardRef((e,a)=>{const o=u(p,e.__scopeDialog),r=t.useRef(null),c=y(a,o.contentRef,r);return t.useEffect(()=>{const n=r.current;if(n)return P(n)},[]),t.createElement(O,d({},e,{ref:c,trapFocus:o.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:g(e.onCloseAutoFocus,n=>{var s;n.preventDefault(),(s=o.triggerRef.current)===null||s===void 0||s.focus()}),onPointerDownOutside:g(e.onPointerDownOutside,n=>{const s=n.detail.originalEvent,i=s.button===0&&s.ctrlKey===!0;(s.button===2||i)&&n.preventDefault()}),onFocusOutside:g(e.onFocusOutside,n=>n.preventDefault())}))}),z=t.forwardRef((e,a)=>{const o=u(p,e.__scopeDialog),r=t.useRef(!1),c=t.useRef(!1);return t.createElement(O,d({},e,{ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:n=>{var s;if((s=e.onCloseAutoFocus)===null||s===void 0||s.call(e,n),!n.defaultPrevented){var i;r.current||(i=o.triggerRef.current)===null||i===void 0||i.focus(),n.preventDefault()}r.current=!1,c.current=!1},onInteractOutside:n=>{var s,i;(s=e.onInteractOutside)===null||s===void 0||s.call(e,n),n.defaultPrevented||(r.current=!0,n.detail.originalEvent.type==="pointerdown"&&(c.current=!0));const f=n.target;((i=o.triggerRef.current)===null||i===void 0?void 0:i.contains(f))&&n.preventDefault(),n.detail.originalEvent.type==="focusin"&&c.current&&n.preventDefault()}}))}),O=t.forwardRef((e,a)=>{const{__scopeDialog:o,trapFocus:r,onOpenAutoFocus:c,onCloseAutoFocus:n,...s}=e,i=u(p,o),f=t.useRef(null),$=y(a,f);return N(),t.createElement(t.Fragment,null,t.createElement(A,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:c,onUnmountAutoFocus:n},t.createElement(F,d({role:"dialog",id:i.contentId,"aria-describedby":i.descriptionId,"aria-labelledby":i.titleId,"data-state":I(i.open)},s,{ref:$,onDismiss:()=>i.onOpenChange(!1)}))),!1)}),H="DialogTitle",J=t.forwardRef((e,a)=>{const{__scopeDialog:o,...r}=e,c=u(H,o);return t.createElement(x.h2,d({id:c.titleId},r,{ref:a}))});const Q="DialogClose",W=t.forwardRef((e,a)=>{const{__scopeDialog:o,...r}=e,c=u(Q,o);return t.createElement(x.button,d({type:"button"},r,{ref:a,onClick:g(e.onClick,()=>c.onOpenChange(!1))}))});function I(e){return e?"open":"closed"}const ee=U,te=V,ne=X,oe=Y,re=J,ce=W;/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=h("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=h("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),w=e=>l.jsx(ee,{className:"media-gallery",onOpenChange:e.onClose,open:!!e.defaultItem,children:l.jsxs(te,{children:[l.jsx(ne,{className:"dialog-overlay"}),l.jsxs(oe,{className:"dialog-content",children:[l.jsxs(re,{className:"dialog-title flex items-center",children:[l.jsx(ae,{className:"h-4 w-4 mr-1.5"}),e.title]}),l.jsx("div",{className:"pt-6 pb-2 text-sm w-full text-muted min-h-20",children:!!e.defaultItem&&l.jsx(G,{iiifContent:e.defaultItem.manifest_url,options:{informationPanel:{open:!1}}})}),l.jsx(ce,{asChild:!0,children:l.jsx("button",{className:"dialog-close rounded-full",type:"button",children:l.jsx(se,{className:"h-7 w-7 p-1.5"})})})]})]})}),$e=w;w.__docgenInfo={description:"This component renders a IIIF Viewer for the passed MediaContent record.",methods:[],displayName:"MediaGallery",props:{defaultItem:{required:!0,flowType:{name:"intersection",raw:`Annotation & {
  content_download_url: string,
  content_iiif_url: string,
  content_preview_url: string,
  content_thumbnail_url: string,
  content_url: string,
  manifest_url: string,
  type: 'MediaContent'
}`,elements:[{name:"signature",type:"object",raw:`{
  id: string,
  record_id: string,
  uuid: string,
  title: string,
  user_defined: {
    [key: string]: UserDefinedField
  }
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"record_id",value:{name:"string",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"user_defined",value:{name:"signature",type:"object",raw:`{
  [key: string]: UserDefinedField
}`,signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:`{
  label: string,
  value: string
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}}]}},{name:"signature",type:"object",raw:`{
  content_download_url: string,
  content_iiif_url: string,
  content_preview_url: string,
  content_thumbnail_url: string,
  content_url: string,
  manifest_url: string,
  type: 'MediaContent'
}`,signature:{properties:[{key:"content_download_url",value:{name:"string",required:!0}},{key:"content_iiif_url",value:{name:"string",required:!0}},{key:"content_preview_url",value:{name:"string",required:!0}},{key:"content_thumbnail_url",value:{name:"string",required:!0}},{key:"content_url",value:{name:"string",required:!0}},{key:"manifest_url",value:{name:"string",required:!0}},{key:"type",value:{name:"literal",value:"'MediaContent'",required:!0}}]}}]},description:"The MediaContent record contain the IIIF manifest URL."},onClose:{required:!0,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the dialog is closed."},title:{required:!1,flowType:{name:"string"},description:"Title text to display at the top of the dialog."}}};export{ae as I,$e as M,se as X};
