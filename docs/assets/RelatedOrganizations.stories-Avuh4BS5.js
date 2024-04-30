import{j as n}from"./jsx-runtime-D9TvR9R2.js";import"./index-C0dDX-lL.js";import{_ as x}from"./index-default-C_maRo4o.js";import{R as r}from"./RelatedOrganizations-BFYlJzCQ.js";import{b as h}from"./CoreData-DmOLGfmS.js";import{w as i}from"./CoreDataContextProvider-DD6ftz6r.js";import"./_commonjsHelpers-BosuxZz1.js";import"./RelatedList-CMoKTjBg.js";import"./clsx-B-dksMZM.js";import"./LoadAnimation-b0qjd8WL.js";import"./createLucideIcon-Cly0WHBx.js";const E={title:"Components/Core Data/RelatedOrganizations",component:r},e=i(()=>{const t=h();return n.jsx(r,{onLoad:s=>t.fetchRelatedOrganizations("1",s)})}),a=i(()=>n.jsx(r,{emptyMessage:"No related organizations",onLoad:()=>Promise.resolve()})),o=i(()=>{const t=h();return n.jsx(r,{moreLabel:"Load More",onLoad:s=>t.fetchRelatedOrganizations("1",s).then(c=>(x.extend(c.list,{count:22,pages:5}),c))})});e.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"EmptyList"};o.__docgenInfo={description:"",methods:[],displayName:"Pagination"};var m,d,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();
  return <RelatedOrganizations onLoad={params => PlacesService.fetchRelatedOrganizations('1', params)} />;
})`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,g,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"withCoreDataContextProvider(() => <RelatedOrganizations emptyMessage='No related organizations' onLoad={() => Promise.resolve()} />)",...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var P,f,v;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();
  return <RelatedOrganizations moreLabel='Load More' onLoad={params => PlacesService.fetchRelatedOrganizations('1', params).then(response => {
    _.extend(response.list, {
      count: 22,
      pages: 5
    });
    return response;
  })} />;
})`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const N=["Default","EmptyList","Pagination"];export{e as Default,a as EmptyList,o as Pagination,N as __namedExportsOrder,E as default};
