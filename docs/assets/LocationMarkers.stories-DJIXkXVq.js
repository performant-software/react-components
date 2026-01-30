import{j as e}from"./iframe-ZimVXjeC.js";import"./peripleo-maplibre.es40-DLgvyBLR.js";import{v as o,t as r}from"./peripleo-maplibre.es19-Byg5FfOt.js";import{L as t}from"./LocationMarkers-CaLrC_Tl.js";import{m as n}from"./MapStyles-bZfNjRqZ.js";import"./peripleo-maplibre.es8-oWcJT2c4.js";import"./Map-DXO4BqQB.js";import"./MapStyles-DKLIG4Qa.js";const m="FeatureCollection",y=[{type:"Feature",properties:{},geometry:{coordinates:[[[.7754102888268619,46.680527155197694],[-.7143321261315805,47.03810834128467],[-.3687402400222197,45.29285985154556],[1.7117022472057783,44.71076017077044],[3.9138327406320172,45.815242131256525],[3.6308350314942572,47.41785065445441],[.7754102888268619,46.680527155197694]]],type:"Polygon"}},{type:"Feature",properties:{},geometry:{coordinates:[[2.7751103745984835,47.98172986149493],[6.829375470262562,48.14587129044554],[6.414900417682219,47.169510642817755],[5.760540227314522,46.41341938732728],[6.390732145726702,45.59058409048566]],type:"LineString"}},{type:"Feature",properties:{},geometry:{coordinates:[-1.0759198798764373,48.04154361939712],type:"Point"}},{type:"Feature",properties:{},geometry:{coordinates:[.790629166637757,48.96345132277722],type:"Point"}},{type:"Feature",properties:{},geometry:{coordinates:[4.3607542958423835,44.63510909496094],type:"Point"}}],h={type:m,features:y},S={title:"Components/Geospatial/LocationMarkers",component:t},a=()=>e.jsx(o,{children:e.jsx(r,{style:n,children:e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(t,{data:{type:"Point",coordinates:[-81.2653727,31.4252249]}})})})}),s=()=>e.jsx(o,{children:e.jsx(r,{style:n,children:e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(t,{animate:!0,data:{type:"Point",coordinates:[-81.2653727,31.4252249]}})})})}),i=()=>e.jsx(o,{children:e.jsx(r,{style:n,children:e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(t,{buffer:10,data:{type:"Point",coordinates:[-81.2653727,31.4252249]}})})})}),p=()=>e.jsx(o,{children:e.jsx(r,{style:n,children:e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(t,{buffer:100,data:h})})})}),d=()=>e.jsx(o,{children:e.jsx(r,{style:n,children:e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(t,{boundingBoxOptions:{animate:!1},data:{type:"Point",coordinates:[-81.2653727,31.4252249]}})})})}),c=()=>e.jsx(o,{children:e.jsx(r,{style:n,children:e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(t,{data:{}})})})}),l=()=>e.jsx(o,{children:e.jsx(r,{style:n,children:e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(t,{data:{test:"123"}})})})});a.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"Animation"};i.__docgenInfo={description:"",methods:[],displayName:"Buffer"};p.__docgenInfo={description:"",methods:[],displayName:"MultiplePoints"};d.__docgenInfo={description:"",methods:[],displayName:"NoZoom"};c.__docgenInfo={description:"",methods:[],displayName:"EmptyDataSet"};l.__docgenInfo={description:"",methods:[],displayName:"InvalidDataSet"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <Peripleo>
    <Map style={mapStyle}>
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
  </Peripleo>`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <Peripleo>
    <Map style={mapStyle}>
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
  </Peripleo>`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <Peripleo>
    <Map style={mapStyle}>
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
  </Peripleo>`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => <Peripleo>
    <Map style={mapStyle}>
      <div style={{
      width: '100%',
      height: '300px'
    }}>
        <LocationMarkers buffer={100} data={geometryCollection} />
      </div>
    </Map>
  </Peripleo>`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => <Peripleo>
    <Map style={mapStyle}>
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
  </Peripleo>`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => <Peripleo>
    <Map style={mapStyle}>
      <div style={{
      width: '100%',
      height: '300px'
    }}>
        <LocationMarkers data={{}} />
      </div>
    </Map>
  </Peripleo>`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <Peripleo>
    <Map style={mapStyle}>
      <div style={{
      width: '100%',
      height: '300px'
    }}>
        <LocationMarkers data={{
        test: '123'
      }} />
      </div>
    </Map>
  </Peripleo>`,...l.parameters?.docs?.source}}};const _=["Default","Animation","Buffer","MultiplePoints","NoZoom","EmptyDataSet","InvalidDataSet"];export{s as Animation,i as Buffer,a as Default,c as EmptyDataSet,l as InvalidDataSet,p as MultiplePoints,d as NoZoom,_ as __namedExportsOrder,S as default};
