import{j as r}from"./iframe-Dd51AVec.js";import{_ as u}from"./index-default-B8-H6N8J.js";import{L as i}from"./LoadAnimation-DoN_mRql.js";import{a as s}from"./CoreData-B5AD3f-y.js";const m=e=>{const{data:a={},loading:t}=s(e.onLoad,[]);return t?r.jsx(i,{}):r.jsx("ul",{className:e.className,children:u.map(a[e.sourceType],n=>r.jsx("li",{children:r.jsx("div",{className:"min-h-[5.5em] flex flex-col justify-start",children:r.jsxs("button",{className:"my-0.5 flex-grow text-left inline-flex rounded-none bg-gray-100",onClick:()=>e.onClick(n),type:"button",children:[e.renderImage&&r.jsx("div",{className:"w-[160px] h-[120px]",children:e.renderImage(n)}),r.jsxs("div",{className:"py-3 px-5 flex-grow",children:[e.renderHeader&&r.jsx("div",{className:"py-0.5 font-semibold uppercase text-sm",children:e.renderHeader(n)}),r.jsx("h2",{className:"py-0.5 font-semibold text-lg",children:n.primary_name?.name?.name}),e.renderDescription&&r.jsx("div",{className:"py-0.5 font-light text-sm",children:e.renderDescription(n)})]})]})})}))})};m.__docgenInfo={description:"This component render a list of related items.",methods:[],displayName:"RelatedSources",props:{className:{required:!1,flowType:{name:"string"},description:"Name of the class(es) to apply to the `ul` element."},onClick:{required:!0,flowType:{name:"signature",type:"function",raw:"(source: SourceType) => void",signature:{arguments:[{name:"source",type:{name:"union",raw:"Instance | Item | Work",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}],raw:"Array<SourceTitle>",required:!0}}]}},{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}],raw:"Array<SourceTitle>",required:!0}}]}},{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}],raw:"Array<SourceTitle>",required:!0}}]}}]}}],return:{name:"void"}}},description:"Callback fired when a source in the list is clicked."},onLoad:{required:!0,flowType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:"Callback fired on mount to load the list of items."},renderDescription:{required:!1,flowType:{name:"signature",type:"function",raw:"(source: SourceType) => JSX.Element",signature:{arguments:[{name:"source",type:{name:"union",raw:"Instance | Item | Work",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}],raw:"Array<SourceTitle>",required:!0}}]}},{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}],raw:"Array<SourceTitle>",required:!0}}]}},{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}],raw:"Array<SourceTitle>",required:!0}}]}}]}}],return:{name:"JSX.Element"}}},description:"Function used to render the description element."},renderHeader:{required:!1,flowType:{name:"signature",type:"function",raw:"(source: SourceType) => JSX.Element",signature:{arguments:[{name:"source",type:{name:"union",raw:"Instance | Item | Work",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}],raw:"Array<SourceTitle>",required:!0}}]}},{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}],raw:"Array<SourceTitle>",required:!0}}]}},{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}],raw:"Array<SourceTitle>",required:!0}}]}}]}}],return:{name:"JSX.Element"}}},description:"Function used to render the header element."},renderImage:{required:!1,flowType:{name:"signature",type:"function",raw:"(source: SourceType) => JSX.Element",signature:{arguments:[{name:"source",type:{name:"union",raw:"Instance | Item | Work",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}],raw:"Array<SourceTitle>",required:!0}}]}},{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}],raw:"Array<SourceTitle>",required:!0}}]}},{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}],raw:"Array<SourceTitle>",required:!0}}]}}]}}],return:{name:"JSX.Element"}}},description:"Function used to render the image element."},sourceType:{required:!0,flowType:{name:"union",raw:"'instances' | 'items' | 'works'",elements:[{name:"literal",value:"'instances'"},{name:"literal",value:"'items'"},{name:"literal",value:"'works'"}]},description:"Type of the source being fetched."}}};export{m as R};
