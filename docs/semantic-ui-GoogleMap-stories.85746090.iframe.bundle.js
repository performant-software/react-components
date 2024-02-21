"use strict";(self.webpackChunk_performant_software_storybook=self.webpackChunk_performant_software_storybook||[]).push([[7981],{"./src/semantic-ui/GoogleMap.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DefaultCenter:()=>DefaultCenter,DefaultZoom:()=>DefaultZoom,DefaultZoomWithMapMarker:()=>DefaultZoomWithMapMarker,EditableCoordinatesWithDefaults:()=>EditableCoordinatesWithDefaults,EditableCooridnates:()=>EditableCooridnates,WithMapMarker:()=>WithMapMarker,__namedExportsOrder:()=>__namedExportsOrder,default:()=>GoogleMap_stories});var react=__webpack_require__("../../node_modules/react/index.js"),Form=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/collections/Form/Form.js"),build=__webpack_require__("../shared/build/index.js"),esm=__webpack_require__("../../node_modules/@react-google-maps/api/dist/esm.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var GoogleMap=function GoogleMap(props){var position=build.Map.getPosition(props.position),_useState2=_slicedToArray((0,react.useState)(position||props.defaultCenter),2),center=_useState2[0],setCenter=_useState2[1],_useState4=_slicedToArray((0,react.useState)(),2),map=_useState4[0],setMap=_useState4[1],zoom=(0,react.useMemo)((function(){return position?12:props.defaultZoom?props.defaultZoom:1}),[position,props.defaultZoom]),onDragEnd=(0,react.useCallback)((function(_ref){var latLng=_ref.latLng;props.onDragEnd&&props.onDragEnd({lat:latLng.lat(),lng:latLng.lng()})}),[props.onDragEnd]),onLoad=(0,react.useCallback)((function(m){return setMap(m)}),[]);return(0,react.useEffect)((function(){if(map&&position){var bounds=map.getBounds();bounds&&!bounds.contains(position)&&setCenter(position)}}),[props.position]),(0,jsx_runtime.jsx)(esm.GoogleMap,{center,mapContainerClassName:props.className,mapContainerStyle:props.containerStyle,onClick:onDragEnd,onLoad,zoom,children:position&&(0,jsx_runtime.jsx)(esm.Marker,{draggable:!!props.onDragEnd,onDragEnd,position,visible:!0})})};GoogleMap.displayName="GoogleMap",GoogleMap.defaultProps={containerStyle:{height:"400px"},defaultCenter:{lat:0,lng:0}},GoogleMap.__docgenInfo={description:"",displayName:"GoogleMap",methods:[],props:{className:{required:!1,flowType:{name:"string"},description:""},containerStyle:{required:!1,flowType:{name:"any"},description:"",defaultValue:{value:"{\n  height: '400px'\n}",computed:!1}},defaultCenter:{required:!1,flowType:{name:"signature",type:"object",raw:"{\n  lat: number,\n  lng: number\n}",signature:{properties:[{key:"lat",value:{name:"number",required:!0}},{key:"lng",value:{name:"number",required:!0}}]}},description:"",defaultValue:{value:"{\n  lat: 0,\n  lng: 0\n}",computed:!1}},defaultZoom:{required:!1,flowType:{name:"number"},description:""},onDragEnd:{required:!1,flowType:{name:"signature",type:"function",raw:"(latLng: LatLng) => void",signature:{arguments:[{name:"latLng",type:{name:"signature",type:"object",raw:"{\n  lat: () => number,\n  lng: () => number\n}",signature:{properties:[{key:"lat",value:{name:"signature",type:"function",raw:"() => number",signature:{arguments:[],return:{name:"number"}},required:!0}},{key:"lng",value:{name:"signature",type:"function",raw:"() => number",signature:{arguments:[],return:{name:"number"}},required:!0}}]}}}],return:{name:"void"}}},description:""},position:{required:!1,flowType:{name:"signature",type:"object",raw:"{\n  lat: number,\n  lng: number\n}",signature:{properties:[{key:"lat",value:{name:"number",required:!0}},{key:"lng",value:{name:"number",required:!0}}]}},description:""}}};const components_GoogleMap=GoogleMap;GoogleMap.__docgenInfo={description:"",methods:[],displayName:"GoogleMap",props:{className:{required:!1,flowType:{name:"string"},description:""},containerStyle:{required:!1,flowType:{name:"any"},description:"",defaultValue:{value:"{\n  height: '400px'\n}",computed:!1}},defaultCenter:{required:!1,flowType:{name:"signature",type:"object",raw:"{\n  lat: number,\n  lng: number\n}",signature:{properties:[{key:"lat",value:{name:"number",required:!0}},{key:"lng",value:{name:"number",required:!0}}]}},description:"",defaultValue:{value:"{\n  lat: 0,\n  lng: 0\n}",computed:!1}},defaultZoom:{required:!1,flowType:{name:"number"},description:""},onDragEnd:{required:!1,flowType:{name:"signature",type:"function",raw:"(latLng: LatLng) => void",signature:{arguments:[{name:"latLng",type:{name:"signature",type:"object",raw:"{\n  lat: () => number,\n  lng: () => number\n}",signature:{properties:[{key:"lat",value:{name:"signature",type:"function",raw:"() => number",signature:{arguments:[],return:{name:"number"}},required:!0}},{key:"lng",value:{name:"signature",type:"function",raw:"() => number",signature:{arguments:[],return:{name:"number"}},required:!0}}]}}}],return:{name:"void"}}},description:""},position:{required:!1,flowType:{name:"signature",type:"object",raw:"{\n  lat: number,\n  lng: number\n}",signature:{properties:[{key:"lat",value:{name:"number",required:!0}},{key:"lng",value:{name:"number",required:!0}}]}},description:""}}};var GoogleScript=__webpack_require__("../shared/src/components/GoogleScript.js"),process=__webpack_require__("../../node_modules/process/browser.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function GoogleMap_stories_slicedToArray(arr,i){return function GoogleMap_stories_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function GoogleMap_stories_iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function GoogleMap_stories_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return GoogleMap_stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return GoogleMap_stories_arrayLikeToArray(o,minLen)}(arr,i)||function GoogleMap_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function GoogleMap_stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const GoogleMap_stories={title:"Components/Semantic UI/GoogleMap"};var Default=function Default(){return(0,jsx_runtime.jsx)(GoogleScript.Z,{googleMapsApiKey:process.env.GOOGLE_MAPS_API_KEY||"",children:(0,jsx_runtime.jsx)(components_GoogleMap,{})})};Default.displayName="Default";var DefaultCenter=function DefaultCenter(){return(0,jsx_runtime.jsx)(GoogleScript.Z,{googleMapsApiKey:process.env.GOOGLE_MAPS_API_KEY||"",children:(0,jsx_runtime.jsx)(components_GoogleMap,{defaultCenter:{lat:42.3601,lng:-71.0589}})})};DefaultCenter.displayName="DefaultCenter";var DefaultZoom=function DefaultZoom(){return(0,jsx_runtime.jsx)(GoogleScript.Z,{googleMapsApiKey:process.env.GOOGLE_MAPS_API_KEY||"",children:(0,jsx_runtime.jsx)(components_GoogleMap,{defaultCenter:{lat:42.3601,lng:-71.0589},defaultZoom:12})})};DefaultZoom.displayName="DefaultZoom";var WithMapMarker=function WithMapMarker(){var DEFAULT_POSITION={lat:42.3601,lng:-71.0589},_useState2=GoogleMap_stories_slicedToArray((0,react.useState)(DEFAULT_POSITION),2),position=_useState2[0],setPosition=_useState2[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(GoogleScript.Z,{googleMapsApiKey:process.env.GOOGLE_MAPS_API_KEY||"",children:(0,jsx_runtime.jsx)(components_GoogleMap,{defaultCenter:DEFAULT_POSITION,defaultPosition:DEFAULT_POSITION,defaultZoom:12,onDragEnd:function onDragEnd(p){return setPosition(p)},position})}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("strong",{children:"Latitude: "}),position.lat]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("strong",{children:"Longitude: "}),position.lng]})]})},EditableCooridnates=function EditableCooridnates(){var _useState4=GoogleMap_stories_slicedToArray((0,react.useState)(),2),position=_useState4[0],setPosition=_useState4[1];return(0,jsx_runtime.jsxs)(Form.Z,{children:[(0,jsx_runtime.jsx)(GoogleScript.Z,{googleMapsApiKey:process.env.GOOGLE_MAPS_API_KEY||"",children:(0,jsx_runtime.jsx)(components_GoogleMap,{onDragEnd:function onDragEnd(p){return setPosition(p)},position})}),(0,jsx_runtime.jsx)(Form.Z.Input,{label:"Latitude",onChange:function onChange(e,_ref){var value=_ref.value;return setPosition(_objectSpread(_objectSpread({},position),{},{lat:value}))},value:position&&position.lat||""}),(0,jsx_runtime.jsx)(Form.Z.Input,{label:"Longitude",onChange:function onChange(e,_ref2){var value=_ref2.value;return setPosition(_objectSpread(_objectSpread({},position),{},{lng:value}))},value:position&&position.lng||""})]})};EditableCooridnates.displayName="EditableCooridnates";var EditableCoordinatesWithDefaults=function EditableCoordinatesWithDefaults(){var _useState6=GoogleMap_stories_slicedToArray((0,react.useState)({lat:42.3601,lng:-71.0589}),2),position=_useState6[0],setPosition=_useState6[1];return(0,jsx_runtime.jsxs)(Form.Z,{children:[(0,jsx_runtime.jsx)(GoogleScript.Z,{googleMapsApiKey:process.env.GOOGLE_MAPS_API_KEY||"",children:(0,jsx_runtime.jsx)(components_GoogleMap,{googleMapsApiKey:process.env.GOOGLE_MAPS_API_KEY||"",onDragEnd:function onDragEnd(p){return setPosition(p)},position})}),(0,jsx_runtime.jsx)(Form.Z.Input,{label:"Latitude",onChange:function onChange(e,_ref3){var value=_ref3.value;return setPosition(_objectSpread(_objectSpread({},position),{},{lat:value}))},value:position&&position.lat||""}),(0,jsx_runtime.jsx)(Form.Z.Input,{label:"Longitude",onChange:function onChange(e,_ref4){var value=_ref4.value;return setPosition(_objectSpread(_objectSpread({},position),{},{lng:value}))},value:position&&position.lng||""})]})};EditableCoordinatesWithDefaults.displayName="EditableCoordinatesWithDefaults";var DefaultZoomWithMapMarker=function DefaultZoomWithMapMarker(){var _useState8=GoogleMap_stories_slicedToArray((0,react.useState)({}),2),position=_useState8[0],setPosition=_useState8[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(GoogleScript.Z,{googleMapsApiKey:process.env.GOOGLE_MAPS_API_KEY||"",children:(0,jsx_runtime.jsx)(components_GoogleMap,{defaultZoom:3,onDragEnd:function onDragEnd(p){return setPosition(p)},position})}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("strong",{children:"Latitude: "}),position.lat]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("strong",{children:"Longitude: "}),position.lng]})]})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <GoogleScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY || ''}>\n    <GoogleMap />\n  </GoogleScript>",...Default.parameters?.docs?.source}}},DefaultCenter.parameters={...DefaultCenter.parameters,docs:{...DefaultCenter.parameters?.docs,source:{originalSource:"() => <GoogleScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY || ''}>\n    <GoogleMap defaultCenter={{\n    lat: 42.3601,\n    lng: -71.0589\n  }} />\n  </GoogleScript>",...DefaultCenter.parameters?.docs?.source}}},DefaultZoom.parameters={...DefaultZoom.parameters,docs:{...DefaultZoom.parameters?.docs,source:{originalSource:"() => <GoogleScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY || ''}>\n    <GoogleMap defaultCenter={{\n    lat: 42.3601,\n    lng: -71.0589\n  }} defaultZoom={12} />\n  </GoogleScript>",...DefaultZoom.parameters?.docs?.source}}},WithMapMarker.parameters={...WithMapMarker.parameters,docs:{...WithMapMarker.parameters?.docs,source:{originalSource:"() => {\n  const DEFAULT_POSITION = {\n    lat: 42.3601,\n    lng: -71.0589\n  };\n  const DEFAULT_ZOOM = 12;\n  const [position, setPosition] = useState(DEFAULT_POSITION);\n  return <>\n      <GoogleScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY || ''}>\n        <GoogleMap defaultCenter={DEFAULT_POSITION} defaultPosition={DEFAULT_POSITION} defaultZoom={DEFAULT_ZOOM} onDragEnd={p => setPosition(p)} position={position} />\n      </GoogleScript>\n      <div>\n        <strong>Latitude: </strong>\n        {position.lat}\n      </div>\n      <div>\n        <strong>Longitude: </strong>\n        {position.lng}\n      </div>\n    </>;\n}",...WithMapMarker.parameters?.docs?.source}}},EditableCooridnates.parameters={...EditableCooridnates.parameters,docs:{...EditableCooridnates.parameters?.docs,source:{originalSource:"() => {\n  const [position, setPosition] = useState();\n  return <Form>\n      <GoogleScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY || ''}>\n        <GoogleMap onDragEnd={p => setPosition(p)} position={position} />\n      </GoogleScript>\n      <Form.Input label='Latitude' onChange={(e, {\n      value\n    }) => setPosition({\n      ...position,\n      lat: value\n    })} value={position && position.lat || ''} />\n      <Form.Input label='Longitude' onChange={(e, {\n      value\n    }) => setPosition({\n      ...position,\n      lng: value\n    })} value={position && position.lng || ''} />\n    </Form>;\n}",...EditableCooridnates.parameters?.docs?.source}}},EditableCoordinatesWithDefaults.parameters={...EditableCoordinatesWithDefaults.parameters,docs:{...EditableCoordinatesWithDefaults.parameters?.docs,source:{originalSource:"() => {\n  const [position, setPosition] = useState({\n    lat: 42.3601,\n    lng: -71.0589\n  });\n  return <Form>\n      <GoogleScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY || ''}>\n        <GoogleMap googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY || ''} onDragEnd={p => setPosition(p)} position={position} />\n      </GoogleScript>\n      <Form.Input label='Latitude' onChange={(e, {\n      value\n    }) => setPosition({\n      ...position,\n      lat: value\n    })} value={position && position.lat || ''} />\n      <Form.Input label='Longitude' onChange={(e, {\n      value\n    }) => setPosition({\n      ...position,\n      lng: value\n    })} value={position && position.lng || ''} />\n    </Form>;\n}",...EditableCoordinatesWithDefaults.parameters?.docs?.source}}},DefaultZoomWithMapMarker.parameters={...DefaultZoomWithMapMarker.parameters,docs:{...DefaultZoomWithMapMarker.parameters?.docs,source:{originalSource:"() => {\n  const DEFAULT_ZOOM = 3;\n  const [position, setPosition] = useState({});\n  return <>\n      <GoogleScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY || ''}>\n        <GoogleMap defaultZoom={DEFAULT_ZOOM} onDragEnd={p => setPosition(p)} position={position} />\n      </GoogleScript>\n      <div>\n        <strong>Latitude: </strong>\n        {position.lat}\n      </div>\n      <div>\n        <strong>Longitude: </strong>\n        {position.lng}\n      </div>\n    </>;\n}",...DefaultZoomWithMapMarker.parameters?.docs?.source}}};const __namedExportsOrder=["Default","DefaultCenter","DefaultZoom","WithMapMarker","EditableCooridnates","EditableCoordinatesWithDefaults","DefaultZoomWithMapMarker"]},"../shared/src/components/GoogleScript.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../node_modules/@react-google-maps/api/dist/esm.js").LoadScript}}]);