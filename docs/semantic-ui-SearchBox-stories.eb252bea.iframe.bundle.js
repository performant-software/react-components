"use strict";(self.webpackChunk_performant_software_storybook=self.webpackChunk_performant_software_storybook||[]).push([[6812],{"./src/semantic-ui/SearchBox.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:()=>Controlled,Default:()=>Default,Loading:()=>Loading,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SearchBox_stories});var dist=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),build=__webpack_require__("../shared/build/index.js"),Input=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/elements/Input/Input.js"),Icon=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js"),index_all=__webpack_require__("../../node_modules/underscore/modules/index-all.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["useSearchBox"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var SearchBox=function SearchBox(_ref){var useSearchBox=_ref.useSearchBox,props=_objectWithoutProperties(_ref,_excluded),_useSearchBox=useSearchBox(props),query=_useSearchBox.query,refine=_useSearchBox.refine,clear=_useSearchBox.clear,isSearchStalled=_useSearchBox.isSearchStalled,_useState2=_slicedToArray((0,react.useState)(query),2),search=_useState2[0],setSearch=_useState2[1],ref=(0,react.useRef)(),onClear=(0,react.useCallback)((function(){setSearch(""),clear();var instance=ref.current;instance&&instance.focus()}),[clear]),onSearch=(0,react.useCallback)((function(){return refine(search)}),[refine,search]);return(0,jsx_runtime.jsx)(Input.Z,_objectSpread(_objectSpread({},props),{},{"aria-label":"Search",icon:(0,jsx_runtime.jsx)(Icon.Z,{link:!index_all.default.isEmpty(query),name:index_all.default.isEmpty(query)?"search":"times",onClick:onClear}),input:{"aria-label":"search"},loading:isSearchStalled,onChange:function onChange(e,_ref2){var value=_ref2.value;return setSearch(value)},onKeyDown:function onKeyDown(){return build.Timer.clearSearchTimer()},onKeyUp:function onKeyUp(){return build.Timer.setSearchTimer(onSearch)},ref,type:"text",value:search}))};SearchBox.displayName="SearchBox",SearchBox.__docgenInfo={description:"This component is used with the `useSearchBox` function from Instant Search Hooks and renders an input element that\nwhen changed will execute a new query.",displayName:"SearchBox",methods:[],props:{useSearchBox:{required:!0,flowType:{name:"signature",type:"function",raw:"(props: any) => ({\n  query: string,\n  refine: (value: string) => void,\n  clear: () => void,\n  isSearchStalled: boolean\n})",signature:{arguments:[{name:"props",type:{name:"any"}}],return:{name:"signature",type:"object",raw:"{\n  query: string,\n  refine: (value: string) => void,\n  clear: () => void,\n  isSearchStalled: boolean\n}",signature:{properties:[{key:"query",value:{name:"string",required:!0}},{key:"refine",value:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{name:"value",type:{name:"string"}}],return:{name:"void"}},required:!0}},{key:"clear",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"isSearchStalled",value:{name:"boolean",required:!0}}]}}}},description:"Instant-Search hook to provide search box values."}}};const components_SearchBox=SearchBox;function SearchBox_stories_slicedToArray(arr,i){return function SearchBox_stories_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function SearchBox_stories_iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function SearchBox_stories_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return SearchBox_stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return SearchBox_stories_arrayLikeToArray(o,minLen)}(arr,i)||function SearchBox_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function SearchBox_stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}SearchBox.__docgenInfo={description:"This component is used with the `useSearchBox` function from Instant Search Hooks and renders an input element that\nwhen changed will execute a new query.",methods:[],displayName:"SearchBox",props:{useSearchBox:{required:!0,flowType:{name:"signature",type:"function",raw:"(props: any) => ({\n  query: string,\n  refine: (value: string) => void,\n  clear: () => void,\n  isSearchStalled: boolean\n})",signature:{arguments:[{name:"props",type:{name:"any"}}],return:{name:"signature",type:"object",raw:"{\n  query: string,\n  refine: (value: string) => void,\n  clear: () => void,\n  isSearchStalled: boolean\n}",signature:{properties:[{key:"query",value:{name:"string",required:!0}},{key:"refine",value:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{name:"value",type:{name:"string"}}],return:{name:"void"}},required:!0}},{key:"clear",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"isSearchStalled",value:{name:"boolean",required:!0}}]}}}},description:"Instant-Search hook to provide search box values."}}};const SearchBox_stories={title:"Components/Semantic UI/SearchBox",component:components_SearchBox};var Default=function Default(){return(0,jsx_runtime.jsx)(components_SearchBox,{useSearchBox:function useSearchBox(){return{query:"",refine:(0,dist.aD)("refine"),clear:(0,dist.aD)("clear"),isSearchStalled:!1}}})};Default.displayName="Default";var Controlled=function Controlled(){var _useState2=SearchBox_stories_slicedToArray((0,react.useState)(""),2),query=_useState2[0],setQuery=_useState2[1];return(0,jsx_runtime.jsx)(components_SearchBox,{useSearchBox:function useSearchBox(){return{query,refine:function refine(v){return setQuery(v)},clear:function clear(){return setQuery("")},isSearchStalled:!1}}})};Controlled.displayName="Controlled";var Loading=function Loading(){return(0,jsx_runtime.jsx)(components_SearchBox,{useSearchBox:function useSearchBox(){return{query:"",refine:(0,dist.aD)("refine"),clear:(0,dist.aD)("clear"),isSearchStalled:!0}}})};Loading.displayName="Loading",Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <SearchBox useSearchBox={() => ({\n  query: '',\n  refine: action('refine'),\n  clear: action('clear'),\n  isSearchStalled: false\n})} />",...Default.parameters?.docs?.source}}},Controlled.parameters={...Controlled.parameters,docs:{...Controlled.parameters?.docs,source:{originalSource:"() => {\n  const [query, setQuery] = useState('');\n  return <SearchBox useSearchBox={() => ({\n    query,\n    refine: v => setQuery(v),\n    clear: () => setQuery(''),\n    isSearchStalled: false\n  })} />;\n}",...Controlled.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:"() => <SearchBox useSearchBox={() => ({\n  query: '',\n  refine: action('refine'),\n  clear: action('clear'),\n  isSearchStalled: true\n})} />",...Loading.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Controlled","Loading"]}}]);