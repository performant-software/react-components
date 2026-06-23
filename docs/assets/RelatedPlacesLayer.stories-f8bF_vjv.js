import{j as t}from"./iframe-CobmjQJx.js";import"./peripleo-maplibre.es40-Cs92oAqg.js";import{v as s,t as i}from"./peripleo-maplibre.es19-C7WZ7r7V.js";import{m as n}from"./MapStyles-bZfNjRqZ.js";import{R as r}from"./RelatedPlacesLayer-8OxjQtsm.js";import{u as m}from"./CoreData-BdrRbu6T.js";import{w as p}from"./CoreDataContextProvider-DiNTDej0.js";import"./index.es12-DA6f-WBH.js";import"./peripleo-maplibre.es8-B2O6VWM5.js";import"./index-default-B8-H6N8J.js";import"./LoadAnimation-5g9B4y1e.js";import"./index-C9inixJZ.js";const E={title:"Components/Core Data/RelatedPlacesLayer",component:r},e=p(()=>{const a=m();return t.jsx(s,{children:t.jsx(i,{style:n,children:t.jsx("div",{style:{width:"100%",height:"300px"},children:t.jsx(r,{buffer:10,onLoad:o=>a.fetchRelatedPlaces("1",o)})})})})});e.__docgenInfo={description:"",methods:[],displayName:"Default"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`withCoreDataContextProvider(() => {
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
