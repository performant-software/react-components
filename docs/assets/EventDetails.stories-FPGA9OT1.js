import{j as e}from"./iframe-CzTKQtwy.js";import{f as n}from"./index-DIguL7K7.js";import{k as m,X as d,i as p,z as l}from"./peripleo-maplibre.es11-bWFdnlby.js";import{_ as c}from"./index-default-B8-H6N8J.js";import{E as a}from"./EventDetails-C7w2_fEm.js";import{m as h}from"./MapStyles-BuG8cCHZ.js";import{R as v}from"./RelatedSources-BZAR-2VW.js";import{R as f}from"./RelatedMedia-BmpUIRf_.js";import{R as x}from"./RelatedPeople-CyvhIyRo.js";import{R}from"./RelatedPlacesLayer-DXGq7pqe.js";import{w as i}from"./CoreDataContextProvider-CtoHqc-U.js";import{u}from"./CoreData-DJ-VrwkE.js";import"./Event-F9rhQ2s7.js";import"./index.es28-COdC-vOI.js";import"./LoadAnimation-BDE4H2fC.js";import"./index-BGXu5DKO.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";import"./toPropertyKey-BdisF6oo.js";import"./index-BvKABdKa.js";import"./extends-CCbyfPlC.js";import"./index-D61USXHs.js";import"./index-C9A1yakq.js";import"./Combination-CFuHPo56.js";import"./floating-ui.react-dom-Bkv50mD2.js";import"./index-D0LTxgOU.js";import"./component-BKUcL2FU.js";import"./index-CUURbvdJ.js";import"./___vite-browser-external_commonjs-proxy-CjKQnpNm.js";import"./MediaGallery-MdClhBIT.js";import"./i18n-DmKDVPrF.js";import"./inherits-DDprkOLY.js";import"./assertThisInitialized-B9jnkVVz.js";import"./setPrototypeOf-DgZC2w_0.js";import"./createClass-CGi6Kyeu.js";import"./Modal-CeKuXF-j.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-qJKuR-BX.js";import"./RelatedList-Df_Qyed-.js";import"./index.es11-C2Qr1PtC.js";import"./index-C9inixJZ.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,me={title:"Components/Core Data/EventDetails",component:a},s=i(()=>e.jsx(a,{id:"1"})),o=i(()=>{const r=u();return e.jsxs("div",{className:"p-3",children:[e.jsx(a,{id:1}),e.jsxs("div",{className:"py-2",children:[e.jsx("h2",{className:"py-1 font-bold text-lg",children:"Event Location"}),e.jsx(m,{children:e.jsxs(d,{style:h,children:[e.jsx(p,{position:"topright",children:e.jsx(l,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(R,{buffer:10,onLoad:t=>r.fetchRelatedPlaces("1",t)})})]})})]}),e.jsxs("div",{className:"py-2",children:[e.jsx("h2",{className:"py-2 font-bold text-lg",children:"Related Resources"}),e.jsx(v,{onClick:t=>y("click")(t),onLoad:t=>r.fetchRelatedItems("1",t),renderDescription:()=>n.date.anytime().toLocaleDateString(),renderHeader:()=>c.sample(["documents","photos","certificates","licenses"]),renderImage:t=>e.jsx("img",{alt:"Test",src:`https://picsum.photos/800/600?random=${t.uuid}`}),sourceType:"items"})]}),e.jsxs("div",{className:"py-2",children:[e.jsx("h2",{className:"py-2 font-bold text-lg",children:"Related People"}),e.jsx(x,{itemsPerRow:2,onLoad:t=>r.fetchRelatedPeople("1",t)})]}),e.jsx("div",{className:"py-2",children:e.jsx("h2",{className:"py-2 font-bold text-lg",children:"Event Images"})}),e.jsx(f,{itemsPerRow:4,onLoad:t=>r.fetchRelatedManifests("1",t)})]})});s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"RelatedRecords"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"withCoreDataContextProvider(() => <EventDetails id='1' />)",...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`withCoreDataContextProvider(() => {
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
        <RelatedSources onClick={item => action('click')(item)} onLoad={params => EventsService.fetchRelatedItems('1', params)} renderDescription={() => faker.date.anytime().toLocaleDateString()} renderHeader={() => _.sample(['documents', 'photos', 'certificates', 'licenses'])} renderImage={item => <img alt='Test' src={\`https://picsum.photos/800/600?random=\${item.uuid}\`} />} sourceType='items' />
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
})`,...o.parameters?.docs?.source}}};const de=["Default","RelatedRecords"];export{s as Default,o as RelatedRecords,de as __namedExportsOrder,me as default};
