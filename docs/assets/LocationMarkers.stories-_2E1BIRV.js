import{j as e}from"./jsx-runtime-D9TvR9R2.js";import{k as o,X as n,i,z as s}from"./peripleo-maplibre.es11-BG7NFGMs.js";import"./index-C0dDX-lL.js";import"./index-DOYXiIEK.js";import{L as t}from"./LocationMarkers-C61V4nzm.js";import{m as r}from"./MapStyles-CY04RcTN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-default-C_maRo4o.js";import"./MapStyles-DKLIG4Qa.js";import"./Map-pCnSJ2_s.js";import"./index-DnNB6xa5.js";const B="FeatureCollection",E=[{type:"Feature",properties:{},geometry:{coordinates:[[[.7754102888268619,46.680527155197694],[-.7143321261315805,47.03810834128467],[-.3687402400222197,45.29285985154556],[1.7117022472057783,44.71076017077044],[3.9138327406320172,45.815242131256525],[3.6308350314942572,47.41785065445441],[.7754102888268619,46.680527155197694]]],type:"Polygon"}},{type:"Feature",properties:{},geometry:{coordinates:[[2.7751103745984835,47.98172986149493],[6.829375470262562,48.14587129044554],[6.414900417682219,47.169510642817755],[5.760540227314522,46.41341938732728],[6.390732145726702,45.59058409048566]],type:"LineString"}},{type:"Feature",properties:{},geometry:{coordinates:[-1.0759198798764373,48.04154361939712],type:"Point"}},{type:"Feature",properties:{},geometry:{coordinates:[.790629166637757,48.96345132277722],type:"Point"}},{type:"Feature",properties:{},geometry:{coordinates:[4.3607542958423835,44.63510909496094],type:"Point"}}],A={type:B,features:E},U={title:"Components/Geospatial/LocationMarkers",component:t},a=()=>e.jsx(o,{children:e.jsxs(n,{style:r,children:[e.jsx(i,{position:"topright",children:e.jsx(s,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(t,{data:{type:"Point",coordinates:[-81.2653727,31.4252249]}})})]})}),p=()=>e.jsx(o,{children:e.jsxs(n,{style:r,children:[e.jsx(i,{position:"topright",children:e.jsx(s,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(t,{animate:!0,data:{type:"Point",coordinates:[-81.2653727,31.4252249]}})})]})}),d=()=>e.jsx(o,{children:e.jsxs(n,{style:r,children:[e.jsx(i,{position:"topright",children:e.jsx(s,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(t,{buffer:10,data:{type:"Point",coordinates:[-81.2653727,31.4252249]}})})]})}),l=()=>e.jsx(o,{children:e.jsxs(n,{style:r,children:[e.jsx(i,{position:"topright",children:e.jsx(s,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(t,{buffer:100,data:A})})]})}),c=()=>e.jsx(o,{children:e.jsxs(n,{style:r,children:[e.jsx(i,{position:"topright",children:e.jsx(s,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(t,{boundingBoxOptions:{animate:!1},data:{type:"Point",coordinates:[-81.2653727,31.4252249]}})})]})}),m=()=>e.jsx(o,{children:e.jsxs(n,{style:r,children:[e.jsx(i,{position:"topright",children:e.jsx(s,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(t,{data:{}})})]})}),h=()=>e.jsx(o,{children:e.jsxs(n,{style:r,children:[e.jsx(i,{position:"topright",children:e.jsx(s,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(t,{data:{test:"123"}})})]})});a.__docgenInfo={description:"",methods:[],displayName:"Default"};p.__docgenInfo={description:"",methods:[],displayName:"Animation"};d.__docgenInfo={description:"",methods:[],displayName:"Buffer"};l.__docgenInfo={description:"",methods:[],displayName:"MultiplePoints"};c.__docgenInfo={description:"",methods:[],displayName:"NoZoom"};m.__docgenInfo={description:"",methods:[],displayName:"EmptyDataSet"};h.__docgenInfo={description:"",methods:[],displayName:"InvalidDataSet"};var y,x,g;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`() => <Peripleo>
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
  </Peripleo>`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var u,j,f;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`() => <Peripleo>
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
  </Peripleo>`,...(f=(j=p.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var P,M,v;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`() => <Peripleo>
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
  </Peripleo>`,...(v=(M=d.parameters)==null?void 0:M.docs)==null?void 0:v.source}}};var S,C,_;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`() => <Peripleo>
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
  </Peripleo>`,...(_=(C=l.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var w,L,k;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`() => <Peripleo>
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
  </Peripleo>`,...(k=(L=c.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var I,N,Z;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`() => <Peripleo>
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
  </Peripleo>`,...(Z=(N=m.parameters)==null?void 0:N.docs)==null?void 0:Z.source}}};var D,b,F;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`() => <Peripleo>
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
  </Peripleo>`,...(F=(b=h.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};const V=["Default","Animation","Buffer","MultiplePoints","NoZoom","EmptyDataSet","InvalidDataSet"];export{p as Animation,d as Buffer,a as Default,m as EmptyDataSet,h as InvalidDataSet,l as MultiplePoints,c as NoZoom,V as __namedExportsOrder,U as default};
