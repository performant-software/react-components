"use strict";(self.webpackChunk_performant_software_storybook=self.webpackChunk_performant_software_storybook||[]).push([[1554],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_OPEUWD42.aD});var chunk_OPEUWD42=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs")},"./src/semantic-ui/EditPage.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Loading:()=>Loading,Menu:()=>EditPage_stories_Menu,SaveError:()=>SaveError,Toaster:()=>EditPage_stories_Toaster,__namedExportsOrder:()=>__namedExportsOrder,default:()=>EditPage_stories});var dist=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),addon_knobs_dist=__webpack_require__("../../node_modules/@storybook/addon-knobs/dist/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),Form=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/collections/Form/Form.js"),index_all=__webpack_require__("../../node_modules/underscore/modules/index-all.js"),AddModal=__webpack_require__("./src/components/AddModal.js"),Api=__webpack_require__("./src/services/Api.js"),AssociatedDropdown=__webpack_require__("../semantic-ui/src/components/AssociatedDropdown.js"),build=__webpack_require__("../shared/build/index.js"),Dimmer=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/modules/Dimmer/Dimmer.js"),Loader=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/elements/Loader/Loader.js"),Menu=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/collections/Menu/Menu.js"),Message=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/collections/Message/Message.js"),CancelButton=__webpack_require__("../semantic-ui/src/components/CancelButton.js"),Button=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/elements/Button/Button.js"),i18n=__webpack_require__("../semantic-ui/src/i18n/i18n.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),SaveButton=function SaveButton(props){return(0,jsx_runtime.jsxs)(Button.Z,{onClick:props.onClick.bind(undefined),primary:!0,size:"medium",type:"submit",children:[i18n.Z.t("Common.buttons.save"),props.saving&&(0,jsx_runtime.jsx)(Loader.Z,{active:!0,className:"saving",inline:!0,size:"tiny"})]})};SaveButton.displayName="SaveButton",SaveButton.__docgenInfo={description:"",displayName:"SaveButton",methods:[],props:{onClick:{required:!0,flowType:{name:"signature",type:"function",raw:"(item: any) => Promise<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},saving:{required:!0,flowType:{name:"boolean"},description:""}}};const components_SaveButton=SaveButton;var Toaster=__webpack_require__("../semantic-ui/src/components/Toaster.js"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),EditPage=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../semantic-ui/src/components/EditPage.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(EditPage.Z,options);EditPage.Z&&EditPage.Z.locals&&EditPage.Z.locals;function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}(this,result)}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var EditPageClass=function(_Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(EditPageClass,_Component);var _super=_createSuper(EditPageClass);function EditPageClass(props){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,EditPageClass),(_this=_super.call(this,props)).state={currentTab:"",showToaster:!1},_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(EditPageClass,[{key:"componentDidMount",value:function componentDidMount(){if(this.props.menu){var tab=index_all.default.first(this.props.menu.items);this.setState({currentTab:tab&&tab.key})}}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){index_all.default.isEmpty(this.props.errors)||index_all.default.isEmpty(prevProps.errors)||prevProps.errors===this.props.errors||this.setState({showToaster:!0})}},{key:"onSave",value:function onSave(){return this.setState({showToaster:!0}),this.props.onSave()}},{key:"render",value:function render(){return(0,jsx_runtime.jsxs)(Dimmer.Z.Dimmable,{as:"div",className:"edit-page ".concat(this.props.className||""),children:[this.renderLoading(),(0,jsx_runtime.jsxs)(Form.Z,{noValidate:!0,children:[this.renderMenu(),this.renderButtons(),this.renderComponent(),this.renderToaster()]})]})}},{key:"renderButtons",value:function renderButtons(){return this.props.menu?null:(0,jsx_runtime.jsxs)("div",{className:"button-container",children:[(0,jsx_runtime.jsx)(components_SaveButton,{onClick:this.onSave.bind(this),saving:this.props.saving}),(0,jsx_runtime.jsx)(CancelButton.Z,{disabled:this.props.saving,onClick:this.props.onClose.bind(this)})]})}},{key:"renderComponent",value:function renderComponent(){var WrappedComponent=this.props.component;return(0,jsx_runtime.jsx)(WrappedComponent,_objectSpread(_objectSpread({},this.props),{},{currentTab:this.state.currentTab}))}},{key:"renderLoading",value:function renderLoading(){return this.props.showLoading&&this.props.loading?(0,jsx_runtime.jsx)(Dimmer.Z,{active:this.props.loading,inverted:!0,children:(0,jsx_runtime.jsx)(Loader.Z,{content:i18n.Z.t("Common.messages.loading")})}):null}},{key:"renderMenu",value:function renderMenu(){var _this2=this;return this.props.menu?(0,jsx_runtime.jsxs)(Menu.Z,_objectSpread(_objectSpread({},index_all.default.omit(this.props.menu,"items")),{},{children:[this.props.menu&&index_all.default.map(this.props.menu.items,(function(item){return(0,jsx_runtime.jsx)(Menu.Z.Item,{active:item.key===_this2.state.currentTab,name:item.name,onClick:function onClick(){return _this2.setState({currentTab:item.key})}},item.key)})),(0,jsx_runtime.jsx)(Menu.Z.Menu,{position:"right",children:(0,jsx_runtime.jsxs)(Menu.Z.Item,{children:[(0,jsx_runtime.jsx)(components_SaveButton,{onClick:this.onSave.bind(this),saving:this.props.saving}),(0,jsx_runtime.jsx)(CancelButton.Z,{disabled:this.props.saving,onClick:this.props.onClose.bind(this)})]})})]})):null}},{key:"renderToaster",value:function renderToaster(){var _this3=this;return this.state.showToaster&&this.props.errors&&this.props.errors.length?(0,jsx_runtime.jsxs)(Toaster.Z,{onDismiss:function onDismiss(){return _this3.setState({showToaster:!1})},timeout:0,type:Toaster.Z.MessageTypes.negative,children:[(0,jsx_runtime.jsx)(Message.Z.Header,{content:i18n.Z.t("Common.messages.error.header")}),(0,jsx_runtime.jsx)(Message.Z.List,{items:this.props.errors})]}):null}}]),EditPageClass}(react.Component);EditPageClass.displayName="EditPageClass",EditPageClass.defaultProps={showLoading:!0};var EditPage_EditPage=(0,build.useEditContainer)(EditPageClass);EditPage_EditPage.__docgenInfo={description:"The <code>EditPage</code> component can be used to edit the details of a single record within a page view. This\ncomponent uses the <code>EditContainer</code> higher-order component to facilitate all of the editing functionality.\nThis component is responsible for rendering the container in which the editable form is rendered.",displayName:"EditPageClass",methods:[{name:"onSave",docblock:"Shows the toaster and calls the onSave prop.\n\n@returns {*}",modifiers:[],params:[],returns:{type:{name:"mixed"}},description:"Shows the toaster and calls the onSave prop."},{name:"renderButtons",docblock:"Renders the buttons and container if no menu is present.\n\n@returns {null|*}",modifiers:[],params:[],returns:{type:{name:"union",elements:[{name:"mixed"}]}},description:"Renders the buttons and container if no menu is present."},{name:"renderComponent",docblock:"Renders the wrapped component.\n\n@returns {*}",modifiers:[],params:[],returns:{type:{name:"mixed"}},description:"Renders the wrapped component."},{name:"renderLoading",docblock:"Renders the loading indicator.\n\n@returns {null|*}",modifiers:[],params:[],returns:{type:{name:"union",elements:[{name:"mixed"}]}},description:"Renders the loading indicator."},{name:"renderMenu",docblock:"Renders the menu (if present).\n\n@returns {null|*}",modifiers:[],params:[],returns:{type:{name:"union",elements:[{name:"mixed"}]}},description:"Renders the menu (if present)."},{name:"renderToaster",docblock:"Renders the toaster component.\n\n@returns {null|*}",modifiers:[],params:[],returns:{type:{name:"union",elements:[{name:"mixed"}]}},description:"Renders the toaster component."}],props:{className:{required:!1,flowType:{name:"string"},description:"CSS class name to append to the container <code>div</code> element."},component:{required:!0,flowType:{name:"ComponentType",elements:[{name:"any"}],raw:"ComponentType<any>"},description:"The form component to render."},menu:{required:!1,flowType:{name:"MenuProps"},description:"If provided, the passed menu will render as tabs at the top of the page."},onClose:{required:!0,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the close button is clicked."},onSave:{required:!0,flowType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:"Callback fired when the save button is clicked."},showLoading:{required:!1,flowType:{name:"boolean"},description:"If <code>true</code>, a loading indicator will display.",defaultValue:{value:"true",computed:!1}}}};const src_components_EditPage=EditPage_EditPage;var _Default$parameters,_Default$parameters2,_Loading$parameters,_Loading$parameters2,_Menu$parameters,_Menu$parameters2,_SaveError$parameters,_SaveError$parameters2,_Toaster$parameters,_Toaster$parameters2,Companies=__webpack_require__("./src/data/Companies.json");function EditPage_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function EditPage_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?EditPage_stories_ownKeys(Object(source),!0).forEach((function(key){EditPage_stories_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):EditPage_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function EditPage_stories_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const EditPage_stories={title:"Components/Semantic UI/EditPage",component:src_components_EditPage};var onClose=(0,dist.aD)("close"),onSave=function onSave(){return(0,dist.aD)("save")(),Promise.resolve()},TestForm=function TestForm(){return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Form.Z.Input,{"aria-label":"Name",label:"Name"}),(0,jsx_runtime.jsx)(Form.Z.Input,{"aria-label":"Address",label:"Address"}),(0,jsx_runtime.jsx)(Form.Z.Input,{"aria-label":"Phone",label:"Phone"})]})};TestForm.displayName="TestForm";var Default=function Default(){return(0,jsx_runtime.jsx)(src_components_EditPage,{component:TestForm,onClose,onSave})};Default.displayName="Default";var Loading=function Loading(){return(0,jsx_runtime.jsx)(src_components_EditPage,{component:TestForm,item:{id:1},onClose,onInitialize:function onInitialize(){return new Promise((function(resolve){index_all.default.delay(resolve.bind(undefined,{id:1}),5e3)}))},onSave})};Loading.displayName="Loading";var EditPage_stories_Menu=function Menu(){return(0,jsx_runtime.jsx)(src_components_EditPage,{component:TestForm,menu:{items:[{name:"Details",key:"details"},{name:"Technical",key:"technical"},{name:"Other",key:"other"}]},onClose,onSave})};EditPage_stories_Menu.displayName="Menu";var SaveError=function SaveError(){return(0,jsx_runtime.jsx)(src_components_EditPage,{component:function component(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Form.Z.Input,{id:"name",required:props.isRequired("name"),error:props.isError("name"),label:"Name",onChange:props.onTextInputChange.bind(undefined,"name")}),(0,jsx_runtime.jsx)(Form.Z.Input,{id:"address",required:props.isRequired("address"),error:props.isError("address"),label:"Address",onChange:props.onTextInputChange.bind(undefined,"address")}),(0,jsx_runtime.jsx)(Form.Z.Input,{id:"phone",required:props.isRequired("phone"),error:props.isError("phone"),onChange:props.onTextInputChange.bind(undefined,"phone"),label:"Phone"})]})},onClose,onSave,required:["name","address","phone"]})};SaveError.displayName="SaveError";var ToasterForm=function ToasterForm(){return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Form.Z.Input,{id:"name",label:"Name"}),(0,jsx_runtime.jsx)(Form.Z.Input,{id:"address",label:"Address"}),(0,jsx_runtime.jsx)(Form.Z.Input,{id:"phone",label:"Phone"}),(0,jsx_runtime.jsx)(Form.Z.Input,{label:"Field",required:!0,children:(0,jsx_runtime.jsx)(AssociatedDropdown.Z,{collectionName:"items",modal:{component:AddModal.Z,onSave:function onSave(){return(0,dist.aD)("save")(),Promise.resolve({})}},onSearch:function onSearch(search){return Api.Z.onLoad({items:Companies,search})},onSelection:(0,dist.aD)("selection"),renderOption:function renderOption(item){return{key:item.id,value:item.id,text:item.company,description:item.country}},upward:(0,addon_knobs_dist.boolean)("Open upward",!1)})})]})};ToasterForm.displayName="ToasterForm";var EditPage_stories_Toaster=function Toaster(){return(0,jsx_runtime.jsx)(src_components_EditPage,{component:ToasterForm,menu:{items:[{name:"Details",key:"details"},{name:"Technical",key:"technical"},{name:"Other",key:"other"}]},onClose,onSave})};EditPage_stories_Toaster.displayName="Toaster",Default.parameters=EditPage_stories_objectSpread(EditPage_stories_objectSpread({},Default.parameters),{},{docs:EditPage_stories_objectSpread(EditPage_stories_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:EditPage_stories_objectSpread({originalSource:"() => <EditPage component={TestForm} onClose={onClose} onSave={onSave} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),Loading.parameters=EditPage_stories_objectSpread(EditPage_stories_objectSpread({},Loading.parameters),{},{docs:EditPage_stories_objectSpread(EditPage_stories_objectSpread({},null===(_Loading$parameters=Loading.parameters)||void 0===_Loading$parameters?void 0:_Loading$parameters.docs),{},{source:EditPage_stories_objectSpread({originalSource:"() => <EditPage component={TestForm} item={{\n  id: 1\n}} onClose={onClose} onInitialize={() => new Promise(resolve => {\n  _.delay(resolve.bind(this, {\n    id: 1\n  }), 5000);\n})} onSave={onSave} />"},null===(_Loading$parameters2=Loading.parameters)||void 0===_Loading$parameters2||null===(_Loading$parameters2=_Loading$parameters2.docs)||void 0===_Loading$parameters2?void 0:_Loading$parameters2.source)})}),EditPage_stories_Menu.parameters=EditPage_stories_objectSpread(EditPage_stories_objectSpread({},EditPage_stories_Menu.parameters),{},{docs:EditPage_stories_objectSpread(EditPage_stories_objectSpread({},null===(_Menu$parameters=EditPage_stories_Menu.parameters)||void 0===_Menu$parameters?void 0:_Menu$parameters.docs),{},{source:EditPage_stories_objectSpread({originalSource:"() => <EditPage component={TestForm} menu={{\n  items: [{\n    name: 'Details',\n    key: 'details'\n  }, {\n    name: 'Technical',\n    key: 'technical'\n  }, {\n    name: 'Other',\n    key: 'other'\n  }]\n}} onClose={onClose} onSave={onSave} />"},null===(_Menu$parameters2=EditPage_stories_Menu.parameters)||void 0===_Menu$parameters2||null===(_Menu$parameters2=_Menu$parameters2.docs)||void 0===_Menu$parameters2?void 0:_Menu$parameters2.source)})}),SaveError.parameters=EditPage_stories_objectSpread(EditPage_stories_objectSpread({},SaveError.parameters),{},{docs:EditPage_stories_objectSpread(EditPage_stories_objectSpread({},null===(_SaveError$parameters=SaveError.parameters)||void 0===_SaveError$parameters?void 0:_SaveError$parameters.docs),{},{source:EditPage_stories_objectSpread({originalSource:"() => <EditPage component={(props: EditContainerProps) => <>\n        <Form.Input id='name' required={props.isRequired('name')} error={props.isError('name')} label='Name' onChange={props.onTextInputChange.bind(this, 'name')} />\n        <Form.Input id='address' required={props.isRequired('address')} error={props.isError('address')} label='Address' onChange={props.onTextInputChange.bind(this, 'address')} />\n        <Form.Input id='phone' required={props.isRequired('phone')} error={props.isError('phone')} onChange={props.onTextInputChange.bind(this, 'phone')} label='Phone' />\n      </>} onClose={onClose} onSave={onSave} required={['name', 'address', 'phone']} />"},null===(_SaveError$parameters2=SaveError.parameters)||void 0===_SaveError$parameters2||null===(_SaveError$parameters2=_SaveError$parameters2.docs)||void 0===_SaveError$parameters2?void 0:_SaveError$parameters2.source)})}),EditPage_stories_Toaster.parameters=EditPage_stories_objectSpread(EditPage_stories_objectSpread({},EditPage_stories_Toaster.parameters),{},{docs:EditPage_stories_objectSpread(EditPage_stories_objectSpread({},null===(_Toaster$parameters=EditPage_stories_Toaster.parameters)||void 0===_Toaster$parameters?void 0:_Toaster$parameters.docs),{},{source:EditPage_stories_objectSpread({originalSource:"() => <EditPage component={ToasterForm} menu={{\n  items: [{\n    name: 'Details',\n    key: 'details'\n  }, {\n    name: 'Technical',\n    key: 'technical'\n  }, {\n    name: 'Other',\n    key: 'other'\n  }]\n}} onClose={onClose} onSave={onSave} />"},null===(_Toaster$parameters2=EditPage_stories_Toaster.parameters)||void 0===_Toaster$parameters2||null===(_Toaster$parameters2=_Toaster$parameters2.docs)||void 0===_Toaster$parameters2?void 0:_Toaster$parameters2.source)})});var __namedExportsOrder=["Default","Loading","Menu","SaveError","Toaster"]},"../semantic-ui/src/components/CancelButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/elements/Button/Button.js"),_i18n_i18n__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../semantic-ui/src/i18n/i18n.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),CancelButton=function CancelButton(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Z,{basic:!0,disabled:props.disabled,onClick:props.onClick.bind(undefined),size:"medium",type:"button",children:_i18n_i18n__WEBPACK_IMPORTED_MODULE_1__.Z.t("Common.buttons.cancel")})};CancelButton.displayName="CancelButton",CancelButton.__docgenInfo={description:"A simple Cancel button component that accepts an onClick method.",displayName:"CancelButton",methods:[],props:{disabled:{required:!0,flowType:{name:"boolean"},description:""},onClick:{required:!0,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const __WEBPACK_DEFAULT_EXPORT__=CancelButton},"./src/components/AddModal.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/modules/Modal/Modal.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),AddModal=function AddModal(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Z,{open:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Z.Header,{children:"Add"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Z.Content,{children:"Add something here"}),props.children]})};AddModal.displayName="AddModal",AddModal.__docgenInfo={description:"",displayName:"AddModal",methods:[],props:{children:{required:!0,flowType:{name:"Node"},description:""}}};const __WEBPACK_DEFAULT_EXPORT__=AddModal},"./src/services/Api.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var underscore__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/underscore/modules/index-all.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const __WEBPACK_DEFAULT_EXPORT__={onLoad:function onLoad(_ref){var items=_ref.items,page=_ref.page,_ref$per_page=_ref.per_page,perPage=void 0===_ref$per_page?10:_ref$per_page,search=_ref.search,sortBy=_ref.sort_by,sortDirection=_ref.sort_direction,payload=_toConsumableArray(items);search&&search.length&&(payload=underscore__WEBPACK_IMPORTED_MODULE_0__.default.filter(payload,(function(item){var match=!1;return underscore__WEBPACK_IMPORTED_MODULE_0__.default.each(underscore__WEBPACK_IMPORTED_MODULE_0__.default.keys(item),(function(key){item[key]&&item[key].toString().toLowerCase().startsWith(search.toLowerCase())&&(match=!0)})),match}))),sortBy&&sortBy.length&&(payload=underscore__WEBPACK_IMPORTED_MODULE_0__.default.sortBy(payload,(function(item){return item[sortBy]})),sortDirection&&"descending"===sortDirection&&(payload=payload.reverse()));var pages=0;if(page&&perPage){pages=Math.floor(payload.length/perPage||1);var startIndex=(page-1)*perPage,endIndex=startIndex+(perPage-1);payload=payload.slice(startIndex,endIndex)}var response={data:{items:payload,list:{count:items.length,pages}}};return new Promise((function(resolve){return resolve(response)}))},onLoadEmpty:function onLoadEmpty(){var response={data:{items:[],list:{pages:1}}};return new Promise((function(resolve){return resolve(response)}))},onNestedLoad:function onNestedLoad(_ref2){var items=_ref2.items,parentId=_ref2.parentId,parentKey=_ref2.parentKey,search=_ref2.search,payload=_toConsumableArray(items),response={data:{items:payload=parentId?underscore__WEBPACK_IMPORTED_MODULE_0__.default.filter(payload,(function(item){return item[parentKey]===parentId})):search&&search.length?underscore__WEBPACK_IMPORTED_MODULE_0__.default.filter(payload,(function(item){var match=!1;return underscore__WEBPACK_IMPORTED_MODULE_0__.default.each(underscore__WEBPACK_IMPORTED_MODULE_0__.default.keys(item),(function(key){item[key]&&item[key].toString().toLowerCase().startsWith(search.toLowerCase())&&(match=!0)})),match})):underscore__WEBPACK_IMPORTED_MODULE_0__.default.where(payload,function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}({},parentKey,null)),list:{count:payload.length,pages:1}}};return new Promise((function(resolve){return resolve(response)}))},sleep:function sleep(ms){return new Promise((function(resolve){return setTimeout(resolve,ms)}))}}},"../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../semantic-ui/src/components/EditPage.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".edit-page .button-container {\n  text-align: right;\n}\n\n.edit-page .ui.menu:not(.vertical) .item>.button {\n  margin-right: 0.25em;\n}","",{version:3,sources:["webpack://./../semantic-ui/src/components/EditPage.css"],names:[],mappings:"AAAA;EACE,iBAAiB;AACnB;;AAEA;EACE,oBAAoB;AACtB",sourcesContent:[".edit-page .button-container {\n  text-align: right;\n}\n\n.edit-page .ui.menu:not(.vertical) .item>.button {\n  margin-right: 0.25em;\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/data/Companies.json":module=>{module.exports=JSON.parse('[{"id":1,"company":"Bradtke LLC","email":"smccunn0@symantec.com","card":"4913389273457809","country":"China"},{"id":2,"company":"Jacobi Inc","email":"rrivard1@abc.net.au","card":"30460843005398","country":"Zimbabwe"},{"id":3,"company":"Mraz, Blanda and Hettinger","email":"rrummins2@fastcompany.com","card":"6709016072353592810","country":"Iran"},{"id":4,"company":"Rutherford, King and Bergstrom","email":"dkrauss3@mit.edu","card":"374288311284433","country":"Bosnia and Herzegovina"}]')}}]);