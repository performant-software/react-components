import{j as t}from"./jsx-runtime-BTCK_S7S.js";import"./index-CBqU2yxZ.js";import{_ as i}from"./index-default-C_maRo4o.js";import{u as a}from"./CoreData-DDlnFeUe.js";import{L as m}from"./LoadAnimation-B5PEUokg.js";const s=n=>{const{data:e,loading:o}=a(n.onLoad,[]);return o?t.jsx(m,{}):i.isEmpty(e==null?void 0:e.items)?t.jsx("div",{className:"pt-6 pl-3 pr-6 pb-8 flex items-center justify-center text-muted/50 italic",children:n.emptyMessage}):t.jsx("ul",{className:"p-3 pt-1 pb-4",children:i.map(e==null?void 0:e.items,r=>t.jsx("li",{className:"flex items-center",children:n.renderItem(r)},r.id))})},f=s;s.__docgenInfo={description:"This component is a helper component used to structure the lists for the other `Related*` components.",methods:[],displayName:"RelatedList",props:{onLoad:{required:!0,flowType:{name:"signature",type:"function",raw:"() => any",signature:{arguments:[],return:{name:"any"}}},description:"Callback fired when the component is mounted to fetch the data."},emptyMessage:{required:!0,flowType:{name:"string"},description:"A message to display when the list is empty."},renderItem:{required:!0,flowType:{name:"signature",type:"function",raw:"(item: Item) => JSX.Element",signature:{arguments:[{name:"item",type:{name:"signature",type:"object",raw:`{
  id: string
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}}}],return:{name:"JSX.Element"}}},description:"Render function used to determine how to present the passed item."}}};export{f as R};