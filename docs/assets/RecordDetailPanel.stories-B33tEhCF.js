import{j as e}from"./jsx-runtime-BTCK_S7S.js";import"./index-CBqU2yxZ.js";import{c as m}from"./clsx-B-dksMZM.js";import{I as _}from"./Icon-BJPA3lGg.js";import"./Button-B3v9ZXb-.js";import"./RecordDetailTitle-BAcLfHL5.js";import"./RecordDetailItem-ClyOdlXP.js";import{A as C}from"./AccordionItemsList-yjw1FppB.js";import{R as P}from"./RecordDetailHeader-BkYhzT6h.js";import"./i18n-D4EEaMS6.js";import"./index-default-C_maRo4o.js";import{R as B}from"./RecordDetailBreadcrumbs-Bb5h4pea.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-C7__U9OG.js";import"./extends-CCbyfPlC.js";import"./index-6HK7vUyC.js";import"./index-DZGZymok.js";import"./index-BZx57K47.js";import"./index-DglDcCL6.js";import"./i18next-Sc0HEOoc.js";import"./toPropertyKey-hKuLU48H.js";import"./defineProperty-CCxoMnQV.js";import"./inherits-D5wXBZoG.js";import"./assertThisInitialized-B9jnkVVz.js";import"./setPrototypeOf-DgZC2w_0.js";import"./createClass-D2z1h_eG.js";import"./getPrototypeOf-BYVhAdwF.js";const J=t=>{var c,u,p,f,h;return e.jsxs("div",{className:m("relative","shadow-[0px_5px_12px_0px_rgba(0,0,0,.10)]","overflow-y-auto",(c=t.classNames)==null?void 0:c.root),children:[e.jsxs("div",{className:"sticky inset-0 shadow-[0px_1px_4px_0px_rgba(0,0,0,.15)] bg-white z-[5]",children:[t.onClose&&e.jsx("div",{onClick:t.onClose,className:"absolute top-6 right-6 z-10 cursor-pointer",children:e.jsx(_,{name:"close",size:24})}),(t.breadcrumbs||t.onGoBack)&&e.jsx(B,{history:t.breadcrumbs||[],onGoBack:t.onGoBack,className:"absolute top-6 left-6 pr-6 max-w-[calc(100%_-4.5em)] z-10"}),e.jsx(P,{title:t.title,icon:t.icon,classNames:{root:m({"pt-16":t.breadcrumbs||t.onGoBack},(u=t.classNames)==null?void 0:u.header),title:m((p=t.classNames)==null?void 0:p.title,{"pr-6":t.onClose}),items:(f=t.classNames)==null?void 0:f.items},detailItems:t.detailItems,detailPageUrl:t.detailPageUrl,children:t.children})]}),e.jsx(C,{className:m("shadow-[0px_1px_4px_rgba(0,0,0,.15)]",(h=t.classNames)==null?void 0:h.relatedRecords),relations:t.relations})]})},i=J;J.__docgenInfo={description:"",methods:[],displayName:"RecordDetailPanel",props:{breadcrumbs:{required:!1,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:"A list of navigation breadcrumbs to be rendered above the title"},children:{required:!1,flowType:{name:"Node"},description:"Content to be rendered as the blurb"},classNames:{required:!1,flowType:{name:"signature",type:"object",raw:"{ header?: string, items?: string, relatedRecords?: string, root?: string, title?: string }",signature:{properties:[{key:"header",value:{name:"string",required:!1}},{key:"items",value:{name:"string",required:!1}},{key:"relatedRecords",value:{name:"string",required:!1}},{key:"root",value:{name:"string",required:!1}},{key:"title",value:{name:"string",required:!1}}]}},description:"Class names to apply to the root div, the header box, the title element, the list element containing the detail items, and the accordion list containing related records"},detailItems:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ text: string, icon?: string, className?: string }",signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"icon",value:{name:"string",required:!1}},{key:"className",value:{name:"string",required:!1}}]}}],raw:"Array<{ text: string, icon?: string, className?: string }>"},description:"List of detail fields to be rendered above the blurb"},detailPageUrl:{required:!1,flowType:{name:"string"},description:"If a URL for a record detail page is provided, will render a button that links to it"},icon:{required:!1,flowType:{name:"string"},description:"The icon to display before the header."},onClose:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"A function called when the `close` icon is clicked"},onGoBack:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"A function called when the back arrow is clicked"},relations:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{  
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
}`,signature:{properties:[{key:"data",value:{name:"any",required:!1},description:"Optional data prop to pass other fields, e.g. if needed for rendering"},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Optional event fired when the item is clicked. Note this will be overridden if a renderItem prop is provided in the parent list"},{key:"name",value:{name:"string",required:!0},description:"The primary name of the record (will display as text of the list item by default)"}]}}}],return:{name:"JSX.Element"}},required:!1},description:"Optional render prop to render each item in the list"},{key:"title",value:{name:"string",required:!0},description:"The title of the related model"}]}}],raw:"Array<RelatedRecordsList>"},description:"An array of lists of related records for different model types"},title:{required:!0,flowType:{name:"string"},description:"The text of the header."}}};const ue={title:"Components/Core Data/RecordDetailPanel",component:i},a=[{title:"Related People",items:[{name:"Kazuya Miyuki"},{name:"Eijun Sawamura"}],icon:"person",count:!0},{title:"Related Organizations",items:[{name:"Seido High School Baseball Club"},{name:"Yakushi High School Baseball Club"}],icon:"occupation",count:!0}],r=()=>e.jsx(i,{relations:a,title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo. ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames."]})}),n=()=>e.jsx(i,{relations:a,detailPageUrl:"#",title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo. ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames."]})}),o=()=>e.jsx(i,{relations:a,title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],icon:"participants",children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo. ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames."]})}),s=()=>e.jsx(i,{relations:a,title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],onClose:()=>{alert("Closed!")},children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo. ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames."]})}),l=()=>e.jsx(i,{relations:a,title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],breadcrumbs:["West Tokyo Qualifiers Semifinal","West Tokyo Qualifiers Quarterfinal"],onGoBack:()=>{alert("Go back!")},children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo. ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames."]})}),d=()=>e.jsx(i,{relations:a,title:"West Tokyo Qualifiers Quarterfinal",detailItems:[{text:"July 27",icon:"date"},{text:"Meiji Jinju Stadium",icon:"location"}],breadcrumbs:["West Tokyo Qualifiers Semifinal","West Tokyo Qualifiers Quarterfinal"],onGoBack:()=>{alert("Go back!")},classNames:{root:"w-[380px] h-[500px]"},onClose:()=>{alert("Close!")},detailPageUrl:"#",children:e.jsxs("p",{children:["Arcu imperdiet sit sit viverra id volutpat commodo. ",e.jsx("span",{className:"font-bold",children:"Tempor sem malesuada porttitor congue."})," Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames."]})});r.__docgenInfo={description:"",methods:[],displayName:"Default"};n.__docgenInfo={description:"",methods:[],displayName:"WithViewDetail"};o.__docgenInfo={description:"",methods:[],displayName:"WithIcon"};s.__docgenInfo={description:"",methods:[],displayName:"WithClose"};l.__docgenInfo={description:"",methods:[],displayName:"WithBreadcrumbs"};d.__docgenInfo={description:"",methods:[],displayName:"FixedWidthAndHeight"};var v,g,y;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`() => <RecordDetailPanel relations={sampleData} title='West Tokyo Qualifiers Quarterfinal' detailItems={[{
  text: 'July 27',
  icon: 'date'
}, {
  text: 'Meiji Jinju Stadium',
  icon: 'location'
}]}>
    <p>
      Arcu imperdiet sit sit viverra id volutpat commodo. <span className='font-bold'>Tempor sem malesuada porttitor congue.</span> Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames.
    </p>
  </RecordDetailPanel>`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,x,k;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`() => <RecordDetailPanel relations={sampleData} detailPageUrl='#' title='West Tokyo Qualifiers Quarterfinal' detailItems={[{
  text: 'July 27',
  icon: 'date'
}, {
  text: 'Meiji Jinju Stadium',
  icon: 'location'
}]}>
    <p>
      Arcu imperdiet sit sit viverra id volutpat commodo. <span className='font-bold'>Tempor sem malesuada porttitor congue.</span> Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames.
    </p>
  </RecordDetailPanel>`,...(k=(x=n.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var j,N,w;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`() => <RecordDetailPanel relations={sampleData} title='West Tokyo Qualifiers Quarterfinal' detailItems={[{
  text: 'July 27',
  icon: 'date'
}, {
  text: 'Meiji Jinju Stadium',
  icon: 'location'
}]} icon='participants'>
    <p>
      Arcu imperdiet sit sit viverra id volutpat commodo. <span className='font-bold'>Tempor sem malesuada porttitor congue.</span> Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames.
    </p>
  </RecordDetailPanel>`,...(w=(N=o.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var T,q,A;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`() => <RecordDetailPanel relations={sampleData} title='West Tokyo Qualifiers Quarterfinal' detailItems={[{
  text: 'July 27',
  icon: 'date'
}, {
  text: 'Meiji Jinju Stadium',
  icon: 'location'
}]} onClose={() => {
  alert('Closed!');
}}>
    <p>
      Arcu imperdiet sit sit viverra id volutpat commodo. <span className='font-bold'>Tempor sem malesuada porttitor congue.</span> Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames.
    </p>  
  </RecordDetailPanel>`,...(A=(q=s.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var I,R,S;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`() => <RecordDetailPanel relations={sampleData} title='West Tokyo Qualifiers Quarterfinal' detailItems={[{
  text: 'July 27',
  icon: 'date'
}, {
  text: 'Meiji Jinju Stadium',
  icon: 'location'
}]} breadcrumbs={['West Tokyo Qualifiers Semifinal', 'West Tokyo Qualifiers Quarterfinal']} onGoBack={() => {
  alert('Go back!');
}}>
    <p>
      Arcu imperdiet sit sit viverra id volutpat commodo. <span className='font-bold'>Tempor sem malesuada porttitor congue.</span> Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames.
    </p>
  </RecordDetailPanel>`,...(S=(R=l.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var Q,D,W;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`() => <RecordDetailPanel relations={sampleData} title='West Tokyo Qualifiers Quarterfinal' detailItems={[{
  text: 'July 27',
  icon: 'date'
}, {
  text: 'Meiji Jinju Stadium',
  icon: 'location'
}]} breadcrumbs={['West Tokyo Qualifiers Semifinal', 'West Tokyo Qualifiers Quarterfinal']} onGoBack={() => {
  alert('Go back!');
}} classNames={{
  root: 'w-[380px] h-[500px]'
}} onClose={() => {
  alert('Close!');
}} detailPageUrl='#'>
    <p>
      Arcu imperdiet sit sit viverra id volutpat commodo. <span className='font-bold'>Tempor sem malesuada porttitor congue.</span> Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames.
    </p>
  </RecordDetailPanel>`,...(W=(D=d.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};const pe=["Default","WithViewDetail","WithIcon","WithClose","WithBreadcrumbs","FixedWidthAndHeight"];export{r as Default,d as FixedWidthAndHeight,l as WithBreadcrumbs,s as WithClose,o as WithIcon,n as WithViewDetail,pe as __namedExportsOrder,ue as default};
