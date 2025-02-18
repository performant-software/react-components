import{j as e}from"./jsx-runtime-D9TvR9R2.js";import{r}from"./index-C0dDX-lL.js";import{M as a}from"./MediaGallery-DZLGN88F.js";import{M as y}from"./Modal-C8SCAmcT.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CgRoNusw.js";import"./redux-CpmcZR8k.js";import"./objectSpread2-Cl-ctlOG.js";import"./defineProperty-DcNpp85p.js";import"./toPropertyKey-BcUJYDQU.js";import"./index-CMZE9jPC.js";import"./extends-CCbyfPlC.js";import"./index-CIyLsbPd.js";import"./index-DOYXiIEK.js";import"./index-BmSdlTVd.js";import"./Combination-Cv237ggT.js";import"./floating-ui.react-dom-BUm7GwT3.js";import"./index-BqvWSUer.js";import"./component-Cj9xgufj.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./index-DwxJ7BsK.js";import"./v4-D8aEg3BZ.js";import"./index.es33-D7u3vlC1.js";import"./iframe-OmJtvN77.js";import"../sb-preview/runtime.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-Cly0WHBx.js";const J={title:"Components/Core Data/MediaGallery",component:a},n=()=>{const[s,t]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx("button",{onClick:()=>t(!0),type:"button",children:"Open  Gallery"})}),s&&e.jsx(a,{manifestUrl:"/core_data/public/v1/places/1/manifests/1",onClose:()=>t(!1)})]})},o=()=>{const[s,t]=r.useState(!1),[f,i]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>t(!0),type:"button",children:"Open  First Modal"}),s&&e.jsxs(y,{description:"Testing Media Gallery within a Modal",title:"Testing Modal",onClose:()=>t(!1),open:!0,children:[e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx("button",{onClick:()=>i(!0),type:"button",children:"Open  Gallery"})}),f&&e.jsx(a,{manifestUrl:"/core_data/public/v1/places/1/manifests/1",onClose:()=>i(!1)})]})]})};n.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"InModal"};var l,p,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
      {open && <MediaGallery manifestUrl='/core_data/public/v1/places/1/manifests/1' onClose={() => setOpen(false)} />}
    </>;
}`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,m,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
          {open2 && <MediaGallery manifestUrl='/core_data/public/v1/places/1/manifests/1' onClose={() => setOpen2(false)} />}
        </Modal>}
    </>;
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const K=["Default","InModal"];export{n as Default,o as InModal,K as __namedExportsOrder,J as default};
