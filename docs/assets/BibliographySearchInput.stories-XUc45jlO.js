import{r as s,j as t}from"./iframe-vcq3NyiY.js";import{B as o,Z as a}from"./BibliographySearchInput-BdFPnA-t.js";import"./Button-Bn6g8Zpl.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BKtKbg7z.js";import"./Icon-CCp_BzDr.js";import"./Label-C0nyLnGG.js";import"./ModernAutoControlledComponent-DdBfaRqR.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-ClwlY2GN.js";import"./toFinite-CubHtLM9.js";import"./forEach-DpfzB6Po.js";import"./Dimmer-BoNfl-gn.js";import"./Portal-COsaxqQp.js";import"./keyboardKey-CYj8W5Ln.js";import"./map-CVJKdi7t.js";import"./Input-iG1nzLLC.js";import"./Bibliography-BhVKIROP.js";import"./index-default-C0I3bBxV.js";import"./i18n-DkobdbHY.js";import"./i18next-eNuDfwAU.js";const O={title:"Components/Semantic UI/BibliographySearchInput",component:o},r=()=>{const[e,i]=s.useState();return t.jsxs(a.Provider,{value:{translateUrl:"/translate"},children:[t.jsx(o,{onError:()=>{},onFind:n=>i(n)}),e&&t.jsxs("div",{children:[t.jsx("p",{children:"Results:"}),t.jsx("pre",{children:t.jsx("code",{children:JSON.stringify(e,null,4)})})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const P=["Default"];export{r as Default,P as __namedExportsOrder,O as default};
