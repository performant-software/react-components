(self.webpackChunk_performant_software_storybook=self.webpackChunk_performant_software_storybook||[]).push([[7305],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{aD:()=>action});var v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),preview_errors=__webpack_require__("../../node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new preview_errors.is({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler}},"./src/semantic-ui/StyleSelector.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),_semantic_ui_src_components_StyleSelector__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../semantic-ui/src/components/StyleSelector.js")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Semantic UI/StyleSelector",component:_semantic_ui_src_components_StyleSelector__WEBPACK_IMPORTED_MODULE_2__.Z};var Default=function Default(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{minHeight:"400px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_semantic_ui_src_components_StyleSelector__WEBPACK_IMPORTED_MODULE_2__.Z,{onChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("onChange")})})};Default.displayName="Default",Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <div style={{\n  minHeight: '400px'\n}}>\n    <StyleSelector onChange={action('onChange')} />\n  </div>",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../semantic-ui/src/components/StyleSelector.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _performant_software_shared_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../shared/build/index.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/modules/Dropdown/Dropdown.js"),underscore__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/underscore/modules/index-all.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),StyleSelector=function StyleSelector(props){var _useCitationStyles=(0,_performant_software_shared_components__WEBPACK_IMPORTED_MODULE_0__.useCitationStyles)(props.value),onStyleChange=_useCitationStyles.onStyleChange,style=_useCitationStyles.style,styles=_useCitationStyles.styles;return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){null!=style&&style.name&&null!=style&&style.xml&&props.onChange(style.name,style.xml)}),[style]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Z,{onChange:function onChange(e,_ref){var value=_ref.value;return onStyleChange(value)},options:underscore__WEBPACK_IMPORTED_MODULE_2__.default.map(styles,(function(_ref2){var name=_ref2.name;return{key:name,value:name,text:_ref2.title}})),search:!0,searchInput:{"aria-label":"Search styles"},selectOnBlur:!1,selection:!0,text:null==style?void 0:style.title,value:(null==style?void 0:style.name)||""})};StyleSelector.displayName="StyleSelector",StyleSelector.__docgenInfo={description:"This component can be used, along with the `useCitationStyles` hook, to display a list of bibliographic styles\nsupported by Zotero.",displayName:"StyleSelector",methods:[],props:{onChange:{required:!0,flowType:{name:"signature",type:"function",raw:"(name: string, xml: string) => void",signature:{arguments:[{name:"name",type:{name:"string"}},{name:"xml",type:{name:"string"}}],return:{name:"void"}}},description:"Callback fired when the style selector is changed."},value:{required:!1,flowType:{name:"string"},description:"Default style value."}}};const __WEBPACK_DEFAULT_EXPORT__=StyleSelector;StyleSelector.__docgenInfo={description:"This component can be used, along with the `useCitationStyles` hook, to display a list of bibliographic styles\nsupported by Zotero.",methods:[],displayName:"StyleSelector",props:{onChange:{required:!0,flowType:{name:"signature",type:"function",raw:"(name: string, xml: string) => void",signature:{arguments:[{name:"name",type:{name:"string"}},{name:"xml",type:{name:"string"}}],return:{name:"void"}}},description:"Callback fired when the style selector is changed."},value:{required:!1,flowType:{name:"string"},description:"Default style value."}}}},"../../node_modules/lodash-es/_arrayReduce.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function arrayReduce(array,iteratee,accumulator,initAccum){var index=-1,length=null==array?0:array.length;for(initAccum&&length&&(accumulator=array[++index]);++index<length;)accumulator=iteratee(accumulator,array[index],index,array);return accumulator}},"../../node_modules/lodash-es/_assignValue.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/lodash-es/_baseAssignValue.js"),_eq_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/lodash-es/eq.js"),hasOwnProperty=Object.prototype.hasOwnProperty;const __WEBPACK_DEFAULT_EXPORT__=function assignValue(object,key,value){var objValue=object[key];hasOwnProperty.call(object,key)&&(0,_eq_js__WEBPACK_IMPORTED_MODULE_0__.Z)(objValue,value)&&(void 0!==value||key in object)||(0,_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__.Z)(object,key,value)}},"../../node_modules/lodash-es/_baseAssignValue.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/lodash-es/_defineProperty.js");const __WEBPACK_DEFAULT_EXPORT__=function baseAssignValue(object,key,value){"__proto__"==key&&_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z?(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(object,key,{configurable:!0,enumerable:!0,value,writable:!0}):object[key]=value}},"../../node_modules/lodash-es/_baseFlatten.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_baseFlatten});var _arrayPush=__webpack_require__("../../node_modules/lodash-es/_arrayPush.js"),_Symbol=__webpack_require__("../../node_modules/lodash-es/_Symbol.js"),isArguments=__webpack_require__("../../node_modules/lodash-es/isArguments.js"),isArray=__webpack_require__("../../node_modules/lodash-es/isArray.js"),spreadableSymbol=_Symbol.Z?_Symbol.Z.isConcatSpreadable:void 0;const _isFlattenable=function isFlattenable(value){return(0,isArray.Z)(value)||(0,isArguments.Z)(value)||!!(spreadableSymbol&&value&&value[spreadableSymbol])};const _baseFlatten=function baseFlatten(array,depth,predicate,isStrict,result){var index=-1,length=array.length;for(predicate||(predicate=_isFlattenable),result||(result=[]);++index<length;){var value=array[index];depth>0&&predicate(value)?depth>1?baseFlatten(value,depth-1,predicate,isStrict,result):(0,_arrayPush.Z)(result,value):isStrict||(result[result.length]=value)}return result}},"../../node_modules/lodash-es/_baseSet.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _assignValue_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/lodash-es/_assignValue.js"),_castPath_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/lodash-es/_castPath.js"),_isIndex_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/lodash-es/_isIndex.js"),_isObject_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/lodash-es/isObject.js"),_toKey_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/lodash-es/_toKey.js");const __WEBPACK_DEFAULT_EXPORT__=function baseSet(object,path,value,customizer){if(!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__.Z)(object))return object;for(var index=-1,length=(path=(0,_castPath_js__WEBPACK_IMPORTED_MODULE_1__.Z)(path,object)).length,lastIndex=length-1,nested=object;null!=nested&&++index<length;){var key=(0,_toKey_js__WEBPACK_IMPORTED_MODULE_2__.Z)(path[index]),newValue=value;if("__proto__"===key||"constructor"===key||"prototype"===key)return object;if(index!=lastIndex){var objValue=nested[key];void 0===(newValue=customizer?customizer(objValue,key,nested):void 0)&&(newValue=(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__.Z)(objValue)?objValue:(0,_isIndex_js__WEBPACK_IMPORTED_MODULE_3__.Z)(path[index+1])?[]:{})}(0,_assignValue_js__WEBPACK_IMPORTED_MODULE_4__.Z)(nested,key,newValue),nested=nested[key]}return object}},"../../node_modules/lodash-es/isEmpty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _baseKeys_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/lodash-es/_baseKeys.js"),_getTag_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/lodash-es/_getTag.js"),_isArguments_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/lodash-es/isArguments.js"),_isArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/lodash-es/isArray.js"),_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/lodash-es/isArrayLike.js"),_isBuffer_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/lodash-es/isBuffer.js"),_isPrototype_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/lodash-es/_isPrototype.js"),_isTypedArray_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/lodash-es/isTypedArray.js"),hasOwnProperty=Object.prototype.hasOwnProperty;const __WEBPACK_DEFAULT_EXPORT__=function isEmpty(value){if(null==value)return!0;if((0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__.Z)(value)&&((0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(value)||"string"==typeof value||"function"==typeof value.splice||(0,_isBuffer_js__WEBPACK_IMPORTED_MODULE_2__.Z)(value)||(0,_isTypedArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(value)||(0,_isArguments_js__WEBPACK_IMPORTED_MODULE_4__.Z)(value)))return!value.length;var tag=(0,_getTag_js__WEBPACK_IMPORTED_MODULE_5__.Z)(value);if("[object Map]"==tag||"[object Set]"==tag)return!value.size;if((0,_isPrototype_js__WEBPACK_IMPORTED_MODULE_6__.Z)(value))return!(0,_baseKeys_js__WEBPACK_IMPORTED_MODULE_7__.Z)(value).length;for(var key in value)if(hasOwnProperty.call(value,key))return!1;return!0}},"../../node_modules/lodash-es/map.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>lodash_es_map});var _arrayMap=__webpack_require__("../../node_modules/lodash-es/_arrayMap.js"),_baseIteratee=__webpack_require__("../../node_modules/lodash-es/_baseIteratee.js"),_baseEach=__webpack_require__("../../node_modules/lodash-es/_baseEach.js"),isArrayLike=__webpack_require__("../../node_modules/lodash-es/isArrayLike.js");const _baseMap=function baseMap(collection,iteratee){var index=-1,result=(0,isArrayLike.Z)(collection)?Array(collection.length):[];return(0,_baseEach.Z)(collection,(function(value,key,collection){result[++index]=iteratee(value,key,collection)})),result};var isArray=__webpack_require__("../../node_modules/lodash-es/isArray.js");const lodash_es_map=function map(collection,iteratee){return((0,isArray.Z)(collection)?_arrayMap.Z:_baseMap)(collection,(0,_baseIteratee.Z)(iteratee,3))}},"../../node_modules/lodash-es/pick.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>lodash_es_pick});var _baseGet=__webpack_require__("../../node_modules/lodash-es/_baseGet.js"),_baseSet=__webpack_require__("../../node_modules/lodash-es/_baseSet.js"),_castPath=__webpack_require__("../../node_modules/lodash-es/_castPath.js");const _basePickBy=function basePickBy(object,paths,predicate){for(var index=-1,length=paths.length,result={};++index<length;){var path=paths[index],value=(0,_baseGet.Z)(object,path);predicate(value,path)&&(0,_baseSet.Z)(result,(0,_castPath.Z)(path,object),value)}return result};var hasIn=__webpack_require__("../../node_modules/lodash-es/hasIn.js");const _basePick=function basePick(object,paths){return _basePickBy(object,paths,(function(value,path){return(0,hasIn.Z)(object,path)}))};var _baseFlatten=__webpack_require__("../../node_modules/lodash-es/_baseFlatten.js");const lodash_es_flatten=function flatten(array){return(null==array?0:array.length)?(0,_baseFlatten.Z)(array,1):[]};var _overRest=__webpack_require__("../../node_modules/lodash-es/_overRest.js"),_setToString=__webpack_require__("../../node_modules/lodash-es/_setToString.js");const lodash_es_pick=function flatRest(func){return(0,_setToString.Z)((0,_overRest.Z)(func,void 0,lodash_es_flatten),func+"")}((function(object,paths){return null==object?{}:_basePick(object,paths)}))},"../../node_modules/lodash-es/reduce.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>lodash_es_reduce});var _arrayReduce=__webpack_require__("../../node_modules/lodash-es/_arrayReduce.js"),_baseEach=__webpack_require__("../../node_modules/lodash-es/_baseEach.js"),_baseIteratee=__webpack_require__("../../node_modules/lodash-es/_baseIteratee.js");const _baseReduce=function baseReduce(collection,iteratee,accumulator,initAccum,eachFunc){return eachFunc(collection,(function(value,index,collection){accumulator=initAccum?(initAccum=!1,value):iteratee(accumulator,value,index,collection)})),accumulator};var isArray=__webpack_require__("../../node_modules/lodash-es/isArray.js");const lodash_es_reduce=function reduce(collection,iteratee,accumulator){var func=(0,isArray.Z)(collection)?_arrayReduce.Z:_baseReduce,initAccum=arguments.length<3;return func(collection,(0,_baseIteratee.Z)(iteratee,4),accumulator,initAccum,_baseEach.Z)}},"../../node_modules/shallowequal/index.js":module=>{module.exports=function shallowEqual(objA,objB,compare,compareContext){var ret=compare?compare.call(compareContext,objA,objB):void 0;if(void 0!==ret)return!!ret;if(objA===objB)return!0;if("object"!=typeof objA||!objA||"object"!=typeof objB||!objB)return!1;var keysA=Object.keys(objA),keysB=Object.keys(objB);if(keysA.length!==keysB.length)return!1;for(var bHasOwnProperty=Object.prototype.hasOwnProperty.bind(objB),idx=0;idx<keysA.length;idx++){var key=keysA[idx];if(!bHasOwnProperty(key))return!1;var valueA=objA[key],valueB=objB[key];if(!1===(ret=compare?compare.call(compareContext,valueA,valueB,key):void 0)||void 0===ret&&valueA!==valueB)return!1}return!0}}}]);