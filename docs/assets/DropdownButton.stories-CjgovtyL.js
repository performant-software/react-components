import{r as m,j as l}from"./iframe-DTMBAB_o.js";import{_ as n}from"./index-default-B8-H6N8J.js";import{D as s}from"./DropdownButton-CpkdMj5A.js";import"./Button-BNNyQwcZ.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-wYlxU5u7.js";import"./_getPrototype-dFVwFHqx.js";import"./Icon-CznQEfm0.js";import"./Label-BAJSDKE-.js";import"./ModernAutoControlledComponent-B-F5ooAU.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-Bugyy3M_.js";import"./toFinite-Dfj0KU41.js";import"./toNumber-DIkYOhwr.js";import"./forEach-8Y8gjC-M.js";import"./_arrayEach-DpGxo2Of.js";import"./Dimmer-CvmanVuk.js";import"./Portal-DZuQlAAB.js";import"./keyboardKey-BIX05c3i.js";import"./map-DCSMhg6_.js";import"./Dropdown-cvYziEoi.js";import"./without-DUYHN8Pi.js";import"./isArrayLikeObject-DSLl7ti9.js";import"./isEmpty-CIv_nSFx.js";import"./deburr-B03ICjHD.js";import"./index-DZXNMB2G.js";import"./_baseSet-Ti7cMXgj.js";import"./_assignValue-wlBxhqFj.js";import"./_baseAssignValue-yJv1-bft.js";import"./_arrayReduce-CrxnWFSq.js";import"./isEqual-mHuJTF3G.js";import"./filter-BvR9Uu7J.js";const L={title:"Components/Semantic UI/DropdownButton"},o=()=>{const t=[{key:"red",value:"red",text:"Red"},{key:"blue",value:"blue",text:"Blue"},{key:"yellow",value:"yellow",text:"Yellow"}],[e,p]=m.useState(n.first(t).value);return l.jsx(s,{onChange:(r,{value:i})=>p(i),options:t,text:n.find(t,r=>r.value===e).text,value:e})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const M=["Default"];export{o as Default,M as __namedExportsOrder,L as default};
