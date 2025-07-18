import{r as i,j as o}from"./iframe-BPWyo1ml.js";import{F as u}from"./Form-ClhUWp7q.js";import"./index.es27-qSesx2Cv.js";import{G as x,M as E,L as l}from"./esm-DK6dEiwW.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-_MvlUdE4.js";import"./Button-4UTl3zWh.js";import"./Icon-jme1Xn38.js";import"./Label-BoodK5V_.js";import"./ModernAutoControlledComponent-YfVkZAu6.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-DPOpDRSZ.js";import"./toFinite-TVPM6KGA.js";import"./forEach-DkM9CNVk.js";import"./Dimmer-Cc_1Rffq.js";import"./Portal-CMKTsJj1.js";import"./keyboardKey-D0kxxHqZ.js";import"./map-PCFjh3mh.js";import"./Checkbox-C9s8UeCZ.js";import"./_baseSet-CdjV8XzC.js";import"./_baseAssignValue-B_GkWFP9.js";import"./Dropdown-BN9I38ur.js";import"./without-elm7P8Lj.js";import"./isArrayLikeObject-Bjky3Eyc.js";import"./isEmpty-BuKxTBqx.js";import"./deburr-DvXLs-DJ.js";import"./index-1knMejfY.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-B8Ew4z8i.js";import"./Input-CCAhbxsm.js";const j=e=>{let n;if(e){const t=Number.parseFloat(e.lat),a=Number.parseFloat(e.lng);!Number.isNaN(t)&&!Number.isNaN(a)&&(n={lat:t,lng:a})}return n},L={getPosition:j},C=1,_=12,s=e=>{const n=L.getPosition(e.position),[t,a]=i.useState(n||e.defaultCenter),[y,S]=i.useState(),b=i.useMemo(()=>{let r;return n?r=_:e.defaultZoom?r=e.defaultZoom:r=C,r},[n,e.defaultZoom]),D=i.useCallback(({latLng:r})=>{e.onDragEnd&&e.onDragEnd({lat:r.lat(),lng:r.lng()})},[e.onDragEnd]),v=i.useCallback(r=>S(r),[]);return i.useEffect(()=>{if(y&&n){const r=y.getBounds();r&&!r.contains(n)&&a(n)}},[e.position]),o.jsx(x,{center:t,mapContainerClassName:e.className,mapContainerStyle:e.containerStyle,onClick:D,onLoad:v,zoom:b,children:n&&o.jsx(E,{draggable:!!e.onDragEnd,onDragEnd:D,position:n,visible:!0})})};s.defaultProps={containerStyle:{height:"400px"},defaultCenter:{lat:0,lng:0}};s.__docgenInfo={description:"",methods:[],displayName:"GoogleMap",props:{className:{required:!1,flowType:{name:"string"},description:""},containerStyle:{required:!1,flowType:{name:"any"},description:"",defaultValue:{value:`{
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
}`,signature:{properties:[{key:"lat",value:{name:"number",required:!0}},{key:"lng",value:{name:"number",required:!0}}]}},description:""}}};const p="",se={title:"Components/Semantic UI/GoogleMap"},d=()=>o.jsx(l,{googleMapsApiKey:p,children:o.jsx(s,{})}),g=()=>o.jsx(l,{googleMapsApiKey:p,children:o.jsx(s,{defaultCenter:{lat:42.3601,lng:-71.0589}})}),m=()=>o.jsx(l,{googleMapsApiKey:p,children:o.jsx(s,{defaultCenter:{lat:42.3601,lng:-71.0589},defaultZoom:12})}),c=()=>{const e={lat:42.3601,lng:-71.0589},n=12,[t,a]=i.useState(e);return o.jsxs(o.Fragment,{children:[o.jsx(l,{googleMapsApiKey:p,children:o.jsx(s,{defaultCenter:e,defaultPosition:e,defaultZoom:n,onDragEnd:y=>a(y),position:t})}),o.jsxs("div",{children:[o.jsx("strong",{children:"Latitude: "}),t.lat]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Longitude: "}),t.lng]})]})},f=()=>{const[e,n]=i.useState();return o.jsxs(u,{children:[o.jsx(l,{googleMapsApiKey:p,children:o.jsx(s,{onDragEnd:t=>n(t),position:e})}),o.jsx(u.Input,{label:"Latitude",onChange:(t,{value:a})=>n({...e,lat:a}),value:e&&e.lat||""}),o.jsx(u.Input,{label:"Longitude",onChange:(t,{value:a})=>n({...e,lng:a}),value:e&&e.lng||""})]})},M=()=>{const[e,n]=i.useState({lat:42.3601,lng:-71.0589});return o.jsxs(u,{children:[o.jsx(l,{googleMapsApiKey:p,children:o.jsx(s,{onDragEnd:t=>n(t),position:e})}),o.jsx(u.Input,{label:"Latitude",onChange:(t,{value:a})=>n({...e,lat:a}),value:e&&e.lat||""}),o.jsx(u.Input,{label:"Longitude",onChange:(t,{value:a})=>n({...e,lng:a}),value:e&&e.lng||""})]})},h=()=>{const[n,t]=i.useState({});return o.jsxs(o.Fragment,{children:[o.jsx(l,{googleMapsApiKey:p,children:o.jsx(s,{defaultZoom:3,onDragEnd:a=>t(a),position:n})}),o.jsxs("div",{children:[o.jsx("strong",{children:"Latitude: "}),n.lat]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Longitude: "}),n.lng]})]})};d.__docgenInfo={description:"",methods:[],displayName:"Default"};g.__docgenInfo={description:"",methods:[],displayName:"DefaultCenter"};m.__docgenInfo={description:"",methods:[],displayName:"DefaultZoom"};c.__docgenInfo={description:"",methods:[],displayName:"WithMapMarker"};f.__docgenInfo={description:"",methods:[],displayName:"EditableCooridnates"};M.__docgenInfo={description:"",methods:[],displayName:"EditableCoordinatesWithDefaults"};h.__docgenInfo={description:"",methods:[],displayName:"DefaultZoomWithMapMarker"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => <GoogleScript googleMapsApiKey={googleMapsApiKey}>
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
}`,...h.parameters?.docs?.source}}};const le=["Default","DefaultCenter","DefaultZoom","WithMapMarker","EditableCooridnates","EditableCoordinatesWithDefaults","DefaultZoomWithMapMarker"];export{d as Default,g as DefaultCenter,m as DefaultZoom,h as DefaultZoomWithMapMarker,M as EditableCoordinatesWithDefaults,f as EditableCooridnates,c as WithMapMarker,le as __namedExportsOrder,se as default};
