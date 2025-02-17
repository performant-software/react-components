import{j as c}from"./jsx-runtime-D9TvR9R2.js";import{r as m}from"./index-C0dDX-lL.js";import{$ as k,a as p}from"./index-DsC2wsEy.js";import{c as u}from"./clsx-B-dksMZM.js";import{I as x}from"./Icon-DNuTFG_h.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CCbyfPlC.js";import"./index-CIyLsbPd.js";import"./index-DOYXiIEK.js";import"./index-DwxJ7BsK.js";import"./index-BqvWSUer.js";const b=e=>c.jsx(k,{"aria-label":e.ariaLabel,checked:e.checked,className:"rounded-sm",disabled:e.disabled,id:e.id,onCheckedChange:e.onClick,children:c.jsx(p,{asChild:!0,forceMount:!0,children:c.jsx(x,{className:u({"fill-primary":e.checked},{"fill-black":!e.checked},{"hover:bg-white":!e.checked}),name:e.checked?"checkbox_filled":"checkbox"})})}),r=b;b.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{ariaLabel:{required:!0,flowType:{name:"string"},description:"Label to show in the aria-label property for screen readers."},checked:{required:!0,flowType:{name:"boolean"},description:"Boolean state of the checkbox."},disabled:{required:!1,flowType:{name:"boolean"},description:"(Optional) Whether to disable the checkbox."},id:{required:!1,flowType:{name:"string"},description:"HTML ID to apply to the checkbox"},onClick:{required:!0,flowType:{name:"signature",type:"function",raw:"(arg: boolean) => any",signature:{arguments:[{name:"arg",type:{name:"boolean"}}],return:{name:"any"}}},description:`Callback that determines what to do when the checkbox is clicked.
@param {boolean} arg
@returns`}}};const S={title:"Components/Core Data/Checkbox",component:r},o=()=>{const[e,t]=m.useState(!0);return c.jsx(r,{onClick:()=>t(!e),checked:e,ariaLabel:"my checkbox"})},a=()=>{const[e,t]=m.useState(!0);return c.jsxs(c.Fragment,{children:[c.jsxs("label",{htmlFor:"my-checkbox",children:["Because this label's  ",c.jsx("code",{children:"htmlFor"}),"  prop matches the Checkbox's ID, you can click anywhere on this label to toggle the checkbox."]}),c.jsx("br",{}),c.jsx(r,{id:"my-checkbox",onClick:()=>t(!e),checked:e,ariaLabel:"my checkbox"})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"WithId"};var s,n,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState(true);
  return <Checkbox onClick={() => setChecked(!checked)} checked={checked} ariaLabel='my checkbox' />;
}`,...(i=(n=o.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var h,d,l;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const T=["Default","WithId"];export{o as Default,a as WithId,T as __namedExportsOrder,S as default};
