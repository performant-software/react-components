import{r as s,j as t}from"./iframe-Cv6NyGmh.js";import{B as o,Z as a}from"./BibliographySearchInput-BNxnIrkT.js";import"./Button-zdyej-Ns.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-K35LTaJK.js";import"./Icon-D39B3oXB.js";import"./Label-PLpICGDf.js";import"./ModernAutoControlledComponent-CWIOmKmV.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-CIqIAdm8.js";import"./toFinite-C3a1HOTY.js";import"./forEach-DYNAt1Hb.js";import"./Dimmer-CO3zZvZo.js";import"./Portal-ufNDYVit.js";import"./keyboardKey-Cd-j_P4w.js";import"./map-BUcwO8PI.js";import"./Input-DTpHfPup.js";import"./Bibliography-CtYmk5sY.js";import"./index-default-C0I3bBxV.js";import"./i18n-DkobdbHY.js";import"./i18next-eNuDfwAU.js";const O={title:"Components/Semantic UI/BibliographySearchInput",component:o},r=()=>{const[e,i]=s.useState();return t.jsxs(a.Provider,{value:{translateUrl:"/translate"},children:[t.jsx(o,{onError:()=>{},onFind:n=>i(n)}),e&&t.jsxs("div",{children:[t.jsx("p",{children:"Results:"}),t.jsx("pre",{children:t.jsx("code",{children:JSON.stringify(e,null,4)})})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
