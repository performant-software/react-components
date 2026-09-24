import{r as s,j as t}from"./iframe-DbiTUB3D.js";import{B as o,Z as p}from"./BibliographySearchInput-BZntryoG.js";import"./Button-BIg7NmOw.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BH3jW2lY.js";import"./_getPrototype-dFVwFHqx.js";import"./Icon-DsEDoy4L.js";import"./Label-DoU-ifwN.js";import"./ModernAutoControlledComponent-DVTYcGHz.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-D-FZLlJ_.js";import"./toFinite-Dfj0KU41.js";import"./toNumber-DIkYOhwr.js";import"./forEach-DxN3RdGO.js";import"./_arrayEach-DpGxo2Of.js";import"./Dimmer-B9rAdiXr.js";import"./Portal-C6iiX74h.js";import"./keyboardKey-Bf7yRjnJ.js";import"./map-7sK8CacR.js";import"./Input-BqMKLUlw.js";import"./Bibliography-Dm6_bGMT.js";import"./index-default-C0I3bBxV.js";import"./i18n-BlAkFxRx.js";import"./i18next-eNuDfwAU.js";const T={title:"Components/Semantic UI/BibliographySearchInput",component:o},r=()=>{const[e,i]=s.useState();return t.jsxs(p.Provider,{value:{translateUrl:"/translate"},children:[t.jsx(o,{onError:()=>{},onFind:n=>i(n)}),e&&t.jsxs("div",{children:[t.jsx("p",{children:"Results:"}),t.jsx("pre",{children:t.jsx("code",{children:JSON.stringify(e,null,4)})})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
