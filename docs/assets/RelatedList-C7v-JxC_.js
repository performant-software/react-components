import{j as t}from"./jsx-runtime-BTCK_S7S.js";import"./index-CBqU2yxZ.js";import{_ as i}from"./index-default-C_maRo4o.js";const a=e=>{const{items:r}=e.data;return i.isEmpty(r)?t.jsx("div",{className:"pt-6 pl-3 pr-6 pb-8 flex items-center justify-center text-muted/50 italic",children:e.emptyMessage}):t.jsx("ul",{className:"p-3 pt-1 pb-4",children:i.map(r,n=>t.jsx("li",{className:"flex items-center",children:e.renderItem(n)},n.id))})},o=a;a.__docgenInfo={description:"This component is a helper component used to structure the lists for the other `Related*` comnponents.",methods:[],displayName:"RelatedList",props:{data:{required:!0,flowType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}}]}}],raw:"Annotation<T>[]",required:!0}}]}},description:"An annotation page containing the list of records to render."},emptyMessage:{required:!0,flowType:{name:"string"},description:"A message to display when the list is empty."},renderItem:{required:!0,flowType:{name:"signature",type:"function",raw:"(item: Item) => JSX.Element",signature:{arguments:[{name:"item",type:{name:"signature",type:"object",raw:`{
  id: string
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}}}],return:{name:"JSX.Element"}}},description:"Render function used to determine how to present the passed item."}}};export{o as R};
