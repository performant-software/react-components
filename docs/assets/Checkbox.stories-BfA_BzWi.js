import{j as c}from"./jsx-runtime-D9TvR9R2.js";import{r as n}from"./index-C0dDX-lL.js";import{$ as C,a as f}from"./index-DsC2wsEy.js";import{c as l}from"./clsx-B-dksMZM.js";import{I as g}from"./Icon-BkrLHT7c.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CCbyfPlC.js";import"./index-CIyLsbPd.js";import"./index-DOYXiIEK.js";import"./index-DwxJ7BsK.js";import"./index-BqvWSUer.js";const y=e=>c.jsx(C,{"aria-label":e.ariaLabel,checked:e.checked,className:l("rounded-sm hover:bg-transparent",e.className),disabled:e.disabled,id:e.id,onCheckedChange:e.onClick,children:c.jsx(f,{asChild:!0,forceMount:!0,children:c.jsx(g,{className:l({"fill-primary":e.checked},{"fill-black":!e.checked}),name:e.checked?"checkbox_filled":"checkbox"})})}),s=y;y.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{ariaLabel:{required:!0,flowType:{name:"string"},description:"Label to show in the aria-label property for screen readers."},className:{required:!1,flowType:{name:"string"},description:"(Optional) Tailwind classes for the root button component."},checked:{required:!0,flowType:{name:"boolean"},description:"Boolean state of the checkbox."},disabled:{required:!1,flowType:{name:"boolean"},description:"(Optional) Whether to disable the checkbox."},id:{required:!1,flowType:{name:"string"},description:"HTML ID to apply to the checkbox"},onClick:{required:!0,flowType:{name:"signature",type:"function",raw:"(arg: boolean) => any",signature:{arguments:[{name:"arg",type:{name:"boolean"}}],return:{name:"any"}}},description:`Callback that determines what to do when the checkbox is clicked.
@param {boolean} arg
@returns`}}};const q={title:"Components/Core Data/Checkbox",component:s},t=()=>{const[e,o]=n.useState(!0);return c.jsx(s,{onClick:()=>o(!e),checked:e,ariaLabel:"my checkbox"})},a=()=>{const[e,o]=n.useState(!0);return c.jsxs(c.Fragment,{children:[c.jsxs("label",{htmlFor:"my-checkbox",children:["Because this label's  ",c.jsx("code",{children:"htmlFor"}),"  prop matches the Checkbox's ID, you can click anywhere on this label to toggle the checkbox."]}),c.jsx("br",{}),c.jsx(s,{id:"my-checkbox",onClick:()=>o(!e),checked:e,ariaLabel:"my checkbox"})]})},r=()=>{const[e,o]=n.useState(!0);return c.jsxs(c.Fragment,{children:[c.jsxs("label",{htmlFor:"my-checkbox",children:["Because this label's  ",c.jsx("code",{children:"htmlFor"}),"  prop matches the Checkbox's ID, you can click anywhere on this label to toggle the checkbox."]}),c.jsx("br",{}),c.jsx(s,{className:"bg-red-200 hover:bg-purple-200",id:"my-checkbox",onClick:()=>o(!e),checked:e,ariaLabel:"my checkbox"})]})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"WithId"};r.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};var h,i,d;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState(true);
  return <Checkbox onClick={() => setChecked(!checked)} checked={checked} ariaLabel='my checkbox' />;
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,b,k;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState(true);
  return <>
      <label htmlFor='my-checkbox'>
        Because this label&apos;s
        &nbsp;
        <code>htmlFor</code>
        &nbsp;
        prop matches the Checkbox&apos;s ID, you can click anywhere on this label to toggle the checkbox.
      </label>
      <br />
      <Checkbox id='my-checkbox' onClick={() => setChecked(!checked)} checked={checked} ariaLabel='my checkbox' />
    </>;
}`,...(k=(b=a.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var p,u,x;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState(true);
  return <>
      <label htmlFor='my-checkbox'>
        Because this label&apos;s
        &nbsp;
        <code>htmlFor</code>
        &nbsp;
        prop matches the Checkbox&apos;s ID, you can click anywhere on this label to toggle the checkbox.
      </label>
      <br />
      <Checkbox className='bg-red-200 hover:bg-purple-200' id='my-checkbox' onClick={() => setChecked(!checked)} checked={checked} ariaLabel='my checkbox' />
    </>;
}`,...(x=(u=r.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const B=["Default","WithId","CustomStyles"];export{r as CustomStyles,t as Default,a as WithId,B as __namedExportsOrder,q as default};
