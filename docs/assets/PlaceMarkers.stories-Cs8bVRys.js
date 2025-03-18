import{j as e}from"./jsx-runtime-D9TvR9R2.js";import"./peripleo-maplibre.es26-DiUCIHtK.js";import{r as t}from"./index-C0dDX-lL.js";import{k as m,X as d,i as h,z as u}from"./peripleo-maplibre.es11-PtuDajJE.js";import"./index-DOYXiIEK.js";import{_ as n}from"./index-default-C_maRo4o.js";import{m as f}from"./MapStyles-C6-1hWRo.js";import{x as I}from"./index.es11-Djm9X-pv.js";import{f as N,a as B}from"./index-DnNB6xa5.js";import"./_commonjsHelpers-BosuxZz1.js";import"./peripleo-maplibre.es6-CTpa37IY.js";import"./iframe-BVVfevnq.js";import"../sb-preview/runtime.js";const D=({urls:s,...E})=>{const[x,L]=t.useState([]),l=t.useMemo(()=>N(x),[x]),g=t.useCallback(()=>n.map(s,c=>fetch(c).then(r=>r.json()).then(r=>r.place)),[s]),y=t.useCallback(c=>n.map(c,r=>L(j=>r.place_geometry?[...j,B(r.place_geometry.geometry_json,r)]:j)),[]);return t.useEffect(()=>{Promise.all(g()).then(y)},[g,y]),n.isEmpty(l==null?void 0:l.features)?null:e.jsx(I,{...E,data:l})},p=D;D.__docgenInfo={description:"This component renders a map marker for a given Core Data Place record.",methods:[],displayName:"PlaceMarkers",props:{urls:{required:!0,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:"The URL of the Core Data place record."}}};const J={title:"Components/Core Data/PlaceMarkers",component:p},o=()=>e.jsx(m,{children:e.jsxs(d,{style:f,children:[e.jsx(h,{position:"topright",children:e.jsx(u,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(p,{urls:["/core_data/public/v1/places/1"]})})]})}),a=()=>e.jsx(m,{children:e.jsxs(d,{style:f,children:[e.jsx(h,{position:"topright",children:e.jsx(u,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(p,{urls:n.map(n.times(10,s=>s),s=>`/core_data/public/v1/places/${s}`)})})]})}),i=()=>e.jsx(m,{children:e.jsxs(d,{style:f,children:[e.jsx(h,{position:"topright",children:e.jsx(u,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(p,{urls:["/core_data/public/v1/places/1"],buffer:20})})]})});o.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"MultiplePlaces"};i.__docgenInfo={description:"",methods:[],displayName:"LargerBuffer"};var _,P,M;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`() => <Peripleo>
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
  </Peripleo>`,...(M=(P=o.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var v,C,k;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`() => <Peripleo>
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
  </Peripleo>`,...(k=(C=a.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var b,w,S;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`() => <Peripleo>
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
  </Peripleo>`,...(S=(w=i.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const K=["Default","MultiplePlaces","LargerBuffer"];export{o as Default,i as LargerBuffer,a as MultiplePlaces,K as __namedExportsOrder,J as default};
