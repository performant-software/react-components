import{j as n}from"./jsx-runtime-BTCK_S7S.js";import"./index-CBqU2yxZ.js";import{i as S}from"./i18n-C8zWlANG.js";import"./_commonjsHelpers-BosuxZz1.js";import"./i18next-Sc0HEOoc.js";import"./toPropertyKey-hKuLU48H.js";import"./defineProperty-CCxoMnQV.js";import"./inherits-D5wXBZoG.js";import"./assertThisInitialized-B9jnkVVz.js";import"./setPrototypeOf-DgZC2w_0.js";import"./createClass-D2z1h_eG.js";import"./getPrototypeOf-BYVhAdwF.js";const d=1e3,h=2,o=({useStats:i,...m})=>{const{nbHits:c,processingTimeMS:p}=i(m),u=(p/d).toFixed(h);return n.jsx("div",{children:S.t("SearchStats.labels.results",{count:c,seconds:u})})},a=o;o.__docgenInfo={description:"This component is used with the `useStats` hook from Instant Search Hooks and renders a label of the number of\nrecords returned and the time it took to execute the request.",methods:[],displayName:"SearchStats",props:{useStats:{required:!0,flowType:{name:"signature",type:"function",raw:`(props: any) => ({
  nbHits: number,
  processingTimeMS: number
})`,signature:{arguments:[{name:"props",type:{name:"any"}}],return:{name:"signature",type:"object",raw:`{
  nbHits: number,
  processingTimeMS: number
}`,signature:{properties:[{key:"nbHits",value:{name:"number",required:!0}},{key:"processingTimeMS",value:{name:"number",required:!0}}]}}}},description:"Instant-Search hook to provide search statistic values."}}};const j={title:"Components/Semantic UI/SearchStats",component:a},e=()=>n.jsx(a,{useStats:()=>({nbHits:389427834,processingTimeMS:385})});e.__docgenInfo={description:"",methods:[],displayName:"Default"};var t,s,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => <SearchStats useStats={() => ({
  nbHits: 389427834,
  processingTimeMS: 385
})} />`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const v=["Default"];export{e as Default,v as __namedExportsOrder,j as default};