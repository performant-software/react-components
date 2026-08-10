import{r as s,j as t}from"./iframe-gJjXuBGV.js";import{B as o,Z as p}from"./BibliographySearchInput-D10Cu4eM.js";import"./Button-BY8YxsVr.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-rS5bWeP6.js";import"./_getPrototype-dFVwFHqx.js";import"./Icon-D9WoHwnx.js";import"./Label-BHCi0xQd.js";import"./ModernAutoControlledComponent-CNYE1dRd.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-DBCycrK6.js";import"./toFinite-Dfj0KU41.js";import"./toNumber-DIkYOhwr.js";import"./forEach-CprgDfIV.js";import"./_arrayEach-DpGxo2Of.js";import"./Dimmer-CNHruUYP.js";import"./Portal-HcKdfz5h.js";import"./keyboardKey-DQq2vlf6.js";import"./map-DzenaboV.js";import"./Input-DwH3oRiJ.js";import"./Bibliography-DiwUn97y.js";import"./index-default-C0I3bBxV.js";import"./i18n-BlAkFxRx.js";import"./i18next-eNuDfwAU.js";const T={title:"Components/Semantic UI/BibliographySearchInput",component:o},r=()=>{const[e,i]=s.useState();return t.jsxs(p.Provider,{value:{translateUrl:"/translate"},children:[t.jsx(o,{onError:()=>{},onFind:n=>i(n)}),e&&t.jsxs("div",{children:[t.jsx("p",{children:"Results:"}),t.jsx("pre",{children:t.jsx("code",{children:JSON.stringify(e,null,4)})})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
