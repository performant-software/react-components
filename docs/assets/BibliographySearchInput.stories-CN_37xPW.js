import{r as s,j as t}from"./iframe-Bo-cahqR.js";import{B as o,Z as a}from"./BibliographySearchInput-DzqfLcfW.js";import"./Button-SB7fr7Z_.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-CRLILEjs.js";import"./Icon-BdwMDjCJ.js";import"./Label-BKkK21JB.js";import"./ModernAutoControlledComponent-C-Nb76Z4.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-CXYr5d8-.js";import"./toFinite-BW88qEh4.js";import"./forEach-BywSwlPE.js";import"./Dimmer-Dl7JFx23.js";import"./Portal-BP_gGsLc.js";import"./keyboardKey-Dtyxm7HZ.js";import"./map-DChe9iis.js";import"./Input-CiU6LnQ0.js";import"./Bibliography-BrhjBbZT.js";import"./index-default-C0I3bBxV.js";import"./i18n-DkobdbHY.js";import"./i18next-eNuDfwAU.js";const O={title:"Components/Semantic UI/BibliographySearchInput",component:o},r=()=>{const[e,i]=s.useState();return t.jsxs(a.Provider,{value:{translateUrl:"/translate"},children:[t.jsx(o,{onError:()=>{},onFind:n=>i(n)}),e&&t.jsxs("div",{children:[t.jsx("p",{children:"Results:"}),t.jsx("pre",{children:t.jsx("code",{children:JSON.stringify(e,null,4)})})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
