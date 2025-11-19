import{r as t,j as e}from"./iframe-CzTKQtwy.js";import{k as c,X as d,i as m,z as h}from"./peripleo-maplibre.es11-bWFdnlby.js";import{_ as i}from"./index-default-B8-H6N8J.js";import{m as u}from"./MapStyles-BuG8cCHZ.js";import{x as M}from"./index.es11-C2Qr1PtC.js";import{f as v,a as C}from"./index-C9inixJZ.js";const l=({urls:s,..._})=>{const[f,P]=t.useState([]),x=t.useMemo(()=>v(f),[f]),g=t.useCallback(()=>i.map(s,p=>fetch(p).then(r=>r.json()).then(r=>r.place)),[s]),y=t.useCallback(p=>i.map(p,r=>P(j=>r.place_geometry?[...j,C(r.place_geometry.geometry_json,r)]:j)),[]);return t.useEffect(()=>{Promise.all(g()).then(y)},[g,y]),i.isEmpty(x?.features)?null:e.jsx(M,{..._,data:x})};l.__docgenInfo={description:"This component renders a map marker for a given Core Data Place record.",methods:[],displayName:"PlaceMarkers",props:{urls:{required:!0,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:"The URL of the Core Data place record."}}};const L={title:"Components/Core Data/PlaceMarkers",component:l},o=()=>e.jsx(c,{children:e.jsxs(d,{style:u,children:[e.jsx(m,{position:"topright",children:e.jsx(h,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(l,{urls:["/core_data/public/v1/places/1"]})})]})}),a=()=>e.jsx(c,{children:e.jsxs(d,{style:u,children:[e.jsx(m,{position:"topright",children:e.jsx(h,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(l,{urls:i.map(i.times(10,s=>s),s=>`/core_data/public/v1/places/${s}`)})})]})}),n=()=>e.jsx(c,{children:e.jsxs(d,{style:u,children:[e.jsx(m,{position:"topright",children:e.jsx(h,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(l,{urls:["/core_data/public/v1/places/1"],buffer:20})})]})});o.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"MultiplePlaces"};n.__docgenInfo={description:"",methods:[],displayName:"LargerBuffer"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <Peripleo>
    <Map style={mapStyle}>
      <Controls position='topright'>
        <Zoom />
      </Controls>
      <div style={{
      width: '100%',
      height: '300px'
    }}>
        <PlaceMarkers urls={['/core_data/public/v1/places/1']} />
      </div>
    </Map>
  </Peripleo>`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <Peripleo>
    <Map style={mapStyle}>
      <Controls position='topright'>
        <Zoom />
      </Controls>
      <div style={{
      width: '100%',
      height: '300px'
    }}>
        <PlaceMarkers urls={_.map(_.times(10, index => index), index => \`/core_data/public/v1/places/\${index}\`)} />
      </div>
    </Map>
  </Peripleo>`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <Peripleo>
    <Map style={mapStyle}>
      <Controls position='topright'>
        <Zoom />
      </Controls>
      <div style={{
      width: '100%',
      height: '300px'
    }}>
        <PlaceMarkers urls={['/core_data/public/v1/places/1']} buffer={20} />
      </div>
    </Map>
  </Peripleo>`,...n.parameters?.docs?.source}}};const I=["Default","MultiplePlaces","LargerBuffer"];export{o as Default,n as LargerBuffer,a as MultiplePlaces,I as __namedExportsOrder,L as default};
