import{r as c,j as t}from"./iframe-FoyjJkLC.js";import{B as i}from"./Button-C1MU8Mf7.js";import{B as a}from"./ButtonGroup-tWKR_n98.js";import{I as l}from"./Icon-9AG7BwaS.js";import"./clsx-B-dksMZM.js";const B={title:"Components/Core Data/ButtonGroup",component:a},o=()=>{const[e,n]=c.useState("list");return t.jsxs(a,{children:[t.jsx(i,{onClick:()=>n("list"),primary:e==="list",children:"List"}),t.jsx(i,{onClick:()=>n("table"),primary:e==="table",children:"Table"}),t.jsx(i,{onClick:()=>n("timeline"),primary:e==="timeline",children:"Timeline"})]})},s=()=>{const[e,n]=c.useState("list");return t.jsxs(a,{rounded:!0,children:[t.jsx(i,{onClick:()=>n("list"),primary:e==="list",children:"List"}),t.jsx(i,{onClick:()=>n("table"),primary:e==="table",children:"Table"}),t.jsx(i,{onClick:()=>n("timeline"),primary:e==="timeline",children:"Timeline"})]})},r=()=>{const[e,n]=c.useState("list");return t.jsxs(a,{icon:!0,children:[t.jsxs(i,{onClick:()=>n("list"),primary:e==="list",children:[t.jsx(l,{name:"list"}),"List"]}),t.jsxs(i,{onClick:()=>n("table"),primary:e==="table",children:[t.jsx(l,{name:"table"}),"Table"]})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"Rounded"};r.__docgenInfo={description:"",methods:[],displayName:"Icons"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const b=["Default","Rounded","Icons"];export{o as Default,r as Icons,s as Rounded,b as __namedExportsOrder,B as default};
