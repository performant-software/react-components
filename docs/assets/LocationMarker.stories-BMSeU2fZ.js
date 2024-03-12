import{j as e}from"./jsx-runtime-BTCK_S7S.js";import{m as _,f as L,s as T,k as s,X as l,a as p,i as c,z as d}from"./MapStyles-X53DxvlK.js";import{r as F}from"./index-CBqU2yxZ.js";import"./index-DZGZymok.js";import{M as E}from"./Map-BUuedfPH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B7b_a8-j.js";const C="FeatureCollection",N=[{type:"Feature",properties:{},geometry:{coordinates:[[[.7754102888268619,46.680527155197694],[-.7143321261315805,47.03810834128467],[-.3687402400222197,45.29285985154556],[1.7117022472057783,44.71076017077044],[3.9138327406320172,45.815242131256525],[3.6308350314942572,47.41785065445441],[.7754102888268619,46.680527155197694]]],type:"Polygon"}},{type:"Feature",properties:{},geometry:{coordinates:[[2.7751103745984835,47.98172986149493],[6.829375470262562,48.14587129044554],[6.414900417682219,47.169510642817755],[5.760540227314522,46.41341938732728],[6.390732145726702,45.59058409048566]],type:"LineString"}},{type:"Feature",properties:{},geometry:{coordinates:[-1.0759198798764373,48.04154361939712],type:"Point"}},{type:"Feature",properties:{},geometry:{coordinates:[.790629166637757,48.96345132277722],type:"Point"}},{type:"Feature",properties:{},geometry:{coordinates:[4.3607542958423835,44.63510909496094],type:"Point"}}],q={type:C,features:N},B={type:"circle",paint:{"circle-radius":["interpolate",["linear"],["number",["get","point_count"],1],0,4,10,14],"circle-stroke-width":1,"circle-color":["case",["boolean",["feature-state","hover"],!1],"#3b62ff","#ff623b"],"circle-stroke-color":"#8d260c"}},I={type:"fill",paint:{"fill-color":"#ff623b","fill-opacity":.2}},O={type:"line",paint:{"line-color":"#ff623b","line-opacity":.6}},A=2,u=t=>{const y=_();return F.useEffect(()=>{if(y&&t.data){const M=E.getBoundingBox(t.data,t.buffer);y.fitBounds(M)}},[y,t.buffer,t.data]),e.jsxs(e.Fragment,{children:[t.animate&&e.jsx(L,{data:t.data}),e.jsx(T,{data:t.data,fillStyle:t.fillStyle,strokeStyle:t.strokeStyle,pointStyle:t.pointStyle})]})};u.defaultProps={buffer:A,fillStyle:I,pointStyle:B,strokeStyle:O};const a=u;u.__docgenInfo={description:"This component renders a location marker to be used in a Peripleo context.",methods:[],displayName:"LocationMarkers",props:{animate:{required:!1,flowType:{name:"boolean"},description:"If `true`, the point marker will display with a pulsing animation."},buffer:{required:!1,flowType:{name:"number"},description:"The number of miles to buffer the GeoJSON data.",defaultValue:{value:"2",computed:!1}},data:{required:!0,flowType:{name:"signature",type:"object",raw:"{ [key: string]: any }",signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}}]}},description:"The GeoJSON data representing the location."},fillStyle:{required:!1,flowType:{name:"signature",type:"object",raw:"{ [key: string]: any }",signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}}]}},description:"GeoJSON layer fill style.",defaultValue:{value:`{
  type: 'fill',
  paint: {
    'fill-color': '#ff623b',
    'fill-opacity': 0.2
  }
}`,computed:!1}},pointStyle:{required:!1,flowType:{name:"signature",type:"object",raw:"{ [key: string]: any }",signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}}]}},description:"GeoJSON layer point style.",defaultValue:{value:`{
  type: 'circle',
  paint: {
    'circle-radius': [
      'interpolate',
      ['linear'],
      ['number', ['get', 'point_count'], 1],
      0, 4,
      10, 14
    ],
    'circle-stroke-width': 1,
    'circle-color': [
      'case',
      ['boolean', ['feature-state', 'hover'], false],
      '#3b62ff',
      '#ff623b'
    ],
    'circle-stroke-color': '#8d260c'
  }
}`,computed:!1}},strokeStyle:{required:!1,flowType:{name:"signature",type:"object",raw:"{ [key: string]: any }",signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}}]}},description:"GeoJSON layer stroke style",defaultValue:{value:`{
  type: 'line',
  paint: {
    'line-color': '#ff623b',
    'line-opacity': 0.6
  }
}`,computed:!1}}}};const Y={title:"Components/Geospatial/LocationMarker",component:a},n=()=>e.jsx(s,{children:e.jsxs(l,{style:p,children:[e.jsx(c,{position:"topright",children:e.jsx(d,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(a,{data:{type:"Point",coordinates:[-81.2653727,31.4252249]}})})]})}),o=()=>e.jsx(s,{children:e.jsxs(l,{style:p,children:[e.jsx(c,{position:"topright",children:e.jsx(d,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(a,{animate:!0,data:{type:"Point",coordinates:[-81.2653727,31.4252249]}})})]})}),r=()=>e.jsx(s,{children:e.jsxs(l,{style:p,children:[e.jsx(c,{position:"topright",children:e.jsx(d,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(a,{buffer:10,data:{type:"Point",coordinates:[-81.2653727,31.4252249]}})})]})}),i=()=>e.jsx(s,{children:e.jsxs(l,{style:p,children:[e.jsx(c,{position:"topright",children:e.jsx(d,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(a,{buffer:100,data:q})})]})});n.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"Animation"};r.__docgenInfo={description:"",methods:[],displayName:"Buffer"};i.__docgenInfo={description:"",methods:[],displayName:"MultiplePoints"};var f,m,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`() => <Peripleo>
    <Map style={mapStyle}>
      <Controls position='topright'>
        <Zoom />
      </Controls>
      <div style={{
      width: '100%',
      height: '300px'
    }}>
        <LocationMarkers data={{
        type: 'Point',
        coordinates: [-81.2653727, 31.4252249]
      }} />
      </div>
    </Map>
  </Peripleo>`,...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,x,j;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`() => <Peripleo>
    <Map style={mapStyle}>
      <Controls position='topright'>
        <Zoom />
      </Controls>
      <div style={{
      width: '100%',
      height: '300px'
    }}>
        <LocationMarkers animate data={{
        type: 'Point',
        coordinates: [-81.2653727, 31.4252249]
      }} />
      </div>
    </Map>
  </Peripleo>`,...(j=(x=o.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var S,b,k;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`() => <Peripleo>
    <Map style={mapStyle}>
      <Controls position='topright'>
        <Zoom />
      </Controls>
      <div style={{
      width: '100%',
      height: '300px'
    }}>
        <LocationMarkers buffer={10} data={{
        type: 'Point',
        coordinates: [-81.2653727, 31.4252249]
      }} />
      </div>
    </Map>
  </Peripleo>`,...(k=(b=r.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var P,v,w;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`() => <Peripleo>
    <Map style={mapStyle}>
      <Controls position='topright'>
        <Zoom />
      </Controls>
      <div style={{
      width: '100%',
      height: '300px'
    }}>
        <LocationMarkers buffer={100} data={geometryCollection} />
      </div>
    </Map>
  </Peripleo>`,...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const z=["Default","Animation","Buffer","MultiplePoints"];export{o as Animation,r as Buffer,n as Default,i as MultiplePoints,z as __namedExportsOrder,Y as default};
