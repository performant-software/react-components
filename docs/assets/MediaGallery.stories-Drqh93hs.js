import{r,j as e}from"./iframe-CBVnS_gz.js";import{M as i}from"./MediaGallery-DHWgXeQm.js";import{M as p}from"./Modal-25pVTVUC.js";import"./index-CER11fW1.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";import"./toPropertyKey-BdisF6oo.js";import"./index-DlSQhPpo.js";import"./extends-CCbyfPlC.js";import"./index-4e5Grcog.js";import"./index-Ct6evQsd.js";import"./Combination-C-caRaw3.js";import"./floating-ui.react-dom-C18xWKDl.js";import"./index-DJcWH6cu.js";import"./component-IsuazikL.js";import"./index-C75l-2Ym.js";import"./___vite-browser-external_commonjs-proxy-6BweR9Lb.js";import"./index-default-B8-H6N8J.js";import"./i18n-DtnBOa9t.js";import"./inherits-DDprkOLY.js";import"./assertThisInitialized-B9jnkVVz.js";import"./setPrototypeOf-DgZC2w_0.js";import"./createClass-CGi6Kyeu.js";import"./index.es28-Dw5WpxTH.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-CX10w8fE.js";const N={title:"Components/Core Data/MediaGallery",component:i},n=()=>{const[s,t]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx("button",{onClick:()=>t(!0),type:"button",children:"Open  Gallery"})}),s&&e.jsx(i,{manifestUrl:`${window.origin}/core_data/public/v1/places/1/manifests/1`,onClose:()=>t(!1)})]})},o=()=>{const[s,t]=r.useState(!1),[l,a]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>t(!0),type:"button",children:"Open  First Modal"}),s&&e.jsxs(p,{description:"Testing Media Gallery within a Modal",title:"Testing Modal",onClose:()=>t(!1),open:!0,children:[e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx("button",{onClick:()=>a(!0),type:"button",children:"Open  Gallery"})}),l&&e.jsx(i,{manifestUrl:`${window.origin}/core_data/public/v1/places/1/manifests/1`,onClose:()=>a(!1)})]})]})};n.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"InModal"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const R=["Default","InModal"];export{n as Default,o as InModal,R as __namedExportsOrder,N as default};
