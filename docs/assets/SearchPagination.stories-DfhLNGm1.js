import{r as i,j as s}from"./iframe-BPWyo1ml.js";import{P as l}from"./Pagination-CbRRTClI.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./map-PCFjh3mh.js";import"./getElementType-_MvlUdE4.js";import"./ModernAutoControlledComponent-YfVkZAu6.js";import"./assertThisInitialized-B9jnkVVz.js";import"./_isIterateeCall-DxSKMYzS.js";import"./toFinite-TVPM6KGA.js";import"./Menu-BUQqxbK8.js";import"./_arrayReduce-CrxnWFSq.js";import"./deburr-DvXLs-DJ.js";import"./Icon-jme1Xn38.js";import"./keyboardKey-D0kxxHqZ.js";const r=({usePagination:o,...e})=>{const{currentRefinement:a,nbPages:u,refine:m}=o(e),p=i.useCallback((d,{activePage:c})=>m(c-1),[m]);return i.useEffect(()=>{e.scrollToTop&&window.scroll({top:0,behavior:"smooth"})},[a,e.scrollToTop]),u===0?null:s.jsx(l,{activePage:a+1,onPageChange:p,totalPages:u})};r.defaultProps={scrollToTop:!1};r.__docgenInfo={description:"This component is used with the `usePagination` hook from Instant Search Hooks and renders a list of page numbers\nthat can be selected by the user. If the `scrollToTop` prop is set to `true`, the window will scroll to the top\nafter applying a new value.",methods:[],displayName:"SearchPagination",props:{usePagination:{required:!0,flowType:{name:"signature",type:"function",raw:`(props: any) => ({
  currentRefinement: number,
  nbPages: number,
  refine: (value: number) => void
})`,signature:{arguments:[{name:"props",type:{name:"any"}}],return:{name:"signature",type:"object",raw:`{
  currentRefinement: number,
  nbPages: number,
  refine: (value: number) => void
}`,signature:{properties:[{key:"currentRefinement",value:{name:"number",required:!0}},{key:"nbPages",value:{name:"number",required:!0}},{key:"refine",value:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{name:"value",type:{name:"number"}}],return:{name:"void"}},required:!0}}]}}}},description:"Instant-Search hook to provide pagination values."},scrollToTop:{required:!1,flowType:{name:"boolean"},description:"If `true`, we'll scroll to the top of the page after applying the new page value.",defaultValue:{value:"false",computed:!1}}}};const{action:f}=__STORYBOOK_MODULE_ACTIONS__,O={title:"Components/Semantic UI/SearchPagination",component:r},n=()=>s.jsx(r,{usePagination:()=>({currentRefinement:0,nbPages:12,refine:f("refine")})}),t=()=>{const[o,e]=i.useState(0);return s.jsx(r,{usePagination:()=>({currentRefinement:o,nbPages:12,refine:a=>e(a)})})};n.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"Controlled"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <SearchPagination usePagination={() => ({
  currentRefinement: 0,
  nbPages: 12,
  refine: action('refine')
})} />`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const [currentRefinement, setCurrentRefinement] = useState(0);
  return <SearchPagination usePagination={() => ({
    currentRefinement,
    nbPages: 12,
    refine: v => setCurrentRefinement(v)
  })} />;
}`,...t.parameters?.docs?.source}}};const q=["Default","Controlled"];export{t as Controlled,n as Default,q as __namedExportsOrder,O as default};
