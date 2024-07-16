import{j as e}from"./jsx-runtime-D9TvR9R2.js";import{a}from"./chunk-WFFRPTHA-B2vgThZf.js";import{r as n}from"./index-C0dDX-lL.js";import{B as A}from"./Button-CJhT71wt.js";import{u as T}from"./index.es30-BX1o8N2K.js";import{I as L}from"./Icon-C_3d7-zE.js";import{I as ne}from"./Input-Bwh_HEb3.js";import{L as oe}from"./Label-aEFd48OX.js";import{L as F}from"./List-WZaCZ-rK.js";import{C as I}from"./Checkbox-B3tsCUtI.js";import{_ as S}from"./index-default-C_maRo4o.js";import{F as $}from"./Facet-CqdaJEBe.js";import{i as c}from"./i18n-CM1tepcX.js";import{L as te}from"./LinkButton-BJA6L28z.js";import"./preview-errors-CzpZmerH.js";import"./index-CKJfshIT.js";import"./v4-D8aEg3BZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BSRayMAs.js";import"./map-DWKMCCtW.js";import"./Portal-B8DXQ6EK.js";import"./keyboardKey-OMDgGVm3.js";import"./ModernAutoControlledComponent-C211dBIC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./toFinite-C3oJXAtX.js";import"./index-DOYXiIEK.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./iframe-C5VJIPQ9.js";import"../sb-preview/runtime.js";import"./includes-Cc_HXDPA.js";import"./forEach-CLeEMxs1.js";import"./Dimmer-DP3fvqlo.js";import"./_baseSet-BllfnHSO.js";import"./_baseAssignValue-UQlBDUKN.js";import"./Divider-CUCHYA5N.js";import"./Header-BHdMo175.js";import"./Accordion-61xP-IaT.js";import"./without-Duh6Zu7H.js";import"./isArrayLikeObject-Bl_bAmop.js";import"./i18next-CwS9wMM1.js";import"./toPropertyKey-BcUJYDQU.js";import"./defineProperty-DcNpp85p.js";import"./inherits-CWPG5jll.js";import"./createClass-CV9nCQMI.js";import"./getPrototypeOf-BYVhAdwF.js";const u="or",R="and",y=n.forwardRef(({useRefinementList:s,...o},v)=>{const[r,G]=n.useState(o.defaultOperator||u),{canRefine:J,canToggleShowMore:W,isShowingMore:k,items:g,refine:M,searchForItems:b,toggleShowMore:X}=s({...o,operator:r}),C=n.useRef(),[l,x]=n.useState(""),Y=n.useCallback(()=>{x(""),b();const{current:t}=C;t&&t.focus()},[]),Z=n.useCallback(()=>b(l),[l,b]),ee=n.useCallback(()=>{G(t=>t===u?R:u)},[]),ae=n.useMemo(()=>!(J&&S.isEmpty(g)&&S.isEmpty(l)),[g,l]);return n.useEffect(()=>{o.defaultValue&&M(o.defaultValue)},[o.defaultValue]),n.useEffect(()=>{l&&b(l)},[g]),e.jsxs($,{className:"facet-list",defaultActive:o.defaultActive,divided:o.divided,innerRef:v,title:o.title,visible:ae,children:[o.searchable&&e.jsx(ne,{icon:l&&e.jsx(L,{link:!0,name:"times",onClick:Y}),fluid:!0,onChange:(t,{value:w})=>x(w),onKeyDown:()=>T.clearSearchTimer(),onKeyUp:()=>T.setSearchTimer(Z),placeholder:c.t("FacetList.labels.search"),ref:C,value:l}),e.jsx(F,{className:"facet-list",children:S.map(g,(t,w)=>e.jsx(F.Item,{children:e.jsx(I,{checked:t.isRefined,label:{children:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:t.label}),e.jsx(oe,{circular:!0,content:t.count,size:"small"})]})},onClick:()=>M(t.value)})},w))}),W&&e.jsxs(e.Fragment,{children:[e.jsx(L,{name:k?"angle up":"angle down"}),e.jsx(te,{content:k?c.t("FacetList.buttons.showLess"):c.t("FacetList.buttons.showMore"),onClick:()=>X()})]}),o.toggleable&&e.jsx(I,{className:"toggleable",checked:r===R,label:r===u?c.t("FacetList.labels.matchAny"):c.t("FacetList.labels.matchAll"),onChange:ee,toggle:!0})]})});y.defaultProps={...$.defaultProps,defaultOperator:u};const i=y;y.__docgenInfo={description:'This component is used with the `useRefinementList` hook from Instant Search Hooks. If the `searchable` prop\nis "true", the component will also render a search box used to filter the list of facet values.',methods:[],displayName:"FacetList",props:{children:{required:!1,flowType:{name:"Node"},description:"Facet content to display inside the accordion menu.",defaultValue:{value:"undefined",computed:!0}},className:{required:!1,flowType:{name:"string"},description:"Classname to apply to the root element."},defaultActive:{required:!1,flowType:{name:"boolean"},description:"If `true`, the facet will be expanded by default.",defaultValue:{value:"true",computed:!1}},divided:{required:!1,flowType:{name:"boolean"},description:"If `true`, a divider will be rendered between each facet in the list.",defaultValue:{value:"false",computed:!1}},innerRef:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  current: ?HTMLElement
}`,signature:{properties:[{key:"current",value:{name:"HTMLElement",nullable:!0,required:!0}}]}},description:"React ref element to apply to the expand/collapse functions."},title:{required:!0,flowType:{name:"string"},description:"Facet title to display at the top."},visible:{required:!1,flowType:{name:"boolean"},description:"If `true`, the facet will be visible in the DOM.",defaultValue:{value:"true",computed:!1}},useRefinementList:{required:!0,flowType:{name:"signature",type:"function",raw:`(props: any) => ({
  items: Array<any>,
  refine: (value: any) => void,
  canToggleShowMore: boolean,
  isShowingMore: boolean,
  toggleShowMore: () => void
})`,signature:{arguments:[{name:"props",type:{name:"any"}}],return:{name:"signature",type:"object",raw:`{
  items: Array<any>,
  refine: (value: any) => void,
  canToggleShowMore: boolean,
  isShowingMore: boolean,
  toggleShowMore: () => void
}`,signature:{properties:[{key:"items",value:{name:"Array",elements:[{name:"any"}],raw:"Array<any>",required:!0}},{key:"refine",value:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{name:"value",type:{name:"any"}}],return:{name:"void"}},required:!0}},{key:"canToggleShowMore",value:{name:"boolean",required:!0}},{key:"isShowingMore",value:{name:"boolean",required:!0}},{key:"toggleShowMore",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}}}},description:"Instant-Search hook to provide refinement list values."},defaultOperator:{required:!1,flowType:{name:"string"},description:"The default value for the `operator` prop. If not provided, this will default to `or`.",defaultValue:{value:"'or'",computed:!1}},defaultValue:{required:!1,flowType:{name:"string"},description:"Default value of the facet list."},searchable:{required:!1,flowType:{name:"boolean"},description:'If "true", the component will render a search box for searching individual facet values.'},toggleable:{required:!1,flowType:{name:"boolean"},description:'If "true", the component will render a toggle to change the behavior of the list from "or" to "and" logic.'}}};const Ze={title:"Components/Semantic UI/FacetList",component:i},m=()=>e.jsx(i,{title:"Make",useRefinementList:()=>({items:[{label:"Chevrolet",count:783,value:"chevrolet"},{label:"Ford",count:399,value:"ford"},{label:"Toyota",count:236,value:"toyota"},{label:"Acura",count:122,value:"acura"}],refine:a("refine"),canToggleShowMore:!1,isShowingMore:!1,searchForItems:a("search"),toggleShowMore:a("show more")})}),f=()=>e.jsx(i,{title:"Brand",useRefinementList:()=>({items:[{label:"Apple",count:45,value:"apple"},{label:"HP",count:34,value:"hp"},{label:"Dell",count:30,value:"dell"},{label:"Acer",count:10,value:"acer"}],refine:a("refine"),canToggleShowMore:!0,isShowingMore:!1,searchForItems:a("search"),toggleShowMore:a("show more")})}),d=()=>e.jsx(i,{searchable:!0,title:"States",useRefinementList:()=>({items:[{label:"Alabama",count:55,value:"alabama"},{label:"Alaska",count:3,value:"alaska"},{label:"Arizona",count:70,value:"arizona"},{label:"Arkansas",count:12,value:"arkansas"},{label:"California",count:269,value:"california"},{label:"Colorado",count:100,value:"colorado"}],refine:a("refine"),canToggleShowMore:!1,isShowingMore:!1,searchForItems:a("search"),toggleShowMore:a("show more")})}),p=()=>e.jsx(i,{toggleable:!0,title:"States",useRefinementList:()=>({items:[{label:"Alabama",count:55,value:"alabama"},{label:"Alaska",count:3,value:"alaska"},{label:"Arizona",count:70,value:"arizona"},{label:"Arkansas",count:12,value:"arkansas"},{label:"California",count:269,value:"california"},{label:"Colorado",count:100,value:"colorado"}],refine:a("refine"),canToggleShowMore:!0,isShowingMore:!1,searchForItems:a("search"),toggleShowMore:a("show more")})}),h=()=>{const s=n.useRef(),o=n.useCallback(()=>{const{current:r}=s;r&&r.collapse()},[s.current]),v=n.useCallback(()=>{const{current:r}=s;r&&r.expand()},[s.current]);return e.jsxs(e.Fragment,{children:[e.jsx(i,{ref:s,toggleable:!0,title:"States",useRefinementList:()=>({items:[{label:"Alabama",count:55,value:"alabama"},{label:"Alaska",count:3,value:"alaska"},{label:"Arizona",count:70,value:"arizona"},{label:"Arkansas",count:12,value:"arkansas"},{label:"California",count:269,value:"california"},{label:"Colorado",count:100,value:"colorado"}],refine:a("refine"),canToggleShowMore:!0,isShowingMore:!1,searchForItems:a("search"),toggleShowMore:a("show more")})}),e.jsx(A,{content:"Expand",onClick:v}),e.jsx(A,{content:"Collapse",onClick:o})]})};m.__docgenInfo={description:"",methods:[],displayName:"Default"};f.__docgenInfo={description:"",methods:[],displayName:"ShowMore"};d.__docgenInfo={description:"",methods:[],displayName:"Searchable"};p.__docgenInfo={description:"",methods:[],displayName:"Toggleable"};h.__docgenInfo={description:"",methods:[],displayName:"ExpandCollapse"};var j,E,q;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`() => <FacetList title='Make' useRefinementList={() => ({
  items: [{
    label: 'Chevrolet',
    count: 783,
    value: 'chevrolet'
  }, {
    label: 'Ford',
    count: 399,
    value: 'ford'
  }, {
    label: 'Toyota',
    count: 236,
    value: 'toyota'
  }, {
    label: 'Acura',
    count: 122,
    value: 'acura'
  }],
  refine: action('refine'),
  canToggleShowMore: false,
  isShowingMore: false,
  searchForItems: action('search'),
  toggleShowMore: action('show more')
})} />`,...(q=(E=m.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var _,z,N;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`() => <FacetList title='Brand' useRefinementList={() => ({
  items: [{
    label: 'Apple',
    count: 45,
    value: 'apple'
  }, {
    label: 'HP',
    count: 34,
    value: 'hp'
  }, {
    label: 'Dell',
    count: 30,
    value: 'dell'
  }, {
    label: 'Acer',
    count: 10,
    value: 'acer'
  }],
  refine: action('refine'),
  canToggleShowMore: true,
  isShowingMore: false,
  searchForItems: action('search'),
  toggleShowMore: action('show more')
})} />`,...(N=(z=f.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var O,D,V;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`() => <FacetList searchable title='States' useRefinementList={() => ({
  items: [{
    label: 'Alabama',
    count: 55,
    value: 'alabama'
  }, {
    label: 'Alaska',
    count: 3,
    value: 'alaska'
  }, {
    label: 'Arizona',
    count: 70,
    value: 'arizona'
  }, {
    label: 'Arkansas',
    count: 12,
    value: 'arkansas'
  }, {
    label: 'California',
    count: 269,
    value: 'california'
  }, {
    label: 'Colorado',
    count: 100,
    value: 'colorado'
  }],
  refine: action('refine'),
  canToggleShowMore: false,
  isShowingMore: false,
  searchForItems: action('search'),
  toggleShowMore: action('show more')
})} />`,...(V=(D=d.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var B,P,H;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`() => <FacetList toggleable title='States' useRefinementList={() => ({
  items: [{
    label: 'Alabama',
    count: 55,
    value: 'alabama'
  }, {
    label: 'Alaska',
    count: 3,
    value: 'alaska'
  }, {
    label: 'Arizona',
    count: 70,
    value: 'arizona'
  }, {
    label: 'Arkansas',
    count: 12,
    value: 'arkansas'
  }, {
    label: 'California',
    count: 269,
    value: 'california'
  }, {
    label: 'Colorado',
    count: 100,
    value: 'colorado'
  }],
  refine: action('refine'),
  canToggleShowMore: true,
  isShowingMore: false,
  searchForItems: action('search'),
  toggleShowMore: action('show more')
})} />`,...(H=(P=p.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var K,U,Q;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  const ref = useRef();

  /**
   * Collapses the facet via the imperative function.
   *
   * @type {(function(): void)|*}
   */
  const onCollapse = useCallback(() => {
    const {
      current: instance
    } = ref;
    if (instance) {
      instance.collapse();
    }
  }, [ref.current]);

  /**
   * Expands the facet via the imperative function.
   *
   * @type {(function(): void)|*}
   */
  const onExpand = useCallback(() => {
    const {
      current: instance
    } = ref;
    if (instance) {
      instance.expand();
    }
  }, [ref.current]);
  return <>
      <FacetList ref={ref} toggleable title='States' useRefinementList={() => ({
      items: [{
        label: 'Alabama',
        count: 55,
        value: 'alabama'
      }, {
        label: 'Alaska',
        count: 3,
        value: 'alaska'
      }, {
        label: 'Arizona',
        count: 70,
        value: 'arizona'
      }, {
        label: 'Arkansas',
        count: 12,
        value: 'arkansas'
      }, {
        label: 'California',
        count: 269,
        value: 'california'
      }, {
        label: 'Colorado',
        count: 100,
        value: 'colorado'
      }],
      refine: action('refine'),
      canToggleShowMore: true,
      isShowingMore: false,
      searchForItems: action('search'),
      toggleShowMore: action('show more')
    })} />
      <Button content='Expand' onClick={onExpand} />
      <Button content='Collapse' onClick={onCollapse} />
    </>;
}`,...(Q=(U=h.parameters)==null?void 0:U.docs)==null?void 0:Q.source}}};const ea=["Default","ShowMore","Searchable","Toggleable","ExpandCollapse"];export{m as Default,h as ExpandCollapse,d as Searchable,f as ShowMore,p as Toggleable,ea as __namedExportsOrder,Ze as default};
