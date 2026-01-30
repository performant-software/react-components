import{r as s,j as t}from"./iframe-ZimVXjeC.js";import{B as o,Z as a}from"./BibliographySearchInput-BPAHrX1v.js";import"./Button-o5mbra5X.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-wnuRSg6C.js";import"./Icon-D86Ecimj.js";import"./Label-Dg3qfUOk.js";import"./ModernAutoControlledComponent-DXgQ1uTy.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-DVGl8pTN.js";import"./toFinite-CwjWCu7j.js";import"./forEach-CmXYmqGw.js";import"./Dimmer-DT4wIu_e.js";import"./Portal-BYz1Z-gK.js";import"./keyboardKey-DNheEGds.js";import"./map-uw9Z0IbZ.js";import"./Input-26X5zsSc.js";import"./Bibliography-Dx3KrDjR.js";import"./index-default-C0I3bBxV.js";import"./i18n-DkobdbHY.js";import"./i18next-eNuDfwAU.js";const O={title:"Components/Semantic UI/BibliographySearchInput",component:o},r=()=>{const[e,i]=s.useState();return t.jsxs(a.Provider,{value:{translateUrl:"/translate"},children:[t.jsx(o,{onError:()=>{},onFind:n=>i(n)}),e&&t.jsxs("div",{children:[t.jsx("p",{children:"Results:"}),t.jsx("pre",{children:t.jsx("code",{children:JSON.stringify(e,null,4)})})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
