import{j as o}from"./jsx-runtime-D9TvR9R2.js";import{r as i}from"./index-C0dDX-lL.js";import{F as u}from"./Form-WfNl3YLh.js";import{E as R}from"./Environment-CqI-rGGB.js";import"./index.es33-QYm5hevP.js";import{G as V,M as z,L as l}from"./esm-DKoDMfFu.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BSRayMAs.js";import"./Button-CJhT71wt.js";import"./Icon-C_3d7-zE.js";import"./Label-aEFd48OX.js";import"./ModernAutoControlledComponent-C211dBIC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-Cc_HXDPA.js";import"./toFinite-C3oJXAtX.js";import"./forEach-CLeEMxs1.js";import"./Dimmer-DP3fvqlo.js";import"./Portal-B8DXQ6EK.js";import"./keyboardKey-OMDgGVm3.js";import"./index-DOYXiIEK.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-DWKMCCtW.js";import"./Checkbox-B3tsCUtI.js";import"./_baseSet-BllfnHSO.js";import"./_baseAssignValue-UQlBDUKN.js";import"./Dropdown-DwNow7wJ.js";import"./without-Duh6Zu7H.js";import"./isArrayLikeObject-Bl_bAmop.js";import"./isEmpty-CY-Bv0TY.js";import"./deburr-CNLr_JRW.js";import"./index-mbjjMjCk.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-B6f9p5im.js";import"./Input-Bwh_HEb3.js";import"./iframe-SlARHmC8.js";import"../sb-preview/runtime.js";const B=e=>{let t;if(e){const n=Number.parseFloat(e.lat),a=Number.parseFloat(e.lng);!Number.isNaN(n)&&!Number.isNaN(a)&&(t={lat:n,lng:a})}return t},$={getPosition:B},H=1,J=12,s=e=>{const t=$.getPosition(e.position),[n,a]=i.useState(t||e.defaultCenter),[y,q]=i.useState(),w=i.useMemo(()=>{let r;return t?r=J:e.defaultZoom?r=e.defaultZoom:r=H,r},[t,e.defaultZoom]),D=i.useCallback(({latLng:r})=>{e.onDragEnd&&e.onDragEnd({lat:r.lat(),lng:r.lng()})},[e.onDragEnd]),W=i.useCallback(r=>q(r),[]);return i.useEffect(()=>{if(y&&t){const r=y.getBounds();r&&!r.contains(t)&&a(t)}},[e.position]),o.jsx(V,{center:n,mapContainerClassName:e.className,mapContainerStyle:e.containerStyle,onClick:D,onLoad:W,zoom:w,children:t&&o.jsx(z,{draggable:!!e.onDragEnd,onDragEnd:D,position:t,visible:!0})})};s.defaultProps={containerStyle:{height:"400px"},defaultCenter:{lat:0,lng:0}};s.__docgenInfo={description:"",methods:[],displayName:"GoogleMap",props:{className:{required:!1,flowType:{name:"string"},description:""},containerStyle:{required:!1,flowType:{name:"any"},description:"",defaultValue:{value:`{
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
}`,signature:{properties:[{key:"lat",value:{name:"number",required:!0}},{key:"lng",value:{name:"number",required:!0}}]}},description:""}}};const p=R.getGoogleMapsApiKey()||"",Ze={title:"Components/Semantic UI/GoogleMap"},d=()=>o.jsx(l,{googleMapsApiKey:p,children:o.jsx(s,{})}),g=()=>o.jsx(l,{googleMapsApiKey:p,children:o.jsx(s,{defaultCenter:{lat:42.3601,lng:-71.0589}})}),m=()=>o.jsx(l,{googleMapsApiKey:p,children:o.jsx(s,{defaultCenter:{lat:42.3601,lng:-71.0589},defaultZoom:12})}),c=()=>{const e={lat:42.3601,lng:-71.0589},t=12,[n,a]=i.useState(e);return o.jsxs(o.Fragment,{children:[o.jsx(l,{googleMapsApiKey:p,children:o.jsx(s,{defaultCenter:e,defaultPosition:e,defaultZoom:t,onDragEnd:y=>a(y),position:n})}),o.jsxs("div",{children:[o.jsx("strong",{children:"Latitude: "}),n.lat]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Longitude: "}),n.lng]})]})},f=()=>{const[e,t]=i.useState();return o.jsxs(u,{children:[o.jsx(l,{googleMapsApiKey:p,children:o.jsx(s,{onDragEnd:n=>t(n),position:e})}),o.jsx(u.Input,{label:"Latitude",onChange:(n,{value:a})=>t({...e,lat:a}),value:e&&e.lat||""}),o.jsx(u.Input,{label:"Longitude",onChange:(n,{value:a})=>t({...e,lng:a}),value:e&&e.lng||""})]})},M=()=>{const[e,t]=i.useState({lat:42.3601,lng:-71.0589});return o.jsxs(u,{children:[o.jsx(l,{googleMapsApiKey:p,children:o.jsx(s,{onDragEnd:n=>t(n),position:e})}),o.jsx(u.Input,{label:"Latitude",onChange:(n,{value:a})=>t({...e,lat:a}),value:e&&e.lat||""}),o.jsx(u.Input,{label:"Longitude",onChange:(n,{value:a})=>t({...e,lng:a}),value:e&&e.lng||""})]})},h=()=>{const[t,n]=i.useState({});return o.jsxs(o.Fragment,{children:[o.jsx(l,{googleMapsApiKey:p,children:o.jsx(s,{defaultZoom:3,onDragEnd:a=>n(a),position:t})}),o.jsxs("div",{children:[o.jsx("strong",{children:"Latitude: "}),t.lat]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Longitude: "}),t.lng]})]})};d.__docgenInfo={description:"",methods:[],displayName:"Default"};g.__docgenInfo={description:"",methods:[],displayName:"DefaultCenter"};m.__docgenInfo={description:"",methods:[],displayName:"DefaultZoom"};c.__docgenInfo={description:"",methods:[],displayName:"WithMapMarker"};f.__docgenInfo={description:"",methods:[],displayName:"EditableCooridnates"};M.__docgenInfo={description:"",methods:[],displayName:"EditableCoordinatesWithDefaults"};h.__docgenInfo={description:"",methods:[],displayName:"DefaultZoomWithMapMarker"};var S,b,v;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`() => <GoogleScript googleMapsApiKey={googleMapsApiKey}>
    <GoogleMap />
  </GoogleScript>`,...(v=(b=d.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var E,x,j;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`() => <GoogleScript googleMapsApiKey={googleMapsApiKey}>
    <GoogleMap defaultCenter={{
    lat: 42.3601,
    lng: -71.0589
  }} />
  </GoogleScript>`,...(j=(x=g.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var L,C,_;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`() => <GoogleScript googleMapsApiKey={googleMapsApiKey}>
    <GoogleMap defaultCenter={{
    lat: 42.3601,
    lng: -71.0589
  }} defaultZoom={12} />
  </GoogleScript>`,...(_=(C=m.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var A,O,F;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
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
}`,...(F=(O=c.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var G,I,P;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
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
}`,...(P=(I=f.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var T,Z,N;M.parameters={...M.parameters,docs:{...(T=M.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
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
}`,...(N=(Z=M.parameters)==null?void 0:Z.docs)==null?void 0:N.source}}};var K,k,U;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
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
}`,...(U=(k=h.parameters)==null?void 0:k.docs)==null?void 0:U.source}}};const Ne=["Default","DefaultCenter","DefaultZoom","WithMapMarker","EditableCooridnates","EditableCoordinatesWithDefaults","DefaultZoomWithMapMarker"];export{d as Default,g as DefaultCenter,m as DefaultZoom,h as DefaultZoomWithMapMarker,M as EditableCoordinatesWithDefaults,f as EditableCooridnates,c as WithMapMarker,Ne as __namedExportsOrder,Ze as default};
