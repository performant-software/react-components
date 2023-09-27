"use strict";(self.webpackChunk_performant_software_storybook=self.webpackChunk_performant_software_storybook||[]).push([[8251],{"./src/semantic-ui/ViewXML.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomOpener:()=>CustomOpener,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ViewXML_stories});var react=__webpack_require__("../../node_modules/react/index.js"),dist=__webpack_require__("../../node_modules/@storybook/addon-knobs/dist/index.js"),LinkButton=__webpack_require__("../semantic-ui/src/components/LinkButton.js"),default_highlight=__webpack_require__("../../node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),Modal=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/modules/Modal/Modal.js"),Button=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/elements/Button/Button.js"),i18n=__webpack_require__("../semantic-ui/src/i18n/i18n.js"),ModalContext=__webpack_require__("../semantic-ui/src/context/ModalContext.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var ViewXML=function ViewXML(props){var _useState2=_slicedToArray((0,react.useState)(!1),2),showModal=_useState2[0],setShowModal=_useState2[1],OpenerComponent=props.opener.component,openerProps=props.opener.props;return(0,jsx_runtime.jsx)(ModalContext.Z.Consumer,{children:function children(mountNode){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(OpenerComponent,_objectSpread(_objectSpread({},openerProps),{},{className:"view-xml-trigger",onClick:function onClick(){return setShowModal(!0)}})),(0,jsx_runtime.jsxs)(Modal.Z,{className:"view-xml-modal",closeIcon:!0,centered:!1,mountNode,open:showModal,onClose:function onClose(){return setShowModal(!1)},children:[(0,jsx_runtime.jsx)(Modal.Z.Header,{content:i18n.Z.t("ViewXML.title")}),(0,jsx_runtime.jsx)(Modal.Z.Content,{children:(0,jsx_runtime.jsx)(default_highlight.Z,{language:"xml",style:props.highlighter,children:props.xml})}),(0,jsx_runtime.jsx)(Modal.Z.Actions,{children:(0,jsx_runtime.jsx)(Button.Z,{basic:!0,content:i18n.Z.t("Common.buttons.close"),onClick:function onClick(){return setShowModal(!1)}})})]})]})}})};ViewXML.displayName="ViewXML",ViewXML.defaultProps={opener:{component:Button.Z,props:{content:i18n.Z.t("ViewXML.buttons.view")}},style:{maxHeight:"70vh"}},ViewXML.__docgenInfo={description:"",displayName:"ViewXML",methods:[],props:{highlighter:{required:!1,flowType:{name:"any"},description:""},opener:{required:!1,flowType:{name:"signature",type:"object",raw:"{\n  component: ComponentType<any>,\n  props: any\n}",signature:{properties:[{key:"component",value:{name:"ComponentType",elements:[{name:"any"}],raw:"ComponentType<any>",required:!0}},{key:"props",value:{name:"any",required:!0}}]}},description:"",defaultValue:{value:"{\n  component: Button,\n  props: {\n    content: i18n.t('ViewXML.buttons.view')\n  }\n}",computed:!1}},style:{required:!1,flowType:{name:"any"},description:"",defaultValue:{value:"{\n  maxHeight: '70vh'\n}",computed:!1}},xml:{required:!0,flowType:{name:"string"},description:""}}};const components_ViewXML=ViewXML;var _Default$parameters,_Default$parameters2,_CustomOpener$paramet,_CustomOpener$paramet2;function ViewXML_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function ViewXML_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ViewXML_stories_ownKeys(Object(source),!0).forEach((function(key){ViewXML_stories_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ViewXML_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function ViewXML_stories_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var xml='<?xml version="1.0"?>\n<catalog>\n  <book id="bk101">\n    <author>Gambardella, Matthew</author>\n    <title>XML Developer\'s Guide</title>\n    <genre>Computer</genre>\n    <price>44.95</price>\n    <publish_date>2000-10-01</publish_date>\n    <description>An in-depth look at creating applications\n      with XML.</description>\n  </book>\n  <book id="bk102">\n    <author>Ralls, Kim</author>\n    <title>Midnight Rain</title>\n    <genre>Fantasy</genre>\n    <price>5.95</price>\n    <publish_date>2000-12-16</publish_date>\n    <description>A former architect battles corporate zombies,\n      an evil sorceress, and her own childhood to become queen\n      of the world.</description>\n  </book>\n  <book id="bk103">\n    <author>Corets, Eva</author>\n    <title>Maeve Ascendant</title>\n    <genre>Fantasy</genre>\n    <price>5.95</price>\n    <publish_date>2000-11-17</publish_date>\n    <description>After the collapse of a nanotechnology\n      society in England, the young survivors lay the\n      foundation for a new society.</description>\n  </book>\n  <book id="bk104">\n    <author>Corets, Eva</author>\n    <title>Oberon\'s Legacy</title>\n    <genre>Fantasy</genre>\n    <price>5.95</price>\n    <publish_date>2001-03-10</publish_date>\n    <description>In post-apocalypse England, the mysterious\n      agent known only as Oberon helps to create a new life\n      for the inhabitants of London. Sequel to Maeve\n      Ascendant.</description>\n  </book>\n  <book id="bk105">\n    <author>Corets, Eva</author>\n    <title>The Sundered Grail</title>\n    <genre>Fantasy</genre>\n    <price>5.95</price>\n    <publish_date>2001-09-10</publish_date>\n    <description>The two daughters of Maeve, half-sisters,\n      battle one another for control of England. Sequel to\n      Oberon\'s Legacy.</description>\n  </book>\n  <book id="bk106">\n    <author>Randall, Cynthia</author>\n    <title>Lover Birds</title>\n    <genre>Romance</genre>\n    <price>4.95</price>\n    <publish_date>2000-09-02</publish_date>\n    <description>When Carla meets Paul at an ornithology\n      conference, tempers fly as feathers get ruffled.</description>\n  </book>\n  <book id="bk107">\n    <author>Thurman, Paula</author>\n    <title>Splish Splash</title>\n    <genre>Romance</genre>\n    <price>4.95</price>\n    <publish_date>2000-11-02</publish_date>\n    <description>A deep sea diver finds true love twenty\n      thousand leagues beneath the sea.</description>\n  </book>\n  <book id="bk108">\n    <author>Knorr, Stefan</author>\n    <title>Creepy Crawlies</title>\n    <genre>Horror</genre>\n    <price>4.95</price>\n    <publish_date>2000-12-06</publish_date>\n    <description>An anthology of horror stories about roaches,\n      centipedes, scorpions  and other insects.</description>\n  </book>\n  <book id="bk109">\n    <author>Kress, Peter</author>\n    <title>Paradox Lost</title>\n    <genre>Science Fiction</genre>\n    <price>6.95</price>\n    <publish_date>2000-11-02</publish_date>\n    <description>After an inadvertant trip through a Heisenberg\n      Uncertainty Device, James Salway discovers the problems\n      of being quantum.</description>\n  </book>\n  <book id="bk110">\n    <author>O\'Brien, Tim</author>\n    <title>Microsoft .NET: The Programming Bible</title>\n    <genre>Computer</genre>\n    <price>36.95</price>\n    <publish_date>2000-12-09</publish_date>\n    <description>Microsoft\'s .NET initiative is explored in\n      detail in this deep programmer\'s reference.</description>\n  </book>\n  <book id="bk111">\n    <author>O\'Brien, Tim</author>\n    <title>MSXML3: A Comprehensive Guide</title>\n    <genre>Computer</genre>\n    <price>36.95</price>\n    <publish_date>2000-12-01</publish_date>\n    <description>The Microsoft MSXML3 parser is covered in\n      detail, with attention to XML DOM interfaces, XSLT processing,\n      SAX and more.</description>\n  </book>\n  <book id="bk112">\n    <author>Galos, Mike</author>\n    <title>Visual Studio 7: A Comprehensive Guide</title>\n    <genre>Computer</genre>\n    <price>49.95</price>\n    <publish_date>2001-04-16</publish_date>\n    <description>Microsoft Visual Studio 7 is explored in depth,\n      looking at how Visual Basic, Visual C++, C#, and ASP+ are\n      integrated into a comprehensive development\n      environment.</description>\n  </book>\n</catalog>';const ViewXML_stories={title:"Components/Semantic UI/ViewXML",decorators:[dist.withKnobs]};var style={maxHeight:"50vh"},Default=function Default(){return(0,jsx_runtime.jsx)(components_ViewXML,{style,xml})};Default.displayName="Default";var CustomOpener=function CustomOpener(){return(0,jsx_runtime.jsx)(components_ViewXML,{opener:{component:LinkButton.Z,props:{content:"Click here!"}},style,xml})};CustomOpener.displayName="CustomOpener",Default.parameters=ViewXML_stories_objectSpread(ViewXML_stories_objectSpread({},Default.parameters),{},{docs:ViewXML_stories_objectSpread(ViewXML_stories_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:ViewXML_stories_objectSpread({originalSource:"() => <ViewXML style={style} xml={xml} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),CustomOpener.parameters=ViewXML_stories_objectSpread(ViewXML_stories_objectSpread({},CustomOpener.parameters),{},{docs:ViewXML_stories_objectSpread(ViewXML_stories_objectSpread({},null===(_CustomOpener$paramet=CustomOpener.parameters)||void 0===_CustomOpener$paramet?void 0:_CustomOpener$paramet.docs),{},{source:ViewXML_stories_objectSpread({originalSource:"() => <ViewXML opener={{\n  component: LinkButton,\n  props: {\n    content: 'Click here!'\n  }\n}} style={style} xml={xml} />"},null===(_CustomOpener$paramet2=CustomOpener.parameters)||void 0===_CustomOpener$paramet2||null===(_CustomOpener$paramet2=_CustomOpener$paramet2.docs)||void 0===_CustomOpener$paramet2?void 0:_CustomOpener$paramet2.source)})});var __namedExportsOrder=["Default","CustomOpener"]},"../semantic-ui/src/components/LinkButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>src_components_LinkButton});__webpack_require__("../../node_modules/react/index.js");var Button=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/elements/Button/Button.js"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),LinkButton=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../semantic-ui/src/components/LinkButton.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(LinkButton.Z,options);LinkButton.Z&&LinkButton.Z.locals&&LinkButton.Z.locals;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),LinkButton_LinkButton=function LinkButton(props){return(0,jsx_runtime.jsx)(Button.Z,{basic:!0,className:"link-button",compact:!0,content:props.content,onClick:props.onClick.bind(undefined),type:"button"})};LinkButton_LinkButton.displayName="LinkButton",LinkButton_LinkButton.__docgenInfo={description:"",displayName:"LinkButton",methods:[],props:{content:{required:!0,flowType:{name:"string"},description:""},onClick:{required:!0,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const src_components_LinkButton=LinkButton_LinkButton},"../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../semantic-ui/src/components/LinkButton.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".ui.button.basic.compact.link-button {\n  background: none;\n  border: none;\n  box-shadow: none;\n  font-weight: normal;\n  margin: 0em 0em 0.28571429rem 0em;\n  padding: 0;\n}","",{version:3,sources:["webpack://./../semantic-ui/src/components/LinkButton.css"],names:[],mappings:"AAAA;EACE,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,iCAAiC;EACjC,UAAU;AACZ",sourcesContent:[".ui.button.basic.compact.link-button {\n  background: none;\n  border: none;\n  box-shadow: none;\n  font-weight: normal;\n  margin: 0em 0em 0.28571429rem 0em;\n  padding: 0;\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);