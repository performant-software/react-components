import{j as c}from"./jsx-runtime-D9TvR9R2.js";import{r as i}from"./index-C0dDX-lL.js";import{I as u}from"./Input-B1dLvyoL.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./Icon-BiV3qc2F.js";import"./i18n-DPLCrVxa.js";import"./i18next-CwS9wMM1.js";import"./toPropertyKey-BcUJYDQU.js";import"./defineProperty-DcNpp85p.js";import"./inherits-CWPG5jll.js";import"./assertThisInitialized-B9jnkVVz.js";import"./setPrototypeOf-DgZC2w_0.js";import"./createClass-CV9nCQMI.js";import"./getPrototypeOf-BYVhAdwF.js";const A={title:"Components/Core Data/Input",component:u},t=()=>{const[e,r]=i.useState("");return c.jsx(u,{onChange:a=>r(a),placeholder:"Search",value:e})},s=()=>{const[e,r]=i.useState("");return c.jsx(u,{onChange:a=>r(a),icon:"search",placeholder:"Search",value:e})},o=()=>{const[e,r]=i.useState("");return c.jsx(u,{className:"bg-red-50 italic",onChange:a=>r(a),icon:"search",placeholder:"Search",value:e})},n=()=>{const[e,r]=i.useState("");return c.jsx("div",{className:"w-[300px]",children:c.jsx(u,{className:"bg-red-50 italic",onChange:a=>r(a),icon:"search",placeholder:"Search",value:e})})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"WithIcon"};o.__docgenInfo={description:"",methods:[],displayName:"CustomStyled"};n.__docgenInfo={description:"",methods:[],displayName:"InContainer"};var p,l,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [query, setQuery] = useState('');
  return <Input onChange={val => setQuery(val)} placeholder='Search' value={query} />;
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,h,y;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const [query, setQuery] = useState('');
  return <Input onChange={val => setQuery(val)} icon='search' placeholder='Search' value={query} />;
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var S,g,v;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const [query, setQuery] = useState('');
  return <Input className='bg-red-50 italic' onChange={val => setQuery(val)} icon='search' placeholder='Search' value={query} />;
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var I,C,q;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [query, setQuery] = useState('');
  return <div className='w-[300px]'>
      <Input className='bg-red-50 italic' onChange={val => setQuery(val)} icon='search' placeholder='Search' value={query} />
    </div>;
}`,...(q=(C=n.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};const B=["Default","WithIcon","CustomStyled","InContainer"];export{o as CustomStyled,t as Default,n as InContainer,s as WithIcon,B as __namedExportsOrder,A as default};
