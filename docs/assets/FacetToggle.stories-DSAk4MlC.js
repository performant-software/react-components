import{r as l,j as r}from"./iframe-DjZg4LCJ.js";import{L as p}from"./Label-Bh5L599Z.js";import{C as c}from"./Checkbox-CgV92q-M.js";import{F as u}from"./Facet-C1CjItZ1.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./ModernAutoControlledComponent-BMzS269y.js";import"./assertThisInitialized-B9jnkVVz.js";import"./getElementType-CAZyNRJI.js";import"./Icon-tpspPEMM.js";import"./includes-CONzxizI.js";import"./toFinite-BAYWAdIs.js";import"./forEach-A59iOPX4.js";import"./Dimmer-CCyRt7B_.js";import"./Portal-ryYdJBeB.js";import"./keyboardKey-Dib6OvmA.js";import"./_baseSet-Dvm44Wtg.js";import"./_baseAssignValue-8K9yYogk.js";import"./Divider-CrjZxc3R.js";import"./Header-BLFNvs1J.js";import"./Accordion-DNQ0dtUU.js";import"./map-DtdA0n9n.js";import"./without--0CyYUzZ.js";import"./isArrayLikeObject-CUXhdROG.js";const i=l.forwardRef(({useToggleRefinement:n,...e},o)=>{const{value:{isRefined:s,count:a},refine:d}=n(e),m=l.useMemo(()=>!!a,[a]);return r.jsx(u,{defaultActive:e.defaultActive,divided:e.divided,innerRef:o,title:e.title,visible:m,children:r.jsx(c,{checked:s,label:{children:r.jsx(p,{circular:!0,content:a,size:"small"})},onClick:()=>d({isRefined:s}),toggle:!0})})});i.defaultProps=u.defaultProps;i.__docgenInfo={description:"This component is used with the `useToggleRefinement` hook from Instant Search Hooks.",methods:[],displayName:"FacetToggle",props:{children:{required:!1,flowType:{name:"Node"},description:"Facet content to display inside the accordion menu.",defaultValue:{value:"undefined",computed:!0}},className:{required:!1,flowType:{name:"string"},description:"Classname to apply to the root element."},defaultActive:{required:!1,flowType:{name:"boolean"},description:"If `true`, the facet will be expanded by default.",defaultValue:{value:"true",computed:!1}},divided:{required:!1,flowType:{name:"boolean"},description:"If `true`, a divider will be rendered between each facet in the list.",defaultValue:{value:"false",computed:!1}},innerRef:{required:!1,flowType:{name:"signature",type:"object",raw:`{
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
