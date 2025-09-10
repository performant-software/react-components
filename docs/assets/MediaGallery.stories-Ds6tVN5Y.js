import{r,j as e}from"./iframe-vd5jUnmh.js";import{M as i}from"./MediaGallery-C5AwSidP.js";import{M as p}from"./Modal-258xy-ea.js";import"./index-CgIZ2imf.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";import"./toPropertyKey-BdisF6oo.js";import"./index-jNvobNF3.js";import"./extends-CCbyfPlC.js";import"./index-DKsOmCvY.js";import"./index-Dl0TZlL6.js";import"./Combination-SETzjcRI.js";import"./floating-ui.react-dom-BjXVjfXi.js";import"./index-D605JuBE.js";import"./component-DUvjkpWl.js";import"./index-j5I8gMq3.js";import"./___vite-browser-external_commonjs-proxy-BZJle3Wx.js";import"./index-default-B8-H6N8J.js";import"./i18n-DtnBOa9t.js";import"./inherits-DDprkOLY.js";import"./assertThisInitialized-B9jnkVVz.js";import"./setPrototypeOf-DgZC2w_0.js";import"./createClass-CGi6Kyeu.js";import"./index.es28-C-vUsR_k.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-DdviaT3d.js";const N={title:"Components/Core Data/MediaGallery",component:i},n=()=>{const[s,t]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx("button",{onClick:()=>t(!0),type:"button",children:"Open  Gallery"})}),s&&e.jsx(i,{manifestUrl:`${window.origin}/core_data/public/v1/places/1/manifests/1`,onClose:()=>t(!1)})]})},o=()=>{const[s,t]=r.useState(!1),[l,a]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>t(!0),type:"button",children:"Open  First Modal"}),s&&e.jsxs(p,{description:"Testing Media Gallery within a Modal",title:"Testing Modal",onClose:()=>t(!1),open:!0,children:[e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx("button",{onClick:()=>a(!0),type:"button",children:"Open  Gallery"})}),l&&e.jsx(i,{manifestUrl:`${window.origin}/core_data/public/v1/places/1/manifests/1`,onClose:()=>a(!1)})]})]})};n.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"InModal"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
