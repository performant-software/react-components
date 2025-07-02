import{j as t}from"./jsx-runtime-D9TvR9R2.js";import{r as c}from"./index-C0dDX-lL.js";import{B as i}from"./Button-BQsnKR2z.js";import{B as a}from"./ButtonGroup-iJ6ueQtW.js";import{I as l}from"./Icon-CLXecEt2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";const T={title:"Components/Core Data/ButtonGroup",component:a},o=()=>{const[e,n]=c.useState("list");return t.jsxs(a,{children:[t.jsx(i,{onClick:()=>n("list"),primary:e==="list",children:"List"}),t.jsx(i,{onClick:()=>n("table"),primary:e==="table",children:"Table"}),t.jsx(i,{onClick:()=>n("timeline"),primary:e==="timeline",children:"Timeline"})]})},r=()=>{const[e,n]=c.useState("list");return t.jsxs(a,{rounded:!0,children:[t.jsx(i,{onClick:()=>n("list"),primary:e==="list",children:"List"}),t.jsx(i,{onClick:()=>n("table"),primary:e==="table",children:"Table"}),t.jsx(i,{onClick:()=>n("timeline"),primary:e==="timeline",children:"Timeline"})]})},s=()=>{const[e,n]=c.useState("list");return t.jsxs(a,{icon:!0,children:[t.jsxs(i,{onClick:()=>n("list"),primary:e==="list",children:[t.jsx(l,{name:"list"}),"List"]}),t.jsxs(i,{onClick:()=>n("table"),primary:e==="table",children:[t.jsx(l,{name:"table"}),"Table"]})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"Rounded"};s.__docgenInfo={description:"",methods:[],displayName:"Icons"};var u,m,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,v,B;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
}`,...(B=(v=r.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var b,y,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [active, setActive] = useState('list');
  return <ButtonGroup icon>
      <Button onClick={() => setActive('list')} primary={active === 'list'}>
        <Icon name='list' />
        List
      </Button>
      <Button onClick={() => setActive('table')} primary={active === 'table'}>
        <Icon name='table' />
        Table
      </Button>
    </ButtonGroup>;
}`,...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const G=["Default","Rounded","Icons"];export{o as Default,s as Icons,r as Rounded,G as __namedExportsOrder,T as default};
