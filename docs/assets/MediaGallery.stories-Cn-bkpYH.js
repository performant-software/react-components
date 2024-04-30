import{j as e}from"./jsx-runtime-D9TvR9R2.js";import{r as p}from"./index-C0dDX-lL.js";import{M as a}from"./MediaGallery-gUEvHWv5.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CCbyfPlC.js";import"./index-DMbTk8A3.js";import"./index-DOYXiIEK.js";import"./index-BSLvQv65.js";import"./index-MHc7GjeQ.js";import"./redux-CpmcZR8k.js";import"./objectSpread2-Cl-ctlOG.js";import"./defineProperty-DcNpp85p.js";import"./toPropertyKey-BcUJYDQU.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./index-DZYw3b-Q.js";import"./v4-D8aEg3BZ.js";import"./createLucideIcon-Cly0WHBx.js";const D={title:"Components/Core Data/MediaGallery",component:a},t=()=>{const[i,r]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx("button",{onClick:()=>r(!0),type:"button",children:"Open  Gallery"})}),i&&e.jsx(a,{manifestUrl:"/core_data/public/v1/places/1/manifests/1",onClose:()=>r(!1)})]})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};var o,n,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const g=["Default"];export{t as Default,g as __namedExportsOrder,D as default};
