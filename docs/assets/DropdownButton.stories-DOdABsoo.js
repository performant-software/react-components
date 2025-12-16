import{r as l,j as s}from"./iframe-Dd51AVec.js";import{_ as n}from"./index-default-B8-H6N8J.js";import{D as m}from"./DropdownButton-hO3sp6gV.js";import"./Button-COgPdyHQ.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-fSudkH_h.js";import"./Icon-Be-bmVif.js";import"./Label-DoRqLwn7.js";import"./ModernAutoControlledComponent-DgxHvlaW.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-COA85LJd.js";import"./toFinite-JyWO3W7G.js";import"./forEach-m0XN-fRo.js";import"./Dimmer-CaDuiwNx.js";import"./Portal-BCNDxyz_.js";import"./keyboardKey-CGzN62ID.js";import"./map-BK17dLm-.js";import"./Dropdown-y6qPc3m_.js";import"./without-Bt7dVsRr.js";import"./isArrayLikeObject-tQXbzKbF.js";import"./isEmpty-Cy-H3Tvh.js";import"./deburr-VT20eNUp.js";import"./index-Bvr92fDU.js";import"./_baseSet-D7oIsAQS.js";import"./_baseAssignValue-BhO4aFuJ.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-KfwrCHfk.js";const F={title:"Components/Semantic UI/DropdownButton"},o=()=>{const t=[{key:"red",value:"red",text:"Red"},{key:"blue",value:"blue",text:"Blue"},{key:"yellow",value:"yellow",text:"Yellow"}],[e,p]=l.useState(n.first(t).value);return s.jsx(m,{onChange:(r,{value:i})=>p(i),options:t,text:n.find(t,r=>r.value===e).text,value:e})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
