import{j as a}from"./jsx-runtime-D9TvR9R2.js";import{r as u}from"./index-C0dDX-lL.js";import{_ as n}from"./index-default-C_maRo4o.js";import{D as d}from"./DropdownButton-BOdm4mkS.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-CJhT71wt.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BSRayMAs.js";import"./Icon-C_3d7-zE.js";import"./Label-aEFd48OX.js";import"./ModernAutoControlledComponent-C211dBIC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-Cc_HXDPA.js";import"./toFinite-C3oJXAtX.js";import"./forEach-CLeEMxs1.js";import"./Dimmer-DP3fvqlo.js";import"./Portal-B8DXQ6EK.js";import"./keyboardKey-OMDgGVm3.js";import"./index-DOYXiIEK.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-DWKMCCtW.js";import"./Dropdown-DwNow7wJ.js";import"./without-Duh6Zu7H.js";import"./isArrayLikeObject-Bl_bAmop.js";import"./isEmpty-CY-Bv0TY.js";import"./deburr-CNLr_JRW.js";import"./index-mbjjMjCk.js";import"./_baseSet-BllfnHSO.js";import"./_baseAssignValue-UQlBDUKN.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-B6f9p5im.js";const P={title:"Components/Semantic UI/DropdownButton"},o=()=>{const t=[{key:"red",value:"red",text:"Red"},{key:"blue",value:"blue",text:"Blue"},{key:"yellow",value:"yellow",text:"Yellow"}],[e,l]=u.useState(n.first(t).value);return a.jsx(d,{onChange:(r,{value:s})=>l(s),options:t,text:n.find(t,r=>r.value===e).text,value:e})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,i,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const options = [{
    key: 'red',
    value: 'red',
    text: 'Red'
  }, {
    key: 'blue',
    value: 'blue',
    text: 'Blue'
  }, {
    key: 'yellow',
    value: 'yellow',
    text: 'Yellow'
  }];
  const [color, setColor] = useState(_.first(options).value);
  return <DropdownButton onChange={(e, {
    value
  }) => setColor(value)} options={options} text={_.find(options, o => o.value === color).text} value={color} />;
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Q=["Default"];export{o as Default,Q as __namedExportsOrder,P as default};
