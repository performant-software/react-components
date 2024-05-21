import{j as e}from"./jsx-runtime-D9TvR9R2.js";import"./index-C0dDX-lL.js";import"./peripleo-maplibre.es26-D4QoMT78.js";import{k as p,X as m,m as l,i as c,z as d}from"./MapStyles-D9vcYCuS.js";import"./index-DOYXiIEK.js";import{R as a}from"./RelatedPlacesLayer-CluCO3P4.js";import{a as h}from"./CoreData-D7TwIKTJ.js";import{w as f}from"./CoreDataContextProvider-D6qzoPqZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index.es8-DRPiqvvi.js";import"./iframe-DC00_Z_1.js";import"../sb-preview/runtime.js";import"./index-default-C_maRo4o.js";import"./LoadAnimation-b0qjd8WL.js";import"./index-DnNB6xa5.js";const b={title:"Components/Core Data/RelatedPlacesLayer",component:a},t=f(()=>{const i=h();return e.jsx(p,{children:e.jsxs(m,{style:l,children:[e.jsx(c,{position:"topright",children:e.jsx(d,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(a,{buffer:10,onLoad:n=>i.fetchRelatedPlaces("1",n)})})]})})});t.__docgenInfo={description:"",methods:[],displayName:"Default"};var r,o,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`withCoreDataContextProvider(() => {
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
})`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const M=["Default"];export{t as Default,M as __namedExportsOrder,b as default};
