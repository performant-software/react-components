(self.webpackChunk_performant_software_storybook=self.webpackChunk_performant_software_storybook||[]).push([[2285],{"./src/core-data/PlaceMarker.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PlaceMarker_stories});var peripleo_maplibre_es=__webpack_require__("../../node_modules/@peripleo/maplibre/dist/peripleo-maplibre.es.js"),peripleo_es=__webpack_require__("../../node_modules/@peripleo/peripleo/dist/peripleo.es.js"),react=__webpack_require__("../../node_modules/react/index.js"),MapStyles=__webpack_require__("./src/data/MapStyles.json"),build=__webpack_require__("../geospatial/build/index.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var PlaceMarker=function PlaceMarker(props){var _useState2=_slicedToArray((0,react.useState)(),2),place=_useState2[0],setPlace=_useState2[1],onLoad=(0,react.useCallback)((function(data){var featureCollection={type:"FeatureCollection",features:[_objectSpread(_objectSpread({},data),{},{properties:_objectSpread(_objectSpread({},data.properties),{},{record_id:data.record_id})})]};setPlace(featureCollection)}),[]);return(0,react.useEffect)((function(){fetch(props.url).then((function(res){return res.json()})).then(onLoad)}),[props.url]),place?(0,jsx_runtime.jsx)(build.LocationMarker,{data:place,map:props.map}):null};PlaceMarker.displayName="PlaceMarker",PlaceMarker.__docgenInfo={description:"This component renders a map marker for a given Core Data Place record.",displayName:"PlaceMarker",methods:[],props:{map:{required:!1,flowType:{name:"any"},description:"TODO: Comment me."},url:{required:!0,flowType:{name:"string"},description:"The URL of the Core Data place record."}}};const components_PlaceMarker=PlaceMarker;PlaceMarker.__docgenInfo={description:"This component renders a map marker for a given Core Data Place record.",methods:[],displayName:"PlaceMarker",props:{map:{required:!1,flowType:{name:"any"},description:"TODO: Comment me."},url:{required:!0,flowType:{name:"string"},description:"The URL of the Core Data place record."}}};const PlaceMarker_stories={title:"Components/Core Data/PlaceMarker",component:components_PlaceMarker};var Default=function Default(){return(0,jsx_runtime.jsx)(peripleo_es.Nz,{children:(0,jsx_runtime.jsxs)(peripleo_maplibre_es.D5,{style:MapStyles,children:[(0,jsx_runtime.jsx)(peripleo_es.ZX,{position:"topright",children:(0,jsx_runtime.jsx)(peripleo_maplibre_es.LG,{})}),(0,jsx_runtime.jsx)(components_PlaceMarker,{url:"https://core-data-cloud-staging-2c51db0617a5.herokuapp.com/core_data/public/places/3aaf97a4-7052-4e2c-9056-4f4146ef0c87?project_ids=10"})]})})};Default.displayName="Default",Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <Peripleo>\n    <Map style={mapStyle}>\n      <Controls position='topright'>\n        <Zoom />\n      </Controls>\n      <PlaceMarker url={PLACE_URL}\n    // map={map}\n    />\n    </Map>\n  </Peripleo>",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../geospatial/build/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}!function(){"use strict";var e={743:function _(e,t,r){r.d(t,{Z:function Z(){return l}});var n=r(705),o=r.n(n),a=r(497),i=r(372),l=(0,a.forwardRef)((function(e,t){var r=(0,i.useControl)((function(){return new(o())(e)}),(function(t){var r=t.map;r.on("draw.create",e.onCreate),r.on("draw.update",e.onUpdate),r.on("draw.delete",e.onDelete)}),(function(t){var r=t.map;r.off("draw.create",e.onCreate),r.off("draw.update",e.onUpdate),r.off("draw.delete",e.onDelete)}),{position:e.position});return(0,a.useImperativeHandle)(t,(function(){return r}),[r]),null}))},334:function _(e,t,r){r.d(t,{Z:function Z(){return m}});var n=r(497),o=r.n(n),a=r(372),i=r(681),l=r.n(i);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c="#CC3333",f="#990000",s={"fill-color":c,"fill-opacity":.2},p={"line-color":f,"line-opacity":.6},y={"circle-radius":["interpolate",["linear"],["number",["get","point_count"],1],0,4,10,14],"circle-stroke-width":1,"circle-color":c,"circle-stroke-color":f},m=function m(e){var t,i=(2,function(e){if(Array.isArray(e))return e}(t=(0,n.useState)(e.data))||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],u=!0,c=!1;try{for(a=(r=r.call(e)).next,0;!(u=(n=a.call(r)).done)&&(l.push(n.value),2!==l.length);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(t)||function(e,t){if(e){if("string"==typeof e)return u(e,2);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,2):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=i[0],f=i[1],m=(0,n.useCallback)((function(e,t){return l().defaults(e,t)}),[]),d=(0,n.useMemo)((function(){return m(e.fillStyle,s)}),[m,e.fillStyle]),b=(0,n.useMemo)((function(){return m(e.lineStyle,p)}),[m,e.lineStyle]),v=(0,n.useMemo)((function(){return m(e.pointStyle,y)}),[m,e.pointStyle]);return(0,n.useEffect)((function(){e.url&&fetch(e.url).then((function(e){return e.json()})).then((function(e){return f(e)}))}),[e.url]),o().createElement(a.Source,{data:c,type:"geojson"},o().createElement(a.Layer,{filter:["!=","$type","Point"],paint:d,type:"fill"}),o().createElement(a.Layer,{filter:["!=","$type","Point"],paint:b,type:"line"}),o().createElement(a.Layer,{filter:["==","$type","Point"],paint:v,type:"circle"}))}},181:function _(e,t,r){r.d(t,{Z:function Z(){return m}});var n=r(497),o=r.n(n),a=__webpack_require__("../../node_modules/react-icons/bs/index.js"),i=__webpack_require__("../../node_modules/react-icons/io5/index.js"),l=r(681),u=r.n(l),c=r(325);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],u=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,t)||s(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var y=function y(e){var t=f((0,n.useState)(0),2),r=t[0],l=t[1],y=f((0,n.useState)(),2),m=y[0],d=y[1],b=f((0,n.useState)(!1),2),v=b[0],h=b[1],g=(0,n.useRef)(),S=(0,n.useCallback)((function(t){return e.names&&e.names.length>t&&e.names[t]}),[e.names]),w=(0,n.useCallback)((function(e){return u().includes(m,e)}),[m]),O=(0,n.useMemo)((function(){return n.Children.toArray(e.children)}),[e.children]),j=(0,n.useMemo)((function(){return u().filter(O,(function(e,t){return w(t)}))}),[O,w]),E=(0,n.useCallback)((function(e){var t,r;t=w(e)?u().without(m,e):[].concat(function(e){if(Array.isArray(e))return p(e)}(r=m)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||s(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[e]),d(t)}),[w,m]);return(0,n.useEffect)((function(){d(u().times(O.length,(function(e){return e})))}),[]),(0,n.useEffect)((function(){var e=g.current;if(e&&e._canvas){var t=g.current._canvas.offsetHeight;l(void 0===t?0:t)}}),[g.current]),u().isEmpty(O)?null:o().createElement(o().Fragment,null,o().createElement(c.Z,{mapRef:g,position:e.position},o().createElement("button",{className:"mapbox-gl-draw_ctrl-draw-btn layer-button",onClick:function onClick(){return h((function(e){return!e}))},type:"button"},o().createElement(a.BsStack,{size:"1.25em"})),v&&o().createElement("div",{className:"layer-menu",style:{maxHeight:"calc(".concat(r,"px - ").concat(30,"px)")}},o().createElement("div",{className:"menu"},u().map(O,(function(e,t){return o().createElement("div",{"aria-selected":w(t),className:"option",role:"option",onClick:function onClick(){return E(t)},onKeyDown:function onKeyDown(){return E(t)},tabIndex:t},o().createElement("div",{className:"checkmark-container"},w(t)&&o().createElement(i.IoCheckmarkOutline,{size:"1em"})),S(t))}))))),j)};y.defaultProps={position:"top-left"};var m=y},698:function _(e,t,r){r.d(t,{Z:function Z(){return u}});var n=r(523),o=r(497),a=r.n(o),i=r(231),l=function l(e){return(0,o.useEffect)((function(){if(e.map&&e.data){var t=i.Z.getBoundingBox(e.data,e.buffer);e.map.fitBounds(t)}}),[e.buffer,e.data,e.map]),a().createElement(a().Fragment,null,a().createElement(n.PulsingMarkerLayer,{id:"current",data:e.data}),a().createElement(n.MixedGeoJSONLayer,{id:"current",data:e.data,fillStyle:e.fillStyle,strokeStyle:e.strokeStyle,pointStyle:e.pointStyle}))};l.defaultProps={buffer:2,fillStyle:{type:"fill",paint:{"fill-color":"#ff623b","fill-opacity":.2}},pointStyle:{type:"circle",paint:{"circle-radius":["interpolate",["linear"],["number",["get","point_count"],1],0,4,10,14],"circle-stroke-width":1,"circle-color":["case",["boolean",["feature-state","hover"],!1],"#3b62ff","#ff623b"],"circle-stroke-color":"#8d260c"}},strokeStyle:{type:"line",paint:{"line-color":"#ff623b","line-opacity":.6}}};var u=l},325:function _(e,t,r){r.d(t,{Z:function Z(){return y}}),r(203);var n=r(497),o=__webpack_require__("../../node_modules/react-dom/index.js"),a=r(372),i=r(681),l=r.n(i);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e){return c="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(e){return _typeof(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof(e)},c(e)}function s(e){var t=function(e,t){if("object"!=c(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==c(t)?t:String(t)}var p=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._map=null,this._container=void 0,this._redraw=void 0,this._redraw=t}var t,r;return t=e,(r=[{key:"onAdd",value:function value(e){return this._map=e,e.on("move",this._redraw),this._container=document.createElement("div"),this._container.className="maplibregl-ctrl-group maplibregl-ctrl",this._redraw(),this._container}},{key:"onRemove",value:function value(){this._container.remove(),this._map.off("move",this._redraw),this._map=null}},{key:"getMap",value:function value(){return this._map}},{key:"getElement",value:function value(){return this._container}}])&&function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,s(n.key),n)}}(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),y=function y(e){var t,i=(t=(0,n.useState)(0),2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],u=!0,c=!1;try{for(a=(r=r.call(e)).next,0;!(u=(n=a.call(r)).done)&&(l.push(n.value),2!==l.length);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(t)||function(e,t){if(e){if("string"==typeof e)return u(e,2);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,2):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[1],c=(0,n.useCallback)((function(){return i((function(e){return e+1}))}),[]),f=(0,a.useControl)((function(){return new p(c)}),{position:e.position}),s=f.getMap(),y=n.Children.map(l().compact(n.Children.toArray(e.children)),(function(e){return(0,n.cloneElement)(e,{map:s})}));return(0,n.useEffect)((function(){e.mapRef&&(e.mapRef.current=s)}),[s,e.mapRef]),s&&(0,o.createPortal)(y,f.getElement())}},944:function _(e,t,r){r.d(t,{Z:function Z(){return w}});var n=r(705),o=r.n(n),a=r(799),i=r(203),l=r.n(i),u=r(497),c=r.n(u),f=r(372),s=r.n(f),p=r(681),y=r.n(p),m=r(743),d=r(231);function b(e){return b="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(e){return _typeof(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof(e)},b(e)}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],u=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}o().constants.classes.CONTROL_BASE="maplibregl-ctrl",o().constants.classes.CONTROL_PREFIX="maplibregl-ctrl-",o().constants.classes.CONTROL_GROUP="maplibregl-ctrl-group";var S=function S(e){var t=h((0,u.useState)(!1),2),r=t[0],n=t[1],o=(0,u.useRef)(),i=(0,u.useRef)(),f=(0,u.useCallback)((function(){e.onChange(o.current.getAll())}),[e.onChange]),p=(0,u.useMemo)((function(){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){var n,o,a,i;n=e,o=t,a=r[t],i=function(e,t){if("object"!=b(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==b(i)?i:String(i))in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({height:500,width:"100%"},e.style||{})}),[e.style]);return(0,u.useEffect)((function(){if(r&&e.data){var t=d.Z.getBoundingBox(e.data,e.buffer);if(y().every(t,y().isFinite)){var n=h(t,4),l=[[n[0],n[1]],[n[2],n[3]]];i.current.fitBounds(l,{duration:e.zoomDuration})}"GeometryCollection"===e.data.type?y().each(e.data.geometries,(function(e){o.current.add((0,a.feature)(e))})):o.current.add(e.data)}}),[r,e.data]),c().createElement(s(),{attributionControl:!1,onLoad:function onLoad(){return n(!0)},mapLib:l(),ref:i,style:p,mapStyle:e.mapStyle},c().createElement(m.Z,{ref:o,controls:{line_string:!0,point:!0,polygon:!0,trash:!0},displayControlsDefault:!1,onCreate:f,onUpdate:f,onDelete:f,position:"bottom-left"}),e.children)};S.defaultProps={buffer:2,zoomDuration:1e3};var w=S},990:function _(e,t,r){r.d(t,{Z:function Z(){return l}});var n=r(497),o=r.n(n),a=r(372),i=function i(e){return o().createElement(a.Source,{tileSize:e.tileSize,tiles:[e.url],type:"raster"},o().createElement(a.Layer,{type:"raster",paint:{"raster-opacity":e.opacity},minzoom:e.minzoom,maxzoom:e.maxzoom}))};i.defaultProps={maxzoom:22,minzoom:0,opacity:.7,tileSize:256};var l=i},231:function _(e,t,r){r.d(t,{Z:function Z(){return o}});var n=r(799),o={getBoundingBox:function getBoundingBox(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=(0,n.bbox)(e),a=(0,n.bboxPolygon)(o);return t=r?(0,n.buffer)(a,r,{units:"miles"}):a,(0,n.bbox)(t)}}},705:function _(e){e.exports=__webpack_require__("../../node_modules/@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.js")},523:function _(e){e.exports=__webpack_require__("../../node_modules/@peripleo/maplibre/dist/peripleo-maplibre.cjs.js")},799:function _(e){e.exports=__webpack_require__("../../node_modules/@turf/turf/dist/js/index.js")},203:function _(e){e.exports=__webpack_require__("../../node_modules/maplibre-gl/dist/maplibre-gl.js")},372:function _(e){e.exports=__webpack_require__("../../node_modules/react-map-gl/dist/esm/index.js")},681:function _(e){e.exports=__webpack_require__("../../node_modules/underscore/modules/index-all.js")},497:function _(e){e.exports=__webpack_require__("../../node_modules/react/index.js")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(function(){r.r(n),r.d(n,{DrawControl:function DrawControl(){return e.Z},GeoJsonLayer:function GeoJsonLayer(){return t.Z},LayerMenu:function LayerMenu(){return o.Z},LocationMarker:function LocationMarker(){return a.Z},Map:function Map(){return c.Z},MapControl:function MapControl(){return i.Z},MapDraw:function MapDraw(){return l.Z},RasterLayer:function RasterLayer(){return u.Z}});var e=r(743),t=r(334),o=r(181),a=r(698),i=r(325),l=r(944),u=r(990),c=r(231),f=r(523),s={},_loop=function _loop(_e){["default","DrawControl","GeoJsonLayer","LayerMenu","LocationMarker","MapControl","MapDraw","RasterLayer","Map"].indexOf(_e)<0&&(s[_e]=function(){return f[_e]})};for(var _e in f)_loop(_e);r.d(n,s)})(),module.exports=n}()},"./src/data/MapStyles.json":module=>{"use strict";module.exports=JSON.parse('{"version":8,"sources":{"osm":{"type":"raster","tiles":["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],"tileSize":256,"attribution":"&copy; OpenStreetMap Contributors","maxzoom":19}},"layers":[{"id":"osm","type":"raster","source":"osm"}]}')}}]);