import{j as e}from"./jsx-runtime-BTCK_S7S.js";import"./index-CBqU2yxZ.js";import{_ as C}from"./index-default-C_maRo4o.js";import{R as i}from"./RelatedOrganizations-C2tx3OcO.js";import{b as d}from"./CoreData-Ds0I0oFM.js";import{w as c}from"./CoreDataContextProvider-BTUWExMB.js";import"./_commonjsHelpers-BosuxZz1.js";import"./RelatedList-zhBYhkPd.js";import"./clsx-B-dksMZM.js";import"./LoadAnimation-B5PEUokg.js";import"./createLucideIcon-CT11eyui.js";const E={title:"Components/Core Data/RelatedOrganizations",component:i},o=c(()=>{const a=d();return e.jsx(i,{onLoad:r=>a.fetchRelatedOrganizations("1",r)})}),t=c(()=>{const a=d();return e.jsx(i,{onLoad:r=>a.fetchRelatedOrganizations("1",r),renderItem:r=>e.jsxs("p",{children:[`${r.name}:`," ",Math.random()>.5?e.jsx("span",{style:{color:"green"},children:"↑"}):e.jsx("span",{style:{color:"red"},children:"↓"}),e.jsx("strong",{children:`$${(Math.random()*100).toPrecision(4)}`})]})})}),s=c(()=>e.jsx(i,{emptyMessage:"No related organizations",onLoad:()=>Promise.resolve()})),n=c(()=>{const a=d();return e.jsx(i,{moreLabel:"Load More",onLoad:r=>a.fetchRelatedOrganizations("1",r).then(m=>(C.extend(m.list,{count:22,pages:5}),m))})});o.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"CustomRender"};s.__docgenInfo={description:"",methods:[],displayName:"EmptyList"};n.__docgenInfo={description:"",methods:[],displayName:"Pagination"};var p,l,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();
  return <RelatedOrganizations onLoad={params => PlacesService.fetchRelatedOrganizations('1', params)} />;
})`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,h,P;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`withCoreDataContextProvider(() => {
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
})`,...(P=(h=t.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};var v,f,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:"withCoreDataContextProvider(() => <RelatedOrganizations emptyMessage='No related organizations' onLoad={() => Promise.resolve()} />)",...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var R,S,z;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const PlacesService = usePlacesService();
  return <RelatedOrganizations moreLabel='Load More' onLoad={params => PlacesService.fetchRelatedOrganizations('1', params).then(response => {
    _.extend(response.list, {
      count: 22,
      pages: 5
    });
    return response;
  })} />;
})`,...(z=(S=n.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};const b=["Default","CustomRender","EmptyList","Pagination"];export{t as CustomRender,o as Default,s as EmptyList,n as Pagination,b as __namedExportsOrder,E as default};
