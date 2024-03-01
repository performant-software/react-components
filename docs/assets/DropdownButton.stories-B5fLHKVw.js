import{j as a}from"./jsx-runtime-BTCK_S7S.js";import{r as u}from"./index-CBqU2yxZ.js";import{_ as n}from"./index-default-C_maRo4o.js";import{D as d}from"./DropdownButton-D3g-r0e9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-Blq7Z6RX.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-CckcRzoH.js";import"./Icon-2tEtgK8g.js";import"./Label-Cq1fb1cd.js";import"./ModernAutoControlledComponent-DJBWk5EW.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-CQoJOerW.js";import"./toFinite-KQ8KevIC.js";import"./forEach-CXlln0XP.js";import"./Dimmer-D_gwaesu.js";import"./Portal-DvhHJPzU.js";import"./keyboardKey-OMDgGVm3.js";import"./index-DZGZymok.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-B4PnIEPz.js";import"./Dropdown-Di2cPjwR.js";import"./without-BP-mqg2K.js";import"./isArrayLikeObject-CbXKTyfk.js";import"./isEmpty-Cyb9hIKi.js";import"./deburr-CEfyoYOr.js";import"./index-BBpNyw-T.js";import"./_baseSet-6y0qliU9.js";import"./_baseAssignValue-izmKBXUH.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-CVNi8iPS.js";const P={title:"Components/Semantic UI/DropdownButton"},o=()=>{const t=[{key:"red",value:"red",text:"Red"},{key:"blue",value:"blue",text:"Blue"},{key:"yellow",value:"yellow",text:"Yellow"}],[e,l]=u.useState(n.first(t).value);return a.jsx(d,{onChange:(r,{value:s})=>l(s),options:t,text:n.find(t,r=>r.value===e).text,value:e})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,i,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
