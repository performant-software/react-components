import{r as s,j as t}from"./iframe-B_xUDpg0.js";import{B as o,Z as p}from"./BibliographySearchInput-D7vRxtYS.js";import"./Button-p6b5sbjF.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-DjNP-Y9P.js";import"./_getPrototype-dFVwFHqx.js";import"./Icon-D3xqIzhX.js";import"./Label-CEVlMmJo.js";import"./ModernAutoControlledComponent-BdngwkpK.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-Jp-5ne6-.js";import"./toFinite-Dfj0KU41.js";import"./toNumber-DIkYOhwr.js";import"./forEach-6bVBlFgn.js";import"./_arrayEach-DpGxo2Of.js";import"./Dimmer-BvxqpyI2.js";import"./Portal-CkfreU2x.js";import"./keyboardKey-DiOaPqXD.js";import"./map-KxRyFJe_.js";import"./Input-DNMVt_gC.js";import"./Bibliography-DFJfTsuq.js";import"./index-default-C0I3bBxV.js";import"./i18n-BlAkFxRx.js";import"./i18next-eNuDfwAU.js";const T={title:"Components/Semantic UI/BibliographySearchInput",component:o},r=()=>{const[e,i]=s.useState();return t.jsxs(p.Provider,{value:{translateUrl:"/translate"},children:[t.jsx(o,{onError:()=>{},onFind:n=>i(n)}),e&&t.jsxs("div",{children:[t.jsx("p",{children:"Results:"}),t.jsx("pre",{children:t.jsx("code",{children:JSON.stringify(e,null,4)})})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
