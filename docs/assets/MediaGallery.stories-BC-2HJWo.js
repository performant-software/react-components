import{j as e}from"./jsx-runtime-BTCK_S7S.js";import{r}from"./index-CBqU2yxZ.js";import{M as a}from"./MediaGallery-UqyBADKP.js";import{M as y}from"./Modal-CwbMTqjF.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-C33q5ojn.js";import"./redux-C8f_Y06i.js";import"./objectSpread2-N4c0DWqo.js";import"./defineProperty-CCxoMnQV.js";import"./toPropertyKey-hKuLU48H.js";import"./index-D-Qi2jLc.js";import"./extends-CCbyfPlC.js";import"./index-BtRXy3hf.js";import"./index-DZGZymok.js";import"./index-viPvum23.js";import"./Combination-M64V0Dqw.js";import"./floating-ui.react-dom-CacSY337.js";import"./index-DigeOTHn.js";import"./component-DZ72w8lP.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./index-DiU2Igp9.js";import"./v4-D8aEg3BZ.js";import"./index.es33-DmryshtJ.js";import"./iframe-C52gK9Gy.js";import"../sb-preview/runtime.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-CT11eyui.js";const J={title:"Components/Core Data/MediaGallery",component:a},n=()=>{const[s,t]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx("button",{onClick:()=>t(!0),type:"button",children:"Open  Gallery"})}),s&&e.jsx(a,{manifestUrl:"/core_data/public/v1/places/1/manifests/1",onClose:()=>t(!1)})]})},o=()=>{const[s,t]=r.useState(!1),[f,i]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>t(!0),type:"button",children:"Open  First Modal"}),s&&e.jsxs(y,{description:"Testing Media Gallery within a Modal",title:"Testing Modal",onClose:()=>t(!1),open:!0,children:[e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx("button",{onClick:()=>i(!0),type:"button",children:"Open  Gallery"})}),f&&e.jsx(a,{manifestUrl:"/core_data/public/v1/places/1/manifests/1",onClose:()=>i(!1)})]})]})};n.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"InModal"};var l,p,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
