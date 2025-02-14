import{j as c}from"./jsx-runtime-D9TvR9R2.js";import{r as m}from"./index-C0dDX-lL.js";import{$ as b,a as p}from"./index-DsC2wsEy.js";import{c as u}from"./clsx-B-dksMZM.js";import{I as x}from"./Icon-57nIhQao.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CCbyfPlC.js";import"./index-CIyLsbPd.js";import"./index-DOYXiIEK.js";import"./index-DwxJ7BsK.js";import"./index-BqvWSUer.js";const k=e=>c.jsx(b,{checked:e.checked,className:"rounded-sm",disabled:e.disabled,id:e.id,onCheckedChange:e.onClick,children:c.jsx(p,{asChild:!0,forceMount:!0,children:c.jsx(x,{className:u({"fill-primary":e.checked},{"fill-black":!e.checked},{"hover:bg-white":!e.checked}),name:e.checked?"checkbox-filled":"checkbox"})})}),a=k;k.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{onClick:{required:!0,flowType:{name:"signature",type:"function",raw:"(arg: boolean) => any",signature:{arguments:[{name:"arg",type:{name:"boolean"}}],return:{name:"any"}}},description:`Callback that determines what to do when the checkbox is clicked.
@param {boolean} arg
@returns`},checked:{required:!0,flowType:{name:"boolean"},description:"Boolean state of the checkbox."},id:{required:!1,flowType:{name:"string"},description:"HTML ID to apply to the checkbox"},disabled:{required:!1,flowType:{name:"boolean"},description:"(Optional) Whether to disable the checkbox."}}};const F={title:"Components/Core Data/Checkbox",component:a},o=()=>{const[e,r]=m.useState(!0);return c.jsx(a,{onClick:()=>r(!e),checked:e})},t=()=>{const[e,r]=m.useState(!0);return c.jsxs(c.Fragment,{children:[c.jsxs("label",{htmlFor:"my-checkbox",children:["Because this label's  ",c.jsx("code",{children:"htmlFor"}),"  prop matches the Checkbox's ID, you can click anywhere on this label to toggle the checkbox."]}),c.jsx("br",{}),c.jsx(a,{id:"my-checkbox",onClick:()=>r(!e),checked:e})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"WithId"};var s,n,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState(true);
  return <Checkbox onClick={() => setChecked(!checked)} checked={checked} />;
}`,...(d=(n=o.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var h,i,l;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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
      <Checkbox id='my-checkbox' onClick={() => setChecked(!checked)} checked={checked} />
    </>;
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const N=["Default","WithId"];export{o as Default,t as WithId,N as __namedExportsOrder,F as default};
