import{r as s,j as t}from"./iframe-C1yIdUxi.js";import{B as o,Z as a}from"./BibliographySearchInput-dL-dhE6d.js";import"./Button-CJTFn35h.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-DsntGQ7s.js";import"./Icon-DP6yU2re.js";import"./Label-CBP1P9vD.js";import"./ModernAutoControlledComponent-Br5d4aPK.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-nZJWD_tR.js";import"./toFinite-B9I2iPB2.js";import"./forEach-arEyhVRZ.js";import"./Dimmer-D0u62siH.js";import"./Portal-DNbWDsez.js";import"./keyboardKey-oXYFUeDu.js";import"./map-DI4b9sYh.js";import"./Input-DFBdMvaL.js";import"./Bibliography-C8-m3_57.js";import"./index-default-C0I3bBxV.js";import"./i18n-DkobdbHY.js";import"./i18next-eNuDfwAU.js";const O={title:"Components/Semantic UI/BibliographySearchInput",component:o},r=()=>{const[e,i]=s.useState();return t.jsxs(a.Provider,{value:{translateUrl:"/translate"},children:[t.jsx(o,{onError:()=>{},onFind:n=>i(n)}),e&&t.jsxs("div",{children:[t.jsx("p",{children:"Results:"}),t.jsx("pre",{children:t.jsx("code",{children:JSON.stringify(e,null,4)})})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
