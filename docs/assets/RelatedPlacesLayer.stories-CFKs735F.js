import{j as t}from"./iframe-XscsSow5.js";import"./peripleo-maplibre32.es-B66BrS11.js";import{v as s,t as i}from"./peripleo-maplibre19.es-DBTX0DHl.js";import{m as n}from"./MapStyles-bZfNjRqZ.js";import{R as r}from"./RelatedPlacesLayer-DYTFHjlC.js";import{u as m}from"./CoreData-CJZ-Uas5.js";import{w as p}from"./CoreDataContextProvider-DIa4jv3b.js";import"./index.es12-DsgiW3aS.js";import"./peripleo-maplibre8.es-Dp9X6MBm.js";import"./index-default-B8-H6N8J.js";import"./LoadAnimation-CRpOJ1zy.js";import"./index-Cwsko9Iz.js";const E={title:"Components/Core Data/RelatedPlacesLayer",component:r},e=p(()=>{const a=m();return t.jsx(s,{children:t.jsx(i,{style:n,children:t.jsx("div",{style:{width:"100%",height:"300px"},children:t.jsx(r,{buffer:10,onLoad:o=>a.fetchRelatedPlaces("1",o)})})})})});e.__docgenInfo={description:"",methods:[],displayName:"Default"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const EventsService = useEventsService();
  return <Peripleo>
      <Map style={mapStyle}>
        <div style={{
        width: '100%',
        height: '300px'
      }}>
          <RelatedPlacesLayer buffer={10} onLoad={params => EventsService.fetchRelatedPlaces('1', params)} />
        </div>
      </Map>
    </Peripleo>;
})`,...e.parameters?.docs?.source}}};const j=["Default"];export{e as Default,j as __namedExportsOrder,E as default};
