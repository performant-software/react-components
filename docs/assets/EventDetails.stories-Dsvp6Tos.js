import{j as e}from"./iframe-CobmjQJx.js";import{f as n}from"./index-DIguL7K7.js";import"./peripleo-maplibre.es40-Cs92oAqg.js";import{v as m,t as d}from"./peripleo-maplibre.es19-C7WZ7r7V.js";import{_ as p}from"./index-default-B8-H6N8J.js";import{E as r}from"./EventDetails-BthJIVSW.js";import{m as l}from"./MapStyles-bZfNjRqZ.js";import{R as c}from"./RelatedSources-CIjFr0Zs.js";import{R as h}from"./RelatedMedia-B4NyMI2E.js";import{R as v}from"./RelatedPeople-BaA6NRON.js";import{R as f}from"./RelatedPlacesLayer-8OxjQtsm.js";import{w as i}from"./CoreDataContextProvider-DiNTDej0.js";import{u as R}from"./CoreData-BdrRbu6T.js";import"./Event-BgQ5ebaa.js";import"./index.es28-C7GyLKAW.js";import"./LoadAnimation-5g9B4y1e.js";import"./index-K3A6j1Tz.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";import"./toPropertyKey-BdisF6oo.js";import"./index-DnSbKFvG.js";import"./extends-CCbyfPlC.js";import"./index-CWOZsCvP.js";import"./index-CGpOIy-D.js";import"./Combination-C3JclK51.js";import"./floating-ui.react-dom-TmEU260J.js";import"./index-C0-a0Ifs.js";import"./component-Cp-4gzQA.js";import"./index-BHxyLuxg.js";import"./___vite-browser-external_commonjs-proxy-BR6FkCY5.js";import"./MediaGallery-BqlCAul6.js";import"./i18n-DmKDVPrF.js";import"./inherits-DDprkOLY.js";import"./assertThisInitialized-B9jnkVVz.js";import"./setPrototypeOf-DgZC2w_0.js";import"./createClass-CGi6Kyeu.js";import"./Modal-6xt9uHbW.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-Bjbe7hnm.js";import"./RelatedList-BGIwTxBV.js";import"./index.es12-DA6f-WBH.js";import"./peripleo-maplibre.es8-B2O6VWM5.js";import"./index-C9inixJZ.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,me={title:"Components/Core Data/EventDetails",component:r},s=i(()=>e.jsx(r,{id:"1"})),o=i(()=>{const a=R();return e.jsxs("div",{className:"p-3",children:[e.jsx(r,{id:1}),e.jsxs("div",{className:"py-2",children:[e.jsx("h2",{className:"py-1 font-bold text-lg",children:"Event Location"}),e.jsx(m,{children:e.jsx(d,{style:l,children:e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(f,{buffer:10,onLoad:t=>a.fetchRelatedPlaces("1",t)})})})})]}),e.jsxs("div",{className:"py-2",children:[e.jsx("h2",{className:"py-2 font-bold text-lg",children:"Related Resources"}),e.jsx(c,{onClick:t=>x("click")(t),onLoad:t=>a.fetchRelatedItems("1",t),renderDescription:()=>n.date.anytime().toLocaleDateString(),renderHeader:()=>p.sample(["documents","photos","certificates","licenses"]),renderImage:t=>e.jsx("img",{alt:"Test",src:`https://picsum.photos/800/600?random=${t.uuid}`}),sourceType:"items"})]}),e.jsxs("div",{className:"py-2",children:[e.jsx("h2",{className:"py-2 font-bold text-lg",children:"Related People"}),e.jsx(v,{itemsPerRow:2,onLoad:t=>a.fetchRelatedPeople("1",t)})]}),e.jsx("div",{className:"py-2",children:e.jsx("h2",{className:"py-2 font-bold text-lg",children:"Event Images"})}),e.jsx(h,{itemsPerRow:4,onLoad:t=>a.fetchRelatedManifests("1",t)})]})});s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"RelatedRecords"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"withCoreDataContextProvider(() => <EventDetails id='1' />)",...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const EventsService = useEventsService();
  return <div className='p-3'>
      <EventDetails id={1} />
      <div className='py-2'>
        <h2 className='py-1 font-bold text-lg'>
          Event Location
        </h2>
        <Peripleo>
          <Map style={mapStyle}>
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
