import{r as l,j as s}from"./iframe-FoyjJkLC.js";import{_ as n}from"./index-default-B8-H6N8J.js";import{D as m}from"./DropdownButton-DwPtLY2Q.js";import"./Button-C1RUeWn8.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-DMFQxvJl.js";import"./Icon-QRCs_MGh.js";import"./Label-CV3ai1CB.js";import"./ModernAutoControlledComponent-BLgbTsFj.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-X8sRVAnC.js";import"./toFinite-Cv0DjQlj.js";import"./forEach-t8Zrn7U4.js";import"./Dimmer-C7VJRKUP.js";import"./Portal-4bHDrQld.js";import"./keyboardKey-DN4ANEu9.js";import"./map-B7VPJt9U.js";import"./Dropdown-DsjIv487.js";import"./without-B65ne6dp.js";import"./isArrayLikeObject-o8TpvWN0.js";import"./isEmpty-GD1DGAFF.js";import"./deburr-DDMYBnEi.js";import"./index-CFjv22fL.js";import"./_baseSet-D5kAKEMz.js";import"./_baseAssignValue-vjYrEBAw.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-QYVzOKpd.js";const F={title:"Components/Semantic UI/DropdownButton"},o=()=>{const t=[{key:"red",value:"red",text:"Red"},{key:"blue",value:"blue",text:"Blue"},{key:"yellow",value:"yellow",text:"Yellow"}],[e,p]=l.useState(n.first(t).value);return s.jsx(m,{onChange:(r,{value:i})=>p(i),options:t,text:n.find(t,r=>r.value===e).text,value:e})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const G=["Default"];export{o as Default,G as __namedExportsOrder,F as default};
