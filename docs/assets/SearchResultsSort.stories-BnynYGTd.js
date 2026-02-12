import{r as g,j as o}from"./iframe-Bo-cahqR.js";import{_ as i}from"./index-default-C0I3bBxV.js";import{D as v}from"./DropdownButton-D60zmmQG.js";import"./Button-SB7fr7Z_.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-CRLILEjs.js";import"./Icon-BdwMDjCJ.js";import"./Label-BKkK21JB.js";import"./ModernAutoControlledComponent-C-Nb76Z4.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-CXYr5d8-.js";import"./toFinite-BW88qEh4.js";import"./forEach-BywSwlPE.js";import"./Dimmer-Dl7JFx23.js";import"./Portal-BP_gGsLc.js";import"./keyboardKey-Dtyxm7HZ.js";import"./map-DChe9iis.js";import"./Dropdown-BNDo_500.js";import"./without-Cf7MvG2m.js";import"./isArrayLikeObject-DF49cagh.js";import"./isEmpty-C5Ivl5DO.js";import"./deburr-DixA-kuT.js";import"./index-B3Oe0SrK.js";import"./_baseSet-NwXeW_MD.js";import"./_baseAssignValue-fIFIdof2.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-MJ4DOGaK.js";const y="sort alphabet up",f="sort alphabet down",b="desc",s=({useSortBy:n,...u})=>{const{currentRefinement:l,options:a,refine:m}=n(u),{label:p,value:t}=i.findWhere(a,{value:l})||i.first(a),c=g.useMemo(()=>t&&t.endsWith(b)?f:y,[t]);return o.jsx(v,{basic:!0,icon:c,onChange:(e,d)=>m(d.value),options:i.map(a,e=>({key:e.value,value:e.value,text:e.description||e.label})),text:p,value:t})};s.__docgenInfo={description:"",methods:[],displayName:"SearchResultsSort",props:{useSortBy:{required:!0,flowType:{name:"signature",type:"function",raw:`(props: any) => ({
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
