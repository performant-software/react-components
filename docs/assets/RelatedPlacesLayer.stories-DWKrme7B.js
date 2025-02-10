import{j as e}from"./jsx-runtime-BTCK_S7S.js";import"./index-CBqU2yxZ.js";import{k as p,X as m,i as l,z as c}from"./peripleo-maplibre.es11-BGQsLm5V.js";import"./index-DZGZymok.js";import{m as d}from"./MapStyles-Ckvdsjal.js";import{R as a}from"./RelatedPlacesLayer-B_i5vQwE.js";import{u as f}from"./CoreData-Ds0I0oFM.js";import{w as h}from"./CoreDataContextProvider-BTUWExMB.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index.es11-k72jSCcL.js";import"./iframe-bezd0_2E.js";import"../sb-preview/runtime.js";import"./index-default-C_maRo4o.js";import"./LoadAnimation-B5PEUokg.js";import"./index-DnNB6xa5.js";const b={title:"Components/Core Data/RelatedPlacesLayer",component:a},t=h(()=>{const i=f();return e.jsx(p,{children:e.jsxs(m,{style:d,children:[e.jsx(l,{position:"topright",children:e.jsx(c,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(a,{buffer:10,onLoad:n=>i.fetchRelatedPlaces("1",n)})})]})})});t.__docgenInfo={description:"",methods:[],displayName:"Default"};var r,o,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`withCoreDataContextProvider(() => {
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
