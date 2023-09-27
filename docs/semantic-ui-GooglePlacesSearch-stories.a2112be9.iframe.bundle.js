"use strict";(self.webpackChunk_performant_software_storybook=self.webpackChunk_performant_software_storybook||[]).push([[3472],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_OPEUWD42.aD});var chunk_OPEUWD42=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs")},"./src/semantic-ui/GooglePlacesSearch.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomInput:()=>CustomInput,Default:()=>Default,FormInput:()=>FormInput,__namedExportsOrder:()=>__namedExportsOrder,default:()=>GooglePlacesSearch_stories});var react=__webpack_require__("../../node_modules/react/index.js"),dist=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),Input=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/elements/Input/Input.js"),Form=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/collections/Form/Form.js"),esm=__webpack_require__("../../node_modules/@react-google-maps/api/dist/esm.js"),index_all=__webpack_require__("../../node_modules/underscore/modules/index-all.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var GooglePlacesSearch=function GooglePlacesSearch(props){var _useState2=_slicedToArray((0,react.useState)(),2),searchBox=_useState2[0],setSearchBox=_useState2[1],onPlacesChanged=(0,react.useCallback)((function(){if(searchBox){var place=index_all.default.first(searchBox.getPlaces()),location=place.geometry.location,name=place.formatted_address,lat=location.lat(),lng=location.lng();props.onLocationSelection({name,lat,lng,result:place})}}),[searchBox,props.onLocationSelection]);return(0,jsx_runtime.jsx)(esm.StandaloneSearchBox,{onLoad:function onLoad(s){return setSearchBox(s)},onPlacesChanged,children:props.children})};GooglePlacesSearch.displayName="GooglePlacesSearch",GooglePlacesSearch.__docgenInfo={description:"",displayName:"GooglePlacesSearch",methods:[],props:{children:{required:!0,flowType:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"},description:""},onLocationSelection:{required:!0,flowType:{name:"signature",type:"function",raw:"({ lat: number, lng: number }) => void",signature:{arguments:[{name:"",type:{name:"signature",type:"object",raw:"{ lat: number, lng: number }",signature:{properties:[{key:"lat",value:{name:"number",required:!0}},{key:"lng",value:{name:"number",required:!0}}]}}}],return:{name:"void"}}},description:""}}};const components_GooglePlacesSearch=GooglePlacesSearch;var _Default$parameters,_Default$parameters2,_CustomInput$paramete,_CustomInput$paramete2,_FormInput$parameters,_FormInput$parameters2,GoogleScript=__webpack_require__("../shared/src/components/GoogleScript.js"),process=__webpack_require__("../../node_modules/process/browser.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const GooglePlacesSearch_stories={title:"Components/Semantic UI/GooglePlacesSearch"};var Default=function Default(){return(0,jsx_runtime.jsx)(GoogleScript.Z,{googleMapsApiKey:process.env.GOOGLE_MAPS_API_KEY||"",libraries:["places"],children:(0,jsx_runtime.jsx)(components_GooglePlacesSearch,{onLocationSelection:(0,dist.aD)("location-selection"),children:(0,jsx_runtime.jsx)(Input.Z,{type:"text","aria-label":"places-search"})})})};Default.displayName="Default";var CustomInput=function CustomInput(){return(0,jsx_runtime.jsx)(GoogleScript.Z,{googleMapsApiKey:process.env.GOOGLE_MAPS_API_KEY||"",libraries:["places"],children:(0,jsx_runtime.jsx)(components_GooglePlacesSearch,{onLocationSelection:(0,dist.aD)("location-selection"),children:(0,jsx_runtime.jsx)(Input.Z,{type:"text",icon:"world",size:"large","aria-label":"places-search"})})})};CustomInput.displayName="CustomInput";var FormInput=function FormInput(){return(0,jsx_runtime.jsxs)(Form.Z,{children:[(0,jsx_runtime.jsx)(GoogleScript.Z,{googleMapsApiKey:process.env.GOOGLE_MAPS_API_KEY||"",libraries:["places"],children:(0,jsx_runtime.jsx)(Form.Z.Field,{children:(0,jsx_runtime.jsx)(components_GooglePlacesSearch,{onLocationSelection:(0,dist.aD)("location-selection"),children:(0,jsx_runtime.jsx)(Form.Z.Input,{"aria-label":"places-search",label:"Place",type:"text"})})})}),(0,jsx_runtime.jsx)(Form.Z.Input,{"aria-label":"places-search",label:"Description",type:"text"})]})};FormInput.displayName="FormInput",Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"() => <GoogleScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY || ''} libraries={['places']}>\n    <GooglePlacesSearch onLocationSelection={action('location-selection')}>\n      <Input type='text' aria-label='places-search' />\n    </GooglePlacesSearch>\n  </GoogleScript>"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),CustomInput.parameters=_objectSpread(_objectSpread({},CustomInput.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_CustomInput$paramete=CustomInput.parameters)||void 0===_CustomInput$paramete?void 0:_CustomInput$paramete.docs),{},{source:_objectSpread({originalSource:"() => <GoogleScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY || ''} libraries={['places']}>\n    <GooglePlacesSearch onLocationSelection={action('location-selection')}>\n      <Input type='text' icon='world' size='large' aria-label='places-search' />\n    </GooglePlacesSearch>\n  </GoogleScript>"},null===(_CustomInput$paramete2=CustomInput.parameters)||void 0===_CustomInput$paramete2||null===(_CustomInput$paramete2=_CustomInput$paramete2.docs)||void 0===_CustomInput$paramete2?void 0:_CustomInput$paramete2.source)})}),FormInput.parameters=_objectSpread(_objectSpread({},FormInput.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_FormInput$parameters=FormInput.parameters)||void 0===_FormInput$parameters?void 0:_FormInput$parameters.docs),{},{source:_objectSpread({originalSource:"() => <Form>\n    <GoogleScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY || ''} libraries={['places']}>\n      <Form.Field>\n        <GooglePlacesSearch onLocationSelection={action('location-selection')}>\n          <Form.Input aria-label='places-search' label='Place' type='text' />\n        </GooglePlacesSearch>\n      </Form.Field>\n    </GoogleScript>\n    <Form.Input aria-label='places-search' label='Description' type='text' />\n  </Form>"},null===(_FormInput$parameters2=FormInput.parameters)||void 0===_FormInput$parameters2||null===(_FormInput$parameters2=_FormInput$parameters2.docs)||void 0===_FormInput$parameters2?void 0:_FormInput$parameters2.source)})});var __namedExportsOrder=["Default","CustomInput","FormInput"]},"../shared/src/components/GoogleScript.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("../../node_modules/@react-google-maps/api/dist/esm.js").LoadScript}}]);