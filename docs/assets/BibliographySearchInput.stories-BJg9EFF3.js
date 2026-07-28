import{r as s,j as t}from"./iframe-DGeuXaOs.js";import{B as o,Z as p}from"./BibliographySearchInput-CkUplijH.js";import"./Button-RAvTcYbb.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BXOZMkBo.js";import"./_getPrototype-dFVwFHqx.js";import"./Icon-B47Gj_wn.js";import"./Label-BpjthjD1.js";import"./ModernAutoControlledComponent-DzNbRDu3.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-z-Nq7FBH.js";import"./toFinite-Dfj0KU41.js";import"./toNumber-DIkYOhwr.js";import"./forEach-BGEnQvsQ.js";import"./_arrayEach-DpGxo2Of.js";import"./Dimmer-B2LOPfLZ.js";import"./Portal-ZeJHM45q.js";import"./keyboardKey-ClhdZcHf.js";import"./map-EWkZVQRl.js";import"./Input-DvUK2uwU.js";import"./Bibliography-DT6zmYz3.js";import"./index-default-C0I3bBxV.js";import"./i18n-C0aeT7bv.js";import"./i18next-eNuDfwAU.js";const T={title:"Components/Semantic UI/BibliographySearchInput",component:o},r=()=>{const[e,i]=s.useState();return t.jsxs(p.Provider,{value:{translateUrl:"/translate"},children:[t.jsx(o,{onError:()=>{},onFind:n=>i(n)}),e&&t.jsxs("div",{children:[t.jsx("p",{children:"Results:"}),t.jsx("pre",{children:t.jsx("code",{children:JSON.stringify(e,null,4)})})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
