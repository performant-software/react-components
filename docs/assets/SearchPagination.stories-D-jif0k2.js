import{j as i}from"./jsx-runtime-D9TvR9R2.js";import{a as v}from"./chunk-WFFRPTHA-B2vgThZf.js";import{r as o}from"./index-C0dDX-lL.js";import{P as y}from"./Pagination-BfI_6x02.js";import"./preview-errors-CzpZmerH.js";import"./index-CKJfshIT.js";import"./v4-D8aEg3BZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./map-Dr4OE-Ab.js";import"./getElementType-C_4y_n4F.js";import"./ModernAutoControlledComponent-CBEnGjal.js";import"./assertThisInitialized-B9jnkVVz.js";import"./toFinite-DWd2HYc9.js";import"./Menu-UzpVjXjU.js";import"./_arrayReduce-CrxnWFSq.js";import"./deburr-ClVont3z.js";import"./Icon-BGzIEILD.js";import"./keyboardKey-OMDgGVm3.js";const s=({usePagination:a,...e})=>{const{currentRefinement:t,nbPages:m,refine:p}=a(e),P=o.useCallback((w,{activePage:b})=>p(b-1),[p]);return o.useEffect(()=>{e.scrollToTop&&window.scroll({top:0,behavior:"smooth"})},[t,e.scrollToTop]),m===0?null:i.jsx(y,{activePage:t+1,onPageChange:P,totalPages:m})};s.defaultProps={scrollToTop:!1};const u=s;s.__docgenInfo={description:"This component is used with the `usePagination` hook from Instant Search Hooks and renders a list of page numbers\nthat can be selected by the user. If the `scrollToTop` prop is set to `true`, the window will scroll to the top\nafter applying a new value.",methods:[],displayName:"SearchPagination",props:{usePagination:{required:!0,flowType:{name:"signature",type:"function",raw:`(props: any) => ({
  currentRefinement: number,
  nbPages: number,
  refine: (value: number) => void
})`,signature:{arguments:[{name:"props",type:{name:"any"}}],return:{name:"signature",type:"object",raw:`{
  currentRefinement: number,
  nbPages: number,
  refine: (value: number) => void
}`,signature:{properties:[{key:"currentRefinement",value:{name:"number",required:!0}},{key:"nbPages",value:{name:"number",required:!0}},{key:"refine",value:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{name:"value",type:{name:"number"}}],return:{name:"void"}},required:!0}}]}}}},description:"Instant-Search hook to provide pagination values."},scrollToTop:{required:!1,flowType:{name:"boolean"},description:"If `true`, we'll scroll to the top of the page after applying the new page value.",defaultValue:{value:"false",computed:!1}}}};const F={title:"Components/Semantic UI/SearchPagination",component:u},n=()=>i.jsx(u,{usePagination:()=>({currentRefinement:0,nbPages:12,refine:v("refine")})}),r=()=>{const[a,e]=o.useState(0);return i.jsx(u,{usePagination:()=>({currentRefinement:a,nbPages:12,refine:t=>e(t)})})};n.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"Controlled"};var c,l,f;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => <SearchPagination usePagination={() => ({
  currentRefinement: 0,
  nbPages: 12,
  refine: action('refine')
})} />`,...(f=(l=n.parameters)==null?void 0:l.docs)==null?void 0:f.source}}};var g,d,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [currentRefinement, setCurrentRefinement] = useState(0);
  return <SearchPagination usePagination={() => ({
    currentRefinement,
    nbPages: 12,
    refine: v => setCurrentRefinement(v)
  })} />;
}`,...(h=(d=r.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const G=["Default","Controlled"];export{r as Controlled,n as Default,G as __namedExportsOrder,F as default};
