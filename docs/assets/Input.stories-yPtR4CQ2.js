import{j as c}from"./jsx-runtime-BTCK_S7S.js";import{r as u}from"./index-CBqU2yxZ.js";import{I as n}from"./Input-DHRCKsWV.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./Icon-BJPA3lGg.js";const _={title:"Components/Core Data/Input",component:n},a=()=>{const[e,r]=u.useState("");return c.jsx(n,{onChange:t=>r(t),placeholder:"Search",value:e})},s=()=>{const[e,r]=u.useState("");return c.jsx(n,{onChange:t=>r(t),icon:"search",placeholder:"Search",value:e})},o=()=>{const[e,r]=u.useState("");return c.jsx(n,{className:"bg-red-50 italic",onChange:t=>r(t),icon:"search",placeholder:"Search",value:e})};a.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"WithIcon"};o.__docgenInfo={description:"",methods:[],displayName:"CustomStyled"};var l,p,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const [query, setQuery] = useState('');
  return <Input onChange={val => setQuery(val)} placeholder='Search' value={query} />;
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,i,h;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const [query, setQuery] = useState('');
  return <Input onChange={val => setQuery(val)} icon='search' placeholder='Search' value={query} />;
}`,...(h=(i=s.parameters)==null?void 0:i.docs)==null?void 0:h.source}}};var y,S,g;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const [query, setQuery] = useState('');
  return <Input className='bg-red-50 italic' onChange={val => setQuery(val)} icon='search' placeholder='Search' value={query} />;
}`,...(g=(S=o.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const x=["Default","WithIcon","CustomStyled"];export{o as CustomStyled,a as Default,s as WithIcon,x as __namedExportsOrder,_ as default};
