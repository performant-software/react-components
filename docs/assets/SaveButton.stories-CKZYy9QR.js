import{r,j as t}from"./iframe-gJjXuBGV.js";import{S as a}from"./SaveButton-DE1MT3qw.js";import"./Button-BY8YxsVr.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-rS5bWeP6.js";import"./_getPrototype-dFVwFHqx.js";import"./Icon-D9WoHwnx.js";import"./Label-BHCi0xQd.js";import"./ModernAutoControlledComponent-CNYE1dRd.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-DBCycrK6.js";import"./toFinite-Dfj0KU41.js";import"./toNumber-DIkYOhwr.js";import"./forEach-CprgDfIV.js";import"./_arrayEach-DpGxo2Of.js";import"./Dimmer-CNHruUYP.js";import"./Portal-HcKdfz5h.js";import"./keyboardKey-DQq2vlf6.js";import"./map-DzenaboV.js";import"./Loader-hf7FUYOu.js";import"./i18n-BlAkFxRx.js";import"./i18next-eNuDfwAU.js";const O={title:"Components/Semantic UI/SaveButton",component:a},e=()=>{const[n,o]=r.useState("");return t.jsxs("div",{children:[t.jsx(a,{onClick:()=>o("You have saved!")}),t.jsx("p",{children:n})]})},s=()=>{const[n,o]=r.useState(!1),[i,m]=r.useState(""),p=()=>{o(!0),setTimeout(()=>{m("You have saved!"),o(!1)},3e3)};return t.jsxs("div",{children:[t.jsx(a,{onClick:p,saving:n}),t.jsx("p",{children:i})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"WithDelay"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
