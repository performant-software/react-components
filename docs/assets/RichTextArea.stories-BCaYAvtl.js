const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-BbROyMPC.js","./iframe-CzTKQtwy.js","./iframe-D9VBLUQ7.css","./_baseIsEqual-B1bzO0gs.js","./isObject-eGFA2NH7.js"])))=>i.map(i=>d[i]);
import{j as t,r as o,_ as r}from"./iframe-CzTKQtwy.js";import{i as s}from"./i18n-BA4Ml3hw.js";import"./i18next-eNuDfwAU.js";const d=e=>a=>t.jsx(o.Suspense,{fallback:t.jsx("div",{children:s.t("Common.messages.loading")}),children:t.jsx(e,{...a})}),u=o.lazy(()=>r(()=>import("./index-BbROyMPC.js").then(e=>e.i),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),c="<p><br></p>",m="",i=d(e=>t.jsx(u,{className:"rich-text-area",formats:e.formats,modules:e.modules,onChange:a=>{let l=a;a===c&&(l=m),e.onChange(l)},placeholder:e.placeholder,theme:"snow",value:e.value}));i.defaultProps={formats:["header","font","size","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image","video"],modules:{toolbar:[[{header:"1"},{header:"2"},{font:[]}],[{size:[]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image"],["clean"]],clipboard:{matchVisual:!1}},placeholder:void 0};i.__docgenInfo={description:"",methods:[],displayName:"RichTextArea",props:{formats:{required:!1,flowType:{name:"any"},description:"",defaultValue:{value:`[
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video'
]`,computed:!1}},modules:{required:!1,flowType:{name:"any"},description:"",defaultValue:{value:`{
  toolbar: [[{
    header: '1'
  }, {
    header: '2'
  }, {
    font: []
  }], [{
    size: []
  }], [
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote'
  ], [{
    list: 'ordered'
  }, {
    list: 'bullet'
  }, {
    indent: '-1'
  }, {
    indent: '+1'
  }], [
    'link',
    'image'
  ], [
    'clean'
  ]],
  clipboard: {
    matchVisual: false
  }
}`,computed:!1}},onChange:{required:!0,flowType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{name:"value",type:{name:"string"}}],return:{name:"void"}}},description:""},placeholder:{required:!1,flowType:{name:"string"},description:"",defaultValue:{value:"undefined",computed:!0}},value:{required:!0,flowType:{name:"string",nullable:!0},description:""}}};const g={title:"Components/Common/RichTextArea",component:i},n=()=>t.jsx(i,{onChange:()=>{},value:""});n.__docgenInfo={description:"",methods:[],displayName:"Default"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => <RichTextArea onChange={() => {}} value='' />",...n.parameters?.docs?.source}}};const b=["Default"];export{n as Default,b as __namedExportsOrder,g as default};
