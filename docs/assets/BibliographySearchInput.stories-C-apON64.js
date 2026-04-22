import{r as s,j as t}from"./iframe-TuXs2kBy.js";import{B as o,Z as a}from"./BibliographySearchInput-DtMWfnRL.js";import"./Button-BKdJ_oXZ.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BZ_Wii67.js";import"./Icon-CpsQnxH4.js";import"./Label-DlvpALTQ.js";import"./ModernAutoControlledComponent-D7o4-ucK.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-cXy9aOxG.js";import"./toFinite-D7zQzeBM.js";import"./forEach-DerotaaD.js";import"./Dimmer-zvnfHSKR.js";import"./Portal-DV7cFSlF.js";import"./keyboardKey-BuX2MR1A.js";import"./map-BMga4jFc.js";import"./Input-D6ycNwFw.js";import"./Bibliography-ockJPdei.js";import"./index-default-C0I3bBxV.js";import"./i18n-DkobdbHY.js";import"./i18next-eNuDfwAU.js";const O={title:"Components/Semantic UI/BibliographySearchInput",component:o},r=()=>{const[e,i]=s.useState();return t.jsxs(a.Provider,{value:{translateUrl:"/translate"},children:[t.jsx(o,{onError:()=>{},onFind:n=>i(n)}),e&&t.jsxs("div",{children:[t.jsx("p",{children:"Results:"}),t.jsx("pre",{children:t.jsx("code",{children:JSON.stringify(e,null,4)})})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
