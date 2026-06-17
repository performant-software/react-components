import{j as t}from"./iframe-Cv6NyGmh.js";import"./peripleo-maplibre.es40-B2OW5Q0h.js";import{v as s,t as i}from"./peripleo-maplibre.es19-BywAMi3k.js";import{m as n}from"./MapStyles-bZfNjRqZ.js";import{R as r}from"./RelatedPlacesLayer-BqKJOUKI.js";import{u as m}from"./CoreData-Dsil66N_.js";import{w as p}from"./CoreDataContextProvider-FMLE2Y3h.js";import"./index.es12-DUUiOBLL.js";import"./peripleo-maplibre.es8-4XfG9gmC.js";import"./index-default-B8-H6N8J.js";import"./LoadAnimation-BiKpmbYJ.js";import"./index-C9inixJZ.js";const E={title:"Components/Core Data/RelatedPlacesLayer",component:r},e=p(()=>{const a=m();return t.jsx(s,{children:t.jsx(i,{style:n,children:t.jsx("div",{style:{width:"100%",height:"300px"},children:t.jsx(r,{buffer:10,onLoad:o=>a.fetchRelatedPlaces("1",o)})})})})});e.__docgenInfo={description:"",methods:[],displayName:"Default"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`withCoreDataContextProvider(() => {
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
