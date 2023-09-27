"use strict";(self.webpackChunk_performant_software_storybook=self.webpackChunk_performant_software_storybook||[]).push([[689],{"./src/semantic-ui/FileInputButton.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/addon-knobs/dist/index.js"),_semantic_ui_src_components_FileInputButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../semantic-ui/src/components/FileInputButton.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Semantic UI/FileInputButton",component:_semantic_ui_src_components_FileInputButton__WEBPACK_IMPORTED_MODULE_2__.Z,decorators:[_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs]};var Default=function Default(){var onSelection=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(item){console.log(item)}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_semantic_ui_src_components_FileInputButton__WEBPACK_IMPORTED_MODULE_2__.Z,{content:"Select a file to upload",icon:"times",multiple:!1,onSelection})};Default.displayName="Default",Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"() => {\n  const onSelection = useCallback(item => {\n    console.log(item);\n  });\n  return <FileInputButton content='Select a file to upload' icon='times' multiple={false} onSelection={onSelection} />;\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})});var __namedExportsOrder=["Default"]},"../semantic-ui/src/components/FileInputButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/elements/Button/Button.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_excluded=["onSelection","multiple"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var FileInputButton=function FileInputButton(_ref){var onSelection=_ref.onSelection,multiple=_ref.multiple,buttonProps=_objectWithoutProperties(_ref,_excluded),fileInputRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Z,_objectSpread(_objectSpread({},buttonProps),{},{onClick:function onClick(){return fileInputRef.current&&fileInputRef.current.click()}})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{ref:fileInputRef,type:"file",multiple,onChange:function onChange(e){return onSelection(function toArray(fileList){for(var array=[],i=0;i<fileList.length;i+=1)array.push(fileList.item(i));return array}(e.target.files))},style:{display:"none"}})]})};FileInputButton.defaultProps={multiple:!1},FileInputButton.__docgenInfo={description:"This component is used to allow a user to upload one or more files\nfrom their file system. This component also accepts\nall of the props of the Semantic UI <code>Button</code> component.",displayName:"FileInputButton",methods:[],props:{multiple:{required:!1,flowType:{name:"boolean"},description:"Whether to allow the user to select multiple files.",defaultValue:{value:"false",computed:!1}},onSelection:{required:!0,flowType:{name:"signature",type:"function",raw:"(files: Array<File>) => void",signature:{arguments:[{name:"files",type:{name:"Array",elements:[{name:"File"}],raw:"Array<File>"}}],return:{name:"void"}}},description:"What to do when the users selects a file or files."}}};const __WEBPACK_DEFAULT_EXPORT__=FileInputButton}}]);