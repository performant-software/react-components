import{j as t}from"./jsx-runtime-D9TvR9R2.js";import{r as p}from"./index-C0dDX-lL.js";import{I as s}from"./Input-BKHjpL_9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./Icon-xn5eBWjd.js";import"./i18n-O47xwIR-.js";import"./i18next-CwS9wMM1.js";import"./toPropertyKey-BcUJYDQU.js";import"./defineProperty-DcNpp85p.js";import"./inherits-CWPG5jll.js";import"./assertThisInitialized-B9jnkVVz.js";import"./setPrototypeOf-DgZC2w_0.js";import"./createClass-CV9nCQMI.js";import"./getPrototypeOf-BYVhAdwF.js";const H={title:"Components/Core Data/Input",component:s},o=()=>{const[e,r]=p.useState("");return t.jsx(s,{onChange:a=>r(a),placeholder:"Search",value:e})},n=()=>{const[e,r]=p.useState("");return t.jsx(s,{clearable:!1,onChange:a=>r(a),placeholder:"Search",value:e})},c=()=>{const[e,r]=p.useState("");return t.jsx(s,{onChange:a=>r(a),icon:"search",placeholder:"Search",value:e})},u=()=>{const[e,r]=p.useState("");return t.jsx(s,{className:"bg-red-50 italic",onChange:a=>r(a),icon:"search",placeholder:"Search",value:e})},l=()=>{const[e,r]=p.useState("");return t.jsx("div",{className:"w-[300px]",children:t.jsx(s,{className:"bg-red-50 italic",onChange:a=>r(a),icon:"search",placeholder:"Search",value:e})})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};n.__docgenInfo={description:"",methods:[],displayName:"NotClearable"};c.__docgenInfo={description:"",methods:[],displayName:"WithIcon"};u.__docgenInfo={description:"",methods:[],displayName:"CustomStyled"};l.__docgenInfo={description:"",methods:[],displayName:"InContainer"};var i,m,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const [query, setQuery] = useState('');
  return <Input onChange={val => setQuery(val)} placeholder='Search' value={query} />;
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var h,y,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const [query, setQuery] = useState('');
  return <Input clearable={false} onChange={val => setQuery(val)} placeholder='Search' value={query} />;
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var g,v,C;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [query, setQuery] = useState('');
  return <Input onChange={val => setQuery(val)} icon='search' placeholder='Search' value={query} />;
}`,...(C=(v=c.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var I,q,Q;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [query, setQuery] = useState('');
  return <Input className='bg-red-50 italic' onChange={val => setQuery(val)} icon='search' placeholder='Search' value={query} />;
}`,...(Q=(q=u.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var f,N,x;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [query, setQuery] = useState('');
  return <div className='w-[300px]'>
      <Input className='bg-red-50 italic' onChange={val => setQuery(val)} icon='search' placeholder='Search' value={query} />
    </div>;
}`,...(x=(N=l.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};const J=["Default","NotClearable","WithIcon","CustomStyled","InContainer"];export{u as CustomStyled,o as Default,l as InContainer,n as NotClearable,c as WithIcon,J as __namedExportsOrder,H as default};
