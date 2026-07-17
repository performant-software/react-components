import{r as s,j as t}from"./iframe-ColLpCq0.js";import{B as o,Z as p}from"./BibliographySearchInput-BCw4cEAE.js";import"./Button-DLliuTg0.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-DT6_w2aY.js";import"./_getPrototype-dFVwFHqx.js";import"./Icon-VLftFoWa.js";import"./Label-BuJLNQet.js";import"./ModernAutoControlledComponent-GagUuvWz.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-3WyF2aiU.js";import"./toFinite-Dfj0KU41.js";import"./toNumber-DIkYOhwr.js";import"./forEach-BiG3VRAM.js";import"./_arrayEach-DpGxo2Of.js";import"./Dimmer-CPqsDP_0.js";import"./Portal-Ci3UlCdp.js";import"./keyboardKey-CCZT5mKo.js";import"./map-CuZJRvr2.js";import"./Input-CXAaHP09.js";import"./Bibliography-DU67I-9R.js";import"./index-default-C0I3bBxV.js";import"./i18n-C0aeT7bv.js";import"./i18next-eNuDfwAU.js";const T={title:"Components/Semantic UI/BibliographySearchInput",component:o},r=()=>{const[e,i]=s.useState();return t.jsxs(p.Provider,{value:{translateUrl:"/translate"},children:[t.jsx(o,{onError:()=>{},onFind:n=>i(n)}),e&&t.jsxs("div",{children:[t.jsx("p",{children:"Results:"}),t.jsx("pre",{children:t.jsx("code",{children:JSON.stringify(e,null,4)})})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const [items, setItems] = useState();
  return <ZoteroTranslateContext.Provider value={{
    translateUrl: '/translate'
  }}>
      <BibliographySearchInput onError={() => {}} onFind={i => setItems(i)} />
      {items && <div>
          <p>Results:</p>
          <pre>
            <code>
              {JSON.stringify(items, null, 4)}
            </code>
          </pre>
        </div>}
    </ZoteroTranslateContext.Provider>;
}`,...r.parameters?.docs?.source}}};const U=["Default"];export{r as Default,U as __namedExportsOrder,T as default};
