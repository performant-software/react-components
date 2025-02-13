import{j as e}from"./jsx-runtime-D9TvR9R2.js";import{$ as p,a as m,b as c,c as f,d as u}from"./index-BGIGw4h8.js";import{c as i}from"./clsx-B-dksMZM.js";import"./index-C0dDX-lL.js";import{_ as o}from"./index-default-C_maRo4o.js";import{I as a}from"./Icon-57nIhQao.js";const s=r=>e.jsx(p,{className:i("accordion-items-list",r.className),type:"multiple",children:o.map(r.relations,(t,d)=>e.jsxs(m,{value:t.title,children:[e.jsx(c,{asChild:!0,children:e.jsx("h2",{children:e.jsxs(f,{className:"accordion-list-trigger border-neutral-100 border border-t border-b-0 border-l-0 border-r-0 border-solid rounded-none w-full flex justify-between items-center p-4 text-[15px] font-bold leading-[120%]",children:[t.renderTitle?t.renderTitle(t.title,t.count):e.jsxs("span",{children:[t.title,t.count?e.jsxs("span",{className:"ml-2",children:["(",t.items.length,")"]}):null]}),e.jsx(a,{className:"accordion-list-chevron",name:"right",size:18})]})})}),e.jsx(u,{className:"accordion-list-content text-[13px] font-semibold leading-[120%]",children:e.jsx("ul",{children:o.map(t.items,(n,l)=>e.jsx(e.Fragment,{children:t.renderItem?t.renderItem(n):e.jsxs("li",{onClick:n.onClick,onKeyDown:n.onClick,tabIndex:n.onClick?"0":"-1",className:i("flex flex-row gap-2 items-baseline px-6 py-2",{"hover:bg-neutral-100":n.onClick,"cursor-pointer":n.onClick}),children:[t.icon&&e.jsx(a,{name:t.icon,size:14}),e.jsx("span",{children:n.name})]},l)}))})})]},d))}),w=s;s.__docgenInfo={description:"This component renders the passed list of related items in an accordion fashion.",methods:[],displayName:"AccordionItemsList",props:{className:{required:!1,flowType:{name:"string"},description:"Optional list of classes to be applied to the root element"},relations:{required:!0,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{  
  /**
   * If true, will render the item count in parentheses after the title. Note this is overridden if a renderTitle prop is provided
   */
  count?: boolean,
  
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
}`,signature:{properties:[{key:"count",value:{name:"boolean",required:!1},description:"If true, will render the item count in parentheses after the title. Note this is overridden if a renderTitle prop is provided"},{key:"icon",value:{name:"JSX.Element",required:!1},description:"Icon to use in front of each list item. Defaults to none. Note this is overridden if a renderItem prop is provided"},{key:"items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Optional data prop to pass other fields, e.g. if needed for rendering
  */
  data?: any,
  
  /**
    * Optional event fired when the item is clicked. Note this will be overridden if a renderItem prop is provided in the parent list
  */
  onClick?: () => void,

  /**
   * The primary name of the record (will display as text of the list item by default)
   */
  name: string,
}`,signature:{properties:[{key:"data",value:{name:"any",required:!1},description:"Optional data prop to pass other fields, e.g. if needed for rendering"},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Optional event fired when the item is clicked. Note this will be overridden if a renderItem prop is provided in the parent list"},{key:"name",value:{name:"string",required:!0},description:"The primary name of the record (will display as text of the list item by default)"}]}}],raw:"Array<RelatedRecord>",required:!0},description:"List of related items"},{key:"renderTitle",value:{name:"signature",type:"function",raw:"(title: String, count?: number | string) => JSX.Element",signature:{arguments:[{name:"title",type:{name:"String"}},{name:"count",type:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]}}],return:{name:"JSX.Element"}},required:!1},description:"Optional render prop to render the title and count; defaults to `${title} (${count})`"},{key:"renderItem",value:{name:"signature",type:"function",raw:"(item: RelatedRecord) => JSX.Element",signature:{arguments:[{name:"item",type:{name:"signature",type:"object",raw:`{
  /**
   * Optional data prop to pass other fields, e.g. if needed for rendering
  */
  data?: any,
  
  /**
    * Optional event fired when the item is clicked. Note this will be overridden if a renderItem prop is provided in the parent list
  */
  onClick?: () => void,

  /**
   * The primary name of the record (will display as text of the list item by default)
   */
  name: string,
}`,signature:{properties:[{key:"data",value:{name:"any",required:!1},description:"Optional data prop to pass other fields, e.g. if needed for rendering"},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Optional event fired when the item is clicked. Note this will be overridden if a renderItem prop is provided in the parent list"},{key:"name",value:{name:"string",required:!0},description:"The primary name of the record (will display as text of the list item by default)"}]}}}],return:{name:"JSX.Element"}},required:!1},description:"Optional render prop to render each item in the list"},{key:"title",value:{name:"string",required:!0},description:"The title of the related model"}]}}],raw:"Array<RelatedRecordsList>"},description:"List of related models to render"}}};export{w as A};
