/*! For license information please see core-data-RelatedOrganizations-stories.881c55fc.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_performant_software_storybook=self.webpackChunk_performant_software_storybook||[]).push([[3103],{"./src/core-data/RelatedOrganizations.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,EmptyList:()=>EmptyList,__namedExportsOrder:()=>__namedExportsOrder,default:()=>RelatedOrganizations_stories});__webpack_require__("../../node_modules/react/index.js");var RelatedOrganizations=__webpack_require__("../core-data/src/components/RelatedOrganizations.js");const RelatedOrganizations_namespaceObject=JSON.parse('{"@context":"http://www.w3.org/ns/anno.jsonld","id":"https://core-data-cloud-staging-2c51db0617a5.herokuapp.com/core_data/public/places/3aaf97a4-7052-4e2c-9056-4f4146ef0c87/organizations?project_ids=10","type":"AnnotationPage","partOf":{"id":"https://core-data-cloud-staging-2c51db0617a5.herokuapp.com/core_data/public/places/3aaf97a4-7052-4e2c-9056-4f4146ef0c87/organizations?project_ids=10","label":"Related Organizations: Hog Hammock Public Library (Sapelo Island School)","total":3},"items":[{"type":"Annotation","id":0,"created":"2024-02-02T16:57:05+00:00","motivation":"linking","target":{"id":"https://core-data-cloud-staging-2c51db0617a5.herokuapp.com/core_data/public/places/3aaf97a4-7052-4e2c-9056-4f4146ef0c87","record_id":4639,"name":"Hog Hammock Public Library (Sapelo Island School)","type":"Place","uuid":"3aaf97a4-7052-4e2c-9056-4f4146ef0c87"},"body":{"id":"https://core-data-cloud-staging-2c51db0617a5.herokuapp.com/core_data/public/organizations/9dbbf99c-1090-4212-ba1d-e6c4155f0ec0","record_id":4,"title":"Bins and Sons","type":"Organization","uuid":"9dbbf99c-1090-4212-ba1d-e6c4155f0ec0","description":"Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\\n","user_defined":{}}},{"type":"Annotation","id":1,"created":"2024-02-02T16:57:05+00:00","motivation":"linking","target":{"id":"https://core-data-cloud-staging-2c51db0617a5.herokuapp.com/core_data/public/places/3aaf97a4-7052-4e2c-9056-4f4146ef0c87","record_id":4639,"name":"Hog Hammock Public Library (Sapelo Island School)","type":"Place","uuid":"3aaf97a4-7052-4e2c-9056-4f4146ef0c87"},"body":{"id":"https://core-data-cloud-staging-2c51db0617a5.herokuapp.com/core_data/public/organizations/38ca082b-96fd-4ef2-b107-f827f6c1005a","record_id":5,"title":"Hayes LLC","type":"Organization","uuid":"38ca082b-96fd-4ef2-b107-f827f6c1005a","description":"In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\\n","user_defined":{}}},{"type":"Annotation","id":2,"created":"2024-02-02T16:57:05+00:00","motivation":"linking","target":{"id":"https://core-data-cloud-staging-2c51db0617a5.herokuapp.com/core_data/public/places/3aaf97a4-7052-4e2c-9056-4f4146ef0c87","record_id":4639,"name":"Hog Hammock Public Library (Sapelo Island School)","type":"Place","uuid":"3aaf97a4-7052-4e2c-9056-4f4146ef0c87"},"body":{"id":"https://core-data-cloud-staging-2c51db0617a5.herokuapp.com/core_data/public/organizations/c7d26821-2cf3-41e6-8fea-a7d298e7e62e","record_id":6,"title":"Little Group","type":"Organization","uuid":"c7d26821-2cf3-41e6-8fea-a7d298e7e62e","description":"Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.\\n","user_defined":{}}}]}');var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const RelatedOrganizations_stories={title:"Components/Core Data/RelatedOrganizations",component:RelatedOrganizations.Z};var Default=function Default(){return(0,jsx_runtime.jsx)(RelatedOrganizations.Z,{data:RelatedOrganizations_namespaceObject})};Default.displayName="Default";var EmptyList=function EmptyList(){return(0,jsx_runtime.jsx)(RelatedOrganizations.Z,{data:[]})};EmptyList.displayName="EmptyList",Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <RelatedOrganizations data={relatedOrganizations} />",...Default.parameters?.docs?.source}}},EmptyList.parameters={...EmptyList.parameters,docs:{...EmptyList.parameters?.docs,source:{originalSource:"() => <RelatedOrganizations data={[]} />",...EmptyList.parameters?.docs?.source}}};const __namedExportsOrder=["Default","EmptyList"]},"../core-data/src/components/RelatedList.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var underscore__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/underscore/modules/index-all.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),RelatedList=function RelatedList(props){var items=props.data.items;return underscore__WEBPACK_IMPORTED_MODULE_1__.default.isEmpty(items)?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"pt-6 pl-3 pr-6 pb-8 flex items-center justify-center text-muted/50 italic",children:props.emptyMessage}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul",{className:"p-3 pt-1 pb-4",children:underscore__WEBPACK_IMPORTED_MODULE_1__.default.map(items,(function(item){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li",{className:"flex items-center",children:props.renderItem(item)},item.id)}))})};RelatedList.displayName="RelatedList",RelatedList.__docgenInfo={description:"This component is a helper component used to structure the lists for the other `Related*` comnponents.",displayName:"RelatedList",methods:[],props:{data:{required:!0,flowType:{name:"signature",type:"object",raw:"{\n  '@context': 'http://www.w3.org/ns/anno.jsonld';\n  id: string;\n  type: 'AnnotationPage';\n  partOf: {\n    id: string;\n    label: string;\n    total: number;\n  };\n  items: Annotation<T>[];\n}",signature:{properties:[{key:"@context",value:{name:"literal",value:"'http://www.w3.org/ns/anno.jsonld'",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"type",value:{name:"literal",value:"'AnnotationPage'",required:!0}},{key:"partOf",value:{name:"signature",type:"object",raw:"{\n  id: string;\n  label: string;\n  total: number;\n}",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"total",value:{name:"number",required:!0}}]},required:!0}},{key:"items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  id: string,\n  record_id: string,\n  uuid: string,\n  title: string,\n  user_defined: {\n    [key: string]: UserDefinedField\n  }\n}",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"record_id",value:{name:"string",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"user_defined",value:{name:"signature",type:"object",raw:"{\n  [key: string]: UserDefinedField\n}",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{\n  label: string,\n  value: string\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}}]}}],raw:"Annotation<T>[]",required:!0}}]}},description:"An annotation page containing the list of records to render."},emptyMessage:{required:!0,flowType:{name:"string"},description:"A message to display when the list is empty."},renderItem:{required:!0,flowType:{name:"signature",type:"function",raw:"(item: Item) => JSX.Element",signature:{arguments:[{name:"item",type:{name:"signature",type:"object",raw:"{\n  id: string\n}",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}}}],return:{name:"JSX.Element"}}},description:"Render function used to determine how to present the passed item."}}};const __WEBPACK_DEFAULT_EXPORT__=RelatedList;RelatedList.__docgenInfo={description:"This component is a helper component used to structure the lists for the other `Related*` comnponents.",methods:[],displayName:"RelatedList",props:{data:{required:!0,flowType:{name:"signature",type:"object",raw:"{\n  '@context': 'http://www.w3.org/ns/anno.jsonld';\n  id: string;\n  type: 'AnnotationPage';\n  partOf: {\n    id: string;\n    label: string;\n    total: number;\n  };\n  items: Annotation<T>[];\n}",signature:{properties:[{key:"@context",value:{name:"literal",value:"'http://www.w3.org/ns/anno.jsonld'",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"type",value:{name:"literal",value:"'AnnotationPage'",required:!0}},{key:"partOf",value:{name:"signature",type:"object",raw:"{\n  id: string;\n  label: string;\n  total: number;\n}",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"total",value:{name:"number",required:!0}}]},required:!0}},{key:"items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  id: string,\n  record_id: string,\n  uuid: string,\n  title: string,\n  user_defined: {\n    [key: string]: UserDefinedField\n  }\n}",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"record_id",value:{name:"string",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"user_defined",value:{name:"signature",type:"object",raw:"{\n  [key: string]: UserDefinedField\n}",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{\n  label: string,\n  value: string\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}}]}}],raw:"Annotation<T>[]",required:!0}}]}},description:"An annotation page containing the list of records to render."},emptyMessage:{required:!0,flowType:{name:"string"},description:"A message to display when the list is empty."},renderItem:{required:!0,flowType:{name:"signature",type:"function",raw:"(item: Item) => JSX.Element",signature:{arguments:[{name:"item",type:{name:"signature",type:"object",raw:"{\n  id: string\n}",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}}}],return:{name:"JSX.Element"}}},description:"Render function used to determine how to present the passed item."}}}},"../core-data/src/components/RelatedOrganizations.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var lucide_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../core-data/node_modules/lucide-react/dist/esm/icons/building-2.js"),_i18n_i18n__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../core-data/src/i18n/i18n.js")),_RelatedList__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../core-data/src/components/RelatedList.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),RelatedOrganizations=function RelatedOrganizations(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_RelatedList__WEBPACK_IMPORTED_MODULE_2__.Z,{data:props.data,emptyMessage:_i18n_i18n__WEBPACK_IMPORTED_MODULE_1__.Z.t("RelatedOrganizations.labels.empty"),renderItem:function renderItem(organization){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Z,{className:"h-4 w-4 mr-1.5"}),organization.body.title]})}})};RelatedOrganizations.displayName="RelatedOrganizations",RelatedOrganizations.__docgenInfo={description:"This component renders the related Core Data organizations records.",displayName:"RelatedOrganizations",methods:[],props:{data:{required:!0,flowType:{name:"signature",type:"object",raw:"{\n  '@context': 'http://www.w3.org/ns/anno.jsonld';\n  id: string;\n  type: 'AnnotationPage';\n  partOf: {\n    id: string;\n    label: string;\n    total: number;\n  };\n  items: Annotation<T>[];\n}",signature:{properties:[{key:"@context",value:{name:"literal",value:"'http://www.w3.org/ns/anno.jsonld'",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"type",value:{name:"literal",value:"'AnnotationPage'",required:!0}},{key:"partOf",value:{name:"signature",type:"object",raw:"{\n  id: string;\n  label: string;\n  total: number;\n}",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"total",value:{name:"number",required:!0}}]},required:!0}},{key:"items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  id: string,\n  record_id: string,\n  uuid: string,\n  title: string,\n  user_defined: {\n    [key: string]: UserDefinedField\n  }\n}",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"record_id",value:{name:"string",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"user_defined",value:{name:"signature",type:"object",raw:"{\n  [key: string]: UserDefinedField\n}",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{\n  label: string,\n  value: string\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}}]}}],raw:"Annotation<T>[]",required:!0}}]}},description:"The annotation page containing the Core Data organizations to render."}}};const __WEBPACK_DEFAULT_EXPORT__=RelatedOrganizations;RelatedOrganizations.__docgenInfo={description:"This component renders the related Core Data organizations records.",methods:[],displayName:"RelatedOrganizations",props:{data:{required:!0,flowType:{name:"signature",type:"object",raw:"{\n  '@context': 'http://www.w3.org/ns/anno.jsonld';\n  id: string;\n  type: 'AnnotationPage';\n  partOf: {\n    id: string;\n    label: string;\n    total: number;\n  };\n  items: Annotation<T>[];\n}",signature:{properties:[{key:"@context",value:{name:"literal",value:"'http://www.w3.org/ns/anno.jsonld'",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"type",value:{name:"literal",value:"'AnnotationPage'",required:!0}},{key:"partOf",value:{name:"signature",type:"object",raw:"{\n  id: string;\n  label: string;\n  total: number;\n}",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"total",value:{name:"number",required:!0}}]},required:!0}},{key:"items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  id: string,\n  record_id: string,\n  uuid: string,\n  title: string,\n  user_defined: {\n    [key: string]: UserDefinedField\n  }\n}",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"record_id",value:{name:"string",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"user_defined",value:{name:"signature",type:"object",raw:"{\n  [key: string]: UserDefinedField\n}",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{\n  label: string,\n  value: string\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}}]}}],raw:"Annotation<T>[]",required:!0}}]}},description:"The annotation page containing the Core Data organizations to render."}}}},"../core-data/src/i18n/i18n.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>i18n_i18n});var i18next=__webpack_require__("../core-data/node_modules/i18next/dist/esm/i18next.js");var resources={en:{translation:JSON.parse('{"RelatedItemsList":{"labels":{"count":"({{count}})"}},"RelatedOrganizations":{"labels":{"empty":"No related organizations"}},"RelatedPeople":{"labels":{"empty":"No related people"}},"RelatedPlaces":{"labels":{"empty":"No related places"}},"RelatedTaxonomies":{"labels":{"empty":"No related taxonomies"}}}')}},i18n=i18next.ZP.createInstance();i18n.init({debug:!0,fallbackLng:"en",lng:"en",interpolation:{escapeValue:!1},resources});const i18n_i18n=i18n},"../core-data/node_modules/lucide-react/dist/esm/icons/building-2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Building2});const Building2=(0,__webpack_require__("../core-data/node_modules/lucide-react/dist/esm/createLucideIcon.js").Z)("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]])}}]);