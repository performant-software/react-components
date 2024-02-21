"use strict";(self.webpackChunk_performant_software_storybook=self.webpackChunk_performant_software_storybook||[]).push([[4348],{"./src/core-data/LoadingAnimation.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var _core_data_src_components_LoadAnimation__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../core-data/src/components/LoadAnimation.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Core Data/LoadingAnimation",component:_core_data_src_components_LoadAnimation__WEBPACK_IMPORTED_MODULE_1__.Z};var Default=function Default(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_core_data_src_components_LoadAnimation__WEBPACK_IMPORTED_MODULE_1__.Z,{})};Default.displayName="Default",Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <LoadingAnimation />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../core-data/src/components/LoadAnimation.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>src_components_LoadAnimation});__webpack_require__("../../node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),LoadAnimation=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!../core-data/src/components/LoadAnimation.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(LoadAnimation.Z,options);LoadAnimation.Z&&LoadAnimation.Z.locals&&LoadAnimation.Z.locals;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),LoadAnimation_LoadAnimation=function LoadAnimation(props){var className="".concat(props.className||""," loader three-dots").trim();return(0,jsx_runtime.jsx)("span",{className})};LoadAnimation_LoadAnimation.displayName="LoadAnimation",LoadAnimation_LoadAnimation.__docgenInfo={description:"This component renders a basic loading animation.",displayName:"LoadAnimation",methods:[],props:{className:{required:!1,flowType:{name:"string"},description:"Additional class name to apply to the element."}}};const src_components_LoadAnimation=LoadAnimation_LoadAnimation;LoadAnimation_LoadAnimation.__docgenInfo={description:"This component renders a basic loading animation.",methods:[],displayName:"LoadAnimation",props:{className:{required:!1,flowType:{name:"string"},description:"Additional class name to apply to the element."}}}},"../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!../core-data/src/components/LoadAnimation.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/** https://cssloaders.github.io/ MIT License **/\n.loader.three-dots, .loader.three-dots::before, .loader.three-dots::after {\n  display:inline-block;\n  border-radius: 50%;\n  width: 2.2em;\n  height: 2.2em;\n  animation-fill-mode: both;\n  animation: bblFadInOut 1.8s infinite ease-in-out;\n}\n\n.loader.three-dots {\n  font-size: 2px;\n  position: relative;\n  text-indent: -9999em;\n  transform: translateZ(0);\n  top: -3em;\n  animation-delay: -0.16s;\n}\n\n.loader.three-dots::before,\n.loader.three-dots::after {\n  content: '';\n  position: absolute;\n  top: 0;\n}\n\n.loader.three-dots::before {\n  left: -3.3em;\n  animation-delay: -0.32s;\n}\n\n.loader.three-dots::after {\n  left: 3.3em;\n}\n\n@keyframes bblFadInOut {\n  0%, 80%, 100% { box-shadow: 0 2.5em 0 -1.3em }\n  40% { box-shadow: 0 2.5em 0 0 }\n}\n    ","",{version:3,sources:["webpack://./../core-data/src/components/LoadAnimation.css"],names:[],mappings:"AAAA,gDAAgD;AAChD;EACE,oBAAoB;EACpB,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,gDAAgD;AAClD;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,oBAAoB;EACpB,wBAAwB;EACxB,SAAS;EACT,uBAAuB;AACzB;;AAEA;;EAEE,WAAW;EACX,kBAAkB;EAClB,MAAM;AACR;;AAEA;EACE,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB,6BAA6B;EAC7C,MAAM,wBAAwB;AAChC",sourcesContent:["/** https://cssloaders.github.io/ MIT License **/\n.loader.three-dots, .loader.three-dots::before, .loader.three-dots::after {\n  display:inline-block;\n  border-radius: 50%;\n  width: 2.2em;\n  height: 2.2em;\n  animation-fill-mode: both;\n  animation: bblFadInOut 1.8s infinite ease-in-out;\n}\n\n.loader.three-dots {\n  font-size: 2px;\n  position: relative;\n  text-indent: -9999em;\n  transform: translateZ(0);\n  top: -3em;\n  animation-delay: -0.16s;\n}\n\n.loader.three-dots::before,\n.loader.three-dots::after {\n  content: '';\n  position: absolute;\n  top: 0;\n}\n\n.loader.three-dots::before {\n  left: -3.3em;\n  animation-delay: -0.32s;\n}\n\n.loader.three-dots::after {\n  left: 3.3em;\n}\n\n@keyframes bblFadInOut {\n  0%, 80%, 100% { box-shadow: 0 2.5em 0 -1.3em }\n  40% { box-shadow: 0 2.5em 0 0 }\n}\n    "],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);