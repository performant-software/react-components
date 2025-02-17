import{j as n}from"./jsx-runtime-D9TvR9R2.js";import"./index-C0dDX-lL.js";import{i as S}from"./i18n-axRemAo9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./i18next-WuGp4vR6.js";import"./toPropertyKey-BcUJYDQU.js";import"./defineProperty-DcNpp85p.js";import"./classCallCheck-BNzALLS0.js";import"./createClass-BA4CoEfY.js";import"./inherits-DQ5KX8TJ.js";import"./assertThisInitialized-B9jnkVVz.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getPrototypeOf-BYVhAdwF.js";const d=1e3,h=2,o=({useStats:i,...m})=>{const{nbHits:c,processingTimeMS:p}=i(m),u=(p/d).toFixed(h);return n.jsx("div",{children:S.t("SearchStats.labels.results",{count:c,seconds:u})})},a=o;o.__docgenInfo={description:"This component is used with the `useStats` hook from Instant Search Hooks and renders a label of the number of\nrecords returned and the time it took to execute the request.",methods:[],displayName:"SearchStats",props:{useStats:{required:!0,flowType:{name:"signature",type:"function",raw:`(props: any) => ({
  nbHits: number,
  processingTimeMS: number
})`,signature:{arguments:[{name:"props",type:{name:"any"}}],return:{name:"signature",type:"object",raw:`{
  nbHits: number,
  processingTimeMS: number
}`,signature:{properties:[{key:"nbHits",value:{name:"number",required:!0}},{key:"processingTimeMS",value:{name:"number",required:!0}}]}}}},description:"Instant-Search hook to provide search statistic values."}}};const v={title:"Components/Semantic UI/SearchStats",component:a},e=()=>n.jsx(a,{useStats:()=>({nbHits:389427834,processingTimeMS:385})});e.__docgenInfo={description:"",methods:[],displayName:"Default"};var t,s,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => <SearchStats useStats={() => ({
  nbHits: 389427834,
  processingTimeMS: 385
})} />`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const q=["Default"];export{e as Default,q as __namedExportsOrder,v as default};
