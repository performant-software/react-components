import{j as e}from"./iframe-ColLpCq0.js";import{f as n}from"./index-DIguL7K7.js";import"./peripleo-maplibre.es40-2-CoHI0H.js";import{v as m,t as d}from"./peripleo-maplibre.es19-8dxmKvFj.js";import{_ as p}from"./index-default-B8-H6N8J.js";import{E as r}from"./EventDetails-CCo_ugTV.js";import{m as l}from"./MapStyles-bZfNjRqZ.js";import{R as c}from"./RelatedSources-rEGFNgJG.js";import{R as h}from"./RelatedMedia-_VWP0A4F.js";import{R as v}from"./RelatedPeople-JV_l75HS.js";import{R as f}from"./RelatedPlacesLayer-P4AtGSKp.js";import{w as i}from"./CoreDataContextProvider-PuREYg-U.js";import{u as R}from"./CoreData-liSxPHgl.js";import"./Event-Bpz2BKex.js";import"./index.es28-aRnl8fXs.js";import"./LoadAnimation-CdjMAwQA.js";import"./index-DWxwAqj9.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";import"./toPropertyKey-BdisF6oo.js";import"./index-D0syReJD.js";import"./extends-CCbyfPlC.js";import"./index-DnsdB0p4.js";import"./index-BpfNNTqP.js";import"./Combination-BMu51CP5.js";import"./floating-ui.react-dom-CUyIALxH.js";import"./index-2plBd9Is.js";import"./component-Dmpcv2Ge.js";import"./index-smI_rk_I.js";import"./___vite-browser-external_commonjs-proxy-Dd_EVvW1.js";import"./MediaGallery-BJAxVlX_.js";import"./i18n-DmKDVPrF.js";import"./inherits-DDprkOLY.js";import"./assertThisInitialized-B9jnkVVz.js";import"./setPrototypeOf-DgZC2w_0.js";import"./createClass-CGi6Kyeu.js";import"./Modal-C7-L2_z9.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-IP349W68.js";import"./RelatedList-fxFZG6xk.js";import"./index.es12-Baj7QraG.js";import"./peripleo-maplibre.es8-zMCrxTYg.js";import"./index-Cwsko9Iz.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,me={title:"Components/Core Data/EventDetails",component:r},s=i(()=>e.jsx(r,{id:"1"})),o=i(()=>{const a=R();return e.jsxs("div",{className:"p-3",children:[e.jsx(r,{id:1}),e.jsxs("div",{className:"py-2",children:[e.jsx("h2",{className:"py-1 font-bold text-lg",children:"Event Location"}),e.jsx(m,{children:e.jsx(d,{style:l,children:e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(f,{buffer:10,onLoad:t=>a.fetchRelatedPlaces("1",t)})})})})]}),e.jsxs("div",{className:"py-2",children:[e.jsx("h2",{className:"py-2 font-bold text-lg",children:"Related Resources"}),e.jsx(c,{onClick:t=>x("click")(t),onLoad:t=>a.fetchRelatedItems("1",t),renderDescription:()=>n.date.anytime().toLocaleDateString(),renderHeader:()=>p.sample(["documents","photos","certificates","licenses"]),renderImage:t=>e.jsx("img",{alt:"Test",src:`https://picsum.photos/800/600?random=${t.uuid}`}),sourceType:"items"})]}),e.jsxs("div",{className:"py-2",children:[e.jsx("h2",{className:"py-2 font-bold text-lg",children:"Related People"}),e.jsx(v,{itemsPerRow:2,onLoad:t=>a.fetchRelatedPeople("1",t)})]}),e.jsx("div",{className:"py-2",children:e.jsx("h2",{className:"py-2 font-bold text-lg",children:"Event Images"})}),e.jsx(h,{itemsPerRow:4,onLoad:t=>a.fetchRelatedManifests("1",t)})]})});s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"RelatedRecords"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"withCoreDataContextProvider(() => <EventDetails id='1' />)",...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`withCoreDataContextProvider(() => {
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
