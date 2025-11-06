import{j as c,r as n}from"./iframe-B8scVUHo.js";import{$ as h,a as i}from"./index-DcXkCu5G.js";import{c as l}from"./clsx-B-dksMZM.js";import{I as d}from"./Icon-BVtA6CKw.js";import"./extends-CCbyfPlC.js";import"./index-BY_kOWLn.js";import"./index-BDUSRgY6.js";import"./index-DWvrCBKU.js";const s=e=>c.jsx(h,{"aria-label":e.ariaLabel,checked:e.checked,className:l("rounded-sm hover:bg-transparent",e.className),disabled:e.disabled,id:e.id,onCheckedChange:e.onClick,children:c.jsx(i,{asChild:!0,forceMount:!0,children:c.jsx(d,{className:l({"fill-primary":e.checked},{"fill-black":!e.checked}),name:e.checked?"checkbox_filled":"checkbox"})})});s.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{ariaLabel:{required:!0,flowType:{name:"string"},description:"Label to show in the aria-label property for screen readers."},className:{required:!1,flowType:{name:"string"},description:"(Optional) Tailwind classes for the root button component."},checked:{required:!0,flowType:{name:"boolean"},description:"Boolean state of the checkbox."},disabled:{required:!1,flowType:{name:"boolean"},description:"(Optional) Whether to disable the checkbox."},id:{required:!1,flowType:{name:"string"},description:"HTML ID to apply to the checkbox"},onClick:{required:!0,flowType:{name:"signature",type:"function",raw:"(arg: boolean) => any",signature:{arguments:[{name:"arg",type:{name:"boolean"}}],return:{name:"any"}}},description:`Callback that determines what to do when the checkbox is clicked.
@param {boolean} arg
@returns`}}};const f={title:"Components/Core Data/Checkbox",component:s},a=()=>{const[e,o]=n.useState(!0);return c.jsx(s,{onClick:()=>o(!e),checked:e,ariaLabel:"my checkbox"})},t=()=>{const[e,o]=n.useState(!0);return c.jsxs(c.Fragment,{children:[c.jsxs("label",{htmlFor:"my-checkbox",children:["Because this label's  ",c.jsx("code",{children:"htmlFor"}),"  prop matches the Checkbox's ID, you can click anywhere on this label to toggle the checkbox."]}),c.jsx("br",{}),c.jsx(s,{id:"my-checkbox",onClick:()=>o(!e),checked:e,ariaLabel:"my checkbox"})]})},r=()=>{const[e,o]=n.useState(!0);return c.jsxs(c.Fragment,{children:[c.jsxs("label",{htmlFor:"my-checkbox",children:["Because this label's  ",c.jsx("code",{children:"htmlFor"}),"  prop matches the Checkbox's ID, you can click anywhere on this label to toggle the checkbox."]}),c.jsx("br",{}),c.jsx(s,{className:"bg-red-200 hover:bg-purple-200",id:"my-checkbox",onClick:()=>o(!e),checked:e,ariaLabel:"my checkbox"})]})};a.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"WithId"};r.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState(true);
  return <Checkbox onClick={() => setChecked(!checked)} checked={checked} ariaLabel='my checkbox' />;
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const g=["Default","WithId","CustomStyles"];export{r as CustomStyles,a as Default,t as WithId,g as __namedExportsOrder,f as default};
