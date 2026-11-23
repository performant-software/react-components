import{r as a,j as s}from"./iframe-XscsSow5.js";import"./index.es28-WoOXI_HP.js";import{o as f}from"./index.es35-NGGuPWEW.js";import{I as q}from"./Icon-Jc1DkTXR.js";import{I as B}from"./Input-CYzG4HOR.js";import{_ as y}from"./index-default-C0I3bBxV.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-DanMEeNO.js";import"./_getPrototype-dFVwFHqx.js";import"./includes-CrtFdvd8.js";import"./toFinite-Dfj0KU41.js";import"./toNumber-DIkYOhwr.js";import"./map-DVRaliq8.js";import"./Label-CCz5ec4K.js";import"./ModernAutoControlledComponent-BAVxVyJQ.js";import"./assertThisInitialized-B9jnkVVz.js";import"./forEach-3klWIlrl.js";import"./_arrayEach-DpGxo2Of.js";import"./Dimmer-DeH6gG4C.js";import"./Portal-DxEuHn5T.js";import"./keyboardKey-eR6bitll.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./Button-yrPV9pFs.js";const i=({useSearchBox:u,...e})=>{const{query:r,refine:p,clear:d,isSearchStalled:g}=u(e),[l,S]=a.useState(r),h=a.useRef(),x=a.useCallback(()=>{S(""),d();const{current:m}=h;m&&m.focus()},[d]),v=a.useCallback(()=>p(l),[p,l]);return s.jsx(B,{...e,"aria-label":"Search",icon:s.jsx(q,{link:!y.isEmpty(r),name:y.isEmpty(r)?"search":"times",onClick:x}),input:{"aria-label":"search"},loading:g,onChange:(m,{value:_})=>S(_),onKeyDown:()=>f.clearSearchTimer(),onKeyUp:()=>f.setSearchTimer(v),ref:h,type:"text",value:l})};i.__docgenInfo={description:"This component is used with the `useSearchBox` function from Instant Search Hooks and renders an input element that\nwhen changed will execute a new query.",methods:[],displayName:"SearchBox",props:{useSearchBox:{required:!0,flowType:{name:"signature",type:"function",raw:`(props: any) => ({
  query: string,
  refine: (value: string) => void,
  clear: () => void,
  isSearchStalled: boolean
})`,signature:{arguments:[{name:"props",type:{name:"any"}}],return:{name:"signature",type:"object",raw:`{
  query: string,
  refine: (value: string) => void,
  clear: () => void,
  isSearchStalled: boolean
}`,signature:{properties:[{key:"query",value:{name:"string",required:!0}},{key:"refine",value:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{name:"value",type:{name:"string"}}],return:{name:"void"}},required:!0}},{key:"clear",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"isSearchStalled",value:{name:"boolean",required:!0}}]}}}},description:"Instant-Search hook to provide search box values."}}};const{action:c}=__STORYBOOK_MODULE_ACTIONS__,V={title:"Components/Semantic UI/SearchBox",component:i},n=()=>s.jsx(i,{useSearchBox:()=>({query:"",refine:c("refine"),clear:c("clear"),isSearchStalled:!1})}),t=()=>{const[u,e]=a.useState("");return s.jsx(i,{useSearchBox:()=>({query:u,refine:r=>e(r),clear:()=>e(""),isSearchStalled:!1})})},o=()=>s.jsx(i,{useSearchBox:()=>({query:"",refine:c("refine"),clear:c("clear"),isSearchStalled:!0})});n.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"Controlled"};o.__docgenInfo={description:"",methods:[],displayName:"Loading"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <SearchBox useSearchBox={() => ({
  query: '',
  refine: action('refine'),
  clear: action('clear'),
  isSearchStalled: false
})} />`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const [query, setQuery] = useState('');
  return <SearchBox useSearchBox={() => ({
    query,
    refine: v => setQuery(v),
    clear: () => setQuery(''),
    isSearchStalled: false
  })} />;
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <SearchBox useSearchBox={() => ({
  query: '',
  refine: action('refine'),
  clear: action('clear'),
  isSearchStalled: true
})} />`,...o.parameters?.docs?.source}}};const W=["Default","Controlled","Loading"];export{t as Controlled,n as Default,o as Loading,W as __namedExportsOrder,V as default};
