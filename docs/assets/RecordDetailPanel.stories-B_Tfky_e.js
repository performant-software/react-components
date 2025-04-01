import{j as e}from"./jsx-runtime-D9TvR9R2.js";import{a as l}from"./chunk-WFFRPTHA-B2vgThZf.js";import{r as a}from"./index-C0dDX-lL.js";import{_ as T}from"./index-default-C_maRo4o.js";import{K as be}from"./KeyValueList-CY4QM88x.js";import{c}from"./clsx-B-dksMZM.js";import{A as xe}from"./AccordionItemsList-QyA43jZx.js";import{I as Ne}from"./Icon-CLXecEt2.js";import{L as we}from"./LoadAnimation-b0qjd8WL.js";import{R as je}from"./RecordDetailBreadcrumbs-Cpf3s6pc.js";import{B as Se}from"./Button-DHdN4eAR.js";import{i as R}from"./i18n-1SWpSAfC.js";import{R as ke}from"./RecordDetailItem-D82s1buW.js";import{R as Pe}from"./RecordDetailHeader-BM2WTNRG.js";import"./preview-errors-CzpZmerH.js";import"./index-CKJfshIT.js";import"./v4-D8aEg3BZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BGIGw4h8.js";import"./extends-CCbyfPlC.js";import"./index-CIyLsbPd.js";import"./index-DOYXiIEK.js";import"./index-BmSdlTVd.js";import"./index-CMZE9jPC.js";import"./i18next-CwS9wMM1.js";import"./toPropertyKey-BcUJYDQU.js";import"./defineProperty-DcNpp85p.js";import"./inherits-CWPG5jll.js";import"./assertThisInitialized-B9jnkVVz.js";import"./setPrototypeOf-DgZC2w_0.js";import"./createClass-CV9nCQMI.js";import"./getPrototypeOf-BYVhAdwF.js";import"./RecordDetailTitle-CJg3OA8J.js";const ge=i=>{var I,C;const[t,r]=a.useState(!1),[o,j]=a.useState(!1),[m,S]=a.useState(0),[D,ye]=a.useState(0),P=a.useRef(null),A=a.useMemo(()=>new ResizeObserver(n=>{const{target:k}=n[0];S(k.scrollHeight),ye(k.clientHeight)}),[]),qe=a.useCallback(n=>{n?(P.current=n,A.observe(n)):P.current=null},[A]);return a.useEffect(()=>{P.current&&j(m>D||t)},[m,D]),a.useEffect(()=>{r(!1)},[i.children,i.items]),a.useEffect(()=>()=>A.disconnect(),[]),e.jsxs("div",{className:(I=i.classNames)==null?void 0:I.root,children:[e.jsxs("div",{className:c("flex","flex-col","relative",{"max-h-[250px]":!t}),children:[e.jsxs("div",{className:"overflow-hidden",ref:qe,children:[e.jsx("ul",{className:(C=i.classNames)==null?void 0:C.items,children:T.map(i.items,(n,k)=>e.jsx(ke,{className:n.className,icon:n.icon,text:n.text},k))}),i.children]}),o&&!t&&e.jsx("div",{className:"absolute left-0 bottom-0 w-full h-[50px] bg-gradient-to-b from-white/50 to-white/100"})]}),o&&e.jsx(Se,{className:"w-full justify-center mb-4",onClick:()=>r(n=>!n),rounded:!0,children:t?R.t("RecordDetailHeader.showLess"):R.t("RecordDetailHeader.showMore")})]})};ge.__docgenInfo={description:"",methods:[],displayName:"RecordDetailContent",props:{children:{required:!1,flowType:{name:"Node"},description:""},classNames:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  root?: string,
  items?: string
}`,signature:{properties:[{key:"root",value:{name:"string",required:!1}},{key:"items",value:{name:"string",required:!1}}]}},description:""},items:{required:!0,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  className?: string,
  icon?: string,
  text: string
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"icon",value:{name:"string",required:!1}},{key:"text",value:{name:"string",required:!0}}]}}],raw:"Array<Item>"},description:""}}};const he=i=>{var t,r,o,j,m,S;return e.jsxs("div",{className:c("relative","overflow-y-auto",(t=i.classNames)==null?void 0:t.root),children:[e.jsxs("div",{className:c("sticky","inset-0","bg-white","z-[5]",{"shadow-[0px_1px_4px_0px_rgba(0,0,0,.15)]":i.relations&&i.relations.length}),children:[i.onClose&&e.jsx("div",{"aria-label":"Close",className:"absolute top-6 right-6 z-10 cursor-pointer",onClick:i.onClose,onKeyDown:i.onClose,role:"button",tabIndex:"0",children:e.jsx(Ne,{name:"close",size:24})}),(i.breadcrumbs||i.onGoBack)&&e.jsx(je,{history:i.breadcrumbs||[],onGoBack:i.onGoBack,className:"absolute top-6 left-6 pr-6 max-w-[calc(100%_-4.5em)] z-10"}),e.jsx(Pe,{title:i.title,icon:i.icon,classNames:{root:c({"!pt-16":i.breadcrumbs||i.onGoBack},(r=i.classNames)==null?void 0:r.header),title:c((o=i.classNames)==null?void 0:o.title,{"pr-6":i.onClose}),items:(j=i.classNames)==null?void 0:j.items},detailPageUrl:i.detailPageUrl})]}),e.jsx(ge,{classNames:{root:"py-4 px-6",items:(m=i.classNames)==null?void 0:m.items},items:i.detailItems,children:i.children}),i.loading&&e.jsx("div",{className:"py-4 px-8",children:e.jsx(we,{})}),!i.loading&&e.jsx(xe,{className:c((S=i.classNames)==null?void 0:S.relatedRecords),items:i.relations,count:i.count})]})},s=he;he.__docgenInfo={description:"",methods:[],displayName:"RecordDetailPanel",props:{breadcrumbs:{required:!1,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:"A list of navigation breadcrumbs to be rendered above the title"},children:{required:!1,flowType:{name:"Node"},description:"Content to be rendered as the blurb"},classNames:{required:!1,flowType:{name:"signature",type:"object",raw:"{ header?: string, items?: string, relatedRecords?: string, root?: string, title?: string }",signature:{properties:[{key:"header",value:{name:"string",required:!1}},{key:"items",value:{name:"string",required:!1}},{key:"relatedRecords",value:{name:"string",required:!1}},{key:"root",value:{name:"string",required:!1}},{key:"title",value:{name:"string",required:!1}}]}},description:`Class names to apply to the root div, the header box, the title element,
the list element containing the detail items, and the accordion list containing related records`},count:{required:!1,flowType:{name:"Boolean"},description:"If true, the number of related records will be displayed for each type"},detailItems:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ text: string, icon?: string, className?: string }",signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"icon",value:{name:"string",required:!1}},{key:"className",value:{name:"string",required:!1}}]}}],raw:"Array<{ text: string, icon?: string, className?: string }>"},description:"List of detail fields to be rendered above the blurb"},detailPageUrl:{required:!1,flowType:{name:"string"},description:"If a URL for a record detail page is provided, will render a button that links to it"},icon:{required:!1,flowType:{name:"string"},description:"The icon to display before the header."},loading:{required:!1,flowType:{name:"Boolean"},description:"If true, displays a loading icon in place of the related records list"},onClose:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"A function called when the `close` icon is clicked"},onGoBack:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"A function called when the back arrow is clicked"},relations:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"data",value:{name:"any",required:!1},description:"Optional data prop to pass other fields, e.g. if needed for rendering"},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Optional event fired when item is clicked. Will be overridden if a renderItem prop is provided in the parent list"},{key:"name",value:{name:"string",required:!0},description:"The primary name of the record (will display as text of the list item by default)"}]}}}],return:{name:"JSX.Element"}},required:!1},description:"Optional render prop to render each item in the list"},{key:"title",value:{name:"string",required:!0},description:"The title of the related model"}]}}],raw:"Array<RelatedRecordsList>"},description:"An array of lists of related records for different model types"},title:{required:!0,flowType:{name:"string"},description:"The text of the header."}}};const oi={title:"Components/Core Data/RecordDetailPanel",component:s},u=[{title:"Related People",items:[{name:"Kazuya Miyuki"},{name:"Eijun Sawamura"}],icon:"person",count:!0},{title:"Related Organizations",items:[{name:"Seido High School Baseball Club"},{name:"Yakushi High School Baseball Club"}],icon:"occupation",count:!0}],d=()=>e.jsx(s,{relations:u,title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo."," ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," ","Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames."]})}),p=()=>e.jsx(s,{relations:u,detailPageUrl:"#",title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo."," ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," ","Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames."]})}),f=()=>e.jsx(s,{relations:u,title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],icon:"participants",children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo."," ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," ","Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames."]})}),v=()=>e.jsx(s,{relations:u,title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],onClose:l("close"),children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo."," ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," ","Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames."]})}),b=()=>e.jsx(s,{relations:u,title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],breadcrumbs:["West Tokyo Qualifiers Semifinal","West Tokyo Qualifiers Quarterfinal"],onGoBack:l("back"),children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo."," ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," ","Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames."]})}),g=()=>e.jsx(s,{relations:u,title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],breadcrumbs:["West Tokyo Qualifiers Semifinal","West Tokyo Qualifiers Quarterfinal"],onGoBack:l("back"),classNames:{root:"w-[380px] h-[560px]"},onClose:l("close"),detailPageUrl:"#",children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo."," ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," ","Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames. Lorem ipsum odor amet, consectetuer adipiscing elit. Fringilla morbi diam vehicula nostra gravida faucibus consequat sociosqu. Platea taciti ridiculus nostra feugiat hac elit quisque. Magnis risus natoque sagittis finibus ridiculus aenean ac posuere. Euismod ridiculus placerat dictum himenaeos odio aenean magnis magna. Maximus justo curabitur purus porttitor dictum penatibus lacus. Nisl lectus finibus sollicitudin; arcu adipiscing urna fermentum facilisis. Natoque blandit elit viverra penatibus facilisis. Praesent habitant volutpat efficitur in lacus lacinia torquent. Cras ultricies mus ante et dapibus dolor vivamus nunc. Velit interdum litora lobortis ultrices sollicitudin molestie ut."]})}),h=()=>e.jsx(s,{relations:u,title:"West Tokyo Qualifiers Quarterfinal",count:!0,detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo."," ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," ","Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames."]})}),y=()=>{const[i,t]=a.useState(!0),[r,o]=a.useState(null);return a.useEffect(()=>{setTimeout(()=>{o(e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo."," ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," ","Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames. Lorem ipsum odor amet, consectetuer adipiscing elit. Fringilla morbi diam vehicula nostra gravida faucibus consequat sociosqu. Platea taciti ridiculus nostra feugiat hac elit quisque. Magnis risus natoque sagittis finibus ridiculus aenean ac posuere. Euismod ridiculus placerat dictum himenaeos odio aenean magnis magna. Maximus justo curabitur purus porttitor dictum penatibus lacus. Nisl lectus finibus sollicitudin; arcu adipiscing urna fermentum facilisis. Natoque blandit elit viverra penatibus facilisis. Praesent habitant volutpat efficitur in lacus lacinia torquent. Cras ultricies mus ante et dapibus dolor vivamus nunc. Velit interdum litora lobortis ultrices sollicitudin molestie ut."]}))},200)},[]),i&&e.jsx(s,{relations:u,title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],breadcrumbs:["West Tokyo Qualifiers Semifinal","West Tokyo Qualifiers Quarterfinal"],onGoBack:l("back"),classNames:{root:"w-[380px] h-[560px]"},onClose:()=>{t(!1)},detailPageUrl:"#",children:r})},q=()=>e.jsx(s,{title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo."," ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," ","Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames."]})}),x=()=>{const[i,t]=a.useState(!0);return a.useEffect(()=>{setTimeout(()=>{t(!1)},3e3)},[]),e.jsx(s,{loading:i,relations:u,title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo."," ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," ","Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames."]})})},N=()=>e.jsxs(s,{classNames:{root:"w-[380px] h-[560px]"},detailPageUrl:"#",icon:"location",onClose:l("close"),relations:[{title:"Planification evenement new",items:[{name:"Planification Salton City"}]},{title:"Pays",items:[{name:"États-Unis (Californie)"}]}],title:"Saltaire",children:[e.jsx(be,{items:[{label:"Serial Number",value:"1976"},{label:"Periode Planification",value:"1851-1853"},{label:"Annee Planification",value:"1851"},{label:"Autre Nom Ou Localisation",value:"(près de Bradford)"},{label:"Autres informations 1",value:"Site du patrimoine mondial."},{label:"Autres informations 2",value:`"Saltaire was built by Titus Salt to replace his woolen mills in Bradford by a single large factory and a new town for the work force. He selected a greenfield site crossed by a canal and railway, and between 1851 and 1871 completed a model industrial town of 820 dwellings and a population of 4,389. The town was endowed with a variety of community buildings and parks, and although the residentiel density of thirty-two houses (170 persons) per acre (eighty houses or 420 persons per hectare) appears crowded by today's standards, it represented a marked improvement on working-class living conditions of the time" (source: Pacione, Michael. 2009. Urban geography: a global perspective. Taylor & Francis. (à la page 166)).`}]}),e.jsxs("p",{className:"text-sm py-4",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et mollis magna. Donec sed turpis sit amet purus condimentum sollicitudin id non nulla. Maecenas sit amet tellus fermentum, luctus risus fringilla, sollicitudin nisl. Nulla vitae tortor gravida, facilisis velit at, rhoncus justo. Aenean et hendrerit neque. Aliquam neque nunc, aliquet bibendum facilisis pellentesque, sagittis eu ligula. Suspendisse a nulla eget orci viverra elementum eu eu velit.",e.jsx("br",{}),e.jsx("br",{}),"Suspendisse sed dolor tincidunt orci consectetur ultricies et eget nisi. Donec cursus cursus fringilla. In turpis quam, aliquet quis elit rhoncus, tempor tristique nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc a sapien quis sapien lacinia posuere in sit amet lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi metus felis, scelerisque vitae est varius, interdum posuere lectus. Morbi malesuada sagittis molestie. Pellentesque auctor ipsum et orci efficitur commodo. Etiam elit dui, suscipit eu consectetur a, hendrerit in urna. Quisque vitae sapien enim. Fusce ornare eget eros maximus ultrices. Sed dignissim odio quis eros accumsan, at auctor metus tempus.",e.jsx("br",{}),e.jsx("br",{}),"Sed ut faucibus ante, vitae maximus tellus. Sed non mi sit amet lacus hendrerit accumsan a in lacus. Donec gravida varius nulla et scelerisque. Proin porttitor, nulla eget aliquet congue, magna libero tempor orci, quis laoreet ipsum nisi ut odio. Integer dignissim volutpat pretium. Vivamus lacus ante, scelerisque et metus et, imperdiet ornare ex. Nam condimentum, odio in feugiat accumsan, diam ligula varius velit, quis malesuada felis augue at tellus. Aliquam rhoncus nisl eu nulla laoreet aliquam. Donec lectus arcu, ullamcorper sit amet lacinia sed, pulvinar et nibh. In iaculis felis congue diam feugiat pharetra. Nam non arcu arcu. Fusce ex felis, porttitor sit amet metus quis, ornare bibendum quam. Quisque at mauris urna. Praesent feugiat luctus interdum.",e.jsx("br",{}),e.jsx("br",{}),"Vivamus sed ultrices nunc, et auctor ante. Fusce sit amet porta lectus. Aliquam dapibus vitae dui commodo ornare. In efficitur, nisi sit amet tempor vehicula, nisi lectus maximus libero, sed dapibus massa augue nec nulla. Vestibulum sed tortor euismod, malesuada lacus quis, aliquam tellus. Proin sodales turpis velit, eget placerat dui maximus quis. Donec vulputate libero et ultrices tincidunt. Curabitur placerat placerat quam, sit amet iaculis ex pulvinar in. Nulla tincidunt mattis ex, eget varius sem blandit eu. Cras vulputate, massa ac lacinia hendrerit, purus libero sodales massa, in varius nisl leo et dui. In hac habitasse platea dictumst.",e.jsx("br",{}),e.jsx("br",{}),"Praesent tempor placerat dignissim. Vivamus mi lorem, auctor at ipsum bibendum, semper pellentesque ante. Donec convallis feugiat arcu a volutpat. Suspendisse eu felis est. Nam fringilla ipsum vulputate justo commodo, eget pretium ante consequat. Donec ullamcorper arcu eu vestibulum finibus. Aliquam massa metus, ullamcorper at euismod vel, maximus ut neque. In a est a nibh auctor condimentum mattis quis mi. Nunc accumsan malesuada nisi non viverra. Mauris id eros magna. Nam pulvinar ullamcorper justo ac finibus. Mauris faucibus sapien eu ex porta, ut condimentum lectus accumsan. Nullam id ex ac nunc vehicula volutpat eu eget mauris. Etiam vitae bibendum eros."]})]}),w=()=>{const[i,t]=a.useState(),r=[{content:e.jsxs("p",{className:"text-sm py-4",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et mollis magna. Donec sed turpis sit amet purus condimentum sollicitudin id non nulla. Maecenas sit amet tellus fermentum, luctus risus fringilla, sollicitudin nisl. Nulla vitae tortor gravida, facilisis velit at, rhoncus justo. Aenean et hendrerit neque. Aliquam neque nunc, aliquet bibendum facilisis pellentesque, sagittis eu ligula. Suspendisse a nulla eget orci viverra elementum eu eu velit.",e.jsx("br",{}),e.jsx("br",{}),"Suspendisse sed dolor tincidunt orci consectetur ultricies et eget nisi. Donec cursus cursus fringilla. In turpis quam, aliquet quis elit rhoncus, tempor tristique nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc a sapien quis sapien lacinia posuere in sit amet lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi metus felis, scelerisque vitae est varius, interdum posuere lectus. Morbi malesuada sagittis molestie. Pellentesque auctor ipsum et orci efficitur commodo. Etiam elit dui, suscipit eu consectetur a, hendrerit in urna. Quisque vitae sapien enim. Fusce ornare eget eros maximus ultrices. Sed dignissim odio quis eros accumsan, at auctor metus tempus.",e.jsx("br",{}),e.jsx("br",{}),"Sed ut faucibus ante, vitae maximus tellus. Sed non mi sit amet lacus hendrerit accumsan a in lacus. Donec gravida varius nulla et scelerisque. Proin porttitor, nulla eget aliquet congue, magna libero tempor orci, quis laoreet ipsum nisi ut odio. Integer dignissim volutpat pretium. Vivamus lacus ante, scelerisque et metus et, imperdiet ornare ex. Nam condimentum, odio in feugiat accumsan, diam ligula varius velit, quis malesuada felis augue at tellus. Aliquam rhoncus nisl eu nulla laoreet aliquam. Donec lectus arcu, ullamcorper sit amet lacinia sed, pulvinar et nibh. In iaculis felis congue diam feugiat pharetra. Nam non arcu arcu. Fusce ex felis, porttitor sit amet metus quis, ornare bibendum quam. Quisque at mauris urna. Praesent feugiat luctus interdum.",e.jsx("br",{}),e.jsx("br",{}),"Vivamus sed ultrices nunc, et auctor ante. Fusce sit amet porta lectus. Aliquam dapibus vitae dui commodo ornare. In efficitur, nisi sit amet tempor vehicula, nisi lectus maximus libero, sed dapibus massa augue nec nulla. Vestibulum sed tortor euismod, malesuada lacus quis, aliquam tellus. Proin sodales turpis velit, eget placerat dui maximus quis. Donec vulputate libero et ultrices tincidunt. Curabitur placerat placerat quam, sit amet iaculis ex pulvinar in. Nulla tincidunt mattis ex, eget varius sem blandit eu. Cras vulputate, massa ac lacinia hendrerit, purus libero sodales massa, in varius nisl leo et dui. In hac habitasse platea dictumst.",e.jsx("br",{}),e.jsx("br",{}),"Praesent tempor placerat dignissim. Vivamus mi lorem, auctor at ipsum bibendum, semper pellentesque ante. Donec convallis feugiat arcu a volutpat. Suspendisse eu felis est. Nam fringilla ipsum vulputate justo commodo, eget pretium ante consequat. Donec ullamcorper arcu eu vestibulum finibus. Aliquam massa metus, ullamcorper at euismod vel, maximus ut neque. In a est a nibh auctor condimentum mattis quis mi. Nunc accumsan malesuada nisi non viverra. Mauris id eros magna. Nam pulvinar ullamcorper justo ac finibus. Mauris faucibus sapien eu ex porta, ut condimentum lectus accumsan. Nullam id ex ac nunc vehicula volutpat eu eget mauris. Etiam vitae bibendum eros."]}),relations:[{title:"Planification evenement new",items:[{name:"Planification Salton City"}]},{title:"Pays",items:[{name:"États-Unis (Californie)"}]}],title:"Saltaire",user_defined:[{label:"Serial Number",value:"1976"},{label:"Periode Planification",value:"1851-1853"},{label:"Annee Planification",value:"1851"},{label:"Autre Nom Ou Localisation",value:"(près de Bradford)"},{label:"Autres informations 1",value:"Site du patrimoine mondial."},{label:"Autres informations 2",value:`"Saltaire was built by Titus Salt to replace his woolen mills in Bradford by a single large factory and a new town for the work force. He selected a greenfield site crossed by a canal and railway, and between 1851 and 1871 completed a model industrial town of 820 dwellings and a population of 4,389. The town was endowed with a variety of community buildings and parks, and although the residentiel density of thirty-two houses (170 persons) per acre (eighty houses or 420 persons per hectare) appears crowded by today's standards, it represented a marked improvement on working-class living conditions of the time" (source: Pacione, Michael. 2009. Urban geography: a global perspective. Taylor & Francis. (à la page 166)).`}]},{title:"Sparrow's Point"}];return a.useEffect(()=>{t(T.first(r))},[]),e.jsxs("div",{children:[e.jsx("ul",{className:"py-4",children:T.map(r,o=>e.jsx("li",{children:e.jsx("button",{onClick:()=>t(o),type:"button",children:o.title})}))}),i&&e.jsxs(s,{classNames:{root:"w-[380px] h-[560px]"},detailPageUrl:"#",icon:"location",onClose:l("close"),relations:i.relations,title:i.title,children:[e.jsx(be,{items:i.user_defined}),i.content]})]})};d.__docgenInfo={description:"",methods:[],displayName:"Default"};p.__docgenInfo={description:"",methods:[],displayName:"WithViewDetail"};f.__docgenInfo={description:"",methods:[],displayName:"WithIcon"};v.__docgenInfo={description:"",methods:[],displayName:"WithClose"};b.__docgenInfo={description:"",methods:[],displayName:"WithBreadcrumbs"};g.__docgenInfo={description:"",methods:[],displayName:"FixedWidthAndHeight"};h.__docgenInfo={description:"",methods:[],displayName:"WithCounts"};y.__docgenInfo={description:"",methods:[],displayName:"UnmountOnClose"};q.__docgenInfo={description:"",methods:[],displayName:"NoRelatedRecords"};x.__docgenInfo={description:"",methods:[],displayName:"WithLoadingDelay"};N.__docgenInfo={description:"",methods:[],displayName:"LotsOfContent"};w.__docgenInfo={description:"",methods:[],displayName:"SwitchingRecords"};var Q,W,M;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`() => <RecordDetailPanel relations={sampleData} title='West Tokyo Qualifiers Quarterfinal' detailItems={[{
  text: 'July 27',
  icon: 'date'
}, {
  text: 'Meiji Jinju Stadium',
  icon: 'location'
}]}>
    <p>
      Arcu imperdiet sit sit viverra id volutpat commodo.
      {' '}
      <span className='font-bold'>Tempor sem malesuada porttitor congue.</span>
      {' '}
      Nibh aenean vitae blandit vitae sapien ac varius mattis.
      Aliquam vitae purus arcu eros enim tempus parturient orci fames.
    </p>
  </RecordDetailPanel>`,...(M=(W=d.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var J,_,E;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`() => <RecordDetailPanel relations={sampleData} detailPageUrl='#' title='West Tokyo Qualifiers Quarterfinal' detailItems={[{
  text: 'July 27',
  icon: 'date'
}, {
  text: 'Meiji Jinju Stadium',
  icon: 'location'
}]}>
    <p>
      Arcu imperdiet sit sit viverra id volutpat commodo.
      {' '}
      <span className='font-bold'>Tempor sem malesuada porttitor congue.</span>
      {' '}
      Nibh aenean vitae blandit vitae sapien ac varius mattis.
      Aliquam vitae purus arcu eros enim tempus parturient orci fames.
    </p>
  </RecordDetailPanel>`,...(E=(_=p.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var L,B,V;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`() => <RecordDetailPanel relations={sampleData} title='West Tokyo Qualifiers Quarterfinal' detailItems={[{
  text: 'July 27',
  icon: 'date'
}, {
  text: 'Meiji Jinju Stadium',
  icon: 'location'
}]} icon='participants'>
    <p>
      Arcu imperdiet sit sit viverra id volutpat commodo.
      {' '}
      <span className='font-bold'>Tempor sem malesuada porttitor congue.</span>
      {' '}
      Nibh aenean vitae blandit vitae sapien ac varius mattis.
      Aliquam vitae purus arcu eros enim tempus parturient orci fames.
    </p>
  </RecordDetailPanel>`,...(V=(B=f.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var O,U,F;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`() => <RecordDetailPanel relations={sampleData} title='West Tokyo Qualifiers Quarterfinal' detailItems={[{
  text: 'July 27',
  icon: 'date'
}, {
  text: 'Meiji Jinju Stadium',
  icon: 'location'
}]} onClose={action('close')}>
    <p>
      Arcu imperdiet sit sit viverra id volutpat commodo.
      {' '}
      <span className='font-bold'>Tempor sem malesuada porttitor congue.</span>
      {' '}
      Nibh aenean vitae blandit vitae sapien ac varius mattis.
      Aliquam vitae purus arcu eros enim tempus parturient orci fames.
    </p>
  </RecordDetailPanel>`,...(F=(U=v.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var H,G,z;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`() => <RecordDetailPanel relations={sampleData} title='West Tokyo Qualifiers Quarterfinal' detailItems={[{
  text: 'July 27',
  icon: 'date'
}, {
  text: 'Meiji Jinju Stadium',
  icon: 'location'
}]} breadcrumbs={['West Tokyo Qualifiers Semifinal', 'West Tokyo Qualifiers Quarterfinal']} onGoBack={action('back')}>
    <p>
      Arcu imperdiet sit sit viverra id volutpat commodo.
      {' '}
      <span className='font-bold'>Tempor sem malesuada porttitor congue.</span>
      {' '}
      Nibh aenean vitae blandit vitae sapien ac varius mattis.
      Aliquam vitae purus arcu eros enim tempus parturient orci fames.
    </p>
  </RecordDetailPanel>`,...(z=(G=b.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var X,K,$;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`() => <RecordDetailPanel relations={sampleData} title='West Tokyo Qualifiers Quarterfinal' detailItems={[{
  text: 'July 27',
  icon: 'date'
}, {
  text: 'Meiji Jinju Stadium',
  icon: 'location'
}]} breadcrumbs={['West Tokyo Qualifiers Semifinal', 'West Tokyo Qualifiers Quarterfinal']} onGoBack={action('back')} classNames={{
  root: 'w-[380px] h-[560px]'
}} onClose={action('close')} detailPageUrl='#'>
    <p>
      Arcu imperdiet sit sit viverra id volutpat commodo.
      {' '}
      <span className='font-bold'>Tempor sem malesuada porttitor congue.</span>
      {' '}
      Nibh aenean vitae blandit vitae sapien ac varius mattis.
      Aliquam vitae purus arcu eros enim tempus parturient orci fames.
      Lorem ipsum odor amet, consectetuer adipiscing elit.
      Fringilla morbi diam vehicula nostra gravida faucibus consequat sociosqu.
      Platea taciti ridiculus nostra feugiat hac elit quisque.
      Magnis risus natoque sagittis finibus ridiculus aenean ac posuere.
      Euismod ridiculus placerat dictum himenaeos odio aenean magnis magna.
      Maximus justo curabitur purus porttitor dictum penatibus lacus. Nisl lectus finibus sollicitudin;
      arcu adipiscing urna fermentum facilisis. Natoque blandit elit viverra penatibus facilisis.
      Praesent habitant volutpat efficitur in lacus lacinia torquent.
      Cras ultricies mus ante et dapibus dolor vivamus nunc.
      Velit interdum litora lobortis ultrices sollicitudin molestie ut.
    </p>
  </RecordDetailPanel>`,...($=(K=g.parameters)==null?void 0:K.docs)==null?void 0:$.source}}};var Y,Z,ee;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`() => <RecordDetailPanel relations={sampleData} title='West Tokyo Qualifiers Quarterfinal' count detailItems={[{
  text: 'July 27',
  icon: 'date'
}, {
  text: 'Meiji Jinju Stadium',
  icon: 'location'
}]}>
    <p>
      Arcu imperdiet sit sit viverra id volutpat commodo.
      {' '}
      <span className='font-bold'>Tempor sem malesuada porttitor congue.</span>
      {' '}
      Nibh aenean vitae blandit vitae sapien ac varius mattis.
      Aliquam vitae purus arcu eros enim tempus parturient orci fames.
    </p>
  </RecordDetailPanel>`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ie,ae,te;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  const [show, setShow] = useState(true);
  const [content, setContent] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setContent(<p>
          Arcu imperdiet sit sit viverra id volutpat commodo.
          {' '}
          <span className='font-bold'>Tempor sem malesuada porttitor congue.</span>
          {' '}
          Nibh aenean vitae blandit vitae sapien ac varius mattis.
          Aliquam vitae purus arcu eros enim tempus parturient orci fames.
          Lorem ipsum odor amet, consectetuer adipiscing elit.
          Fringilla morbi diam vehicula nostra gravida faucibus consequat sociosqu.
          Platea taciti ridiculus nostra feugiat hac elit quisque.
          Magnis risus natoque sagittis finibus ridiculus aenean ac posuere.
          Euismod ridiculus placerat dictum himenaeos odio aenean magnis magna.
          Maximus justo curabitur purus porttitor dictum penatibus lacus. Nisl lectus finibus sollicitudin;
          arcu adipiscing urna fermentum facilisis. Natoque blandit elit viverra penatibus facilisis.
          Praesent habitant volutpat efficitur in lacus lacinia torquent.
          Cras ultricies mus ante et dapibus dolor vivamus nunc.
          Velit interdum litora lobortis ultrices sollicitudin molestie ut.
        </p>);
    }, 200);
  }, []);
  return show && <RecordDetailPanel relations={sampleData} title='West Tokyo Qualifiers Quarterfinal' detailItems={[{
    text: 'July 27',
    icon: 'date'
  }, {
    text: 'Meiji Jinju Stadium',
    icon: 'location'
  }]} breadcrumbs={['West Tokyo Qualifiers Semifinal', 'West Tokyo Qualifiers Quarterfinal']} onGoBack={action('back')} classNames={{
    root: 'w-[380px] h-[560px]'
  }} onClose={() => {
    setShow(false);
  }} detailPageUrl='#'>
    {content}
  </RecordDetailPanel>;
}`,...(te=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var se,ne,re;q.parameters={...q.parameters,docs:{...(se=q.parameters)==null?void 0:se.docs,source:{originalSource:`() => <RecordDetailPanel title='West Tokyo Qualifiers Quarterfinal' detailItems={[{
  text: 'July 27',
  icon: 'date'
}, {
  text: 'Meiji Jinju Stadium',
  icon: 'location'
}]}>
    <p>
      Arcu imperdiet sit sit viverra id volutpat commodo.
      {' '}
      <span className='font-bold'>Tempor sem malesuada porttitor congue.</span>
      {' '}
      Nibh aenean vitae blandit vitae sapien ac varius mattis.
      Aliquam vitae purus arcu eros enim tempus parturient orci fames.
    </p>
  </RecordDetailPanel>`,...(re=(ne=q.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var oe,ue,le;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return <RecordDetailPanel loading={loading} relations={sampleData} title='West Tokyo Qualifiers Quarterfinal' detailItems={[{
    text: 'July 27',
    icon: 'date'
  }, {
    text: 'Meiji Jinju Stadium',
    icon: 'location'
  }]}>
      <p>
        Arcu imperdiet sit sit viverra id volutpat commodo.
        {' '}
        <span className='font-bold'>Tempor sem malesuada porttitor congue.</span>
        {' '}
        Nibh aenean vitae blandit vitae sapien ac varius mattis.
        Aliquam vitae purus arcu eros enim tempus parturient orci fames.
      </p>
    </RecordDetailPanel>;
}`,...(le=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:le.source}}};var ce,me,de;N.parameters={...N.parameters,docs:{...(ce=N.parameters)==null?void 0:ce.docs,source:{originalSource:`() => <RecordDetailPanel classNames={{
  root: 'w-[380px] h-[560px]'
}} detailPageUrl='#' icon='location' onClose={action('close')} relations={[{
  title: 'Planification evenement new',
  items: [{
    name: 'Planification Salton City'
  }]
}, {
  title: 'Pays',
  items: [{
    name: 'États-Unis (Californie)'
  }]
}]} title='Saltaire'>
    <KeyValueList items={[{
    label: 'Serial Number',
    value: '1976'
  }, {
    label: 'Periode Planification',
    value: '1851-1853'
  }, {
    label: 'Annee Planification',
    value: '1851'
  }, {
    label: 'Autre Nom Ou Localisation',
    value: '(près de Bradford)'
  }, {
    label: 'Autres informations 1',
    value: 'Site du patrimoine mondial.'
  }, {
    label: 'Autres informations 2',
    value: '"Saltaire was built by Titus Salt to replace his woolen mills in Bradford by a single large factory and a new town for the work force. He selected a greenfield site crossed by a canal and railway, and between 1851 and 1871 completed a model industrial town of 820 dwellings and a population of 4,389. The town was endowed with a variety of community buildings and parks, and although the residentiel density of thirty-two houses (170 persons) per acre (eighty houses or 420 persons per hectare) appears crowded by today\\'s standards, it represented a marked improvement on working-class living conditions of the time" (source: Pacione, Michael. 2009. Urban geography: a global perspective. Taylor & Francis. (à la page 166)).'
  }]} />
    <p className='text-sm py-4'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et mollis magna. Donec sed turpis sit amet purus condimentum sollicitudin id non nulla. Maecenas sit amet tellus fermentum, luctus risus fringilla, sollicitudin nisl. Nulla vitae tortor gravida, facilisis velit at, rhoncus justo. Aenean et hendrerit neque. Aliquam neque nunc, aliquet bibendum facilisis pellentesque, sagittis eu ligula. Suspendisse a nulla eget orci viverra elementum eu eu velit.
      <br />
      <br />
      Suspendisse sed dolor tincidunt orci consectetur ultricies et eget nisi. Donec cursus cursus fringilla. In turpis quam, aliquet quis elit rhoncus, tempor tristique nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc a sapien quis sapien lacinia posuere in sit amet lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi metus felis, scelerisque vitae est varius, interdum posuere lectus. Morbi malesuada sagittis molestie. Pellentesque auctor ipsum et orci efficitur commodo. Etiam elit dui, suscipit eu consectetur a, hendrerit in urna. Quisque vitae sapien enim. Fusce ornare eget eros maximus ultrices. Sed dignissim odio quis eros accumsan, at auctor metus tempus.
      <br />
      <br />
      Sed ut faucibus ante, vitae maximus tellus. Sed non mi sit amet lacus hendrerit accumsan a in lacus. Donec gravida varius nulla et scelerisque. Proin porttitor, nulla eget aliquet congue, magna libero tempor orci, quis laoreet ipsum nisi ut odio. Integer dignissim volutpat pretium. Vivamus lacus ante, scelerisque et metus et, imperdiet ornare ex. Nam condimentum, odio in feugiat accumsan, diam ligula varius velit, quis malesuada felis augue at tellus. Aliquam rhoncus nisl eu nulla laoreet aliquam. Donec lectus arcu, ullamcorper sit amet lacinia sed, pulvinar et nibh. In iaculis felis congue diam feugiat pharetra. Nam non arcu arcu. Fusce ex felis, porttitor sit amet metus quis, ornare bibendum quam. Quisque at mauris urna. Praesent feugiat luctus interdum.
      <br />
      <br />
      Vivamus sed ultrices nunc, et auctor ante. Fusce sit amet porta lectus. Aliquam dapibus vitae dui commodo ornare. In efficitur, nisi sit amet tempor vehicula, nisi lectus maximus libero, sed dapibus massa augue nec nulla. Vestibulum sed tortor euismod, malesuada lacus quis, aliquam tellus. Proin sodales turpis velit, eget placerat dui maximus quis. Donec vulputate libero et ultrices tincidunt. Curabitur placerat placerat quam, sit amet iaculis ex pulvinar in. Nulla tincidunt mattis ex, eget varius sem blandit eu. Cras vulputate, massa ac lacinia hendrerit, purus libero sodales massa, in varius nisl leo et dui. In hac habitasse platea dictumst.
      <br />
      <br />
      Praesent tempor placerat dignissim. Vivamus mi lorem, auctor at ipsum bibendum, semper pellentesque ante. Donec convallis feugiat arcu a volutpat. Suspendisse eu felis est. Nam fringilla ipsum vulputate justo commodo, eget pretium ante consequat. Donec ullamcorper arcu eu vestibulum finibus. Aliquam massa metus, ullamcorper at euismod vel, maximus ut neque. In a est a nibh auctor condimentum mattis quis mi. Nunc accumsan malesuada nisi non viverra. Mauris id eros magna. Nam pulvinar ullamcorper justo ac finibus. Mauris faucibus sapien eu ex porta, ut condimentum lectus accumsan. Nullam id ex ac nunc vehicula volutpat eu eget mauris. Etiam vitae bibendum eros.
    </p>
  </RecordDetailPanel>`,...(de=(me=N.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var pe,fe,ve;w.parameters={...w.parameters,docs:{...(pe=w.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  const [record, setRecord] = useState();
  const records = [{
    content: <p className='text-sm py-4'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et mollis magna. Donec sed turpis sit amet purus condimentum sollicitudin id non nulla. Maecenas sit amet tellus fermentum, luctus risus fringilla, sollicitudin nisl. Nulla vitae tortor gravida, facilisis velit at, rhoncus justo. Aenean et hendrerit neque. Aliquam neque nunc, aliquet bibendum facilisis pellentesque, sagittis eu ligula. Suspendisse a nulla eget orci viverra elementum eu eu velit.
        <br />
        <br />
        Suspendisse sed dolor tincidunt orci consectetur ultricies et eget nisi. Donec cursus cursus fringilla. In turpis quam, aliquet quis elit rhoncus, tempor tristique nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc a sapien quis sapien lacinia posuere in sit amet lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi metus felis, scelerisque vitae est varius, interdum posuere lectus. Morbi malesuada sagittis molestie. Pellentesque auctor ipsum et orci efficitur commodo. Etiam elit dui, suscipit eu consectetur a, hendrerit in urna. Quisque vitae sapien enim. Fusce ornare eget eros maximus ultrices. Sed dignissim odio quis eros accumsan, at auctor metus tempus.
        <br />
        <br />
        Sed ut faucibus ante, vitae maximus tellus. Sed non mi sit amet lacus hendrerit accumsan a in lacus. Donec gravida varius nulla et scelerisque. Proin porttitor, nulla eget aliquet congue, magna libero tempor orci, quis laoreet ipsum nisi ut odio. Integer dignissim volutpat pretium. Vivamus lacus ante, scelerisque et metus et, imperdiet ornare ex. Nam condimentum, odio in feugiat accumsan, diam ligula varius velit, quis malesuada felis augue at tellus. Aliquam rhoncus nisl eu nulla laoreet aliquam. Donec lectus arcu, ullamcorper sit amet lacinia sed, pulvinar et nibh. In iaculis felis congue diam feugiat pharetra. Nam non arcu arcu. Fusce ex felis, porttitor sit amet metus quis, ornare bibendum quam. Quisque at mauris urna. Praesent feugiat luctus interdum.
        <br />
        <br />
        Vivamus sed ultrices nunc, et auctor ante. Fusce sit amet porta lectus. Aliquam dapibus vitae dui commodo ornare. In efficitur, nisi sit amet tempor vehicula, nisi lectus maximus libero, sed dapibus massa augue nec nulla. Vestibulum sed tortor euismod, malesuada lacus quis, aliquam tellus. Proin sodales turpis velit, eget placerat dui maximus quis. Donec vulputate libero et ultrices tincidunt. Curabitur placerat placerat quam, sit amet iaculis ex pulvinar in. Nulla tincidunt mattis ex, eget varius sem blandit eu. Cras vulputate, massa ac lacinia hendrerit, purus libero sodales massa, in varius nisl leo et dui. In hac habitasse platea dictumst.
        <br />
        <br />
        Praesent tempor placerat dignissim. Vivamus mi lorem, auctor at ipsum bibendum, semper pellentesque ante. Donec convallis feugiat arcu a volutpat. Suspendisse eu felis est. Nam fringilla ipsum vulputate justo commodo, eget pretium ante consequat. Donec ullamcorper arcu eu vestibulum finibus. Aliquam massa metus, ullamcorper at euismod vel, maximus ut neque. In a est a nibh auctor condimentum mattis quis mi. Nunc accumsan malesuada nisi non viverra. Mauris id eros magna. Nam pulvinar ullamcorper justo ac finibus. Mauris faucibus sapien eu ex porta, ut condimentum lectus accumsan. Nullam id ex ac nunc vehicula volutpat eu eget mauris. Etiam vitae bibendum eros.
      </p>,
    relations: [{
      title: 'Planification evenement new',
      items: [{
        name: 'Planification Salton City'
      }]
    }, {
      title: 'Pays',
      items: [{
        name: 'États-Unis (Californie)'
      }]
    }],
    title: 'Saltaire',
    user_defined: [{
      label: 'Serial Number',
      value: '1976'
    }, {
      label: 'Periode Planification',
      value: '1851-1853'
    }, {
      label: 'Annee Planification',
      value: '1851'
    }, {
      label: 'Autre Nom Ou Localisation',
      value: '(près de Bradford)'
    }, {
      label: 'Autres informations 1',
      value: 'Site du patrimoine mondial.'
    }, {
      label: 'Autres informations 2',
      value: '"Saltaire was built by Titus Salt to replace his woolen mills in Bradford by a single large factory and a new town for the work force. He selected a greenfield site crossed by a canal and railway, and between 1851 and 1871 completed a model industrial town of 820 dwellings and a population of 4,389. The town was endowed with a variety of community buildings and parks, and although the residentiel density of thirty-two houses (170 persons) per acre (eighty houses or 420 persons per hectare) appears crowded by today\\'s standards, it represented a marked improvement on working-class living conditions of the time" (source: Pacione, Michael. 2009. Urban geography: a global perspective. Taylor & Francis. (à la page 166)).'
    }]
  }, {
    title: 'Sparrow\\'s Point'
  }];
  useEffect(() => {
    setRecord(_.first(records));
  }, []);
  return <div>
      <ul className='py-4'>
        {_.map(records, rec => <li>
            <button onClick={() => setRecord(rec)} type='button'>
              {rec.title}
            </button>
          </li>)}
      </ul>
      {record && <RecordDetailPanel classNames={{
      root: 'w-[380px] h-[560px]'
    }} detailPageUrl='#' icon='location' onClose={action('close')} relations={record.relations} title={record.title}>
          <KeyValueList items={record.user_defined} />
          {record.content}
        </RecordDetailPanel>}
    </div>;
}`,...(ve=(fe=w.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};const ui=["Default","WithViewDetail","WithIcon","WithClose","WithBreadcrumbs","FixedWidthAndHeight","WithCounts","UnmountOnClose","NoRelatedRecords","WithLoadingDelay","LotsOfContent","SwitchingRecords"];export{d as Default,g as FixedWidthAndHeight,N as LotsOfContent,q as NoRelatedRecords,w as SwitchingRecords,y as UnmountOnClose,b as WithBreadcrumbs,v as WithClose,h as WithCounts,f as WithIcon,x as WithLoadingDelay,p as WithViewDetail,ui as __namedExportsOrder,oi as default};
