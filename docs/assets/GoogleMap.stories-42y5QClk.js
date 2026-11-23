import{r as i,j as o}from"./iframe-XscsSow5.js";import{F as u}from"./Form-BrJx1S19.js";import"./index.es28-WoOXI_HP.js";import{G as x,M as E,L as l}from"./esm-Btba31kY.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-DanMEeNO.js";import"./_getPrototype-dFVwFHqx.js";import"./Button-yrPV9pFs.js";import"./Icon-Jc1DkTXR.js";import"./Label-CCz5ec4K.js";import"./ModernAutoControlledComponent-BAVxVyJQ.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-CrtFdvd8.js";import"./toFinite-Dfj0KU41.js";import"./toNumber-DIkYOhwr.js";import"./forEach-3klWIlrl.js";import"./_arrayEach-DpGxo2Of.js";import"./Dimmer-DeH6gG4C.js";import"./Portal-DxEuHn5T.js";import"./keyboardKey-eR6bitll.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-DVRaliq8.js";import"./Checkbox-DTzpSAEQ.js";import"./_baseSet-BIwXZ6o_.js";import"./_assignValue-wlBxhqFj.js";import"./_baseAssignValue-yJv1-bft.js";import"./Dropdown-CgGruOW7.js";import"./without-DU570T-O.js";import"./isArrayLikeObject-DSLl7ti9.js";import"./isEmpty-CIv_nSFx.js";import"./deburr-HNaBwREV.js";import"./index-psiZSKsF.js";import"./_arrayReduce-CrxnWFSq.js";import"./isEqual-mHuJTF3G.js";import"./filter-Cr_a_rJc.js";import"./Input-CYzG4HOR.js";const j=e=>{let t;if(e){const n=Number.parseFloat(e.lat),a=Number.parseFloat(e.lng);!Number.isNaN(n)&&!Number.isNaN(a)&&(t={lat:n,lng:a})}return t},L={getPosition:j},C=1,_=12,s=e=>{const t=L.getPosition(e.position),[n,a]=i.useState(t||e.defaultCenter),[y,S]=i.useState(),b=i.useMemo(()=>{let r;return t?r=_:e.defaultZoom?r=e.defaultZoom:r=C,r},[t,e.defaultZoom]),D=i.useCallback(({latLng:r})=>{e.onDragEnd&&e.onDragEnd({lat:r.lat(),lng:r.lng()})},[e.onDragEnd]),v=i.useCallback(r=>S(r),[]);return i.useEffect(()=>{if(y&&t){const r=y.getBounds();r&&!r.contains(t)&&a(t)}},[e.position]),o.jsx(x,{center:n,mapContainerClassName:e.className,mapContainerStyle:e.containerStyle,onClick:D,onLoad:v,zoom:b,children:t&&o.jsx(E,{draggable:!!e.onDragEnd,onDragEnd:D,position:t,visible:!0})})};s.defaultProps={containerStyle:{height:"400px"},defaultCenter:{lat:0,lng:0}};s.__docgenInfo={description:"",methods:[],displayName:"GoogleMap",props:{className:{required:!1,flowType:{name:"string"},description:""},containerStyle:{required:!1,flowType:{name:"any"},description:"",defaultValue:{value:`{
  height: '400px'
}`,computed:!1}},defaultCenter:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  lat: number,
  lng: number
}`,signature:{properties:[{key:"lat",value:{name:"number",required:!0}},{key:"lng",value:{name:"number",required:!0}}]}},description:"",defaultValue:{value:`{
  lat: 0,
  lng: 0
}`,computed:!1}},defaultZoom:{required:!1,flowType:{name:"number"},description:""},onDragEnd:{required:!1,flowType:{name:"signature",type:"function",raw:"(latLng: LatLng) => void",signature:{arguments:[{name:"latLng",type:{name:"signature",type:"object",raw:`{
  lat: () => number,
  lng: () => number
}`,signature:{properties:[{key:"lat",value:{name:"signature",type:"function",raw:"() => number",signature:{arguments:[],return:{name:"number"}},required:!0}},{key:"lng",value:{name:"signature",type:"function",raw:"() => number",signature:{arguments:[],return:{name:"number"}},required:!0}}]}}}],return:{name:"void"}}},description:""},position:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  lat: number,
  lng: number
}`,signature:{properties:[{key:"lat",value:{name:"number",required:!0}},{key:"lng",value:{name:"number",required:!0}}]}},description:""}}};const p="",me={title:"Components/Semantic UI/GoogleMap"},d=()=>o.jsx(l,{googleMapsApiKey:p,children:o.jsx(s,{})}),g=()=>o.jsx(l,{googleMapsApiKey:p,children:o.jsx(s,{defaultCenter:{lat:42.3601,lng:-71.0589}})}),m=()=>o.jsx(l,{googleMapsApiKey:p,children:o.jsx(s,{defaultCenter:{lat:42.3601,lng:-71.0589},defaultZoom:12})}),c=()=>{const e={lat:42.3601,lng:-71.0589},t=12,[n,a]=i.useState(e);return o.jsxs(o.Fragment,{children:[o.jsx(l,{googleMapsApiKey:p,children:o.jsx(s,{defaultCenter:e,defaultPosition:e,defaultZoom:t,onDragEnd:y=>a(y),position:n})}),o.jsxs("div",{children:[o.jsx("strong",{children:"Latitude: "}),n.lat]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Longitude: "}),n.lng]})]})},f=()=>{const[e,t]=i.useState();return o.jsxs(u,{children:[o.jsx(l,{googleMapsApiKey:p,children:o.jsx(s,{onDragEnd:n=>t(n),position:e})}),o.jsx(u.Input,{label:"Latitude",onChange:(n,{value:a})=>t({...e,lat:a}),value:e&&e.lat||""}),o.jsx(u.Input,{label:"Longitude",onChange:(n,{value:a})=>t({...e,lng:a}),value:e&&e.lng||""})]})},M=()=>{const[e,t]=i.useState({lat:42.3601,lng:-71.0589});return o.jsxs(u,{children:[o.jsx(l,{googleMapsApiKey:p,children:o.jsx(s,{onDragEnd:n=>t(n),position:e})}),o.jsx(u.Input,{label:"Latitude",onChange:(n,{value:a})=>t({...e,lat:a}),value:e&&e.lat||""}),o.jsx(u.Input,{label:"Longitude",onChange:(n,{value:a})=>t({...e,lng:a}),value:e&&e.lng||""})]})},h=()=>{const[t,n]=i.useState({});return o.jsxs(o.Fragment,{children:[o.jsx(l,{googleMapsApiKey:p,children:o.jsx(s,{defaultZoom:3,onDragEnd:a=>n(a),position:t})}),o.jsxs("div",{children:[o.jsx("strong",{children:"Latitude: "}),t.lat]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Longitude: "}),t.lng]})]})};d.__docgenInfo={description:"",methods:[],displayName:"Default"};g.__docgenInfo={description:"",methods:[],displayName:"DefaultCenter"};m.__docgenInfo={description:"",methods:[],displayName:"DefaultZoom"};c.__docgenInfo={description:"",methods:[],displayName:"WithMapMarker"};f.__docgenInfo={description:"",methods:[],displayName:"EditableCooridnates"};M.__docgenInfo={description:"",methods:[],displayName:"EditableCoordinatesWithDefaults"};h.__docgenInfo={description:"",methods:[],displayName:"DefaultZoomWithMapMarker"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => <GoogleScript googleMapsApiKey={googleMapsApiKey}>
    <GoogleMap />
  </GoogleScript>`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => <GoogleScript googleMapsApiKey={googleMapsApiKey}>
    <GoogleMap defaultCenter={{
    lat: 42.3601,
    lng: -71.0589
  }} />
  </GoogleScript>`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <GoogleScript googleMapsApiKey={googleMapsApiKey}>
    <GoogleMap defaultCenter={{
    lat: 42.3601,
    lng: -71.0589
  }} defaultZoom={12} />
  </GoogleScript>`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const DEFAULT_POSITION = {
    lat: 42.3601,
    lng: -71.0589
  };
  const DEFAULT_ZOOM = 12;
  const [position, setPosition] = useState(DEFAULT_POSITION);
  return <>
      <GoogleScript googleMapsApiKey={googleMapsApiKey}>
        <GoogleMap defaultCenter={DEFAULT_POSITION} defaultPosition={DEFAULT_POSITION} defaultZoom={DEFAULT_ZOOM} onDragEnd={p => setPosition(p)} position={position} />
      </GoogleScript>
      <div>
        <strong>Latitude: </strong>
        {position.lat}
      </div>
      <div>
        <strong>Longitude: </strong>
        {position.lng}
      </div>
    </>;
}`,...c.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const [position, setPosition] = useState();
  return <Form>
      <GoogleScript googleMapsApiKey={googleMapsApiKey}>
        <GoogleMap onDragEnd={p => setPosition(p)} position={position} />
      </GoogleScript>
      <Form.Input label='Latitude' onChange={(e, {
      value
    }) => setPosition({
      ...position,
      lat: value
    })} value={position && position.lat || ''} />
      <Form.Input label='Longitude' onChange={(e, {
      value
    }) => setPosition({
      ...position,
      lng: value
    })} value={position && position.lng || ''} />
    </Form>;
}`,...f.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const [position, setPosition] = useState({
    lat: 42.3601,
    lng: -71.0589
  });
  return <Form>
      <GoogleScript googleMapsApiKey={googleMapsApiKey}>
        <GoogleMap onDragEnd={p => setPosition(p)} position={position} />
      </GoogleScript>
      <Form.Input label='Latitude' onChange={(e, {
      value
    }) => setPosition({
      ...position,
      lat: value
    })} value={position && position.lat || ''} />
      <Form.Input label='Longitude' onChange={(e, {
      value
    }) => setPosition({
      ...position,
      lng: value
    })} value={position && position.lng || ''} />
    </Form>;
}`,...M.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const DEFAULT_ZOOM = 3;
  const [position, setPosition] = useState({});
  return <>
      <GoogleScript googleMapsApiKey={googleMapsApiKey}>
        <GoogleMap defaultZoom={DEFAULT_ZOOM} onDragEnd={p => setPosition(p)} position={position} />
      </GoogleScript>
      <div>
        <strong>Latitude: </strong>
        {position.lat}
      </div>
      <div>
        <strong>Longitude: </strong>
        {position.lng}
      </div>
    </>;
}`,...h.parameters?.docs?.source}}};const ce=["Default","DefaultCenter","DefaultZoom","WithMapMarker","EditableCooridnates","EditableCoordinatesWithDefaults","DefaultZoomWithMapMarker"];export{d as Default,g as DefaultCenter,m as DefaultZoom,h as DefaultZoomWithMapMarker,M as EditableCoordinatesWithDefaults,f as EditableCooridnates,c as WithMapMarker,ce as __namedExportsOrder,me as default};
