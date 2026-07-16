import{r as s,j as t}from"./iframe-9irgAvQM.js";import{B as o,Z as p}from"./BibliographySearchInput-BQSx4fJe.js";import"./Button-CT5A04lk.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-B3j8MpfX.js";import"./_getPrototype-dFVwFHqx.js";import"./Icon-hoX6viib.js";import"./Label-BDZ4-WWM.js";import"./ModernAutoControlledComponent-Bq3xeUHM.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-D4SRuY7b.js";import"./toFinite-Dfj0KU41.js";import"./toNumber-DIkYOhwr.js";import"./forEach-CjzEQxAr.js";import"./_arrayEach-DpGxo2Of.js";import"./Dimmer-D3YY89iK.js";import"./Portal-4G6wzeI0.js";import"./keyboardKey-CflPe1Mq.js";import"./map-BktdIuwH.js";import"./Input-BIKd_Cu-.js";import"./Bibliography-KLwE786u.js";import"./index-default-C0I3bBxV.js";import"./i18n-C0aeT7bv.js";import"./i18next-eNuDfwAU.js";const T={title:"Components/Semantic UI/BibliographySearchInput",component:o},r=()=>{const[e,i]=s.useState();return t.jsxs(p.Provider,{value:{translateUrl:"/translate"},children:[t.jsx(o,{onError:()=>{},onFind:n=>i(n)}),e&&t.jsxs("div",{children:[t.jsx("p",{children:"Results:"}),t.jsx("pre",{children:t.jsx("code",{children:JSON.stringify(e,null,4)})})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
