import{j as e}from"./jsx-runtime-D9TvR9R2.js";import"./peripleo-maplibre.es26-D4QoMT78.js";import{r as t}from"./index-C0dDX-lL.js";import{k as d,X as m,m as h,i as u,z as f}from"./MapStyles-D9vcYCuS.js";import"./index-DOYXiIEK.js";import{_ as i}from"./index-default-C_maRo4o.js";import{x as I}from"./index.es8-Dga0Yea7.js";import{f as N,a as B}from"./index-DnNB6xa5.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DL2ezdWF.js";import"../sb-preview/runtime.js";const D=({urls:s,...E})=>{const[x,L]=t.useState([]),l=t.useMemo(()=>N(x),[x]),g=t.useCallback(()=>i.map(s,c=>fetch(c).then(r=>r.json()).then(r=>r.place)),[s]),y=t.useCallback(c=>i.map(c,r=>L(j=>r.place_geometry?[...j,B(r.place_geometry.geometry_json,r)]:j)),[]);return t.useEffect(()=>{Promise.all(g()).then(y)},[g,y]),i.isEmpty(l==null?void 0:l.features)?null:e.jsx(I,{...E,data:l})},p=D;D.__docgenInfo={description:"This component renders a map marker for a given Core Data Place record.",methods:[],displayName:"PlaceMarkers",props:{urls:{required:!0,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:"The URL of the Core Data place record."}}};const G={title:"Components/Core Data/PlaceMarkers",component:p},o=()=>e.jsx(d,{children:e.jsxs(m,{style:h,children:[e.jsx(u,{position:"topright",children:e.jsx(f,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(p,{urls:["/core_data/public/v1/places/1"]})})]})}),a=()=>e.jsx(d,{children:e.jsxs(m,{style:h,children:[e.jsx(u,{position:"topright",children:e.jsx(f,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(p,{urls:i.map(i.times(10,s=>s),s=>`/core_data/public/v1/places/${s}`)})})]})}),n=()=>e.jsx(d,{children:e.jsxs(m,{style:h,children:[e.jsx(u,{position:"topright",children:e.jsx(f,{})}),e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(p,{urls:["/core_data/public/v1/places/1"],buffer:20})})]})});o.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"MultiplePlaces"};n.__docgenInfo={description:"",methods:[],displayName:"LargerBuffer"};var _,P,M;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`() => <Peripleo>
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
  </Peripleo>`,...(k=(C=a.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var b,w,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`() => <Peripleo>
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
  </Peripleo>`,...(S=(w=n.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const H=["Default","MultiplePlaces","LargerBuffer"];export{o as Default,n as LargerBuffer,a as MultiplePlaces,H as __namedExportsOrder,G as default};
