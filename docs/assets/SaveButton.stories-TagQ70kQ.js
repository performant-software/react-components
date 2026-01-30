import{r,j as t}from"./iframe-ZimVXjeC.js";import{S as a}from"./SaveButton-D7QZKeXs.js";import"./Button-o5mbra5X.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-wnuRSg6C.js";import"./Icon-D86Ecimj.js";import"./Label-Dg3qfUOk.js";import"./ModernAutoControlledComponent-DXgQ1uTy.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-DVGl8pTN.js";import"./toFinite-CwjWCu7j.js";import"./forEach-CmXYmqGw.js";import"./Dimmer-DT4wIu_e.js";import"./Portal-BYz1Z-gK.js";import"./keyboardKey-DNheEGds.js";import"./map-uw9Z0IbZ.js";import"./Loader-B3MRpEXl.js";import"./i18n-DkobdbHY.js";import"./i18next-eNuDfwAU.js";const W={title:"Components/Semantic UI/SaveButton",component:a},e=()=>{const[n,o]=r.useState("");return t.jsxs("div",{children:[t.jsx(a,{onClick:()=>o("You have saved!")}),t.jsx("p",{children:n})]})},s=()=>{const[n,o]=r.useState(!1),[i,m]=r.useState(""),p=()=>{o(!0),setTimeout(()=>{m("You have saved!"),o(!1)},3e3)};return t.jsxs("div",{children:[t.jsx(a,{onClick:p,saving:n}),t.jsx("p",{children:i})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"WithDelay"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const [msg, setMsg] = useState("");
  return <div>
      <SaveButton onClick={() => setMsg("You have saved!")} />
      <p>{msg}</p>
    </div>;
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");
  const onSave = () => {
    setSaving(true);
    setTimeout(() => {
      setMsg("You have saved!");
      setSaving(false);
    }, 3000);
  };
  return <div>
      <SaveButton onClick={onSave} saving={saving} />
      <p>{msg}</p>
    </div>;
}`,...s.parameters?.docs?.source}}};const N=["Default","WithDelay"];export{e as Default,s as WithDelay,N as __namedExportsOrder,W as default};
