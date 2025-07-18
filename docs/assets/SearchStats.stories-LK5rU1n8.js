import{j as s}from"./iframe-BPWyo1ml.js";import{i as c}from"./i18n-DkobdbHY.js";import"./i18next-eNuDfwAU.js";const u=1e3,m=2,t=({useStats:r,...n})=>{const{nbHits:o,processingTimeMS:a}=r(n),i=(a/u).toFixed(m);return s.jsx("div",{children:c.t("SearchStats.labels.results",{count:o,seconds:i})})};t.__docgenInfo={description:"This component is used with the `useStats` hook from Instant Search Hooks and renders a label of the number of\nrecords returned and the time it took to execute the request.",methods:[],displayName:"SearchStats",props:{useStats:{required:!0,flowType:{name:"signature",type:"function",raw:`(props: any) => ({
  nbHits: number,
  processingTimeMS: number
})`,signature:{arguments:[{name:"props",type:{name:"any"}}],return:{name:"signature",type:"object",raw:`{
  nbHits: number,
  processingTimeMS: number
}`,signature:{properties:[{key:"nbHits",value:{name:"number",required:!0}},{key:"processingTimeMS",value:{name:"number",required:!0}}]}}}},description:"Instant-Search hook to provide search statistic values."}}};const h={title:"Components/Semantic UI/SearchStats",component:t},e=()=>s.jsx(t,{useStats:()=>({nbHits:389427834,processingTimeMS:385})});e.__docgenInfo={description:"",methods:[],displayName:"Default"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => <SearchStats useStats={() => ({
  nbHits: 389427834,
  processingTimeMS: 385
})} />`,...e.parameters?.docs?.source}}};const l=["Default"];export{e as Default,l as __namedExportsOrder,h as default};
