import{r as s,j as t}from"./iframe-0kzOYbDl.js";import{B as o,Z as a}from"./BibliographySearchInput-DcWp5xgp.js";import"./Button-BZG2A5sY.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-F4BGMwza.js";import"./Icon-DJJMCTRL.js";import"./Label-yTVPsSkO.js";import"./ModernAutoControlledComponent-D9Qz_mdq.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-Bc-ZWqwy.js";import"./toFinite-BrzBV7X5.js";import"./forEach-Ccrb3wYW.js";import"./Dimmer-DhIieFQ_.js";import"./Portal-TP5vWZSH.js";import"./keyboardKey-BpJXLMj5.js";import"./map-CCTlyAeB.js";import"./Input-CHH5G1-n.js";import"./Bibliography-DIoo0Zwl.js";import"./index-default-C0I3bBxV.js";import"./i18n-DkobdbHY.js";import"./i18next-eNuDfwAU.js";const O={title:"Components/Semantic UI/BibliographySearchInput",component:o},r=()=>{const[e,i]=s.useState();return t.jsxs(a.Provider,{value:{translateUrl:"/translate"},children:[t.jsx(o,{onError:()=>{},onFind:n=>i(n)}),e&&t.jsxs("div",{children:[t.jsx("p",{children:"Results:"}),t.jsx("pre",{children:t.jsx("code",{children:JSON.stringify(e,null,4)})})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
