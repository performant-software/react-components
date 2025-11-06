import{r as n,j as e}from"./iframe-B8scVUHo.js";import{f as i,k as p,X as l,i as d,z as m}from"./peripleo-maplibre.es11-Mw4s7HRa.js";import{E as c}from"./Environment-CssSMv5W.js";import{M as s}from"./Map-oGDIkHed.js";const o=t=>{const a=i();return n.useEffect(()=>{if(a)return s.addGeoreferenceLayer(a,t.id,{manifest:t.manifest,opacity:t.opacity,url:t.url}),()=>s.removeLayer(a,t.id)},[a]),null};o.defaultProps={opacity:.5};const v={title:"Components/Geospatial/WarpedImageLayerPeripleo",component:o},u=c.getMapTilerKey(),f=`https://api.maptiler.com/maps/basic-v2/style.json?key=${u}`,r=()=>e.jsx(p,{children:e.jsxs(l,{canvasContextAttributes:{preserveDrawingBuffer:!0},defaultBounds:[[-74.123501,40.679546],[-73.796486,40.805444]],style:f,children:[e.jsx(d,{position:"topright",children:e.jsx(m,{})}),e.jsx("div",{style:{width:"100%",height:"500px"},children:e.jsx(o,{id:"nyc",url:"https://annotations.allmaps.org/images/d180902cb93d5bf2"})})]})});r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <Peripleo>
    <PeripleoMap canvasContextAttributes={{
    preserveDrawingBuffer: true
  }} defaultBounds={[[-74.123501, 40.679546], [-73.796486, 40.805444]]} style={mapStyle}>
      <Controls position='topright'>
        <Zoom />
      </Controls>
      <div style={{
      width: '100%',
      height: '500px'
    }}>
        <WarpedImageLayerPeripleo id='nyc' url='https://annotations.allmaps.org/images/d180902cb93d5bf2' />
      </div>
    </PeripleoMap>
  </Peripleo>`,...r.parameters?.docs?.source}}};const j=["Default"];export{r as Default,j as __namedExportsOrder,v as default};
