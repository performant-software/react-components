import{j as e}from"./jsx-runtime-D9TvR9R2.js";import{f as h}from"./index-xJp9Kd2E.js";import{k as v,X as f,i as x,z as R}from"./peripleo-maplibre.es11-L3SiAA6_.js";import"./index-C0dDX-lL.js";import"./index-DOYXiIEK.js";import{a as u}from"./chunk-WFFRPTHA-B2vgThZf.js";import{_ as y}from"./index-default-C_maRo4o.js";import{E as a}from"./EventDetails-BWoU7fQL.js";import{m as g}from"./MapStyles-Lj7OshH9.js";import{R as j}from"./RelatedSources-1SYVmnCm.js";import{R as E}from"./RelatedMedia-BPuLPxYL.js";import{R as N}from"./RelatedPeople-jM_nJjqZ.js";import{R as P}from"./RelatedPlacesLayer-D_l70eVJ.js";import{w as c}from"./CoreDataContextProvider-Btcnl27g.js";import{u as D}from"./CoreData-37WkoVSV.js";import"./_commonjsHelpers-BosuxZz1.js";import"./preview-errors-CzpZmerH.js";import"./index-CKJfshIT.js";import"./v4-D8aEg3BZ.js";import"./Event-DnTaW4p_.js";import"./index.es34-BiuytAhh.js";import"./iframe-DFbfuCSq.js";import"../sb-preview/runtime.js";import"./LoadAnimation-b0qjd8WL.js";import"./index-DNWZlnwl.js";import"./redux-CpmcZR8k.js";import"./objectSpread2-Cl-ctlOG.js";import"./defineProperty-DcNpp85p.js";import"./toPropertyKey-BcUJYDQU.js";import"./index-CMZE9jPC.js";import"./extends-CCbyfPlC.js";import"./index-CIyLsbPd.js";import"./index-BmSdlTVd.js";import"./Combination-Cv237ggT.js";import"./floating-ui.react-dom-BUm7GwT3.js";import"./index-BqvWSUer.js";import"./component-Cj9xgufj.js";import"./index-DwxJ7BsK.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./MediaGallery-DXrYT2GU.js";import"./i18n-DBs6I0Fj.js";import"./i18next-CwS9wMM1.js";import"./inherits-CWPG5jll.js";import"./assertThisInitialized-B9jnkVVz.js";import"./setPrototypeOf-DgZC2w_0.js";import"./createClass-CV9nCQMI.js";import"./getPrototypeOf-BYVhAdwF.js";import"./Modal-DrRwqWzL.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-Cly0WHBx.js";import"./RelatedList-CXViI6JL.js";import"./index.es11-Dm7Qqixk.js";import"./index-DnNB6xa5.js";const De={title:"Components/Core Data/EventDetails",component:a},o=c(()=>e.jsx(a,{id:"1"})),s=c(()=>{const r=D();return e.jsxs("div",{className:"p-3",children:[e.jsx(a,{id:1}),e.jsxs("div",{className:"py-2",children:[e.jsx("h2",{className:"py-1 font-bold text-lg",children:"Event Location"}),e.jsx(v,{children:e.jsxs(f,{style:g,children:[e.jsx(x,{position:"topright",children:e.jsx(R,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(P,{buffer:10,onLoad:t=>r.fetchRelatedPlaces("1",t)})})]})})]}),e.jsxs("div",{className:"py-2",children:[e.jsx("h2",{className:"py-2 font-bold text-lg",children:"Related Resources"}),e.jsx(j,{onClick:t=>u("click")(t),onLoad:t=>r.fetchRelatedItems("1",t),renderDescription:()=>h.date.anytime().toLocaleDateString(),renderHeader:()=>y.sample(["documents","photos","certificates","licenses"]),renderImage:t=>e.jsx("img",{alt:"Test",src:`https://picsum.photos/800/600?random=${t.uuid}`}),sourceType:"items"})]}),e.jsxs("div",{className:"py-2",children:[e.jsx("h2",{className:"py-2 font-bold text-lg",children:"Related People"}),e.jsx(N,{itemsPerRow:2,onLoad:t=>r.fetchRelatedPeople("1",t)})]}),e.jsx("div",{className:"py-2",children:e.jsx("h2",{className:"py-2 font-bold text-lg",children:"Event Images"})}),e.jsx(E,{itemsPerRow:4,onLoad:t=>r.fetchRelatedManifests("1",t)})]})});o.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"RelatedRecords"};var i,n,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"withCoreDataContextProvider(() => <EventDetails id='1' />)",...(m=(n=o.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var p,d,l;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`withCoreDataContextProvider(() => {
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
})`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const Se=["Default","RelatedRecords"];export{o as Default,s as RelatedRecords,Se as __namedExportsOrder,De as default};
