import{j as r}from"./iframe-Bo-cahqR.js";import{_ as u}from"./index-default-B8-H6N8J.js";import{L as m}from"./LoadAnimation-CwHTkQUe.js";import{a as o,u as l}from"./CoreData-v87sZGBq.js";import{w as d}from"./CoreDataContextProvider-BR69btcw.js";const i=e=>{const{data:{items:a}={},loading:s}=o(e.onLoad,[]);return s?r.jsx(m,{}):r.jsx("ul",{className:e.className,children:u.map(a,t=>r.jsx("li",{children:r.jsx("div",{className:"min-h-[5.5em] flex flex-col justify-start",children:r.jsxs("button",{className:"my-0.5 flex-grow text-left inline-flex rounded-none bg-gray-100",onClick:()=>e.onClick(t),type:"button",children:[e.renderImage&&r.jsx("div",{className:"w-[160px] h-[120px]",children:e.renderImage(t)}),r.jsxs("div",{className:"py-3 px-5 flex-grow",children:[e.renderHeader&&r.jsx("div",{className:"py-0.5 font-semibold uppercase text-sm",children:e.renderHeader(t)}),r.jsx("h2",{className:"py-0.5 font-semibold text-lg",children:t.primary_name?.name?.name}),e.renderDescription&&r.jsx("div",{className:"py-0.5 font-light text-sm",children:e.renderDescription(t)})]})]})})}))})};i.__docgenInfo={description:`This component render a list of related items.
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
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}],raw:"Array<SourceTitle>",required:!0}}]}}}],return:{name:"JSX.Element"}}},description:"Function used to render the image element."}}};const{action:c}=__STORYBOOK_MODULE_ACTIONS__,w={title:"Components/Core Data/RelatedItems",component:i},n=d(()=>{const e=l();return r.jsx(i,{onClick:c("click"),onLoad:a=>e.fetchRelatedItems("1",a)})});n.__docgenInfo={description:"",methods:[],displayName:"Default"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const EventsService = useEventsService();
  return <RelatedItems onClick={action('click')} onLoad={params => EventsService.fetchRelatedItems('1', params)} />;
})`,...n.parameters?.docs?.source}}};const k=["Default"];export{n as Default,k as __namedExportsOrder,w as default};
