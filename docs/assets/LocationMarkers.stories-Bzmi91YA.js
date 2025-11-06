import{j as e}from"./iframe-B8scVUHo.js";import{k as o,X as n,i as s,z as i}from"./peripleo-maplibre.es11-Mw4s7HRa.js";import{L as t}from"./LocationMarkers-CJ-bfWxC.js";import{m as r}from"./MapStyles-D1IlaOs2.js";import"./Map-oGDIkHed.js";import"./MapStyles-DKLIG4Qa.js";const y="FeatureCollection",x=[{type:"Feature",properties:{},geometry:{coordinates:[[[.7754102888268619,46.680527155197694],[-.7143321261315805,47.03810834128467],[-.3687402400222197,45.29285985154556],[1.7117022472057783,44.71076017077044],[3.9138327406320172,45.815242131256525],[3.6308350314942572,47.41785065445441],[.7754102888268619,46.680527155197694]]],type:"Polygon"}},{type:"Feature",properties:{},geometry:{coordinates:[[2.7751103745984835,47.98172986149493],[6.829375470262562,48.14587129044554],[6.414900417682219,47.169510642817755],[5.760540227314522,46.41341938732728],[6.390732145726702,45.59058409048566]],type:"LineString"}},{type:"Feature",properties:{},geometry:{coordinates:[-1.0759198798764373,48.04154361939712],type:"Point"}},{type:"Feature",properties:{},geometry:{coordinates:[.790629166637757,48.96345132277722],type:"Point"}},{type:"Feature",properties:{},geometry:{coordinates:[4.3607542958423835,44.63510909496094],type:"Point"}}],g={type:y,features:x},S={title:"Components/Geospatial/LocationMarkers",component:t},a=()=>e.jsx(o,{children:e.jsxs(n,{style:r,children:[e.jsx(s,{position:"topright",children:e.jsx(i,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(t,{data:{type:"Point",coordinates:[-81.2653727,31.4252249]}})})]})}),p=()=>e.jsx(o,{children:e.jsxs(n,{style:r,children:[e.jsx(s,{position:"topright",children:e.jsx(i,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(t,{animate:!0,data:{type:"Point",coordinates:[-81.2653727,31.4252249]}})})]})}),d=()=>e.jsx(o,{children:e.jsxs(n,{style:r,children:[e.jsx(s,{position:"topright",children:e.jsx(i,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(t,{buffer:10,data:{type:"Point",coordinates:[-81.2653727,31.4252249]}})})]})}),l=()=>e.jsx(o,{children:e.jsxs(n,{style:r,children:[e.jsx(s,{position:"topright",children:e.jsx(i,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(t,{buffer:100,data:g})})]})}),c=()=>e.jsx(o,{children:e.jsxs(n,{style:r,children:[e.jsx(s,{position:"topright",children:e.jsx(i,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(t,{boundingBoxOptions:{animate:!1},data:{type:"Point",coordinates:[-81.2653727,31.4252249]}})})]})}),m=()=>e.jsx(o,{children:e.jsxs(n,{style:r,children:[e.jsx(s,{position:"topright",children:e.jsx(i,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(t,{data:{}})})]})}),h=()=>e.jsx(o,{children:e.jsxs(n,{style:r,children:[e.jsx(s,{position:"topright",children:e.jsx(i,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(t,{data:{test:"123"}})})]})});a.__docgenInfo={description:"",methods:[],displayName:"Default"};p.__docgenInfo={description:"",methods:[],displayName:"Animation"};d.__docgenInfo={description:"",methods:[],displayName:"Buffer"};l.__docgenInfo={description:"",methods:[],displayName:"MultiplePoints"};c.__docgenInfo={description:"",methods:[],displayName:"NoZoom"};m.__docgenInfo={description:"",methods:[],displayName:"EmptyDataSet"};h.__docgenInfo={description:"",methods:[],displayName:"InvalidDataSet"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <Peripleo>
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
  </Peripleo>`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => <Peripleo>
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
  </Peripleo>`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => <Peripleo>
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
  </Peripleo>`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <Peripleo>
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
  </Peripleo>`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => <Peripleo>
    <Map style={mapStyle}>
      <Controls position='topright'>
        <Zoom />
      </Controls>
      <div style={{
      width: '100%',
      height: '300px'
    }}>
        <LocationMarkers boundingBoxOptions={{
        animate: false
      }} data={{
        type: 'Point',
        coordinates: [-81.2653727, 31.4252249]
      }} />
      </div>
    </Map>
  </Peripleo>`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <Peripleo>
    <Map style={mapStyle}>
      <Controls position='topright'>
        <Zoom />
      </Controls>
      <div style={{
      width: '100%',
      height: '300px'
    }}>
        <LocationMarkers data={{}} />
      </div>
    </Map>
  </Peripleo>`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => <Peripleo>
    <Map style={mapStyle}>
      <Controls position='topright'>
        <Zoom />
      </Controls>
      <div style={{
      width: '100%',
      height: '300px'
    }}>
        <LocationMarkers data={{
        test: '123'
      }} />
      </div>
    </Map>
  </Peripleo>`,...h.parameters?.docs?.source}}};const C=["Default","Animation","Buffer","MultiplePoints","NoZoom","EmptyDataSet","InvalidDataSet"];export{p as Animation,d as Buffer,a as Default,m as EmptyDataSet,h as InvalidDataSet,l as MultiplePoints,c as NoZoom,C as __namedExportsOrder,S as default};
