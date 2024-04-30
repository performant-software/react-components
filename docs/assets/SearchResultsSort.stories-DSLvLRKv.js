import{j as o}from"./jsx-runtime-D9TvR9R2.js";import{a as b}from"./chunk-WFFRPTHA-B2vgThZf.js";import{r as S}from"./index-C0dDX-lL.js";import{_ as i}from"./index-default-C_maRo4o.js";import{D as h}from"./DropdownButton-BOdm4mkS.js";import"./preview-errors-CzpZmerH.js";import"./index-CKJfshIT.js";import"./v4-D8aEg3BZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-CJhT71wt.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BSRayMAs.js";import"./Icon-C_3d7-zE.js";import"./Label-aEFd48OX.js";import"./ModernAutoControlledComponent-C211dBIC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-Cc_HXDPA.js";import"./toFinite-C3oJXAtX.js";import"./forEach-CLeEMxs1.js";import"./Dimmer-DP3fvqlo.js";import"./Portal-B8DXQ6EK.js";import"./keyboardKey-OMDgGVm3.js";import"./index-DOYXiIEK.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-DWKMCCtW.js";import"./Dropdown-DwNow7wJ.js";import"./without-Duh6Zu7H.js";import"./isArrayLikeObject-Bl_bAmop.js";import"./isEmpty-CY-Bv0TY.js";import"./deburr-CNLr_JRW.js";import"./index-mbjjMjCk.js";import"./_baseSet-BllfnHSO.js";import"./_baseAssignValue-UQlBDUKN.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-B6f9p5im.js";const R="sort alphabet up",k="sort alphabet down",_="desc",l=({useSortBy:n,...c})=>{const{currentRefinement:d,options:a,refine:g}=n(c),{label:v,value:t}=i.findWhere(a,{value:d})||i.first(a),y=S.useMemo(()=>t&&t.endsWith(_)?k:R,[t]);return o.jsx(h,{basic:!0,icon:y,onChange:(e,f)=>g(f.value),options:i.map(a,e=>({key:e.value,value:e.value,text:e.description||e.label})),text:v,value:t})},p=l;l.__docgenInfo={description:"",methods:[],displayName:"SearchResultsSort",props:{useSortBy:{required:!0,flowType:{name:"signature",type:"function",raw:`(props: any) => ({
  currentRefinement: string,
  options: Array<{ label: string, value: string}>,
  refine: (value: string) => void
})`,signature:{arguments:[{name:"props",type:{name:"any"}}],return:{name:"signature",type:"object",raw:`{
  currentRefinement: string,
  options: Array<{ label: string, value: string}>,
  refine: (value: string) => void
}`,signature:{properties:[{key:"currentRefinement",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string, value: string}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Array<{ label: string, value: string}>",required:!0}},{key:"refine",value:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{name:"value",type:{name:"string"}}],return:{name:"void"}},required:!0}}]}}}},description:"Instant-Search hook to provide sort by values."},items:{required:!0,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string, value: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Array<{ label: string, value: string }>"},description:"A list of label/value objects to use as the dropdown options."}}};const se={title:"Components/Semantic UI/SearchResultsSort",component:p},r=()=>o.jsx("div",{style:{minHeight:"400px"},children:o.jsx(p,{items:[{label:"Make",value:"make"},{label:"Model",value:"model"},{label:"Year",value:"year"}],useSortBy:({items:n})=>({currentRefinement:"make",options:n,refine:b("refine")})})});r.__docgenInfo={description:"",methods:[],displayName:"Default"};var s,m,u;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`() => <div style={{
  minHeight: '400px'
}}>
    <SearchResultsSort items={[{
    label: 'Make',
    value: 'make'
  }, {
    label: 'Model',
    value: 'model'
  }, {
    label: 'Year',
    value: 'year'
  }]} useSortBy={({
    items
  }) => ({
    currentRefinement: 'make',
    options: items,
    refine: action('refine')
  })} />
  </div>`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const me=["Default"];export{r as Default,me as __namedExportsOrder,se as default};
