import{j as t}from"./jsx-runtime-D9TvR9R2.js";import"./index-C0dDX-lL.js";import{d}from"./index-DcYp3xR7.js";import{I as p}from"./Icon-BGzIEILD.js";import{L as u}from"./Label-BqnFaqey.js";import{_ as f}from"./index-default-C_maRo4o.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-BQxZ7nrE.js";import"./pickBy-JNbKYqv1.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./isPlainObject-BoCILj_Q.js";import"./index-Cw1G72V2.js";import"./index-CKJfshIT.js";import"./tiny-invariant.cjs-DxxScMW_.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./preview-errors-CzpZmerH.js";import"./debounce-DmjZtjd2.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-C_4y_n4F.js";import"./ModernAutoControlledComponent-CBEnGjal.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-BAV9TYTx.js";import"./toFinite-DWd2HYc9.js";import"./forEach-Bj9nU5MO.js";import"./Dimmer-kmE_IUk6.js";import"./Portal-CKYxdKwP.js";import"./keyboardKey-OMDgGVm3.js";import"./index-DOYXiIEK.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";const n=r=>t.jsx("div",{className:"tags-list",children:f.map(r.tags||[],e=>t.jsxs(u,{style:{backgroundColor:r.config&&r.config[e]&&r.config[e].background,color:r.config&&r.config[e]&&r.config[e].color,marginRight:"10px"},children:[e,r.onDelete&&t.jsx(p,{name:"delete",onClick:r.onDelete.bind(void 0,e)})]}))});n.__docgenInfo={description:"",methods:[],displayName:"TagsList",props:{config:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  [key: string]: {
    background: string,
    color: string
  }
}`,signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:`{
  background: string,
  color: string
}`,signature:{properties:[{key:"background",value:{name:"string",required:!0}},{key:"color",value:{name:"string",required:!0}}]},required:!0}}]}},description:""},onDelete:{required:!1,flowType:{name:"signature",type:"function",raw:"(tag: string) => void",signature:{arguments:[{name:"tag",type:{name:"string"}}],return:{name:"void"}}},description:""},tags:{required:!0,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""}}};const P={title:"Components/Semantic UI/TagsList",decorators:[d.withKnobs]},o=()=>{const r=d.array("Tags",["Tag 1","Tag 2","Tag 3","Tag 4","Tag 5"]),e={"Tag 1":{background:"#264653",color:"white"},"Tag 2":{background:"#2a9d8f",color:"black"},"Tag 3":{background:"#e9c46a",color:"black"},"Tag 4":{background:"#f4a261",color:"black"}};return t.jsx(n,{config:e,tags:r})},a=()=>t.jsx(n,{onDelete:()=>{},tags:["Apple","Orange","Banana"]});o.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"WithDelete"};var i,s,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const tags = array('Tags', ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5']);
  const config = {
    'Tag 1': {
      background: '#264653',
      color: 'white'
    },
    'Tag 2': {
      background: '#2a9d8f',
      color: 'black'
    },
    'Tag 3': {
      background: '#e9c46a',
      color: 'black'
    },
    'Tag 4': {
      background: '#f4a261',
      color: 'black'
    }
  };
  return <TagsList config={config} tags={tags} />;
}`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var g,m,l;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:"() => <TagsList onDelete={() => {}} tags={['Apple', 'Orange', 'Banana']} />",...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const Q=["Default","WithDelete"];export{o as Default,a as WithDelete,Q as __namedExportsOrder,P as default};
