import{r as a,j as e}from"./iframe-DjZg4LCJ.js";import{_ as T}from"./index-default-B8-H6N8J.js";import{K as C}from"./KeyValueList-CeCqWP8j.js";import{c as u}from"./clsx-B-dksMZM.js";import{A as J}from"./AccordionItemsList-HyOqNi8I.js";import{I as U}from"./Icon-D82Wst-S.js";import{L}from"./LoadAnimation-C5SmGqnA.js";import{R as B}from"./RecordDetailBreadcrumbs-D1Mfjdnz.js";import{B as E}from"./Button-DcTmRwZ3.js";import{i as D}from"./i18n-DmKDVPrF.js";import{R as O}from"./RecordDetailItem-BfZuB-Eg.js";import{R as V}from"./RecordDetailHeader-CmK1Qtje.js";import"./index-BlbKKZOn.js";import"./extends-CCbyfPlC.js";import"./index-hv48_XZ7.js";import"./index-5D5Ul08n.js";import"./index-CQ0jRbtR.js";import"./toPropertyKey-BdisF6oo.js";import"./defineProperty-BhpcgfZc.js";import"./inherits-DDprkOLY.js";import"./assertThisInitialized-B9jnkVVz.js";import"./setPrototypeOf-DgZC2w_0.js";import"./createClass-CGi6Kyeu.js";import"./RecordDetailTitle-BQrw0eyx.js";const Q=i=>{const[s,l]=a.useState(!1),[c,R]=a.useState(!1),[P,W]=a.useState(0),[I,_]=a.useState(0),k=a.useRef(null),A=a.useMemo(()=>new ResizeObserver(n=>{const{target:S}=n[0];W(S.scrollHeight),_(S.clientHeight)}),[]),M=a.useCallback(n=>{n?(k.current=n,A.observe(n)):k.current=null},[A]);return a.useEffect(()=>{k.current&&R(P>I||s)},[P,I]),a.useEffect(()=>{l(!1)},[i.children,i.items]),a.useEffect(()=>()=>A.disconnect(),[]),e.jsxs("div",{className:i.classNames?.root,children:[e.jsxs("div",{className:u("flex","flex-col","relative",{"max-h-[250px]":!s}),children:[e.jsxs("div",{className:"overflow-hidden",ref:M,children:[e.jsx("ul",{className:i.classNames?.items,children:T.map(i.items,(n,S)=>e.jsx(O,{className:n.className,icon:n.icon,text:n.text},S))}),i.children]}),c&&!s&&e.jsx("div",{className:"absolute left-0 bottom-0 w-full h-[50px] bg-gradient-to-b from-white/50 to-white/100"})]}),c&&e.jsx(E,{className:"w-full justify-center mb-4",onClick:()=>l(n=>!n),rounded:!0,children:s?D.t("RecordDetailHeader.showLess"):D.t("RecordDetailHeader.showMore")})]})};Q.__docgenInfo={description:"",methods:[],displayName:"RecordDetailContent",props:{children:{required:!1,flowType:{name:"Node"},description:""},classNames:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  root?: string,
  items?: string
}`,signature:{properties:[{key:"root",value:{name:"string",required:!1}},{key:"items",value:{name:"string",required:!1}}]}},description:""},items:{required:!0,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  className?: string,
  icon?: string,
  text: string
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"icon",value:{name:"string",required:!1}},{key:"text",value:{name:"string",required:!0}}]}}],raw:"Array<Item>"},description:""}}};const t=i=>e.jsxs("div",{className:u("relative","overflow-y-auto",i.classNames?.root),children:[e.jsxs("div",{className:u("sticky","inset-0","bg-white","z-[5]",{"shadow-[0px_1px_4px_0px_rgba(0,0,0,.15)]":i.relations&&i.relations.length}),children:[i.onClose&&e.jsx("div",{"aria-label":"Close",className:u("absolute z-10 cursor-pointer",{"top-6 right-6":!i.coverUrl},{"bg-black rounded-full p-2.5 text-white top-2 right-2":i.coverUrl}),onClick:i.onClose,onKeyDown:i.onClose,role:"button",tabIndex:"0",children:e.jsx(U,{name:"close",size:24})}),i.coverUrl&&e.jsx("img",{alt:i.title,src:i.coverUrl,className:"object-cover h-[220px] max-h-[220px] w-full"}),(i.breadcrumbs||i.onGoBack)&&e.jsx(B,{history:i.breadcrumbs||[],onGoBack:i.onGoBack,className:u({"absolute top-6 left-6 pr-6 max-w-[calc(100%_-4.5em)] z-10":!i.coverUrl,"px-6 pt-6":i.coverUrl})}),e.jsx(V,{title:i.title,icon:i.icon,classNames:{root:u({"!pt-16":!i.coverUrl&&(i.breadcrumbs||i.onGoBack)},i.classNames?.header),title:u(i.classNames?.title,{"pr-6":!i.coverUrl&&i.onClose}),items:i.classNames?.items},detailPageUrl:i.detailPageUrl})]}),e.jsx(Q,{classNames:{root:"py-4 px-6",items:i.classNames?.items},items:i.detailItems,children:i.children}),i.loading&&e.jsx("div",{className:"py-4 px-8",children:e.jsx(L,{})}),!i.loading&&e.jsx(J,{className:u(i.classNames?.relatedRecords),items:i.relations,count:i.count})]});t.__docgenInfo={description:"",methods:[],displayName:"RecordDetailPanel",props:{breadcrumbs:{required:!1,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:"A list of navigation breadcrumbs to be rendered above the title"},children:{required:!1,flowType:{name:"Node"},description:"Content to be rendered as the blurb"},classNames:{required:!1,flowType:{name:"signature",type:"object",raw:"{ header?: string, items?: string, relatedRecords?: string, root?: string, title?: string }",signature:{properties:[{key:"header",value:{name:"string",required:!1}},{key:"items",value:{name:"string",required:!1}},{key:"relatedRecords",value:{name:"string",required:!1}},{key:"root",value:{name:"string",required:!1}},{key:"title",value:{name:"string",required:!1}}]}},description:`Class names to apply to the root div, the header box, the title element,
the list element containing the detail items, and the accordion list containing related records`},count:{required:!1,flowType:{name:"Boolean"},description:"If true, the number of related records will be displayed for each type"},coverUrl:{required:!1,flowType:{name:"string"},description:"If provided, the panel will display this image above the header."},detailItems:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ text: string, icon?: string, className?: string }",signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"icon",value:{name:"string",required:!1}},{key:"className",value:{name:"string",required:!1}}]}}],raw:"Array<{ text: string, icon?: string, className?: string }>"},description:"List of detail fields to be rendered above the blurb"},detailPageUrl:{required:!1,flowType:{name:"string"},description:"If a URL for a record detail page is provided, will render a button that links to it"},icon:{required:!1,flowType:{name:"string"},description:"The icon to display before the header."},loading:{required:!1,flowType:{name:"Boolean"},description:"If true, displays a loading icon in place of the related records list"},onClose:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"A function called when the `close` icon is clicked"},onGoBack:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"A function called when the back arrow is clicked"},relations:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"data",value:{name:"any",required:!1},description:"Optional data prop to pass other fields, e.g. if needed for rendering"},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Optional event fired when item is clicked. Will be overridden if a renderItem prop is provided in the parent list"},{key:"name",value:{name:"string",required:!0},description:"The primary name of the record (will display as text of the list item by default)"}]}}}],return:{name:"JSX.Element"}},required:!1},description:"Optional render prop to render each item in the list"},{key:"title",value:{name:"string",required:!0},description:"The title of the related model"}]}}],raw:"Array<RelatedRecordsList>"},description:"An array of lists of related records for different model types"},title:{required:!0,flowType:{name:"string"},description:"The text of the header."}}};const{action:o}=__STORYBOOK_MODULE_ACTIONS__,ve={title:"Components/Core Data/RecordDetailPanel",component:t},r=[{title:"Related People",items:[{name:"Kazuya Miyuki"},{name:"Eijun Sawamura"}],icon:"person",count:!0},{title:"Related Organizations",items:[{name:"Seido High School Baseball Club"},{name:"Yakushi High School Baseball Club"}],icon:"occupation",count:!0}],m=()=>e.jsx(t,{relations:r,title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo."," ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," ","Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames."]})}),d=()=>e.jsx(t,{coverUrl:"https://m.media-amazon.com/images/I/91-OHYmdS2L._AC_SL1500_.jpg",relations:r,title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],onClose:o("close"),children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo."," ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," ","Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames."]})}),p=()=>e.jsx(t,{relations:r,detailPageUrl:"#",title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo."," ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," ","Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames."]})}),f=()=>e.jsx(t,{relations:r,title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],icon:"participants",children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo."," ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," ","Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames."]})}),v=()=>e.jsx(t,{relations:r,title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],onClose:o("close"),children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo."," ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," ","Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames."]})}),b=()=>e.jsx(t,{relations:r,title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],breadcrumbs:["West Tokyo Qualifiers Semifinal","West Tokyo Qualifiers Quarterfinal"],onGoBack:o("back"),children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo."," ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," ","Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames."]})}),g=()=>e.jsx(t,{coverUrl:"https://m.media-amazon.com/images/I/91-OHYmdS2L._AC_SL1500_.jpg",relations:r,title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],breadcrumbs:["West Tokyo Qualifiers Semifinal","West Tokyo Qualifiers Quarterfinal"],onGoBack:o("back"),children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo."," ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," ","Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames."]})}),h=()=>e.jsx(t,{relations:r,title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],breadcrumbs:["West Tokyo Qualifiers Semifinal","West Tokyo Qualifiers Quarterfinal"],onGoBack:o("back"),classNames:{root:"w-[380px] h-[560px]"},onClose:o("close"),detailPageUrl:"#",children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo."," ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," ","Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames. Lorem ipsum odor amet, consectetuer adipiscing elit. Fringilla morbi diam vehicula nostra gravida faucibus consequat sociosqu. Platea taciti ridiculus nostra feugiat hac elit quisque. Magnis risus natoque sagittis finibus ridiculus aenean ac posuere. Euismod ridiculus placerat dictum himenaeos odio aenean magnis magna. Maximus justo curabitur purus porttitor dictum penatibus lacus. Nisl lectus finibus sollicitudin; arcu adipiscing urna fermentum facilisis. Natoque blandit elit viverra penatibus facilisis. Praesent habitant volutpat efficitur in lacus lacinia torquent. Cras ultricies mus ante et dapibus dolor vivamus nunc. Velit interdum litora lobortis ultrices sollicitudin molestie ut."]})}),y=()=>e.jsx(t,{relations:r,title:"West Tokyo Qualifiers Quarterfinal",count:!0,detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo."," ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," ","Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames."]})}),q=()=>{const[i,s]=a.useState(!0),[l,c]=a.useState(null);return a.useEffect(()=>{setTimeout(()=>{c(e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo."," ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," ","Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames. Lorem ipsum odor amet, consectetuer adipiscing elit. Fringilla morbi diam vehicula nostra gravida faucibus consequat sociosqu. Platea taciti ridiculus nostra feugiat hac elit quisque. Magnis risus natoque sagittis finibus ridiculus aenean ac posuere. Euismod ridiculus placerat dictum himenaeos odio aenean magnis magna. Maximus justo curabitur purus porttitor dictum penatibus lacus. Nisl lectus finibus sollicitudin; arcu adipiscing urna fermentum facilisis. Natoque blandit elit viverra penatibus facilisis. Praesent habitant volutpat efficitur in lacus lacinia torquent. Cras ultricies mus ante et dapibus dolor vivamus nunc. Velit interdum litora lobortis ultrices sollicitudin molestie ut."]}))},200)},[]),i&&e.jsx(t,{relations:r,title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],breadcrumbs:["West Tokyo Qualifiers Semifinal","West Tokyo Qualifiers Quarterfinal"],onGoBack:o("back"),classNames:{root:"w-[380px] h-[560px]"},onClose:()=>{s(!1)},detailPageUrl:"#",children:l})},x=()=>e.jsx(t,{title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo."," ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," ","Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames."]})}),N=()=>{const[i,s]=a.useState(!0);return a.useEffect(()=>{setTimeout(()=>{s(!1)},3e3)},[]),e.jsx(t,{loading:i,relations:r,title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo."," ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," ","Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames."]})})},w=()=>e.jsxs(t,{classNames:{root:"w-[380px] h-[560px]"},detailPageUrl:"#",icon:"location",onClose:o("close"),relations:[{title:"Planification evenement new",items:[{name:"Planification Salton City"}]},{title:"Pays",items:[{name:"États-Unis (Californie)"}]}],title:"Saltaire",children:[e.jsx(C,{items:[{label:"Serial Number",value:"1976"},{label:"Periode Planification",value:"1851-1853"},{label:"Annee Planification",value:"1851"},{label:"Autre Nom Ou Localisation",value:"(près de Bradford)"},{label:"Autres informations 1",value:"Site du patrimoine mondial."},{label:"Autres informations 2",value:`"Saltaire was built by Titus Salt to replace his woolen mills in Bradford by a single large factory and a new town for the work force. He selected a greenfield site crossed by a canal and railway, and between 1851 and 1871 completed a model industrial town of 820 dwellings and a population of 4,389. The town was endowed with a variety of community buildings and parks, and although the residentiel density of thirty-two houses (170 persons) per acre (eighty houses or 420 persons per hectare) appears crowded by today's standards, it represented a marked improvement on working-class living conditions of the time" (source: Pacione, Michael. 2009. Urban geography: a global perspective. Taylor & Francis. (à la page 166)).`}]}),e.jsxs("p",{className:"text-sm py-4",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et mollis magna. Donec sed turpis sit amet purus condimentum sollicitudin id non nulla. Maecenas sit amet tellus fermentum, luctus risus fringilla, sollicitudin nisl. Nulla vitae tortor gravida, facilisis velit at, rhoncus justo. Aenean et hendrerit neque. Aliquam neque nunc, aliquet bibendum facilisis pellentesque, sagittis eu ligula. Suspendisse a nulla eget orci viverra elementum eu eu velit.",e.jsx("br",{}),e.jsx("br",{}),"Suspendisse sed dolor tincidunt orci consectetur ultricies et eget nisi. Donec cursus cursus fringilla. In turpis quam, aliquet quis elit rhoncus, tempor tristique nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc a sapien quis sapien lacinia posuere in sit amet lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi metus felis, scelerisque vitae est varius, interdum posuere lectus. Morbi malesuada sagittis molestie. Pellentesque auctor ipsum et orci efficitur commodo. Etiam elit dui, suscipit eu consectetur a, hendrerit in urna. Quisque vitae sapien enim. Fusce ornare eget eros maximus ultrices. Sed dignissim odio quis eros accumsan, at auctor metus tempus.",e.jsx("br",{}),e.jsx("br",{}),"Sed ut faucibus ante, vitae maximus tellus. Sed non mi sit amet lacus hendrerit accumsan a in lacus. Donec gravida varius nulla et scelerisque. Proin porttitor, nulla eget aliquet congue, magna libero tempor orci, quis laoreet ipsum nisi ut odio. Integer dignissim volutpat pretium. Vivamus lacus ante, scelerisque et metus et, imperdiet ornare ex. Nam condimentum, odio in feugiat accumsan, diam ligula varius velit, quis malesuada felis augue at tellus. Aliquam rhoncus nisl eu nulla laoreet aliquam. Donec lectus arcu, ullamcorper sit amet lacinia sed, pulvinar et nibh. In iaculis felis congue diam feugiat pharetra. Nam non arcu arcu. Fusce ex felis, porttitor sit amet metus quis, ornare bibendum quam. Quisque at mauris urna. Praesent feugiat luctus interdum.",e.jsx("br",{}),e.jsx("br",{}),"Vivamus sed ultrices nunc, et auctor ante. Fusce sit amet porta lectus. Aliquam dapibus vitae dui commodo ornare. In efficitur, nisi sit amet tempor vehicula, nisi lectus maximus libero, sed dapibus massa augue nec nulla. Vestibulum sed tortor euismod, malesuada lacus quis, aliquam tellus. Proin sodales turpis velit, eget placerat dui maximus quis. Donec vulputate libero et ultrices tincidunt. Curabitur placerat placerat quam, sit amet iaculis ex pulvinar in. Nulla tincidunt mattis ex, eget varius sem blandit eu. Cras vulputate, massa ac lacinia hendrerit, purus libero sodales massa, in varius nisl leo et dui. In hac habitasse platea dictumst.",e.jsx("br",{}),e.jsx("br",{}),"Praesent tempor placerat dignissim. Vivamus mi lorem, auctor at ipsum bibendum, semper pellentesque ante. Donec convallis feugiat arcu a volutpat. Suspendisse eu felis est. Nam fringilla ipsum vulputate justo commodo, eget pretium ante consequat. Donec ullamcorper arcu eu vestibulum finibus. Aliquam massa metus, ullamcorper at euismod vel, maximus ut neque. In a est a nibh auctor condimentum mattis quis mi. Nunc accumsan malesuada nisi non viverra. Mauris id eros magna. Nam pulvinar ullamcorper justo ac finibus. Mauris faucibus sapien eu ex porta, ut condimentum lectus accumsan. Nullam id ex ac nunc vehicula volutpat eu eget mauris. Etiam vitae bibendum eros."]})]}),j=()=>{const[i,s]=a.useState(),l=[{content:e.jsxs("p",{className:"text-sm py-4",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et mollis magna. Donec sed turpis sit amet purus condimentum sollicitudin id non nulla. Maecenas sit amet tellus fermentum, luctus risus fringilla, sollicitudin nisl. Nulla vitae tortor gravida, facilisis velit at, rhoncus justo. Aenean et hendrerit neque. Aliquam neque nunc, aliquet bibendum facilisis pellentesque, sagittis eu ligula. Suspendisse a nulla eget orci viverra elementum eu eu velit.",e.jsx("br",{}),e.jsx("br",{}),"Suspendisse sed dolor tincidunt orci consectetur ultricies et eget nisi. Donec cursus cursus fringilla. In turpis quam, aliquet quis elit rhoncus, tempor tristique nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc a sapien quis sapien lacinia posuere in sit amet lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi metus felis, scelerisque vitae est varius, interdum posuere lectus. Morbi malesuada sagittis molestie. Pellentesque auctor ipsum et orci efficitur commodo. Etiam elit dui, suscipit eu consectetur a, hendrerit in urna. Quisque vitae sapien enim. Fusce ornare eget eros maximus ultrices. Sed dignissim odio quis eros accumsan, at auctor metus tempus.",e.jsx("br",{}),e.jsx("br",{}),"Sed ut faucibus ante, vitae maximus tellus. Sed non mi sit amet lacus hendrerit accumsan a in lacus. Donec gravida varius nulla et scelerisque. Proin porttitor, nulla eget aliquet congue, magna libero tempor orci, quis laoreet ipsum nisi ut odio. Integer dignissim volutpat pretium. Vivamus lacus ante, scelerisque et metus et, imperdiet ornare ex. Nam condimentum, odio in feugiat accumsan, diam ligula varius velit, quis malesuada felis augue at tellus. Aliquam rhoncus nisl eu nulla laoreet aliquam. Donec lectus arcu, ullamcorper sit amet lacinia sed, pulvinar et nibh. In iaculis felis congue diam feugiat pharetra. Nam non arcu arcu. Fusce ex felis, porttitor sit amet metus quis, ornare bibendum quam. Quisque at mauris urna. Praesent feugiat luctus interdum.",e.jsx("br",{}),e.jsx("br",{}),"Vivamus sed ultrices nunc, et auctor ante. Fusce sit amet porta lectus. Aliquam dapibus vitae dui commodo ornare. In efficitur, nisi sit amet tempor vehicula, nisi lectus maximus libero, sed dapibus massa augue nec nulla. Vestibulum sed tortor euismod, malesuada lacus quis, aliquam tellus. Proin sodales turpis velit, eget placerat dui maximus quis. Donec vulputate libero et ultrices tincidunt. Curabitur placerat placerat quam, sit amet iaculis ex pulvinar in. Nulla tincidunt mattis ex, eget varius sem blandit eu. Cras vulputate, massa ac lacinia hendrerit, purus libero sodales massa, in varius nisl leo et dui. In hac habitasse platea dictumst.",e.jsx("br",{}),e.jsx("br",{}),"Praesent tempor placerat dignissim. Vivamus mi lorem, auctor at ipsum bibendum, semper pellentesque ante. Donec convallis feugiat arcu a volutpat. Suspendisse eu felis est. Nam fringilla ipsum vulputate justo commodo, eget pretium ante consequat. Donec ullamcorper arcu eu vestibulum finibus. Aliquam massa metus, ullamcorper at euismod vel, maximus ut neque. In a est a nibh auctor condimentum mattis quis mi. Nunc accumsan malesuada nisi non viverra. Mauris id eros magna. Nam pulvinar ullamcorper justo ac finibus. Mauris faucibus sapien eu ex porta, ut condimentum lectus accumsan. Nullam id ex ac nunc vehicula volutpat eu eget mauris. Etiam vitae bibendum eros."]}),relations:[{title:"Planification evenement new",items:[{name:"Planification Salton City"}]},{title:"Pays",items:[{name:"États-Unis (Californie)"}]}],title:"Saltaire",user_defined:[{label:"Serial Number",value:"1976"},{label:"Periode Planification",value:"1851-1853"},{label:"Annee Planification",value:"1851"},{label:"Autre Nom Ou Localisation",value:"(près de Bradford)"},{label:"Autres informations 1",value:"Site du patrimoine mondial."},{label:"Autres informations 2",value:`"Saltaire was built by Titus Salt to replace his woolen mills in Bradford by a single large factory and a new town for the work force. He selected a greenfield site crossed by a canal and railway, and between 1851 and 1871 completed a model industrial town of 820 dwellings and a population of 4,389. The town was endowed with a variety of community buildings and parks, and although the residentiel density of thirty-two houses (170 persons) per acre (eighty houses or 420 persons per hectare) appears crowded by today's standards, it represented a marked improvement on working-class living conditions of the time" (source: Pacione, Michael. 2009. Urban geography: a global perspective. Taylor & Francis. (à la page 166)).`}]},{title:"Sparrow's Point"}];return a.useEffect(()=>{s(T.first(l))},[]),e.jsxs("div",{children:[e.jsx("ul",{className:"py-4",children:T.map(l,c=>e.jsx("li",{children:e.jsx("button",{onClick:()=>s(c),type:"button",children:c.title})}))}),i&&e.jsxs(t,{classNames:{root:"w-[380px] h-[560px]"},detailPageUrl:"#",icon:"location",onClose:o("close"),relations:i.relations,title:i.title,children:[e.jsx(C,{items:i.user_defined}),i.content]})]})};m.__docgenInfo={description:"",methods:[],displayName:"Default"};d.__docgenInfo={description:"",methods:[],displayName:"WithCoverUrl"};p.__docgenInfo={description:"",methods:[],displayName:"WithViewDetail"};f.__docgenInfo={description:"",methods:[],displayName:"WithIcon"};v.__docgenInfo={description:"",methods:[],displayName:"WithClose"};b.__docgenInfo={description:"",methods:[],displayName:"WithBreadcrumbs"};g.__docgenInfo={description:"",methods:[],displayName:"WithBreadcrumbsAndCoverUrl"};h.__docgenInfo={description:"",methods:[],displayName:"FixedWidthAndHeight"};y.__docgenInfo={description:"",methods:[],displayName:"WithCounts"};q.__docgenInfo={description:"",methods:[],displayName:"UnmountOnClose"};x.__docgenInfo={description:"",methods:[],displayName:"NoRelatedRecords"};N.__docgenInfo={description:"",methods:[],displayName:"WithLoadingDelay"};w.__docgenInfo={description:"",methods:[],displayName:"LotsOfContent"};j.__docgenInfo={description:"",methods:[],displayName:"SwitchingRecords"};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <RecordDetailPanel relations={sampleData} title='West Tokyo Qualifiers Quarterfinal' detailItems={[{
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
  </RecordDetailPanel>`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => <RecordDetailPanel coverUrl='https://m.media-amazon.com/images/I/91-OHYmdS2L._AC_SL1500_.jpg' relations={sampleData} title='West Tokyo Qualifiers Quarterfinal' detailItems={[{
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
  </RecordDetailPanel>`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => <RecordDetailPanel relations={sampleData} detailPageUrl='#' title='West Tokyo Qualifiers Quarterfinal' detailItems={[{
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
  </RecordDetailPanel>`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => <RecordDetailPanel relations={sampleData} title='West Tokyo Qualifiers Quarterfinal' detailItems={[{
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
  </RecordDetailPanel>`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => <RecordDetailPanel relations={sampleData} title='West Tokyo Qualifiers Quarterfinal' detailItems={[{
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
  </RecordDetailPanel>`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => <RecordDetailPanel relations={sampleData} title='West Tokyo Qualifiers Quarterfinal' detailItems={[{
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
  </RecordDetailPanel>`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => <RecordDetailPanel coverUrl='https://m.media-amazon.com/images/I/91-OHYmdS2L._AC_SL1500_.jpg' relations={sampleData} title='West Tokyo Qualifiers Quarterfinal' detailItems={[{
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
  </RecordDetailPanel>`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => <RecordDetailPanel relations={sampleData} title='West Tokyo Qualifiers Quarterfinal' detailItems={[{
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
  </RecordDetailPanel>`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => <RecordDetailPanel relations={sampleData} title='West Tokyo Qualifiers Quarterfinal' count detailItems={[{
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
  </RecordDetailPanel>`,...y.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
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
}`,...q.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => <RecordDetailPanel title='West Tokyo Qualifiers Quarterfinal' detailItems={[{
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
  </RecordDetailPanel>`,...x.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
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
}`,...N.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => <RecordDetailPanel classNames={{
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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et mollis magna. Donec sed turpis sit amet
      purus condimentum sollicitudin id non nulla. Maecenas sit amet tellus fermentum, luctus risus fringilla,
      sollicitudin nisl. Nulla vitae tortor gravida, facilisis velit at, rhoncus justo. Aenean et hendrerit neque.
      Aliquam neque nunc, aliquet bibendum facilisis pellentesque, sagittis eu ligula. Suspendisse a nulla eget orci
      viverra elementum eu eu velit.
      <br />
      <br />
      Suspendisse sed dolor tincidunt orci consectetur ultricies et eget nisi. Donec cursus cursus fringilla. In turpis
      quam, aliquet quis elit rhoncus, tempor tristique nisl. Class aptent taciti sociosqu ad litora torquent per
      conubia nostra, per inceptos himenaeos. Nunc a sapien quis sapien lacinia posuere in sit amet lectus. Class
      aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi metus felis,
      scelerisque vitae est varius, interdum posuere lectus. Morbi malesuada sagittis molestie. Pellentesque auctor
      ipsum et orci efficitur commodo. Etiam elit dui, suscipit eu consectetur a, hendrerit in urna. Quisque vitae
      sapien enim. Fusce ornare eget eros maximus ultrices. Sed dignissim odio quis eros accumsan, at auctor metus
      tempus.
      <br />
      <br />
      Sed ut faucibus ante, vitae maximus tellus. Sed non mi sit amet lacus hendrerit accumsan a in lacus. Donec
      gravida varius nulla et scelerisque. Proin porttitor, nulla eget aliquet congue, magna libero tempor orci, quis
      laoreet ipsum nisi ut odio. Integer dignissim volutpat pretium. Vivamus lacus ante, scelerisque et metus et,
      imperdiet ornare ex. Nam condimentum, odio in feugiat accumsan, diam ligula varius velit, quis malesuada felis
      augue at tellus. Aliquam rhoncus nisl eu nulla laoreet aliquam. Donec lectus arcu, ullamcorper sit amet lacinia
      sed, pulvinar et nibh. In iaculis felis congue diam feugiat pharetra. Nam non arcu arcu. Fusce ex felis,
      porttitor sit amet metus quis, ornare bibendum quam. Quisque at mauris urna. Praesent feugiat luctus interdum.
      <br />
      <br />
      Vivamus sed ultrices nunc, et auctor ante. Fusce sit amet porta lectus. Aliquam dapibus vitae dui commodo ornare.
      In efficitur, nisi sit amet tempor vehicula, nisi lectus maximus libero, sed dapibus massa augue nec nulla.
      Vestibulum sed tortor euismod, malesuada lacus quis, aliquam tellus. Proin sodales turpis velit, eget placerat
      dui maximus quis. Donec vulputate libero et ultrices tincidunt. Curabitur placerat placerat quam, sit amet
      iaculis ex pulvinar in. Nulla tincidunt mattis ex, eget varius sem blandit eu. Cras vulputate, massa ac lacinia
      hendrerit, purus libero sodales massa, in varius nisl leo et dui. In hac habitasse platea dictumst.
      <br />
      <br />
      Praesent tempor placerat dignissim. Vivamus mi lorem, auctor at ipsum bibendum, semper pellentesque ante. Donec
      convallis feugiat arcu a volutpat. Suspendisse eu felis est. Nam fringilla ipsum vulputate justo commodo, eget
      pretium ante consequat. Donec ullamcorper arcu eu vestibulum finibus. Aliquam massa metus, ullamcorper at euismod
      vel, maximus ut neque. In a est a nibh auctor condimentum mattis quis mi. Nunc accumsan malesuada nisi non
      viverra. Mauris id eros magna. Nam pulvinar ullamcorper justo ac finibus. Mauris faucibus sapien eu ex porta, ut
      condimentum lectus accumsan. Nullam id ex ac nunc vehicula volutpat eu eget mauris. Etiam vitae bibendum eros.
    </p>
  </RecordDetailPanel>`,...w.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const [record, setRecord] = useState();
  const records = [{
    content: <p className='text-sm py-4'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et mollis magna. Donec sed turpis sit amet
        purus condimentum sollicitudin id non nulla. Maecenas sit amet tellus fermentum, luctus risus fringilla,
        sollicitudin nisl. Nulla vitae tortor gravida, facilisis velit at, rhoncus justo. Aenean et hendrerit neque.
        Aliquam neque nunc, aliquet bibendum facilisis pellentesque, sagittis eu ligula. Suspendisse a nulla eget orci
        viverra elementum eu eu velit.
        <br />
        <br />
        Suspendisse sed dolor tincidunt orci consectetur ultricies et eget nisi. Donec cursus cursus fringilla. In
        turpis quam, aliquet quis elit rhoncus, tempor tristique nisl. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. Nunc a sapien quis sapien lacinia posuere in sit amet lectus. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi metus felis,
        scelerisque vitae est varius, interdum posuere lectus. Morbi malesuada sagittis molestie. Pellentesque auctor
        ipsum et orci efficitur commodo. Etiam elit dui, suscipit eu consectetur a, hendrerit in urna. Quisque vitae
        sapien enim. Fusce ornare eget eros maximus ultrices. Sed dignissim odio quis eros accumsan, at auctor metus
        tempus.
        <br />
        <br />
        Sed ut faucibus ante, vitae maximus tellus. Sed non mi sit amet lacus hendrerit accumsan a in lacus. Donec
        gravida varius nulla et scelerisque. Proin porttitor, nulla eget aliquet congue, magna libero tempor orci, quis
        laoreet ipsum nisi ut odio. Integer dignissim volutpat pretium. Vivamus lacus ante, scelerisque et metus et,
        imperdiet ornare ex. Nam condimentum, odio in feugiat accumsan, diam ligula varius velit, quis malesuada felis
        augue at tellus. Aliquam rhoncus nisl eu nulla laoreet aliquam. Donec lectus arcu, ullamcorper sit amet lacinia
        sed, pulvinar et nibh. In iaculis felis congue diam feugiat pharetra. Nam non arcu arcu. Fusce ex felis,
        porttitor sit amet metus quis, ornare bibendum quam. Quisque at mauris urna. Praesent feugiat luctus interdum.
        <br />
        <br />
        Vivamus sed ultrices nunc, et auctor ante. Fusce sit amet porta lectus. Aliquam dapibus vitae dui commodo
        ornare. In efficitur, nisi sit amet tempor vehicula, nisi lectus maximus libero, sed dapibus massa augue nec
        nulla. Vestibulum sed tortor euismod, malesuada lacus quis, aliquam tellus. Proin sodales turpis velit, eget
        placerat dui maximus quis. Donec vulputate libero et ultrices tincidunt. Curabitur placerat placerat quam, sit
        amet iaculis ex pulvinar in. Nulla tincidunt mattis ex, eget varius sem blandit eu. Cras vulputate, massa ac
        lacinia hendrerit, purus libero sodales massa, in varius nisl leo et dui. In hac habitasse platea dictumst.
        <br />
        <br />
        Praesent tempor placerat dignissim. Vivamus mi lorem, auctor at ipsum bibendum, semper pellentesque ante. Donec
        convallis feugiat arcu a volutpat. Suspendisse eu felis est. Nam fringilla ipsum vulputate justo commodo, eget
        pretium ante consequat. Donec ullamcorper arcu eu vestibulum finibus. Aliquam massa metus, ullamcorper at
        euismod vel, maximus ut neque. In a est a nibh auctor condimentum mattis quis mi. Nunc accumsan malesuada nisi
        non viverra. Mauris id eros magna. Nam pulvinar ullamcorper justo ac finibus. Mauris faucibus sapien eu ex
        porta, ut condimentum lectus accumsan. Nullam id ex ac nunc vehicula volutpat eu eget mauris. Etiam vitae
        bibendum eros.
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
}`,...j.parameters?.docs?.source}}};const be=["Default","WithCoverUrl","WithViewDetail","WithIcon","WithClose","WithBreadcrumbs","WithBreadcrumbsAndCoverUrl","FixedWidthAndHeight","WithCounts","UnmountOnClose","NoRelatedRecords","WithLoadingDelay","LotsOfContent","SwitchingRecords"];export{m as Default,h as FixedWidthAndHeight,w as LotsOfContent,x as NoRelatedRecords,j as SwitchingRecords,q as UnmountOnClose,b as WithBreadcrumbs,g as WithBreadcrumbsAndCoverUrl,v as WithClose,y as WithCounts,d as WithCoverUrl,f as WithIcon,N as WithLoadingDelay,p as WithViewDetail,be as __namedExportsOrder,ve as default};
