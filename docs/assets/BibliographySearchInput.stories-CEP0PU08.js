import{j as r}from"./jsx-runtime-D9TvR9R2.js";import{r as a}from"./index-C0dDX-lL.js";import{B as s,Z as l}from"./BibliographySearchInput-DyBZUoQu.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-CJhT71wt.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BSRayMAs.js";import"./Icon-C_3d7-zE.js";import"./Label-aEFd48OX.js";import"./ModernAutoControlledComponent-C211dBIC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-Cc_HXDPA.js";import"./toFinite-C3oJXAtX.js";import"./forEach-CLeEMxs1.js";import"./Dimmer-DP3fvqlo.js";import"./Portal-B8DXQ6EK.js";import"./keyboardKey-OMDgGVm3.js";import"./index-DOYXiIEK.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-DWKMCCtW.js";import"./Input-Bwh_HEb3.js";import"./Bibliography-isW7v-pd.js";import"./index-default-C_maRo4o.js";import"./i18n-axRemAo9.js";import"./i18next-WuGp4vR6.js";import"./toPropertyKey-BcUJYDQU.js";import"./defineProperty-DcNpp85p.js";import"./classCallCheck-BNzALLS0.js";import"./createClass-BA4CoEfY.js";import"./inherits-DQ5KX8TJ.js";import"./getPrototypeOf-BYVhAdwF.js";const H={title:"Components/Semantic UI/BibliographySearchInput",component:s},t=()=>{const[o,p]=a.useState();return r.jsxs(l.Provider,{value:{translateUrl:"/translate"},children:[r.jsx(s,{onError:()=>{},onFind:m=>p(m)}),o&&r.jsxs("div",{children:[r.jsx("p",{children:"Results:"}),r.jsx("pre",{children:r.jsx("code",{children:JSON.stringify(o,null,4)})})]})]})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};var e,i,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const K=["Default"];export{t as Default,K as __namedExportsOrder,H as default};
