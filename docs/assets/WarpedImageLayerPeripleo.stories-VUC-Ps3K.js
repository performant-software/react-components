import{j as e}from"./jsx-runtime-D9TvR9R2.js";import{f as m,k as d,X as c,i as y,z as f}from"./peripleo-maplibre.es11-BG7NFGMs.js";import{r as u}from"./index-C0dDX-lL.js";import"./index-DOYXiIEK.js";import{E as g}from"./Environment-CB6gPeJ7.js";import{M as a}from"./Map-pCnSJ2_s.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-default-C_maRo4o.js";import"./index-DnNB6xa5.js";const p=t=>{const o=m();return u.useEffect(()=>{if(o)return a.addGeoreferenceLayer(o,t.id,{manifest:t.manifest,opacity:t.opacity,url:t.url}),()=>a.removeLayer(o,t.id)},[o]),null};p.defaultProps={opacity:.5};const l=p,_={title:"Components/Geospatial/WarpedImageLayerPeripleo",component:l},h=g.getMapTilerKey(),x=`https://api.maptiler.com/maps/basic-v2/style.json?key=${h}`,r=()=>e.jsx(d,{children:e.jsxs(c,{defaultBounds:[[-74.123501,40.679546],[-73.796486,40.805444]],style:x,children:[e.jsx(y,{position:"topright",children:e.jsx(f,{})}),e.jsx("div",{style:{width:"100%",height:"500px"},children:e.jsx(l,{id:"nyc",url:"https://annotations.allmaps.org/images/d180902cb93d5bf2"})})]})});r.__docgenInfo={description:"",methods:[],displayName:"Default"};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => <Peripleo>
    <PeripleoMap defaultBounds={[[-74.123501, 40.679546], [-73.796486, 40.805444]]} style={mapStyle}>
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
  </Peripleo>`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const C=["Default"];export{r as Default,C as __namedExportsOrder,_ as default};
