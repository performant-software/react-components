import{j as t}from"./iframe-DJRD9VYJ.js";import"./peripleo-maplibre.es40-KeJiltWf.js";import{v as s,t as i}from"./peripleo-maplibre.es19-CrTvr0uH.js";import{m as n}from"./MapStyles-bZfNjRqZ.js";import{R as r}from"./RelatedPlacesLayer-DZ4A15EE.js";import{u as m}from"./CoreData-CkE8E9Bc.js";import{w as p}from"./CoreDataContextProvider-C3j3m9hf.js";import"./index.es12-CeMTAQlM.js";import"./peripleo-maplibre.es8-vAjDCU5j.js";import"./index-default-B8-H6N8J.js";import"./LoadAnimation-CF0uNCke.js";import"./index-Cwsko9Iz.js";const E={title:"Components/Core Data/RelatedPlacesLayer",component:r},e=p(()=>{const a=m();return t.jsx(s,{children:t.jsx(i,{style:n,children:t.jsx("div",{style:{width:"100%",height:"300px"},children:t.jsx(r,{buffer:10,onLoad:o=>a.fetchRelatedPlaces("1",o)})})})})});e.__docgenInfo={description:"",methods:[],displayName:"Default"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`withCoreDataContextProvider(() => {
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
