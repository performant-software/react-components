import{j as e}from"./jsx-runtime-D9TvR9R2.js";import{a}from"./chunk-WFFRPTHA-B2vgThZf.js";import{r as o}from"./index-C0dDX-lL.js";import{B as x}from"./Button-CJhT71wt.js";import{u as L}from"./index.es33-Dl8KN4Zo.js";import{I as F}from"./Icon-C_3d7-zE.js";import{I as me}from"./Input-Bwh_HEb3.js";import{L as fe}from"./Label-aEFd48OX.js";import{L as I}from"./List-WZaCZ-rK.js";import{C as R}from"./Checkbox-B3tsCUtI.js";import{_ as y}from"./index-default-C_maRo4o.js";import{F as ee}from"./Facet-DQxf_TaR.js";import{i as c}from"./i18n-C9xJ7SCg.js";import{L as de}from"./LinkButton-BJA6L28z.js";import"./preview-errors-CzpZmerH.js";import"./index-CKJfshIT.js";import"./v4-D8aEg3BZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BSRayMAs.js";import"./map-DWKMCCtW.js";import"./Portal-B8DXQ6EK.js";import"./keyboardKey-OMDgGVm3.js";import"./ModernAutoControlledComponent-C211dBIC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./toFinite-C3oJXAtX.js";import"./index-DOYXiIEK.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./iframe-C8BkrS2-.js";import"../sb-preview/runtime.js";import"./includes-Cc_HXDPA.js";import"./forEach-CLeEMxs1.js";import"./Dimmer-DP3fvqlo.js";import"./_baseSet-BllfnHSO.js";import"./_baseAssignValue-UQlBDUKN.js";import"./Divider-CUCHYA5N.js";import"./Header-BHdMo175.js";import"./Accordion-61xP-IaT.js";import"./without-Duh6Zu7H.js";import"./isArrayLikeObject-Bl_bAmop.js";import"./i18next-CwS9wMM1.js";import"./toPropertyKey-BcUJYDQU.js";import"./defineProperty-DcNpp85p.js";import"./inherits-CWPG5jll.js";import"./createClass-CV9nCQMI.js";import"./getPrototypeOf-BYVhAdwF.js";const pe=" ",u="or",j="and",M=o.forwardRef(({useRefinementList:r,...n},S)=>{const[l,ae]=o.useState(n.defaultOperator||u),{canRefine:ne,canToggleShowMore:oe,isShowingMore:k,items:v,refine:A,searchForItems:w,toggleShowMore:te}=r({...n,operator:l}),C=o.useRef(),[s,T]=o.useState(""),re=o.useMemo(()=>y.compact(["facet-list",n.className]).join(pe),[n.className]),le=o.useCallback(()=>{T(""),w();const{current:t}=C;t&&t.focus()},[]),se=o.useCallback(()=>w(s),[s,w]),ie=o.useCallback(()=>{ae(t=>t===u?j:u)},[]),ce=o.useMemo(()=>!(ne&&y.isEmpty(v)&&y.isEmpty(s)),[v,s]);return o.useEffect(()=>{n.defaultValue&&A(n.defaultValue)},[n.defaultValue]),o.useEffect(()=>{s&&w(s)},[v]),e.jsxs(ee,{className:re,defaultActive:n.defaultActive,divided:n.divided,innerRef:S,onActive:n.onActive,title:n.title,visible:ce,children:[n.searchable&&e.jsx(me,{icon:s&&e.jsx(F,{link:!0,name:"times",onClick:le}),fluid:!0,onChange:(t,{value:ue})=>T(ue),onKeyDown:()=>L.clearSearchTimer(),onKeyUp:()=>L.setSearchTimer(se),placeholder:c.t("FacetList.labels.search"),ref:C,value:s}),e.jsx(I,{className:"facet-list",children:y.map(v,t=>e.jsx(I.Item,{children:e.jsx(R,{checked:t.isRefined,label:{children:n.renderLabel?n.renderLabel(t):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:t.label}),e.jsx(fe,{circular:!0,content:t.count,size:"small"})]})},onClick:()=>A(t.value)})},t.value))}),oe&&e.jsxs(e.Fragment,{children:[e.jsx(F,{name:k?"angle up":"angle down"}),e.jsx(de,{content:k?c.t("FacetList.buttons.showLess"):c.t("FacetList.buttons.showMore"),onClick:()=>te()})]}),n.toggleable&&e.jsx(R,{className:"toggleable",checked:l===j,label:l===u?c.t("FacetList.labels.matchAny"):c.t("FacetList.labels.matchAll"),onChange:ie,toggle:!0})]})});M.defaultProps={...ee.defaultProps,defaultOperator:u};const i=M;M.__docgenInfo={description:'This component is used with the `useRefinementList` hook from Instant Search Hooks. If the `searchable` prop\nis "true", the component will also render a search box used to filter the list of facet values.',methods:[],displayName:"FacetList",props:{children:{required:!1,flowType:{name:"Node"},description:"Facet content to display inside the accordion menu.",defaultValue:{value:"undefined",computed:!0}},className:{required:!1,flowType:{name:"string"},description:"Classname to apply to the root element."},defaultActive:{required:!1,flowType:{name:"boolean"},description:"If `true`, the facet will be expanded by default.",defaultValue:{value:"true",computed:!1}},divided:{required:!1,flowType:{name:"boolean"},description:"If `true`, a divider will be rendered between each facet in the list.",defaultValue:{value:"false",computed:!1}},innerRef:{required:!1,flowType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"items",value:{name:"Array",elements:[{name:"any"}],raw:"Array<any>",required:!0}},{key:"refine",value:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{name:"value",type:{name:"any"}}],return:{name:"void"}},required:!0}},{key:"canToggleShowMore",value:{name:"boolean",required:!0}},{key:"isShowingMore",value:{name:"boolean",required:!0}},{key:"toggleShowMore",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}}}},description:"Instant-Search hook to provide refinement list values."},defaultOperator:{required:!1,flowType:{name:"string"},description:"The default value for the `operator` prop. If not provided, this will default to `or`.",defaultValue:{value:"'or'",computed:!1}},defaultValue:{required:!1,flowType:{name:"string"},description:"Default value of the facet list."},renderLabel:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => JSX.Element",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"JSX.Element"}}},description:"Renders a custom label element for the passed item."},searchable:{required:!1,flowType:{name:"boolean"},description:'If "true", the component will render a search box for searching individual facet values.'},toggleable:{required:!1,flowType:{name:"boolean"},description:'If "true", the component will render a toggle to change the behavior of the list from "or" to "and" logic.'}}};const ca={title:"Components/Semantic UI/FacetList",component:i},m=()=>e.jsx(i,{title:"Make",useRefinementList:()=>({items:[{label:"Chevrolet",count:783,value:"chevrolet"},{label:"Ford",count:399,value:"ford"},{label:"Toyota",count:236,value:"toyota"},{label:"Acura",count:122,value:"acura"}],refine:a("refine"),canToggleShowMore:!1,isShowingMore:!1,searchForItems:a("search"),toggleShowMore:a("show more")})}),f=()=>e.jsx(i,{title:"Brand",useRefinementList:()=>({items:[{label:"Apple",count:45,value:"apple"},{label:"HP",count:34,value:"hp"},{label:"Dell",count:30,value:"dell"},{label:"Acer",count:10,value:"acer"}],refine:a("refine"),canToggleShowMore:!0,isShowingMore:!1,searchForItems:a("search"),toggleShowMore:a("show more")})}),d=()=>e.jsx(i,{searchable:!0,title:"States",useRefinementList:()=>({items:[{label:"Alabama",count:55,value:"alabama"},{label:"Alaska",count:3,value:"alaska"},{label:"Arizona",count:70,value:"arizona"},{label:"Arkansas",count:12,value:"arkansas"},{label:"California",count:269,value:"california"},{label:"Colorado",count:100,value:"colorado"}],refine:a("refine"),canToggleShowMore:!1,isShowingMore:!1,searchForItems:a("search"),toggleShowMore:a("show more")})}),p=()=>e.jsx(i,{toggleable:!0,title:"States",useRefinementList:()=>({items:[{label:"Alabama",count:55,value:"alabama"},{label:"Alaska",count:3,value:"alaska"},{label:"Arizona",count:70,value:"arizona"},{label:"Arkansas",count:12,value:"arkansas"},{label:"California",count:269,value:"california"},{label:"Colorado",count:100,value:"colorado"}],refine:a("refine"),canToggleShowMore:!0,isShowingMore:!1,searchForItems:a("search"),toggleShowMore:a("show more")})}),h=()=>{const r=o.useRef(),n=o.useCallback(()=>{const{current:l}=r;l&&l.collapse()},[r.current]),S=o.useCallback(()=>{const{current:l}=r;l&&l.expand()},[r.current]);return e.jsxs(e.Fragment,{children:[e.jsx(i,{ref:r,toggleable:!0,title:"States",useRefinementList:()=>({items:[{label:"Alabama",count:55,value:"alabama"},{label:"Alaska",count:3,value:"alaska"},{label:"Arizona",count:70,value:"arizona"},{label:"Arkansas",count:12,value:"arkansas"},{label:"California",count:269,value:"california"},{label:"Colorado",count:100,value:"colorado"}],refine:a("refine"),canToggleShowMore:!0,isShowingMore:!1,searchForItems:a("search"),toggleShowMore:a("show more")})}),e.jsx(x,{content:"Expand",onClick:S}),e.jsx(x,{content:"Collapse",onClick:n})]})},g=()=>e.jsx(i,{renderLabel:r=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[e.jsx("span",{children:r.label}),e.jsx("span",{children:r.count})]}),title:"Make",useRefinementList:()=>({items:[{label:"Chevrolet",count:783,value:"chevrolet"},{label:"Ford",count:399,value:"ford"},{label:"Toyota",count:236,value:"toyota"},{label:"Acura",count:122,value:"acura"}],refine:a("refine"),canToggleShowMore:!1,isShowingMore:!1,searchForItems:a("search"),toggleShowMore:a("show more")})}),b=()=>e.jsx(i,{onActive:a("active"),title:"Make",useRefinementList:()=>({items:[{label:"Chevrolet",count:783,value:"chevrolet"},{label:"Ford",count:399,value:"ford"},{label:"Toyota",count:236,value:"toyota"},{label:"Acura",count:122,value:"acura"}],refine:a("refine"),canToggleShowMore:!1,isShowingMore:!1,searchForItems:a("search"),toggleShowMore:a("show more")})});m.__docgenInfo={description:"",methods:[],displayName:"Default"};f.__docgenInfo={description:"",methods:[],displayName:"ShowMore"};d.__docgenInfo={description:"",methods:[],displayName:"Searchable"};p.__docgenInfo={description:"",methods:[],displayName:"Toggleable"};h.__docgenInfo={description:"",methods:[],displayName:"ExpandCollapse"};g.__docgenInfo={description:"",methods:[],displayName:"CustomRender"};b.__docgenInfo={description:"",methods:[],displayName:"onActive"};var E,_,q;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`() => <FacetList title='Make' useRefinementList={() => ({
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
})} />`,...(q=(_=m.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var N,z,O;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`() => <FacetList title='Brand' useRefinementList={() => ({
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
})} />`,...(O=(z=f.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var D,V,B;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`() => <FacetList searchable title='States' useRefinementList={() => ({
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
})} />`,...(B=(V=d.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var P,H,J;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`() => <FacetList toggleable title='States' useRefinementList={() => ({
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
})} />`,...(J=(H=p.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,U,X;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
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
}`,...(X=(U=h.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Q,$,G;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`() => <FacetList renderLabel={item => <div style={{
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
})} />`,...(G=($=g.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var W,Y,Z;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`() => <FacetList onActive={action('active')} title='Make' useRefinementList={() => ({
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
})} />`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const ua=["Default","ShowMore","Searchable","Toggleable","ExpandCollapse","CustomRender","onActive"];export{g as CustomRender,m as Default,h as ExpandCollapse,d as Searchable,f as ShowMore,p as Toggleable,ua as __namedExportsOrder,ca as default,b as onActive};
