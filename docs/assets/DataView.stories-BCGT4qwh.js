import{j as i}from"./jsx-runtime-BTCK_S7S.js";import{d as X}from"./index-BuPRY1M-.js";import{r as s}from"./index-CBqU2yxZ.js";import{_ as a}from"./index-default-C_maRo4o.js";import{c as ie}from"./index.es33-DmryshtJ.js";import{a as R}from"./index-B7gOQl76.js";import{F as j}from"./Form-fErk-qk_.js";import{G as M}from"./Grid-Czr5owxQ.js";import{M as x}from"./Modal-Bz2VEyQG.js";import{D as oe}from"./DataTable-CXlk1Mvn.js";import{D as le}from"./DropdownButton-D3g-r0e9.js";import{i as S}from"./i18n-DOVQ27W-.js";import{M as pe}from"./MenuBar-0zX1-Zh0.js";import{M as ue}from"./MenuSidebar-btOdA7yG.js";import{u as me,a as D,S as I}from"./DataList-CpH7bZLF.js";import{u as q}from"./DragDrop-ryAVAQMJ.js";import"./mapValues-LQZI9uWW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./pickBy-Us6u5-To.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./isPlainObject-DCkRKKtx.js";import"./index-Cw1G72V2.js";import"./index-CKJfshIT.js";import"./tiny-invariant.cjs-DxxScMW_.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./preview-errors-CzpZmerH.js";import"./debounce-BkgZrIul.js";import"./index-DZGZymok.js";import"./iframe-C52gK9Gy.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-CckcRzoH.js";import"./Button-Blq7Z6RX.js";import"./Icon-2tEtgK8g.js";import"./Label-Cq1fb1cd.js";import"./ModernAutoControlledComponent-DJBWk5EW.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-CQoJOerW.js";import"./toFinite-KQ8KevIC.js";import"./forEach-CXlln0XP.js";import"./Dimmer-D_gwaesu.js";import"./Portal-DvhHJPzU.js";import"./keyboardKey-OMDgGVm3.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-B4PnIEPz.js";import"./Checkbox-C9uAfnsM.js";import"./_baseSet-6y0qliU9.js";import"./_baseAssignValue-izmKBXUH.js";import"./Dropdown-Di2cPjwR.js";import"./without-BP-mqg2K.js";import"./isArrayLikeObject-CbXKTyfk.js";import"./isEmpty-Cyb9hIKi.js";import"./deburr-CEfyoYOr.js";import"./index-BBpNyw-T.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-CVNi8iPS.js";import"./Input--hQVCRQV.js";import"./index.es3-B3n2BlTn.js";import"./Table-Xx3vjhN9.js";import"./Loader-CooidObp.js";import"./Popup-BP01NTlV.js";import"./createClass-D2z1h_eG.js";import"./toPropertyKey-hKuLU48H.js";import"./Draggable-KQRXc-DM.js";import"./useDrop-BRQoWSA5.js";import"./DndContext-B-2NJP7Z.js";import"./redux-C8f_Y06i.js";import"./objectSpread2-N4c0DWqo.js";import"./defineProperty-CCxoMnQV.js";import"./ListSession-hS-NIzK1.js";import"./List-Ba4lZAs9.js";import"./Confirm-Dw9rt56R.js";import"./Transition-DSFEXhCu.js";import"./Pagination-D0HmnRDL.js";import"./Menu-9i0apxqd.js";import"./Header-BJ3NNdPz.js";import"./EditModal-CfixZcA5.js";import"./Message-3p6wyYpA.js";import"./Toaster-C1YYqOUE.js";import"./AssociatedDropdown-BAohY5fQ.js";import"./FuzzyDate-B9oguqxO.js";import"./DateInput-BO57_F9J.js";import"./Trans-BENHr9Q7.js";import"./objectWithoutProperties--RY0eV0u.js";import"./defineProperty-CGC-R-Bs.js";import"./defineProperty-BYUWwell.js";import"./utils-C_6BAdFC.js";import"./createClass-CyHhwgEe.js";import"./i18next-Sc0HEOoc.js";import"./inherits-D5wXBZoG.js";import"./getPrototypeOf-BYVhAdwF.js";import"./uuid-BH6G0oTz.js";const ce=me(t=>{const[e,_]=s.useState(),d=s.useCallback(l=>{const u={...l};e&&e.value===l.value&&(u.direction=e.direction===D?I:D),_(u)},[t.sorts,e]);return s.useEffect(()=>{e&&t.onSort(e.value,e.direction,t.page)},[e]),s.useEffect(()=>{const{page:l}=t;let{sortColumn:u="",sortDirection:V=I}=t;if(!u){const m=a.first(t.sort);m&&(u=m.value,m.direction&&(V=m.direction))}t.onSort(u,V,l)},[]),i.jsx(oe,{...t,renderListHeader:()=>t.sorts&&i.jsx(le,{basic:!0,icon:e&&e.direction===D?"sort alphabet down":"sort alphabet up",onChange:()=>{},options:a.map(t.sorts,l=>({key:l.value,value:l.value,text:l.label,onClick:()=>d(l)})),text:e?S.t("DataView.labels.sortBy",{column:e.label}):S.t("DataView.labels.noSort"),value:e&&e.value}),tableProps:{...t.tableProps||{},celled:!0}})}),c=t=>{const[e,_]=s.useState(),[d,l]=s.useState(),[u,V]=s.useState([]),[m,C]=s.useState([]),[Y,Z]=s.useState(),[ee,te]=s.useState(),v=s.useRef(),T=s.useMemo(()=>{let o="";return e&&(o=e.url.substr(e.url.lastIndexOf("/")+1,e.url.length)),o},[e]),E=s.useCallback(o=>{if(!e)return[];const r=a.chain(o).map(p=>a.keys(p)).flatten().uniq().value();let n=a.map(r,(p,g)=>{const re=a.findWhere(e.columns,{name:p})||{},se={name:p,label:p.trim().replace(/^\w/,w=>w.toUpperCase()).replaceAll("_"," "),sortable:!1,resolve:w=>A(w,p),hidden:g>t.columnCount,index:g};return a.extend(se,re)});return n=[...n,...a.reject(e.columns,p=>a.contains(r,p.name))],a.sortBy(n,"index")},[e]),ae=s.useCallback(o=>{e&&R.get(`${e.url}/${o.id}`).then(({data:r})=>{const n=a.first(a.keys(r));l(r[n])}).catch(()=>{l(o)})},[e]),ne=s.useCallback(o=>{let r;return e?r=R.get(e.url,{params:o}).then(n=>{const p=n.data[T];return V(E(p)),n}):r=Promise.resolve(),r},[e]),A=s.useCallback((o,r)=>{let n=o[r];return a.isArray(n)?n=a.size(n):a.isBoolean(n)?n=(!!n).toString():a.isObject(n)&&(n=n[a.first(a.keys(n))]),n},[]);return s.useEffect(()=>{if(!a.every(t.items,r=>!!r.group))C(t.items);else{const r=a.groupBy(t.items,"group"),n=a.keys(r);C(a.map(n,p=>({content:p,items:a.map(r[p],g=>({active:e&&e.id===g.id,content:g.label,onClick:()=>_(g)}))})))}},[e,t.items]),s.useEffect(()=>{t.items&&t.items.length&&_(a.first(t.items))},[t.items]),s.useEffect(()=>{t.layout==="left"&&v&&v.current&&Z(v.current.offsetWidth)},[v,t.layout]),s.useEffect(()=>{const o=[];e&&o.push(e.id),u&&u.length&&o.push(...a.pluck(u,"name")),te(o.join(""))},[e,u]),i.jsxs("div",{className:"data-view",children:[t.layout==="top"&&i.jsx(pe,{header:{content:t.title},items:m}),t.layout==="left"&&i.jsx(ue,{contextRef:v,header:{content:t.title},items:m}),i.jsx("div",{style:{marginLeft:Y},children:e&&i.jsx(ce,{actions:[{name:"details",icon:"info",onClick:ae}],collectionName:T,columns:u,onLoad:ne,perPageOptions:[10,25,50,100],searchable:!0,sorts:e.sorts},ee)}),d&&i.jsx(ie.Consumer,{children:o=>i.jsxs(x,{as:j,centered:!1,className:"data-view-modal",closeIcon:!0,mountNode:o,onClose:()=>l(null),open:!0,children:[i.jsx(x.Header,{content:S.t("DataView.labels.details")}),i.jsx(x.Content,{children:i.jsx(M,{columns:3,doubling:!0,children:a.map(E([d]),r=>i.jsxs(M.Column,{as:j.Field,children:[i.jsx("span",{className:"label",children:r.label}),A(d,r.name)]},r.name))})})]})})]})};c.defaultProps={columnCount:5,layout:"left"};c.__docgenInfo={description:"",methods:[],displayName:"DataView",props:{columnCount:{required:!1,flowType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}},items:{required:!0,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Array<Sort>",required:!1}}]}}],raw:"Array<Item>"},description:""},layout:{required:!1,flowType:{name:"union",raw:"'top' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'left'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},title:{required:!0,flowType:{name:"string"},description:""}}};const Zt={title:"Components/Semantic UI/DataView",decorators:[X.withKnobs]},h=q(()=>i.jsx(c,{items:[{id:"variants",group:"Text",label:"Variants",url:"https://evq-staging.herokuapp.com/api/variants"},{id:"annotations",group:"Text",label:"Annotations",url:"https://evq-staging.herokuapp.com/api/annotations"},{id:"manuals",group:"Resources",label:"Manuals",url:"https://evq-staging.herokuapp.com/api/manuals"},{id:"transmissions",group:"Resources",label:"Transmissions",url:"https://evq-staging.herokuapp.com/api/transmissions"},{id:"principles",group:"Resources",label:"Principles",url:"https://evq-staging.herokuapp.com/api/principles"},{id:"variant_types",group:"Vocabulary",label:"Variant Types",url:"https://evq-staging.herokuapp.com/api/variant_types"}],title:"EVQ"})),b=q(()=>i.jsx(c,{items:[{id:"variants",group:"Text",label:"Variants",url:"https://evq-staging.herokuapp.com/api/variants"},{id:"annotations",group:"Text",label:"Annotations",url:"https://evq-staging.herokuapp.com/api/annotations"},{id:"manuals",group:"Resources",label:"Manuals",url:"https://evq-staging.herokuapp.com/api/manuals"},{id:"transmissions",group:"Resources",label:"Transmissions",url:"https://evq-staging.herokuapp.com/api/transmissions"},{id:"principles",group:"Resources",label:"Principles",url:"https://evq-staging.herokuapp.com/api/principles"},{id:"variant_types",group:"Vocabulary",label:"Variant Types",url:"https://evq-staging.herokuapp.com/api/variant_types"}],layout:"top",title:"EVQ"})),y=q(()=>i.jsx(c,{items:[{id:"variants",group:"Text",label:"Variants",url:"https://evq-staging.herokuapp.com/api/variants",columns:[{name:"id",label:"ID",sortable:!0},{name:"chapters.number",label:"Chapter",resolve:t=>t.chapter,sortable:!0},{name:"verses.number",label:"Verse",resolve:t=>t.verse,sortable:!0},{name:"arabic_with_vowels",label:"Arabic",sortable:!0},{name:"roman_transliteration",label:"Roman",sortable:!0},{name:"status",label:"Status",sortable:!0},{name:"variant_types",label:"Type",resolve:t=>a.map(t.variant_types_variants,e=>e.variant_type.abbreviation),sortable:!0},{name:"attachments",label:"Attachments",resolve:t=>a.size(t.attachments),sortable:!1}]},{id:"annotations",group:"Text",label:"Annotations",url:"https://evq-staging.herokuapp.com/api/annotations",columns:[{name:"id",label:"ID",sortable:!0},{name:"variants.arabic_with_vowels",label:"Arabic",resolve:t=>t.variant.arabic_with_vowels,sortable:!0}]}],layout:X.select("Layout",["top","left"],"left"),title:"EVQ"})),f=q(()=>i.jsx(c,{items:[{id:"variants",group:"Text",label:"Variants",url:"https://evq-staging.herokuapp.com/api/variants",sorts:[{label:"Chapter/Verse",value:"chapter_verse"}]},{id:"annotations",group:"Text",label:"Annotations",url:"https://evq-staging.herokuapp.com/api/annotations"},{id:"manuals",group:"Resources",label:"Manuals",url:"https://evq-staging.herokuapp.com/api/manuals"},{id:"transmissions",group:"Resources",label:"Transmissions",url:"https://evq-staging.herokuapp.com/api/transmissions"},{id:"principles",group:"Resources",label:"Principles",url:"https://evq-staging.herokuapp.com/api/principles"},{id:"variant_types",group:"Vocabulary",label:"Variant Types",url:"https://evq-staging.herokuapp.com/api/variant_types"}],title:"EVQ"})),k=q(()=>i.jsx(c,{items:[{id:"sites",group:"CMS",label:"Sites",url:"https://admin-staging.archnet.org/api/sites"},{id:"authorities",group:"CMS",label:"Authorities",url:"https://admin-staging.archnet.org/api/authorities"}],title:"EVQ"}));h.__docgenInfo={description:"",methods:[],displayName:"Default"};b.__docgenInfo={description:"",methods:[],displayName:"TopMenuBar"};y.__docgenInfo={description:"",methods:[],displayName:"ColumnCustomization"};f.__docgenInfo={description:"",methods:[],displayName:"Sorting"};k.__docgenInfo={description:"",methods:[],displayName:"DetailView"};var N,P,B;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`useDragDrop(() => <DataView items={[{
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
}]} title='EVQ' />)`,...(J=($=k.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};const ea=["Default","TopMenuBar","ColumnCustomization","Sorting","DetailView"];export{y as ColumnCustomization,h as Default,k as DetailView,f as Sorting,b as TopMenuBar,ea as __namedExportsOrder,Zt as default};
