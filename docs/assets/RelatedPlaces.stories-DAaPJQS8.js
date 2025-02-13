import{j as n}from"./jsx-runtime-D9TvR9R2.js";import"./index-C0dDX-lL.js";import{_}from"./index-default-C_maRo4o.js";import{R as c}from"./RelatedPlaces-D1V_G_Pc.js";import{b as i}from"./CoreData-37WkoVSV.js";import{w as d}from"./CoreDataContextProvider-Btcnl27g.js";import"./_commonjsHelpers-BosuxZz1.js";import"./RelatedList-CXViI6JL.js";import"./clsx-B-dksMZM.js";import"./LoadAnimation-b0qjd8WL.js";import"./createLucideIcon-Cly0WHBx.js";const O={title:"Components/Core Data/RelatedPlaces",component:c},r=d(()=>{const a=i();return n.jsx(c,{onLoad:e=>a.fetchRelatedPlaces("1",e)})}),s=d(()=>{const a=i();return n.jsx(c,{onLoad:e=>a.fetchRelatedPlaces("1",e),renderItem:e=>n.jsx("p",{children:`I've ${Math.random()<.5?"never":""} been to ${e.name}.`})})}),o=d(()=>n.jsx(c,{emptyMessage:"No related places",onLoad:()=>Promise.resolve()})),t=d(()=>{const a=i();return n.jsx(c,{moreLabel:"Load More",onLoad:e=>a.fetchRelatedPlaces("1",e).then(m=>(_.extend(m.list,{count:22,pages:5}),m))})});r.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomRender"};o.__docgenInfo={description:"",methods:[],displayName:"EmptyMessage"};t.__docgenInfo={description:"",methods:[],displayName:"Pagination"};var l,p,P;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();
  return <RelatedPlaces onLoad={params => PlacesService.fetchRelatedPlaces('1', params)} />;
})`,...(P=(p=r.parameters)==null?void 0:p.docs)==null?void 0:P.source}}};var u,v,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();
  return <RelatedPlaces onLoad={params => PlacesService.fetchRelatedPlaces('1', params)} renderItem={item => <p>
          {\`I've \${Math.random() < 0.5 ? 'never' : ''} been to \${item.name}.\`}
        </p>} />;
})`,...(h=(v=s.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var f,g,R;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:"withCoreDataContextProvider(() => <RelatedPlaces emptyMessage='No related places' onLoad={() => Promise.resolve()} />)",...(R=(g=o.parameters)==null?void 0:g.docs)==null?void 0:R.source}}};var S,x,C;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();
  return <RelatedPlaces moreLabel='Load More' onLoad={params => PlacesService.fetchRelatedPlaces('1', params).then(response => {
    _.extend(response.list, {
      count: 22,
      pages: 5
    });
    return response;
  })} />;
})`,...(C=(x=t.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const k=["Default","CustomRender","EmptyMessage","Pagination"];export{s as CustomRender,r as Default,o as EmptyMessage,t as Pagination,k as __namedExportsOrder,O as default};
