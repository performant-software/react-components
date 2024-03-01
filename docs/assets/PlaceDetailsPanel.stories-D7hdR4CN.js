import{j as e}from"./jsx-runtime-BTCK_S7S.js";import{a as f}from"./chunk-WFFRPTHA-B2vgThZf.js";import{r as l}from"./index-CBqU2yxZ.js";import{_ as o}from"./index-default-C_maRo4o.js";import{R as b}from"./RelatedItemsList-B8cdfms1.js";import{X as v,I as h}from"./MediaGallery-DJAX-ugO.js";import{r as w}from"./RelatedMedia-70r_42sD.js";import{r as k}from"./RelatedPlaces-CvIMvrrF.js";import"./preview-errors-CzpZmerH.js";import"./index-CKJfshIT.js";import"./v4-D8aEg3BZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CCbyfPlC.js";import"./index-C_X5wfCI.js";import"./redux-C8f_Y06i.js";import"./objectSpread2-N4c0DWqo.js";import"./defineProperty-CCxoMnQV.js";import"./toPropertyKey-hKuLU48H.js";import"./index-DZGZymok.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./i18n-CPgn2q6e.js";import"./LoadAnimation-BHD0cPOn.js";import"./RelatedMedia-DKxxuEaF.js";import"./RelatedOrganizations-9fy0W2zN.js";import"./RelatedList-C7v-JxC_.js";import"./createLucideIcon-CT11eyui.js";import"./RelatedPeople-B2Gn1jY1.js";import"./RelatedTaxonomies-kDsrq_Fg.js";const c=r=>{const g=l.useRef(null),i=l.useMemo(()=>{const t=r.related.find(n=>{var s;return n.endpoint==="media_contents"&&!o.isEmpty((s=n.data)==null?void 0:s.items)});return t?t.data&&t.data.items[0].body:void 0},[r.related]),y=l.useMemo(()=>{var t;return(t=r.place)!=null&&t.user_defined?Object.values(r.place.user_defined):[]},[r.place]);return e.jsxs("aside",{className:"flex flex-col absolute z-10 h-full w-[280px] bg-white/80 backdrop-blur shadow overflow-y-auto",ref:g,children:[e.jsx("button",{className:"absolute top-2 right-2 p-1.5 rounded-full z-10 bg-slate-200/60 hover:bg-slate-200 focus:outline-2 focus:outline-offset-2 focus:outline-teal-700",onClick:r.onClose,type:"button",children:e.jsx(v,{className:"h-4 w-4"})}),r.place&&e.jsxs(e.Fragment,{children:[i&&e.jsxs("div",{className:"relative w-full h-[200px] flex-grow-0 flex-shrink-0 bg-muted/20 z-0",children:[e.jsx("div",{className:"absolute top-0 left-0 w-full h-full flex justify-center items-center",children:e.jsx(h,{className:"h-20 w-20 text-gray-400",strokeWidth:1})}),e.jsx("div",{className:"absolute top-0 left-0 w-full h-full flex justify-center items-center",children:e.jsx("img",{className:"object-cover h-full w-full",src:i.content_url,alt:i.title})})]}),e.jsxs("div",{className:"p-3",children:[e.jsx("h1",{className:"pr-6 font-medium",children:r.place.properties.title}),e.jsx("ol",{className:"text-sm mt-4 leading-6 overflow-hidden",children:o.map(y,({label:t,value:n})=>e.jsxs("li",{className:"mb-2",children:[e.jsx("div",{className:"text-muted",children:t}),e.jsx("div",{className:"font-medium overflow-hidden text-ellipsis",children:n})]},t))})]}),e.jsx(b,{items:r.related})]})]})},p=c;c.__docgenInfo={description:"This component renders a side panel for the passed Core Data place record.",methods:[],displayName:"PlaceDetailsPanel",props:{place:{required:!1,flowType:{name:"intersection",raw:`Annotation & {
  type: 'Place',
  geometry: FeatureGeometry
}`,elements:[{name:"signature",type:"object",raw:`{
  id: string,
  record_id: string,
  uuid: string,
  title: string,
  user_defined: {
    [key: string]: UserDefinedField
  }
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"record_id",value:{name:"string",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"user_defined",value:{name:"signature",type:"object",raw:`{
  [key: string]: UserDefinedField
}`,signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:`{
  label: string,
  value: string
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: 'Place',
  geometry: FeatureGeometry
}`,signature:{properties:[{key:"type",value:{name:"literal",value:"'Place'",required:!0}},{key:"geometry",value:{name:"signature",type:"object",raw:`{
  type: 'Point' | 'Polygon' | 'Polyline' | 'GeometryCollection';
  coordinates: number[] | number[][] | number[][][];
}`,signature:{properties:[{key:"type",value:{name:"union",raw:"'Point' | 'Polygon' | 'Polyline' | 'GeometryCollection'",elements:[{name:"literal",value:"'Point'"},{name:"literal",value:"'Polygon'"},{name:"literal",value:"'Polyline'"},{name:"literal",value:"'GeometryCollection'"}],required:!0}},{key:"coordinates",value:{name:"union",raw:"number[] | number[][] | number[][][]",elements:[{name:"Array",elements:[{name:"number"}],raw:"number[]"},{name:"Array",elements:[{name:"Array",elements:[{name:"number"}],raw:"number[]"}],raw:"number[][]"},{name:"Array",elements:[{name:"Array",elements:[{name:"Array",elements:[{name:"number"}],raw:"number[]"}],raw:"number[][]"}],raw:"number[][][]"}],required:!0}}]},required:!0}}]}}]},description:"The place record to render."},related:{required:!0,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  endpoint: string,
  ui_label: string,
  default_open?: boolean,
  data?: AnnotationPage<Annotation>,
  error?: Error
}`,signature:{properties:[{key:"endpoint",value:{name:"string",required:!0}},{key:"ui_label",value:{name:"string",required:!0}},{key:"default_open",value:{name:"boolean",required:!1}},{key:"data",value:{name:"signature",type:"object",raw:`{
  '@context': 'http://www.w3.org/ns/anno.jsonld';
  id: string;
  type: 'AnnotationPage';
  partOf: {
    id: string;
    label: string;
    total: number;
  };
  items: Annotation<T>[];
}`,signature:{properties:[{key:"@context",value:{name:"literal",value:"'http://www.w3.org/ns/anno.jsonld'",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"type",value:{name:"literal",value:"'AnnotationPage'",required:!0}},{key:"partOf",value:{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  total: number;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"total",value:{name:"number",required:!0}}]},required:!0}},{key:"items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string,
  record_id: string,
  uuid: string,
  title: string,
  user_defined: {
    [key: string]: UserDefinedField
  }
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"record_id",value:{name:"string",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"user_defined",value:{name:"signature",type:"object",raw:`{
  [key: string]: UserDefinedField
}`,signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:`{
  label: string,
  value: string
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}}]}}],raw:"Annotation<T>[]",required:!0}}]},required:!1}},{key:"error",value:{name:"Error",required:!1}}]}}],raw:"Array<RelatedItems>"},description:"A list of items related to the place."},onClose:{required:!0,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the panel is closed."}}};const j="Place",q={ccode:[],title:"Sapelo Island",record_id:4478,uuid:"ad02a467-5852-4b64-a778-5fa57e1c354c"},x={type:"Point",coordinates:[-81.2417611,31.4774455]},_=[{toponym:"Sapelo Island"}],P={"c01171e1-cafd-4111-a47a-a93a0b1151d1":{label:"Description",value:"Sapelo Island is home to the Gullah/Geechee people, many of whom reside at Hog Hammock on the southern half of the island. The rest of Sapelo is state-owned and managed. Its ecosystem and long history of occupation make Sapelo a site of great ecological, archaeological, cultural, and historical significance."},"09027d53-6ccc-4110-a507-750e2062b994":{label:"Type",value:"Island"},"dfbd85e9-726b-448b-a77c-d4bafb8199e5":{label:"Creator",value:"Emory ECDS"},"8611d261-8826-4948-a8c8-85bf695de9cc":{label:"Subject",value:"Environmental Research"}},D={"@id":"https://core-data-cloud-staging-2c51db0617a5.herokuapp.com/core_data/public/places/ad02a467-5852-4b64-a778-5fa57e1c354c",type:j,properties:q,geometry:x,names:_,user_defined:P},te={title:"Components/Core Data/PlaceDetailsPanel",component:p},a=()=>e.jsx(p,{onClose:f("close"),place:D,related:[{endpoint:"media_contents",ui_label:"Related Media",data:w},{endpoint:"places",ui_label:"Related Places",data:k}]});a.__docgenInfo={description:"",methods:[],displayName:"Default"};var u,d,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`() => <PlaceDetailsPanel onClose={action('close')} place={place} related={[{
  endpoint: 'media_contents',
  ui_label: 'Related Media',
  data: relatedMedia
}, {
  endpoint: 'places',
  ui_label: 'Related Places',
  data: relatedPlaces
}]} />`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const ae=["Default"];export{a as Default,ae as __namedExportsOrder,te as default};
