import{j as e}from"./jsx-runtime-BTCK_S7S.js";import"./index-CBqU2yxZ.js";import{$,a as E,b as N,c as R,d as O}from"./index-C7__U9OG.js";import{c as d}from"./clsx-B-dksMZM.js";import{_ as c}from"./index-default-C_maRo4o.js";import{I as m}from"./Icon-BJPA3lGg.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CCbyfPlC.js";import"./index-6HK7vUyC.js";import"./index-DZGZymok.js";import"./index-BZx57K47.js";import"./index-DglDcCL6.js";const j=l=>e.jsx($,{className:d("accordion-items-list",l.className),type:"multiple",children:c.map(l.relations,(t,S)=>e.jsxs(E,{value:t.title,children:[e.jsx(N,{asChild:!0,children:e.jsx("h2",{children:e.jsxs(R,{className:"accordion-list-trigger border-neutral-100 border border-t border-b-0 border-l-0 border-r-0 border-solid rounded-none w-full flex justify-between items-center p-4 text-[15px] font-bold leading-[120%]",children:[t.renderTitle?t.renderTitle(t.title,t.count):e.jsxs("span",{children:[t.title,t.count?e.jsxs("span",{className:"ml-2",children:["(",t.items.length,")"]}):null]}),e.jsx(m,{className:"accordion-list-chevron",name:"right",size:18})]})})}),e.jsx(O,{className:"accordion-list-content text-[13px] font-semibold leading-[120%]",children:e.jsx("ul",{children:c.map(t.items,(n,C)=>e.jsx(e.Fragment,{children:t.renderItem?t.renderItem(n):e.jsxs("li",{onClick:n.onClick,className:d("flex flex-row gap-2 items-baseline px-6 py-2",{"hover:bg-neutral-100":n.onClick,"cursor-pointer":n.onClick}),children:[t.icon&&e.jsx(m,{name:t.icon,size:14}),e.jsx("span",{children:n.name})]},C)}))})})]},S))}),s=j;j.__docgenInfo={description:"This component renders the passed list of related items in an accordion fashion.",methods:[],displayName:"AccordionItemsList",props:{className:{required:!1,flowType:{name:"string"},description:"Optional list of classes to be applied to the root element"},relations:{required:!0,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{  
  /**
   * The item count (optional)
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
}`,signature:{properties:[{key:"count",value:{name:"boolean",required:!1},description:"The item count (optional)"},{key:"icon",value:{name:"JSX.Element",required:!1},description:"Icon to use in front of each list item. Defaults to none. Note this is overridden if a renderItem prop is provided"},{key:"items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"data",value:{name:"any",required:!1},description:"Optional data prop to pass other fields, e.g. if needed for rendering"},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Optional event fired when the item is clicked. Note this will be overridden if a renderItem prop is provided in the parent list"},{key:"name",value:{name:"string",required:!0},description:"The primary name of the record (will display as text of the list item by default)"}]}}}],return:{name:"JSX.Element"}},required:!1},description:"Optional render prop to render each item in the list"},{key:"title",value:{name:"string",required:!0},description:"The title of the related model"}]}}],raw:"Array<RelatedRecordsList>"},description:"List of related models to render"}}};const G={title:"Components/Core Data/AccordionItemsList",component:s},T=[{title:"Related People",items:[{name:"Kazuya Miyuki"},{name:"Eijun Sawamura"}]},{title:"Related Organizations",items:[{name:"Seido High School Baseball Club"}]}],W=[{title:"Related People",items:[{name:"Kazuya Miyuki"},{name:"Eijun Sawamura"}],icon:"person"},{title:"Related Organizations",items:[{name:"Seido High School Baseball Club"}],icon:"occupation"}],q=[{title:"Related People",items:[{name:"Kazuya Miyuki"},{name:"Eijun Sawamura"}],count:!0},{title:"Related Organizations",items:[{name:"Seido High School Baseball Club"}],count:!0}],A=[{title:"Related People",items:[{name:"Kazuya Miyuki",onClick:()=>{alert("Kazuya Miyuki!")}},{name:"Eijun Sawamura"}],count:!0},{title:"Related Organizations",items:[{name:"Seido High School Baseball Club"}],count:!0}],i=()=>e.jsx(s,{relations:T}),r=()=>e.jsx(s,{relations:W}),a=()=>e.jsx(s,{relations:q}),o=()=>e.jsx(s,{relations:A});i.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"WithIcons"};a.__docgenInfo={description:"",methods:[],displayName:"WithCount"};o.__docgenInfo={description:"",methods:[],displayName:"WithClickEvent"};var p,u,f;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:"() => <AccordionItemsList relations={sampleData} />",...(f=(u=i.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var h,g,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:"() => <AccordionItemsList relations={sampleDataWithIcon} />",...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,v,x;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:"() => <AccordionItemsList relations={sampleDataWithCount} />",...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var k,I,w;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:"() => <AccordionItemsList relations={sampleDataWithClickEvent} />",...(w=(I=o.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};const Q=["Default","WithIcons","WithCount","WithClickEvent"];export{i as Default,o as WithClickEvent,a as WithCount,r as WithIcons,Q as __namedExportsOrder,G as default};
