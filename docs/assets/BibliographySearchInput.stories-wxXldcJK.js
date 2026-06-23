import{r as s,j as t}from"./iframe-CobmjQJx.js";import{B as o,Z as a}from"./BibliographySearchInput-1Ij59bHi.js";import"./Button-Dbwe2y1K.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-DIRvTXcE.js";import"./Icon-GUvrG6NX.js";import"./Label-BcJmCt3K.js";import"./ModernAutoControlledComponent-BY7sqkaA.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-BzBOEv5Z.js";import"./toFinite-BcRf1gcc.js";import"./forEach-BqzC2Qd6.js";import"./Dimmer-B-_T9QPF.js";import"./Portal-DxbNXBbZ.js";import"./keyboardKey-CpnYesMy.js";import"./map-Be6cYnHc.js";import"./Input-DmEhvK3s.js";import"./Bibliography-CQBu0lmW.js";import"./index-default-C0I3bBxV.js";import"./i18n-DkobdbHY.js";import"./i18next-eNuDfwAU.js";const O={title:"Components/Semantic UI/BibliographySearchInput",component:o},r=()=>{const[e,i]=s.useState();return t.jsxs(a.Provider,{value:{translateUrl:"/translate"},children:[t.jsx(o,{onError:()=>{},onFind:n=>i(n)}),e&&t.jsxs("div",{children:[t.jsx("p",{children:"Results:"}),t.jsx("pre",{children:t.jsx("code",{children:JSON.stringify(e,null,4)})})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
