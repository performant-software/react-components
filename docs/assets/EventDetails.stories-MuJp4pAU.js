import{j as e}from"./iframe-DlkFaX8z.js";import{f as n}from"./index-DIguL7K7.js";import{k as m,X as d,i as p,z as l}from"./peripleo-maplibre.es11-ZvwaXZmy.js";import{_ as c}from"./index-default-B8-H6N8J.js";import{E as a}from"./EventDetails-Db70Xpv8.js";import{m as h}from"./MapStyles-Bj1kK3Lo.js";import{R as v}from"./RelatedSources-Buhs62Ug.js";import{R as f}from"./RelatedMedia-Bd0BUwrx.js";import{R as x}from"./RelatedPeople-D352cLld.js";import{R}from"./RelatedPlacesLayer-CjILwxX-.js";import{w as i}from"./CoreDataContextProvider-C_YEW-W4.js";import{u}from"./CoreData-CqOjmNLI.js";import"./Event-DDEO6mfd.js";import"./index.es28-DMkb6T92.js";import"./LoadAnimation-COkIWTRL.js";import"./index-D-D4leX7.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";import"./toPropertyKey-BdisF6oo.js";import"./index-CcfNg_uN.js";import"./extends-CCbyfPlC.js";import"./index-Djt8m_Cq.js";import"./index-CbTG-TL8.js";import"./Combination-XOPwsJ8Q.js";import"./floating-ui.react-dom-D5slb_ts.js";import"./index-CsDBjn8_.js";import"./component-BzZlFKyt.js";import"./index-CQog8FBz.js";import"./___vite-browser-external_commonjs-proxy-BbIkwKXu.js";import"./MediaGallery-DfwCTFx0.js";import"./i18n-DtnBOa9t.js";import"./inherits-DDprkOLY.js";import"./assertThisInitialized-B9jnkVVz.js";import"./setPrototypeOf-DgZC2w_0.js";import"./createClass-CGi6Kyeu.js";import"./Modal-DXPUPAwW.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-D53UkhmV.js";import"./RelatedList-BsCbousP.js";import"./index.es11-DuvFe-ZY.js";import"./index-C9inixJZ.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,me={title:"Components/Core Data/EventDetails",component:a},s=i(()=>e.jsx(a,{id:"1"})),o=i(()=>{const r=u();return e.jsxs("div",{className:"p-3",children:[e.jsx(a,{id:1}),e.jsxs("div",{className:"py-2",children:[e.jsx("h2",{className:"py-1 font-bold text-lg",children:"Event Location"}),e.jsx(m,{children:e.jsxs(d,{style:h,children:[e.jsx(p,{position:"topright",children:e.jsx(l,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(R,{buffer:10,onLoad:t=>r.fetchRelatedPlaces("1",t)})})]})})]}),e.jsxs("div",{className:"py-2",children:[e.jsx("h2",{className:"py-2 font-bold text-lg",children:"Related Resources"}),e.jsx(v,{onClick:t=>y("click")(t),onLoad:t=>r.fetchRelatedItems("1",t),renderDescription:()=>n.date.anytime().toLocaleDateString(),renderHeader:()=>c.sample(["documents","photos","certificates","licenses"]),renderImage:t=>e.jsx("img",{alt:"Test",src:`https://picsum.photos/800/600?random=${t.uuid}`}),sourceType:"items"})]}),e.jsxs("div",{className:"py-2",children:[e.jsx("h2",{className:"py-2 font-bold text-lg",children:"Related People"}),e.jsx(x,{itemsPerRow:2,onLoad:t=>r.fetchRelatedPeople("1",t)})]}),e.jsx("div",{className:"py-2",children:e.jsx("h2",{className:"py-2 font-bold text-lg",children:"Event Images"})}),e.jsx(f,{itemsPerRow:4,onLoad:t=>r.fetchRelatedManifests("1",t)})]})});s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"RelatedRecords"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"withCoreDataContextProvider(() => <EventDetails id='1' />)",...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`withCoreDataContextProvider(() => {
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
