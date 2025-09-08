import{r as s,j as t}from"./iframe-isOIMYbo.js";import{B as o,Z as a}from"./BibliographySearchInput-8-RLkIax.js";import"./Button-CqXa-wVP.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-CsHk5kPH.js";import"./Icon-DBxUlxMw.js";import"./Label-vg6cGd_Q.js";import"./ModernAutoControlledComponent-BtLuXh9U.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-CdyQs4Ym.js";import"./toFinite-DGZNaitu.js";import"./forEach-MpIg6X8D.js";import"./Dimmer-DT1p3J3k.js";import"./Portal-Cx1eItx_.js";import"./keyboardKey-B58FVVIx.js";import"./map-YoLMybS-.js";import"./Input-kw8FuSsH.js";import"./Bibliography-C_vAZtNJ.js";import"./index-default-C0I3bBxV.js";import"./i18n-DkobdbHY.js";import"./i18next-eNuDfwAU.js";const O={title:"Components/Semantic UI/BibliographySearchInput",component:o},r=()=>{const[e,i]=s.useState();return t.jsxs(a.Provider,{value:{translateUrl:"/translate"},children:[t.jsx(o,{onError:()=>{},onFind:n=>i(n)}),e&&t.jsxs("div",{children:[t.jsx("p",{children:"Results:"}),t.jsx("pre",{children:t.jsx("code",{children:JSON.stringify(e,null,4)})})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
