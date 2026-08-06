import{r,j as t}from"./iframe-BrAQntzt.js";import{S as a}from"./SaveButton-Y6K--Vpr.js";import"./Button-D3Sj7dUS.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BFRWV7mM.js";import"./_getPrototype-dFVwFHqx.js";import"./Icon-fIQ1pKxe.js";import"./Label-C9Mv8xCs.js";import"./ModernAutoControlledComponent-CdWmntFb.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-BJs7ARx1.js";import"./toFinite-Dfj0KU41.js";import"./toNumber-DIkYOhwr.js";import"./forEach-D05ynQet.js";import"./_arrayEach-DpGxo2Of.js";import"./Dimmer-BCOwUOme.js";import"./Portal-BQOAejov.js";import"./keyboardKey-CYtKaW6W.js";import"./map-BUR3Hk8V.js";import"./Loader-Bkuz4oHD.js";import"./i18n-BlAkFxRx.js";import"./i18next-eNuDfwAU.js";const O={title:"Components/Semantic UI/SaveButton",component:a},e=()=>{const[n,o]=r.useState("");return t.jsxs("div",{children:[t.jsx(a,{onClick:()=>o("You have saved!")}),t.jsx("p",{children:n})]})},s=()=>{const[n,o]=r.useState(!1),[i,m]=r.useState(""),p=()=>{o(!0),setTimeout(()=>{m("You have saved!"),o(!1)},3e3)};return t.jsxs("div",{children:[t.jsx(a,{onClick:p,saving:n}),t.jsx("p",{children:i})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"WithDelay"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const R=["Default","WithDelay"];export{e as Default,s as WithDelay,R as __namedExportsOrder,O as default};
