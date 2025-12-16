import{j as n}from"./iframe-Dd51AVec.js";import{_ as l}from"./index-default-B8-H6N8J.js";import{R as c}from"./RelatedPlaces-DDWEJfNK.js";import{b as i}from"./CoreData-B5AD3f-y.js";import{w as d}from"./CoreDataContextProvider-vjmJVLa7.js";import"./RelatedList-2JFG8_GA.js";import"./clsx-B-dksMZM.js";import"./LoadAnimation-DoN_mRql.js";import"./createLucideIcon-nZhBF2iT.js";const x={title:"Components/Core Data/RelatedPlaces",component:c},r=d(()=>{const a=i();return n.jsx(c,{onLoad:e=>a.fetchRelatedPlaces("1",e)})}),s=d(()=>{const a=i();return n.jsx(c,{onLoad:e=>a.fetchRelatedPlaces("1",e),renderItem:e=>n.jsx("p",{children:`I've ${Math.random()<.5?"never":""} been to ${e.name}.`})})}),o=d(()=>n.jsx(c,{emptyMessage:"No related places",onLoad:()=>Promise.resolve()})),t=d(()=>{const a=i();return n.jsx(c,{moreLabel:"Load More",onLoad:e=>a.fetchRelatedPlaces("1",e).then(m=>(l.extend(m.list,{count:22,pages:5}),m))})});r.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomRender"};o.__docgenInfo={description:"",methods:[],displayName:"EmptyMessage"};t.__docgenInfo={description:"",methods:[],displayName:"Pagination"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();
  return <RelatedPlaces onLoad={params => PlacesService.fetchRelatedPlaces('1', params)} />;
})`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();
  return <RelatedPlaces onLoad={params => PlacesService.fetchRelatedPlaces('1', params)} renderItem={item => <p>
          {\`I've \${Math.random() < 0.5 ? 'never' : ''} been to \${item.name}.\`}
        </p>} />;
})`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"withCoreDataContextProvider(() => <RelatedPlaces emptyMessage='No related places' onLoad={() => Promise.resolve()} />)",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();
  return <RelatedPlaces moreLabel='Load More' onLoad={params => PlacesService.fetchRelatedPlaces('1', params).then(response => {
    _.extend(response.list, {
      count: 22,
      pages: 5
    });
    return response;
  })} />;
})`,...t.parameters?.docs?.source}}};const C=["Default","CustomRender","EmptyMessage","Pagination"];export{s as CustomRender,r as Default,o as EmptyMessage,t as Pagination,C as __namedExportsOrder,x as default};
