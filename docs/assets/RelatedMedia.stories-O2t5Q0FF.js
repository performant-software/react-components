import{j as d}from"./jsx-runtime-D9TvR9R2.js";import"./index-C0dDX-lL.js";import"./index-default-C_maRo4o.js";import{R as o}from"./RelatedMedia-C_f-OA3L.js";import{u}from"./CoreData-D7TwIKTJ.js";import{w as c}from"./CoreDataContextProvider-D6qzoPqZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-MHc7GjeQ.js";import"./redux-CpmcZR8k.js";import"./objectSpread2-Cl-ctlOG.js";import"./defineProperty-DcNpp85p.js";import"./toPropertyKey-BcUJYDQU.js";import"./index-BSLvQv65.js";import"./extends-CCbyfPlC.js";import"./index-DMbTk8A3.js";import"./index-DOYXiIEK.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./index-DZYw3b-Q.js";import"./v4-D8aEg3BZ.js";import"./MediaGallery-gUEvHWv5.js";import"./createLucideIcon-Cly0WHBx.js";import"./RelatedList-CLPx3q7Z.js";import"./clsx-B-dksMZM.js";import"./LoadAnimation-b0qjd8WL.js";const A={title:"Components/Core Data/RelatedMedia",component:o},e=c(()=>{const n=u();return d.jsx(o,{onLoad:l=>n.fetchRelatedManifests("1",l)})}),t=c(()=>d.jsx(o,{emptyMessage:"No related media",onLoad:()=>Promise.resolve()}));e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"EmptyList"};var r,a,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();
  return <RelatedMedia onLoad={params => PlacesService.fetchRelatedManifests('1', params)} />;
})`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var i,m,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"withCoreDataContextProvider(() => <RelatedMedia emptyMessage='No related media' onLoad={() => Promise.resolve()} />)",...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const B=["Default","EmptyList"];export{e as Default,t as EmptyList,B as __namedExportsOrder,A as default};
