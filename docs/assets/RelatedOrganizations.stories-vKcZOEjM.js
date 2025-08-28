import{j as e}from"./iframe-Dxgww4-I.js";import{_ as p}from"./index-default-B8-H6N8J.js";import{R as i}from"./RelatedOrganizations-C8BWwkun.js";import{b as d}from"./CoreData-8OKJb2SX.js";import{w as c}from"./CoreDataContextProvider-BnS9XIQT.js";import"./RelatedList-D4JFigni.js";import"./clsx-B-dksMZM.js";import"./LoadAnimation-lnwb-oWB.js";import"./createLucideIcon-C4W9ZMmj.js";const S={title:"Components/Core Data/RelatedOrganizations",component:i},o=c(()=>{const a=d();return e.jsx(i,{onLoad:r=>a.fetchRelatedOrganizations("1",r)})}),t=c(()=>{const a=d();return e.jsx(i,{onLoad:r=>a.fetchRelatedOrganizations("1",r),renderItem:r=>e.jsxs("p",{children:[`${r.name}:`," ",Math.random()>.5?e.jsx("span",{style:{color:"green"},children:"↑"}):e.jsx("span",{style:{color:"red"},children:"↓"}),e.jsx("strong",{children:`$${(Math.random()*100).toPrecision(4)}`})]})})}),s=c(()=>e.jsx(i,{emptyMessage:"No related organizations",onLoad:()=>Promise.resolve()})),n=c(()=>{const a=d();return e.jsx(i,{moreLabel:"Load More",onLoad:r=>a.fetchRelatedOrganizations("1",r).then(m=>(p.extend(m.list,{count:22,pages:5}),m))})});o.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"CustomRender"};s.__docgenInfo={description:"",methods:[],displayName:"EmptyList"};n.__docgenInfo={description:"",methods:[],displayName:"Pagination"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();
  return <RelatedOrganizations onLoad={params => PlacesService.fetchRelatedOrganizations('1', params)} />;
})`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();
  return <RelatedOrganizations onLoad={params => PlacesService.fetchRelatedOrganizations('1', params)} renderItem={item => <p>
          {\`\${item.name}:\`}
          &nbsp;
          {Math.random() > 0.5 ? <span style={{
      color: 'green'
    }}>↑</span> : <span style={{
      color: 'red'
    }}>↓</span>}
          <strong>{\`$\${(Math.random() * 100).toPrecision(4)}\`}</strong>
        </p>} />;
})`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"withCoreDataContextProvider(() => <RelatedOrganizations emptyMessage='No related organizations' onLoad={() => Promise.resolve()} />)",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();
  return <RelatedOrganizations moreLabel='Load More' onLoad={params => PlacesService.fetchRelatedOrganizations('1', params).then(response => {
    _.extend(response.list, {
      count: 22,
      pages: 5
    });
    return response;
  })} />;
})`,...n.parameters?.docs?.source}}};const z=["Default","CustomRender","EmptyList","Pagination"];export{t as CustomRender,o as Default,s as EmptyList,n as Pagination,z as __namedExportsOrder,S as default};
