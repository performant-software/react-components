import{j as s}from"./jsx-runtime-D9TvR9R2.js";import{a as i}from"./chunk-WFFRPTHA-B2vgThZf.js";import{r as a}from"./index-C0dDX-lL.js";import{u as f}from"./index.es33-WTdoxfuD.js";import{I as N}from"./Icon-C_3d7-zE.js";import{I as Q}from"./Input-Bwh_HEb3.js";import{_ as y}from"./index-default-C_maRo4o.js";import"./preview-errors-CzpZmerH.js";import"./index-CKJfshIT.js";import"./v4-D8aEg3BZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DOYXiIEK.js";import"./iframe-Cg2f3cxX.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BSRayMAs.js";import"./includes-Cc_HXDPA.js";import"./toFinite-C3oJXAtX.js";import"./map-DWKMCCtW.js";import"./Label-aEFd48OX.js";import"./ModernAutoControlledComponent-C211dBIC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./forEach-CLeEMxs1.js";import"./Dimmer-DP3fvqlo.js";import"./Portal-B8DXQ6EK.js";import"./keyboardKey-OMDgGVm3.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./Button-CJhT71wt.js";const b=({useSearchBox:u,...e})=>{const{query:r,refine:p,clear:d,isSearchStalled:C}=u(e),[l,S]=a.useState(r),h=a.useRef(),j=a.useCallback(()=>{S(""),d();const{current:m}=h;m&&m.focus()},[d]),E=a.useCallback(()=>p(l),[p,l]);return s.jsx(Q,{...e,"aria-label":"Search",icon:s.jsx(N,{link:!y.isEmpty(r),name:y.isEmpty(r)?"search":"times",onClick:j}),input:{"aria-label":"search"},loading:C,onChange:(m,{value:D})=>S(D),onKeyDown:()=>f.clearSearchTimer(),onKeyUp:()=>f.setSearchTimer(E),ref:h,type:"text",value:l})},c=b;b.__docgenInfo={description:"This component is used with the `useSearchBox` function from Instant Search Hooks and renders an input element that\nwhen changed will execute a new query.",methods:[],displayName:"SearchBox",props:{useSearchBox:{required:!0,flowType:{name:"signature",type:"function",raw:`(props: any) => ({
  query: string,
  refine: (value: string) => void,
  clear: () => void,
  isSearchStalled: boolean
})`,signature:{arguments:[{name:"props",type:{name:"any"}}],return:{name:"signature",type:"object",raw:`{
  query: string,
  refine: (value: string) => void,
  clear: () => void,
  isSearchStalled: boolean
}`,signature:{properties:[{key:"query",value:{name:"string",required:!0}},{key:"refine",value:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{name:"value",type:{name:"string"}}],return:{name:"void"}},required:!0}},{key:"clear",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"isSearchStalled",value:{name:"boolean",required:!0}}]}}}},description:"Instant-Search hook to provide search box values."}}};const le={title:"Components/Semantic UI/SearchBox",component:c},t=()=>s.jsx(c,{useSearchBox:()=>({query:"",refine:i("refine"),clear:i("clear"),isSearchStalled:!1})}),n=()=>{const[u,e]=a.useState("");return s.jsx(c,{useSearchBox:()=>({query:u,refine:r=>e(r),clear:()=>e(""),isSearchStalled:!1})})},o=()=>s.jsx(c,{useSearchBox:()=>({query:"",refine:i("refine"),clear:i("clear"),isSearchStalled:!0})});t.__docgenInfo={description:"",methods:[],displayName:"Default"};n.__docgenInfo={description:"",methods:[],displayName:"Controlled"};o.__docgenInfo={description:"",methods:[],displayName:"Loading"};var g,x,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`() => <SearchBox useSearchBox={() => ({
  query: '',
  refine: action('refine'),
  clear: action('clear'),
  isSearchStalled: false
})} />`,...(v=(x=t.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var q,B,_;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const [query, setQuery] = useState('');
  return <SearchBox useSearchBox={() => ({
    query,
    refine: v => setQuery(v),
    clear: () => setQuery(''),
    isSearchStalled: false
  })} />;
}`,...(_=(B=n.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var I,k,w;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`() => <SearchBox useSearchBox={() => ({
  query: '',
  refine: action('refine'),
  clear: action('clear'),
  isSearchStalled: true
})} />`,...(w=(k=o.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const me=["Default","Controlled","Loading"];export{n as Controlled,t as Default,o as Loading,me as __namedExportsOrder,le as default};
