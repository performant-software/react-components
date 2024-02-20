"use strict";(self.webpackChunk_performant_software_storybook=self.webpackChunk_performant_software_storybook||[]).push([[2171],{"./src/common/InfiniteScroll.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,EmptyList:()=>EmptyList,__namedExportsOrder:()=>__namedExportsOrder,default:()=>InfiniteScroll_stories});var react=__webpack_require__("../../node_modules/react/index.js"),dist=__webpack_require__("../../node_modules/@storybook/addon-knobs/dist/index.js"),Card=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/views/Card/Card.js"),index_all=__webpack_require__("../../node_modules/underscore/modules/index-all.js"),Cars=__webpack_require__("./src/data/Cars.json");const Browser_isBrowser=function isBrowser(){return"undefined"!=typeof window};var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var InfiniteScroll=function InfiniteScroll(props){var _useState2=_slicedToArray((0,react.useState)(0),2),height=_useState2[0],setHeight=_useState2[1],containerRef=(0,react.useRef)(),getScrollElement=function getScrollElement(){var scrollElement;return props.context?scrollElement=props.context.current:Browser_isBrowser()&&(scrollElement=document.documentElement),scrollElement},onScroll=function onScroll(){var element=getScrollElement();element&&(element.scrollTop+element.clientHeight>=element.scrollHeight-props.offset&&props.onBottomReached())};(0,react.useEffect)((function(){var scrollContainer;if(props.context?scrollContainer=props.context.current:Browser_isBrowser()&&(scrollContainer=window),scrollContainer)return scrollContainer.addEventListener("scroll",onScroll),function(){return scrollContainer&&scrollContainer.removeEventListener("scroll",onScroll)}}),[props.context]);return(0,react.useEffect)((function(){if(!function isScrollable(){var scrollable=!1,element=getScrollElement();if(element){var clientHeight=element.clientHeight;scrollable=element.scrollHeight>clientHeight}return scrollable}()&&containerRef&&containerRef.current){var clientHeight=containerRef.current.clientHeight;clientHeight>height&&(setHeight(clientHeight),props.onBottomReached())}})),(0,jsx_runtime.jsx)("div",{ref:containerRef,children:props.children})};InfiniteScroll.displayName="InfiniteScroll",InfiniteScroll.defaultProps={offset:0},InfiniteScroll.__docgenInfo={description:"",displayName:"InfiniteScroll",methods:[],props:{children:{required:!0,flowType:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"},description:""},context:{required:!1,flowType:{name:"signature",type:"object",raw:"{ current: HTMLElement }",signature:{properties:[{key:"current",value:{name:"HTMLElement",required:!0}}]}},description:""},offset:{required:!1,flowType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},onBottomReached:{required:!0,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const components_InfiniteScroll=InfiniteScroll;var _Default$parameters,_Default$parameters2,_EmptyList$parameters,_EmptyList$parameters2,DragDrop=__webpack_require__("../shared/src/utils/DragDrop.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return InfiniteScroll_stories_arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||InfiniteScroll_stories_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function InfiniteScroll_stories_slicedToArray(arr,i){return function InfiniteScroll_stories_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function InfiniteScroll_stories_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||InfiniteScroll_stories_unsupportedIterableToArray(arr,i)||function InfiniteScroll_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function InfiniteScroll_stories_unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return InfiniteScroll_stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?InfiniteScroll_stories_arrayLikeToArray(o,minLen):void 0}}function InfiniteScroll_stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const InfiniteScroll_stories={title:"Components/Common/InfiniteScroll",decorators:[dist.withKnobs]};var Default=(0,DragDrop.Z)((function(){var _useState2=InfiniteScroll_stories_slicedToArray((0,react.useState)([]),2),items=_useState2[0],setItems=_useState2[1],_useState4=InfiniteScroll_stories_slicedToArray((0,react.useState)(1),2),page=_useState4[0],setPage=_useState4[1];return(0,react.useEffect)((function(){var startIndex=10*(page-1),endIndex=startIndex+10;setItems((function(prevItems){return[].concat(_toConsumableArray(prevItems),_toConsumableArray(Cars.slice(startIndex,endIndex)))}))}),[page]),(0,jsx_runtime.jsx)(components_InfiniteScroll,{offset:100,onBottomReached:function onBottomReached(){return setPage((function(prevPage){return prevPage+1}))},children:(0,jsx_runtime.jsx)(Card.Z.Group,{children:index_all.default.map(items,(function(item,index){return(0,jsx_runtime.jsx)(Card.Z,{header:item.make,meta:item.model,description:item.address},index)}))})})})),EmptyList=(0,DragDrop.Z)((function(){return(0,jsx_runtime.jsx)(components_InfiniteScroll,{offset:100,onBottomReached:function onBottomReached(){},children:(0,jsx_runtime.jsx)(Card.Z.Group,{children:index_all.default.map([],(function(item,index){return(0,jsx_runtime.jsx)(Card.Z,{header:item.make,meta:item.model,description:item.address},index)}))})})}));Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"useDragDrop(() => {\n  const [items, setItems] = useState([]);\n  const [page, setPage] = useState(1);\n  useEffect(() => {\n    const startIndex = (page - 1) * PER_PAGE;\n    const endIndex = startIndex + PER_PAGE;\n    setItems(prevItems => [...prevItems, ...Cars.slice(startIndex, endIndex)]);\n  }, [page]);\n  return <InfiniteScroll offset={100} onBottomReached={() => setPage(prevPage => prevPage + 1)}>\n      <Card.Group>\n        {_.map(items, (item, index) => <Card key={index} header={item.make} meta={item.model} description={item.address} />)}\n      </Card.Group>\n    </InfiniteScroll>;\n})"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),EmptyList.parameters=_objectSpread(_objectSpread({},EmptyList.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_EmptyList$parameters=EmptyList.parameters)||void 0===_EmptyList$parameters?void 0:_EmptyList$parameters.docs),{},{source:_objectSpread({originalSource:"useDragDrop(() => {\n  const items = [];\n  return <InfiniteScroll offset={100} onBottomReached={() => {}}>\n      <Card.Group>\n        {_.map(items, (item, index) => <Card key={index} header={item.make} meta={item.model} description={item.address} />)}\n      </Card.Group>\n    </InfiniteScroll>;\n})"},null===(_EmptyList$parameters2=EmptyList.parameters)||void 0===_EmptyList$parameters2||null===(_EmptyList$parameters2=_EmptyList$parameters2.docs)||void 0===_EmptyList$parameters2?void 0:_EmptyList$parameters2.source)})});var __namedExportsOrder=["Default","EmptyList"]},"../../node_modules/semantic-ui-react/dist/es/views/Card/Card.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Card});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_lib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js"),_lib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js"),_lib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/lib/getElementType.js"),_lib__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js"),_elements_Image__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/elements/Image/Image.js"),_CardContent__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/views/Card/CardContent.js"),_CardDescription__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/views/Card/CardDescription.js"),_CardGroup__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/views/Card/CardGroup.js"),_CardHeader__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/views/Card/CardHeader.js"),_CardMeta__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/views/Card/CardMeta.js"),Card=function(_Component){function Card(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_Component.call.apply(_Component,[this].concat(args))||this).handleClick=function(e){var onClick=_this.props.onClick;onClick&&onClick(e,_this.props)},_this}return(0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.Z)(Card,_Component),Card.prototype.render=function render(){var _this$props=this.props,centered=_this$props.centered,children=_this$props.children,className=_this$props.className,color=_this$props.color,content=_this$props.content,description=_this$props.description,extra=_this$props.extra,fluid=_this$props.fluid,header=_this$props.header,href=_this$props.href,image=_this$props.image,link=_this$props.link,meta=_this$props.meta,onClick=_this$props.onClick,raised=_this$props.raised,classes=(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("ui",color,(0,_lib__WEBPACK_IMPORTED_MODULE_3__.lG)(centered,"centered"),(0,_lib__WEBPACK_IMPORTED_MODULE_3__.lG)(fluid,"fluid"),(0,_lib__WEBPACK_IMPORTED_MODULE_3__.lG)(link,"link"),(0,_lib__WEBPACK_IMPORTED_MODULE_3__.lG)(raised,"raised"),"card",className),rest=(0,_lib__WEBPACK_IMPORTED_MODULE_4__.Z)(Card,this.props),ElementType=(0,_lib__WEBPACK_IMPORTED_MODULE_5__.Z)(Card,this.props,(function(){if(onClick)return"a"}));return _lib__WEBPACK_IMPORTED_MODULE_6__.kK(children)?_lib__WEBPACK_IMPORTED_MODULE_6__.kK(content)?react__WEBPACK_IMPORTED_MODULE_0__.createElement(ElementType,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({},rest,{className:classes,href,onClick:this.handleClick}),_elements_Image__WEBPACK_IMPORTED_MODULE_8__.Z.create(image,{autoGenerateKey:!1,defaultProps:{ui:!1,wrapped:!0}}),(description||header||meta)&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CardContent__WEBPACK_IMPORTED_MODULE_9__.Z,{description,header,meta}),extra&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CardContent__WEBPACK_IMPORTED_MODULE_9__.Z,{extra:!0},extra)):react__WEBPACK_IMPORTED_MODULE_0__.createElement(ElementType,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({},rest,{className:classes,href,onClick:this.handleClick}),content):react__WEBPACK_IMPORTED_MODULE_0__.createElement(ElementType,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({},rest,{className:classes,href,onClick:this.handleClick}),children)},Card}(react__WEBPACK_IMPORTED_MODULE_0__.Component);Card.handledProps=["as","centered","children","className","color","content","description","extra","fluid","header","href","image","link","meta","onClick","raised"],Card.propTypes={},Card.Content=_CardContent__WEBPACK_IMPORTED_MODULE_9__.Z,Card.Description=_CardDescription__WEBPACK_IMPORTED_MODULE_10__.Z,Card.Group=_CardGroup__WEBPACK_IMPORTED_MODULE_11__.Z,Card.Header=_CardHeader__WEBPACK_IMPORTED_MODULE_12__.Z,Card.Meta=_CardMeta__WEBPACK_IMPORTED_MODULE_13__.Z},"../../node_modules/semantic-ui-react/dist/es/views/Card/CardContent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_lib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js"),_lib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js"),_lib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/lib/getElementType.js"),_lib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js"),_lib__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/lib/factories.js"),_CardDescription__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/views/Card/CardDescription.js"),_CardHeader__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/views/Card/CardHeader.js"),_CardMeta__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/views/Card/CardMeta.js");function CardContent(props){var children=props.children,className=props.className,content=props.content,description=props.description,extra=props.extra,header=props.header,meta=props.meta,textAlign=props.textAlign,classes=(0,clsx__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_lib__WEBPACK_IMPORTED_MODULE_2__.lG)(extra,"extra"),(0,_lib__WEBPACK_IMPORTED_MODULE_2__.X4)(textAlign),"content",className),rest=(0,_lib__WEBPACK_IMPORTED_MODULE_3__.Z)(CardContent,props),ElementType=(0,_lib__WEBPACK_IMPORTED_MODULE_4__.Z)(CardContent,props);return _lib__WEBPACK_IMPORTED_MODULE_5__.kK(children)?_lib__WEBPACK_IMPORTED_MODULE_5__.kK(content)?react__WEBPACK_IMPORTED_MODULE_0__.createElement(ElementType,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({},rest,{className:classes}),(0,_lib__WEBPACK_IMPORTED_MODULE_7__.Go)(_CardHeader__WEBPACK_IMPORTED_MODULE_8__.Z,(function(val){return{content:val}}),header,{autoGenerateKey:!1}),(0,_lib__WEBPACK_IMPORTED_MODULE_7__.Go)(_CardMeta__WEBPACK_IMPORTED_MODULE_9__.Z,(function(val){return{content:val}}),meta,{autoGenerateKey:!1}),(0,_lib__WEBPACK_IMPORTED_MODULE_7__.Go)(_CardDescription__WEBPACK_IMPORTED_MODULE_10__.Z,(function(val){return{content:val}}),description,{autoGenerateKey:!1})):react__WEBPACK_IMPORTED_MODULE_0__.createElement(ElementType,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({},rest,{className:classes}),content):react__WEBPACK_IMPORTED_MODULE_0__.createElement(ElementType,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({},rest,{className:classes}),children)}CardContent.handledProps=["as","children","className","content","description","extra","header","meta","textAlign"],CardContent.propTypes={};const __WEBPACK_DEFAULT_EXPORT__=CardContent},"../../node_modules/semantic-ui-react/dist/es/views/Card/CardDescription.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_lib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js"),_lib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js"),_lib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/lib/getElementType.js"),_lib__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js");function CardDescription(props){var children=props.children,className=props.className,content=props.content,textAlign=props.textAlign,classes=(0,clsx__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_lib__WEBPACK_IMPORTED_MODULE_2__.X4)(textAlign),"description",className),rest=(0,_lib__WEBPACK_IMPORTED_MODULE_3__.Z)(CardDescription,props),ElementType=(0,_lib__WEBPACK_IMPORTED_MODULE_4__.Z)(CardDescription,props);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ElementType,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},rest,{className:classes}),_lib__WEBPACK_IMPORTED_MODULE_6__.kK(children)?content:children)}CardDescription.handledProps=["as","children","className","content","textAlign"],CardDescription.propTypes={};const __WEBPACK_DEFAULT_EXPORT__=CardDescription},"../../node_modules/semantic-ui-react/dist/es/views/Card/CardGroup.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),lodash_es_map__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/lodash-es/map.js"),clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_lib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js"),_lib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js"),_lib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/lib/getElementType.js"),_lib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js"),_Card__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/views/Card/Card.js");function CardGroup(props){var centered=props.centered,children=props.children,className=props.className,content=props.content,doubling=props.doubling,items=props.items,itemsPerRow=props.itemsPerRow,stackable=props.stackable,textAlign=props.textAlign,classes=(0,clsx__WEBPACK_IMPORTED_MODULE_1__.Z)("ui",(0,_lib__WEBPACK_IMPORTED_MODULE_2__.lG)(centered,"centered"),(0,_lib__WEBPACK_IMPORTED_MODULE_2__.lG)(doubling,"doubling"),(0,_lib__WEBPACK_IMPORTED_MODULE_2__.lG)(stackable,"stackable"),(0,_lib__WEBPACK_IMPORTED_MODULE_2__.X4)(textAlign),(0,_lib__WEBPACK_IMPORTED_MODULE_2__.H0)(itemsPerRow),"cards",className),rest=(0,_lib__WEBPACK_IMPORTED_MODULE_3__.Z)(CardGroup,props),ElementType=(0,_lib__WEBPACK_IMPORTED_MODULE_4__.Z)(CardGroup,props);if(!_lib__WEBPACK_IMPORTED_MODULE_5__.kK(children))return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ElementType,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({},rest,{className:classes}),children);if(!_lib__WEBPACK_IMPORTED_MODULE_5__.kK(content))return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ElementType,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({},rest,{className:classes}),content);var itemsJSX=(0,lodash_es_map__WEBPACK_IMPORTED_MODULE_7__.Z)(items,(function(item){var _item$key,key=null!=(_item$key=item.key)?_item$key:[item.header,item.description].join("-");return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Card__WEBPACK_IMPORTED_MODULE_8__.Z,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({key},item))}));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ElementType,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({},rest,{className:classes}),itemsJSX)}CardGroup.handledProps=["as","centered","children","className","content","doubling","items","itemsPerRow","stackable","textAlign"],CardGroup.propTypes={};const __WEBPACK_DEFAULT_EXPORT__=CardGroup},"../../node_modules/semantic-ui-react/dist/es/views/Card/CardHeader.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_lib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js"),_lib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js"),_lib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/lib/getElementType.js"),_lib__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js");function CardHeader(props){var children=props.children,className=props.className,content=props.content,textAlign=props.textAlign,classes=(0,clsx__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_lib__WEBPACK_IMPORTED_MODULE_2__.X4)(textAlign),"header",className),rest=(0,_lib__WEBPACK_IMPORTED_MODULE_3__.Z)(CardHeader,props),ElementType=(0,_lib__WEBPACK_IMPORTED_MODULE_4__.Z)(CardHeader,props);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ElementType,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},rest,{className:classes}),_lib__WEBPACK_IMPORTED_MODULE_6__.kK(children)?content:children)}CardHeader.handledProps=["as","children","className","content","textAlign"],CardHeader.propTypes={};const __WEBPACK_DEFAULT_EXPORT__=CardHeader},"../../node_modules/semantic-ui-react/dist/es/views/Card/CardMeta.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_lib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js"),_lib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js"),_lib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/lib/getElementType.js"),_lib__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js");function CardMeta(props){var children=props.children,className=props.className,content=props.content,textAlign=props.textAlign,classes=(0,clsx__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_lib__WEBPACK_IMPORTED_MODULE_2__.X4)(textAlign),"meta",className),rest=(0,_lib__WEBPACK_IMPORTED_MODULE_3__.Z)(CardMeta,props),ElementType=(0,_lib__WEBPACK_IMPORTED_MODULE_4__.Z)(CardMeta,props);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ElementType,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},rest,{className:classes}),_lib__WEBPACK_IMPORTED_MODULE_6__.kK(children)?content:children)}CardMeta.handledProps=["as","children","className","content","textAlign"],CardMeta.propTypes={};const __WEBPACK_DEFAULT_EXPORT__=CardMeta},"./src/data/Cars.json":module=>{module.exports=JSON.parse('[{"id":1,"make":"Subaru","model":"Loyale","vin":"WDDEJ7KB0BA520650","address":"75033 Schurz Point","city":"Buffalo","state":"New York"},{"id":2,"make":"Infiniti","model":"J","vin":"3D4PG1FG9BT061845","address":"7 Algoma Alley","city":"Wilmington","state":"Delaware"},{"id":3,"make":"Ford","model":"E150","vin":"1GD11XEG6FF110083","address":"53798 Ilene Plaza","city":"Akron","state":"Ohio"},{"id":4,"make":"Hyundai","model":"Sonata","vin":"1G6DV1EP0E0587728","address":"25 Truax Terrace","city":"Oceanside","state":"California"},{"id":5,"make":"Lotus","model":"Elise","vin":"5N1AR1NB3AC436461","address":"48 Del Sol Point","city":"Nashville","state":"Tennessee"},{"id":6,"make":"Pontiac","model":"Vibe","vin":"JN8AZ2NC6D9272180","address":"6512 Village Green Terrace","city":"Colorado Springs","state":"Colorado"},{"id":7,"make":"Audi","model":"100","vin":"5UXFB33503L412708","address":"82693 Nobel Park","city":"Salt Lake City","state":"Utah"},{"id":8,"make":"Toyota","model":"Matrix","vin":"5NPDH4AE2CH775953","address":"743 Almo Junction","city":"Philadelphia","state":"Pennsylvania"},{"id":9,"make":"Dodge","model":"Ram 2500","vin":"WDDHF2EB2BA355858","address":"676 Mayfield Drive","city":"Lawrenceville","state":"Georgia"},{"id":10,"make":"Isuzu","model":"Hombre Space","vin":"3D4PG9FV5AT271273","address":"7665 Fair Oaks Hill","city":"Dayton","state":"Ohio"},{"id":11,"make":"Chevrolet","model":"3500","vin":"WAUGL68E55A176260","address":"45510 Anderson Place","city":"Corpus Christi","state":"Texas"},{"id":12,"make":"Buick","model":"LeSabre","vin":"WAUGL78E18A037401","address":"15002 Sloan Crossing","city":"Philadelphia","state":"Pennsylvania"},{"id":13,"make":"Hyundai","model":"Elantra","vin":"WAUKFAFL7BN993756","address":"5752 Dunning Drive","city":"Santa Fe","state":"New Mexico"},{"id":14,"make":"Ford","model":"Thunderbird","vin":"5NPE24AF7FH573130","address":"75082 Beilfuss Hill","city":"Buffalo","state":"New York"},{"id":15,"make":"Ford","model":"Aerostar","vin":"WAUJT64B83N807008","address":"20600 Eastlawn Crossing","city":"Stockton","state":"California"},{"id":16,"make":"Toyota","model":"Tacoma","vin":"1C4RDHEG9FC740024","address":"38983 Bunker Hill Pass","city":"Trenton","state":"New Jersey"},{"id":17,"make":"Subaru","model":"BRZ","vin":"5FPYK1F2XAB204018","address":"713 Browning Lane","city":"Atlanta","state":"Georgia"},{"id":18,"make":"Ford","model":"Taurus","vin":"KMHHT6KD8AU630397","address":"636 Utah Court","city":"Albany","state":"New York"},{"id":19,"make":"Mercedes-Benz","model":"E-Class","vin":"WA1YD64B82N754785","address":"8628 Sheridan Parkway","city":"Norfolk","state":"Virginia"},{"id":20,"make":"BMW","model":"X5","vin":"WA1YD64B72N141248","address":"25 Dovetail Hill","city":"Hicksville","state":"New York"},{"id":21,"make":"Ford","model":"EXP","vin":"WDDHF0EB9EA900883","address":"738 Petterle Avenue","city":"Sparks","state":"Nevada"},{"id":22,"make":"Pontiac","model":"Grand Prix","vin":"WBAUN7C59CV891154","address":"0025 Arrowood Road","city":"Hayward","state":"California"},{"id":23,"make":"Chevrolet","model":"Venture","vin":"1N4AA5AP7CC533109","address":"36002 Beilfuss Park","city":"Riverside","state":"California"},{"id":24,"make":"Cadillac","model":"SRX","vin":"TRUSC28N231502752","address":"59 Eagle Crest Center","city":"El Paso","state":"Texas"},{"id":25,"make":"Isuzu","model":"VehiCROSS","vin":"3VW1K7AJ8BM483362","address":"537 South Avenue","city":"Philadelphia","state":"Pennsylvania"},{"id":26,"make":"Lincoln","model":"Continental Mark VII","vin":"WBAEV33434K698229","address":"939 Brentwood Street","city":"Akron","state":"Ohio"},{"id":27,"make":"Chevrolet","model":"Cavalier","vin":"3GYFNGE31ES333552","address":"9 Manley Center","city":"New Orleans","state":"Louisiana"},{"id":28,"make":"Chevrolet","model":"Tahoe","vin":"1G6DK5ED6B0611287","address":"6245 Forster Park","city":"Nashville","state":"Tennessee"},{"id":29,"make":"Subaru","model":"Impreza","vin":"1G6DA8E58D0769467","address":"3081 Spohn Place","city":"Pinellas Park","state":"Florida"},{"id":30,"make":"Plymouth","model":"Laser","vin":"1C4AJWAG0FL066491","address":"1 Roxbury Terrace","city":"Monticello","state":"Minnesota"},{"id":31,"make":"Acura","model":"CL","vin":"1GYUKDEF0AR622718","address":"00081 Park Meadow Way","city":"Newport News","state":"Virginia"},{"id":32,"make":"Chevrolet","model":"Lumina","vin":"1FTWX3D55AE885813","address":"46363 Mccormick Alley","city":"Cincinnati","state":"Ohio"},{"id":33,"make":"BMW","model":"8 Series","vin":"JM3TB2BA6E0664553","address":"6 Susan Trail","city":"Topeka","state":"Kansas"},{"id":34,"make":"GMC","model":"Sierra 1500","vin":"WBAVM1C55DV245292","address":"25968 Ramsey Road","city":"Omaha","state":"Nebraska"},{"id":35,"make":"Toyota","model":"Camry","vin":"WBAYB6C59ED600634","address":"809 Lukken Circle","city":"Rochester","state":"New York"},{"id":36,"make":"Nissan","model":"Maxima","vin":"5N1AN0NU9AC916477","address":"504 Eliot Circle","city":"San Jose","state":"California"},{"id":37,"make":"Mercedes-Benz","model":"SLR McLaren","vin":"1G6AX5S34E0104439","address":"1557 Holy Cross Court","city":"Hartford","state":"Connecticut"},{"id":38,"make":"Lincoln","model":"Town Car","vin":"1FMNE1BW9AD271737","address":"24557 High Crossing Court","city":"Billings","state":"Montana"},{"id":39,"make":"Pontiac","model":"Grand Prix","vin":"WD3PE7DC8F5011542","address":"47811 Magdeline Circle","city":"Gary","state":"Indiana"},{"id":40,"make":"Bentley","model":"Continental","vin":"3VW4A7AT2CM707695","address":"4052 Ridgeview Place","city":"New Orleans","state":"Louisiana"},{"id":41,"make":"Mazda","model":"Tribute","vin":"5FRYD4H94GB067194","address":"56987 Luster Trail","city":"Salt Lake City","state":"Utah"},{"id":42,"make":"Mitsubishi","model":"Pajero","vin":"1N4AL2AP0CC115435","address":"85274 Carioca Avenue","city":"Harrisburg","state":"Pennsylvania"},{"id":43,"make":"Lincoln","model":"MKX","vin":"WBA6A0C57FD161040","address":"2820 Victoria Circle","city":"Phoenix","state":"Arizona"},{"id":44,"make":"Dodge","model":"Dakota","vin":"1FTEW1CF4FF081680","address":"56 Elmside Road","city":"Jeffersonville","state":"Indiana"},{"id":45,"make":"BMW","model":"3 Series","vin":"5J6YH1H33AL810569","address":"7892 Maryland Court","city":"Evansville","state":"Indiana"},{"id":46,"make":"Volkswagen","model":"Jetta III","vin":"5UXZW0C55C0639698","address":"03 Talisman Park","city":"Macon","state":"Georgia"},{"id":47,"make":"Ford","model":"Bronco II","vin":"137FA90381E748394","address":"9 Monument Junction","city":"Charlotte","state":"North Carolina"},{"id":48,"make":"Ford","model":"F250","vin":"WAU2GBFC3DN752346","address":"47268 Schmedeman Place","city":"San Antonio","state":"Texas"},{"id":49,"make":"Ford","model":"E-Series","vin":"WA1DGAFP8EA527447","address":"436 Menomonie Way","city":"South Lake Tahoe","state":"California"},{"id":50,"make":"Chevrolet","model":"Malibu","vin":"1G6EC12912B957438","address":"517 Jay Park","city":"South Park","state":"Georgia"}]')}}]);