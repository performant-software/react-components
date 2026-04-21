import{j as t}from"./iframe-CDKtSUh7.js";import"./peripleo-maplibre.es40-Y7zUulwg.js";import{v as s,t as i}from"./peripleo-maplibre.es19-Bmg6KlVl.js";import{m as n}from"./MapStyles-bZfNjRqZ.js";import{R as r}from"./RelatedPlacesLayer-BPNZ_Rg7.js";import{u as m}from"./CoreData-NYg6XHiR.js";import{w as p}from"./CoreDataContextProvider-BUeUPFNC.js";import"./index.es12-C4xLAaml.js";import"./peripleo-maplibre.es8-DQjQ3ZjD.js";import"./index-default-B8-H6N8J.js";import"./LoadAnimation-BpznShSx.js";import"./index-C9inixJZ.js";const E={title:"Components/Core Data/RelatedPlacesLayer",component:r},e=p(()=>{const a=m();return t.jsx(s,{children:t.jsx(i,{style:n,children:t.jsx("div",{style:{width:"100%",height:"300px"},children:t.jsx(r,{buffer:10,onLoad:o=>a.fetchRelatedPlaces("1",o)})})})})});e.__docgenInfo={description:"",methods:[],displayName:"Default"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`withCoreDataContextProvider(() => {
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
