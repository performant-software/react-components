import{j as e}from"./jsx-runtime-BTCK_S7S.js";import"./index-CBqU2yxZ.js";import{i as a}from"./i18n-CPgn2q6e.js";import{R as i}from"./RelatedList-C7v-JxC_.js";import{c as s}from"./createLucideIcon-CT11eyui.js";/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=s("ListTree",[["path",{d:"M21 12h-8",key:"1bmf0i"}],["path",{d:"M21 6H8",key:"1pqkrb"}],["path",{d:"M21 18h-8",key:"1tm79t"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3",key:"1ywdgy"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3",key:"2wc746"}]]),t=r=>e.jsx(i,{data:r.data,emptyMessage:a.t("RelatedTaxonomies.labels.empty"),renderItem:n=>e.jsxs(e.Fragment,{children:[e.jsx(u,{className:"h-4 w-4 mr-1.5"}),n.body.title]})}),g=t;t.__docgenInfo={description:"This component renders the related Core Data taxonomies.",methods:[],displayName:"RelatedTaxonomies",props:{data:{required:!0,flowType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}}]}}],raw:"Annotation<T>[]",required:!0}}]}},description:"The annotation page containing the Core Data taxonomies to render."}}};export{g as R};
