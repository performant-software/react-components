import{r as g,j as o}from"./iframe-DRMZ9-Bm.js";import{_ as i}from"./index-default-C0I3bBxV.js";import{D as v}from"./DropdownButton-BxFNtx3F.js";import"./Button--EF-1GG4.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-ye_9U3qC.js";import"./_getPrototype-dFVwFHqx.js";import"./Icon-A6xm19GF.js";import"./Label-Cu-SmbVR.js";import"./ModernAutoControlledComponent-CsJgi2xT.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-B0usL8sZ.js";import"./toFinite-Dfj0KU41.js";import"./toNumber-DIkYOhwr.js";import"./forEach-DjQw-87f.js";import"./_arrayEach-DpGxo2Of.js";import"./Dimmer-DLTeYvXF.js";import"./Portal-C1SP_vCX.js";import"./keyboardKey-Kf-aWvgh.js";import"./map-DOTSIEg2.js";import"./Dropdown-DZPIcRR1.js";import"./without-bOt2uqeQ.js";import"./isArrayLikeObject-DSLl7ti9.js";import"./isEmpty-CIv_nSFx.js";import"./deburr-DZ0n5ble.js";import"./index-DJuidxH_.js";import"./_baseSet-CsW0VsBd.js";import"./_assignValue-wlBxhqFj.js";import"./_baseAssignValue-yJv1-bft.js";import"./_arrayReduce-CrxnWFSq.js";import"./isEqual-mHuJTF3G.js";import"./filter-Ckg0afcw.js";const y="sort alphabet up",f="sort alphabet down",b="desc",s=({useSortBy:n,...u})=>{const{currentRefinement:l,options:a,refine:m}=n(u),{label:p,value:t}=i.findWhere(a,{value:l})||i.first(a),c=g.useMemo(()=>t&&t.endsWith(b)?f:y,[t]);return o.jsx(v,{basic:!0,icon:c,onChange:(e,d)=>m(d.value),options:i.map(a,e=>({key:e.value,value:e.value,text:e.description||e.label})),text:p,value:t})};s.__docgenInfo={description:"",methods:[],displayName:"SearchResultsSort",props:{useSortBy:{required:!0,flowType:{name:"signature",type:"function",raw:`(props: any) => ({
  currentRefinement: string,
  options: Array<{ label: string, value: string}>,
  refine: (value: string) => void
})`,signature:{arguments:[{name:"props",type:{name:"any"}}],return:{name:"signature",type:"object",raw:`{
  currentRefinement: string,
  options: Array<{ label: string, value: string}>,
  refine: (value: string) => void
}`,signature:{properties:[{key:"currentRefinement",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string, value: string}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Array<{ label: string, value: string}>",required:!0}},{key:"refine",value:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{name:"value",type:{name:"string"}}],return:{name:"void"}},required:!0}}]}}}},description:"Instant-Search hook to provide sort by values."},items:{required:!0,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string, value: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Array<{ label: string, value: string }>"},description:"A list of label/value objects to use as the dropdown options."}}};const{action:S}=__STORYBOOK_MODULE_ACTIONS__,ee={title:"Components/Semantic UI/SearchResultsSort",component:s},r=()=>o.jsx("div",{style:{minHeight:"400px"},children:o.jsx(s,{items:[{label:"Make",value:"make"},{label:"Model",value:"model"},{label:"Year",value:"year"}],useSortBy:({items:n})=>({currentRefinement:"make",options:n,refine:S("refine")})})});r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...r.parameters?.docs?.source}}};const re=["Default"];export{r as Default,re as __namedExportsOrder,ee as default};
