import{r as p,j as t}from"./iframe-vd5jUnmh.js";import{I as s}from"./Input-DJRQ_vle.js";import"./clsx-B-dksMZM.js";import"./Icon-T7dfSTvf.js";import"./i18n-DtnBOa9t.js";import"./toPropertyKey-BdisF6oo.js";import"./defineProperty-BhpcgfZc.js";import"./inherits-DDprkOLY.js";import"./assertThisInitialized-B9jnkVVz.js";import"./setPrototypeOf-DgZC2w_0.js";import"./createClass-CGi6Kyeu.js";const Q={title:"Components/Core Data/Input",component:s},o=()=>{const[e,r]=p.useState("");return t.jsx(s,{onChange:a=>r(a),placeholder:"Search",value:e})},n=()=>{const[e,r]=p.useState("");return t.jsx(s,{clearable:!1,onChange:a=>r(a),placeholder:"Search",value:e})},c=()=>{const[e,r]=p.useState("");return t.jsx(s,{onChange:a=>r(a),icon:"search",placeholder:"Search",value:e})},u=()=>{const[e,r]=p.useState("");return t.jsx(s,{className:"bg-red-50 italic",onChange:a=>r(a),icon:"search",placeholder:"Search",value:e})},l=()=>{const[e,r]=p.useState("");return t.jsx("div",{className:"w-[300px]",children:t.jsx(s,{className:"bg-red-50 italic",onChange:a=>r(a),icon:"search",placeholder:"Search",value:e})})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};n.__docgenInfo={description:"",methods:[],displayName:"NotClearable"};c.__docgenInfo={description:"",methods:[],displayName:"WithIcon"};u.__docgenInfo={description:"",methods:[],displayName:"CustomStyled"};l.__docgenInfo={description:"",methods:[],displayName:"InContainer"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const [query, setQuery] = useState('');
  return <Input onChange={val => setQuery(val)} placeholder='Search' value={query} />;
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const [query, setQuery] = useState('');
  return <Input clearable={false} onChange={val => setQuery(val)} placeholder='Search' value={query} />;
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const [query, setQuery] = useState('');
  return <Input onChange={val => setQuery(val)} icon='search' placeholder='Search' value={query} />;
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const [query, setQuery] = useState('');
  return <Input className='bg-red-50 italic' onChange={val => setQuery(val)} icon='search' placeholder='Search' value={query} />;
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const [query, setQuery] = useState('');
  return <div className='w-[300px]'>
      <Input className='bg-red-50 italic' onChange={val => setQuery(val)} icon='search' placeholder='Search' value={query} />
    </div>;
}`,...l.parameters?.docs?.source}}};const N=["Default","NotClearable","WithIcon","CustomStyled","InContainer"];export{u as CustomStyled,o as Default,l as InContainer,n as NotClearable,c as WithIcon,N as __namedExportsOrder,Q as default};
