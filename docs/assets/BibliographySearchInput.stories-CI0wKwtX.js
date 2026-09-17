import{r as s,j as t}from"./iframe-DJRD9VYJ.js";import{B as o,Z as p}from"./BibliographySearchInput-DsZAcYXf.js";import"./Button-YoCNNH0z.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-Vm_dSoLH.js";import"./_getPrototype-dFVwFHqx.js";import"./Icon-4m-u78_y.js";import"./Label-Berm0X37.js";import"./ModernAutoControlledComponent-zqo4LkUM.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-DwI87cUm.js";import"./toFinite-Dfj0KU41.js";import"./toNumber-DIkYOhwr.js";import"./forEach-CIK-cLqd.js";import"./_arrayEach-DpGxo2Of.js";import"./Dimmer-pHJM1137.js";import"./Portal-C0Mctpsg.js";import"./keyboardKey-DUZ3UEyU.js";import"./map-CCjJJ0H1.js";import"./Input-DeL0IJno.js";import"./Bibliography-B6F9xdUQ.js";import"./index-default-C0I3bBxV.js";import"./i18n-BlAkFxRx.js";import"./i18next-eNuDfwAU.js";const T={title:"Components/Semantic UI/BibliographySearchInput",component:o},r=()=>{const[e,i]=s.useState();return t.jsxs(p.Provider,{value:{translateUrl:"/translate"},children:[t.jsx(o,{onError:()=>{},onFind:n=>i(n)}),e&&t.jsxs("div",{children:[t.jsx("p",{children:"Results:"}),t.jsx("pre",{children:t.jsx("code",{children:JSON.stringify(e,null,4)})})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
