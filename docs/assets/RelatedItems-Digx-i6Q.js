import{j as e}from"./jsx-runtime-D9TvR9R2.js";import"./index-C0dDX-lL.js";import{_ as m}from"./index-default-C_maRo4o.js";import{L as o}from"./LoadAnimation-b0qjd8WL.js";import{a as l}from"./CoreData-BIBskTlz.js";const i=r=>{const{data:{items:u}={},loading:s}=l(r.onLoad,[]);return s?e.jsx(o,{}):e.jsx("ul",{className:r.className,children:m.map(u,n=>{var t,a;return e.jsx("li",{children:e.jsx("div",{className:"min-h-[5.5em] flex flex-col justify-start",children:e.jsxs("button",{className:"my-0.5 flex-grow text-left inline-flex rounded-none bg-gray-100",onClick:()=>r.onClick(n),type:"button",children:[r.renderImage&&e.jsx("div",{className:"w-[160px] h-[120px]",children:r.renderImage(n)}),e.jsxs("div",{className:"py-3 px-5 flex-grow",children:[r.renderHeader&&e.jsx("div",{className:"py-0.5 font-semibold uppercase text-sm",children:r.renderHeader(n)}),e.jsx("h2",{className:"py-0.5 font-semibold text-lg",children:(a=(t=n.primary_name)==null?void 0:t.name)==null?void 0:a.name}),r.renderDescription&&e.jsx("div",{className:"py-0.5 font-light text-sm",children:r.renderDescription(n)})]})]})})})})})},w=i;i.__docgenInfo={description:"This component render a list of related items.",methods:[],displayName:"RelatedItems",props:{className:{required:!1,flowType:{name:"string"},description:"Name of the class(es) to apply to the `ul` element."},onClick:{required:!0,flowType:{name:"signature",type:"function",raw:"(item: ItemType) => void",signature:{arguments:[{name:"item",type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}],raw:"Array<SourceTitle>",required:!0}}]}}}],return:{name:"JSX.Element"}}},description:"Function used to render the image element."}}};export{w as R};
