(self.webpackChunk_performant_software_storybook=self.webpackChunk_performant_software_storybook||[]).push([[6285],{"./src/semantic-ui/LazyDocument.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CardContent:()=>CardContent,Default:()=>Default,ListContent:()=>ListContent,PreviewError:()=>PreviewError,Upload:()=>Upload,WithPreview:()=>WithPreview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_WithPreview$paramete,_WithPreview$paramete2,_Upload$parameters,_Upload$parameters2,_CardContent$paramete,_CardContent$paramete2,_ListContent$paramete,_ListContent$paramete2,_PreviewError$paramet,_PreviewError$paramet2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/views/Card/Card.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/views/Item/Item.js"),underscore__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/underscore/modules/index-all.js"),_semantic_ui_src_components_FileInputButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../semantic-ui/src/components/FileInputButton.js"),_assets_test_image_jpg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/assets/test-image.jpg"),_semantic_ui_src_components_LazyDocument__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../semantic-ui/src/components/LazyDocument.js"),_assets_portrait_test_image_jpg__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/assets/portrait-test-image.jpg"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Semantic UI/LazyDocument"};var Default=function Default(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_semantic_ui_src_components_LazyDocument__WEBPACK_IMPORTED_MODULE_4__.Z,{src:_assets_test_image_jpg__WEBPACK_IMPORTED_MODULE_3__})};Default.displayName="Default";var WithPreview=function WithPreview(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_semantic_ui_src_components_LazyDocument__WEBPACK_IMPORTED_MODULE_4__.Z,{image:{alt:"Image"},preview:_assets_test_image_jpg__WEBPACK_IMPORTED_MODULE_3__,src:_assets_test_image_jpg__WEBPACK_IMPORTED_MODULE_3__})};WithPreview.displayName="WithPreview";var Upload=function Upload(){var _useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),2),file=_useState2[0],setFile=_useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_semantic_ui_src_components_LazyDocument__WEBPACK_IMPORTED_MODULE_4__.Z,{pdf:file&&"application/pdf"===file.type,src:file&&URL.createObjectURL(file),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_semantic_ui_src_components_FileInputButton__WEBPACK_IMPORTED_MODULE_2__.Z,{content:"Upload",icon:"cloud upload",onSelection:function onSelection(files){return setFile(underscore__WEBPACK_IMPORTED_MODULE_1__.default.first(files))},primary:!0})})};Upload.displayName="Upload";var CardContent=function CardContent(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Z.Group,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_semantic_ui_src_components_LazyDocument__WEBPACK_IMPORTED_MODULE_4__.Z,{image:{alt:"Test Image"},preview:_assets_test_image_jpg__WEBPACK_IMPORTED_MODULE_3__,src:_assets_test_image_jpg__WEBPACK_IMPORTED_MODULE_3__}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Z.Content,{header:"Test 1"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_semantic_ui_src_components_LazyDocument__WEBPACK_IMPORTED_MODULE_4__.Z,{image:{alt:"Portrait Image"},preview:_assets_portrait_test_image_jpg__WEBPACK_IMPORTED_MODULE_5__,src:_assets_portrait_test_image_jpg__WEBPACK_IMPORTED_MODULE_5__}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Z.Content,{header:"Test 2"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_semantic_ui_src_components_LazyDocument__WEBPACK_IMPORTED_MODULE_4__.Z,{image:{alt:"Last Image"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Z.Content,{header:"Test 3"})]})]})};CardContent.displayName="CardContent";var ListContent=function ListContent(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Z.Group,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Z.Image,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_semantic_ui_src_components_LazyDocument__WEBPACK_IMPORTED_MODULE_4__.Z,{image:{alt:"First Image"},preview:_assets_test_image_jpg__WEBPACK_IMPORTED_MODULE_3__,src:_assets_test_image_jpg__WEBPACK_IMPORTED_MODULE_3__})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Z.Content,{header:"Test 1"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Z.Image,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_semantic_ui_src_components_LazyDocument__WEBPACK_IMPORTED_MODULE_4__.Z,{image:{alt:"Portrait Image"},preview:_assets_portrait_test_image_jpg__WEBPACK_IMPORTED_MODULE_5__,src:_assets_portrait_test_image_jpg__WEBPACK_IMPORTED_MODULE_5__})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Z.Content,{image:{alt:"Last Image"},header:"Test 2"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Z.Image,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_semantic_ui_src_components_LazyDocument__WEBPACK_IMPORTED_MODULE_4__.Z,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Z.Content,{header:"Test 3"})]})]})};ListContent.displayName="ListContent";var PreviewError=function PreviewError(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_semantic_ui_src_components_LazyDocument__WEBPACK_IMPORTED_MODULE_4__.Z,{preview:"/path/to/doc.preview.jpg",src:"/path/to/doc.txt"})};PreviewError.displayName="PreviewError",Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"() => <LazyDocument src={image} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),WithPreview.parameters=_objectSpread(_objectSpread({},WithPreview.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithPreview$paramete=WithPreview.parameters)||void 0===_WithPreview$paramete?void 0:_WithPreview$paramete.docs),{},{source:_objectSpread({originalSource:"() => <LazyDocument image={{\n  alt: 'Image'\n}} preview={image} src={image} />"},null===(_WithPreview$paramete2=WithPreview.parameters)||void 0===_WithPreview$paramete2||null===(_WithPreview$paramete2=_WithPreview$paramete2.docs)||void 0===_WithPreview$paramete2?void 0:_WithPreview$paramete2.source)})}),Upload.parameters=_objectSpread(_objectSpread({},Upload.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Upload$parameters=Upload.parameters)||void 0===_Upload$parameters?void 0:_Upload$parameters.docs),{},{source:_objectSpread({originalSource:"() => {\n  const [file, setFile] = useState();\n  return <LazyDocument pdf={file && file.type === 'application/pdf'} src={file && URL.createObjectURL(file)}>\n      <FileInputButton content='Upload' icon='cloud upload' onSelection={files => setFile(_.first(files))} primary />\n    </LazyDocument>;\n}"},null===(_Upload$parameters2=Upload.parameters)||void 0===_Upload$parameters2||null===(_Upload$parameters2=_Upload$parameters2.docs)||void 0===_Upload$parameters2?void 0:_Upload$parameters2.source)})}),CardContent.parameters=_objectSpread(_objectSpread({},CardContent.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_CardContent$paramete=CardContent.parameters)||void 0===_CardContent$paramete?void 0:_CardContent$paramete.docs),{},{source:_objectSpread({originalSource:"() => <Card.Group>\n    <Card>\n      <LazyDocument image={{\n      alt: 'Test Image'\n    }} preview={image} src={image} />\n      <Card.Content header='Test 1' />\n    </Card>\n    <Card>\n      <LazyDocument image={{\n      alt: 'Portrait Image'\n    }} preview={portraitImage} src={portraitImage} />\n      <Card.Content header='Test 2' />\n    </Card>\n    <Card>\n      <LazyDocument image={{\n      alt: 'Last Image'\n    }} />\n      <Card.Content header='Test 3' />\n    </Card>\n  </Card.Group>"},null===(_CardContent$paramete2=CardContent.parameters)||void 0===_CardContent$paramete2||null===(_CardContent$paramete2=_CardContent$paramete2.docs)||void 0===_CardContent$paramete2?void 0:_CardContent$paramete2.source)})}),ListContent.parameters=_objectSpread(_objectSpread({},ListContent.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ListContent$paramete=ListContent.parameters)||void 0===_ListContent$paramete?void 0:_ListContent$paramete.docs),{},{source:_objectSpread({originalSource:"() => <Item.Group>\n    <Item>\n      <Item.Image>\n        <LazyDocument image={{\n        alt: 'First Image'\n      }} preview={image} src={image} />\n      </Item.Image>\n      <Item.Content header='Test 1' />\n    </Item>\n    <Item>\n      <Item.Image>\n        <LazyDocument image={{\n        alt: 'Portrait Image'\n      }} preview={portraitImage} src={portraitImage} />\n      </Item.Image>\n      <Item.Content image={{\n      alt: 'Last Image'\n    }} header='Test 2' />\n    </Item>\n    <Item>\n      <Item.Image>\n        <LazyDocument />\n      </Item.Image>\n      <Item.Content header='Test 3' />\n    </Item>\n  </Item.Group>"},null===(_ListContent$paramete2=ListContent.parameters)||void 0===_ListContent$paramete2||null===(_ListContent$paramete2=_ListContent$paramete2.docs)||void 0===_ListContent$paramete2?void 0:_ListContent$paramete2.source)})}),PreviewError.parameters=_objectSpread(_objectSpread({},PreviewError.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_PreviewError$paramet=PreviewError.parameters)||void 0===_PreviewError$paramet?void 0:_PreviewError$paramet.docs),{},{source:_objectSpread({originalSource:"() => <LazyDocument preview='/path/to/doc.preview.jpg' src='/path/to/doc.txt' />"},null===(_PreviewError$paramet2=PreviewError.parameters)||void 0===_PreviewError$paramet2||null===(_PreviewError$paramet2=_PreviewError$paramet2.docs)||void 0===_PreviewError$paramet2?void 0:_PreviewError$paramet2.source)})});var __namedExportsOrder=["Default","WithPreview","Upload","CardContent","ListContent","PreviewError"]},"../semantic-ui/src/components/DownloadButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),react_uuid__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react-uuid/uuid.js"),react_uuid__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_uuid__WEBPACK_IMPORTED_MODULE_1__),semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js"),_i18n_i18n__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../semantic-ui/src/i18n/i18n.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var DownloadButton=function DownloadButton(props){var className=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){var classNames=["ui","button"];return props.basic&&classNames.push("basic"),props.className&&classNames.push.apply(classNames,_toConsumableArray(props.className.split(" "))),props.color&&classNames.push(props.color),props.compact&&classNames.push("compact"),props.primary&&classNames.push("primary"),props.secondary&&classNames.push("secondary"),props.size&&classNames.push(props.size),classNames.join(" ")}),[props.basic,props.color]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a",{className,download:props.filename||react_uuid__WEBPACK_IMPORTED_MODULE_1___default()(),href:props.url,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Z,{name:"cloud download"}),_i18n_i18n__WEBPACK_IMPORTED_MODULE_2__.Z.t("Common.buttons.download")]})};DownloadButton.displayName="DownloadButton",DownloadButton.__docgenInfo={description:"",displayName:"DownloadButton",methods:[],props:{basic:{required:!1,flowType:{name:"boolean"},description:""},className:{required:!1,flowType:{name:"string"},description:""},color:{required:!1,flowType:{name:"string"},description:""},compact:{required:!1,flowType:{name:"boolean"},description:""},filename:{required:!1,flowType:{name:"string"},description:""},primary:{required:!1,flowType:{name:"boolean"},description:""},size:{required:!1,flowType:{name:"string"},description:""},secondary:{required:!1,flowType:{name:"boolean"},description:""},url:{required:!0,flowType:{name:"string"},description:""}}};const __WEBPACK_DEFAULT_EXPORT__=DownloadButton},"../semantic-ui/src/components/FileInputButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/elements/Button/Button.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_excluded=["onSelection","multiple"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var FileInputButton=function FileInputButton(_ref){var onSelection=_ref.onSelection,multiple=_ref.multiple,buttonProps=_objectWithoutProperties(_ref,_excluded),fileInputRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Z,_objectSpread(_objectSpread({},buttonProps),{},{onClick:function onClick(){return fileInputRef.current&&fileInputRef.current.click()}})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{ref:fileInputRef,type:"file",multiple,onChange:function onChange(e){return onSelection(function toArray(fileList){for(var array=[],i=0;i<fileList.length;i+=1)array.push(fileList.item(i));return array}(e.target.files))},style:{display:"none"}})]})};FileInputButton.defaultProps={multiple:!1},FileInputButton.__docgenInfo={description:"This component is used to allow a user to upload one or more files\nfrom their file system. This component also accepts\nall of the props of the Semantic UI <code>Button</code> component.",displayName:"FileInputButton",methods:[],props:{multiple:{required:!1,flowType:{name:"boolean"},description:"Whether to allow the user to select multiple files.",defaultValue:{value:"false",computed:!1}},onSelection:{required:!0,flowType:{name:"signature",type:"function",raw:"(files: Array<File>) => void",signature:{arguments:[{name:"files",type:{name:"Array",elements:[{name:"File"}],raw:"Array<File>"}}],return:{name:"void"}}},description:"What to do when the users selects a file or files."}}};const __WEBPACK_DEFAULT_EXPORT__=FileInputButton},"../semantic-ui/src/components/LazyDocument.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>src_components_LazyDocument});var react=__webpack_require__("../../node_modules/react/index.js"),pdf=__webpack_require__("../../node_modules/pdfjs-dist/build/pdf.js"),Document=__webpack_require__("../../node_modules/react-pdf/dist/esm/Document.js"),Page=__webpack_require__("../../node_modules/react-pdf/dist/esm/Page.js"),Visibility=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/behaviors/Visibility/Visibility.js"),Loader=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/elements/Loader/Loader.js"),Transition=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/modules/Transition/Transition.js"),Dimmer=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/modules/Dimmer/Dimmer.js"),Segment=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/elements/Segment/Segment.js"),Image=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/elements/Image/Image.js"),Icon=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js"),DownloadButton=__webpack_require__("../semantic-ui/src/components/DownloadButton.js"),LazyLoader=__webpack_require__("../semantic-ui/src/components/LazyLoader.js"),injectStylesIntoStyleTag=(__webpack_require__("../../node_modules/react-pdf/dist/esm/Page/AnnotationLayer.css"),__webpack_require__("../../node_modules/react-pdf/dist/esm/Page/TextLayer.css"),__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),LazyDocument=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../semantic-ui/src/components/LazyDocument.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(LazyDocument.Z,options);LazyDocument.Z&&LazyDocument.Z.locals&&LazyDocument.Z.locals;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}pdf.GlobalWorkerOptions.workerSrc="//unpkg.com/pdfjs-dist@".concat(pdf.version,"/build/pdf.worker.min.js");var LazyDocument_LazyDocument=function LazyDocument(props){var _useState2=_slicedToArray((0,react.useState)(!1),2),dimmer=_useState2[0],setDimmer=_useState2[1],_useState4=_slicedToArray((0,react.useState)(!1),2),error=_useState4[0],setError=_useState4[1],_useState6=_slicedToArray((0,react.useState)(!props.preview),2),loaded=_useState6[0],setLoaded=_useState6[1],_useState8=_slicedToArray((0,react.useState)(!1),2),visible=_useState8[0],setVisible=_useState8[1],getClassNames=(0,react.useCallback)((function(){var defaultClass=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,classNames=[];return defaultClass&&classNames.push(defaultClass),loaded||classNames.push("hidden"),classNames.join(" ")}),[loaded]);return visible?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Transition.Z,{duration:props.duration,visible:!0,children:(0,jsx_runtime.jsxs)(Dimmer.Z.Dimmable,{as:Segment.Z,className:"lazy-document",compact:!0,onBlur:function onBlur(){return setDimmer(!1)},onMouseEnter:function onMouseEnter(){return setDimmer(!0)},onMouseLeave:function onMouseLeave(){return setDimmer(!1)},children:[!loaded&&(0,jsx_runtime.jsx)(LazyLoader.Z,{active:!0,size:props.size}),!error&&props.preview&&(0,jsx_runtime.jsx)(Image.Z,_objectSpread(_objectSpread({},props.image),{},{className:getClassNames(),onError:function onError(){setError(!0),setLoaded(!0)},onLoad:function onLoad(){setError(!1),setLoaded(!0)},src:props.preview,size:props.size})),!error&&loaded&&!props.preview&&props.src&&props.pdf&&(0,jsx_runtime.jsx)(Image.Z,_objectSpread(_objectSpread({},props.image),{},{className:getClassNames(),size:props.size,children:(0,jsx_runtime.jsx)(Document.Z,{file:props.src,onLoadError:function onLoadError(e){return console.log(e.message)},children:(0,jsx_runtime.jsx)(Page.Z,{pageNumber:1})})})),(error||!props.preview&&!(props.src&&props.pdf))&&(0,jsx_runtime.jsx)(Image.Z,_objectSpread(_objectSpread({},props.image),{},{className:getClassNames("placeholder-image"),size:props.size,children:(0,jsx_runtime.jsx)(Icon.Z,{name:"file alternate outline",size:"big"})})),(props.download||props.src||props.children)&&props.dimmable&&(0,jsx_runtime.jsx)(Dimmer.Z,{active:dimmer,children:(0,jsx_runtime.jsxs)("div",{className:"buttons",children:[props.download&&(0,jsx_runtime.jsx)(DownloadButton.Z,{primary:!0,url:props.download||props.src}),props.children]})})]})})}):(0,jsx_runtime.jsx)(Visibility.Z,{as:"span",fireOnMount:!0,onTopVisible:function onTopVisible(){return setVisible(!0)},children:(0,jsx_runtime.jsx)(Loader.Z,{active:!0,inline:"centered",size:props.size})})};LazyDocument_LazyDocument.defaultProps={dimmable:!0,duration:1e3,pdf:!1,preview:void 0,size:"medium",src:void 0},LazyDocument_LazyDocument.__docgenInfo={description:"",displayName:"LazyDocument",methods:[],props:{children:{required:!1,flowType:{name:"Node"},description:""},dimmable:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},download:{required:!1,flowType:{name:"string"},description:""},duration:{required:!1,flowType:{name:"number"},description:"",defaultValue:{value:"1000",computed:!1}},image:{required:!1,flowType:{name:"any"},description:""},pdf:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},preview:{required:!1,flowType:{name:"string",nullable:!0},description:"",defaultValue:{value:"undefined",computed:!0}},size:{required:!1,flowType:{name:"string"},description:"",defaultValue:{value:"'medium'",computed:!1}},src:{required:!1,flowType:{name:"string"},description:"",defaultValue:{value:"undefined",computed:!0}}}};const src_components_LazyDocument=LazyDocument_LazyDocument},"../semantic-ui/src/components/LazyLoader.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>src_components_LazyLoader});__webpack_require__("../../node_modules/react/index.js");var Image=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/elements/Image/Image.js"),Loader=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/elements/Loader/Loader.js"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),LazyLoader=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../semantic-ui/src/components/LazyLoader.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(LazyLoader.Z,options);LazyLoader.Z&&LazyLoader.Z.locals&&LazyLoader.Z.locals;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),LazyLoader_LazyLoader=function LazyLoader(props){return(0,jsx_runtime.jsx)(Image.Z,{className:"lazy-loader",size:props.size,children:(0,jsx_runtime.jsx)(Loader.Z,{active:props.active})})};LazyLoader_LazyLoader.displayName="LazyLoader",LazyLoader_LazyLoader.defaultProps={active:!1,size:"small"},LazyLoader_LazyLoader.__docgenInfo={description:"",displayName:"LazyLoader",methods:[],props:{active:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,flowType:{name:"string"},description:"",defaultValue:{value:"'small'",computed:!1}}}};const src_components_LazyLoader=LazyLoader_LazyLoader},"../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../semantic-ui/src/components/LazyDocument.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".lazy-document.ui.segment {\n  display: inline-block !important;\n  max-width: 100%;\n  padding: 0;\n}\n\n.lazy-document.ui.segment .buttons {\n  display: flex;\n  flex-direction: column;\n}\n\n.lazy-document.ui.segment .buttons .ui.button {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.lazy-document .placeholder-image.ui.image {\n  background-color: #f9fafb;\n  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;\n  padding-top: 20%;\n  padding-bottom: 20%;\n  text-align: center;\n}\n\n.lazy-document .react-pdf__Page__canvas {\n  width: 100% !important;\n  height: 100% !important;\n}\n\n.lazy-document > .image.hidden {\n  display: none;\n}\n","",{version:3,sources:["webpack://./../semantic-ui/src/components/LazyDocument.css"],names:[],mappings:"AAAA;EACE,gCAAgC;EAChC,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,kDAAkD;EAClD,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf",sourcesContent:[".lazy-document.ui.segment {\n  display: inline-block !important;\n  max-width: 100%;\n  padding: 0;\n}\n\n.lazy-document.ui.segment .buttons {\n  display: flex;\n  flex-direction: column;\n}\n\n.lazy-document.ui.segment .buttons .ui.button {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.lazy-document .placeholder-image.ui.image {\n  background-color: #f9fafb;\n  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;\n  padding-top: 20%;\n  padding-bottom: 20%;\n  text-align: center;\n}\n\n.lazy-document .react-pdf__Page__canvas {\n  width: 100% !important;\n  height: 100% !important;\n}\n\n.lazy-document > .image.hidden {\n  display: none;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../semantic-ui/src/components/LazyLoader.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".lazy-loader {\n  background-color: #f9fafb;\n  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;\n  padding-top: 20%;\n  padding-bottom: 20%;\n  text-align: center;\n}\n","",{version:3,sources:["webpack://./../semantic-ui/src/components/LazyLoader.css"],names:[],mappings:"AAAA;EACE,yBAAyB;EACzB,kDAAkD;EAClD,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;AACpB",sourcesContent:[".lazy-loader {\n  background-color: #f9fafb;\n  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;\n  padding-top: 20%;\n  padding-bottom: 20%;\n  text-align: center;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/assets/portrait-test-image.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/portrait-test-image.6709d016.jpg"},"./src/assets/test-image.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/test-image.08d248ac.jpg"},"?6bca":()=>{},"?a1ca":()=>{},"?8821":()=>{},"?23a8":()=>{},"?553e":()=>{},"?55b5":()=>{}}]);