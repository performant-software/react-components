import{j as n}from"./iframe-vcq3NyiY.js";import{_ as p}from"./index-default-B8-H6N8J.js";import{R as i}from"./RelatedTaxonomies-Bd57Jt1-.js";import{b as m}from"./CoreData-DHnc0sz0.js";import{w as c}from"./CoreDataContextProvider-CVW3-Dr5.js";import"./RelatedList-ueh_XNBh.js";import"./clsx-B-dksMZM.js";import"./LoadAnimation-B44JAajq.js";import"./createLucideIcon-BzcHnxlu.js";const g={title:"Components/Core Data/RelatedTaxonomies",component:i},a=c(()=>{const o=m();return n.jsx(i,{onLoad:e=>o.fetchRelatedTaxonomies("1",e)})}),r=c(()=>{const o=m();return n.jsx(i,{onLoad:e=>o.fetchRelatedTaxonomies("1",e),renderItem:e=>n.jsx("p",{style:{color:"pink"},children:e.name})})}),s=c(()=>n.jsx(i,{emptyMessage:"No related taxonomies",onLoad:()=>Promise.resolve()})),t=c(()=>{const o=m();return n.jsx(i,{moreLabel:"Load More",onLoad:e=>o.fetchRelatedTaxonomies("1",e).then(d=>(p.extend(d.list,{count:22,pages:5}),d))})});a.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomRender"};s.__docgenInfo={description:"",methods:[],displayName:"EmptyList"};t.__docgenInfo={description:"",methods:[],displayName:"Pagination"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();
  return <RelatedTaxonomies onLoad={params => PlacesService.fetchRelatedTaxonomies('1', params)} />;
})`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();
  return <RelatedTaxonomies onLoad={params => PlacesService.fetchRelatedTaxonomies('1', params)} renderItem={item => <p style={{
    color: 'pink'
  }}>{item.name}</p>} />;
})`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"withCoreDataContextProvider(() => <RelatedTaxonomies emptyMessage='No related taxonomies' onLoad={() => Promise.resolve()} />)",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();
  return <RelatedTaxonomies moreLabel='Load More' onLoad={params => PlacesService.fetchRelatedTaxonomies('1', params).then(response => {
    _.extend(response.list, {
      count: 22,
      pages: 5
    });
    return response;
  })} />;
})`,...t.parameters?.docs?.source}}};const C=["Default","CustomRender","EmptyList","Pagination"];export{r as CustomRender,a as Default,s as EmptyList,t as Pagination,C as __namedExportsOrder,g as default};
