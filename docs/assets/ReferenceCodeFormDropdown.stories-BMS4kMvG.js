import{j as o}from"./jsx-runtime-D9TvR9R2.js";import{r as y}from"./index-C0dDX-lL.js";import{d as M}from"./index-DxpkBmlp.js";import{a as q}from"./chunk-WFFRPTHA-B2vgThZf.js";import{F as m}from"./Form-WfNl3YLh.js";import{d as I,t as P,h as k}from"./index.es99-DHEU8n1t.js";import{r as a,c as j}from"./index.es33-DSN9ZGA_.js";import"./index-DOYXiIEK.js";import{R as S}from"./ReferenceCodeDropdown-BOBIJbpx.js";import{i as s,R as K}from"./ReferenceCodeFormLabel-f7-xGcI5.js";import{H as E}from"./Header-BHdMo175.js";import{M as l}from"./Modal-BWgkEMr1.js";import{s as $}from"./index.es14-sXrCc356.js";import{u as A}from"./DragDrop-BuEYQASG.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-BXr-GEgA.js";import"./pickBy-ILmh4CwI.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./isPlainObject-CVmyTvcu.js";import"./index-Cw1G72V2.js";import"./index-CKJfshIT.js";import"./tiny-invariant.cjs-DxxScMW_.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./preview-errors-CzpZmerH.js";import"./debounce-C2QphL08.js";import"./v4-D8aEg3BZ.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BSRayMAs.js";import"./Button-CJhT71wt.js";import"./Icon-C_3d7-zE.js";import"./Label-aEFd48OX.js";import"./ModernAutoControlledComponent-C211dBIC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-Cc_HXDPA.js";import"./toFinite-C3oJXAtX.js";import"./forEach-CLeEMxs1.js";import"./Dimmer-DP3fvqlo.js";import"./Portal-B8DXQ6EK.js";import"./keyboardKey-OMDgGVm3.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-DWKMCCtW.js";import"./Checkbox-B3tsCUtI.js";import"./_baseSet-BllfnHSO.js";import"./_baseAssignValue-UQlBDUKN.js";import"./Dropdown-DwNow7wJ.js";import"./without-Duh6Zu7H.js";import"./isArrayLikeObject-Bl_bAmop.js";import"./isEmpty-CY-Bv0TY.js";import"./deburr-CNLr_JRW.js";import"./index-mbjjMjCk.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-B6f9p5im.js";import"./Input-Bwh_HEb3.js";import"./index.es3-BvKC9RLR.js";import"./index.es2-0Gayd7D4.js";import"./index.es27-DQCJ81LM.js";import"./index.es11-CDIfCsDR.js";import"./useDrop-Bls-awrw.js";import"./DndContext-BcAF8WvB.js";import"./redux-CpmcZR8k.js";import"./objectSpread2-Cl-ctlOG.js";import"./defineProperty-DcNpp85p.js";import"./toPropertyKey-BcUJYDQU.js";import"./index.es24-xvj8T6Jl.js";import"./iframe-D5Hv911n.js";import"../sb-preview/runtime.js";import"./index-default-C_maRo4o.js";import"./Popup-BfkG08Zy.js";import"./createClass-CV9nCQMI.js";import"./inherits-CWPG5jll.js";import"./getPrototypeOf-BYVhAdwF.js";import"./toArray-DwAYNham.js";import"./nonIterableRest-QXsEjLJN.js";import"./iterableToArray-DI-mZnTP.js";const N=(e,r)=>e&&r&&e.toString().toLowerCase().includes(r.toString().toLowerCase()),L=e=>a.isNumber(e)||a.isBoolean(e)?e:e||"",B=(e,r)=>e?!r||r>e.length?e:e.substring(0,r).trim():null,H={includes:N,toString:L,truncate:B},h=(e,r,n,i)=>{if(!a.has(n,i))return;const t=n[i];a.isArray(t)?a.each(t,(d,c)=>h(e,`${r}[${i}]`,t,c)):a.isObject(t)&&!a.isFunction(t)?a.each(a.keys(t),d=>h(e,`${r}[${i}]`,t,d)):e.append(`${r}[${i}]`,H.toString(t))},O={setAttribute:h};class g{constructor(){if(this.constructor===g)throw new TypeError('Abstract class "NestedAttributesTransform" cannot be instantiated directly.')}getPayloadKeys(){return[]}toFormData(r,n,i,t){a.each(i[t],(d,c)=>{a.each(this.getPayloadKeys(),p=>{O.setAttribute(r,`${n}[${t}][${c}]`,d,p)})})}toPayload(r,n){return{[n]:a.map(r[n],(i,t)=>({order:t,...a.pick(i,this.getPayloadKeys())}))}}}const _=e=>o.jsx(j.Consumer,{children:r=>o.jsxs(l,{as:m,centered:!1,mountNode:r,open:!0,children:[o.jsx(l.Header,{content:e.item.id?s.t("ReferenceCodeModal.title.edit"):s.t("ReferenceCodeModal.title.add")}),o.jsx(l.Content,{children:o.jsx(m.Input,{autoFocus:!0,error:e.isError("name"),label:s.t("ReferenceCodeModal.labels.name"),onChange:e.onTextInputChange.bind(void 0,"name"),required:e.isRequired("name"),value:e.item.name})}),e.children]})});_.__docgenInfo={description:"",methods:[],displayName:"ReferenceCodeModal"};const w=e=>o.jsx(j.Consumer,{children:r=>o.jsxs(l,{as:m,centered:!1,className:"reference-table-modal",mountNode:r,open:!0,children:[o.jsx(l.Header,{content:e.item.id?s.t("ReferenceTableModal.title.edit"):s.t("ReferenceTableModal.title.add")}),o.jsxs(l.Content,{children:[o.jsx(m.Input,{autoFocus:!0,error:e.isError("name"),label:s.t("ReferenceTableModal.labels.name"),onChange:e.onTextInputChange.bind(void 0,"name"),required:e.isRequired("name"),value:e.item.name}),o.jsx(m.Input,{error:e.isError("key"),label:s.t("ReferenceTableModal.labels.key"),onChange:e.onTextInputChange.bind(void 0,"key"),required:e.isRequired("key"),value:e.item.key}),o.jsx(E,{content:s.t("ReferenceTableModal.labels.referenceCodes")}),o.jsx(I,{actions:[{name:"edit"},{name:"copy"},{name:"delete"}],columns:[{name:"name",label:s.t("ReferenceTableModal.referenceCodes.columns.name")}],items:e.item.reference_codes,modal:{component:_,props:{required:["name"]}},onDelete:e.onDeleteChildAssociation.bind(void 0,"reference_codes"),onSave:e.onSaveChildAssociation.bind(void 0,"reference_codes")})]}),e.children]})});w.__docgenInfo={description:"",methods:[],displayName:"ReferenceTableModal"};class U extends g{getPayloadKeys(){return["id","name","_destroy"]}toPayload(r,n="reference_codes"){return super.toPayload(r,n)}}const z=new U;class V extends P{getParameterName(){return"reference_table"}getPayloadKeys(){return["name","key"]}toPayload(r,n={}){return super.toPayload(r,{...n,...z.toPayload(r)})}}const G=new V;class J extends ${fetchByKey(r){return this.getAxios().get(`${this.getBaseUrl()}/find_by_key`,{params:{key:r}})}getBaseUrl(){return"/controlled_vocabulary/reference_tables"}getTransform(){return G}}const C=new J,D=e=>{const{error:r,label:n,required:i,referenceTable:t,...d}=e,[c,p]=y.useState(!1),[v,F]=y.useState(0);return o.jsxs(o.Fragment,{children:[o.jsx(m.Input,{error:r,label:o.jsx(K,{label:n,onClick:()=>p(!0),referenceTable:t}),required:i,children:y.createElement(S,{...d,id:t,referenceTable:t,key:v})}),c&&o.jsx(k,{component:w,item:{id:t,key:t},onClose:()=>p(!1),onInitialize:b=>C.fetchByKey(b).then(({data:u})=>({...u.reference_table,key:b})),onSave:b=>C.save(b).then(({data:u})=>u.reference_table).then(()=>F(u=>u+1)).finally(()=>p(!1))})]})};D.__docgenInfo={description:"",methods:[],displayName:"ReferenceCodeFormDropdown",props:{error:{required:!1,flowType:{name:"boolean"},description:""},label:{required:!1,flowType:{name:"string"},description:""},required:{required:!1,flowType:{name:"boolean"},description:""},referenceTable:{required:!0,flowType:{name:"string"},description:""}}};const hr={title:"Components/Controlled Vocabulary/ReferenceCodeFormDropdown",decorators:[M.withKnobs]},f=A(()=>o.jsx(m,{children:o.jsx(D,{fluid:!0,label:"Locations",required:!0,onChange:q("change"),referenceTable:"locations",value:""})}));f.__docgenInfo={description:"",methods:[],displayName:"Default"};var x,R,T;f.parameters={...f.parameters,docs:{...(x=f.parameters)==null?void 0:x.docs,source:{originalSource:`useDragDrop(() => <Form>
    <ReferenceCodeFormDropdown fluid label='Locations' required onChange={action('change')} referenceTable='locations' value='' />
  </Form>)`,...(T=(R=f.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};const gr=["Default"];export{f as Default,gr as __namedExportsOrder,hr as default};
