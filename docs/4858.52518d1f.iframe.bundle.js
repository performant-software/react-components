"use strict";(self.webpackChunk_performant_software_storybook=self.webpackChunk_performant_software_storybook||[]).push([[4858],{"../../node_modules/underscore/modules/index-all.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{VERSION:()=>VERSION,after:()=>after,all:()=>every,allKeys:()=>allKeys,any:()=>some,assign:()=>extendOwn,before:()=>before,bind:()=>bind,bindAll:()=>bindAll,chain:()=>chain,chunk:()=>chunk,clone:()=>clone,collect:()=>map,compact:()=>compact,compose:()=>compose,constant:()=>constant,contains:()=>contains,countBy:()=>countBy,create:()=>create,debounce:()=>debounce,default:()=>index_default,defaults:()=>defaults,defer:()=>defer,delay:()=>delay,detect:()=>find,difference:()=>difference,drop:()=>rest,each:()=>each,escape:()=>modules_escape,every:()=>every,extend:()=>extend,extendOwn:()=>extendOwn,filter:()=>filter,find:()=>find,findIndex:()=>findIndex,findKey:()=>findKey,findLastIndex:()=>findLastIndex,findWhere:()=>findWhere,first:()=>first,flatten:()=>flatten_flatten,foldl:()=>reduce,foldr:()=>reduceRight,forEach:()=>each,functions:()=>functions,get:()=>get,groupBy:()=>groupBy,has:()=>has_has,head:()=>first,identity:()=>identity,include:()=>contains,includes:()=>contains,indexBy:()=>indexBy,indexOf:()=>indexOf,initial:()=>initial,inject:()=>reduce,intersection:()=>intersection,invert:()=>invert,invoke:()=>invoke,isArguments:()=>modules_isArguments,isArray:()=>isArray,isArrayBuffer:()=>isArrayBuffer,isBoolean:()=>isBoolean,isDataView:()=>modules_isDataView,isDate:()=>isDate,isElement:()=>isElement,isEmpty:()=>isEmpty,isEqual:()=>isEqual,isError:()=>isError,isFinite:()=>isFinite_isFinite,isFunction:()=>modules_isFunction,isMap:()=>isMap,isMatch:()=>isMatch,isNaN:()=>isNaN_isNaN,isNull:()=>isNull,isNumber:()=>isNumber,isObject:()=>isObject,isRegExp:()=>isRegExp,isSet:()=>isSet,isString:()=>isString,isSymbol:()=>isSymbol,isTypedArray:()=>modules_isTypedArray,isUndefined:()=>isUndefined,isWeakMap:()=>isWeakMap,isWeakSet:()=>isWeakSet,iteratee:()=>iteratee,keys:()=>keys,last:()=>last,lastIndexOf:()=>lastIndexOf,map:()=>map,mapObject:()=>mapObject,matcher:()=>matcher,matches:()=>matcher,max:()=>max,memoize:()=>memoize,methods:()=>functions,min:()=>min,mixin:()=>mixin,negate:()=>negate,noop:()=>noop,now:()=>now,object:()=>object,omit:()=>omit,once:()=>once,pairs:()=>pairs,partial:()=>modules_partial,partition:()=>partition,pick:()=>pick,pluck:()=>pluck,property:()=>property,propertyOf:()=>propertyOf,random:()=>random,range:()=>range,reduce:()=>reduce,reduceRight:()=>reduceRight,reject:()=>reject,rest:()=>rest,restArguments:()=>restArguments,result:()=>result,sample:()=>sample,select:()=>filter,shuffle:()=>shuffle,size:()=>size,some:()=>some,sortBy:()=>sortBy,sortedIndex:()=>sortedIndex,tail:()=>rest,take:()=>first,tap:()=>tap,template:()=>template,templateSettings:()=>templateSettings,throttle:()=>throttle,times:()=>times,toArray:()=>toArray,toPath:()=>toPath,transpose:()=>unzip,unescape:()=>modules_unescape,union:()=>union,uniq:()=>uniq,unique:()=>uniq,uniqueId:()=>uniqueId,unzip:()=>unzip,values:()=>values,where:()=>where,without:()=>without,wrap:()=>wrap,zip:()=>zip});var modules_namespaceObject={};__webpack_require__.r(modules_namespaceObject),__webpack_require__.d(modules_namespaceObject,{VERSION:()=>VERSION,after:()=>after,all:()=>every,allKeys:()=>allKeys,any:()=>some,assign:()=>extendOwn,before:()=>before,bind:()=>bind,bindAll:()=>bindAll,chain:()=>chain,chunk:()=>chunk,clone:()=>clone,collect:()=>map,compact:()=>compact,compose:()=>compose,constant:()=>constant,contains:()=>contains,countBy:()=>countBy,create:()=>create,debounce:()=>debounce,default:()=>underscore_array_methods,defaults:()=>defaults,defer:()=>defer,delay:()=>delay,detect:()=>find,difference:()=>difference,drop:()=>rest,each:()=>each,escape:()=>modules_escape,every:()=>every,extend:()=>extend,extendOwn:()=>extendOwn,filter:()=>filter,find:()=>find,findIndex:()=>findIndex,findKey:()=>findKey,findLastIndex:()=>findLastIndex,findWhere:()=>findWhere,first:()=>first,flatten:()=>flatten_flatten,foldl:()=>reduce,foldr:()=>reduceRight,forEach:()=>each,functions:()=>functions,get:()=>get,groupBy:()=>groupBy,has:()=>has_has,head:()=>first,identity:()=>identity,include:()=>contains,includes:()=>contains,indexBy:()=>indexBy,indexOf:()=>indexOf,initial:()=>initial,inject:()=>reduce,intersection:()=>intersection,invert:()=>invert,invoke:()=>invoke,isArguments:()=>modules_isArguments,isArray:()=>isArray,isArrayBuffer:()=>isArrayBuffer,isBoolean:()=>isBoolean,isDataView:()=>modules_isDataView,isDate:()=>isDate,isElement:()=>isElement,isEmpty:()=>isEmpty,isEqual:()=>isEqual,isError:()=>isError,isFinite:()=>isFinite_isFinite,isFunction:()=>modules_isFunction,isMap:()=>isMap,isMatch:()=>isMatch,isNaN:()=>isNaN_isNaN,isNull:()=>isNull,isNumber:()=>isNumber,isObject:()=>isObject,isRegExp:()=>isRegExp,isSet:()=>isSet,isString:()=>isString,isSymbol:()=>isSymbol,isTypedArray:()=>modules_isTypedArray,isUndefined:()=>isUndefined,isWeakMap:()=>isWeakMap,isWeakSet:()=>isWeakSet,iteratee:()=>iteratee,keys:()=>keys,last:()=>last,lastIndexOf:()=>lastIndexOf,map:()=>map,mapObject:()=>mapObject,matcher:()=>matcher,matches:()=>matcher,max:()=>max,memoize:()=>memoize,methods:()=>functions,min:()=>min,mixin:()=>mixin,negate:()=>negate,noop:()=>noop,now:()=>now,object:()=>object,omit:()=>omit,once:()=>once,pairs:()=>pairs,partial:()=>modules_partial,partition:()=>partition,pick:()=>pick,pluck:()=>pluck,property:()=>property,propertyOf:()=>propertyOf,random:()=>random,range:()=>range,reduce:()=>reduce,reduceRight:()=>reduceRight,reject:()=>reject,rest:()=>rest,restArguments:()=>restArguments,result:()=>result,sample:()=>sample,select:()=>filter,shuffle:()=>shuffle,size:()=>size,some:()=>some,sortBy:()=>sortBy,sortedIndex:()=>sortedIndex,tail:()=>rest,take:()=>first,tap:()=>tap,template:()=>template,templateSettings:()=>templateSettings,throttle:()=>throttle,times:()=>times,toArray:()=>toArray,toPath:()=>toPath,transpose:()=>unzip,unescape:()=>modules_unescape,union:()=>union,uniq:()=>uniq,unique:()=>uniq,uniqueId:()=>uniqueId,unzip:()=>unzip,values:()=>values,where:()=>where,without:()=>without,wrap:()=>wrap,zip:()=>zip});var VERSION="1.13.6",root="object"==typeof self&&self.self===self&&self||"object"==typeof __webpack_require__.g&&__webpack_require__.g.global===__webpack_require__.g&&__webpack_require__.g||Function("return this")()||{},ArrayProto=Array.prototype,ObjProto=Object.prototype,SymbolProto="undefined"!=typeof Symbol?Symbol.prototype:null,push=ArrayProto.push,slice=ArrayProto.slice,_setup_toString=ObjProto.toString,_setup_hasOwnProperty=ObjProto.hasOwnProperty,supportsArrayBuffer="undefined"!=typeof ArrayBuffer,supportsDataView="undefined"!=typeof DataView,nativeIsArray=Array.isArray,nativeKeys=Object.keys,nativeCreate=Object.create,nativeIsView=supportsArrayBuffer&&ArrayBuffer.isView,_isNaN=isNaN,_isFinite=isFinite,hasEnumBug=!{toString:null}.propertyIsEnumerable("toString"),nonEnumerableProps=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],MAX_ARRAY_INDEX=Math.pow(2,53)-1;function restArguments(func,startIndex){return startIndex=null==startIndex?func.length-1:+startIndex,function(){for(var length=Math.max(arguments.length-startIndex,0),rest=Array(length),index=0;index<length;index++)rest[index]=arguments[index+startIndex];switch(startIndex){case 0:return func.call(this,rest);case 1:return func.call(this,arguments[0],rest);case 2:return func.call(this,arguments[0],arguments[1],rest)}var args=Array(startIndex+1);for(index=0;index<startIndex;index++)args[index]=arguments[index];return args[startIndex]=rest,func.apply(this,args)}}function isObject(obj){var type=typeof obj;return"function"===type||"object"===type&&!!obj}function isNull(obj){return null===obj}function isUndefined(obj){return void 0===obj}function isBoolean(obj){return!0===obj||!1===obj||"[object Boolean]"===_setup_toString.call(obj)}function isElement(obj){return!(!obj||1!==obj.nodeType)}function tagTester(name){var tag="[object "+name+"]";return function(obj){return _setup_toString.call(obj)===tag}}const isString=tagTester("String"),isNumber=tagTester("Number"),isDate=tagTester("Date"),isRegExp=tagTester("RegExp"),isError=tagTester("Error"),isSymbol=tagTester("Symbol"),isArrayBuffer=tagTester("ArrayBuffer");var isFunction=tagTester("Function"),nodelist=root.document&&root.document.childNodes;"object"!=typeof Int8Array&&"function"!=typeof nodelist&&(isFunction=function(obj){return"function"==typeof obj||!1});const modules_isFunction=isFunction,_hasObjectTag=tagTester("Object");var hasStringTagBug=supportsDataView&&_hasObjectTag(new DataView(new ArrayBuffer(8))),isIE11="undefined"!=typeof Map&&_hasObjectTag(new Map),isDataView=tagTester("DataView");const modules_isDataView=hasStringTagBug?function ie10IsDataView(obj){return null!=obj&&modules_isFunction(obj.getInt8)&&isArrayBuffer(obj.buffer)}:isDataView,isArray=nativeIsArray||tagTester("Array");function has(obj,key){return null!=obj&&_setup_hasOwnProperty.call(obj,key)}var isArguments=tagTester("Arguments");!function(){isArguments(arguments)||(isArguments=function(obj){return has(obj,"callee")})}();const modules_isArguments=isArguments;function isFinite_isFinite(obj){return!isSymbol(obj)&&_isFinite(obj)&&!isNaN(parseFloat(obj))}function isNaN_isNaN(obj){return isNumber(obj)&&_isNaN(obj)}function constant(value){return function(){return value}}function createSizePropertyCheck(getSizeProperty){return function(collection){var sizeProperty=getSizeProperty(collection);return"number"==typeof sizeProperty&&sizeProperty>=0&&sizeProperty<=MAX_ARRAY_INDEX}}function shallowProperty(key){return function(obj){return null==obj?void 0:obj[key]}}const _getByteLength=shallowProperty("byteLength"),_isBufferLike=createSizePropertyCheck(_getByteLength);var typedArrayPattern=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;const modules_isTypedArray=supportsArrayBuffer?function isTypedArray(obj){return nativeIsView?nativeIsView(obj)&&!modules_isDataView(obj):_isBufferLike(obj)&&typedArrayPattern.test(_setup_toString.call(obj))}:constant(!1),_getLength=shallowProperty("length");function collectNonEnumProps(obj,keys){keys=function emulatedSet(keys){for(var hash={},l=keys.length,i=0;i<l;++i)hash[keys[i]]=!0;return{contains:function(key){return!0===hash[key]},push:function(key){return hash[key]=!0,keys.push(key)}}}(keys);var nonEnumIdx=nonEnumerableProps.length,constructor=obj.constructor,proto=modules_isFunction(constructor)&&constructor.prototype||ObjProto,prop="constructor";for(has(obj,prop)&&!keys.contains(prop)&&keys.push(prop);nonEnumIdx--;)(prop=nonEnumerableProps[nonEnumIdx])in obj&&obj[prop]!==proto[prop]&&!keys.contains(prop)&&keys.push(prop)}function keys(obj){if(!isObject(obj))return[];if(nativeKeys)return nativeKeys(obj);var keys=[];for(var key in obj)has(obj,key)&&keys.push(key);return hasEnumBug&&collectNonEnumProps(obj,keys),keys}function isEmpty(obj){if(null==obj)return!0;var length=_getLength(obj);return"number"==typeof length&&(isArray(obj)||isString(obj)||modules_isArguments(obj))?0===length:0===_getLength(keys(obj))}function isMatch(object,attrs){var _keys=keys(attrs),length=_keys.length;if(null==object)return!length;for(var obj=Object(object),i=0;i<length;i++){var key=_keys[i];if(attrs[key]!==obj[key]||!(key in obj))return!1}return!0}function _(obj){return obj instanceof _?obj:this instanceof _?void(this._wrapped=obj):new _(obj)}function toBufferView(bufferSource){return new Uint8Array(bufferSource.buffer||bufferSource,bufferSource.byteOffset||0,_getByteLength(bufferSource))}_.VERSION=VERSION,_.prototype.value=function(){return this._wrapped},_.prototype.valueOf=_.prototype.toJSON=_.prototype.value,_.prototype.toString=function(){return String(this._wrapped)};var tagDataView="[object DataView]";function eq(a,b,aStack,bStack){if(a===b)return 0!==a||1/a==1/b;if(null==a||null==b)return!1;if(a!=a)return b!=b;var type=typeof a;return("function"===type||"object"===type||"object"==typeof b)&&deepEq(a,b,aStack,bStack)}function deepEq(a,b,aStack,bStack){a instanceof _&&(a=a._wrapped),b instanceof _&&(b=b._wrapped);var className=_setup_toString.call(a);if(className!==_setup_toString.call(b))return!1;if(hasStringTagBug&&"[object Object]"==className&&modules_isDataView(a)){if(!modules_isDataView(b))return!1;className=tagDataView}switch(className){case"[object RegExp]":case"[object String]":return""+a==""+b;case"[object Number]":return+a!=+a?+b!=+b:0==+a?1/+a==1/b:+a==+b;case"[object Date]":case"[object Boolean]":return+a==+b;case"[object Symbol]":return SymbolProto.valueOf.call(a)===SymbolProto.valueOf.call(b);case"[object ArrayBuffer]":case tagDataView:return deepEq(toBufferView(a),toBufferView(b),aStack,bStack)}var areArrays="[object Array]"===className;if(!areArrays&&modules_isTypedArray(a)){if(_getByteLength(a)!==_getByteLength(b))return!1;if(a.buffer===b.buffer&&a.byteOffset===b.byteOffset)return!0;areArrays=!0}if(!areArrays){if("object"!=typeof a||"object"!=typeof b)return!1;var aCtor=a.constructor,bCtor=b.constructor;if(aCtor!==bCtor&&!(modules_isFunction(aCtor)&&aCtor instanceof aCtor&&modules_isFunction(bCtor)&&bCtor instanceof bCtor)&&"constructor"in a&&"constructor"in b)return!1}bStack=bStack||[];for(var length=(aStack=aStack||[]).length;length--;)if(aStack[length]===a)return bStack[length]===b;if(aStack.push(a),bStack.push(b),areArrays){if((length=a.length)!==b.length)return!1;for(;length--;)if(!eq(a[length],b[length],aStack,bStack))return!1}else{var key,_keys=keys(a);if(length=_keys.length,keys(b).length!==length)return!1;for(;length--;)if(!has(b,key=_keys[length])||!eq(a[key],b[key],aStack,bStack))return!1}return aStack.pop(),bStack.pop(),!0}function isEqual(a,b){return eq(a,b)}function allKeys(obj){if(!isObject(obj))return[];var keys=[];for(var key in obj)keys.push(key);return hasEnumBug&&collectNonEnumProps(obj,keys),keys}function ie11fingerprint(methods){var length=_getLength(methods);return function(obj){if(null==obj)return!1;var keys=allKeys(obj);if(_getLength(keys))return!1;for(var i=0;i<length;i++)if(!modules_isFunction(obj[methods[i]]))return!1;return methods!==weakMapMethods||!modules_isFunction(obj[forEachName])}}var forEachName="forEach",commonInit=["clear","delete"],mapTail=["get","has","set"],mapMethods=commonInit.concat(forEachName,mapTail),weakMapMethods=commonInit.concat(mapTail),setMethods=["add"].concat(commonInit,forEachName,"has");const isMap=isIE11?ie11fingerprint(mapMethods):tagTester("Map"),isWeakMap=isIE11?ie11fingerprint(weakMapMethods):tagTester("WeakMap"),isSet=isIE11?ie11fingerprint(setMethods):tagTester("Set"),isWeakSet=tagTester("WeakSet");function values(obj){for(var _keys=keys(obj),length=_keys.length,values=Array(length),i=0;i<length;i++)values[i]=obj[_keys[i]];return values}function pairs(obj){for(var _keys=keys(obj),length=_keys.length,pairs=Array(length),i=0;i<length;i++)pairs[i]=[_keys[i],obj[_keys[i]]];return pairs}function invert(obj){for(var result={},_keys=keys(obj),i=0,length=_keys.length;i<length;i++)result[obj[_keys[i]]]=_keys[i];return result}function functions(obj){var names=[];for(var key in obj)modules_isFunction(obj[key])&&names.push(key);return names.sort()}function createAssigner(keysFunc,defaults){return function(obj){var length=arguments.length;if(defaults&&(obj=Object(obj)),length<2||null==obj)return obj;for(var index=1;index<length;index++)for(var source=arguments[index],keys=keysFunc(source),l=keys.length,i=0;i<l;i++){var key=keys[i];defaults&&void 0!==obj[key]||(obj[key]=source[key])}return obj}}const extend=createAssigner(allKeys),extendOwn=createAssigner(keys),defaults=createAssigner(allKeys,!0);function baseCreate(prototype){if(!isObject(prototype))return{};if(nativeCreate)return nativeCreate(prototype);var Ctor=function(){};Ctor.prototype=prototype;var result=new Ctor;return Ctor.prototype=null,result}function create(prototype,props){var result=baseCreate(prototype);return props&&extendOwn(result,props),result}function clone(obj){return isObject(obj)?isArray(obj)?obj.slice():extend({},obj):obj}function tap(obj,interceptor){return interceptor(obj),obj}function toPath(path){return isArray(path)?path:[path]}function _toPath_toPath(path){return _.toPath(path)}function deepGet(obj,path){for(var length=path.length,i=0;i<length;i++){if(null==obj)return;obj=obj[path[i]]}return length?obj:void 0}function get(object,path,defaultValue){var value=deepGet(object,_toPath_toPath(path));return isUndefined(value)?defaultValue:value}function has_has(obj,path){for(var length=(path=_toPath_toPath(path)).length,i=0;i<length;i++){var key=path[i];if(!has(obj,key))return!1;obj=obj[key]}return!!length}function identity(value){return value}function matcher(attrs){return attrs=extendOwn({},attrs),function(obj){return isMatch(obj,attrs)}}function property(path){return path=_toPath_toPath(path),function(obj){return deepGet(obj,path)}}function optimizeCb(func,context,argCount){if(void 0===context)return func;switch(null==argCount?3:argCount){case 1:return function(value){return func.call(context,value)};case 3:return function(value,index,collection){return func.call(context,value,index,collection)};case 4:return function(accumulator,value,index,collection){return func.call(context,accumulator,value,index,collection)}}return function(){return func.apply(context,arguments)}}function baseIteratee(value,context,argCount){return null==value?identity:modules_isFunction(value)?optimizeCb(value,context,argCount):isObject(value)&&!isArray(value)?matcher(value):property(value)}function iteratee(value,context){return baseIteratee(value,context,1/0)}function cb(value,context,argCount){return _.iteratee!==iteratee?_.iteratee(value,context):baseIteratee(value,context,argCount)}function mapObject(obj,iteratee,context){iteratee=cb(iteratee,context);for(var _keys=keys(obj),length=_keys.length,results={},index=0;index<length;index++){var currentKey=_keys[index];results[currentKey]=iteratee(obj[currentKey],currentKey,obj)}return results}function noop(){}function propertyOf(obj){return null==obj?noop:function(path){return get(obj,path)}}function times(n,iteratee,context){var accum=Array(Math.max(0,n));iteratee=optimizeCb(iteratee,context,1);for(var i=0;i<n;i++)accum[i]=iteratee(i);return accum}function random(min,max){return null==max&&(max=min,min=0),min+Math.floor(Math.random()*(max-min+1))}_.toPath=toPath,_.iteratee=iteratee;const now=Date.now||function(){return(new Date).getTime()};function createEscaper(map){var escaper=function(match){return map[match]},source="(?:"+keys(map).join("|")+")",testRegexp=RegExp(source),replaceRegexp=RegExp(source,"g");return function(string){return string=null==string?"":""+string,testRegexp.test(string)?string.replace(replaceRegexp,escaper):string}}const _escapeMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},modules_escape=createEscaper(_escapeMap),modules_unescape=createEscaper(invert(_escapeMap)),templateSettings=_.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var noMatch=/(.)^/,escapes={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},escapeRegExp=/\\|'|\r|\n|\u2028|\u2029/g;function escapeChar(match){return"\\"+escapes[match]}var bareIdentifier=/^\s*(\w|\$)+\s*$/;function template(text,settings,oldSettings){!settings&&oldSettings&&(settings=oldSettings),settings=defaults({},settings,_.templateSettings);var matcher=RegExp([(settings.escape||noMatch).source,(settings.interpolate||noMatch).source,(settings.evaluate||noMatch).source].join("|")+"|$","g"),index=0,source="__p+='";text.replace(matcher,(function(match,escape,interpolate,evaluate,offset){return source+=text.slice(index,offset).replace(escapeRegExp,escapeChar),index=offset+match.length,escape?source+="'+\n((__t=("+escape+"))==null?'':_.escape(__t))+\n'":interpolate?source+="'+\n((__t=("+interpolate+"))==null?'':__t)+\n'":evaluate&&(source+="';\n"+evaluate+"\n__p+='"),match})),source+="';\n";var render,argument=settings.variable;if(argument){if(!bareIdentifier.test(argument))throw new Error("variable is not a bare identifier: "+argument)}else source="with(obj||{}){\n"+source+"}\n",argument="obj";source="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+source+"return __p;\n";try{render=new Function(argument,"_",source)}catch(e){throw e.source=source,e}var template=function(data){return render.call(this,data,_)};return template.source="function("+argument+"){\n"+source+"}",template}function result(obj,path,fallback){var length=(path=_toPath_toPath(path)).length;if(!length)return modules_isFunction(fallback)?fallback.call(obj):fallback;for(var i=0;i<length;i++){var prop=null==obj?void 0:obj[path[i]];void 0===prop&&(prop=fallback,i=length),obj=modules_isFunction(prop)?prop.call(obj):prop}return obj}var idCounter=0;function uniqueId(prefix){var id=++idCounter+"";return prefix?prefix+id:id}function chain(obj){var instance=_(obj);return instance._chain=!0,instance}function executeBound(sourceFunc,boundFunc,context,callingContext,args){if(!(callingContext instanceof boundFunc))return sourceFunc.apply(context,args);var self=baseCreate(sourceFunc.prototype),result=sourceFunc.apply(self,args);return isObject(result)?result:self}var partial=restArguments((function(func,boundArgs){var placeholder=partial.placeholder,bound=function(){for(var position=0,length=boundArgs.length,args=Array(length),i=0;i<length;i++)args[i]=boundArgs[i]===placeholder?arguments[position++]:boundArgs[i];for(;position<arguments.length;)args.push(arguments[position++]);return executeBound(func,bound,this,this,args)};return bound}));partial.placeholder=_;const modules_partial=partial,bind=restArguments((function(func,context,args){if(!modules_isFunction(func))throw new TypeError("Bind must be called on a function");var bound=restArguments((function(callArgs){return executeBound(func,bound,context,this,args.concat(callArgs))}));return bound})),_isArrayLike=createSizePropertyCheck(_getLength);function flatten(input,depth,strict,output){if(output=output||[],depth||0===depth){if(depth<=0)return output.concat(input)}else depth=1/0;for(var idx=output.length,i=0,length=_getLength(input);i<length;i++){var value=input[i];if(_isArrayLike(value)&&(isArray(value)||modules_isArguments(value)))if(depth>1)flatten(value,depth-1,strict,output),idx=output.length;else for(var j=0,len=value.length;j<len;)output[idx++]=value[j++];else strict||(output[idx++]=value)}return output}const bindAll=restArguments((function(obj,keys){var index=(keys=flatten(keys,!1,!1)).length;if(index<1)throw new Error("bindAll must be passed function names");for(;index--;){var key=keys[index];obj[key]=bind(obj[key],obj)}return obj}));function memoize(func,hasher){var memoize=function(key){var cache=memoize.cache,address=""+(hasher?hasher.apply(this,arguments):key);return has(cache,address)||(cache[address]=func.apply(this,arguments)),cache[address]};return memoize.cache={},memoize}const delay=restArguments((function(func,wait,args){return setTimeout((function(){return func.apply(null,args)}),wait)})),defer=modules_partial(delay,_,1);function throttle(func,wait,options){var timeout,context,args,result,previous=0;options||(options={});var later=function(){previous=!1===options.leading?0:now(),timeout=null,result=func.apply(context,args),timeout||(context=args=null)},throttled=function(){var _now=now();previous||!1!==options.leading||(previous=_now);var remaining=wait-(_now-previous);return context=this,args=arguments,remaining<=0||remaining>wait?(timeout&&(clearTimeout(timeout),timeout=null),previous=_now,result=func.apply(context,args),timeout||(context=args=null)):timeout||!1===options.trailing||(timeout=setTimeout(later,remaining)),result};return throttled.cancel=function(){clearTimeout(timeout),previous=0,timeout=context=args=null},throttled}function debounce(func,wait,immediate){var timeout,previous,args,result,context,later=function(){var passed=now()-previous;wait>passed?timeout=setTimeout(later,wait-passed):(timeout=null,immediate||(result=func.apply(context,args)),timeout||(args=context=null))},debounced=restArguments((function(_args){return context=this,args=_args,previous=now(),timeout||(timeout=setTimeout(later,wait),immediate&&(result=func.apply(context,args))),result}));return debounced.cancel=function(){clearTimeout(timeout),timeout=args=context=null},debounced}function wrap(func,wrapper){return modules_partial(wrapper,func)}function negate(predicate){return function(){return!predicate.apply(this,arguments)}}function compose(){var args=arguments,start=args.length-1;return function(){for(var i=start,result=args[start].apply(this,arguments);i--;)result=args[i].call(this,result);return result}}function after(times,func){return function(){if(--times<1)return func.apply(this,arguments)}}function before(times,func){var memo;return function(){return--times>0&&(memo=func.apply(this,arguments)),times<=1&&(func=null),memo}}const once=modules_partial(before,2);function findKey(obj,predicate,context){predicate=cb(predicate,context);for(var key,_keys=keys(obj),i=0,length=_keys.length;i<length;i++)if(predicate(obj[key=_keys[i]],key,obj))return key}function createPredicateIndexFinder(dir){return function(array,predicate,context){predicate=cb(predicate,context);for(var length=_getLength(array),index=dir>0?0:length-1;index>=0&&index<length;index+=dir)if(predicate(array[index],index,array))return index;return-1}}const findIndex=createPredicateIndexFinder(1),findLastIndex=createPredicateIndexFinder(-1);function sortedIndex(array,obj,iteratee,context){for(var value=(iteratee=cb(iteratee,context,1))(obj),low=0,high=_getLength(array);low<high;){var mid=Math.floor((low+high)/2);iteratee(array[mid])<value?low=mid+1:high=mid}return low}function createIndexFinder(dir,predicateFind,sortedIndex){return function(array,item,idx){var i=0,length=_getLength(array);if("number"==typeof idx)dir>0?i=idx>=0?idx:Math.max(idx+length,i):length=idx>=0?Math.min(idx+1,length):idx+length+1;else if(sortedIndex&&idx&&length)return array[idx=sortedIndex(array,item)]===item?idx:-1;if(item!=item)return(idx=predicateFind(slice.call(array,i,length),isNaN_isNaN))>=0?idx+i:-1;for(idx=dir>0?i:length-1;idx>=0&&idx<length;idx+=dir)if(array[idx]===item)return idx;return-1}}const indexOf=createIndexFinder(1,findIndex,sortedIndex),lastIndexOf=createIndexFinder(-1,findLastIndex);function find(obj,predicate,context){var key=(_isArrayLike(obj)?findIndex:findKey)(obj,predicate,context);if(void 0!==key&&-1!==key)return obj[key]}function findWhere(obj,attrs){return find(obj,matcher(attrs))}function each(obj,iteratee,context){var i,length;if(iteratee=optimizeCb(iteratee,context),_isArrayLike(obj))for(i=0,length=obj.length;i<length;i++)iteratee(obj[i],i,obj);else{var _keys=keys(obj);for(i=0,length=_keys.length;i<length;i++)iteratee(obj[_keys[i]],_keys[i],obj)}return obj}function map(obj,iteratee,context){iteratee=cb(iteratee,context);for(var _keys=!_isArrayLike(obj)&&keys(obj),length=(_keys||obj).length,results=Array(length),index=0;index<length;index++){var currentKey=_keys?_keys[index]:index;results[index]=iteratee(obj[currentKey],currentKey,obj)}return results}function createReduce(dir){return function(obj,iteratee,memo,context){var initial=arguments.length>=3;return function(obj,iteratee,memo,initial){var _keys=!_isArrayLike(obj)&&keys(obj),length=(_keys||obj).length,index=dir>0?0:length-1;for(initial||(memo=obj[_keys?_keys[index]:index],index+=dir);index>=0&&index<length;index+=dir){var currentKey=_keys?_keys[index]:index;memo=iteratee(memo,obj[currentKey],currentKey,obj)}return memo}(obj,optimizeCb(iteratee,context,4),memo,initial)}}const reduce=createReduce(1),reduceRight=createReduce(-1);function filter(obj,predicate,context){var results=[];return predicate=cb(predicate,context),each(obj,(function(value,index,list){predicate(value,index,list)&&results.push(value)})),results}function reject(obj,predicate,context){return filter(obj,negate(cb(predicate)),context)}function every(obj,predicate,context){predicate=cb(predicate,context);for(var _keys=!_isArrayLike(obj)&&keys(obj),length=(_keys||obj).length,index=0;index<length;index++){var currentKey=_keys?_keys[index]:index;if(!predicate(obj[currentKey],currentKey,obj))return!1}return!0}function some(obj,predicate,context){predicate=cb(predicate,context);for(var _keys=!_isArrayLike(obj)&&keys(obj),length=(_keys||obj).length,index=0;index<length;index++){var currentKey=_keys?_keys[index]:index;if(predicate(obj[currentKey],currentKey,obj))return!0}return!1}function contains(obj,item,fromIndex,guard){return _isArrayLike(obj)||(obj=values(obj)),("number"!=typeof fromIndex||guard)&&(fromIndex=0),indexOf(obj,item,fromIndex)>=0}const invoke=restArguments((function(obj,path,args){var contextPath,func;return modules_isFunction(path)?func=path:(path=_toPath_toPath(path),contextPath=path.slice(0,-1),path=path[path.length-1]),map(obj,(function(context){var method=func;if(!method){if(contextPath&&contextPath.length&&(context=deepGet(context,contextPath)),null==context)return;method=context[path]}return null==method?method:method.apply(context,args)}))}));function pluck(obj,key){return map(obj,property(key))}function where(obj,attrs){return filter(obj,matcher(attrs))}function max(obj,iteratee,context){var value,computed,result=-1/0,lastComputed=-1/0;if(null==iteratee||"number"==typeof iteratee&&"object"!=typeof obj[0]&&null!=obj)for(var i=0,length=(obj=_isArrayLike(obj)?obj:values(obj)).length;i<length;i++)null!=(value=obj[i])&&value>result&&(result=value);else iteratee=cb(iteratee,context),each(obj,(function(v,index,list){((computed=iteratee(v,index,list))>lastComputed||computed===-1/0&&result===-1/0)&&(result=v,lastComputed=computed)}));return result}function min(obj,iteratee,context){var value,computed,result=1/0,lastComputed=1/0;if(null==iteratee||"number"==typeof iteratee&&"object"!=typeof obj[0]&&null!=obj)for(var i=0,length=(obj=_isArrayLike(obj)?obj:values(obj)).length;i<length;i++)null!=(value=obj[i])&&value<result&&(result=value);else iteratee=cb(iteratee,context),each(obj,(function(v,index,list){((computed=iteratee(v,index,list))<lastComputed||computed===1/0&&result===1/0)&&(result=v,lastComputed=computed)}));return result}var reStrSymbol=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function toArray(obj){return obj?isArray(obj)?slice.call(obj):isString(obj)?obj.match(reStrSymbol):_isArrayLike(obj)?map(obj,identity):values(obj):[]}function sample(obj,n,guard){if(null==n||guard)return _isArrayLike(obj)||(obj=values(obj)),obj[random(obj.length-1)];var sample=toArray(obj),length=_getLength(sample);n=Math.max(Math.min(n,length),0);for(var last=length-1,index=0;index<n;index++){var rand=random(index,last),temp=sample[index];sample[index]=sample[rand],sample[rand]=temp}return sample.slice(0,n)}function shuffle(obj){return sample(obj,1/0)}function sortBy(obj,iteratee,context){var index=0;return iteratee=cb(iteratee,context),pluck(map(obj,(function(value,key,list){return{value,index:index++,criteria:iteratee(value,key,list)}})).sort((function(left,right){var a=left.criteria,b=right.criteria;if(a!==b){if(a>b||void 0===a)return 1;if(a<b||void 0===b)return-1}return left.index-right.index})),"value")}function group(behavior,partition){return function(obj,iteratee,context){var result=partition?[[],[]]:{};return iteratee=cb(iteratee,context),each(obj,(function(value,index){var key=iteratee(value,index,obj);behavior(result,value,key)})),result}}const groupBy=group((function(result,value,key){has(result,key)?result[key].push(value):result[key]=[value]})),indexBy=group((function(result,value,key){result[key]=value})),countBy=group((function(result,value,key){has(result,key)?result[key]++:result[key]=1})),partition=group((function(result,value,pass){result[pass?0:1].push(value)}),!0);function size(obj){return null==obj?0:_isArrayLike(obj)?obj.length:keys(obj).length}function keyInObj(value,key,obj){return key in obj}const pick=restArguments((function(obj,keys){var result={},iteratee=keys[0];if(null==obj)return result;modules_isFunction(iteratee)?(keys.length>1&&(iteratee=optimizeCb(iteratee,keys[1])),keys=allKeys(obj)):(iteratee=keyInObj,keys=flatten(keys,!1,!1),obj=Object(obj));for(var i=0,length=keys.length;i<length;i++){var key=keys[i],value=obj[key];iteratee(value,key,obj)&&(result[key]=value)}return result})),omit=restArguments((function(obj,keys){var context,iteratee=keys[0];return modules_isFunction(iteratee)?(iteratee=negate(iteratee),keys.length>1&&(context=keys[1])):(keys=map(flatten(keys,!1,!1),String),iteratee=function(value,key){return!contains(keys,key)}),pick(obj,iteratee,context)}));function initial(array,n,guard){return slice.call(array,0,Math.max(0,array.length-(null==n||guard?1:n)))}function first(array,n,guard){return null==array||array.length<1?null==n||guard?void 0:[]:null==n||guard?array[0]:initial(array,array.length-n)}function rest(array,n,guard){return slice.call(array,null==n||guard?1:n)}function last(array,n,guard){return null==array||array.length<1?null==n||guard?void 0:[]:null==n||guard?array[array.length-1]:rest(array,Math.max(0,array.length-n))}function compact(array){return filter(array,Boolean)}function flatten_flatten(array,depth){return flatten(array,depth,!1)}const difference=restArguments((function(array,rest){return rest=flatten(rest,!0,!0),filter(array,(function(value){return!contains(rest,value)}))})),without=restArguments((function(array,otherArrays){return difference(array,otherArrays)}));function uniq(array,isSorted,iteratee,context){isBoolean(isSorted)||(context=iteratee,iteratee=isSorted,isSorted=!1),null!=iteratee&&(iteratee=cb(iteratee,context));for(var result=[],seen=[],i=0,length=_getLength(array);i<length;i++){var value=array[i],computed=iteratee?iteratee(value,i,array):value;isSorted&&!iteratee?(i&&seen===computed||result.push(value),seen=computed):iteratee?contains(seen,computed)||(seen.push(computed),result.push(value)):contains(result,value)||result.push(value)}return result}const union=restArguments((function(arrays){return uniq(flatten(arrays,!0,!0))}));function intersection(array){for(var result=[],argsLength=arguments.length,i=0,length=_getLength(array);i<length;i++){var item=array[i];if(!contains(result,item)){var j;for(j=1;j<argsLength&&contains(arguments[j],item);j++);j===argsLength&&result.push(item)}}return result}function unzip(array){for(var length=array&&max(array,_getLength).length||0,result=Array(length),index=0;index<length;index++)result[index]=pluck(array,index);return result}const zip=restArguments(unzip);function object(list,values){for(var result={},i=0,length=_getLength(list);i<length;i++)values?result[list[i]]=values[i]:result[list[i][0]]=list[i][1];return result}function range(start,stop,step){null==stop&&(stop=start||0,start=0),step||(step=stop<start?-1:1);for(var length=Math.max(Math.ceil((stop-start)/step),0),range=Array(length),idx=0;idx<length;idx++,start+=step)range[idx]=start;return range}function chunk(array,count){if(null==count||count<1)return[];for(var result=[],i=0,length=array.length;i<length;)result.push(slice.call(array,i,i+=count));return result}function chainResult(instance,obj){return instance._chain?_(obj).chain():obj}function mixin(obj){return each(functions(obj),(function(name){var func=_[name]=obj[name];_.prototype[name]=function(){var args=[this._wrapped];return push.apply(args,arguments),chainResult(this,func.apply(_,args))}})),_}each(["pop","push","reverse","shift","sort","splice","unshift"],(function(name){var method=ArrayProto[name];_.prototype[name]=function(){var obj=this._wrapped;return null!=obj&&(method.apply(obj,arguments),"shift"!==name&&"splice"!==name||0!==obj.length||delete obj[0]),chainResult(this,obj)}})),each(["concat","join","slice"],(function(name){var method=ArrayProto[name];_.prototype[name]=function(){var obj=this._wrapped;return null!=obj&&(obj=method.apply(obj,arguments)),chainResult(this,obj)}}));const underscore_array_methods=_;var index_default_=mixin(modules_namespaceObject);index_default_._=index_default_;const index_default=index_default_}}]);