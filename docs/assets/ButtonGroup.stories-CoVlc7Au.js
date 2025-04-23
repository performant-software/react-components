import{j as t}from"./jsx-runtime-D9TvR9R2.js";import{r as d}from"./index-C0dDX-lL.js";import{B as n}from"./Button-BQsnKR2z.js";import{B as s}from"./ButtonGroup-1FXbxVEl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";const k={title:"Components/Core Data/ButtonGroup",component:s},r=()=>{const[e,i]=d.useState("list");return t.jsxs(s,{children:[t.jsx(n,{onClick:()=>i("list"),primary:e==="list",children:"List"}),t.jsx(n,{onClick:()=>i("table"),primary:e==="table",children:"Table"}),t.jsx(n,{onClick:()=>i("timeline"),primary:e==="timeline",children:"Timeline"})]})},o=()=>{const[e,i]=d.useState("list");return t.jsxs(s,{rounded:!0,children:[t.jsx(n,{onClick:()=>i("list"),primary:e==="list",children:"List"}),t.jsx(n,{onClick:()=>i("table"),primary:e==="table",children:"Table"}),t.jsx(n,{onClick:()=>i("timeline"),primary:e==="timeline",children:"Timeline"})]})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"Rounded"};var a,c,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const [active, setActive] = useState('list');
  return <ButtonGroup>
      <Button onClick={() => setActive('list')} primary={active === 'list'}>
        List
      </Button>
      <Button onClick={() => setActive('table')} primary={active === 'table'}>
        Table
      </Button>
      <Button onClick={() => setActive('timeline')} primary={active === 'timeline'}>
        Timeline
      </Button>
    </ButtonGroup>;
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,m,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [active, setActive] = useState('list');
  return <ButtonGroup rounded>
      <Button onClick={() => setActive('list')} primary={active === 'list'}>
        List
      </Button>
      <Button onClick={() => setActive('table')} primary={active === 'table'}>
        Table
      </Button>
      <Button onClick={() => setActive('timeline')} primary={active === 'timeline'}>
        Timeline
      </Button>
    </ButtonGroup>;
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const f=["Default","Rounded"];export{r as Default,o as Rounded,f as __namedExportsOrder,k as default};
