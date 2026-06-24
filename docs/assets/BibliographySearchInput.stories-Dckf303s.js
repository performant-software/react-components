import{r as s,j as t}from"./iframe-DTMBAB_o.js";import{B as o,Z as p}from"./BibliographySearchInput-mPiM9OWi.js";import"./Button-BNNyQwcZ.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-wYlxU5u7.js";import"./_getPrototype-dFVwFHqx.js";import"./Icon-CznQEfm0.js";import"./Label-BAJSDKE-.js";import"./ModernAutoControlledComponent-B-F5ooAU.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-Bugyy3M_.js";import"./toFinite-Dfj0KU41.js";import"./toNumber-DIkYOhwr.js";import"./forEach-8Y8gjC-M.js";import"./_arrayEach-DpGxo2Of.js";import"./Dimmer-CvmanVuk.js";import"./Portal-DZuQlAAB.js";import"./keyboardKey-BIX05c3i.js";import"./map-DCSMhg6_.js";import"./Input-CmNw0TGN.js";import"./Bibliography-DNoLWJ2f.js";import"./index-default-C0I3bBxV.js";import"./i18n-DkobdbHY.js";import"./i18next-eNuDfwAU.js";const T={title:"Components/Semantic UI/BibliographySearchInput",component:o},r=()=>{const[e,i]=s.useState();return t.jsxs(p.Provider,{value:{translateUrl:"/translate"},children:[t.jsx(o,{onError:()=>{},onFind:n=>i(n)}),e&&t.jsxs("div",{children:[t.jsx("p",{children:"Results:"}),t.jsx("pre",{children:t.jsx("code",{children:JSON.stringify(e,null,4)})})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const U=["Default"];export{r as Default,U as __namedExportsOrder,T as default};
