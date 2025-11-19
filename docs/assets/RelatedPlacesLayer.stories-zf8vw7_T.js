import{j as e}from"./iframe-CzTKQtwy.js";import{k as a,X as n,i,z as p}from"./peripleo-maplibre.es11-bWFdnlby.js";import{m as l}from"./MapStyles-BuG8cCHZ.js";import{R as r}from"./RelatedPlacesLayer-DXGq7pqe.js";import{u as m}from"./CoreData-DJ-VrwkE.js";import{w as c}from"./CoreDataContextProvider-CtoHqc-U.js";import"./index.es11-C2Qr1PtC.js";import"./index-default-B8-H6N8J.js";import"./LoadAnimation-BDE4H2fC.js";import"./index-C9inixJZ.js";const R={title:"Components/Core Data/RelatedPlacesLayer",component:r},t=c(()=>{const o=m();return e.jsx(a,{children:e.jsxs(n,{style:l,children:[e.jsx(i,{position:"topright",children:e.jsx(p,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(r,{buffer:10,onLoad:s=>o.fetchRelatedPlaces("1",s)})})]})})});t.__docgenInfo={description:"",methods:[],displayName:"Default"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const EventsService = useEventsService();
  return <Peripleo>
      <Map style={mapStyle}>
        <Controls position='topright'>
          <Zoom />
        </Controls>
        <div style={{
        width: '100%',
        height: '300px'
      }}>
          <RelatedPlacesLayer buffer={10} onLoad={params => EventsService.fetchRelatedPlaces('1', params)} />
        </div>
      </Map>
    </Peripleo>;
})`,...t.parameters?.docs?.source}}};const S=["Default"];export{t as Default,S as __namedExportsOrder,R as default};
