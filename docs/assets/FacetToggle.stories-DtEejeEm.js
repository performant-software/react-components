import{j as r}from"./jsx-runtime-BTCK_S7S.js";import{r as a}from"./index-CBqU2yxZ.js";import{L as v}from"./Label-Cq1fb1cd.js";import{C as y}from"./Checkbox-C9uAfnsM.js";import{F as p}from"./Facet-C0cvIU-z.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./ModernAutoControlledComponent-DJBWk5EW.js";import"./assertThisInitialized-B9jnkVVz.js";import"./getElementType-CckcRzoH.js";import"./Icon-2tEtgK8g.js";import"./includes-CQoJOerW.js";import"./toFinite-KQ8KevIC.js";import"./forEach-CXlln0XP.js";import"./Dimmer-D_gwaesu.js";import"./Portal-DvhHJPzU.js";import"./keyboardKey-OMDgGVm3.js";import"./index-DZGZymok.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./_baseSet-6y0qliU9.js";import"./_baseAssignValue-izmKBXUH.js";import"./Divider-C9xp3Rj7.js";import"./Header-BJ3NNdPz.js";import"./Accordion-hxhfwUID.js";import"./map-B4PnIEPz.js";import"./without-BP-mqg2K.js";import"./isArrayLikeObject-CbXKTyfk.js";const l=a.forwardRef(({useToggleRefinement:n,...e},i)=>{const{value:{isRefined:s,count:o},refine:f}=n(e),g=a.useMemo(()=>!!o,[o]);return r.jsx(p,{defaultActive:e.defaultActive,divided:e.divided,innerRef:i,title:e.title,visible:g,children:r.jsx(y,{checked:s,label:{children:r.jsx(v,{circular:!0,content:o,size:"small"})},onClick:()=>f({isRefined:s}),toggle:!0})})});l.defaultProps=p.defaultProps;const c=l;l.__docgenInfo={description:"This component is used with the `useToggleRefinement` hook from Instant Search Hooks.",methods:[],displayName:"FacetToggle",props:{children:{required:!1,flowType:{name:"Node"},description:"Facet content to display inside the accordion menu.",defaultValue:{value:"undefined",computed:!0}},className:{required:!1,flowType:{name:"string"},description:"Classname to apply to the root element."},defaultActive:{required:!1,flowType:{name:"boolean"},description:"If `true`, the facet will be expanded by default.",defaultValue:{value:"true",computed:!1}},divided:{required:!1,flowType:{name:"boolean"},description:"If `true`, a divider will be rendered between each facet in the list.",defaultValue:{value:"false",computed:!1}},innerRef:{required:!1,flowType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"isRefined",value:{name:"boolean",required:!0}},{key:"count",value:{name:"number",required:!0}}]},required:!0}},{key:"refine",value:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{name:"value",type:{name:"boolean"}}],return:{name:"void"}},required:!0}}]}}}},description:"Instant-Search hook to provide toggle refinement values."}}};const J={title:"Components/Semantic UI/FacetToggle",component:c},t=()=>{const[n,e]=a.useState(!1);return r.jsx(c,{title:"Discount Items Only",useToggleRefinement:()=>({value:{isRefined:n,count:n?385:182},refine:()=>e(i=>!i)})})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};var u,d,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [isRefined, setIsRefined] = useState(false);
  return <FacetToggle title='Discount Items Only' useToggleRefinement={() => ({
    value: {
      isRefined,
      count: isRefined ? 385 : 182
    },
    refine: () => setIsRefined(prevValue => !prevValue)
  })} />;
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const K=["Default"];export{t as Default,K as __namedExportsOrder,J as default};
