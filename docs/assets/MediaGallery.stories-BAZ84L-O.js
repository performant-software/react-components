import{j as e}from"./jsx-runtime-D9TvR9R2.js";import{r}from"./index-C0dDX-lL.js";import{M as i}from"./MediaGallery-IhHCWlNR.js";import{M as y}from"./Modal-b75ysbSI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CbkgbXGQ.js";import"./index-DOYXiIEK.js";import"./extends-CCbyfPlC.js";import"./index-BbtE80dZ.js";import"./index-B8cpGa5N.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./floating-ui.react-dom-BUm7GwT3.js";import"./index-DE75wVnf.js";import"./v4-D8aEg3BZ.js";import"./index-default-C_maRo4o.js";import"./i18n-DBs6I0Fj.js";import"./i18next-CwS9wMM1.js";import"./toPropertyKey-BcUJYDQU.js";import"./defineProperty-DcNpp85p.js";import"./inherits-CWPG5jll.js";import"./assertThisInitialized-B9jnkVVz.js";import"./setPrototypeOf-DgZC2w_0.js";import"./createClass-CV9nCQMI.js";import"./getPrototypeOf-BYVhAdwF.js";import"./index.es33-OhY7yfgF.js";import"./iframe-C2Z9xHRY.js";import"../sb-preview/runtime.js";import"./index-DGlwu9Uw.js";import"./index-I9l-Zwik.js";import"./component-BP0ixNUT.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-Cly0WHBx.js";const Q={title:"Components/Core Data/MediaGallery",component:i},n=()=>{const[s,t]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx("button",{onClick:()=>t(!0),type:"button",children:"Open  Gallery"})}),s&&e.jsx(i,{manifestUrl:`${window.origin}/core_data/public/v1/places/1/manifests/1`,onClose:()=>t(!1)})]})},o=()=>{const[s,t]=r.useState(!1),[f,a]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>t(!0),type:"button",children:"Open  First Modal"}),s&&e.jsxs(y,{description:"Testing Media Gallery within a Modal",title:"Testing Modal",onClose:()=>t(!1),open:!0,children:[e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx("button",{onClick:()=>a(!0),type:"button",children:"Open  Gallery"})}),f&&e.jsx(i,{manifestUrl:`${window.origin}/core_data/public/v1/places/1/manifests/1`,onClose:()=>a(!1)})]})]})};n.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"InModal"};var l,p,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <>
      <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
        <button onClick={() => setOpen(true)} type='button'>
          Open  Gallery
        </button>
      </div>
      {open && <MediaGallery
    // Clover IIIF 2.4+ does not like relative URLs
    manifestUrl={\`\${window.origin}/core_data/public/v1/places/1/manifests/1\`} onClose={() => setOpen(false)} />}
    </>;
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,c,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  return <>
      <button onClick={() => setOpen1(true)} type='button'>
        Open  First Modal
      </button>
      {open1 && <Modal description='Testing Media Gallery within a Modal' title='Testing Modal' onClose={() => setOpen1(false)} open>
          <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
            <button onClick={() => setOpen2(true)} type='button'>
              Open  Gallery
            </button>
          </div>
          {open2 && <MediaGallery manifestUrl={\`\${window.origin}/core_data/public/v1/places/1/manifests/1\`} onClose={() => setOpen2(false)} />}
        </Modal>}
    </>;
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const V=["Default","InModal"];export{n as Default,o as InModal,V as __namedExportsOrder,Q as default};
