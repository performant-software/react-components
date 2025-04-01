import{j as e}from"./jsx-runtime-D9TvR9R2.js";import"./index-C0dDX-lL.js";import{k as p,X as m,i as l,z as c}from"./peripleo-maplibre.es11-BG7NFGMs.js";import"./index-DOYXiIEK.js";import{m as d}from"./MapStyles-CY04RcTN.js";import{R as a}from"./RelatedPlacesLayer-D8au30qy.js";import{u as f}from"./CoreData-37WkoVSV.js";import{w as h}from"./CoreDataContextProvider-Btcnl27g.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index.es11-BrQnAasc.js";import"./iframe-D9MlEg2B.js";import"../sb-preview/runtime.js";import"./index-default-C_maRo4o.js";import"./LoadAnimation-b0qjd8WL.js";import"./index-DnNB6xa5.js";const b={title:"Components/Core Data/RelatedPlacesLayer",component:a},t=h(()=>{const i=f();return e.jsx(p,{children:e.jsxs(m,{style:d,children:[e.jsx(l,{position:"topright",children:e.jsx(c,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(a,{buffer:10,onLoad:n=>i.fetchRelatedPlaces("1",n)})})]})})});t.__docgenInfo={description:"",methods:[],displayName:"Default"};var r,o,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`withCoreDataContextProvider(() => {
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
