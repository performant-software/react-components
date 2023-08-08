"use strict";(self.webpackChunk_performant_software_storybook=self.webpackChunk_performant_software_storybook||[]).push([[7634],{"./src/user-defined-fields/UserDefinedFieldsForm.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>UserDefinedFieldsForm_stories});var react=__webpack_require__("../../node_modules/react/index.js"),dist=__webpack_require__("../../node_modules/@storybook/addon-a11y/dist/index.mjs"),addon_knobs_dist=__webpack_require__("../../node_modules/@storybook/addon-knobs/dist/index.js"),Form=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/collections/Form/Form.js"),build=__webpack_require__("../semantic-ui/build/index.js"),shared_build=__webpack_require__("../shared/build/index.js"),index_all=__webpack_require__("../../node_modules/underscore/modules/index-all.js"),UserDefinedFields=__webpack_require__("../user-defined-fields/src/services/UserDefinedFields.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var DataTypes_boolean="Boolean",DataTypes_date="Date",DataTypes_number="Number",DataTypes_richText="RichText",DataTypes_select="Select",DataTypes_string="String",DataTypes_text="Text",UserDefinedFieldsForm=function UserDefinedFieldsForm(props){var _useState2=_slicedToArray((0,react.useState)([]),2),fields=_useState2[0],setFields=_useState2[1],getFieldKey=(0,react.useCallback)((function(field){return"user_defined[".concat(field.column_name,"]")}),[]),isError=(0,react.useCallback)((function(field){return props.isError(getFieldKey(field))}),[getFieldKey,props.isError]),_onChange=(0,react.useCallback)((function(field,value){props.onChange(_objectSpread(_objectSpread({},props.data),{},_defineProperty({},field.column_name,value))),props.onClearValidationError&&props.onClearValidationError(getFieldKey(field))}),[getFieldKey,props.data,props.onChange,props.onClearValidationError]),renderItem=(0,react.useCallback)((function(field){var rendered,fieldValue=props.data&&props.data[field.column_name];return field.data_type===DataTypes_string&&(rendered=(0,jsx_runtime.jsx)(Form.Z.Input,{error:isError(field),label:field.column_name,required:field.required,onChange:function onChange(e,_ref){var value=_ref.value;return _onChange(field,value)},value:fieldValue})),field.data_type===DataTypes_number&&(rendered=(0,jsx_runtime.jsx)(Form.Z.Input,{error:isError(field),label:field.column_name,required:field.required,onChange:function onChange(e,_ref2){var value=_ref2.value;return _onChange(field,value)},value:fieldValue,type:"number"})),field.data_type===DataTypes_select&&(rendered=(0,jsx_runtime.jsx)(Form.Z.Dropdown,{clearable:!0,error:isError(field),label:field.column_name,multiple:field.allow_multiple,required:field.required,options:index_all.default.map(field.options,(function(option){return{key:option,value:option,text:option}})),onChange:function onChange(e,_ref3){var value=_ref3.value;return _onChange(field,value)},selectOnBlur:!1,selection:!0,value:fieldValue})),field.data_type===DataTypes_text&&(rendered=(0,jsx_runtime.jsx)(Form.Z.TextArea,{error:isError(field),label:field.column_name,required:field.required,onChange:function onChange(e,_ref4){var value=_ref4.value;return _onChange(field,value)},value:fieldValue})),field.data_type===DataTypes_date&&(rendered=(0,jsx_runtime.jsx)(Form.Z.Input,{error:isError(field),label:field.column_name,required:field.required,children:(0,jsx_runtime.jsx)(build.DatePicker,{onChange:function onChange(date){return _onChange(field,date&&date.toISOString())},value:fieldValue&&new Date(fieldValue)})})),field.data_type===DataTypes_boolean&&(rendered=(0,jsx_runtime.jsx)(Form.Z.Checkbox,{checked:!!fieldValue,error:isError(field),label:field.column_name,onChange:function onChange(e,_ref5){var checked=_ref5.checked;return _onChange(field,checked)}})),field.data_type===DataTypes_richText&&(rendered=(0,jsx_runtime.jsx)(Form.Z.Input,{error:isError(field),label:field.column_name,required:field.required,children:(0,jsx_runtime.jsx)(shared_build.RichTextArea,{onChange:function onChange(value){return _onChange(field,value)},value:fieldValue})})),rendered}),[props.data,isError,_onChange]);return(0,react.useEffect)((function(){var params={defineable_id:props.defineableId,defineable_type:props.defineableType,per_page:0,sort_by:"order",table_name:props.tableName};UserDefinedFields.Z.fetchAll(params).then((function(_ref6){var data=_ref6.data;return setFields(data.user_defined_fields)}))}),[]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:index_all.default.map(fields,renderItem.bind(undefined))})};UserDefinedFieldsForm.__docgenInfo={description:"",displayName:"UserDefinedFieldsForm",methods:[],props:{data:{required:!0,flowType:{name:"any"},description:""},defineableId:{required:!1,flowType:{name:"number"},description:""},defineableType:{required:!1,flowType:{name:"string"},description:""},isError:{required:!0,flowType:{name:"signature",type:"function",raw:"(key: string) => boolean",signature:{arguments:[{name:"key",type:{name:"string"}}],return:{name:"boolean"}}},description:""},onChange:{required:!0,flowType:{name:"signature",type:"function",raw:"(obj: any) => void",signature:{arguments:[{name:"obj",type:{name:"any"}}],return:{name:"void"}}},description:""},onClearValidationError:{required:!0,flowType:{name:"signature",type:"function",raw:"(...keys: Array<string>) => void",signature:{arguments:[{name:"keys",type:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},rest:!0}],return:{name:"void"}}},description:""},tableName:{required:!1,flowType:{name:"string"},description:""}}};const components_UserDefinedFieldsForm=UserDefinedFieldsForm;var _Default$parameters,_Default$parameters2;function UserDefinedFieldsForm_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function UserDefinedFieldsForm_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?UserDefinedFieldsForm_stories_ownKeys(Object(source),!0).forEach((function(key){UserDefinedFieldsForm_stories_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):UserDefinedFieldsForm_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function UserDefinedFieldsForm_stories_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function UserDefinedFieldsForm_stories_slicedToArray(arr,i){return function UserDefinedFieldsForm_stories_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function UserDefinedFieldsForm_stories_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function UserDefinedFieldsForm_stories_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return UserDefinedFieldsForm_stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return UserDefinedFieldsForm_stories_arrayLikeToArray(o,minLen)}(arr,i)||function UserDefinedFieldsForm_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function UserDefinedFieldsForm_stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const UserDefinedFieldsForm_stories={title:"Components/User Defined Fields/UserDefinedFieldsForm",decorators:[dist.withA11y,addon_knobs_dist.withKnobs]};var Default=function Default(){var _useState2=UserDefinedFieldsForm_stories_slicedToArray((0,react.useState)({"First name":"Bob","Last name":"Smith"}),2),data=_useState2[0],setData=_useState2[1];return(0,jsx_runtime.jsx)(Form.Z,{children:(0,jsx_runtime.jsx)(components_UserDefinedFieldsForm,{data,isError:function isError(){return!1},onChange:function onChange(value){return setData(value)}})})};Default.displayName="Default",Default.parameters=UserDefinedFieldsForm_stories_objectSpread(UserDefinedFieldsForm_stories_objectSpread({},Default.parameters),{},{docs:UserDefinedFieldsForm_stories_objectSpread(UserDefinedFieldsForm_stories_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:UserDefinedFieldsForm_stories_objectSpread({originalSource:"() => {\n  const [data, setData] = useState({\n    'First name': 'Bob',\n    'Last name': 'Smith'\n  });\n  return <Form>\n      <UserDefinedFieldsForm data={data} isError={() => false} onChange={value => setData(value)} />\n    </Form>;\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})});var __namedExportsOrder=["Default"]},"../user-defined-fields/src/services/UserDefinedFields.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>services_UserDefinedFields});var build=__webpack_require__("../shared/build/index.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}(this,result)}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}const transforms_UserDefinedField=new(function(_BaseTransform){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(UserDefinedField,_BaseTransform);var _super=_createSuper(UserDefinedField);function UserDefinedField(){return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,UserDefinedField),_super.apply(this,arguments)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(UserDefinedField,[{key:"getPayloadKeys",value:function getPayloadKeys(){return["table_name","column_name","data_type","required","searchable","allow_multiple","options","order"]}},{key:"getParameterName",value:function getParameterName(){return"user_defined_field"}}]),UserDefinedField}(build.BaseTransform));function UserDefinedFields_typeof(obj){return UserDefinedFields_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},UserDefinedFields_typeof(obj)}function UserDefinedFields_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function UserDefinedFields_setPrototypeOf(o,p){return UserDefinedFields_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},UserDefinedFields_setPrototypeOf(o,p)}function UserDefinedFields_createSuper(Derived){var hasNativeReflectConstruct=function UserDefinedFields_isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=UserDefinedFields_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=UserDefinedFields_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function UserDefinedFields_possibleConstructorReturn(self,call){if(call&&("object"===UserDefinedFields_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function UserDefinedFields_assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}(this,result)}}function UserDefinedFields_getPrototypeOf(o){return UserDefinedFields_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},UserDefinedFields_getPrototypeOf(o)}const services_UserDefinedFields=new(function(_BaseService){!function UserDefinedFields_inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&UserDefinedFields_setPrototypeOf(subClass,superClass)}(UserDefinedFields,_BaseService);var _super=UserDefinedFields_createSuper(UserDefinedFields);function UserDefinedFields(){return function UserDefinedFields_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,UserDefinedFields),_super.apply(this,arguments)}return function UserDefinedFields_createClass(Constructor,protoProps,staticProps){return protoProps&&UserDefinedFields_defineProperties(Constructor.prototype,protoProps),staticProps&&UserDefinedFields_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(UserDefinedFields,[{key:"fetchDataTypes",value:function fetchDataTypes(){return this.getAxios().get("/user_defined_fields/data_types")}},{key:"fetchTables",value:function fetchTables(){return this.getAxios().get("/user_defined_fields/tables")}},{key:"getBaseUrl",value:function getBaseUrl(){return"/user_defined_fields/user_defined_fields"}},{key:"getTransform",value:function getTransform(){return transforms_UserDefinedField}}]),UserDefinedFields}(build.BaseService))}}]);