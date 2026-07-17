import{r,j as t}from"./iframe-ColLpCq0.js";import{S as a}from"./SaveButton-Bo9Z8hGf.js";import"./Button-DLliuTg0.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-DT6_w2aY.js";import"./_getPrototype-dFVwFHqx.js";import"./Icon-VLftFoWa.js";import"./Label-BuJLNQet.js";import"./ModernAutoControlledComponent-GagUuvWz.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-3WyF2aiU.js";import"./toFinite-Dfj0KU41.js";import"./toNumber-DIkYOhwr.js";import"./forEach-BiG3VRAM.js";import"./_arrayEach-DpGxo2Of.js";import"./Dimmer-CPqsDP_0.js";import"./Portal-Ci3UlCdp.js";import"./keyboardKey-CCZT5mKo.js";import"./map-CuZJRvr2.js";import"./Loader-D78Sy4dK.js";import"./i18n-C0aeT7bv.js";import"./i18next-eNuDfwAU.js";const O={title:"Components/Semantic UI/SaveButton",component:a},e=()=>{const[n,o]=r.useState("");return t.jsxs("div",{children:[t.jsx(a,{onClick:()=>o("You have saved!")}),t.jsx("p",{children:n})]})},s=()=>{const[n,o]=r.useState(!1),[i,m]=r.useState(""),p=()=>{o(!0),setTimeout(()=>{m("You have saved!"),o(!1)},3e3)};return t.jsxs("div",{children:[t.jsx(a,{onClick:p,saving:n}),t.jsx("p",{children:i})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"WithDelay"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
