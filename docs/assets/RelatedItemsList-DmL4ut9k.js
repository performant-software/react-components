import{j as c}from"./jsx-runtime-BTCK_S7S.js";import{_ as f}from"./extends-CCbyfPlC.js";import{R as r}from"./index-CBqU2yxZ.js";import{$ as J,b as Q,c as T,d as S,e as W,f as X,g as Z,h as L,i as ee,j as te,k as re,l as ne}from"./index-BhufOjrY.js";import{_ as D}from"./index-default-C_maRo4o.js";import{i as oe}from"./i18n-CPgn2q6e.js";import{L as ae}from"./LoadAnimation-BHD0cPOn.js";import{R as ie}from"./RelatedMedia-B0-3diCC.js";import{R as ce}from"./RelatedOrganizations-9fy0W2zN.js";import{R as se}from"./RelatedPeople-B2Gn1jY1.js";import{R as le}from"./RelatedPlaces-CvIMvrrF.js";import{R as de}from"./RelatedTaxonomies-kDsrq_Fg.js";import{c as M}from"./createLucideIcon-CT11eyui.js";/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=M("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=M("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),p="Accordion",ue=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[P,pe,me]=J(p),[x,Ge]=Q(p,[me,T]),q=T(),z=r.forwardRef((e,o)=>{const{type:t,...n}=e,i=n,a=n;return r.createElement(P.Provider,{scope:e.__scopeAccordion},t==="multiple"?r.createElement(xe,f({},a,{ref:o})):r.createElement(ve,f({},i,{ref:o})))});z.propTypes={type(e){const o=e.value||e.defaultValue;return e.type&&!["single","multiple"].includes(e.type)?new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."):e.type==="multiple"&&typeof o=="string"?new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."):e.type==="single"&&Array.isArray(o)?new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."):null}};const[H,$e]=x(p),[K,ge]=x(p,{collapsible:!1}),ve=r.forwardRef((e,o)=>{const{value:t,defaultValue:n,onValueChange:i=()=>{},collapsible:a=!1,...s}=e,[l,d]=S({prop:t,defaultProp:n,onChange:i});return r.createElement(H,{scope:e.__scopeAccordion,value:l?[l]:[],onItemOpen:d,onItemClose:r.useCallback(()=>a&&d(""),[a,d])},r.createElement(K,{scope:e.__scopeAccordion,collapsible:a},r.createElement(U,f({},s,{ref:o}))))}),xe=r.forwardRef((e,o)=>{const{value:t,defaultValue:n,onValueChange:i=()=>{},...a}=e,[s=[],l]=S({prop:t,defaultProp:n,onChange:i}),d=r.useCallback($=>l((u=[])=>[...u,$]),[l]),m=r.useCallback($=>l((u=[])=>u.filter(A=>A!==$)),[l]);return r.createElement(H,{scope:e.__scopeAccordion,value:s,onItemOpen:d,onItemClose:m},r.createElement(K,{scope:e.__scopeAccordion,collapsible:!0},r.createElement(U,f({},a,{ref:o}))))}),[ye,y]=x(p),U=r.forwardRef((e,o)=>{const{__scopeAccordion:t,disabled:n,dir:i,orientation:a="vertical",...s}=e,l=r.useRef(null),d=W(l,o),m=pe(t),u=X(i)==="ltr",A=Z(e.onKeyDown,g=>{var _;if(!ue.includes(g.key))return;const Y=g.target,w=m().filter(E=>{var R;return!((R=E.ref.current)!==null&&R!==void 0&&R.disabled)}),v=w.findIndex(E=>E.ref.current===Y),V=w.length;if(v===-1)return;g.preventDefault();let b=v;const h=0,C=V-1,I=()=>{b=v+1,b>C&&(b=h)},k=()=>{b=v-1,b<h&&(b=C)};switch(g.key){case"Home":b=h;break;case"End":b=C;break;case"ArrowRight":a==="horizontal"&&(u?I():k());break;case"ArrowDown":a==="vertical"&&I();break;case"ArrowLeft":a==="horizontal"&&(u?k():I());break;case"ArrowUp":a==="vertical"&&k();break}const B=b%V;(_=w[B].ref.current)===null||_===void 0||_.focus()});return r.createElement(ye,{scope:t,disabled:n,direction:i,orientation:a},r.createElement(P.Slot,{scope:t},r.createElement(L.div,f({},s,{"data-orientation":a,ref:d,onKeyDown:n?void 0:A}))))}),j="AccordionItem",[Ae,N]=x(j),_e=r.forwardRef((e,o)=>{const{__scopeAccordion:t,value:n,...i}=e,a=y(j,t),s=$e(j,t),l=q(t),d=ee(),m=n&&s.value.includes(n)||!1,$=a.disabled||e.disabled;return r.createElement(Ae,{scope:t,open:m,disabled:$,triggerId:d},r.createElement(te,f({"data-orientation":a.orientation,"data-state":F(m)},l,i,{ref:o,disabled:$,open:m,onOpenChange:u=>{u?s.onItemOpen(n):s.onItemClose(n)}})))}),we="AccordionHeader",he=r.forwardRef((e,o)=>{const{__scopeAccordion:t,...n}=e,i=y(p,t),a=N(we,t);return r.createElement(L.h3,f({"data-orientation":i.orientation,"data-state":F(a.open),"data-disabled":a.disabled?"":void 0},n,{ref:o}))}),O="AccordionTrigger",Ce=r.forwardRef((e,o)=>{const{__scopeAccordion:t,...n}=e,i=y(p,t),a=N(O,t),s=ge(O,t),l=q(t);return r.createElement(P.ItemSlot,{scope:t},r.createElement(re,f({"aria-disabled":a.open&&!s.collapsible||void 0,"data-orientation":i.orientation,id:a.triggerId},l,n,{ref:o})))}),Ie="AccordionContent",ke=r.forwardRef((e,o)=>{const{__scopeAccordion:t,...n}=e,i=y(p,t),a=N(Ie,t),s=q(t);return r.createElement(ne,f({role:"region","aria-labelledby":a.triggerId,"data-orientation":i.orientation},s,n,{ref:o,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}}))});function F(e){return e?"open":"closed"}const Ee=z,Re=_e,je=he,Pe=Ce,qe=ke,G=e=>D.isEmpty(e.items)?null:c.jsx(Ee,{className:"related-items-list",type:"multiple",children:D.map(e.items,({data:o,error:t,...n})=>{var i;return c.jsxs(Re,{value:n.endpoint,children:[c.jsx(je,{children:c.jsxs(Pe,{className:`accordion-trigger border-black/20 border border-t border-b-0 border-l-0 border-r-0 border-solid
                rounded-none w-full flex justify-between items-center px-3 py-3 text-sm`,children:[c.jsxs("div",{children:[n.ui_label,o&&c.jsx("span",{className:"ml-1",children:oe.t("RelatedItemsList.labels.count",{count:(i=o.items)==null?void 0:i.length})}),t&&c.jsx(be,{className:"inline ml-1.5 h-4 w-4 text-red-600 align-text-bottom"}),!(o||t)&&c.jsx(ae,{className:"text-muted/60 ml-4"})]}),c.jsx(fe,{className:"accordion-chevron h-4 w-4"})]})}),c.jsxs(qe,{className:"accordion-content text-sm leading-6",children:[n.endpoint==="media_contents"&&c.jsx(ie,{data:o}),n.endpoint==="organizations"&&c.jsx(ce,{data:o}),n.endpoint==="people"&&c.jsx(se,{data:o}),n.endpoint==="places"&&c.jsx(le,{data:o}),n.endpoint==="taxonomies"&&c.jsx(de,{data:o})]})]},n.endpoint)})}),Ye=G;G.__docgenInfo={description:"This component renders the passed list of related items in an accordion fashion.",methods:[],displayName:"RelatedItemsList",props:{items:{required:!0,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  endpoint: string,
  ui_label: string,
  default_open?: boolean,
  data?: AnnotationPage<Annotation>,
  error?: Error
}`,signature:{properties:[{key:"endpoint",value:{name:"string",required:!0}},{key:"ui_label",value:{name:"string",required:!0}},{key:"default_open",value:{name:"boolean",required:!1}},{key:"data",value:{name:"signature",type:"object",raw:`{
  '@context': 'http://www.w3.org/ns/anno.jsonld';
  id: string;
  type: 'AnnotationPage';
  partOf: {
    id: string;
    label: string;
    total: number;
  };
  items: Annotation<T>[];
}`,signature:{properties:[{key:"@context",value:{name:"literal",value:"'http://www.w3.org/ns/anno.jsonld'",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"type",value:{name:"literal",value:"'AnnotationPage'",required:!0}},{key:"partOf",value:{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  total: number;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"total",value:{name:"number",required:!0}}]},required:!0}},{key:"items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}}]}}],raw:"Annotation<T>[]",required:!0}}]},required:!1}},{key:"error",value:{name:"Error",required:!1}}]}}],raw:"Array<RelatedItems>"},description:"A list of related items."}}};export{Ye as R};
