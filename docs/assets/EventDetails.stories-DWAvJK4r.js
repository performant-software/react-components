import{j as e}from"./jsx-runtime-D9TvR9R2.js";import{f as R}from"./index-xJp9Kd2E.js";import"./peripleo-maplibre.es26-D4QoMT78.js";import{r as y}from"./index-C0dDX-lL.js";import{k as g,X as j,m as E,i as N,z as D}from"./MapStyles-D9vcYCuS.js";import"./index-DOYXiIEK.js";import{a as P}from"./chunk-WFFRPTHA-B2vgThZf.js";import{_ as L}from"./index-default-C_maRo4o.js";import{E as S}from"./Event-D5kMneom.js";import{L as C}from"./LoadAnimation-b0qjd8WL.js";import{u as h,a as b}from"./CoreData-BIBskTlz.js";import{R as w}from"./RelatedItems-Digx-i6Q.js";import{R as I}from"./RelatedMedia-LNIRN7Vk.js";import{R as _}from"./RelatedPeople-8cmBiiYR.js";import{R as k}from"./RelatedPlacesLayer-C6mHwlAG.js";import{w as f}from"./CoreDataContextProvider-iJ5SzqPX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./preview-errors-CzpZmerH.js";import"./index-CKJfshIT.js";import"./v4-D8aEg3BZ.js";import"./index.es30-Bv1V2ne4.js";import"./iframe-C-SJiUNG.js";import"../sb-preview/runtime.js";import"./index-MHc7GjeQ.js";import"./redux-CpmcZR8k.js";import"./objectSpread2-Cl-ctlOG.js";import"./defineProperty-DcNpp85p.js";import"./toPropertyKey-BcUJYDQU.js";import"./index-BSLvQv65.js";import"./extends-CCbyfPlC.js";import"./index-DMbTk8A3.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./index-DZYw3b-Q.js";import"./MediaGallery-gUEvHWv5.js";import"./createLucideIcon-Cly0WHBx.js";import"./RelatedList-BFVf4nLq.js";import"./clsx-B-dksMZM.js";import"./index.es8-DQUOti-a.js";import"./index-DnNB6xa5.js";const v=s=>{const t=h(),x=y.useCallback(()=>t.fetchOne(s.id),[s.id]),{data:{event:r}={},loading:u}=b(x);return u?e.jsx(C,{}):r?e.jsxs("div",{children:[e.jsx("h1",{className:"pr-6 py-1 font-bold text-2xl",children:r.name}),e.jsx("div",{className:"py-1",children:S.getDateView(r)}),e.jsx("p",{className:"py-1 text-muted",children:r.description})]}):null},i=v;v.__docgenInfo={description:"This component renders the details for a single event.",methods:[],displayName:"EventDetails",props:{id:{required:!0,flowType:{name:"string"},description:"Identifier for the event to fetch."}}};const ye={title:"Components/Core Data/EventDetails",component:i},o=f(()=>e.jsx(i,{id:"1"})),a=f(()=>{const s=h();return e.jsxs("div",{className:"p-3",children:[e.jsx(i,{id:1}),e.jsxs("div",{className:"py-2",children:[e.jsx("h2",{className:"py-1 font-bold text-lg",children:"Event Location"}),e.jsx(g,{children:e.jsxs(j,{style:E,children:[e.jsx(N,{position:"topright",children:e.jsx(D,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(k,{buffer:10,onLoad:t=>s.fetchRelatedPlaces("1",t)})})]})})]}),e.jsxs("div",{className:"py-2",children:[e.jsx("h2",{className:"py-2 font-bold text-lg",children:"Related Resources"}),e.jsx(w,{onClick:t=>P("click")(t),onLoad:t=>s.fetchRelatedItems("1",t),renderDescription:()=>R.date.anytime().toLocaleDateString(),renderHeader:()=>L.sample(["documents","photos","certificates","licenses"]),renderImage:t=>e.jsx("img",{alt:"Test",src:`https://picsum.photos/800/600?random=${t.uuid}`})})]}),e.jsxs("div",{className:"py-2",children:[e.jsx("h2",{className:"py-2 font-bold text-lg",children:"Related People"}),e.jsx(_,{itemsPerRow:2,onLoad:t=>s.fetchRelatedPeople("1",t)})]}),e.jsx("div",{className:"py-2",children:e.jsx("h2",{className:"py-2 font-bold text-lg",children:"Event Images"})}),e.jsx(I,{itemsPerRow:4,onLoad:t=>s.fetchRelatedManifests("1",t)})]})});o.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"RelatedRecords"};var n,d,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"withCoreDataContextProvider(() => <EventDetails id='1' />)",...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,c,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const EventsService = useEventsService();
  return <div className='p-3'>
      <EventDetails id={1} />
      <div className='py-2'>
        <h2 className='py-1 font-bold text-lg'>
          Event Location
        </h2>
        <Peripleo>
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
        </Peripleo>
      </div>
      <div className='py-2'>
        <h2 className='py-2 font-bold text-lg'>
          Related Resources
        </h2>
        <RelatedItems onClick={item => action('click')(item)} onLoad={params => EventsService.fetchRelatedItems('1', params)} renderDescription={() => faker.date.anytime().toLocaleDateString()} renderHeader={() => _.sample(['documents', 'photos', 'certificates', 'licenses'])} renderImage={item => <img alt='Test' src={\`https://picsum.photos/800/600?random=\${item.uuid}\`} />} />
      </div>
      <div className='py-2'>
        <h2 className='py-2 font-bold text-lg'>
          Related People
        </h2>
        <RelatedPeople itemsPerRow={2} onLoad={params => EventsService.fetchRelatedPeople('1', params)} />
      </div>
      <div className='py-2'>
        <h2 className='py-2 font-bold text-lg'>
          Event Images
        </h2>
      </div>
      <RelatedMedia itemsPerRow={4} onLoad={params => EventsService.fetchRelatedManifests('1', params)} />
    </div>;
})`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const ge=["Default","RelatedRecords"];export{o as Default,a as RelatedRecords,ge as __namedExportsOrder,ye as default};
