import{j as i}from"./jsx-runtime-D9TvR9R2.js";import{d as X}from"./index-CIF80Frz.js";import{r as s}from"./index-C0dDX-lL.js";import{_ as t}from"./index-default-C_maRo4o.js";import{c as ie}from"./index.es33-DTnWP-SW.js";import{a as R}from"./index-B7gOQl76.js";import{F as j}from"./Form-WfNl3YLh.js";import{G as M}from"./Grid-CpdbEkBf.js";import{M as x}from"./Modal-BWgkEMr1.js";import{D as oe}from"./DataTable-DLLybcrm.js";import{D as le}from"./DropdownButton-BOdm4mkS.js";import{i as S}from"./i18n-C9xJ7SCg.js";import{M as pe}from"./MenuBar-Dlfy4tcX.js";import{M as ue}from"./MenuSidebar-D9z-_GwB.js";import{u as me,a as D,S as I}from"./DataList-8347epOH.js";import{u as q}from"./DragDrop-BuEYQASG.js";import"./mapValues-BntjSFt6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./pickBy-CC7CsC_n.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./isPlainObject-D9-U-Vjl.js";import"./index-Cw1G72V2.js";import"./index-CKJfshIT.js";import"./tiny-invariant.cjs-DxxScMW_.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./preview-errors-CzpZmerH.js";import"./debounce-BANtZgGn.js";import"./index-DOYXiIEK.js";import"./iframe-DMjDEXrI.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BSRayMAs.js";import"./Button-CJhT71wt.js";import"./Icon-C_3d7-zE.js";import"./Label-aEFd48OX.js";import"./ModernAutoControlledComponent-C211dBIC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-Cc_HXDPA.js";import"./toFinite-C3oJXAtX.js";import"./forEach-CLeEMxs1.js";import"./Dimmer-DP3fvqlo.js";import"./Portal-B8DXQ6EK.js";import"./keyboardKey-OMDgGVm3.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-DWKMCCtW.js";import"./Checkbox-B3tsCUtI.js";import"./_baseSet-BllfnHSO.js";import"./_baseAssignValue-UQlBDUKN.js";import"./Dropdown-DwNow7wJ.js";import"./without-Duh6Zu7H.js";import"./isArrayLikeObject-Bl_bAmop.js";import"./isEmpty-CY-Bv0TY.js";import"./deburr-CNLr_JRW.js";import"./index-mbjjMjCk.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-B6f9p5im.js";import"./Input-Bwh_HEb3.js";import"./index.es3-DJGGdvro.js";import"./Table-fIf_AepQ.js";import"./Loader-lqR_Ikjg.js";import"./Popup-BfkG08Zy.js";import"./createClass-CV9nCQMI.js";import"./toPropertyKey-BcUJYDQU.js";import"./Draggable-DKUpfzgU.js";import"./useDrop-Bls-awrw.js";import"./DndContext-BcAF8WvB.js";import"./redux-CpmcZR8k.js";import"./objectSpread2-Cl-ctlOG.js";import"./defineProperty-DcNpp85p.js";import"./ListSession-hS-NIzK1.js";import"./List-CBmTSzIQ.js";import"./Confirm-BUdp95GX.js";import"./Transition-HA1Bivu3.js";import"./Pagination-CRHbXf2X.js";import"./Menu-C3RUPz9h.js";import"./Header-BHdMo175.js";import"./EditModal-Bi22wkKI.js";import"./Message-smmiVK7n.js";import"./Toaster-gMCa2mDU.js";import"./AssociatedDropdown-C43eFzo1.js";import"./FuzzyDate-B5_JOohA.js";import"./DateInput-Bc2PBuBh.js";import"./Trans-BYRLofKo.js";import"./objectWithoutProperties--RY0eV0u.js";import"./utils-DCllE6BU.js";import"./createClass-D0eOxKhW.js";import"./i18next-CwS9wMM1.js";import"./inherits-CWPG5jll.js";import"./getPrototypeOf-BYVhAdwF.js";import"./uuid-BH6G0oTz.js";const ce=me(a=>{const[e,_]=s.useState(),d=s.useCallback(l=>{const u={...l};e&&e.value===l.value&&(u.direction=e.direction===D?I:D),_(u)},[a.sorts,e]);return s.useEffect(()=>{e&&a.onSort(e.value,e.direction,a.page)},[e]),s.useEffect(()=>{const{page:l}=a;let{sortColumn:u="",sortDirection:V=I}=a;if(!u){const m=t.first(a.sort);m&&(u=m.value,m.direction&&(V=m.direction))}a.onSort(u,V,l)},[]),i.jsx(oe,{...a,renderListHeader:()=>a.sorts&&i.jsx(le,{basic:!0,icon:e&&e.direction===D?"sort alphabet down":"sort alphabet up",onChange:()=>{},options:t.map(a.sorts,l=>({key:l.value,value:l.value,text:l.label,onClick:()=>d(l)})),text:e?S.t("DataView.labels.sortBy",{column:e.label}):S.t("DataView.labels.noSort"),value:e&&e.value}),tableProps:{...a.tableProps||{},celled:!0}})}),c=a=>{const[e,_]=s.useState(),[d,l]=s.useState(),[u,V]=s.useState([]),[m,C]=s.useState([]),[Y,Z]=s.useState(),[ee,ae]=s.useState(),v=s.useRef(),T=s.useMemo(()=>{let o="";return e&&(o=e.url.substr(e.url.lastIndexOf("/")+1,e.url.length)),o},[e]),E=s.useCallback(o=>{if(!e)return[];const r=t.chain(o).map(p=>t.keys(p)).flatten().uniq().value();let n=t.map(r,(p,g)=>{const re=t.findWhere(e.columns,{name:p})||{},se={name:p,label:p.trim().replace(/^\w/,w=>w.toUpperCase()).replaceAll("_"," "),sortable:!1,resolve:w=>A(w,p),hidden:g>a.columnCount,index:g};return t.extend(se,re)});return n=[...n,...t.reject(e.columns,p=>t.contains(r,p.name))],t.sortBy(n,"index")},[e]),te=s.useCallback(o=>{e&&R.get(`${e.url}/${o.id}`).then(({data:r})=>{const n=t.first(t.keys(r));l(r[n])}).catch(()=>{l(o)})},[e]),ne=s.useCallback(o=>{let r;return e?r=R.get(e.url,{params:o}).then(n=>{const p=n.data[T];return V(E(p)),n}):r=Promise.resolve(),r},[e]),A=s.useCallback((o,r)=>{let n=o[r];return t.isArray(n)?n=t.size(n):t.isBoolean(n)?n=(!!n).toString():t.isObject(n)&&(n=n[t.first(t.keys(n))]),n},[]);return s.useEffect(()=>{if(!t.every(a.items,r=>!!r.group))C(a.items);else{const r=t.groupBy(a.items,"group"),n=t.keys(r);C(t.map(n,p=>({content:p,items:t.map(r[p],g=>({active:e&&e.id===g.id,content:g.label,onClick:()=>_(g)}))})))}},[e,a.items]),s.useEffect(()=>{a.items&&a.items.length&&_(t.first(a.items))},[a.items]),s.useEffect(()=>{a.layout==="left"&&v&&v.current&&Z(v.current.offsetWidth)},[v,a.layout]),s.useEffect(()=>{const o=[];e&&o.push(e.id),u&&u.length&&o.push(...t.pluck(u,"name")),ae(o.join(""))},[e,u]),i.jsxs("div",{className:"data-view",children:[a.layout==="top"&&i.jsx(pe,{header:{content:a.title},items:m}),a.layout==="left"&&i.jsx(ue,{contextRef:v,header:{content:a.title},items:m}),i.jsx("div",{style:{marginLeft:Y},children:e&&i.jsx(ce,{actions:[{name:"details",icon:"info",onClick:te}],collectionName:T,columns:u,onLoad:ne,perPageOptions:[10,25,50,100],searchable:!0,sorts:e.sorts},ee)}),d&&i.jsx(ie.Consumer,{children:o=>i.jsxs(x,{as:j,centered:!1,className:"data-view-modal",closeIcon:!0,mountNode:o,onClose:()=>l(null),open:!0,children:[i.jsx(x.Header,{content:S.t("DataView.labels.details")}),i.jsx(x.Content,{children:i.jsx(M,{columns:3,doubling:!0,children:t.map(E([d]),r=>i.jsxs(M.Column,{as:j.Field,children:[i.jsx("span",{className:"label",children:r.label}),A(d,r.name)]},r.name))})})]})})]})};c.defaultProps={columnCount:5,layout:"left"};c.__docgenInfo={description:"",methods:[],displayName:"DataView",props:{columnCount:{required:!1,flowType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}},items:{required:!0,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string,
  label: string,
  group?: string,
  columns?: Array<Column>,
  sorts?: Array<Sort>
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"group",value:{name:"string",required:!1}},{key:"columns",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  className?: string,
  hidden?: boolean,
  label?: string,
  name: string,
  render?: (item: any) => Element<any>,
  renderHeader?: (item: any) => Element<any>,
  resolve?: (item: any) => any,
  sortable: boolean
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"(item: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}},required:!1}},{key:"renderHeader",value:{name:"signature",type:"function",raw:"(item: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}},required:!1}},{key:"resolve",value:{name:"signature",type:"function",raw:"(item: any) => any",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"any"}},required:!1}},{key:"sortable",value:{name:"boolean",required:!0}}]}}],raw:"Array<Column>",required:!1}},{key:"sorts",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string,
  value: string
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Array<Sort>",required:!1}}]}}],raw:"Array<Item>"},description:""},layout:{required:!1,flowType:{name:"union",raw:"'top' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'left'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},title:{required:!0,flowType:{name:"string"},description:""}}};const Xa={title:"Components/Semantic UI/DataView",decorators:[X.withKnobs]},h=q(()=>i.jsx(c,{items:[{id:"variants",group:"Text",label:"Variants",url:"https://evq-staging.herokuapp.com/api/variants"},{id:"annotations",group:"Text",label:"Annotations",url:"https://evq-staging.herokuapp.com/api/annotations"},{id:"manuals",group:"Resources",label:"Manuals",url:"https://evq-staging.herokuapp.com/api/manuals"},{id:"transmissions",group:"Resources",label:"Transmissions",url:"https://evq-staging.herokuapp.com/api/transmissions"},{id:"principles",group:"Resources",label:"Principles",url:"https://evq-staging.herokuapp.com/api/principles"},{id:"variant_types",group:"Vocabulary",label:"Variant Types",url:"https://evq-staging.herokuapp.com/api/variant_types"}],title:"EVQ"})),b=q(()=>i.jsx(c,{items:[{id:"variants",group:"Text",label:"Variants",url:"https://evq-staging.herokuapp.com/api/variants"},{id:"annotations",group:"Text",label:"Annotations",url:"https://evq-staging.herokuapp.com/api/annotations"},{id:"manuals",group:"Resources",label:"Manuals",url:"https://evq-staging.herokuapp.com/api/manuals"},{id:"transmissions",group:"Resources",label:"Transmissions",url:"https://evq-staging.herokuapp.com/api/transmissions"},{id:"principles",group:"Resources",label:"Principles",url:"https://evq-staging.herokuapp.com/api/principles"},{id:"variant_types",group:"Vocabulary",label:"Variant Types",url:"https://evq-staging.herokuapp.com/api/variant_types"}],layout:"top",title:"EVQ"})),y=q(()=>i.jsx(c,{items:[{id:"variants",group:"Text",label:"Variants",url:"https://evq-staging.herokuapp.com/api/variants",columns:[{name:"id",label:"ID",sortable:!0},{name:"chapters.number",label:"Chapter",resolve:a=>a.chapter,sortable:!0},{name:"verses.number",label:"Verse",resolve:a=>a.verse,sortable:!0},{name:"arabic_with_vowels",label:"Arabic",sortable:!0},{name:"roman_transliteration",label:"Roman",sortable:!0},{name:"status",label:"Status",sortable:!0},{name:"variant_types",label:"Type",resolve:a=>t.map(a.variant_types_variants,e=>e.variant_type.abbreviation),sortable:!0},{name:"attachments",label:"Attachments",resolve:a=>t.size(a.attachments),sortable:!1}]},{id:"annotations",group:"Text",label:"Annotations",url:"https://evq-staging.herokuapp.com/api/annotations",columns:[{name:"id",label:"ID",sortable:!0},{name:"variants.arabic_with_vowels",label:"Arabic",resolve:a=>a.variant.arabic_with_vowels,sortable:!0}]}],layout:X.select("Layout",["top","left"],"left"),title:"EVQ"})),f=q(()=>i.jsx(c,{items:[{id:"variants",group:"Text",label:"Variants",url:"https://evq-staging.herokuapp.com/api/variants",sorts:[{label:"Chapter/Verse",value:"chapter_verse"}]},{id:"annotations",group:"Text",label:"Annotations",url:"https://evq-staging.herokuapp.com/api/annotations"},{id:"manuals",group:"Resources",label:"Manuals",url:"https://evq-staging.herokuapp.com/api/manuals"},{id:"transmissions",group:"Resources",label:"Transmissions",url:"https://evq-staging.herokuapp.com/api/transmissions"},{id:"principles",group:"Resources",label:"Principles",url:"https://evq-staging.herokuapp.com/api/principles"},{id:"variant_types",group:"Vocabulary",label:"Variant Types",url:"https://evq-staging.herokuapp.com/api/variant_types"}],title:"EVQ"})),k=q(()=>i.jsx(c,{items:[{id:"sites",group:"CMS",label:"Sites",url:"https://admin-staging.archnet.org/api/sites"},{id:"authorities",group:"CMS",label:"Authorities",url:"https://admin-staging.archnet.org/api/authorities"}],title:"EVQ"}));h.__docgenInfo={description:"",methods:[],displayName:"Default"};b.__docgenInfo={description:"",methods:[],displayName:"TopMenuBar"};y.__docgenInfo={description:"",methods:[],displayName:"ColumnCustomization"};f.__docgenInfo={description:"",methods:[],displayName:"Sorting"};k.__docgenInfo={description:"",methods:[],displayName:"DetailView"};var N,P,B;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`useDragDrop(() => <DataView items={[{
  id: 'variants',
  group: 'Text',
  label: 'Variants',
  url: 'https://evq-staging.herokuapp.com/api/variants'
}, {
  id: 'annotations',
  group: 'Text',
  label: 'Annotations',
  url: 'https://evq-staging.herokuapp.com/api/annotations'
}, {
  id: 'manuals',
  group: 'Resources',
  label: 'Manuals',
  url: 'https://evq-staging.herokuapp.com/api/manuals'
}, {
  id: 'transmissions',
  group: 'Resources',
  label: 'Transmissions',
  url: 'https://evq-staging.herokuapp.com/api/transmissions'
}, {
  id: 'principles',
  group: 'Resources',
  label: 'Principles',
  url: 'https://evq-staging.herokuapp.com/api/principles'
}, {
  id: 'variant_types',
  group: 'Vocabulary',
  label: 'Variant Types',
  url: 'https://evq-staging.herokuapp.com/api/variant_types'
}]} title='EVQ' />)`,...(B=(P=h.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var Q,L,z;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`useDragDrop(() => <DataView items={[{
  id: 'variants',
  group: 'Text',
  label: 'Variants',
  url: 'https://evq-staging.herokuapp.com/api/variants'
}, {
  id: 'annotations',
  group: 'Text',
  label: 'Annotations',
  url: 'https://evq-staging.herokuapp.com/api/annotations'
}, {
  id: 'manuals',
  group: 'Resources',
  label: 'Manuals',
  url: 'https://evq-staging.herokuapp.com/api/manuals'
}, {
  id: 'transmissions',
  group: 'Resources',
  label: 'Transmissions',
  url: 'https://evq-staging.herokuapp.com/api/transmissions'
}, {
  id: 'principles',
  group: 'Resources',
  label: 'Principles',
  url: 'https://evq-staging.herokuapp.com/api/principles'
}, {
  id: 'variant_types',
  group: 'Vocabulary',
  label: 'Variant Types',
  url: 'https://evq-staging.herokuapp.com/api/variant_types'
}]} layout='top' title='EVQ' />)`,...(z=(L=b.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var G,O,H;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`useDragDrop(() => <DataView items={[{
  id: 'variants',
  group: 'Text',
  label: 'Variants',
  url: 'https://evq-staging.herokuapp.com/api/variants',
  columns: [{
    name: 'id',
    label: 'ID',
    sortable: true
  }, {
    name: 'chapters.number',
    label: 'Chapter',
    resolve: variant => variant.chapter,
    sortable: true
  }, {
    name: 'verses.number',
    label: 'Verse',
    resolve: variant => variant.verse,
    sortable: true
  }, {
    name: 'arabic_with_vowels',
    label: 'Arabic',
    sortable: true
  }, {
    name: 'roman_transliteration',
    label: 'Roman',
    sortable: true
  }, {
    name: 'status',
    label: 'Status',
    sortable: true
  }, {
    name: 'variant_types',
    label: 'Type',
    resolve: variant => _.map(variant.variant_types_variants, vtv => vtv.variant_type.abbreviation),
    sortable: true
  }, {
    name: 'attachments',
    label: 'Attachments',
    resolve: variant => _.size(variant.attachments),
    sortable: false
  }]
}, {
  id: 'annotations',
  group: 'Text',
  label: 'Annotations',
  url: 'https://evq-staging.herokuapp.com/api/annotations',
  columns: [{
    name: 'id',
    label: 'ID',
    sortable: true
  }, {
    name: 'variants.arabic_with_vowels',
    label: 'Arabic',
    resolve: annotation => annotation.variant.arabic_with_vowels,
    sortable: true
  }]
}]} layout={select('Layout', ['top', 'left'], 'left')} title='EVQ' />)`,...(H=(O=y.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var F,K,U;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`useDragDrop(() => <DataView items={[{
  id: 'variants',
  group: 'Text',
  label: 'Variants',
  url: 'https://evq-staging.herokuapp.com/api/variants',
  sorts: [{
    label: 'Chapter/Verse',
    value: 'chapter_verse'
  }]
}, {
  id: 'annotations',
  group: 'Text',
  label: 'Annotations',
  url: 'https://evq-staging.herokuapp.com/api/annotations'
}, {
  id: 'manuals',
  group: 'Resources',
  label: 'Manuals',
  url: 'https://evq-staging.herokuapp.com/api/manuals'
}, {
  id: 'transmissions',
  group: 'Resources',
  label: 'Transmissions',
  url: 'https://evq-staging.herokuapp.com/api/transmissions'
}, {
  id: 'principles',
  group: 'Resources',
  label: 'Principles',
  url: 'https://evq-staging.herokuapp.com/api/principles'
}, {
  id: 'variant_types',
  group: 'Vocabulary',
  label: 'Variant Types',
  url: 'https://evq-staging.herokuapp.com/api/variant_types'
}]} title='EVQ' />)`,...(U=(K=f.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var W,$,J;k.parameters={...k.parameters,docs:{...(W=k.parameters)==null?void 0:W.docs,source:{originalSource:`useDragDrop(() => <DataView items={[{
  id: 'sites',
  group: 'CMS',
  label: 'Sites',
  url: 'https://admin-staging.archnet.org/api/sites'
}, {
  id: 'authorities',
  group: 'CMS',
  label: 'Authorities',
  url: 'https://admin-staging.archnet.org/api/authorities'
}]} title='EVQ' />)`,...(J=($=k.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};const Ya=["Default","TopMenuBar","ColumnCustomization","Sorting","DetailView"];export{y as ColumnCustomization,h as Default,k as DetailView,f as Sorting,b as TopMenuBar,Ya as __namedExportsOrder,Xa as default};
