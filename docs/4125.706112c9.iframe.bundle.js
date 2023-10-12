"use strict";(self.webpackChunk_performant_software_storybook=self.webpackChunk_performant_software_storybook||[]).push([[4125],{"../semantic-ui/src/components/ItemCollection.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>src_components_ItemCollection});var build=__webpack_require__("../shared/build/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),uuid=__webpack_require__("../../node_modules/react-uuid/uuid.js"),uuid_default=__webpack_require__.n(uuid),Loader=__webpack_require__("../../node_modules/semantic-ui-react/dist/es/elements/Loader/Loader.js"),index_all=__webpack_require__("../../node_modules/underscore/modules/index-all.js"),i18n=__webpack_require__("../semantic-ui/src/i18n/i18n.js"),Items=__webpack_require__("../semantic-ui/src/components/Items.js"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ItemCollection=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../semantic-ui/src/components/ItemCollection.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ItemCollection.Z,options);ItemCollection.Z&&ItemCollection.Z.locals&&ItemCollection.Z.locals;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}(this,result)}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var ItemCollection_ItemCollection=function(_Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(ItemCollection,_Component);var _super=_createSuper(ItemCollection);function ItemCollection(props){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ItemCollection),(_this=_super.call(this,props)).state={page:1},_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(ItemCollection,[{key:"getClassName",value:function getClassName(){var classNames=["item-collection"];return this.props.className&&classNames.push(this.props.className),classNames.join(" ")}},{key:"getItems",value:function getItems(){var endIndex=this.state.page*this.props.perPage,items=this.props.items&&this.props.items.slice(0,endIndex)||[];return index_all.default.filter(items,(function(item){return!item._destroy}))}},{key:"onBottomReached",value:function onBottomReached(){var _this2=this;this.props.loading||this.setState((function(state){return{page:state.page+1}}),(function(){_this2.props.onBottomReached&&_this2.props.onBottomReached(_this2.state.page)}))}},{key:"onDelete",value:function onDelete(item){return this.props.onDelete(item),Promise.resolve()}},{key:"onSave",value:function onSave(item){if(this.props.onSave){var uid=item.uid?item.uid:uuid_default()();this.props.onSave(_objectSpread(_objectSpread({},item),{},{uid}))}return Promise.resolve()}},{key:"render",value:function render(){return(0,jsx_runtime.jsx)(build.InfiniteScroll,{context:this.props.context,offset:this.props.scrollOffset,onBottomReached:this.onBottomReached.bind(this),children:(0,jsx_runtime.jsx)(Items.Z,_objectSpread(_objectSpread({},this.props),{},{items:this.getItems(),className:this.getClassName(),onDelete:this.onDelete.bind(this),onSave:this.onSave.bind(this),children:(0,jsx_runtime.jsx)(Loader.Z,{active:this.props.loading,content:i18n.Z.t("Common.messages.loading")})}))})}}]),ItemCollection}(react.Component);ItemCollection_ItemCollection.displayName="ItemCollection",ItemCollection_ItemCollection.defaultProps={addButton:{location:"top"},buttons:[],className:"",configurable:!0,modal:void 0,onCopy:void 0,onDrag:void 0,onSave:function onSave(){},perPage:Number.MAX_SAFE_INTEGER,renderDeleteModal:void 0,renderEmptyRow:void 0,scrollOffset:0},ItemCollection_ItemCollection.__docgenInfo={description:"An <code>ItemCollection</code> component can be used to render a list of records stored on an object in memory. This\ncomponent is responsible for handling infinite scroll and rendering the <code>Items</code> component, which handles\nthe presentation.",displayName:"ItemCollection",methods:[{name:"getClassName",docblock:"Returns the concatenated class names.\n\n@returns {string}",modifiers:[],params:[],returns:{type:{name:"string"}},description:"Returns the concatenated class names."},{name:"getItems",docblock:"Returns the list of items to render based on the current page.\n\n@returns {Array<T>|*[]}",modifiers:[],params:[],returns:{type:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"}},description:"Returns the list of items to render based on the current page."},{name:"onBottomReached",docblock:"Increments the page number and fetches the data.",modifiers:[],params:[],returns:null,description:"Increments the page number and fetches the data."},{name:"onDelete",docblock:"Calls the onDelete prop and returns a promise.\n\n@param item\n\n@returns {Promise<unknown>}",modifiers:[],params:[{name:"item",optional:!1,type:{name:"any"}}],returns:{type:{name:"Promise",elements:[{name:"unknown"}]}},description:"Calls the onDelete prop and returns a promise."},{name:"onSave",docblock:"Calls the onSave prop and returns a promise.\n\n@param item\n\n@returns {Promise<unknown>}",modifiers:[],params:[{name:"item",optional:!1,type:{name:"any"}}],returns:{type:{name:"Promise",elements:[{name:"unknown"}]}},description:"Calls the onSave prop and returns a promise."}],props:{actions:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  accept: (item: any) => boolean,\n  color?: string,\n  icon?: string,\n  name: string,\n  onClick?: (item: any) => void,\n  popup: {\n    content: string,\n    title: string\n  },\n  render?: (item: any, index: number) => Element<any>,\n  title?: string\n}",signature:{properties:[{key:"accept",value:{name:"signature",type:"function",raw:"(item: any) => boolean",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"boolean"}},required:!0}},{key:"color",value:{name:"string",required:!1}},{key:"icon",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}},required:!1}},{key:"popup",value:{name:"signature",type:"object",raw:"{\n  content: string,\n  title: string\n}",signature:{properties:[{key:"content",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}}]},required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"(item: any, index: number) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}},{name:"index",type:{name:"number"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}},required:!1}},{key:"title",value:{name:"string",required:!1}}]}}],raw:"Array<Action>"},description:'A list of actions to render for each element in the row. Actions with the names "edit" and "delete" will be\nhandled specially by the <code>List</code> higher-order component.'},addButton:{required:!1,flowType:{name:"signature",type:"object",raw:"{\n  basic: boolean,\n  color: string,\n  content?: string,\n  inverted?: boolean,\n  location: string,\n  onClick?: () => void,\n  secondary?: boolean\n}",signature:{properties:[{key:"basic",value:{name:"boolean",required:!0}},{key:"color",value:{name:"string",required:!0}},{key:"content",value:{name:"string",required:!1}},{key:"inverted",value:{name:"boolean",required:!1}},{key:"location",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"secondary",value:{name:"boolean",required:!1}}]}},description:"If provided, a button will display in the list header allowing the addition of items to the list. When clicked,\nthe <code>modal</code> prop will be rendered.",defaultValue:{value:"{\n  location: 'top'\n}",computed:!1}},buttons:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  accept?: () => boolean,\n  render: (index?: number) => Element<any>\n}",signature:{properties:[{key:"accept",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!1}},{key:"render",value:{name:"signature",type:"function",raw:"(index?: number) => Element<any>",signature:{arguments:[{name:"index",type:{name:"number"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}},required:!0}}]}}],raw:"Array<ListButton>"},description:'A list of arbitrary buttons to the display in the list header. All actions will be handled by the consuming\ncomponent.\n<br />\n<br />\n\nIn addition to the props listed here for each button, buttons will also accept any of the Semantic UI\n<a href="https://react.semantic-ui.com/elements/button/" target="_blank">Button</a> props.',defaultValue:{value:"[]",computed:!1}},count:{required:!1,flowType:{name:"number"},description:"The number of total records in the list (not just the current page)."},className:{required:!1,flowType:{name:"string"},description:"CSS class name to append to the <code>div</code> container.",defaultValue:{value:"''",computed:!1}},csvExportButton:{required:!1,flowType:{name:"signature",type:"object",raw:"{\n  color: string,\n  location: string,\n  onClick?: () => void\n}",signature:{properties:[{key:"color",value:{name:"string",required:!0}},{key:"location",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}},description:"If provided, a CSV export button will be rendered in the list header."},deleteButton:{required:!1,flowType:{name:"signature",type:"object",raw:"{\n  color: string,\n  location: string,\n  onClick?: () => void\n}",signature:{properties:[{key:"color",value:{name:"string",required:!0}},{key:"location",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}},description:'If provided, a "delete all" button will be rendered in the list header.'},filters:{required:!1,flowType:{name:"signature",type:"object",raw:"{\n  active: boolean,\n  component: Component<{}>,\n  props?: any,\n  state?: any,\n  onChange: (params: any) => Promise<any>,\n  showLabels?: boolean\n}",signature:{properties:[{key:"active",value:{name:"boolean",required:!0}},{key:"component",value:{name:"Component",elements:[{name:"signature",type:"object",raw:"{}",signature:{properties:[]}}],raw:"Component<{}>",required:!0}},{key:"props",value:{name:"any",required:!1}},{key:"state",value:{name:"any",required:!1}},{key:"onChange",value:{name:"signature",type:"function",raw:"(params: any) => Promise<any>",signature:{arguments:[{name:"params",type:{name:"any"}}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}},required:!0}},{key:"showLabels",value:{name:"boolean",required:!1}}]}},description:"If provided, the passed <code>component</code> will be rendered when the filter button is clicked.\n<br />\n<br />\n\nValues passed in the <code>defaults</code> and <code>props</code> properties will be made available in the\npassed component.\n<br />\n<br />\n\nThe <code>onChange</code> callback will fire when the filters are modified. This action will also reload the list,\npassing the new filters the <code>onLoad</code> callback."},modal:{required:!1,flowType:{name:"signature",type:"object",raw:"{\n  component: ComponentType<any>,\n  props: any,\n  state: any\n}",signature:{properties:[{key:"component",value:{name:"ComponentType",elements:[{name:"any"}],raw:"ComponentType<any>",required:!0}},{key:"props",value:{name:"any",required:!0}},{key:"state",value:{name:"any",required:!0}}]}},description:'If provided, the passed modal will be rendered when the "add" button is clicked.',defaultValue:{value:"undefined",computed:!0}},onCopy:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => any",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"any"}}},description:'If provided, this callback is fired when the "copy" action is clicked for an item. The consuming component\nshould generate a copy of the selected item and return that value. The return value is then set at the\ncurrent item in the edit modal.',defaultValue:{value:"undefined",computed:!0}},onDelete:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:'Callback fired when the "delete" action is clicked for an item.'},onDeleteAll:{required:!1,flowType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:"Callback fired when the delete all button is clicked. This prop expects a Promise as the return value."},onPageChange:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the page is changed via the pagination component."},onPerPageChange:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the per page value is changed."},onSave:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback fired when the save button is clicked in the add/edit modal. This function expects a Promise as the\nreturn value.",defaultValue:{value:"() => {}",computed:!1}},page:{required:!1,flowType:{name:"number"},description:"Current page number."},pages:{required:!1,flowType:{name:"number"},description:"Number of pages in the list."},perPage:{required:!1,flowType:{name:"number"},description:"The number of records to display per page.",defaultValue:{value:"Number.MAX_SAFE_INTEGER",computed:!0}},perPageOptions:{required:!1,flowType:{name:"Array",elements:[{name:"number"}],raw:"Array<number>"},description:"The options to display in the dropdown for the per page selector."},renderDeleteModal:{required:!1,flowType:{name:"signature",type:"function",raw:"({ selectedItem: any, onCancel: () => void, onConfirm: () => void }) => Element<any>",signature:{arguments:[{name:"",type:{name:"signature",type:"object",raw:"{ selectedItem: any, onCancel: () => void, onConfirm: () => void }",signature:{properties:[{key:"selectedItem",value:{name:"any",required:!0}},{key:"onCancel",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"onConfirm",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:'Custom render function for the modal that appears on the "delete" action.',defaultValue:{value:"undefined",computed:!0}},renderListHeader:{required:!1,flowType:{name:"signature",type:"function",raw:"() => ?Element<any>",signature:{arguments:[],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>",nullable:!0}}},description:"If provided, this function will return a JSX element that will prepend to the list header."},renderSearch:{required:!1,flowType:{name:"signature",type:"function",raw:"() => Element<any>",signature:{arguments:[],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:"If provided, this function will return a JSX element that will replace the default search input."},selectable:{required:!1,flowType:{name:"boolean"},description:"If set to <code>true</code>, checkboxes will render as the first table column, allowing each row to be selectable.\nThe consuming component is responsible for tracking the selected items."},showRecordCount:{required:!1,flowType:{name:"boolean"},description:"If <code>true</code>, the total number of records will display in the list header."},as:{required:!1,flowType:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"},description:"Renders the Card/Item component as the passed component."},asProps:{required:!1,flowType:{name:"any"},description:"Props to supply to the Card/Item component."},children:{required:!1,flowType:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"},description:"Child elements to append below the list content."},isRowSelected:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => boolean",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"boolean"}}},description:"Callback returning <code>true</code> if the row for the passed item is selected."},items:{required:!0,flowType:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"},description:"An array of objects to render as rows in the list."},link:{required:!1,flowType:{name:"boolean"},description:"If true, the list items will be formatted as a link."},onDrag:{required:!1,flowType:{name:"signature",type:"function",raw:"(dragIndex: number, hoverIndex: number) => void",signature:{arguments:[{name:"dragIndex",type:{name:"number"}},{name:"hoverIndex",type:{name:"number"}}],return:{name:"void"}}},description:"Callback fired when a table row is dragged",defaultValue:{value:"undefined",computed:!0}},onRowSelect:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback fired when the passed item is selected. This callback is <i>only</i> fired if the <code>selectable</code>\nprop is passed as <code>true</code>."},onSelectAllRows:{required:!1,flowType:{name:"signature",type:"function",raw:"(items: Array<any>) => void",signature:{arguments:[{name:"items",type:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"}}],return:{name:"void"}}},description:"Callback fired when the select all checkbox is checked."},renderAdditionalContent:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:"A function that returns a JSX element to render as additional card content."},renderDescription:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:'A function that returns a JSX element to render as the card description.\nSee Semantic UI <a href="https://react.semantic-ui.com/views/card/">Card</a>.'},renderEmptyList:{required:!1,flowType:{name:"signature",type:"function",raw:"() => Element<any>",signature:{arguments:[],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:"A function that returns a JSX element to render when the list has no items."},renderExtra:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:'A function that returns a JSX element to render as the card extra content.\nSee Semantic UI <a href="https://react.semantic-ui.com/views/card/">Card</a>.'},renderHeader:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:'A function that returns a JSX element to render as the card header.\nSee Semantic UI <a href="https://react.semantic-ui.com/views/card/">Card</a>.'},renderImage:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:'A function that returns a JSX element to render as the card image.\nSee Semantic UI <a href="https://react.semantic-ui.com/views/card/">Card</a>.'},renderMeta:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:'A function that returns a JSX element to render as the card meta.\nSee Semantic UI <a href="https://react.semantic-ui.com/views/card/">Card</a>.'},view:{required:!0,flowType:{name:"number"},description:"Toggles between list view and grid view. This prop is provided by the <code>ItemsToggle</code> higher-order\ncomponent."},context:{required:!0,flowType:{name:"signature",type:"object",raw:"{\n  current: HTMLElement\n}",signature:{properties:[{key:"current",value:{name:"HTMLElement",required:!0}}]}},description:"The DOM element responsible for infinite scrolling. If no context is provided, the document <code>body</code>\nwill be assumed."},loading:{required:!1,flowType:{name:"boolean"},description:"If <code>true</code>, the list will display a loading indicator."},onBottomReached:{required:!1,flowType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{name:"page",type:{name:"number"}}],return:{name:"void"}}},description:"Callback fired when the bottom of the scroll container is reached."},scrollOffset:{required:!1,flowType:{name:"number"},description:"The number of pixels from the bottom of the scroll container the <code>onBottomReached</code> callback\nshould fire.",defaultValue:{value:"0",computed:!1}},configurable:{defaultValue:{value:"true",computed:!1},required:!1},renderEmptyRow:{defaultValue:{value:"undefined",computed:!0},required:!1}}};const src_components_ItemCollection=ItemCollection_ItemCollection},"../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../semantic-ui/src/components/ItemCollection.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".item-collection > .ui.loader.active {\n  position: fixed;\n}\n","",{version:3,sources:["webpack://./../semantic-ui/src/components/ItemCollection.css"],names:[],mappings:"AAAA;EACE,eAAe;AACjB",sourcesContent:[".item-collection > .ui.loader.active {\n  position: fixed;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);