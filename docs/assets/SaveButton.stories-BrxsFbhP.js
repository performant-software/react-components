import{j as t}from"./jsx-runtime-BTCK_S7S.js";import{r as n}from"./index-CBqU2yxZ.js";import{S as i}from"./SaveButton-Dq5XP_RE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-Blq7Z6RX.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-CckcRzoH.js";import"./Icon-2tEtgK8g.js";import"./Label-Cq1fb1cd.js";import"./ModernAutoControlledComponent-DJBWk5EW.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-CQoJOerW.js";import"./toFinite-KQ8KevIC.js";import"./forEach-CXlln0XP.js";import"./Dimmer-D_gwaesu.js";import"./Portal-DvhHJPzU.js";import"./keyboardKey-OMDgGVm3.js";import"./index-DZGZymok.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-B4PnIEPz.js";import"./Loader-CooidObp.js";import"./i18n-C8zWlANG.js";import"./i18next-Sc0HEOoc.js";import"./toPropertyKey-hKuLU48H.js";import"./defineProperty-CCxoMnQV.js";import"./inherits-D5wXBZoG.js";import"./createClass-D2z1h_eG.js";import"./getPrototypeOf-BYVhAdwF.js";const K={title:"Components/Semantic UI/SaveButton",component:i},e=()=>{const[r,o]=n.useState("");return t.jsxs("div",{children:[t.jsx(i,{onClick:()=>o("You have saved!")}),t.jsx("p",{children:r})]})},s=()=>{const[r,o]=n.useState(!1),[v,g]=n.useState(""),l=()=>{o(!0),setTimeout(()=>{g("You have saved!"),o(!1)},3e3)};return t.jsxs("div",{children:[t.jsx(i,{onClick:l,saving:r}),t.jsx("p",{children:v})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"WithDelay"};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const [msg, setMsg] = useState("");
  return <div>
      <SaveButton onClick={() => setMsg("You have saved!")} />
      <p>{msg}</p>
    </div>;
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,u,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const L=["Default","WithDelay"];export{e as Default,s as WithDelay,L as __namedExportsOrder,K as default};
