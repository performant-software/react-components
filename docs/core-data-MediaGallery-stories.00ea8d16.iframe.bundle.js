/*! For license information please see core-data-MediaGallery-stories.00ea8d16.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_performant_software_storybook=self.webpackChunk_performant_software_storybook||[]).push([[2431,1889],{"./src/core-data/MediaGallery.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_core_data_src_components_MediaGallery__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../core-data/src/components/MediaGallery.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Core Data/MediaGallery",component:_core_data_src_components_MediaGallery__WEBPACK_IMPORTED_MODULE_1__.Z};var item={id:"https://core-data-cloud-staging-2c51db0617a5.herokuapp.com/core_data/public/media_contents/49123f66-6a4d-47b8-a781-0f31ab63adae",record_id:13,title:"hog-hammock-library.jpeg",type:"MediaContent",uuid:"49123f66-6a4d-47b8-a781-0f31ab63adae",manifest_url:"https://iiif-cloud-staging.herokuapp.com/public/resources/013125a9-ad22-43d6-910b-ccc6662c0708/manifest"},Default=function Default(){var _useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),open=_useState2[0],setOpen=_useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{onClick:function onClick(){return setOpen(!0)},type:"button",children:"Open  Gallery"})}),open&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_core_data_src_components_MediaGallery__WEBPACK_IMPORTED_MODULE_1__.Z,{defaultItem:item,onClose:function onClose(){return setOpen(!1)},title:"Media & Documents"})]})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => {\n  const [open, setOpen] = useState(false);\n  return <>\n      <div style={{\n      display: 'flex',\n      justifyContent: 'center'\n    }}>\n        <button onClick={() => setOpen(true)} type='button'>\n          Open  Gallery\n        </button>\n      </div>\n      {open && <MediaGallery defaultItem={item} onClose={() => setOpen(false)} title='Media & Documents' />}\n    </>;\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../core-data/src/components/MediaGallery.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>src_components_MediaGallery});var dist=__webpack_require__("../../node_modules/@radix-ui/react-dialog/dist/index.mjs"),viewer=__webpack_require__("../core-data/node_modules/@samvera/clover-iiif/dist/viewer/index.mjs"),icons_image=__webpack_require__("../../node_modules/lucide-react/dist/esm/icons/image.js"),x=__webpack_require__("../../node_modules/lucide-react/dist/esm/icons/x.js"),injectStylesIntoStyleTag=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),MediaGallery=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!../core-data/src/components/MediaGallery.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(MediaGallery.Z,options);MediaGallery.Z&&MediaGallery.Z.locals&&MediaGallery.Z.locals;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),MediaGallery_MediaGallery=function MediaGallery(props){return(0,jsx_runtime.jsx)(dist.fC,{className:"media-gallery",onOpenChange:props.onClose,open:Boolean(props.defaultItem),children:(0,jsx_runtime.jsxs)(dist.h_,{children:[(0,jsx_runtime.jsx)(dist.aV,{className:"dialog-overlay"}),(0,jsx_runtime.jsxs)(dist.VY,{className:"dialog-content",children:[(0,jsx_runtime.jsxs)(dist.Dx,{className:"dialog-title flex items-center",children:[(0,jsx_runtime.jsx)(icons_image.Z,{className:"h-4 w-4 mr-1.5"}),props.title]}),(0,jsx_runtime.jsx)("div",{className:"pt-6 pb-2 text-sm w-full text-muted min-h-20",children:Boolean(props.defaultItem)&&(0,jsx_runtime.jsx)(viewer.Z,{iiifContent:props.defaultItem.manifest_url,options:{informationPanel:{open:!1}}})}),(0,jsx_runtime.jsx)(dist.x8,{asChild:!0,children:(0,jsx_runtime.jsx)("button",{className:"dialog-close rounded-full",type:"button",children:(0,jsx_runtime.jsx)(x.Z,{className:"h-7 w-7 p-1.5"})})})]})]})})};MediaGallery_MediaGallery.displayName="MediaGallery",MediaGallery_MediaGallery.__docgenInfo={description:"This component renders a IIIF Viewer for the passed MediaContent record.",displayName:"MediaGallery",methods:[],props:{defaultItem:{required:!0,flowType:{name:"intersection",raw:"Annotation & {\n  content_download_url: string,\n  content_iiif_url: string,\n  content_preview_url: string,\n  content_thumbnail_url: string,\n  content_url: string,\n  manifest_url: string,\n  type: 'MediaContent'\n}",elements:[{name:"signature",type:"object",raw:"{\n  id: string,\n  record_id: string,\n  uuid: string,\n  title: string,\n  user_defined: {\n    [key: string]: UserDefinedField\n  }\n}",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"record_id",value:{name:"string",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"user_defined",value:{name:"signature",type:"object",raw:"{\n  [key: string]: UserDefinedField\n}",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{\n  label: string,\n  value: string\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}}]}},{name:"signature",type:"object",raw:"{\n  content_download_url: string,\n  content_iiif_url: string,\n  content_preview_url: string,\n  content_thumbnail_url: string,\n  content_url: string,\n  manifest_url: string,\n  type: 'MediaContent'\n}",signature:{properties:[{key:"content_download_url",value:{name:"string",required:!0}},{key:"content_iiif_url",value:{name:"string",required:!0}},{key:"content_preview_url",value:{name:"string",required:!0}},{key:"content_thumbnail_url",value:{name:"string",required:!0}},{key:"content_url",value:{name:"string",required:!0}},{key:"manifest_url",value:{name:"string",required:!0}},{key:"type",value:{name:"literal",value:"'MediaContent'",required:!0}}]}}]},description:"The MediaContent record contain the IIIF manifest URL."},onClose:{required:!0,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the dialog is closed."},title:{required:!1,flowType:{name:"string"},description:"Title text to display at the top of the dialog."}}};const src_components_MediaGallery=MediaGallery_MediaGallery;MediaGallery_MediaGallery.__docgenInfo={description:"This component renders a IIIF Viewer for the passed MediaContent record.",methods:[],displayName:"MediaGallery",props:{defaultItem:{required:!0,flowType:{name:"intersection",raw:"Annotation & {\n  content_download_url: string,\n  content_iiif_url: string,\n  content_preview_url: string,\n  content_thumbnail_url: string,\n  content_url: string,\n  manifest_url: string,\n  type: 'MediaContent'\n}",elements:[{name:"signature",type:"object",raw:"{\n  id: string,\n  record_id: string,\n  uuid: string,\n  title: string,\n  user_defined: {\n    [key: string]: UserDefinedField\n  }\n}",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"record_id",value:{name:"string",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"user_defined",value:{name:"signature",type:"object",raw:"{\n  [key: string]: UserDefinedField\n}",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{\n  label: string,\n  value: string\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}}]}},{name:"signature",type:"object",raw:"{\n  content_download_url: string,\n  content_iiif_url: string,\n  content_preview_url: string,\n  content_thumbnail_url: string,\n  content_url: string,\n  manifest_url: string,\n  type: 'MediaContent'\n}",signature:{properties:[{key:"content_download_url",value:{name:"string",required:!0}},{key:"content_iiif_url",value:{name:"string",required:!0}},{key:"content_preview_url",value:{name:"string",required:!0}},{key:"content_thumbnail_url",value:{name:"string",required:!0}},{key:"content_url",value:{name:"string",required:!0}},{key:"manifest_url",value:{name:"string",required:!0}},{key:"type",value:{name:"literal",value:"'MediaContent'",required:!0}}]}}]},description:"The MediaContent record contain the IIIF manifest URL."},onClose:{required:!0,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the dialog is closed."},title:{required:!1,flowType:{name:"string"},description:"Title text to display at the top of the dialog."}}}},"../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!../core-data/src/components/MediaGallery.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".dialog-overlay {\n  background-color: rgba(0, 0, 0, 0.5);\n  inset: 0;\n  position: fixed;\n  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);\n  z-index: 98;\n}\n\n.dialog-content {\n  background-color: #fff;\n  border-radius: 6px;\n  box-shadow: rgba(14, 18, 22, 0.35) 0px 10px 38px -10px, rgba(14, 18, 22, 0.2) 0px 10px 20px -15px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 90vw;\n  max-width: 1000px;\n  max-height: 90vh;\n  padding: 25px;\n  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);\n  z-index: 99;\n}\n\n.dialog-content:focus {\n  outline: none;\n}\n\n.dialog-close {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n@keyframes overlayShow {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes contentShow {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -48%) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n\n.clover-viewer-header  {\n  font-weight: 500;\n  align-items: center !important;\n}\n\n.clover-viewer-header > span {\n  font-size: 1rem !important;\n  padding-top: 1.3rem;\n  padding-left: 0 !important;\n}\n","",{version:3,sources:["webpack://./../core-data/src/components/MediaGallery.css"],names:[],mappings:"AAAA;EACE,oCAAoC;EACpC,QAAQ;EACR,eAAe;EACf,0DAA0D;EAC1D,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,iGAAiG;EACjG,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,WAAW;EACX,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;EACb,0DAA0D;EAC1D,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;AACX;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,UAAU;IACV,4CAA4C;EAC9C;EACA;IACE,UAAU;IACV,yCAAyC;EAC3C;AACF;;AAEA;EACE,gBAAgB;EAChB,8BAA8B;AAChC;;AAEA;EACE,0BAA0B;EAC1B,mBAAmB;EACnB,0BAA0B;AAC5B",sourcesContent:[".dialog-overlay {\n  background-color: rgba(0, 0, 0, 0.5);\n  inset: 0;\n  position: fixed;\n  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);\n  z-index: 98;\n}\n\n.dialog-content {\n  background-color: #fff;\n  border-radius: 6px;\n  box-shadow: rgba(14, 18, 22, 0.35) 0px 10px 38px -10px, rgba(14, 18, 22, 0.2) 0px 10px 20px -15px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 90vw;\n  max-width: 1000px;\n  max-height: 90vh;\n  padding: 25px;\n  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);\n  z-index: 99;\n}\n\n.dialog-content:focus {\n  outline: none;\n}\n\n.dialog-close {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n@keyframes overlayShow {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes contentShow {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -48%) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n\n.clover-viewer-header  {\n  font-weight: 500;\n  align-items: center !important;\n}\n\n.clover-viewer-header > span {\n  font-size: 1rem !important;\n  padding-top: 1.3rem;\n  padding-left: 0 !important;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/lucide-react/dist/esm/createLucideIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>createLucideIcon});var react=__webpack_require__("../../node_modules/react/index.js"),defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const createLucideIcon=(iconName,iconNode)=>{const Component=(0,react.forwardRef)((({color="currentColor",size=24,strokeWidth=2,absoluteStrokeWidth,className="",children,...rest},ref)=>{return(0,react.createElement)("svg",{ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:["lucide",`lucide-${string=iconName,string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim()}`,className].join(" "),...rest},[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]]);var string}));return Component.displayName=`${iconName}`,Component}},"?cb21":()=>{},"?7c97":()=>{},"?5f82":()=>{},"?5f2b":()=>{},"?5bf4":()=>{}}]);