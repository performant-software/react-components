import{j as e}from"./jsx-runtime-BTCK_S7S.js";import{r as p}from"./index-CBqU2yxZ.js";import{M as i}from"./MediaGallery-BBxBPVxq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CCbyfPlC.js";import"./index-BC5k8oyH.js";import"./index-DZGZymok.js";import"./index-XZJElpGj.js";import"./index-CAoC3wa_.js";import"./redux-C8f_Y06i.js";import"./objectSpread2-N4c0DWqo.js";import"./defineProperty-CCxoMnQV.js";import"./toPropertyKey-hKuLU48H.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./index-DI4Pawpj.js";import"./v4-D8aEg3BZ.js";import"./createLucideIcon-CT11eyui.js";const k={title:"Components/Core Data/MediaGallery",component:i},l={id:"https://core-data-cloud-staging-2c51db0617a5.herokuapp.com/core_data/public/media_contents/49123f66-6a4d-47b8-a781-0f31ab63adae",record_id:13,title:"hog-hammock-library.jpeg",type:"MediaContent",uuid:"49123f66-6a4d-47b8-a781-0f31ab63adae",manifest_url:"https://iiif-cloud-staging.herokuapp.com/public/resources/013125a9-ad22-43d6-910b-ccc6662c0708/manifest"},t=()=>{const[s,o]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx("button",{onClick:()=>o(!0),type:"button",children:"Open  Gallery"})}),s&&e.jsx(i,{defaultItem:l,onClose:()=>o(!1),title:"Media & Documents"})]})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};var a,r,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
      {open && <MediaGallery defaultItem={item} onClose={() => setOpen(false)} title='Media & Documents' />}
    </>;
}`,...(n=(r=t.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const v=["Default"];export{t as Default,v as __namedExportsOrder,k as default};
