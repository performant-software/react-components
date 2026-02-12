import{r as i,j as a}from"./iframe-Bo-cahqR.js";import{s as n}from"./peripleo-maplibre.es40-DsRCT4cu.js";import{v as p,t as l}from"./peripleo-maplibre.es19-B0CyOvpG.js";import{E as d}from"./Environment-CssSMv5W.js";import{M as o}from"./Map-DxGmgzAT.js";const s=e=>{const r=n();return i.useEffect(()=>{if(r)return o.addGeoreferenceLayer(r,e.id,{manifest:e.manifest,opacity:e.opacity,url:e.url}),()=>o.removeLayer(r,e.id)},[r]),null};s.defaultProps={opacity:.5};const x={title:"Components/Geospatial/WarpedImageLayerPeripleo",component:s},m=d.getMapTilerKey(),c=`https://api.maptiler.com/maps/basic-v2/style.json?key=${m}`,t=()=>a.jsx(p,{children:a.jsx(l,{canvasContextAttributes:{preserveDrawingBuffer:!0},defaultBounds:[[-74.123501,40.679546],[-73.796486,40.805444]],style:c,children:a.jsx("div",{style:{width:"100%",height:"500px"},children:a.jsx(s,{id:"nyc",url:"https://annotations.allmaps.org/images/d180902cb93d5bf2"})})})});t.__docgenInfo={description:"",methods:[],displayName:"Default"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <Peripleo>
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
  </Peripleo>`,...t.parameters?.docs?.source}}};const v=["Default"];export{t as Default,v as __namedExportsOrder,x as default};
