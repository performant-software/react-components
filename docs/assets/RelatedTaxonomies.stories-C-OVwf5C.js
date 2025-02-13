import{j as n}from"./jsx-runtime-D9TvR9R2.js";import"./index-C0dDX-lL.js";import{_ as L}from"./index-default-C_maRo4o.js";import{R as i}from"./RelatedTaxonomies-V3Qw68hT.js";import{b as c}from"./CoreData-37WkoVSV.js";import{w as m}from"./CoreDataContextProvider-Btcnl27g.js";import"./_commonjsHelpers-BosuxZz1.js";import"./RelatedList-CXViI6JL.js";import"./clsx-B-dksMZM.js";import"./LoadAnimation-b0qjd8WL.js";import"./createLucideIcon-Cly0WHBx.js";const k={title:"Components/Core Data/RelatedTaxonomies",component:i},r=m(()=>{const o=c();return n.jsx(i,{onLoad:e=>o.fetchRelatedTaxonomies("1",e)})}),a=m(()=>{const o=c();return n.jsx(i,{onLoad:e=>o.fetchRelatedTaxonomies("1",e),renderItem:e=>n.jsx("p",{style:{color:"pink"},children:e.name})})}),t=m(()=>n.jsx(i,{emptyMessage:"No related taxonomies",onLoad:()=>Promise.resolve()})),s=m(()=>{const o=c();return n.jsx(i,{moreLabel:"Load More",onLoad:e=>o.fetchRelatedTaxonomies("1",e).then(d=>(L.extend(d.list,{count:22,pages:5}),d))})});r.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"CustomRender"};t.__docgenInfo={description:"",methods:[],displayName:"EmptyList"};s.__docgenInfo={description:"",methods:[],displayName:"Pagination"};var p,l,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();
  return <RelatedTaxonomies onLoad={params => PlacesService.fetchRelatedTaxonomies('1', params)} />;
})`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var x,P,v;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();
  return <RelatedTaxonomies onLoad={params => PlacesService.fetchRelatedTaxonomies('1', params)} renderItem={item => <p style={{
    color: 'pink'
  }}>{item.name}</p>} />;
})`,...(v=(P=a.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};var f,h,R;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:"withCoreDataContextProvider(() => <RelatedTaxonomies emptyMessage='No related taxonomies' onLoad={() => Promise.resolve()} />)",...(R=(h=t.parameters)==null?void 0:h.docs)==null?void 0:R.source}}};var S,g,C;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();
  return <RelatedTaxonomies moreLabel='Load More' onLoad={params => PlacesService.fetchRelatedTaxonomies('1', params).then(response => {
    _.extend(response.list, {
      count: 22,
      pages: 5
    });
    return response;
  })} />;
})`,...(C=(g=s.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};const O=["Default","CustomRender","EmptyList","Pagination"];export{a as CustomRender,r as Default,t as EmptyList,s as Pagination,O as __namedExportsOrder,k as default};
