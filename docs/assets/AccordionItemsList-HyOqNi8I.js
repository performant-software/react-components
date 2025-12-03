import{j as n}from"./iframe-DjZg4LCJ.js";import{$ as d,a as m,b as p,c,d as f}from"./index-BlbKKZOn.js";import{c as i}from"./clsx-B-dksMZM.js";import{_ as a}from"./index-default-B8-H6N8J.js";import{I as o}from"./Icon-D82Wst-S.js";const u=r=>n.jsx(d,{className:i("accordion-items-list","bg-white",r.className),type:"multiple",children:a.map(r.items,(e,s)=>n.jsxs(m,{value:e.title,children:[n.jsx(p,{asChild:!0,children:n.jsx("h2",{children:n.jsxs(c,{className:"accordion-list-trigger border-neutral-200 border border-t border-b-0 border-l-0 border-r-0 border-solid rounded-none w-full flex justify-between items-center p-4 text-[15px] font-bold leading-[120%]",children:[e.renderTitle?e.renderTitle(e.title,e.count):n.jsxs("span",{children:[e.title,r.count?n.jsxs("span",{className:"ml-2",children:["(",e.items.length,")"]}):null]}),n.jsx(o,{className:"accordion-list-chevron",name:"right",size:18})]})})}),n.jsx(f,{className:"accordion-list-content text-[13px] font-semibold leading-[120%]",children:n.jsx("ul",{className:i({flex:e.horizontal},{"flex-row":e.horizontal},{"flex-wrap":e.horizontal},{"gap-6":e.horizontal},{"py-6":e.horizontal}),children:a.map(e.items,(t,l)=>n.jsx(n.Fragment,{children:e.renderItem?e.renderItem(t):n.jsxs("li",{onClick:t.onClick,onKeyDown:t.onClick,tabIndex:t.onClick?"0":"-1",className:i("flex flex-row gap-2 items-baseline px-6 py-2",{"hover:bg-neutral-100":t.onClick,"cursor-pointer":t.onClick}),children:[e.icon&&n.jsx(o,{name:e.icon,size:14}),n.jsx("span",{children:t.name})]},l)}))})})]},s))});u.__docgenInfo={description:"This component renders the passed list of related items in an accordion fashion.",methods:[],displayName:"AccordionItemsList",props:{className:{required:!1,flowType:{name:"string"},description:"Optional list of classes to be applied to the root element"},count:{required:!1,flowType:{name:"Boolean"},description:"If true, will display the number of items in each section after the title"},items:{required:!0,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * When set to true, items will be displayed in a row rather than a column
   */
  horizontal?: boolean,

  /**
   * Icon to use in front of each list item. Defaults to none. Note this is overridden if a renderItem prop is provided
   */
  icon?: JSX.Element,

  /**
   * List of related items
   */
  items: Array<RelatedRecord>,

  /**
   * Optional render prop to render the title and count; defaults to \`\${title} (\${count})\`
   */
  renderTitle?: (title: String, count?: number | string) => JSX.Element,

  /**
   * Optional render prop to render each item in the list
  */
  renderItem?: (item: RelatedRecord) => JSX.Element,

  /**
   * The title of the related model
   */
  title: string,
}`,signature:{properties:[{key:"horizontal",value:{name:"boolean",required:!1},description:"When set to true, items will be displayed in a row rather than a column"},{key:"icon",value:{name:"JSX.Element",required:!1},description:"Icon to use in front of each list item. Defaults to none. Note this is overridden if a renderItem prop is provided"},{key:"items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Optional data prop to pass other fields, e.g. if needed for rendering
  */
  data?: any,

  /**
    * Optional event fired when item is clicked. Will be overridden if a renderItem prop is provided in the parent list
  */
  onClick?: () => void,

  /**
   * The primary name of the record (will display as text of the list item by default)
   */
  name: string,
}`,signature:{properties:[{key:"data",value:{name:"any",required:!1},description:"Optional data prop to pass other fields, e.g. if needed for rendering"},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Optional event fired when item is clicked. Will be overridden if a renderItem prop is provided in the parent list"},{key:"name",value:{name:"string",required:!0},description:"The primary name of the record (will display as text of the list item by default)"}]}}],raw:"Array<RelatedRecord>",required:!0},description:"List of related items"},{key:"renderTitle",value:{name:"signature",type:"function",raw:"(title: String, count?: number | string) => JSX.Element",signature:{arguments:[{name:"title",type:{name:"String"}},{name:"count",type:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]}}],return:{name:"JSX.Element"}},required:!1},description:"Optional render prop to render the title and count; defaults to `${title} (${count})`"},{key:"renderItem",value:{name:"signature",type:"function",raw:"(item: RelatedRecord) => JSX.Element",signature:{arguments:[{name:"item",type:{name:"signature",type:"object",raw:`{
  /**
   * Optional data prop to pass other fields, e.g. if needed for rendering
  */
  data?: any,

  /**
    * Optional event fired when item is clicked. Will be overridden if a renderItem prop is provided in the parent list
  */
  onClick?: () => void,

  /**
   * The primary name of the record (will display as text of the list item by default)
   */
  name: string,
}`,signature:{properties:[{key:"data",value:{name:"any",required:!1},description:"Optional data prop to pass other fields, e.g. if needed for rendering"},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Optional event fired when item is clicked. Will be overridden if a renderItem prop is provided in the parent list"},{key:"name",value:{name:"string",required:!0},description:"The primary name of the record (will display as text of the list item by default)"}]}}}],return:{name:"JSX.Element"}},required:!1},description:"Optional render prop to render each item in the list"},{key:"title",value:{name:"string",required:!0},description:"The title of the related model"}]}}],raw:"Array<RelatedRecordsList>"},description:"List of related models to render"}}};export{u as A};
