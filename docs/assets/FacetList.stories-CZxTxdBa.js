import{r as o,j as e}from"./iframe-B8scVUHo.js";import{B as T}from"./Button-DI1B12kj.js";import"./index.es28-CKBW4mjb.js";import{o as x}from"./index.es35-NGGuPWEW.js";import{I as L}from"./Icon-BVP9tOGJ.js";import{I as H}from"./Input-uZI35lvJ.js";import{L as K}from"./Label-DldEee3n.js";import{L as F}from"./List-BpKuhuPo.js";import{C as I}from"./Checkbox-DEgenpx9.js";import{_ as S}from"./index-default-C0I3bBxV.js";import{F as j}from"./Facet-fJP5a6hd.js";import{i as c}from"./i18n-DkobdbHY.js";import{L as U}from"./LinkButton-BPKzYZpD.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-CaJb2m-1.js";import"./map-BHg0yW3b.js";import"./Portal-Q0xzb-rT.js";import"./keyboardKey-CQEJ9RQY.js";import"./ModernAutoControlledComponent-pwrQID__.js";import"./assertThisInitialized-B9jnkVVz.js";import"./toFinite-BD_NKTe4.js";import"./includes-CW8buXEW.js";import"./forEach-MWW8Ch3c.js";import"./Dimmer-B2JVl7VW.js";import"./_baseSet-m4jr0LOE.js";import"./_baseAssignValue-BLvsiv_f.js";import"./Divider-CDgRwG9e.js";import"./Header-DVqh2UxV.js";import"./Accordion-D729RydL.js";import"./without-CE5z1u1p.js";import"./isArrayLikeObject-DVKyOMyh.js";import"./i18next-eNuDfwAU.js";const J=" ",u="or",R="and",l=o.forwardRef(({useRefinementList:r,...n},y)=>{const[s,_]=o.useState(n.defaultOperator||u),{canRefine:E,canToggleShowMore:q,isShowingMore:M,items:v,refine:k,searchForItems:w,toggleShowMore:O}=r({...n,operator:s}),A=o.useRef(),[i,C]=o.useState(""),N=o.useMemo(()=>S.compact(["facet-list",n.className]).join(J),[n.className]),z=o.useCallback(()=>{C(""),w();const{current:t}=A;t&&t.focus()},[]),D=o.useCallback(()=>w(i),[i,w]),V=o.useCallback(()=>{_(t=>t===u?R:u)},[]),B=o.useMemo(()=>!(E&&S.isEmpty(v)&&S.isEmpty(i)),[v,i]);return o.useEffect(()=>{n.defaultValue&&k(n.defaultValue)},[n.defaultValue]),o.useEffect(()=>{i&&w(i)},[v]),e.jsxs(j,{className:N,defaultActive:n.defaultActive,divided:n.divided,innerRef:y,onActive:n.onActive,title:n.title,visible:B,children:[n.searchable&&e.jsx(H,{icon:i&&e.jsx(L,{link:!0,name:"times",onClick:z}),fluid:!0,onChange:(t,{value:P})=>C(P),onKeyDown:()=>x.clearSearchTimer(),onKeyUp:()=>x.setSearchTimer(D),placeholder:c.t("FacetList.labels.search"),ref:A,value:i}),e.jsx(F,{className:"facet-list",children:S.map(v,t=>e.jsx(F.Item,{children:e.jsx(I,{checked:t.isRefined,label:{children:n.renderLabel?n.renderLabel(t):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:t.label}),e.jsx(K,{circular:!0,content:t.count,size:"small"})]})},onClick:()=>k(t.value)})},t.value))}),q&&e.jsxs(e.Fragment,{children:[e.jsx(L,{name:M?"angle up":"angle down"}),e.jsx(U,{content:M?c.t("FacetList.buttons.showLess"):c.t("FacetList.buttons.showMore"),onClick:()=>O()})]}),n.toggleable&&e.jsx(I,{className:"toggleable",checked:s===R,label:s===u?c.t("FacetList.labels.matchAny"):c.t("FacetList.labels.matchAll"),onChange:V,toggle:!0})]})});l.defaultProps={...j.defaultProps,defaultOperator:u};l.__docgenInfo={description:'This component is used with the `useRefinementList` hook from Instant Search Hooks. If the `searchable` prop\nis "true", the component will also render a search box used to filter the list of facet values.',methods:[],displayName:"FacetList",props:{children:{required:!1,flowType:{name:"Node"},description:"Facet content to display inside the accordion menu.",defaultValue:{value:"undefined",computed:!0}},className:{required:!1,flowType:{name:"string"},description:"Classname to apply to the root element."},defaultActive:{required:!1,flowType:{name:"boolean"},description:"If `true`, the facet will be expanded by default.",defaultValue:{value:"true",computed:!1}},divided:{required:!1,flowType:{name:"boolean"},description:"If `true`, a divider will be rendered between each facet in the list.",defaultValue:{value:"false",computed:!1}},innerRef:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  current: ?HTMLElement
}`,signature:{properties:[{key:"current",value:{name:"HTMLElement",nullable:!0,required:!0}}]}},description:"React ref element to apply to the expand/collapse functions."},onActive:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the facet active state is toggled."},title:{required:!0,flowType:{name:"string"},description:"Facet title to display at the top."},visible:{required:!1,flowType:{name:"boolean"},description:"If `true`, the facet will be visible in the DOM.",defaultValue:{value:"true",computed:!1}},useRefinementList:{required:!0,flowType:{name:"signature",type:"function",raw:`(props: any) => ({
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
}`,signature:{properties:[{key:"items",value:{name:"Array",elements:[{name:"any"}],raw:"Array<any>",required:!0}},{key:"refine",value:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{name:"value",type:{name:"any"}}],return:{name:"void"}},required:!0}},{key:"canToggleShowMore",value:{name:"boolean",required:!0}},{key:"isShowingMore",value:{name:"boolean",required:!0}},{key:"toggleShowMore",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}}}},description:"Instant-Search hook to provide refinement list values."},defaultOperator:{required:!1,flowType:{name:"string"},description:"The default value for the `operator` prop. If not provided, this will default to `or`.",defaultValue:{value:"'or'",computed:!1}},defaultValue:{required:!1,flowType:{name:"string"},description:"Default value of the facet list."},renderLabel:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => JSX.Element",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"JSX.Element"}}},description:"Renders a custom label element for the passed item."},searchable:{required:!1,flowType:{name:"boolean"},description:'If "true", the component will render a search box for searching individual facet values.'},toggleable:{required:!1,flowType:{name:"boolean"},description:'If "true", the component will render a toggle to change the behavior of the list from "or" to "and" logic.'}}};const{action:a}=__STORYBOOK_MODULE_ACTIONS__,xe={title:"Components/Semantic UI/FacetList",component:l},m=()=>e.jsx(l,{title:"Make",useRefinementList:()=>({items:[{label:"Chevrolet",count:783,value:"chevrolet"},{label:"Ford",count:399,value:"ford"},{label:"Toyota",count:236,value:"toyota"},{label:"Acura",count:122,value:"acura"}],refine:a("refine"),canToggleShowMore:!1,isShowingMore:!1,searchForItems:a("search"),toggleShowMore:a("show more")})}),f=()=>e.jsx(l,{title:"Brand",useRefinementList:()=>({items:[{label:"Apple",count:45,value:"apple"},{label:"HP",count:34,value:"hp"},{label:"Dell",count:30,value:"dell"},{label:"Acer",count:10,value:"acer"}],refine:a("refine"),canToggleShowMore:!0,isShowingMore:!1,searchForItems:a("search"),toggleShowMore:a("show more")})}),d=()=>e.jsx(l,{searchable:!0,title:"States",useRefinementList:()=>({items:[{label:"Alabama",count:55,value:"alabama"},{label:"Alaska",count:3,value:"alaska"},{label:"Arizona",count:70,value:"arizona"},{label:"Arkansas",count:12,value:"arkansas"},{label:"California",count:269,value:"california"},{label:"Colorado",count:100,value:"colorado"}],refine:a("refine"),canToggleShowMore:!1,isShowingMore:!1,searchForItems:a("search"),toggleShowMore:a("show more")})}),h=()=>e.jsx(l,{toggleable:!0,title:"States",useRefinementList:()=>({items:[{label:"Alabama",count:55,value:"alabama"},{label:"Alaska",count:3,value:"alaska"},{label:"Arizona",count:70,value:"arizona"},{label:"Arkansas",count:12,value:"arkansas"},{label:"California",count:269,value:"california"},{label:"Colorado",count:100,value:"colorado"}],refine:a("refine"),canToggleShowMore:!0,isShowingMore:!1,searchForItems:a("search"),toggleShowMore:a("show more")})}),p=()=>{const r=o.useRef(),n=o.useCallback(()=>{const{current:s}=r;s&&s.collapse()},[r.current]),y=o.useCallback(()=>{const{current:s}=r;s&&s.expand()},[r.current]);return e.jsxs(e.Fragment,{children:[e.jsx(l,{ref:r,toggleable:!0,title:"States",useRefinementList:()=>({items:[{label:"Alabama",count:55,value:"alabama"},{label:"Alaska",count:3,value:"alaska"},{label:"Arizona",count:70,value:"arizona"},{label:"Arkansas",count:12,value:"arkansas"},{label:"California",count:269,value:"california"},{label:"Colorado",count:100,value:"colorado"}],refine:a("refine"),canToggleShowMore:!0,isShowingMore:!1,searchForItems:a("search"),toggleShowMore:a("show more")})}),e.jsx(T,{content:"Expand",onClick:y}),e.jsx(T,{content:"Collapse",onClick:n})]})},g=()=>e.jsx(l,{renderLabel:r=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[e.jsx("span",{children:r.label}),e.jsx("span",{children:r.count})]}),title:"Make",useRefinementList:()=>({items:[{label:"Chevrolet",count:783,value:"chevrolet"},{label:"Ford",count:399,value:"ford"},{label:"Toyota",count:236,value:"toyota"},{label:"Acura",count:122,value:"acura"}],refine:a("refine"),canToggleShowMore:!1,isShowingMore:!1,searchForItems:a("search"),toggleShowMore:a("show more")})}),b=()=>e.jsx(l,{onActive:a("active"),title:"Make",useRefinementList:()=>({items:[{label:"Chevrolet",count:783,value:"chevrolet"},{label:"Ford",count:399,value:"ford"},{label:"Toyota",count:236,value:"toyota"},{label:"Acura",count:122,value:"acura"}],refine:a("refine"),canToggleShowMore:!1,isShowingMore:!1,searchForItems:a("search"),toggleShowMore:a("show more")})});m.__docgenInfo={description:"",methods:[],displayName:"Default"};f.__docgenInfo={description:"",methods:[],displayName:"ShowMore"};d.__docgenInfo={description:"",methods:[],displayName:"Searchable"};h.__docgenInfo={description:"",methods:[],displayName:"Toggleable"};p.__docgenInfo={description:"",methods:[],displayName:"ExpandCollapse"};g.__docgenInfo={description:"",methods:[],displayName:"CustomRender"};b.__docgenInfo={description:"",methods:[],displayName:"onActive"};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <FacetList title='Make' useRefinementList={() => ({
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
})} />`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => <FacetList title='Brand' useRefinementList={() => ({
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
})} />`,...f.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => <FacetList searchable title='States' useRefinementList={() => ({
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
})} />`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => <FacetList toggleable title='States' useRefinementList={() => ({
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
})} />`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => <FacetList renderLabel={item => <div style={{
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%'
}}>
        <span>{item.label}</span>
        <span>{item.count}</span>
      </div>} title='Make' useRefinementList={() => ({
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
})} />`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => <FacetList onActive={action('active')} title='Make' useRefinementList={() => ({
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
})} />`,...b.parameters?.docs?.source}}};const Le=["Default","ShowMore","Searchable","Toggleable","ExpandCollapse","CustomRender","onActive"];export{g as CustomRender,m as Default,p as ExpandCollapse,d as Searchable,f as ShowMore,h as Toggleable,Le as __namedExportsOrder,xe as default,b as onActive};
