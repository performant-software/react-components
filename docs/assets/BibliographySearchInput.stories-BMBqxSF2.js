import{r as s,j as t}from"./iframe-DT7QbYH7.js";import{B as o,Z as a}from"./BibliographySearchInput-CcR0CPZQ.js";import"./Button-NSPqHwS_.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-D9Dm3kUn.js";import"./Icon-ey9jiNEy.js";import"./Label-BiRn_-_3.js";import"./ModernAutoControlledComponent-Cz85Fsnf.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-DlRNvmPY.js";import"./toFinite-EWrCJB8-.js";import"./forEach-CUQnNrTW.js";import"./Dimmer-C1tpBS2T.js";import"./Portal-Dqo72CYe.js";import"./keyboardKey-8QW-HgB9.js";import"./map-CN2A-66k.js";import"./Input-EBrwWnz0.js";import"./Bibliography-DhQmFg_f.js";import"./index-default-C0I3bBxV.js";import"./i18n-DkobdbHY.js";import"./i18next-eNuDfwAU.js";const O={title:"Components/Semantic UI/BibliographySearchInput",component:o},r=()=>{const[e,i]=s.useState();return t.jsxs(a.Provider,{value:{translateUrl:"/translate"},children:[t.jsx(o,{onError:()=>{},onFind:n=>i(n)}),e&&t.jsxs("div",{children:[t.jsx("p",{children:"Results:"}),t.jsx("pre",{children:t.jsx("code",{children:JSON.stringify(e,null,4)})})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
