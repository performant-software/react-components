import{j as t}from"./iframe-DGeuXaOs.js";import"./peripleo-maplibre.es40-C4cDd8vR.js";import{v as s,t as i}from"./peripleo-maplibre.es19-BmXq09mL.js";import{m as n}from"./MapStyles-bZfNjRqZ.js";import{R as r}from"./RelatedPlacesLayer-vOuJIa2Z.js";import{u as m}from"./CoreData-FhH0iwvn.js";import{w as p}from"./CoreDataContextProvider-Qv12-_Q6.js";import"./index.es12-C0M9DDjC.js";import"./peripleo-maplibre.es8-DSFkdHCX.js";import"./index-default-B8-H6N8J.js";import"./LoadAnimation-B5bqrHOD.js";import"./index-Cwsko9Iz.js";const E={title:"Components/Core Data/RelatedPlacesLayer",component:r},e=p(()=>{const a=m();return t.jsx(s,{children:t.jsx(i,{style:n,children:t.jsx("div",{style:{width:"100%",height:"300px"},children:t.jsx(r,{buffer:10,onLoad:o=>a.fetchRelatedPlaces("1",o)})})})})});e.__docgenInfo={description:"",methods:[],displayName:"Default"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`withCoreDataContextProvider(() => {
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
