import{r as s,j as a}from"./iframe-9irgAvQM.js";import{s as n}from"./peripleo-maplibre.es40-Dc1uVNNs.js";import{v as p,t as m}from"./peripleo-maplibre.es19-ldxvt_1r.js";import{E as l}from"./Environment-CssSMv5W.js";import{M as i}from"./Map-BAC3YN1e.js";import"./_getPrototype-dFVwFHqx.js";import"./_arrayEach-DpGxo2Of.js";import"./_assignValue-wlBxhqFj.js";import"./_baseAssignValue-yJv1-bft.js";import"./throttle-iWzVlAVW.js";import"./toNumber-DIkYOhwr.js";import"./isEqual-mHuJTF3G.js";import"./index-Cwsko9Iz.js";const o=e=>{const r=n();return s.useEffect(()=>{if(r)return i.addGeoreferenceLayer(r,e.id,{manifest:e.manifest,opacity:e.opacity,url:e.url}),()=>i.removeLayer(r,e.id)},[r]),null};o.defaultProps={opacity:.5};const I={title:"Components/Geospatial/WarpedImageLayerPeripleo",component:o},d=l.getMapTilerKey(),c=`https://api.maptiler.com/maps/basic-v2/style.json?key=${d}`,t=()=>a.jsx(p,{children:a.jsx(m,{canvasContextAttributes:{preserveDrawingBuffer:!0},defaultBounds:[[-74.123501,40.679546],[-73.796486,40.805444]],style:c,children:a.jsx("div",{style:{width:"100%",height:"500px"},children:a.jsx(o,{id:"nyc",url:"https://annotations.allmaps.org/images/d180902cb93d5bf2"})})})});t.__docgenInfo={description:"",methods:[],displayName:"Default"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <Peripleo>
    <PeripleoMap canvasContextAttributes={{
    preserveDrawingBuffer: true
  }} defaultBounds={[[-74.123501, 40.679546], [-73.796486, 40.805444]]} style={mapStyle}>
      <div style={{
      width: '100%',
      height: '500px'
    }}>
        <WarpedImageLayerPeripleo id='nyc' url='https://annotations.allmaps.org/images/d180902cb93d5bf2' />
      </div>
    </PeripleoMap>
  </Peripleo>`,...t.parameters?.docs?.source}}};const M=["Default"];export{t as Default,M as __namedExportsOrder,I as default};
