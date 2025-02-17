import{j as t}from"./jsx-runtime-D9TvR9R2.js";import{r as d}from"./index-C0dDX-lL.js";import{d as m}from"./index-BU_iU-8_.js";import{_ as u}from"./iframe-BfJvfnTb.js";import{i as p}from"./i18n-CWCIAucr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-DrNAD31Z.js";import"./pickBy-CrAFOsTa.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./isPlainObject-Ck-JkdY8.js";import"./index-Cw1G72V2.js";import"./index-CKJfshIT.js";import"./tiny-invariant.cjs-DxxScMW_.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./preview-errors-CzpZmerH.js";import"./debounce-D4ItSSjy.js";import"../sb-preview/runtime.js";import"./i18next-WuGp4vR6.js";import"./toPropertyKey-BcUJYDQU.js";import"./defineProperty-DcNpp85p.js";import"./classCallCheck-BNzALLS0.js";import"./createClass-BA4CoEfY.js";import"./inherits-DQ5KX8TJ.js";import"./assertThisInitialized-B9jnkVVz.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getPrototypeOf-BYVhAdwF.js";const c=e=>o=>t.jsx(d.Suspense,{fallback:t.jsx("div",{children:p.t("Common.messages.loading")}),children:t.jsx(e,{...o})}),f=d.lazy(()=>u(()=>import("./index-Du1bDyAT.js").then(e=>e.i),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]),import.meta.url)),h="<p><br></p>",g="",i=c(e=>t.jsx(f,{className:"rich-text-area",formats:e.formats,modules:e.modules,onChange:o=>{let r=o;o===h&&(r=g),e.onChange(r)},placeholder:e.placeholder,theme:"snow",value:e.value}));i.defaultProps={formats:["header","font","size","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image","video"],modules:{toolbar:[[{header:"1"},{header:"2"},{font:[]}],[{size:[]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image"],["clean"]],clipboard:{matchVisual:!1}},placeholder:void 0};i.__docgenInfo={description:"",methods:[],displayName:"RichTextArea",props:{formats:{required:!1,flowType:{name:"any"},description:"",defaultValue:{value:`[
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
}`,computed:!1}},onChange:{required:!0,flowType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{name:"value",type:{name:"string"}}],return:{name:"void"}}},description:""},placeholder:{required:!1,flowType:{name:"string"},description:"",defaultValue:{value:"undefined",computed:!0}},value:{required:!0,flowType:{name:"string",nullable:!0},description:""}}};const K={title:"Components/Common/RichTextArea",decorators:[m.withKnobs]},n=()=>t.jsx(i,{onChange:()=>{},value:""});n.__docgenInfo={description:"",methods:[],displayName:"Default"};var a,l,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:"() => <RichTextArea onChange={() => {}} value='' />",...(s=(l=n.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const Q=["Default"];export{n as Default,Q as __namedExportsOrder,K as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-Du1bDyAT.js","./_commonjsHelpers-BosuxZz1.js","./index-C0dDX-lL.js","./index-DOYXiIEK.js","./index-BU_iU-8_.js","./mapValues-DrNAD31Z.js","./pickBy-CrAFOsTa.js","./_commonjs-dynamic-modules-TDtrdbi3.js","./isPlainObject-Ck-JkdY8.js","./index-Cw1G72V2.js","./index-CKJfshIT.js","./tiny-invariant.cjs-DxxScMW_.js","./___vite-browser-external_commonjs-proxy-DRaEfepn.js","./preview-errors-CzpZmerH.js","./debounce-D4ItSSjy.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
