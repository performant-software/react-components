import{j as r}from"./jsx-runtime-BTCK_S7S.js";import{a as c}from"./chunk-WFFRPTHA-B2vgThZf.js";import"./index-CBqU2yxZ.js";import{_ as y}from"./index-default-C_maRo4o.js";import{L as g}from"./LoadAnimation-B5PEUokg.js";import{a as v,u as f}from"./CoreData-Ds0I0oFM.js";import{w}from"./CoreDataContextProvider-BTUWExMB.js";import"./preview-errors-CzpZmerH.js";import"./index-CKJfshIT.js";import"./v4-D8aEg3BZ.js";import"./_commonjsHelpers-BosuxZz1.js";const l=e=>{const{data:{items:a}={},loading:p}=v(e.onLoad,[]);return p?r.jsx(g,{}):r.jsx("ul",{className:e.className,children:y.map(a,t=>{var i,s;return r.jsx("li",{children:r.jsx("div",{className:"min-h-[5.5em] flex flex-col justify-start",children:r.jsxs("button",{className:"my-0.5 flex-grow text-left inline-flex rounded-none bg-gray-100",onClick:()=>e.onClick(t),type:"button",children:[e.renderImage&&r.jsx("div",{className:"w-[160px] h-[120px]",children:e.renderImage(t)}),r.jsxs("div",{className:"py-3 px-5 flex-grow",children:[e.renderHeader&&r.jsx("div",{className:"py-0.5 font-semibold uppercase text-sm",children:e.renderHeader(t)}),r.jsx("h2",{className:"py-0.5 font-semibold text-lg",children:(s=(i=t.primary_name)==null?void 0:i.name)==null?void 0:s.name}),e.renderDescription&&r.jsx("div",{className:"py-0.5 font-light text-sm",children:e.renderDescription(t)})]})]})})})})})},d=l;l.__docgenInfo={description:`This component render a list of related items.
@deprecated`,methods:[],displayName:"RelatedItems",props:{className:{required:!1,flowType:{name:"string"},description:"Name of the class(es) to apply to the `ul` element."},onClick:{required:!0,flowType:{name:"signature",type:"function",raw:"(item: ItemType) => void",signature:{arguments:[{name:"item",type:{name:"signature",type:"object",raw:`{
  uuid: string,
  primary_name: SourceTitle,
  source_titles: Array<SourceTitle>
}`,signature:{properties:[{key:"uuid",value:{name:"string",required:!0}},{key:"primary_name",value:{name:"signature",type:"object",raw:`{
  name: Name
}`,signature:{properties:[{key:"name",value:{name:"signature",type:"object",raw:`{
  name: string
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"source_titles",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: Name
}`,signature:{properties:[{key:"name",value:{name:"signature",type:"object",raw:`{
  name: string
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}],raw:"Array<SourceTitle>",required:!0}}]}}}],return:{name:"void"}}},description:"Callback fired when an item in the list is clicked."},onLoad:{required:!0,flowType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:"Callback fired on mount to load the list of items."},renderDescription:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: ItemType) => JSX.Element",signature:{arguments:[{name:"item",type:{name:"signature",type:"object",raw:`{
  uuid: string,
  primary_name: SourceTitle,
  source_titles: Array<SourceTitle>
}`,signature:{properties:[{key:"uuid",value:{name:"string",required:!0}},{key:"primary_name",value:{name:"signature",type:"object",raw:`{
  name: Name
}`,signature:{properties:[{key:"name",value:{name:"signature",type:"object",raw:`{
  name: string
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"source_titles",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: Name
}`,signature:{properties:[{key:"name",value:{name:"signature",type:"object",raw:`{
  name: string
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}],raw:"Array<SourceTitle>",required:!0}}]}}}],return:{name:"JSX.Element"}}},description:"Function used to render the description element."},renderHeader:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: ItemType) => JSX.Element",signature:{arguments:[{name:"item",type:{name:"signature",type:"object",raw:`{
  uuid: string,
  primary_name: SourceTitle,
  source_titles: Array<SourceTitle>
}`,signature:{properties:[{key:"uuid",value:{name:"string",required:!0}},{key:"primary_name",value:{name:"signature",type:"object",raw:`{
  name: Name
}`,signature:{properties:[{key:"name",value:{name:"signature",type:"object",raw:`{
  name: string
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"source_titles",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: Name
}`,signature:{properties:[{key:"name",value:{name:"signature",type:"object",raw:`{
  name: string
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}],raw:"Array<SourceTitle>",required:!0}}]}}}],return:{name:"JSX.Element"}}},description:"Function used to render the header element."},renderImage:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: ItemType) => JSX.Element",signature:{arguments:[{name:"item",type:{name:"signature",type:"object",raw:`{
  uuid: string,
  primary_name: SourceTitle,
  source_titles: Array<SourceTitle>
}`,signature:{properties:[{key:"uuid",value:{name:"string",required:!0}},{key:"primary_name",value:{name:"signature",type:"object",raw:`{
  name: Name
}`,signature:{properties:[{key:"name",value:{name:"signature",type:"object",raw:`{
  name: string
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"source_titles",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: Name
}`,signature:{properties:[{key:"name",value:{name:"signature",type:"object",raw:`{
  name: string
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}],raw:"Array<SourceTitle>",required:!0}}]}}}],return:{name:"JSX.Element"}}},description:"Function used to render the image element."}}};const A={title:"Components/Core Data/RelatedItems",component:d},n=w(()=>{const e=f();return r.jsx(d,{onClick:c("click"),onLoad:a=>e.fetchRelatedItems("1",a)})});n.__docgenInfo={description:"",methods:[],displayName:"Default"};var u,m,o;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const EventsService = useEventsService();
  return <RelatedItems onClick={action('click')} onLoad={params => EventsService.fetchRelatedItems('1', params)} />;
})`,...(o=(m=n.parameters)==null?void 0:m.docs)==null?void 0:o.source}}};const C=["Default"];export{n as Default,C as __namedExportsOrder,A as default};
