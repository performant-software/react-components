/*! For license information please see 4922.1a4d7fda.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_performant_software_storybook=self.webpackChunk_performant_software_storybook||[]).push([[4922],{"../semantic-ui/src/utils/Bibliography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Bibliography});var index_all=__webpack_require__("../../node_modules/underscore/modules/index-all.js"),main=__webpack_require__("../../node_modules/zotero-api-client/lib/main.cjs");const BibliographyTypes_namespaceObject=JSON.parse('{"artwork":{"medium":"artworkMedium"},"audioRecording":{"medium":"audioRecordingFormat","publisher":"label"},"bill":{"number":"billNumber","volume":"codeVolume","pages":"codePages"},"blogPost":{"publicationTitle":"blogTitle","type":"websiteType"},"bookSection":{"publicationTitle":"bookTitle"},"case":{"title":"caseName","date":"dateDecided","number":"docketNumber","volume":"reporterVolume","pages":"firstPage"},"computerProgram":{"publisher":"company"},"conferencePaper":{"publicationTitle":"proceedingsTitle"},"dictionaryEntry":{"publicationTitle":"dictionaryTitle"},"email":{"title":"subject"},"encyclopediaArticle":{"publicationTitle":"encyclopediaTitle"},"film":{"publisher":"distributor","type":"genre","medium":"videoRecordingFormat"},"forumPost":{"publicationTitle":"forumTitle","type":"postType"},"hearing":{"number":"documentNumber"},"interview":{"medium":"interviewMedium"},"letter":{"type":"letterType"},"manuscript":{"type":"manuscriptType"},"map":{"type":"mapType"},"patent":{"number":"patentNumber","date":"issueDate"},"podcast":{"number":"episodeNumber","medium":"audioFileType"},"preprint":{"type":"genre","publisher":"repository","number":"archiveID"},"presentation":{"type":"presentationType"},"radioBroadcast":{"publicationTitle":"programTitle","number":"episodeNumber","medium":"audioRecordingFormat","publisher":"network"},"report":{"number":"reportNumber","type":"reportType","publisher":"institution"},"statute":{"title":"nameOfAct","number":"publicLawNumber","date":"dateEnacted"},"thesis":{"type":"thesisType","publisher":"university"},"tvBroadcast":{"publicationTitle":"programTitle","number":"episodeNumber","medium":"videoRecordingFormat","publisher":"network"},"videoRecording":{"medium":"videoRecordingFormat","publisher":"studio"},"webpage":{"publicationTitle":"websiteTitle","type":"websiteType"}}');function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw new Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var hiddenFields=["mimeType","linkMode","charset","md5","mtime","version","key","collections","relations","parentItem","contentType","filename","tags","creator","abstractNote","notes","rights","extra"],noEditFields=["modified","filename","dateAdded","dateModified"],apiCheckCache=function apiCheckCache(key){var cacheTimes={},okToUseCache=!1;try{cacheTimes=JSON.parse(localStorage.getItem("zotero-bib-api-cache"))||{}}catch(e){}return key in cacheTimes&&(okToUseCache=Date.now()-cacheTimes[key]<864e5),okToUseCache||(cacheTimes[key]=Date.now(),localStorage.setItem("zotero-bib-api-cache",JSON.stringify(cacheTimes))),okToUseCache},getItemTypeMeta=function(){var _ref=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(itemType){var retryOnFailure,itemTypes,itemTypeFields,itemTypeCreatorTypes,_yield$Promise$all,_yield$Promise$all2,itemTypeR,itemTypeFieldsR,creatorTypesR,_args=arguments;return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return retryOnFailure=!(_args.length>1&&void 0!==_args[1])||_args[1],_context.prev=1,_context.next=4,Promise.all([(0,main.default)().itemTypes().get({cache:apiCheckCache("itemTypes")?"force-cache":"default"}),(0,main.default)().itemTypeFields(itemType).get({cache:apiCheckCache("itemTypeFields-".concat(itemType))?"force-cache":"default"}),(0,main.default)().itemTypeCreatorTypes(itemType).get({cache:apiCheckCache("itemTypeCreatorTypes-".concat(itemType))?"force-cache":"default"})]);case 4:_yield$Promise$all=_context.sent,_yield$Promise$all2=_slicedToArray(_yield$Promise$all,3),itemTypeR=_yield$Promise$all2[0],itemTypeFieldsR=_yield$Promise$all2[1],creatorTypesR=_yield$Promise$all2[2],itemTypes=itemTypeR.getData(),itemTypeFields=itemTypeFieldsR.getData(),itemTypeCreatorTypes=creatorTypesR.getData(),_context.next=20;break;case 14:if(_context.prev=14,_context.t0=_context.catch(1),localStorage.removeItem("zotero-bib-api-cache"),!retryOnFailure){_context.next=19;break}return _context.abrupt("return",getItemTypeMeta(itemType,!1));case 19:throw _context.t0;case 20:return _context.abrupt("return",{itemTypes,itemTypeFields,itemTypeCreatorTypes});case 21:case"end":return _context.stop()}}),_callee,null,[[1,14]])})));return function getItemTypeMeta(_x){return _ref.apply(this,arguments)}}();const Bibliography={getFieldsAndItem:function getFieldsAndItem(item,itemTypeFields,itemTypes){var _BibliographyTypes$it;if(!item||!itemTypeFields||!itemTypes)return{item,fields:[]};var titleField=item.itemType in BibliographyTypes_namespaceObject&&(null===(_BibliographyTypes$it=BibliographyTypes_namespaceObject[item.itemType])||void 0===_BibliographyTypes$it?void 0:_BibliographyTypes$it.title)||"title",fields=[{field:"itemType",localized:"Item Type"},itemTypeFields.find((function(itf){return itf.field===titleField})),{field:"creators",localized:"Creators"}].concat(_toConsumableArray(itemTypeFields.filter((function(itf){return itf.field!==titleField})))).filter((function(f){return f&&!hiddenFields.includes(f.field)})).concat([itemTypeFields.find((function(itf){return"abstractNote"===itf.field})),itemTypeFields.find((function(itf){return"extra"===itf.field}))]);if(["book","bookSection"].includes(item.itemType)){var dateIndex=fields.findIndex((function(f){return"date"===f.field}));fields.splice(dateIndex+1,0,{field:"original-date",localized:"Original Date"});var matches="extra"in item&&item.extra.match(/^original-date:\s*(.*?)$/);matches&&index_all.default.extend(item,{"original-date":matches[1],extra:item.extra.replace(/^original-date:\s*.*?$/,"")})}if(["webpage"].includes(item.itemType)){var beforeIndex=fields.findIndex((function(f){return"websiteType"===f.field}));fields.splice(beforeIndex+1,0,{field:"publisher",localized:"Publisher"});var _matches="extra"in item&&item.extra.match(/^publisher:\s*(.*?)$/i);_matches&&index_all.default.extend(item,{publisher:_matches[1],extra:item.extra.replace(/^publisher:\s*.*?$/,"")})}return fields=fields.map((function(f){return{options:"itemType"===f.field?itemTypes:null,key:f.field,label:f.localized,readonly:noEditFields.includes(f.field),processing:!1,value:f.field in item?item[f.field]:null}})),{item,fields}},getItemTypeMeta,isUrl:function isUrl(id){return!!id.match(/^(https?:\/\/)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b(\S*)$/i)}}}}]);