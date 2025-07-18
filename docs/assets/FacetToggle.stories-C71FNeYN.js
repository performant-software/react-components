import{r as l,j as r}from"./iframe-BPWyo1ml.js";import{L as p}from"./Label-BoodK5V_.js";import{C as c}from"./Checkbox-C9s8UeCZ.js";import{F as u}from"./Facet-BTb9qlTq.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./ModernAutoControlledComponent-YfVkZAu6.js";import"./assertThisInitialized-B9jnkVVz.js";import"./getElementType-_MvlUdE4.js";import"./Icon-jme1Xn38.js";import"./includes-DPOpDRSZ.js";import"./toFinite-TVPM6KGA.js";import"./forEach-DkM9CNVk.js";import"./Dimmer-Cc_1Rffq.js";import"./Portal-CMKTsJj1.js";import"./keyboardKey-D0kxxHqZ.js";import"./_baseSet-CdjV8XzC.js";import"./_baseAssignValue-B_GkWFP9.js";import"./Divider-CM2zuY78.js";import"./Header-HTMCEQYc.js";import"./Accordion-CWfit9Pq.js";import"./map-PCFjh3mh.js";import"./without-elm7P8Lj.js";import"./isArrayLikeObject-Bjky3Eyc.js";const i=l.forwardRef(({useToggleRefinement:n,...e},o)=>{const{value:{isRefined:s,count:a},refine:d}=n(e),m=l.useMemo(()=>!!a,[a]);return r.jsx(u,{defaultActive:e.defaultActive,divided:e.divided,innerRef:o,title:e.title,visible:m,children:r.jsx(c,{checked:s,label:{children:r.jsx(p,{circular:!0,content:a,size:"small"})},onClick:()=>d({isRefined:s}),toggle:!0})})});i.defaultProps=u.defaultProps;i.__docgenInfo={description:"This component is used with the `useToggleRefinement` hook from Instant Search Hooks.",methods:[],displayName:"FacetToggle",props:{children:{required:!1,flowType:{name:"Node"},description:"Facet content to display inside the accordion menu.",defaultValue:{value:"undefined",computed:!0}},className:{required:!1,flowType:{name:"string"},description:"Classname to apply to the root element."},defaultActive:{required:!1,flowType:{name:"boolean"},description:"If `true`, the facet will be expanded by default.",defaultValue:{value:"true",computed:!1}},divided:{required:!1,flowType:{name:"boolean"},description:"If `true`, a divider will be rendered between each facet in the list.",defaultValue:{value:"false",computed:!1}},innerRef:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  current: ?HTMLElement
}`,signature:{properties:[{key:"current",value:{name:"HTMLElement",nullable:!0,required:!0}}]}},description:"React ref element to apply to the expand/collapse functions."},onActive:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the facet active state is toggled."},title:{required:!0,flowType:{name:"string"},description:"Facet title to display at the top."},visible:{required:!1,flowType:{name:"boolean"},description:"If `true`, the facet will be visible in the DOM.",defaultValue:{value:"true",computed:!1}},useToggleRefinement:{required:!0,flowType:{name:"signature",type:"function",raw:`(props: any) => ({
  value: {
    isRefined: boolean,
    count: number
  },
  refine: (value: boolean) => void
})`,signature:{arguments:[{name:"props",type:{name:"any"}}],return:{name:"signature",type:"object",raw:`{
  value: {
    isRefined: boolean,
    count: number
  },
  refine: (value: boolean) => void
}`,signature:{properties:[{key:"value",value:{name:"signature",type:"object",raw:`{
  isRefined: boolean,
  count: number
}`,signature:{properties:[{key:"isRefined",value:{name:"boolean",required:!0}},{key:"count",value:{name:"number",required:!0}}]},required:!0}},{key:"refine",value:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{name:"value",type:{name:"boolean"}}],return:{name:"void"}},required:!0}}]}}}},description:"Instant-Search hook to provide toggle refinement values."}}};const O={title:"Components/Semantic UI/FacetToggle",component:i},t=()=>{const[n,e]=l.useState(!1);return r.jsx(i,{title:"Discount Items Only",useToggleRefinement:()=>({value:{isRefined:n,count:n?385:182},refine:()=>e(o=>!o)})})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const [isRefined, setIsRefined] = useState(false);
  return <FacetToggle title='Discount Items Only' useToggleRefinement={() => ({
    value: {
      isRefined,
      count: isRefined ? 385 : 182
    },
    refine: () => setIsRefined(prevValue => !prevValue)
  })} />;
}`,...t.parameters?.docs?.source}}};const H=["Default"];export{t as Default,H as __namedExportsOrder,O as default};
