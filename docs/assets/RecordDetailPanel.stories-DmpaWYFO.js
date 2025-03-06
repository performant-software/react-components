import{j as e}from"./jsx-runtime-D9TvR9R2.js";import{r as h}from"./index-C0dDX-lL.js";import{c as r}from"./clsx-B-dksMZM.js";import{I as Y}from"./Icon-xn5eBWjd.js";import{A as Z}from"./AccordionItemsList-DjnK9Mj0.js";import{R as ee}from"./RecordDetailHeader-DgNU6-G-.js";import{R as ie}from"./RecordDetailBreadcrumbs-DBFpcMQI.js";import{L as te}from"./LoadAnimation-b0qjd8WL.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BGIGw4h8.js";import"./extends-CCbyfPlC.js";import"./index-CIyLsbPd.js";import"./index-DOYXiIEK.js";import"./index-BmSdlTVd.js";import"./index-CMZE9jPC.js";import"./index-default-C_maRo4o.js";import"./Button-BVnVN7dx.js";import"./RecordDetailTitle-DvlOSjGu.js";import"./RecordDetailItem-D9wvyZCv.js";import"./i18n-O47xwIR-.js";import"./i18next-CwS9wMM1.js";import"./toPropertyKey-BcUJYDQU.js";import"./defineProperty-DcNpp85p.js";import"./inherits-CWPG5jll.js";import"./assertThisInitialized-B9jnkVVz.js";import"./setPrototypeOf-DgZC2w_0.js";import"./createClass-CV9nCQMI.js";import"./getPrototypeOf-BYVhAdwF.js";const K=i=>{var n,g,b,y,x;return e.jsxs("div",{className:r("relative","overflow-y-auto",(n=i.classNames)==null?void 0:n.root),children:[e.jsxs("div",{className:r("sticky","inset-0","bg-white","z-[5]",{"shadow-[0px_1px_4px_0px_rgba(0,0,0,.15)]":i.relations&&i.relations.length}),children:[i.onClose&&e.jsx("div",{onClick:i.onClose,onKeyDown:i.onClose,tabIndex:"0",role:"button","aria-label":"Close",className:"absolute top-6 right-6 z-10 cursor-pointer",children:e.jsx(Y,{name:"close",size:24})}),(i.breadcrumbs||i.onGoBack)&&e.jsx(ie,{history:i.breadcrumbs||[],onGoBack:i.onGoBack,className:"absolute top-6 left-6 pr-6 max-w-[calc(100%_-4.5em)] z-10"}),e.jsx(ee,{title:i.title,icon:i.icon,classNames:{root:r({"!pt-16":i.breadcrumbs||i.onGoBack},(g=i.classNames)==null?void 0:g.header),title:r((b=i.classNames)==null?void 0:b.title,{"pr-6":i.onClose}),items:(y=i.classNames)==null?void 0:y.items},detailItems:i.detailItems,detailPageUrl:i.detailPageUrl,children:i.children})]}),i.loading?e.jsx("div",{className:"py-4 px-8",children:e.jsx(te,{})}):e.jsx(Z,{className:r((x=i.classNames)==null?void 0:x.relatedRecords),items:i.relations,count:i.count})]})},t=K;K.__docgenInfo={description:"",methods:[],displayName:"RecordDetailPanel",props:{breadcrumbs:{required:!1,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:"A list of navigation breadcrumbs to be rendered above the title"},children:{required:!1,flowType:{name:"Node"},description:"Content to be rendered as the blurb"},classNames:{required:!1,flowType:{name:"signature",type:"object",raw:"{ header?: string, items?: string, relatedRecords?: string, root?: string, title?: string }",signature:{properties:[{key:"header",value:{name:"string",required:!1}},{key:"items",value:{name:"string",required:!1}},{key:"relatedRecords",value:{name:"string",required:!1}},{key:"root",value:{name:"string",required:!1}},{key:"title",value:{name:"string",required:!1}}]}},description:`Class names to apply to the root div, the header box, the title element,
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
}`,signature:{properties:[{key:"data",value:{name:"any",required:!1},description:"Optional data prop to pass other fields, e.g. if needed for rendering"},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Optional event fired when item is clicked. Will be overridden if a renderItem prop is provided in the parent list"},{key:"name",value:{name:"string",required:!0},description:"The primary name of the record (will display as text of the list item by default)"}]}}}],return:{name:"JSX.Element"}},required:!1},description:"Optional render prop to render each item in the list"},{key:"title",value:{name:"string",required:!0},description:"The title of the related model"}]}}],raw:"Array<RelatedRecordsList>"},description:"An array of lists of related records for different model types"},title:{required:!0,flowType:{name:"string"},description:"The text of the header."}}};const Ie={title:"Components/Core Data/RecordDetailPanel",component:t},a=[{title:"Related People",items:[{name:"Kazuya Miyuki"},{name:"Eijun Sawamura"}],icon:"person",count:!0},{title:"Related Organizations",items:[{name:"Seido High School Baseball Club"},{name:"Yakushi High School Baseball Club"}],icon:"occupation",count:!0}],s=()=>e.jsx(t,{relations:a,title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo."," ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," ","Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames."]})}),o=()=>e.jsx(t,{relations:a,detailPageUrl:"#",title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo."," ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," ","Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames."]})}),l=()=>e.jsx(t,{relations:a,title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],icon:"participants",children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo."," ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," ","Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames."]})}),u=()=>e.jsx(t,{relations:a,title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],onClose:()=>{alert("Closed!")},children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo."," ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," ","Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames."]})}),c=()=>e.jsx(t,{relations:a,title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],breadcrumbs:["West Tokyo Qualifiers Semifinal","West Tokyo Qualifiers Quarterfinal"],onGoBack:()=>{alert("Go back!")},children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo."," ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," ","Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames."]})}),d=()=>e.jsx(t,{relations:a,title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],breadcrumbs:["West Tokyo Qualifiers Semifinal","West Tokyo Qualifiers Quarterfinal"],onGoBack:()=>{alert("Go back!")},classNames:{root:"w-[380px] h-[560px]"},onClose:()=>{alert("Close!")},detailPageUrl:"#",children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo."," ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," ","Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames. Lorem ipsum odor amet, consectetuer adipiscing elit. Fringilla morbi diam vehicula nostra gravida faucibus consequat sociosqu. Platea taciti ridiculus nostra feugiat hac elit quisque. Magnis risus natoque sagittis finibus ridiculus aenean ac posuere. Euismod ridiculus placerat dictum himenaeos odio aenean magnis magna. Maximus justo curabitur purus porttitor dictum penatibus lacus. Nisl lectus finibus sollicitudin; arcu adipiscing urna fermentum facilisis. Natoque blandit elit viverra penatibus facilisis. Praesent habitant volutpat efficitur in lacus lacinia torquent. Cras ultricies mus ante et dapibus dolor vivamus nunc. Velit interdum litora lobortis ultrices sollicitudin molestie ut."]})}),m=()=>e.jsx(t,{relations:a,title:"West Tokyo Qualifiers Quarterfinal",count:!0,detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo."," ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," ","Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames."]})}),p=()=>{const[i,n]=h.useState(!0),[g,b]=h.useState(null);return h.useEffect(()=>{setTimeout(()=>{b(e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo."," ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," ","Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames. Lorem ipsum odor amet, consectetuer adipiscing elit. Fringilla morbi diam vehicula nostra gravida faucibus consequat sociosqu. Platea taciti ridiculus nostra feugiat hac elit quisque. Magnis risus natoque sagittis finibus ridiculus aenean ac posuere. Euismod ridiculus placerat dictum himenaeos odio aenean magnis magna. Maximus justo curabitur purus porttitor dictum penatibus lacus. Nisl lectus finibus sollicitudin; arcu adipiscing urna fermentum facilisis. Natoque blandit elit viverra penatibus facilisis. Praesent habitant volutpat efficitur in lacus lacinia torquent. Cras ultricies mus ante et dapibus dolor vivamus nunc. Velit interdum litora lobortis ultrices sollicitudin molestie ut."]}))},200)},[]),i&&e.jsx(t,{relations:a,title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],breadcrumbs:["West Tokyo Qualifiers Semifinal","West Tokyo Qualifiers Quarterfinal"],onGoBack:()=>{alert("Go back!")},classNames:{root:"w-[380px] h-[560px]"},onClose:()=>{n(!1)},detailPageUrl:"#",children:g})},f=()=>e.jsx(t,{title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo."," ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," ","Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames."]})}),v=()=>{const[i,n]=h.useState(!0);return h.useEffect(()=>{setTimeout(()=>{n(!1)},3e3)},[]),e.jsx(t,{loading:i,relations:a,title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo."," ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," ","Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames."]})})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"WithViewDetail"};l.__docgenInfo={description:"",methods:[],displayName:"WithIcon"};u.__docgenInfo={description:"",methods:[],displayName:"WithClose"};c.__docgenInfo={description:"",methods:[],displayName:"WithBreadcrumbs"};d.__docgenInfo={description:"",methods:[],displayName:"FixedWidthAndHeight"};m.__docgenInfo={description:"",methods:[],displayName:"WithCounts"};p.__docgenInfo={description:"",methods:[],displayName:"UnmountOnClose"};f.__docgenInfo={description:"",methods:[],displayName:"NoRelatedRecords"};v.__docgenInfo={description:"",methods:[],displayName:"WithLoadingDelay"};var j,k,N;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`() => <RecordDetailPanel relations={sampleData} title='West Tokyo Qualifiers Quarterfinal' detailItems={[{
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
  </RecordDetailPanel>`,...(N=(k=s.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var q,T,w;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`() => <RecordDetailPanel relations={sampleData} detailPageUrl='#' title='West Tokyo Qualifiers Quarterfinal' detailItems={[{
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
  </RecordDetailPanel>`,...(w=(T=o.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var S,A,W;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`() => <RecordDetailPanel relations={sampleData} title='West Tokyo Qualifiers Quarterfinal' detailItems={[{
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
  </RecordDetailPanel>`,...(W=(A=l.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var Q,I,R;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`() => <RecordDetailPanel relations={sampleData} title='West Tokyo Qualifiers Quarterfinal' detailItems={[{
  text: 'July 27',
  icon: 'date'
}, {
  text: 'Meiji Jinju Stadium',
  icon: 'location'
}]} onClose={() => {
  alert('Closed!');
}}>
    <p>
      Arcu imperdiet sit sit viverra id volutpat commodo.
      {' '}
      <span className='font-bold'>Tempor sem malesuada porttitor congue.</span>
      {' '}
      Nibh aenean vitae blandit vitae sapien ac varius mattis.
      Aliquam vitae purus arcu eros enim tempus parturient orci fames.
    </p>
  </RecordDetailPanel>`,...(R=(I=u.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var D,J,C;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`() => <RecordDetailPanel relations={sampleData} title='West Tokyo Qualifiers Quarterfinal' detailItems={[{
  text: 'July 27',
  icon: 'date'
}, {
  text: 'Meiji Jinju Stadium',
  icon: 'location'
}]} breadcrumbs={['West Tokyo Qualifiers Semifinal', 'West Tokyo Qualifiers Quarterfinal']} onGoBack={() => {
  alert('Go back!');
}}>
    <p>
      Arcu imperdiet sit sit viverra id volutpat commodo.
      {' '}
      <span className='font-bold'>Tempor sem malesuada porttitor congue.</span>
      {' '}
      Nibh aenean vitae blandit vitae sapien ac varius mattis.
      Aliquam vitae purus arcu eros enim tempus parturient orci fames.
    </p>
  </RecordDetailPanel>`,...(C=(J=c.parameters)==null?void 0:J.docs)==null?void 0:C.source}}};var P,_,M;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`() => <RecordDetailPanel relations={sampleData} title='West Tokyo Qualifiers Quarterfinal' detailItems={[{
  text: 'July 27',
  icon: 'date'
}, {
  text: 'Meiji Jinju Stadium',
  icon: 'location'
}]} breadcrumbs={['West Tokyo Qualifiers Semifinal', 'West Tokyo Qualifiers Quarterfinal']} onGoBack={() => {
  alert('Go back!');
}} classNames={{
  root: 'w-[380px] h-[560px]'
}} onClose={() => {
  alert('Close!');
}} detailPageUrl='#'>
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
  </RecordDetailPanel>`,...(M=(_=d.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var E,B,L;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`() => <RecordDetailPanel relations={sampleData} title='West Tokyo Qualifiers Quarterfinal' count detailItems={[{
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
  </RecordDetailPanel>`,...(L=(B=m.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var G,O,U;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
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
  }]} breadcrumbs={['West Tokyo Qualifiers Semifinal', 'West Tokyo Qualifiers Quarterfinal']} onGoBack={() => {
    alert('Go back!');
  }} classNames={{
    root: 'w-[380px] h-[560px]'
  }} onClose={() => {
    setShow(false);
  }} detailPageUrl='#'>
    {content}
  </RecordDetailPanel>;
}`,...(U=(O=p.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var z,X,F;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`() => <RecordDetailPanel title='West Tokyo Qualifiers Quarterfinal' detailItems={[{
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
  </RecordDetailPanel>`,...(F=(X=f.parameters)==null?void 0:X.docs)==null?void 0:F.source}}};var V,H,$;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
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
}`,...($=(H=v.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};const Re=["Default","WithViewDetail","WithIcon","WithClose","WithBreadcrumbs","FixedWidthAndHeight","WithCounts","UnmountOnClose","NoRelatedRecords","WithLoadingDelay"];export{s as Default,d as FixedWidthAndHeight,f as NoRelatedRecords,p as UnmountOnClose,c as WithBreadcrumbs,u as WithClose,m as WithCounts,l as WithIcon,v as WithLoadingDelay,o as WithViewDetail,Re as __namedExportsOrder,Ie as default};
