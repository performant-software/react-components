import{j as e}from"./jsx-runtime-BTCK_S7S.js";import{m as x,f as k,s as S,k as u,X as y,a as m,i as h,z as g}from"./MapStyles-X53DxvlK.js";import{r as j}from"./index-CBqU2yxZ.js";import"./index-DZGZymok.js";import{M as _}from"./Map-B-oiJBWx.js";import"./_commonjsHelpers-BosuxZz1.js";const T={type:"circle",paint:{"circle-radius":["interpolate",["linear"],["number",["get","point_count"],1],0,4,10,14],"circle-stroke-width":1,"circle-color":["case",["boolean",["feature-state","hover"],!1],"#3b62ff","#ff623b"],"circle-stroke-color":"#8d260c"}},v={type:"fill",paint:{"fill-color":"#ff623b","fill-opacity":.2}},L={type:"line",paint:{"line-color":"#ff623b","line-opacity":.6}},w=2,a=t=>{const o=x();return j.useEffect(()=>{if(o&&t.data){const b=_.getBoundingBox(t.data,t.buffer);o.fitBounds(b)}},[o,t.buffer,t.data]),e.jsxs(e.Fragment,{children:[e.jsx(k,{id:"current",data:t.data}),e.jsx(S,{id:"current",data:t.data,fillStyle:t.fillStyle,strokeStyle:t.strokeStyle,pointStyle:t.pointStyle})]})};a.defaultProps={buffer:w,fillStyle:v,pointStyle:T,strokeStyle:L};const i=a;a.__docgenInfo={description:"This component renders a location marker to be used in a Peripleo context.",methods:[],displayName:"LocationMarker",props:{buffer:{required:!1,flowType:{name:"number"},description:"The number of miles to buffer the GeoJSON data.",defaultValue:{value:"2",computed:!1}},data:{required:!0,flowType:{name:"signature",type:"object",raw:"{ [key: string]: any }",signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}}]}},description:"The GeoJSON data representing the location."},fillStyle:{required:!1,flowType:{name:"signature",type:"object",raw:"{ [key: string]: any }",signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}}]}},description:"GeoJSON layer fill style.",defaultValue:{value:`{
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
}`,computed:!1}}}};const F={title:"Components/Geospatial/LocationMarker",component:i},n=()=>e.jsx(u,{children:e.jsxs(y,{style:m,children:[e.jsx(h,{position:"topright",children:e.jsx(g,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(i,{data:{type:"Point",coordinates:[-81.2653727,31.4252249]}})})]})}),r=()=>e.jsx(u,{children:e.jsxs(y,{style:m,children:[e.jsx(h,{position:"topright",children:e.jsx(g,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(i,{buffer:10,data:{type:"Point",coordinates:[-81.2653727,31.4252249]}})})]})});n.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"Buffer"};var l,s,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`() => <Peripleo>
    <Map style={mapStyle}>
      <Controls position='topright'>
        <Zoom />
      </Controls>
      <div style={{
      width: '100%',
      height: '300px'
    }}>
        <LocationMarker data={{
        type: 'Point',
        coordinates: [-81.2653727, 31.4252249]
      }} />
      </div>
    </Map>
  </Peripleo>`,...(c=(s=n.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var p,d,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => <Peripleo>
    <Map style={mapStyle}>
      <Controls position='topright'>
        <Zoom />
      </Controls>
      <div style={{
      width: '100%',
      height: '300px'
    }}>
        <LocationMarker buffer={10} data={{
        type: 'Point',
        coordinates: [-81.2653727, 31.4252249]
      }} />
      </div>
    </Map>
  </Peripleo>`,...(f=(d=r.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const O=["Default","Buffer"];export{r as Buffer,n as Default,O as __namedExportsOrder,F as default};
