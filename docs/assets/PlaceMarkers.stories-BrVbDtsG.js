import{j as e}from"./jsx-runtime-BTCK_S7S.js";import{k as d,X as m,a as h,i as u,z as f}from"./MapStyles-BQpgpUCW.js";import{r as t}from"./index-CBqU2yxZ.js";import"./index-DZGZymok.js";import{_ as i}from"./index-default-C_maRo4o.js";import{x as I}from"./index.es8-93Wtoj5e.js";import{f as N,a as B}from"./index-DnNB6xa5.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DUkFOzYJ.js";import"../sb-preview/runtime.js";const E=({urls:r,...L})=>{const[x,b]=t.useState([]),l=t.useMemo(()=>N(x),[x]),g=t.useCallback(()=>i.map(r,c=>fetch(c).then(s=>s.json())),[r]),y=t.useCallback(c=>i.map(c,s=>b(j=>s.geometry?[...j,B(s.geometry,s.properties)]:j)),[]);return t.useEffect(()=>{Promise.all(g()).then(y)},[g,y]),i.isEmpty(l==null?void 0:l.features)?null:e.jsx(I,{...L,data:l})},p=E;E.__docgenInfo={description:"This component renders a map marker for a given Core Data Place record.",methods:[],displayName:"PlaceMarkers",props:{urls:{required:!0,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:"The URL of the Core Data place record."}}};const X={title:"Components/Core Data/PlaceMarkers",component:p},o=()=>e.jsx(d,{children:e.jsxs(m,{style:h,children:[e.jsx(u,{position:"topright",children:e.jsx(f,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(p,{urls:["/core_data/places/2"]})})]})}),a=()=>e.jsx(d,{children:e.jsxs(m,{style:h,children:[e.jsx(u,{position:"topright",children:e.jsx(f,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(p,{urls:i.map(i.times(10,r=>r),r=>`/core_data/places/${r}`)})})]})}),n=()=>e.jsx(d,{children:e.jsxs(m,{style:h,children:[e.jsx(u,{position:"topright",children:e.jsx(f,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(p,{urls:["/core_data/places/2"],buffer:20})})]})});o.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"MultiplePlaces"};n.__docgenInfo={description:"",methods:[],displayName:"LargerBuffer"};var _,P,M;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`() => <Peripleo>
    <Map style={mapStyle}>
      <Controls position='topright'>
        <Zoom />
      </Controls>
      <div style={{
      width: '100%',
      height: '300px'
    }}>
        <PlaceMarkers urls={['/core_data/places/2']} />
      </div>
    </Map>
  </Peripleo>`,...(M=(P=o.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var C,k,v;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`() => <Peripleo>
    <Map style={mapStyle}>
      <Controls position='topright'>
        <Zoom />
      </Controls>
      <div style={{
      width: '100%',
      height: '300px'
    }}>
        <PlaceMarkers urls={_.map(_.times(10, index => index), index => \`/core_data/places/\${index}\`)} />
      </div>
    </Map>
  </Peripleo>`,...(v=(k=a.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var w,S,D;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`() => <Peripleo>
    <Map style={mapStyle}>
      <Controls position='topright'>
        <Zoom />
      </Controls>
      <div style={{
      width: '100%',
      height: '300px'
    }}>
        <PlaceMarkers urls={['/core_data/places/2']} buffer={20} />
      </div>
    </Map>
  </Peripleo>`,...(D=(S=n.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const G=["Default","MultiplePlaces","LargerBuffer"];export{o as Default,n as LargerBuffer,a as MultiplePlaces,G as __namedExportsOrder,X as default};
