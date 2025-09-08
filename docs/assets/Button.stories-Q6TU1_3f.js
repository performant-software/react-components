import{j as e}from"./iframe-isOIMYbo.js";import{B as o}from"./Button-C4OIbm46.js";import{I as l}from"./Icon-BZ7dDYLE.js";import"./clsx-B-dksMZM.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,h={title:"Components/Core Data/Button",component:o},r=()=>e.jsx(o,{onClick:t("click"),children:"Button"}),s=()=>e.jsx(o,{onClick:t("click"),rounded:!0,children:"Button"}),n=()=>e.jsx(o,{onClick:t("click"),primary:!0,children:"Button"}),c=()=>e.jsx(o,{onClick:t("click"),secondary:!0,children:"Button"}),a=()=>e.jsxs(o,{onClick:t("click"),primary:!0,rounded:!0,children:[e.jsx(l,{name:"export"}),"Export"]}),i=()=>e.jsx(o,{onClick:t("click"),icon:!0,primary:!0,children:e.jsx(l,{name:"info"})}),d=()=>e.jsx(o,{className:"bg-blue-500 text-white",children:"This is blue"}),m=()=>e.jsx(o,{onClick:t("click"),disabled:!0,children:"Button"}),u=()=>e.jsx(o,{className:"text-white bg-blue-500 md:bg-green-500 lg:bg-red-500",children:"Breakpoints"});r.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"Rounded"};n.__docgenInfo={description:"",methods:[],displayName:"Primary"};c.__docgenInfo={description:"",methods:[],displayName:"Secondary"};a.__docgenInfo={description:"",methods:[],displayName:"IconWithText"};i.__docgenInfo={description:"",methods:[],displayName:"IconOnly"};d.__docgenInfo={description:"",methods:[],displayName:"CustomClasses"};m.__docgenInfo={description:"",methods:[],displayName:"Disabled"};u.__docgenInfo={description:"",methods:[],displayName:"Breakpoints"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <Button onClick={action('click')}>
    Button
  </Button>`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <Button onClick={action('click')} rounded>
    Button
  </Button>`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <Button onClick={action('click')} primary>
    Button
  </Button>`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => <Button onClick={action('click')} secondary>
    Button
  </Button>`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <Button onClick={action('click')} primary rounded>
    <Icon name='export' />
    Export
  </Button>`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <Button onClick={action('click')} icon primary>
    <Icon name='info' />
  </Button>`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => <Button className='bg-blue-500 text-white'>
    This is blue
  </Button>`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <Button onClick={action('click')} disabled>
    Button
  </Button>`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => <Button className='text-white bg-blue-500 md:bg-green-500 lg:bg-red-500'>
    Breakpoints
  </Button>`,...u.parameters?.docs?.source}}};const _=["Default","Rounded","Primary","Secondary","IconWithText","IconOnly","CustomClasses","Disabled","Breakpoints"];export{u as Breakpoints,d as CustomClasses,r as Default,m as Disabled,i as IconOnly,a as IconWithText,n as Primary,s as Rounded,c as Secondary,_ as __namedExportsOrder,h as default};
