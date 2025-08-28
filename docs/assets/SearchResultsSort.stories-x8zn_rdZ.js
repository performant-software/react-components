import{r as g,j as o}from"./iframe-Dxgww4-I.js";import{_ as i}from"./index-default-C0I3bBxV.js";import{D as v}from"./DropdownButton-CpJlI75e.js";import"./Button-BAz5K2o3.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-DI6MxAvz.js";import"./Icon-uY6W4AAl.js";import"./Label-C_-G-gvZ.js";import"./ModernAutoControlledComponent-r2wGn9JT.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-C3NGYjvp.js";import"./toFinite-CvM15p2j.js";import"./forEach-DlvoXqFD.js";import"./Dimmer-Ca1w9JQz.js";import"./Portal-eqdFawDV.js";import"./keyboardKey-dM6szfIV.js";import"./map-CAJquUSc.js";import"./Dropdown-BYLTKnCK.js";import"./without-HSl0ttEf.js";import"./isArrayLikeObject-W2l22Aw8.js";import"./isEmpty-D_N8I5LR.js";import"./deburr-CQhsUUSR.js";import"./index-CcCU3d88.js";import"./_baseSet-b64NfGVL.js";import"./_baseAssignValue-BDuEFu8J.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-Dn_nZP5s.js";const y="sort alphabet up",f="sort alphabet down",b="desc",s=({useSortBy:n,...u})=>{const{currentRefinement:l,options:a,refine:m}=n(u),{label:p,value:t}=i.findWhere(a,{value:l})||i.first(a),c=g.useMemo(()=>t&&t.endsWith(b)?f:y,[t]);return o.jsx(v,{basic:!0,icon:c,onChange:(e,d)=>m(d.value),options:i.map(a,e=>({key:e.value,value:e.value,text:e.description||e.label})),text:p,value:t})};s.__docgenInfo={description:"",methods:[],displayName:"SearchResultsSort",props:{useSortBy:{required:!0,flowType:{name:"signature",type:"function",raw:`(props: any) => ({
  currentRefinement: string,
  options: Array<{ label: string, value: string}>,
  refine: (value: string) => void
})`,signature:{arguments:[{name:"props",type:{name:"any"}}],return:{name:"signature",type:"object",raw:`{
  currentRefinement: string,
  options: Array<{ label: string, value: string}>,
  refine: (value: string) => void
}`,signature:{properties:[{key:"currentRefinement",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string, value: string}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Array<{ label: string, value: string}>",required:!0}},{key:"refine",value:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{name:"value",type:{name:"string"}}],return:{name:"void"}},required:!0}}]}}}},description:"Instant-Search hook to provide sort by values."},items:{required:!0,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string, value: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Array<{ label: string, value: string }>"},description:"A list of label/value objects to use as the dropdown options."}}};const{action:S}=__STORYBOOK_MODULE_ACTIONS__,Q={title:"Components/Semantic UI/SearchResultsSort",component:s},r=()=>o.jsx("div",{style:{minHeight:"400px"},children:o.jsx(s,{items:[{label:"Make",value:"make"},{label:"Model",value:"model"},{label:"Year",value:"year"}],useSortBy:({items:n})=>({currentRefinement:"make",options:n,refine:S("refine")})})});r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...r.parameters?.docs?.source}}};const V=["Default"];export{r as Default,V as __namedExportsOrder,Q as default};
