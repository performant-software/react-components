import{j as t}from"./iframe-DTMBAB_o.js";import"./peripleo-maplibre.es40-RZubYBHI.js";import{v as s,t as i}from"./peripleo-maplibre.es19-DaXAHBCe.js";import{m as n}from"./MapStyles-bZfNjRqZ.js";import{R as r}from"./RelatedPlacesLayer-BJBmytUn.js";import{u as m}from"./CoreData-QGmQh1J_.js";import{w as p}from"./CoreDataContextProvider-B6wK5OOz.js";import"./index.es12-Bq91T3Az.js";import"./peripleo-maplibre.es8-Dclndq4X.js";import"./index-default-B8-H6N8J.js";import"./LoadAnimation-CLqEpLom.js";import"./index-Cwsko9Iz.js";const E={title:"Components/Core Data/RelatedPlacesLayer",component:r},e=p(()=>{const a=m();return t.jsx(s,{children:t.jsx(i,{style:n,children:t.jsx("div",{style:{width:"100%",height:"300px"},children:t.jsx(r,{buffer:10,onLoad:o=>a.fetchRelatedPlaces("1",o)})})})})});e.__docgenInfo={description:"",methods:[],displayName:"Default"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`withCoreDataContextProvider(() => {
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
