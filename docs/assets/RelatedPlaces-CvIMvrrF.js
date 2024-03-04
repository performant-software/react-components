import{j as e}from"./jsx-runtime-BTCK_S7S.js";import"./index-CBqU2yxZ.js";import{i as n}from"./i18n-CPgn2q6e.js";import{R as i}from"./RelatedList-C7v-JxC_.js";import{c as o}from"./createLucideIcon-CT11eyui.js";/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=o("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),a=t=>e.jsx(i,{data:t.data,emptyMessage:n.t("RelatedPlaces.labels.empty"),renderItem:r=>e.jsxs(e.Fragment,{children:[e.jsx(l,{className:"h-4 w-4 mr-0.5 inline-block mb-0.5"}),r.body.title]})}),f=a;a.__docgenInfo={description:"This component renders the related Core Data places.",methods:[],displayName:"RelatedPlaces",props:{data:{required:!0,flowType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}}]}}],raw:"Annotation<T>[]",required:!0}}]}},description:"The annotation page containing the Core Data places to render."}}};const s="https://core-data-cloud-staging-2c51db0617a5.herokuapp.com/core_data/public/places/ad02a467-5852-4b64-a778-5fa57e1c354c/places?project_ids=10",d="AnnotationPage",c={id:"https://core-data-cloud-staging-2c51db0617a5.herokuapp.com/core_data/public/places/ad02a467-5852-4b64-a778-5fa57e1c354c/places?project_ids=10",label:"Related Places: Sapelo Island",total:1},u=[{type:"Annotation",id:0,created:"2024-01-31T10:00:31+00:00",motivation:"linking",target:{id:"https://core-data-cloud-staging-2c51db0617a5.herokuapp.com/core_data/public/places/ad02a467-5852-4b64-a778-5fa57e1c354c",record_id:4478,name:"Sapelo Island",type:"Place",uuid:"ad02a467-5852-4b64-a778-5fa57e1c354c"},body:{id:"https://core-data-cloud-staging-2c51db0617a5.herokuapp.com/core_data/public/places/3aaf97a4-7052-4e2c-9056-4f4146ef0c87",record_id:4639,uuid:"3aaf97a4-7052-4e2c-9056-4f4146ef0c87",title:"Hog Hammock Public Library (Sapelo Island School)",type:"Place",geometry:{type:"Point",coordinates:[-81.2653727,31.4252249]},user_defined:{"c01171e1-cafd-4111-a47a-a93a0b1151d1":{label:"Description",value:"This library was founded in 2022 by Sapelo Island Cultural and Revitalization Society Inc. (SICARS).  The library's location is Sapelo Island's former two-room schoolhouse in the Hog Hammock Community. It is one of the last intact island-based Gullah-Geechee communities in America."},"09027d53-6ccc-4110-a507-750e2062b994":{label:"Type",value:"Building"},"dfbd85e9-726b-448b-a77c-d4bafb8199e5":{label:"Creator",value:"Emory ECDS"},"8611d261-8826-4948-a8c8-85bf695de9cc":{label:"Subject",value:"Environmental Research"},"802b7c68-4f2f-46cf-b71f-1bbb5eca9d14":{label:"Item URI",value:"https://dvl.ecdsdev.org/items/show/11612"},"d09140c8-d876-4e8e-8615-0fc551f6ed63":{label:"Item ID",value:"11612"}}}}],h={"@context":"http://www.w3.org/ns/anno.jsonld",id:s,type:d,partOf:c,items:u};export{f as R,h as r};
