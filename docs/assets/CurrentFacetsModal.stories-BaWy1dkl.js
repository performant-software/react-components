import{j as r}from"./jsx-runtime-D9TvR9R2.js";import{f as n}from"./index-xJp9Kd2E.js";import{a}from"./chunk-WFFRPTHA-B2vgThZf.js";import{r as c}from"./index-C0dDX-lL.js";import{B as l}from"./Button-CJhT71wt.js";import{_ as u}from"./index-default-C_maRo4o.js";import{C as p}from"./CurrentFacetsModal-BP6TLNpc.js";import"./preview-errors-CzpZmerH.js";import"./index-CKJfshIT.js";import"./v4-D8aEg3BZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BSRayMAs.js";import"./Icon-C_3d7-zE.js";import"./Label-aEFd48OX.js";import"./ModernAutoControlledComponent-C211dBIC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-Cc_HXDPA.js";import"./toFinite-C3oJXAtX.js";import"./forEach-CLeEMxs1.js";import"./Dimmer-DP3fvqlo.js";import"./Portal-B8DXQ6EK.js";import"./keyboardKey-OMDgGVm3.js";import"./index-DOYXiIEK.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-DWKMCCtW.js";import"./Modal-BWgkEMr1.js";import"./index-mbjjMjCk.js";import"./_baseSet-BllfnHSO.js";import"./_baseAssignValue-UQlBDUKN.js";import"./_arrayReduce-CrxnWFSq.js";import"./isEmpty-CY-Bv0TY.js";import"./CurrentFacetLabels-ym_AgreK.js";import"./i18n-CM1tepcX.js";import"./i18next-CwS9wMM1.js";import"./toPropertyKey-BcUJYDQU.js";import"./defineProperty-DcNpp85p.js";import"./inherits-CWPG5jll.js";import"./createClass-CV9nCQMI.js";import"./getPrototypeOf-BYVhAdwF.js";const rt={title:"Components/Semantic UI/CurrentFacetsModal",component:p},f=e=>u.times(e,()=>{const t=n.color.human();return{label:t,onClick:a(`${t} clicked`)}}),o=()=>{const[e,t]=c.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(l,{content:"Open",onClick:()=>t(!0)}),r.jsx(p,{items:f(10),onClose:()=>t(!1),open:e})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};var i,m,s;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const [visible, setVisible] = useState(false);
  return <>
      <Button content='Open' onClick={() => setVisible(true)} />
      <CurrentFacetsModal items={createItems(10)} onClose={() => setVisible(false)} open={visible} />
    </>;
}`,...(s=(m=o.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const et=["Default"];export{o as Default,et as __namedExportsOrder,rt as default};
