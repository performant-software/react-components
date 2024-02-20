"use strict";(self.webpackChunk_performant_software_storybook=self.webpackChunk_performant_software_storybook||[]).push([[4551],{"./src/visualize/TreeGraph.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TreeGraph_stories});var react=__webpack_require__("../../node_modules/react/index.js"),dist=__webpack_require__("../../node_modules/@storybook/addon-knobs/dist/index.js"),index_all=__webpack_require__("../../node_modules/underscore/modules/index-all.js"),Group=__webpack_require__("../../node_modules/@visx/group/esm/Group.js"),Tree=__webpack_require__("../../node_modules/@visx/hierarchy/esm/hierarchies/Tree.js"),hierarchy=__webpack_require__("../../node_modules/d3-hierarchy/src/hierarchy/index.js"),withParentSize=__webpack_require__("../../node_modules/@visx/responsive/esm/enhancers/withParentSize.js"),LinkRadialStep=__webpack_require__("../../node_modules/@visx/shape/esm/shapes/link/step/LinkRadialStep.js"),LinkRadialCurve=__webpack_require__("../../node_modules/@visx/shape/esm/shapes/link/curve/LinkRadialCurve.js"),LinkRadialLine=__webpack_require__("../../node_modules/@visx/shape/esm/shapes/link/line/LinkRadialLine.js"),LinkRadial=__webpack_require__("../../node_modules/@visx/shape/esm/shapes/link/diagonal/LinkRadial.js"),LinkVerticalStep=__webpack_require__("../../node_modules/@visx/shape/esm/shapes/link/step/LinkVerticalStep.js"),LinkVerticalCurve=__webpack_require__("../../node_modules/@visx/shape/esm/shapes/link/curve/LinkVerticalCurve.js"),LinkVerticalLine=__webpack_require__("../../node_modules/@visx/shape/esm/shapes/link/line/LinkVerticalLine.js"),LinkVertical=__webpack_require__("../../node_modules/@visx/shape/esm/shapes/link/diagonal/LinkVertical.js"),LinkHorizontalStep=__webpack_require__("../../node_modules/@visx/shape/esm/shapes/link/step/LinkHorizontalStep.js"),LinkHorizontalCurve=__webpack_require__("../../node_modules/@visx/shape/esm/shapes/link/curve/LinkHorizontalCurve.js"),LinkHorizontalLine=__webpack_require__("../../node_modules/@visx/shape/esm/shapes/link/line/LinkHorizontalLine.js"),LinkHorizontal=__webpack_require__("../../node_modules/@visx/shape/esm/shapes/link/diagonal/LinkHorizontal.js"),pointRadial=__webpack_require__("../visualize/node_modules/d3-shape/src/pointRadial.js"),localPoint=__webpack_require__("../../node_modules/@visx/event/esm/localPoint.js"),Zoom=__webpack_require__("../../node_modules/@visx/zoom/esm/Zoom.js"),i18next=__webpack_require__("../visualize/node_modules/i18next/dist/esm/i18next.js");var resources={en:{translation:JSON.parse('{"Zoom":{"buttons":{"center":"Center","clear":"Clear","reset":"Reset","zoomIn":"+","zoomOut":"-"}}}')}},i18n=i18next.ZP.createInstance();i18n.init({debug:!0,fallbackLng:"en",lng:"en",interpolation:{escapeValue:!1},resources});const i18n_i18n=i18n;var injectStylesIntoStyleTag=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),hooks_Zoom=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../visualize/src/hooks/Zoom.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(hooks_Zoom.Z,options);hooks_Zoom.Z&&hooks_Zoom.Z.locals&&hooks_Zoom.Z.locals;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var DEFAULT_INITIAL_TRANSFORM={scaleX:1,scaleY:1,translateX:0,translateY:0,skewX:0,skewY:0};const visualize_src_hooks_Zoom=function withZoom(WrappedComponent){return function(props){var width=props.parentWidth,height=props.parentHeight,_props$scaleXMin=props.scaleXMin,scaleXMin=void 0===_props$scaleXMin?.5:_props$scaleXMin,_props$scaleXMax=props.scaleXMax,scaleXMax=void 0===_props$scaleXMax?4:_props$scaleXMax,_props$scaleYMin=props.scaleYMin,scaleYMin=void 0===_props$scaleYMin?.5:_props$scaleYMin,_props$scaleYMax=props.scaleYMax,scaleYMax=void 0===_props$scaleYMax?4:_props$scaleYMax,_props$initialTransfo=props.initialTransform,initialTransform=void 0===_props$initialTransfo?DEFAULT_INITIAL_TRANSFORM:_props$initialTransfo,renderZoomContainer=(0,react.useCallback)((function(zoom){return(0,jsx_runtime.jsx)("rect",{width,height,rx:14,fill:"transparent",onTouchStart:zoom.dragStart,onTouchMove:zoom.dragMove,onTouchEnd:zoom.dragEnd,onMouseDown:zoom.dragStart,onMouseMove:zoom.dragMove,onMouseUp:zoom.dragEnd,onMouseLeave:function onMouseLeave(){zoom.isDragging&&zoom.dragEnd()},onDoubleClick:function onDoubleClick(event){var point=(0,localPoint.Z)(event)||{x:0,y:0};zoom.scale({scaleX:1.1,scaleY:1.1,point})}})}),[width,height]);return(0,jsx_runtime.jsx)(Zoom.Z,{width,height,scaleXMin,scaleXMax,scaleYMin,scaleYMax,initialTransformMatrix:initialTransform,children:function children(zoom){return(0,jsx_runtime.jsxs)("div",{className:"zoom",children:[(0,jsx_runtime.jsx)(WrappedComponent,_objectSpread(_objectSpread({},props),{},{renderZoomContainer:renderZoomContainer.bind(undefined,zoom),zoom})),(0,jsx_runtime.jsxs)("div",{className:"controls",children:[(0,jsx_runtime.jsx)("button",{type:"button",className:"btn btn-zoom",onClick:function onClick(){return zoom.scale({scaleX:1.2,scaleY:1.2})},children:i18n_i18n.t("Zoom.buttons.zoomIn")}),(0,jsx_runtime.jsx)("button",{type:"button",className:"btn btn-zoom btn-bottom",onClick:function onClick(){return zoom.scale({scaleX:.8,scaleY:.8})},children:i18n_i18n.t("Zoom.buttons.zoomOut")}),(0,jsx_runtime.jsx)("button",{type:"button",className:"btn btn-lg",onClick:zoom.center,children:i18n_i18n.t("Zoom.buttons.center")}),(0,jsx_runtime.jsx)("button",{type:"button",className:"btn btn-lg",onClick:zoom.reset,children:i18n_i18n.t("Zoom.buttons.reset")}),(0,jsx_runtime.jsx)("button",{type:"button",className:"btn btn-lg",onClick:zoom.clear,children:i18n_i18n.t("Zoom.buttons.clear")})]})]})}})}};var TreeGraph=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../visualize/src/components/TreeGraph.css"),TreeGraph_options={};TreeGraph_options.styleTagTransform=styleTagTransform_default(),TreeGraph_options.setAttributes=setAttributesWithoutAttributes_default(),TreeGraph_options.insert=insertBySelector_default().bind(null,"head"),TreeGraph_options.domAPI=styleDomAPI_default(),TreeGraph_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(TreeGraph.Z,TreeGraph_options);TreeGraph.Z&&TreeGraph.Z.locals&&TreeGraph.Z.locals;function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Layout_cartesian="cartesian",Layout_polar="polar",LinkType_curve="curve",LinkType_line="line",LinkType_step="step",Orientation_horizontal="horizontal",Orientation_vertical="vertical",TreeGraph_TreeGraph=function TreeGraph(props){var ref=(0,react.useRef)(),innerWidth=props.parentWidth-props.margin.left-props.margin.right,innerHeight=props.parentHeight-props.margin.top-props.margin.bottom,LinkComponent=(0,react.useMemo)((function(){return props.layout===Layout_polar?props.linkType===LinkType_step?LinkRadialStep.Z:props.linkType===LinkType_curve?LinkRadialCurve.Z:props.linkType===LinkType_line?LinkRadialLine.Z:LinkRadial.Z:props.orientation===Orientation_vertical?props.linkType===LinkType_step?LinkVerticalStep.Z:props.linkType===LinkType_curve?LinkVerticalCurve.Z:props.linkType===LinkType_line?LinkVerticalLine.Z:LinkVertical.Z:props.linkType===LinkType_step?LinkHorizontalStep.Z:props.linkType===LinkType_curve?LinkHorizontalCurve.Z:props.linkType===LinkType_line?LinkHorizontalLine.Z:LinkHorizontal.Z}),[props.layout,props.linkType,props.orientation]),getMaxDepth=(0,react.useCallback)((function(node,depth){var max=depth;return node.isExpanded&&(max=index_all.default.max(index_all.default.map(node.children,(function(child){return getMaxDepth(child,depth+1)})))),max}),[]),getNodePosition=(0,react.useCallback)((function(x,y){var top,left;if(props.layout===Layout_polar){var _pointRadial4=_slicedToArray((0,pointRadial.Z)(x,y),2),radialX=_pointRadial4[0];top=_pointRadial4[1],left=radialX}else props.orientation===Orientation_vertical?(top=y,left=x):(top=x,left=y);return{top,left}}),[props.layout,props.orientation]),root=(0,react.useMemo)((function(){var sizeWidth,sizeHeight,origin,depth=getMaxDepth(props.data,1);return props.layout===Layout_polar?(origin={x:innerWidth/2,y:innerHeight/2},sizeWidth=2*Math.PI,sizeHeight=Math.min(innerWidth,innerHeight)/2*(depth/2)):(origin={x:0,y:0},props.orientation===Orientation_vertical?(sizeWidth=innerWidth,sizeHeight=innerHeight):(sizeWidth=innerHeight,sizeHeight=innerWidth)),{sizeWidth,sizeHeight,origin}}),[getMaxDepth,innerHeight,innerWidth,props.data,props.layout,props.orientation]),renderNode=(0,react.useCallback)((function(node){return(0,jsx_runtime.jsx)("foreignObject",{children:props.renderNode(node.data)})}),[props.renderNode]),renderGroup=(0,react.useCallback)((function(node,key){var _getNodePosition=getNodePosition(node.x,node.y),top=_getNodePosition.top,left=_getNodePosition.left;return(0,jsx_runtime.jsx)(Group.Z,{nodeleft:left,nodetop:top,top,left,children:renderNode(node)},key)}),[renderNode,props.layout,props.orientation,props.linkType]);return(0,react.useEffect)((function(){var current=ref.current;if(current){var groups=current.getElementsByTagName("g");index_all.default.each(groups,(function(group){var object=index_all.default.first(group.getElementsByTagName("foreignObject"));if(object&&object.firstChild){var _object$firstChild2=object.firstChild,width=_object$firstChild2.offsetWidth,height=_object$firstChild2.offsetHeight;object.setAttribute("width",width),object.setAttribute("height",height);var leftPosition=parseFloat(group.getAttribute("nodeleft")),topPosition=parseFloat(group.getAttribute("nodetop"));if(!index_all.default.isNaN(leftPosition)&&!index_all.default.isNaN(topPosition)){var transform="translate(".concat(leftPosition-width/2,", ").concat(topPosition-height/2,")");group.setAttribute("transform",transform)}}}))}}),[props.data,props.layout,props.orientation,props.linkType]),(0,jsx_runtime.jsx)("div",{className:"tree-graph",style:{display:"flex",flexGrow:"1"},children:(0,jsx_runtime.jsxs)("svg",{width:props.parentWidth,height:props.parentHeight-props.offset,ref:props.zoom.containerRef,children:[props.renderZoomContainer(),(0,jsx_runtime.jsx)(Group.Z,{top:props.margin.top,left:props.margin.left,transform:props.zoom.toString(),children:(0,jsx_runtime.jsx)(Tree.Z,{root:(0,hierarchy.ZP)(props.data,(function(d){return d.isExpanded?d.children:null})),size:[root.sizeWidth,root.sizeHeight],separation:function separation(a,b){return(a.parent===b.parent?1:2)/a.depth},children:function children(tree){return(0,jsx_runtime.jsxs)(Group.Z,{innerRef:ref,left:root.origin.x,top:root.origin.y,children:[tree.links().map((function(link,i){return(0,jsx_runtime.jsx)(LinkComponent,{data:link,percent:props.stepPercent,stroke:props.linkColor,strokeWidth:props.linkWidth,fill:"none"},i)})),index_all.default.map(tree.descendants(),renderGroup)]})}})})]})})};TreeGraph_TreeGraph.displayName="TreeGraph",TreeGraph_TreeGraph.defaultProps={layout:Layout_cartesian,linkColor:"#B2B09B",linkType:LinkType_line,linkWidth:1,margin:{top:30,left:30,right:30,bottom:70},offset:0,orientation:Orientation_horizontal,stepPercent:.5};var TreeGraphComponent=(0,withParentSize.Z)(visualize_src_hooks_Zoom(TreeGraph_TreeGraph));TreeGraphComponent.__docgenInfo={description:"",displayName:"TreeGraph",methods:[],props:{renderZoomContainer:{required:!0,flowType:{name:"signature",type:"function",raw:"() => Element<any>",signature:{arguments:[],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:""},zoom:{required:!0,flowType:{name:"Zoom"},description:""},data:{required:!0,flowType:{name:"any"},description:""},layout:{required:!1,flowType:{name:"string"},description:"",defaultValue:{value:"'cartesian'",computed:!1}},linkType:{required:!1,flowType:{name:"string"},description:"",defaultValue:{value:"'line'",computed:!1}},offset:{required:!1,flowType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},orientation:{required:!1,flowType:{name:"string"},description:"",defaultValue:{value:"'horizontal'",computed:!1}},parentHeight:{required:!0,flowType:{name:"number"},description:""},parentWidth:{required:!0,flowType:{name:"number"},description:""},linkColor:{required:!1,flowType:{name:"string"},description:"",defaultValue:{value:"'#B2B09B'",computed:!1}},linkWidth:{required:!1,flowType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},margin:{required:!1,flowType:{name:"signature",type:"object",raw:"{\n  top: number,\n  right: number,\n  bottom: number,\n  left: number\n}",signature:{properties:[{key:"top",value:{name:"number",required:!0}},{key:"right",value:{name:"number",required:!0}},{key:"bottom",value:{name:"number",required:!0}},{key:"left",value:{name:"number",required:!0}}]}},description:"",defaultValue:{value:"{\n  top: 30,\n  left: 30,\n  right: 30,\n  bottom: 70\n}",computed:!1}},renderNode:{required:!1,flowType:{name:"signature",type:"function",raw:"(data: any) => Element<any>",signature:{arguments:[{name:"data",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:""},stepPercent:{required:!1,flowType:{name:"number"},description:"",defaultValue:{value:"0.5",computed:!1}}}};const src_components_TreeGraph=TreeGraphComponent;var _Default$parameters,_Default$parameters2;function TreeGraph_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function TreeGraph_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?TreeGraph_stories_ownKeys(Object(source),!0).forEach((function(key){TreeGraph_stories_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):TreeGraph_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function TreeGraph_stories_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function TreeGraph_stories_slicedToArray(arr,i){return function TreeGraph_stories_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function TreeGraph_stories_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function TreeGraph_stories_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return TreeGraph_stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return TreeGraph_stories_arrayLikeToArray(o,minLen)}(arr,i)||function TreeGraph_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function TreeGraph_stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const TreeGraph_stories={title:"Components/Visualize/TreeGraph",decorators:[dist.withKnobs]};var data={name:"A",isExpanded:!0,children:[{name:"ABCD EFGHI JKLMNO PQRS",children:[{name:"A1"},{name:"A2"},{name:"A3"},{name:"C",children:[{name:"C1"},{name:"D",children:[{name:"D1"},{name:"D2"},{name:"D3"}]}]}]},{name:"Z"},{name:"B",children:[{name:"B1"},{name:"B2"},{name:"B3"}]}]},Default=function Default(){var _useState2=TreeGraph_stories_slicedToArray((0,react.useState)(data),2),items=_useState2[0],setItems=_useState2[1],_document$body=document.body,height=_document$body.clientHeight,width=_document$body.clientWidth,updateNode=(0,react.useCallback)((function(node,item){return item.name===node.name?TreeGraph_stories_objectSpread(TreeGraph_stories_objectSpread(TreeGraph_stories_objectSpread({},item),node),{},{isExpanded:!node.isExpanded}):TreeGraph_stories_objectSpread(TreeGraph_stories_objectSpread({},item),{},{children:index_all.default.map(item.children,(function(child){return updateNode(node,child)}))})}),[]);return(0,jsx_runtime.jsx)("div",{style:{height,width},children:(0,jsx_runtime.jsx)(src_components_TreeGraph,{data:items,layout:(0,dist.select)("Layout",["cartesian","polar"]),linkType:(0,dist.select)("Link Type",["curve","line","step"]),orientation:(0,dist.select)("Orientation",["horizontal","vertical"]),renderNode:function renderNode(node){return(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return setItems(updateNode(node,items))},style:{backgroundColor:"#FFF",border:"1px solid black",cursor:"pointer",padding:"10px",width:"fit-content"},type:"button",children:node.name})}})})};Default.displayName="Default",Default.parameters=TreeGraph_stories_objectSpread(TreeGraph_stories_objectSpread({},Default.parameters),{},{docs:TreeGraph_stories_objectSpread(TreeGraph_stories_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:TreeGraph_stories_objectSpread({originalSource:"() => {\n  const [items, setItems] = useState(data);\n  const {\n    clientHeight: height,\n    clientWidth: width\n  } = document.body;\n  const updateNode = useCallback((node, item) => {\n    let updated;\n    if (item.name === node.name) {\n      updated = {\n        ...item,\n        ...node,\n        isExpanded: !node.isExpanded\n      };\n    } else {\n      updated = {\n        ...item,\n        children: _.map(item.children, child => updateNode(node, child))\n      };\n    }\n    return updated;\n  }, []);\n  return <div style={{\n    height,\n    width\n  }}>\n      <TreeGraph data={items} layout={select('Layout', ['cartesian', 'polar'])} linkType={select('Link Type', ['curve', 'line', 'step'])} orientation={select('Orientation', ['horizontal', 'vertical'])} renderNode={node => <button onClick={() => setItems(updateNode(node, items))} style={{\n      backgroundColor: '#FFF',\n      border: '1px solid black',\n      cursor: 'pointer',\n      padding: '10px',\n      width: 'fit-content'\n    }} type='button'>\n            {node.name}\n          </button>} />\n    </div>;\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})});var __namedExportsOrder=["Default"]},"../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../visualize/src/components/TreeGraph.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".tree-graph {\n  position: relative;\n  height: 100%;\n}\n\n.tree-graph circle,\n.tree-graph rectangle {\n  cursor: pointer;\n}\n\n.tree-graph text {\n  pointer-events: none;\n}\n","",{version:3,sources:["webpack://./../visualize/src/components/TreeGraph.css"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,oBAAoB;AACtB",sourcesContent:[".tree-graph {\n  position: relative;\n  height: 100%;\n}\n\n.tree-graph circle,\n.tree-graph rectangle {\n  cursor: pointer;\n}\n\n.tree-graph text {\n  pointer-events: none;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../visualize/src/hooks/Zoom.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".zoom {\n  position: relative;\n}\n\n.zoom .btn {\n  margin: 0;\n  text-align: center;\n  border: none;\n  background: #2f2f2f;\n  color: #d3d3d3;\n  padding: 0 4px;\n  border-top: 1px solid #0a0a0a;\n}\n\n.zoom .btn-lg {\n  font-size: 1em;\n  line-height: 1;\n  padding: 7px;\n}\n\n.zoom .btn-zoom {\n  width: 30px;\n  font-size: 2em;\n}\n\n.zoom .btn-bottom {\n  font-size: 2em;\n  margin-bottom: 1rem;\n}\n\n.zoom .controls {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n","",{version:3,sources:["webpack://./../visualize/src/hooks/Zoom.css"],names:[],mappings:"AAAA;EACE,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;EACnB,cAAc;EACd,cAAc;EACd,6BAA6B;AAC/B;;AAEA;EACE,cAAc;EACd,cAAc;EACd,YAAY;AACd;;AAEA;EACE,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,qBAAqB;AACvB",sourcesContent:[".zoom {\n  position: relative;\n}\n\n.zoom .btn {\n  margin: 0;\n  text-align: center;\n  border: none;\n  background: #2f2f2f;\n  color: #d3d3d3;\n  padding: 0 4px;\n  border-top: 1px solid #0a0a0a;\n}\n\n.zoom .btn-lg {\n  font-size: 1em;\n  line-height: 1;\n  padding: 7px;\n}\n\n.zoom .btn-zoom {\n  width: 30px;\n  font-size: 2em;\n}\n\n.zoom .btn-bottom {\n  font-size: 2em;\n  margin-bottom: 1rem;\n}\n\n.zoom .controls {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);