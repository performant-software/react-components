import{r as s,j as t}from"./iframe-BLgZWRCp.js";import{B as o,Z as a}from"./BibliographySearchInput-C_x-ozu-.js";import"./Button-DBnOKBlt.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-1IYaeY7q.js";import"./Icon-CxJFFl9I.js";import"./Label-CA5c1o9n.js";import"./ModernAutoControlledComponent-BNuszL3K.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-U-4bWchp.js";import"./toFinite-B0zBBCYH.js";import"./forEach-B66pbtzg.js";import"./Dimmer-DQZjKlMb.js";import"./Portal-SWFjn5WJ.js";import"./keyboardKey-TMamj3A2.js";import"./map-CWHsrrW0.js";import"./Input-DA954Y-9.js";import"./Bibliography-CKUPMZyt.js";import"./index-default-C0I3bBxV.js";import"./i18n-DkobdbHY.js";import"./i18next-eNuDfwAU.js";const O={title:"Components/Semantic UI/BibliographySearchInput",component:o},r=()=>{const[e,i]=s.useState();return t.jsxs(a.Provider,{value:{translateUrl:"/translate"},children:[t.jsx(o,{onError:()=>{},onFind:n=>i(n)}),e&&t.jsxs("div",{children:[t.jsx("p",{children:"Results:"}),t.jsx("pre",{children:t.jsx("code",{children:JSON.stringify(e,null,4)})})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
