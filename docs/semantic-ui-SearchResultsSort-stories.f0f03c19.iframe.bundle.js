"use strict";(self.webpackChunk_performant_software_storybook=self.webpackChunk_performant_software_storybook||[]).push([[1019],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_OPEUWD42.aD});var chunk_OPEUWD42=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs")},"./src/semantic-ui/SearchResultsSort.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SearchResultsSort_stories});var dist=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),index_all=__webpack_require__("../../node_modules/underscore/modules/index-all.js"),DropdownButton=__webpack_require__("../semantic-ui/src/components/DropdownButton.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_excluded=["useSortBy"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var SearchResultsSort=function SearchResultsSort(_ref){var _useSortBy=(0,_ref.useSortBy)(_objectWithoutProperties(_ref,_excluded)),currentRefinement=_useSortBy.currentRefinement,options=_useSortBy.options,refine=_useSortBy.refine,_ref2=index_all.default.findWhere(options,{value:currentRefinement})||index_all.default.first(options),label=_ref2.label,value=_ref2.value,icon=(0,react.useMemo)((function(){return value&&value.endsWith("desc")?"sort alphabet down":"sort alphabet up"}),[value]);return(0,jsx_runtime.jsx)(DropdownButton.Z,{basic:!0,icon,onChange:function onChange(e,data){return refine(data.value)},options:index_all.default.map(options,(function(option){return{key:option.value,value:option.value,text:option.description||option.label}})),text:label,value})};SearchResultsSort.displayName="SearchResultsSort",SearchResultsSort.__docgenInfo={description:"",displayName:"SearchResultsSort",methods:[],props:{useSortBy:{required:!0,flowType:{name:"signature",type:"function",raw:"(props: any) => ({\n  currentRefinement: string,\n  options: Array<{ label: string, value: string}>,\n  refine: (value: string) => void\n})",signature:{arguments:[{name:"props",type:{name:"any"}}],return:{name:"signature",type:"object",raw:"{\n  currentRefinement: string,\n  options: Array<{ label: string, value: string}>,\n  refine: (value: string) => void\n}",signature:{properties:[{key:"currentRefinement",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string, value: string}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Array<{ label: string, value: string}>",required:!0}},{key:"refine",value:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{name:"value",type:{name:"string"}}],return:{name:"void"}},required:!0}}]}}}},description:"Instant-Search hook to provide sort by values."},items:{required:!0,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string, value: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Array<{ label: string, value: string }>"},description:"A list of label/value objects to use as the dropdown options."}}};const components_SearchResultsSort=SearchResultsSort;var _Default$parameters,_Default$parameters2;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const SearchResultsSort_stories={title:"Components/Semantic UI/SearchResultsSort",component:components_SearchResultsSort};var Default=function Default(){return(0,jsx_runtime.jsx)("div",{style:{minHeight:"400px"},children:(0,jsx_runtime.jsx)(components_SearchResultsSort,{items:[{label:"Make",value:"make"},{label:"Model",value:"model"},{label:"Year",value:"year"}],useSortBy:function useSortBy(_ref){return{currentRefinement:"make",options:_ref.items,refine:(0,dist.aD)("refine")}}})})};Default.displayName="Default",Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"() => <div style={{\n  minHeight: '400px'\n}}>\n    <SearchResultsSort items={[{\n    label: 'Make',\n    value: 'make'\n  }, {\n    label: 'Model',\n    value: 'model'\n  }, {\n    label: 'Year',\n    value: 'year'\n  }]} useSortBy={({\n    items\n  }) => ({\n    currentRefinement: 'make',\n    options: items,\n    refine: action('refine')\n  })} />\n  </div>"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})});var __namedExportsOrder=["Default"]}}]);