import{r as s,j as e}from"./iframe-Bo-cahqR.js";import"./peripleo-maplibre.es40-DsRCT4cu.js";import{v as p,t as d}from"./peripleo-maplibre.es19-B0CyOvpG.js";import{_ as n}from"./index-default-B8-H6N8J.js";import{m}from"./MapStyles-bZfNjRqZ.js";import{x as P}from"./index.es11-CzncVIMb.js";import{f as j,a as M}from"./index-C9inixJZ.js";import"./peripleo-maplibre.es8-CcooyrM6.js";const i=({urls:a,..._})=>{const[u,g]=s.useState([]),h=s.useMemo(()=>j(u),[u]),f=s.useCallback(()=>n.map(a,c=>fetch(c).then(r=>r.json()).then(r=>r.place)),[a]),x=s.useCallback(c=>n.map(c,r=>g(y=>r.place_geometry?[...y,M(r.place_geometry.geometry_json,r)]:y)),[]);return s.useEffect(()=>{Promise.all(f()).then(x)},[f,x]),n.isEmpty(h?.features)?null:e.jsx(P,{..._,data:h})};i.__docgenInfo={description:"This component renders a map marker for a given Core Data Place record.",methods:[],displayName:"PlaceMarkers",props:{urls:{required:!0,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:"The URL of the Core Data place record."}}};const L={title:"Components/Core Data/PlaceMarkers",component:i},t=()=>e.jsx(p,{children:e.jsx(d,{style:m,children:e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(i,{urls:["/core_data/public/v1/places/1"]})})})}),o=()=>e.jsx(p,{children:e.jsx(d,{style:m,children:e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(i,{urls:n.map(n.times(10,a=>a),a=>`/core_data/public/v1/places/${a}`)})})})}),l=()=>e.jsx(p,{children:e.jsx(d,{style:m,children:e.jsx("div",{style:{width:"100%",height:"300px"},children:e.jsx(i,{urls:["/core_data/public/v1/places/1"],buffer:20})})})});t.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"MultiplePlaces"};l.__docgenInfo={description:"",methods:[],displayName:"LargerBuffer"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <Peripleo>
    <Map style={mapStyle}>
      <div style={{
      width: '100%',
      height: '300px'
    }}>
        <PlaceMarkers urls={['/core_data/public/v1/places/1']} />
      </div>
    </Map>
  </Peripleo>`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <Peripleo>
    <Map style={mapStyle}>
      <div style={{
      width: '100%',
      height: '300px'
    }}>
        <PlaceMarkers urls={_.map(_.times(10, index => index), index => \`/core_data/public/v1/places/\${index}\`)} />
      </div>
    </Map>
  </Peripleo>`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <Peripleo>
    <Map style={mapStyle}>
      <div style={{
      width: '100%',
      height: '300px'
    }}>
        <PlaceMarkers urls={['/core_data/public/v1/places/1']} buffer={20} />
      </div>
    </Map>
  </Peripleo>`,...l.parameters?.docs?.source}}};const I=["Default","MultiplePlaces","LargerBuffer"];export{t as Default,l as LargerBuffer,o as MultiplePlaces,I as __namedExportsOrder,L as default};
