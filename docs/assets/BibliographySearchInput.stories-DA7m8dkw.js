import{r as s,j as t}from"./iframe-Dd51AVec.js";import{B as o,Z as a}from"./BibliographySearchInput-BHtdoFfB.js";import"./Button-COgPdyHQ.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-fSudkH_h.js";import"./Icon-Be-bmVif.js";import"./Label-DoRqLwn7.js";import"./ModernAutoControlledComponent-DgxHvlaW.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-COA85LJd.js";import"./toFinite-JyWO3W7G.js";import"./forEach-m0XN-fRo.js";import"./Dimmer-CaDuiwNx.js";import"./Portal-BCNDxyz_.js";import"./keyboardKey-CGzN62ID.js";import"./map-BK17dLm-.js";import"./Input-CyvR7hoe.js";import"./Bibliography-BAH9CDsC.js";import"./index-default-C0I3bBxV.js";import"./i18n-DkobdbHY.js";import"./i18next-eNuDfwAU.js";const O={title:"Components/Semantic UI/BibliographySearchInput",component:o},r=()=>{const[e,i]=s.useState();return t.jsxs(a.Provider,{value:{translateUrl:"/translate"},children:[t.jsx(o,{onError:()=>{},onFind:n=>i(n)}),e&&t.jsxs("div",{children:[t.jsx("p",{children:"Results:"}),t.jsx("pre",{children:t.jsx("code",{children:JSON.stringify(e,null,4)})})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
