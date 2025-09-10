import{r as s,j as t}from"./iframe-vd5jUnmh.js";import{B as o,Z as a}from"./BibliographySearchInput-DexniATA.js";import"./Button-BDHbVLWx.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-Dbrg5pYk.js";import"./Icon-DvprR8oi.js";import"./Label-D1PIeSX5.js";import"./ModernAutoControlledComponent-QVsiK7km.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-eGroWB-Q.js";import"./toFinite-CzVf2XkS.js";import"./forEach-CbH1wg7D.js";import"./Dimmer-Fz-z8WIU.js";import"./Portal-C6ILt24N.js";import"./keyboardKey-DeBoM4Ub.js";import"./map-uhZzoJ4W.js";import"./Input-CulkMBuo.js";import"./Bibliography-BUN7ZEo-.js";import"./index-default-C0I3bBxV.js";import"./i18n-DkobdbHY.js";import"./i18next-eNuDfwAU.js";const O={title:"Components/Semantic UI/BibliographySearchInput",component:o},r=()=>{const[e,i]=s.useState();return t.jsxs(a.Provider,{value:{translateUrl:"/translate"},children:[t.jsx(o,{onError:()=>{},onFind:n=>i(n)}),e&&t.jsxs("div",{children:[t.jsx("p",{children:"Results:"}),t.jsx("pre",{children:t.jsx("code",{children:JSON.stringify(e,null,4)})})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
