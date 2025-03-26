import{j as t}from"./jsx-runtime-D9TvR9R2.js";import{r as p}from"./index-C0dDX-lL.js";import{B as i}from"./Button-CaUjku6Z.js";import{c as v}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-BosuxZz1.js";const B=e=>t.jsx("div",{className:v("inline-flex",{"[&>:first-child]:rounded-s-md [&>:last-child]:rounded-e-md":e.rounded},e.className),children:e.children}),s=B;B.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{children:{required:!0,flowType:{name:"Node"},description:""},className:{required:!1,flowType:{name:"string"},description:""},rounded:{required:!1,flowType:{name:"boolean"},description:""}}};const b={title:"Components/Core Data/ButtonGroup",component:s},r=()=>{const[e,n]=p.useState("list");return t.jsxs(s,{children:[t.jsx(i,{onClick:()=>n("list"),primary:e==="list",children:"List"}),t.jsx(i,{onClick:()=>n("table"),primary:e==="table",children:"Table"}),t.jsx(i,{onClick:()=>n("timeline"),primary:e==="timeline",children:"Timeline"})]})},o=()=>{const[e,n]=p.useState("list");return t.jsxs(s,{rounded:!0,children:[t.jsx(i,{onClick:()=>n("list"),primary:e==="list",children:"List"}),t.jsx(i,{onClick:()=>n("table"),primary:e==="table",children:"Table"}),t.jsx(i,{onClick:()=>n("timeline"),primary:e==="timeline",children:"Timeline"})]})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"Rounded"};var a,l,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var u,d,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const k=["Default","Rounded"];export{r as Default,o as Rounded,k as __namedExportsOrder,b as default};
