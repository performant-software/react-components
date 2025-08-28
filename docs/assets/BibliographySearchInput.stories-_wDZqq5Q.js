import{r as s,j as t}from"./iframe-Dxgww4-I.js";import{B as o,Z as a}from"./BibliographySearchInput-WegGHpbf.js";import"./Button-BAz5K2o3.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-DI6MxAvz.js";import"./Icon-uY6W4AAl.js";import"./Label-C_-G-gvZ.js";import"./ModernAutoControlledComponent-r2wGn9JT.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-C3NGYjvp.js";import"./toFinite-CvM15p2j.js";import"./forEach-DlvoXqFD.js";import"./Dimmer-Ca1w9JQz.js";import"./Portal-eqdFawDV.js";import"./keyboardKey-dM6szfIV.js";import"./map-CAJquUSc.js";import"./Input-BPewBPVQ.js";import"./Bibliography-CW83D4Dx.js";import"./index-default-C0I3bBxV.js";import"./i18n-DkobdbHY.js";import"./i18next-eNuDfwAU.js";const O={title:"Components/Semantic UI/BibliographySearchInput",component:o},r=()=>{const[e,i]=s.useState();return t.jsxs(a.Provider,{value:{translateUrl:"/translate"},children:[t.jsx(o,{onError:()=>{},onFind:n=>i(n)}),e&&t.jsxs("div",{children:[t.jsx("p",{children:"Results:"}),t.jsx("pre",{children:t.jsx("code",{children:JSON.stringify(e,null,4)})})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
