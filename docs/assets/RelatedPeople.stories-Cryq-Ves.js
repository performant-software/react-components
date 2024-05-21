import{j as c}from"./jsx-runtime-D9TvR9R2.js";import"./index-C0dDX-lL.js";import{_}from"./index-default-C_maRo4o.js";import{R as n}from"./RelatedPeople-CKF39Avp.js";import{u as p}from"./CoreData-D7TwIKTJ.js";import{w as i}from"./CoreDataContextProvider-D6qzoPqZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./RelatedList-CLPx3q7Z.js";import"./clsx-B-dksMZM.js";import"./LoadAnimation-b0qjd8WL.js";import"./createLucideIcon-Cly0WHBx.js";const b={title:"Components/Core Data/RelatedPeople",component:n},r=i(()=>{const e=p();return c.jsx(n,{onLoad:o=>e.fetchRelatedPeople("1",o)})}),t=i(()=>{const e=p();return c.jsx(n,{itemsPerRow:2,onLoad:o=>e.fetchRelatedPeople("1",o)})}),a=i(()=>c.jsx(n,{emptyMessage:"No related people",onLoad:()=>Promise.resolve()})),s=i(()=>{const e=p();return c.jsx(n,{onLoad:o=>e.fetchRelatedPeople("1",o).then(l=>(_.extend(l.list,{pages:5,count:22}),l)),showMoreLabel:"Load More"})});r.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"Horizontal"};a.__docgenInfo={description:"",methods:[],displayName:"EmptyList"};s.__docgenInfo={description:"",methods:[],displayName:"Pagination"};var d,m,P;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();
  return <RelatedPeople onLoad={params => PlacesService.fetchRelatedPeople('1', params)} />;
})`,...(P=(m=r.parameters)==null?void 0:m.docs)==null?void 0:P.source}}};var u,v,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();
  return <RelatedPeople itemsPerRow={2} onLoad={params => PlacesService.fetchRelatedPeople('1', params)} />;
})`,...(f=(v=t.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var h,R,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:"withCoreDataContextProvider(() => <RelatedPeople emptyMessage='No related people' onLoad={() => Promise.resolve()} />)",...(S=(R=a.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var g,x,L;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();
  return <RelatedPeople onLoad={params => PlacesService.fetchRelatedPeople('1', params).then(response => {
    _.extend(response.list, {
      pages: 5,
      count: 22
    });
    return response;
  })} showMoreLabel='Load More' />;
})`,...(L=(x=s.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};const O=["Default","Horizontal","EmptyList","Pagination"];export{r as Default,a as EmptyList,t as Horizontal,s as Pagination,O as __namedExportsOrder,b as default};
