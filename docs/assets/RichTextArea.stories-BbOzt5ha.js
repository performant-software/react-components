import{j as t}from"./jsx-runtime-BTCK_S7S.js";import{r as d}from"./index-CBqU2yxZ.js";import{d as m}from"./index-kF-6VCSF.js";import{_ as u}from"./iframe-BcGTk6aA.js";import{i as p}from"./i18n-Dfa7mXnt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZh2vnSw.js";import"./pickBy-CU2rOOKe.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./isPlainObject-Bu_b4Pek.js";import"./index-Cw1G72V2.js";import"./index-CKJfshIT.js";import"./tiny-invariant.cjs-DxxScMW_.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./preview-errors-CzpZmerH.js";import"./debounce-Bq1aTuh-.js";import"../sb-preview/runtime.js";import"./i18next-Sc0HEOoc.js";import"./toPropertyKey-hKuLU48H.js";import"./defineProperty-CCxoMnQV.js";import"./inherits-D5wXBZoG.js";import"./assertThisInitialized-B9jnkVVz.js";import"./setPrototypeOf-DgZC2w_0.js";import"./createClass-D2z1h_eG.js";import"./getPrototypeOf-BYVhAdwF.js";const c=e=>o=>t.jsx(d.Suspense,{fallback:t.jsx("div",{children:p.t("Common.messages.loading")}),children:t.jsx(e,{...o})}),f=d.lazy(()=>u(()=>import("./index-BpOSz5h6.js").then(e=>e.i),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]),import.meta.url)),h="<p><br></p>",g="",i=c(e=>t.jsx(f,{className:"rich-text-area",formats:e.formats,modules:e.modules,onChange:o=>{let r=o;o===h&&(r=g),e.onChange(r)},placeholder:e.placeholder,theme:"snow",value:e.value}));i.defaultProps={formats:["header","font","size","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image","video"],modules:{toolbar:[[{header:"1"},{header:"2"},{font:[]}],[{size:[]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image"],["clean"]],clipboard:{matchVisual:!1}},placeholder:void 0};i.__docgenInfo={description:"",methods:[],displayName:"RichTextArea",props:{formats:{required:!1,flowType:{name:"any"},description:"",defaultValue:{value:`[
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
}`,computed:!1}},onChange:{required:!0,flowType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{name:"value",type:{name:"string"}}],return:{name:"void"}}},description:""},placeholder:{required:!1,flowType:{name:"string"},description:"",defaultValue:{value:"undefined",computed:!0}},value:{required:!0,flowType:{name:"string",nullable:!0},description:""}}};const H={title:"Components/Common/RichTextArea",decorators:[m.withKnobs]},n=()=>t.jsx(i,{onChange:()=>{},value:""});n.__docgenInfo={description:"",methods:[],displayName:"Default"};var a,l,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:"() => <RichTextArea onChange={() => {}} value='' />",...(s=(l=n.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const K=["Default"];export{n as Default,K as __namedExportsOrder,H as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-BpOSz5h6.js","./_commonjsHelpers-BosuxZz1.js","./index-CBqU2yxZ.js","./index-DZGZymok.js","./index-kF-6VCSF.js","./mapValues-CZh2vnSw.js","./pickBy-CU2rOOKe.js","./_commonjs-dynamic-modules-TDtrdbi3.js","./isPlainObject-Bu_b4Pek.js","./index-Cw1G72V2.js","./index-CKJfshIT.js","./tiny-invariant.cjs-DxxScMW_.js","./___vite-browser-external_commonjs-proxy-DRaEfepn.js","./preview-errors-CzpZmerH.js","./debounce-Bq1aTuh-.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
