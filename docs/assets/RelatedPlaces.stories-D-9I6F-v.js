import{j as c}from"./jsx-runtime-D9TvR9R2.js";import"./index-C0dDX-lL.js";import{_ as x}from"./index-default-C_maRo4o.js";import{R as o}from"./RelatedPlaces-Ch4MKxpR.js";import{b as h}from"./CoreData-BIBskTlz.js";import{w as n}from"./CoreDataContextProvider-iJ5SzqPX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./RelatedList-BFVf4nLq.js";import"./clsx-B-dksMZM.js";import"./LoadAnimation-b0qjd8WL.js";import"./createLucideIcon-Cly0WHBx.js";const N={title:"Components/Core Data/RelatedPlaces",component:o},e=n(()=>{const s=h();return c.jsx(o,{onLoad:t=>s.fetchRelatedPlaces("1",t)})}),a=n(()=>c.jsx(o,{emptyMessage:"No related places",onLoad:()=>Promise.resolve()})),r=n(()=>{const s=h();return c.jsx(o,{moreLabel:"Load More",onLoad:t=>s.fetchRelatedPlaces("1",t).then(i=>(x.extend(i.list,{count:22,pages:5}),i))})});e.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"EmptyMessage"};r.__docgenInfo={description:"",methods:[],displayName:"Pagination"};var m,d,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();
  return <RelatedPlaces onLoad={params => PlacesService.fetchRelatedPlaces('1', params)} />;
})`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,P,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"withCoreDataContextProvider(() => <RelatedPlaces emptyMessage='No related places' onLoad={() => Promise.resolve()} />)",...(u=(P=a.parameters)==null?void 0:P.docs)==null?void 0:u.source}}};var f,g,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();
  return <RelatedPlaces moreLabel='Load More' onLoad={params => PlacesService.fetchRelatedPlaces('1', params).then(response => {
    _.extend(response.list, {
      count: 22,
      pages: 5
    });
    return response;
  })} />;
})`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const b=["Default","EmptyMessage","Pagination"];export{e as Default,a as EmptyMessage,r as Pagination,b as __namedExportsOrder,N as default};
