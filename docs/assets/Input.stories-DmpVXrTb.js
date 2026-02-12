import{r as o,j as s}from"./iframe-Bo-cahqR.js";import{I as t}from"./Input-CJ6mdvPp.js";import"./clsx-B-dksMZM.js";import"./Icon-BYZPZM_p.js";import"./i18n-DmKDVPrF.js";import"./toPropertyKey-BdisF6oo.js";import"./defineProperty-BhpcgfZc.js";import"./inherits-DDprkOLY.js";import"./assertThisInitialized-B9jnkVVz.js";import"./setPrototypeOf-DgZC2w_0.js";import"./createClass-CGi6Kyeu.js";const b={title:"Components/Core Data/Input",component:t},n=()=>{const[e,r]=o.useState("");return s.jsx(t,{onChange:a=>r(a),placeholder:"Search",value:e})},c=()=>{const[e,r]=o.useState("I'm disabled");return s.jsx(t,{disabled:!0,onChange:a=>r(a),placeholder:"Search",value:e})},u=()=>{const[e,r]=o.useState("");return s.jsx(t,{clearable:!1,onChange:a=>r(a),placeholder:"Search",value:e})},l=()=>{const[e,r]=o.useState("");return s.jsx(t,{onChange:a=>r(a),icon:"search",placeholder:"Search",value:e})},d=()=>{const[e,r]=o.useState("");return s.jsx(t,{className:"bg-red-50 italic",onChange:a=>r(a),icon:"search",placeholder:"Search",value:e})},p=()=>{const[e,r]=o.useState("");return s.jsx("div",{className:"w-[300px]",children:s.jsx(t,{className:"bg-red-50 italic",onChange:a=>r(a),icon:"search",placeholder:"Search",value:e})})};n.__docgenInfo={description:"",methods:[],displayName:"Default"};c.__docgenInfo={description:"",methods:[],displayName:"Disabled"};u.__docgenInfo={description:"",methods:[],displayName:"NotClearable"};l.__docgenInfo={description:"",methods:[],displayName:"WithIcon"};d.__docgenInfo={description:"",methods:[],displayName:"CustomStyled"};p.__docgenInfo={description:"",methods:[],displayName:"InContainer"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const [query, setQuery] = useState('');
  return <Input onChange={val => setQuery(val)} placeholder='Search' value={query} />;
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const [query, setQuery] = useState('I\\'m disabled');
  return <Input disabled onChange={val => setQuery(val)} placeholder='Search' value={query} />;
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const [query, setQuery] = useState('');
  return <Input clearable={false} onChange={val => setQuery(val)} placeholder='Search' value={query} />;
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const [query, setQuery] = useState('');
  return <Input onChange={val => setQuery(val)} icon='search' placeholder='Search' value={query} />;
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [query, setQuery] = useState('');
  return <Input className='bg-red-50 italic' onChange={val => setQuery(val)} icon='search' placeholder='Search' value={query} />;
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const [query, setQuery] = useState('');
  return <div className='w-[300px]'>
      <Input className='bg-red-50 italic' onChange={val => setQuery(val)} icon='search' placeholder='Search' value={query} />
    </div>;
}`,...p.parameters?.docs?.source}}};const N=["Default","Disabled","NotClearable","WithIcon","CustomStyled","InContainer"];export{d as CustomStyled,n as Default,c as Disabled,p as InContainer,u as NotClearable,l as WithIcon,N as __namedExportsOrder,b as default};
