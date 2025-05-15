import{j as r}from"./jsx-runtime-D9TvR9R2.js";import{r as a}from"./index-C0dDX-lL.js";import{B as s,Z as l}from"./BibliographySearchInput-BeOFgEEF.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-Dcib8V--.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-C_4y_n4F.js";import"./Icon-BGzIEILD.js";import"./Label-BqnFaqey.js";import"./ModernAutoControlledComponent-CBEnGjal.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-BAV9TYTx.js";import"./toFinite-DWd2HYc9.js";import"./forEach-Bj9nU5MO.js";import"./Dimmer-kmE_IUk6.js";import"./Portal-CKYxdKwP.js";import"./keyboardKey-OMDgGVm3.js";import"./index-DOYXiIEK.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-Dr4OE-Ab.js";import"./Input-CEHVpxQU.js";import"./Bibliography-isW7v-pd.js";import"./index-default-C_maRo4o.js";import"./i18n-C9xJ7SCg.js";import"./i18next-CwS9wMM1.js";import"./toPropertyKey-BcUJYDQU.js";import"./defineProperty-DcNpp85p.js";import"./inherits-CWPG5jll.js";import"./createClass-CV9nCQMI.js";import"./getPrototypeOf-BYVhAdwF.js";const G={title:"Components/Semantic UI/BibliographySearchInput",component:s},t=()=>{const[o,p]=a.useState();return r.jsxs(l.Provider,{value:{translateUrl:"/translate"},children:[r.jsx(s,{onError:()=>{},onFind:m=>p(m)}),o&&r.jsxs("div",{children:[r.jsx("p",{children:"Results:"}),r.jsx("pre",{children:r.jsx("code",{children:JSON.stringify(o,null,4)})})]})]})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};var e,i,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
