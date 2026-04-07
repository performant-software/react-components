import{r as l,j as s}from"./iframe-BLgZWRCp.js";import{_ as n}from"./index-default-B8-H6N8J.js";import{D as m}from"./DropdownButton-BYGuEiFX.js";import"./Button-DBnOKBlt.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-1IYaeY7q.js";import"./Icon-CxJFFl9I.js";import"./Label-CA5c1o9n.js";import"./ModernAutoControlledComponent-BNuszL3K.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-U-4bWchp.js";import"./toFinite-B0zBBCYH.js";import"./forEach-B66pbtzg.js";import"./Dimmer-DQZjKlMb.js";import"./Portal-SWFjn5WJ.js";import"./keyboardKey-TMamj3A2.js";import"./map-CWHsrrW0.js";import"./Dropdown-B39ca9nf.js";import"./without-hXNxFN8L.js";import"./isArrayLikeObject-qJU1iGYR.js";import"./isEmpty-CV68PeRk.js";import"./deburr-CFKzU-xv.js";import"./index-C2wuau_u.js";import"./_baseSet-Auq_ii7C.js";import"./_baseAssignValue-BYD9r0Sk.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-B61iGI06.js";const F={title:"Components/Semantic UI/DropdownButton"},o=()=>{const t=[{key:"red",value:"red",text:"Red"},{key:"blue",value:"blue",text:"Blue"},{key:"yellow",value:"yellow",text:"Yellow"}],[e,p]=l.useState(n.first(t).value);return s.jsx(m,{onChange:(r,{value:i})=>p(i),options:t,text:n.find(t,r=>r.value===e).text,value:e})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
