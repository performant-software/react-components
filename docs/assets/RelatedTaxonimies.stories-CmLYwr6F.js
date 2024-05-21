import{j as n}from"./jsx-runtime-D9TvR9R2.js";import"./index-C0dDX-lL.js";import{_ as h}from"./index-default-C_maRo4o.js";import{R as r}from"./RelatedTaxonomies-CgV1myFt.js";import{u as g}from"./CoreData-D7TwIKTJ.js";import{w as i}from"./CoreDataContextProvider-D6qzoPqZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./RelatedList-CLPx3q7Z.js";import"./clsx-B-dksMZM.js";import"./LoadAnimation-b0qjd8WL.js";import"./createLucideIcon-Cly0WHBx.js";const N={title:"Components/Core Data/RelatedTaxonomies",component:r},e=i(()=>{const t=g();return n.jsx(r,{onLoad:s=>t.fetchRelatedTaxonomies("1",s)})}),o=i(()=>n.jsx(r,{emptyMessage:"No related taxonomies",onLoad:()=>Promise.resolve()})),a=i(()=>{const t=g();return n.jsx(r,{moreLabel:"Load More",onLoad:s=>t.fetchRelatedTaxonomies("1",s).then(m=>(h.extend(m.list,{count:22,pages:5}),m))})});e.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"EmptyList"};a.__docgenInfo={description:"",methods:[],displayName:"Pagination"};var c,d,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();
  return <RelatedTaxonomies onLoad={params => PlacesService.fetchRelatedTaxonomies('1', params)} />;
})`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,u,x;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:"withCoreDataContextProvider(() => <RelatedTaxonomies emptyMessage='No related taxonomies' onLoad={() => Promise.resolve()} />)",...(x=(u=o.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var P,f,v;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();
  return <RelatedTaxonomies moreLabel='Load More' onLoad={params => PlacesService.fetchRelatedTaxonomies('1', params).then(response => {
    _.extend(response.list, {
      count: 22,
      pages: 5
    });
    return response;
  })} />;
})`,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const M=["Default","EmptyList","Pagination"];export{e as Default,o as EmptyList,a as Pagination,M as __namedExportsOrder,N as default};
