import{j as e}from"./iframe-XscsSow5.js";import{f as n}from"./index-DIguL7K7.js";import"./peripleo-maplibre32.es-B66BrS11.js";import{v as m,t as d}from"./peripleo-maplibre19.es-DBTX0DHl.js";import{_ as p}from"./index-default-B8-H6N8J.js";import{E as r}from"./EventDetails-CybcOrc-.js";import{m as l}from"./MapStyles-bZfNjRqZ.js";import{R as c}from"./RelatedSources-C2ThpVWM.js";import{R as h}from"./RelatedMedia-DSWgD7LM.js";import{R as v}from"./RelatedPeople-CuRjuoI2.js";import{R as f}from"./RelatedPlacesLayer-DYTFHjlC.js";import{w as i}from"./CoreDataContextProvider-DIa4jv3b.js";import{u as R}from"./CoreData-CJZ-Uas5.js";import"./Event-DpRVg3hZ.js";import"./index.es28-WoOXI_HP.js";import"./LoadAnimation-CRpOJ1zy.js";import"./index-CP5qPj64.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";import"./toPropertyKey-BdisF6oo.js";import"./index-JQ59JKs4.js";import"./extends-CCbyfPlC.js";import"./index-BXPhahj3.js";import"./index-ofXOKWfk.js";import"./Combination-Ca9vzral.js";import"./floating-ui.react-dom-DcxP80ns.js";import"./index-CpgI2bEa.js";import"./component--ia46eDJ.js";import"./index-DHiCdaFN.js";import"./___vite-browser-external_commonjs-proxy-DSfpn10s.js";import"./MediaGallery-CMREHbOg.js";import"./i18n-BmGn6AND.js";import"./classCallCheck-MFKM5G8b.js";import"./createClass-CGi6Kyeu.js";import"./inherits-C6T40QWx.js";import"./assertThisInitialized-B9jnkVVz.js";import"./setPrototypeOf-DgZC2w_0.js";import"./Modal-CORh4jtK.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-BPivEppF.js";import"./RelatedList-C25CdSsa.js";import"./index.es12-DsgiW3aS.js";import"./peripleo-maplibre8.es-Dp9X6MBm.js";import"./index-Cwsko9Iz.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,de={title:"Components/Core Data/EventDetails",component:r},s=i(()=>e.jsx(r,{id:"1"})),o=i(()=>{const a=R();return e.jsxs("div",{className:"p-3",children:[e.jsx(r,{id:1}),e.jsxs("div",{className:"py-2",children:[e.jsx("h2",{className:"py-1 font-bold text-lg",children:"Event Location"}),e.jsx(m,{children:e.jsx(d,{style:l,children:e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(f,{buffer:10,onLoad:t=>a.fetchRelatedPlaces("1",t)})})})})]}),e.jsxs("div",{className:"py-2",children:[e.jsx("h2",{className:"py-2 font-bold text-lg",children:"Related Resources"}),e.jsx(c,{onClick:t=>x("click")(t),onLoad:t=>a.fetchRelatedItems("1",t),renderDescription:()=>n.date.anytime().toLocaleDateString(),renderHeader:()=>p.sample(["documents","photos","certificates","licenses"]),renderImage:t=>e.jsx("img",{alt:"Test",src:`https://picsum.photos/800/600?random=${t.uuid}`}),sourceType:"items"})]}),e.jsxs("div",{className:"py-2",children:[e.jsx("h2",{className:"py-2 font-bold text-lg",children:"Related People"}),e.jsx(v,{itemsPerRow:2,onLoad:t=>a.fetchRelatedPeople("1",t)})]}),e.jsx("div",{className:"py-2",children:e.jsx("h2",{className:"py-2 font-bold text-lg",children:"Event Images"})}),e.jsx(h,{itemsPerRow:4,onLoad:t=>a.fetchRelatedManifests("1",t)})]})});s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"RelatedRecords"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"withCoreDataContextProvider(() => <EventDetails id='1' />)",...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`withCoreDataContextProvider(() => {
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
})`,...o.parameters?.docs?.source}}};const pe=["Default","RelatedRecords"];export{s as Default,o as RelatedRecords,pe as __namedExportsOrder,de as default};
