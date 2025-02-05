import{j as r}from"./jsx-runtime-BTCK_S7S.js";import{r as a}from"./index-CBqU2yxZ.js";import{B as s,Z as l}from"./BibliographySearchInput-DbWiRKYU.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-Blq7Z6RX.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-CckcRzoH.js";import"./Icon-2tEtgK8g.js";import"./Label-Cq1fb1cd.js";import"./ModernAutoControlledComponent-DJBWk5EW.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-CQoJOerW.js";import"./toFinite-KQ8KevIC.js";import"./forEach-CXlln0XP.js";import"./Dimmer-D_gwaesu.js";import"./Portal-DvhHJPzU.js";import"./keyboardKey-OMDgGVm3.js";import"./index-DZGZymok.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-B4PnIEPz.js";import"./Input--hQVCRQV.js";import"./Bibliography-isW7v-pd.js";import"./index-default-C_maRo4o.js";import"./i18n-DOVQ27W-.js";import"./i18next-Sc0HEOoc.js";import"./toPropertyKey-hKuLU48H.js";import"./defineProperty-CCxoMnQV.js";import"./inherits-D5wXBZoG.js";import"./createClass-D2z1h_eG.js";import"./getPrototypeOf-BYVhAdwF.js";const G={title:"Components/Semantic UI/BibliographySearchInput",component:s},t=()=>{const[o,p]=a.useState();return r.jsxs(l.Provider,{value:{translateUrl:"/translate"},children:[r.jsx(s,{onError:()=>{},onFind:m=>p(m)}),o&&r.jsxs("div",{children:[r.jsx("p",{children:"Results:"}),r.jsx("pre",{children:r.jsx("code",{children:JSON.stringify(o,null,4)})})]})]})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};var e,i,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const H=["Default"];export{t as Default,H as __namedExportsOrder,G as default};
