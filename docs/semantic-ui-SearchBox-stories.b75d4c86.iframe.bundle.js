"use strict";(self.webpackChunk_performant_software_storybook=self.webpackChunk_performant_software_storybook||[]).push([[6812],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_OPEUWD42.aD});var chunk_OPEUWD42=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs")},"./src/semantic-ui/SearchBox.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:()=>Controlled,Default:()=>Default,Loading:()=>Loading,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SearchBox_stories});var dist=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),build=__webpack_require__("../shared/build/index.js"),Input=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/elements/Input/Input.js"),Icon=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js"),index_all=__webpack_require__("../../node_modules/underscore/modules/index-all.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_excluded=["useSearchBox"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var SearchBox=function SearchBox(_ref){var useSearchBox=_ref.useSearchBox,props=_objectWithoutProperties(_ref,_excluded),_useSearchBox=useSearchBox(props),query=_useSearchBox.query,refine=_useSearchBox.refine,clear=_useSearchBox.clear,isSearchStalled=_useSearchBox.isSearchStalled,_useState2=_slicedToArray((0,react.useState)(query),2),search=_useState2[0],setSearch=_useState2[1],ref=(0,react.useRef)(),onClear=(0,react.useCallback)((function(){setSearch(""),clear();var instance=ref.current;instance&&instance.focus()}),[clear]),onSearch=(0,react.useCallback)((function(){return refine(search)}),[refine,search]);return(0,jsx_runtime.jsx)(Input.Z,_objectSpread(_objectSpread({},props),{},{"aria-label":"Search",icon:(0,jsx_runtime.jsx)(Icon.Z,{link:!index_all.default.isEmpty(query),name:index_all.default.isEmpty(query)?"search":"times",onClick:onClear}),input:{"aria-label":"search"},loading:isSearchStalled,onChange:function onChange(e,_ref2){var value=_ref2.value;return setSearch(value)},onKeyDown:function onKeyDown(){return build.Timer.clearSearchTimer()},onKeyUp:function onKeyUp(){return build.Timer.setSearchTimer(onSearch)},ref,type:"text",value:search}))};SearchBox.displayName="SearchBox",SearchBox.__docgenInfo={description:"This component is used with the `useSearchBox` function from Instant Search Hooks and renders an input element that\nwhen changed will execute a new query.",displayName:"SearchBox",methods:[],props:{useSearchBox:{required:!0,flowType:{name:"signature",type:"function",raw:"(props: any) => ({\n  query: string,\n  refine: (value: string) => void,\n  clear: () => void,\n  isSearchStalled: boolean\n})",signature:{arguments:[{name:"props",type:{name:"any"}}],return:{name:"signature",type:"object",raw:"{\n  query: string,\n  refine: (value: string) => void,\n  clear: () => void,\n  isSearchStalled: boolean\n}",signature:{properties:[{key:"query",value:{name:"string",required:!0}},{key:"refine",value:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{name:"value",type:{name:"string"}}],return:{name:"void"}},required:!0}},{key:"clear",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"isSearchStalled",value:{name:"boolean",required:!0}}]}}}},description:"Instant-Search hook to provide search box values."}}};const components_SearchBox=SearchBox;var _Default$parameters,_Default$parameters2,_Controlled$parameter,_Controlled$parameter2,_Loading$parameters,_Loading$parameters2;function SearchBox_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function SearchBox_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?SearchBox_stories_ownKeys(Object(source),!0).forEach((function(key){SearchBox_stories_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):SearchBox_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function SearchBox_stories_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function SearchBox_stories_slicedToArray(arr,i){return function SearchBox_stories_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function SearchBox_stories_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function SearchBox_stories_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return SearchBox_stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return SearchBox_stories_arrayLikeToArray(o,minLen)}(arr,i)||function SearchBox_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function SearchBox_stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const SearchBox_stories={title:"Components/Semantic UI/SearchBox",component:components_SearchBox};var Default=function Default(){return(0,jsx_runtime.jsx)(components_SearchBox,{useSearchBox:function useSearchBox(){return{query:"",refine:(0,dist.aD)("refine"),clear:(0,dist.aD)("clear"),isSearchStalled:!1}}})};Default.displayName="Default";var Controlled=function Controlled(){var _useState2=SearchBox_stories_slicedToArray((0,react.useState)(""),2),query=_useState2[0],setQuery=_useState2[1];return(0,jsx_runtime.jsx)(components_SearchBox,{useSearchBox:function useSearchBox(){return{query,refine:function refine(v){return setQuery(v)},clear:function clear(){return setQuery("")},isSearchStalled:!1}}})};Controlled.displayName="Controlled";var Loading=function Loading(){return(0,jsx_runtime.jsx)(components_SearchBox,{useSearchBox:function useSearchBox(){return{query:"",refine:(0,dist.aD)("refine"),clear:(0,dist.aD)("clear"),isSearchStalled:!0}}})};Loading.displayName="Loading",Default.parameters=SearchBox_stories_objectSpread(SearchBox_stories_objectSpread({},Default.parameters),{},{docs:SearchBox_stories_objectSpread(SearchBox_stories_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:SearchBox_stories_objectSpread({originalSource:"() => <SearchBox useSearchBox={() => ({\n  query: '',\n  refine: action('refine'),\n  clear: action('clear'),\n  isSearchStalled: false\n})} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),Controlled.parameters=SearchBox_stories_objectSpread(SearchBox_stories_objectSpread({},Controlled.parameters),{},{docs:SearchBox_stories_objectSpread(SearchBox_stories_objectSpread({},null===(_Controlled$parameter=Controlled.parameters)||void 0===_Controlled$parameter?void 0:_Controlled$parameter.docs),{},{source:SearchBox_stories_objectSpread({originalSource:"() => {\n  const [query, setQuery] = useState('');\n  return <SearchBox useSearchBox={() => ({\n    query,\n    refine: v => setQuery(v),\n    clear: () => setQuery(''),\n    isSearchStalled: false\n  })} />;\n}"},null===(_Controlled$parameter2=Controlled.parameters)||void 0===_Controlled$parameter2||null===(_Controlled$parameter2=_Controlled$parameter2.docs)||void 0===_Controlled$parameter2?void 0:_Controlled$parameter2.source)})}),Loading.parameters=SearchBox_stories_objectSpread(SearchBox_stories_objectSpread({},Loading.parameters),{},{docs:SearchBox_stories_objectSpread(SearchBox_stories_objectSpread({},null===(_Loading$parameters=Loading.parameters)||void 0===_Loading$parameters?void 0:_Loading$parameters.docs),{},{source:SearchBox_stories_objectSpread({originalSource:"() => <SearchBox useSearchBox={() => ({\n  query: '',\n  refine: action('refine'),\n  clear: action('clear'),\n  isSearchStalled: true\n})} />"},null===(_Loading$parameters2=Loading.parameters)||void 0===_Loading$parameters2||null===(_Loading$parameters2=_Loading$parameters2.docs)||void 0===_Loading$parameters2?void 0:_Loading$parameters2.source)})});var __namedExportsOrder=["Default","Controlled","Loading"]}}]);