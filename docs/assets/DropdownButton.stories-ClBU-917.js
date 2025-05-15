import{j as a}from"./jsx-runtime-D9TvR9R2.js";import{r as u}from"./index-C0dDX-lL.js";import{_ as n}from"./index-default-C_maRo4o.js";import{D as d}from"./DropdownButton-BEVDpDCZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-Dcib8V--.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-C_4y_n4F.js";import"./Icon-BGzIEILD.js";import"./Label-BqnFaqey.js";import"./ModernAutoControlledComponent-CBEnGjal.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-BAV9TYTx.js";import"./toFinite-DWd2HYc9.js";import"./forEach-Bj9nU5MO.js";import"./Dimmer-kmE_IUk6.js";import"./Portal-CKYxdKwP.js";import"./keyboardKey-OMDgGVm3.js";import"./index-DOYXiIEK.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-Dr4OE-Ab.js";import"./Dropdown-CChVlGq2.js";import"./without-5b9zAUWg.js";import"./isArrayLikeObject-BDKOwBZt.js";import"./isEmpty-D4udnfVx.js";import"./deburr-ClVont3z.js";import"./index-C2Sldg7a.js";import"./_baseSet-N8oZ1kqS.js";import"./_baseAssignValue-oMV-Qdk1.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-BXgalVMq.js";const P={title:"Components/Semantic UI/DropdownButton"},o=()=>{const t=[{key:"red",value:"red",text:"Red"},{key:"blue",value:"blue",text:"Blue"},{key:"yellow",value:"yellow",text:"Yellow"}],[e,l]=u.useState(n.first(t).value);return a.jsx(d,{onChange:(r,{value:s})=>l(s),options:t,text:n.find(t,r=>r.value===e).text,value:e})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,i,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
