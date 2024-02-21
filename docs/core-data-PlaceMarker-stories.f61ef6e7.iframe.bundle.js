(self.webpackChunk_performant_software_storybook=self.webpackChunk_performant_software_storybook||[]).push([[2285],{"./src/core-data/PlaceMarker.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PlaceMarker_stories});var peripleo_maplibre_es=__webpack_require__("../../node_modules/@peripleo/maplibre/dist/peripleo-maplibre.es.js"),peripleo_es=__webpack_require__("../../node_modules/@peripleo/peripleo/dist/peripleo.es.js"),react=__webpack_require__("../../node_modules/react/index.js"),MapStyles=__webpack_require__("./src/data/MapStyles.json"),build=__webpack_require__("../geospatial/build/index.js"),build_default=__webpack_require__.n(build),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var PlaceMarker=function PlaceMarker(props){var _useState2=_slicedToArray((0,react.useState)(),2),place=_useState2[0],setPlace=_useState2[1],onLoad=(0,react.useCallback)((function(data){var featureCollection={type:"FeatureCollection",features:[_objectSpread(_objectSpread({},data),{},{properties:_objectSpread(_objectSpread({},data.properties),{},{record_id:data.record_id})})]};setPlace(featureCollection)}),[]);return(0,react.useEffect)((function(){fetch(props.url).then((function(res){return res.json()})).then(onLoad)}),[props.url]),place?(0,jsx_runtime.jsx)(build_default(),{data:place,map:props.map}):null};PlaceMarker.displayName="PlaceMarker",PlaceMarker.__docgenInfo={description:"This component renders a map marker for a given Core Data Place record.",displayName:"PlaceMarker",methods:[],props:{map:{required:!1,flowType:{name:"Map"},description:"TODO: Comment me."},url:{required:!0,flowType:{name:"string"},description:"The URL of the Core Data place record."}}};const components_PlaceMarker=PlaceMarker;PlaceMarker.__docgenInfo={description:"This component renders a map marker for a given Core Data Place record.",methods:[],displayName:"PlaceMarker",props:{map:{required:!1,flowType:{name:"Map"},description:"TODO: Comment me."},url:{required:!0,flowType:{name:"string"},description:"The URL of the Core Data place record."}}};const PlaceMarker_stories={title:"Components/Core Data/PlaceMarker",component:components_PlaceMarker};var Default=function Default(){return(0,jsx_runtime.jsx)(peripleo_es.Nz,{children:(0,jsx_runtime.jsxs)(peripleo_maplibre_es.D5,{style:MapStyles,children:[(0,jsx_runtime.jsx)(peripleo_es.ZX,{position:"topright",children:(0,jsx_runtime.jsx)(peripleo_maplibre_es.LG,{})}),(0,jsx_runtime.jsx)(components_PlaceMarker,{url:"https://core-data-cloud-staging-2c51db0617a5.herokuapp.com/core_data/public/places/3aaf97a4-7052-4e2c-9056-4f4146ef0c87?project_ids=10"})]})})};Default.displayName="Default",Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <Peripleo>\n    <Map style={mapStyle}>\n      <Controls position='topright'>\n        <Zoom />\n      </Controls>\n      <PlaceMarker url={PLACE_URL}\n    // map={map}\n    />\n    </Map>\n  </Peripleo>",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../geospatial/build/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}!function(){"use strict";var e={n:function n(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,{a:r}),r},d:function d(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:function o(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function r(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{DrawControl:function DrawControl(){return u},GeoJsonLayer:function GeoJsonLayer(){return v},LayerMenu:function LayerMenu(){return L},LocationMarker:function LocationMarker(){return q},Map:function Map(){return D},MapControl:function MapControl(){return _},MapDraw:function MapDraw(){return G},RasterLayer:function RasterLayer(){return J}});var r=__webpack_require__("../../node_modules/@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.js"),n=e.n(r),o=__webpack_require__("../../node_modules/react/index.js"),a=e.n(o),i=__webpack_require__("../../node_modules/react-map-gl/dist/esm/index.js"),l=e.n(i),u=(0,o.forwardRef)((function(e,t){var r=(0,i.useControl)((function(){return new(n())(e)}),(function(t){var r=t.map;r.on("draw.create",e.onCreate),r.on("draw.update",e.onUpdate),r.on("draw.delete",e.onDelete)}),(function(t){var r=t.map;r.off("draw.create",e.onCreate),r.off("draw.update",e.onUpdate),r.off("draw.delete",e.onDelete)}),{position:e.position});return(0,o.useImperativeHandle)(t,(function(){return r}),[r]),null})),c=__webpack_require__("../../node_modules/underscore/modules/index-all.js"),f=e.n(c);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var y="#CC3333",m="#990000",p={"fill-color":y,"fill-opacity":.2},b={"line-color":m,"line-opacity":.6},d={"circle-radius":["interpolate",["linear"],["number",["get","point_count"],1],0,4,10,14],"circle-stroke-width":1,"circle-color":y,"circle-stroke-color":m},v=function v(e){var t,n=(2,function(e){if(Array.isArray(e))return e}(t=(0,o.useState)(e.data))||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],u=!0,c=!1;try{for(a=(r=r.call(e)).next,0;!(u=(n=a.call(r)).done)&&(l.push(n.value),2!==l.length);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(t)||function(e,t){if(e){if("string"==typeof e)return s(e,2);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,2):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=n[0],u=n[1],c=(0,o.useCallback)((function(e,t){return f().defaults(e,t)}),[]),y=(0,o.useMemo)((function(){return c(e.fillStyle,p)}),[c,e.fillStyle]),m=(0,o.useMemo)((function(){return c(e.lineStyle,b)}),[c,e.lineStyle]),v=(0,o.useMemo)((function(){return c(e.pointStyle,d)}),[c,e.pointStyle]);return(0,o.useEffect)((function(){e.url&&fetch(e.url).then((function(e){return e.json()})).then((function(e){return u(e)}))}),[e.url]),a().createElement(i.Source,{data:l,type:"geojson"},a().createElement(i.Layer,{filter:["!=","$type","Point"],paint:y,type:"fill"}),a().createElement(i.Layer,{filter:["!=","$type","Point"],paint:m,type:"line"}),a().createElement(i.Layer,{filter:["==","$type","Point"],paint:v,type:"circle"}))},h=__webpack_require__("../../node_modules/react-icons/bs/index.js"),g=__webpack_require__("../../node_modules/react-icons/io5/index.js"),S=__webpack_require__("../../node_modules/maplibre-gl/dist/maplibre-gl.js"),w=e.n(S),O=__webpack_require__("../../node_modules/react-dom/index.js");function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function E(e){return E="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(e){return _typeof(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof(e)},E(e)}function A(e){var t=function(e,t){if("object"!=E(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==E(t)?t:String(t)}var P=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._map=null,this._container=void 0,this._redraw=void 0,this._redraw=t}var t,r;return t=e,(r=[{key:"onAdd",value:function value(e){return this._map=e,e.on("move",this._redraw),this._container=document.createElement("div"),this._container.className="maplibregl-ctrl-group maplibregl-ctrl",this._redraw(),this._container}},{key:"onRemove",value:function value(){this._container.remove(),this._map.off("move",this._redraw),this._map=null}},{key:"getMap",value:function value(){return this._map}},{key:"getElement",value:function value(){return this._container}}])&&function C(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,A(n.key),n)}}(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),_=function _(e){var t,n=(t=(0,o.useState)(0),2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],u=!0,c=!1;try{for(a=(r=r.call(e)).next,0;!(u=(n=a.call(r)).done)&&(l.push(n.value),2!==l.length);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(t)||function(e,t){if(e){if("string"==typeof e)return j(e,2);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(e,2):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[1],a=(0,o.useCallback)((function(){return n((function(e){return e+1}))}),[]),l=(0,i.useControl)((function(){return new P(a)}),{position:e.position}),u=l.getMap(),c=o.Children.map(f().compact(o.Children.toArray(e.children)),(function(e){return(0,o.cloneElement)(e,{map:u})}));return(0,o.useEffect)((function(){e.mapRef&&(e.mapRef.current=u)}),[u,e.mapRef]),u&&(0,O.createPortal)(c,l.getElement())};function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],u=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,t)||x(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){if(e){if("string"==typeof e)return M(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?M(e,t):void 0}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var I=function I(e){var t=k((0,o.useState)(0),2),r=t[0],n=t[1],i=k((0,o.useState)(),2),l=i[0],u=i[1],c=k((0,o.useState)(!1),2),s=c[0],y=c[1],m=(0,o.useRef)(),p=(0,o.useCallback)((function(t){return e.names&&e.names.length>t&&e.names[t]}),[e.names]),b=(0,o.useCallback)((function(e){return f().includes(l,e)}),[l]),d=(0,o.useMemo)((function(){return o.Children.toArray(e.children)}),[e.children]),v=(0,o.useMemo)((function(){return f().filter(d,(function(e,t){return b(t)}))}),[d,b]),S=(0,o.useCallback)((function(e){var t,r;t=b(e)?f().without(l,e):[].concat(function(e){if(Array.isArray(e))return M(e)}(r=l)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||x(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[e]),u(t)}),[b,l]);return(0,o.useEffect)((function(){u(f().times(d.length,(function(e){return e})))}),[]),(0,o.useEffect)((function(){var e=m.current;if(e&&e._canvas){var t=m.current._canvas.offsetHeight;n(void 0===t?0:t)}}),[m.current]),f().isEmpty(d)?null:a().createElement(a().Fragment,null,a().createElement(_,{mapRef:m,position:e.position},a().createElement("button",{className:"mapbox-gl-draw_ctrl-draw-btn layer-button",onClick:function onClick(){return y((function(e){return!e}))},type:"button"},a().createElement(h.BsStack,{size:"1.25em"})),s&&a().createElement("div",{className:"layer-menu",style:{maxHeight:"calc(".concat(r,"px - ").concat(30,"px)")}},a().createElement("div",{className:"menu"},f().map(d,(function(e,t){return a().createElement("div",{"aria-selected":b(t),className:"option",role:"option",onClick:function onClick(){return S(t)},onKeyDown:function onKeyDown(){return S(t)},tabIndex:t},a().createElement("div",{className:"checkmark-container"},b(t)&&a().createElement(g.IoCheckmarkOutline,{size:"1em"})),p(t))}))))),v)};I.defaultProps={position:"top-left"};var L=I,R=__webpack_require__("../../node_modules/@peripleo/maplibre/dist/peripleo-maplibre.cjs.js"),z=__webpack_require__("../../node_modules/@turf/turf/dist/js/index.js"),D={getBoundingBox:function getBoundingBox(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=(0,z.bbox)(e),o=(0,z.bboxPolygon)(n);return t=r?(0,z.buffer)(o,r,{units:"miles"}):o,(0,z.bbox)(t)}},T=function T(e){return(0,o.useEffect)((function(){if(e.map&&e.data){var t=D.getBoundingBox(e.data,e.buffer);e.map.fitBounds(t)}}),[e.buffer,e.data,e.map]),a().createElement(a().Fragment,null,a().createElement(R.PulsingMarkerLayer,{id:"current",data:e.data}),a().createElement(R.MixedGeoJSONLayer,{id:"current",data:e.data,fillStyle:e.fillStyle,strokeStyle:e.strokeStyle,pointStyle:e.pointStyle}))};T.defaultProps={buffer:2,fillStyle:{type:"fill",paint:{"fill-color":"#ff623b","fill-opacity":.2}},pointStyle:{type:"circle",paint:{"circle-radius":["interpolate",["linear"],["number",["get","point_count"],1],0,4,10,14],"circle-stroke-width":1,"circle-color":["case",["boolean",["feature-state","hover"],!1],"#3b62ff","#ff623b"],"circle-stroke-color":"#8d260c"}},strokeStyle:{type:"line",paint:{"line-color":"#ff623b","line-opacity":.6}}};var q=T;function B(e){return B="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(e){return _typeof(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof(e)},B(e)}function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],u=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return $(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?$(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}n().constants.classes.CONTROL_BASE="maplibregl-ctrl",n().constants.classes.CONTROL_PREFIX="maplibregl-ctrl-",n().constants.classes.CONTROL_GROUP="maplibregl-ctrl-group";var F=function F(e){var t=U((0,o.useState)(!1),2),r=t[0],n=t[1],i=(0,o.useRef)(),c=(0,o.useRef)(),s=(0,o.useCallback)((function(){e.onChange(i.current.getAll())}),[e.onChange]),y=(0,o.useMemo)((function(){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){var n,o,a,i;n=e,o=t,a=r[t],i=function(e,t){if("object"!=B(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=B(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==B(i)?i:String(i))in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({height:500,width:"100%"},e.style||{})}),[e.style]);return(0,o.useEffect)((function(){if(r&&e.data){var t=D.getBoundingBox(e.data,e.buffer);if(f().every(t,f().isFinite)){var n=U(t,4),o=[[n[0],n[1]],[n[2],n[3]]];c.current.fitBounds(o,{duration:e.zoomDuration})}"GeometryCollection"===e.data.type?f().each(e.data.geometries,(function(e){i.current.add((0,z.feature)(e))})):i.current.add(e.data)}}),[r,e.data]),a().createElement(l(),{attributionControl:!1,onLoad:function onLoad(){return n(!0)},mapLib:w(),ref:c,style:y,mapStyle:e.mapStyle},a().createElement(u,{ref:i,controls:{line_string:!0,point:!0,polygon:!0,trash:!0},displayControlsDefault:!1,onCreate:s,onUpdate:s,onDelete:s,position:"bottom-left"}),e.children)};F.defaultProps={buffer:2,zoomDuration:1e3};var G=F,H=function H(e){return a().createElement(i.Source,{tileSize:e.tileSize,tiles:[e.url],type:"raster"},a().createElement(i.Layer,{type:"raster",paint:{"raster-opacity":e.opacity},minzoom:e.minzoom,maxzoom:e.maxzoom}))};H.defaultProps={maxzoom:22,minzoom:0,opacity:.7,tileSize:256};var J=H;module.exports=t}()},"./src/data/MapStyles.json":module=>{"use strict";module.exports=JSON.parse('{"version":8,"sources":{"osm":{"type":"raster","tiles":["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],"tileSize":256,"attribution":"&copy; OpenStreetMap Contributors","maxzoom":19}},"layers":[{"id":"osm","type":"raster","source":"osm"}]}')}}]);