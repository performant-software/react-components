import{j as t}from"./jsx-runtime-D9TvR9R2.js";import{r as n}from"./index-C0dDX-lL.js";import{S as i}from"./SaveButton-B7R5NhmU.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-CJhT71wt.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BSRayMAs.js";import"./Icon-C_3d7-zE.js";import"./Label-aEFd48OX.js";import"./ModernAutoControlledComponent-C211dBIC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-Cc_HXDPA.js";import"./toFinite-C3oJXAtX.js";import"./forEach-CLeEMxs1.js";import"./Dimmer-DP3fvqlo.js";import"./Portal-B8DXQ6EK.js";import"./keyboardKey-OMDgGVm3.js";import"./index-DOYXiIEK.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-DWKMCCtW.js";import"./Loader-lqR_Ikjg.js";import"./i18n-C9xJ7SCg.js";import"./i18next-CwS9wMM1.js";import"./toPropertyKey-BcUJYDQU.js";import"./defineProperty-DcNpp85p.js";import"./inherits-CWPG5jll.js";import"./createClass-CV9nCQMI.js";import"./getPrototypeOf-BYVhAdwF.js";const K={title:"Components/Semantic UI/SaveButton",component:i},e=()=>{const[r,o]=n.useState("");return t.jsxs("div",{children:[t.jsx(i,{onClick:()=>o("You have saved!")}),t.jsx("p",{children:r})]})},s=()=>{const[r,o]=n.useState(!1),[v,g]=n.useState(""),l=()=>{o(!0),setTimeout(()=>{g("You have saved!"),o(!1)},3e3)};return t.jsxs("div",{children:[t.jsx(i,{onClick:l,saving:r}),t.jsx("p",{children:v})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"WithDelay"};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
