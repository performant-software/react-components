import{r as l,j as s}from"./iframe-0kzOYbDl.js";import{_ as n}from"./index-default-B8-H6N8J.js";import{D as m}from"./DropdownButton-D3qOSE2V.js";import"./Button-BZG2A5sY.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-F4BGMwza.js";import"./Icon-DJJMCTRL.js";import"./Label-yTVPsSkO.js";import"./ModernAutoControlledComponent-D9Qz_mdq.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-Bc-ZWqwy.js";import"./toFinite-BrzBV7X5.js";import"./forEach-Ccrb3wYW.js";import"./Dimmer-DhIieFQ_.js";import"./Portal-TP5vWZSH.js";import"./keyboardKey-BpJXLMj5.js";import"./map-CCTlyAeB.js";import"./Dropdown-MxwihQWT.js";import"./without-vvNQ-4ZN.js";import"./isArrayLikeObject-DDtLjSQn.js";import"./isEmpty-DMciCs1Z.js";import"./deburr-CHwjFq6R.js";import"./index-Bhi9vhgR.js";import"./_baseSet-Cku8bvQD.js";import"./_baseAssignValue-VJsfCBN8.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-C9tZ6ZJB.js";const F={title:"Components/Semantic UI/DropdownButton"},o=()=>{const t=[{key:"red",value:"red",text:"Red"},{key:"blue",value:"blue",text:"Blue"},{key:"yellow",value:"yellow",text:"Yellow"}],[e,p]=l.useState(n.first(t).value);return s.jsx(m,{onChange:(r,{value:i})=>p(i),options:t,text:n.find(t,r=>r.value===e).text,value:e})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
