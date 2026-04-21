import{r as s,j as t}from"./iframe-CDKtSUh7.js";import{B as o,Z as a}from"./BibliographySearchInput-Bhw2iT-L.js";import"./Button-DA_XBQbJ.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-0Tp31rtT.js";import"./Icon-5o84n6La.js";import"./Label-CH_WshmF.js";import"./ModernAutoControlledComponent-B-ilQLgm.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-DtwzgLcn.js";import"./toFinite-DjjXQZ2l.js";import"./forEach-Dp4nfTUu.js";import"./Dimmer-DQCDOJdA.js";import"./Portal-DdFmWNdd.js";import"./keyboardKey-BIrml5XW.js";import"./map-2oQ1uFDN.js";import"./Input-Cp8K4J0-.js";import"./Bibliography-DqPeCKTs.js";import"./index-default-C0I3bBxV.js";import"./i18n-DkobdbHY.js";import"./i18next-eNuDfwAU.js";const O={title:"Components/Semantic UI/BibliographySearchInput",component:o},r=()=>{const[e,i]=s.useState();return t.jsxs(a.Provider,{value:{translateUrl:"/translate"},children:[t.jsx(o,{onError:()=>{},onFind:n=>i(n)}),e&&t.jsxs("div",{children:[t.jsx("p",{children:"Results:"}),t.jsx("pre",{children:t.jsx("code",{children:JSON.stringify(e,null,4)})})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
