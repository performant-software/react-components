import{j as o}from"./iframe-Dh9sgUpq.js";import{I as i}from"./Icon-lekhSa4x.js";import{L as s}from"./Label-Bo6azEc2.js";import{_ as c}from"./index-default-C0I3bBxV.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BOa7Z56o.js";import"./_getPrototype-dFVwFHqx.js";import"./ModernAutoControlledComponent-DR2uLhLR.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-BYxib7lt.js";import"./toFinite-Dfj0KU41.js";import"./toNumber-DIkYOhwr.js";import"./forEach--q4dx8jk.js";import"./_arrayEach-DpGxo2Of.js";import"./Dimmer-B48fuewG.js";import"./Portal-BfO7jr1_.js";import"./keyboardKey-CGp_nnHN.js";const t=e=>o.jsx("div",{className:"tags-list",children:c.map(e.tags||[],n=>o.jsxs(s,{style:{backgroundColor:e.config&&e.config[n]&&e.config[n].background,color:e.config&&e.config[n]&&e.config[n].color,marginRight:"10px"},children:[n,e.onDelete&&o.jsx(i,{name:"delete",onClick:e.onDelete.bind(void 0,n)})]}))});t.__docgenInfo={description:"",methods:[],displayName:"TagsList",props:{config:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  [key: string]: {
    background: string,
    color: string
  }
}`,signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:`{
  background: string,
  color: string
}`,signature:{properties:[{key:"background",value:{name:"string",required:!0}},{key:"color",value:{name:"string",required:!0}}]},required:!0}}]}},description:""},onDelete:{required:!1,flowType:{name:"signature",type:"function",raw:"(tag: string) => void",signature:{arguments:[{name:"tag",type:{name:"string"}}],return:{name:"void"}}},description:""},tags:{required:!0,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""}}};const q={title:"Components/Semantic UI/TagsList",component:t},r=()=>{const e=["Tag 1","Tag 2","Tag 3","Tag 4","Tag 5"],n={"Tag 1":{background:"#264653",color:"white"},"Tag 2":{background:"#2a9d8f",color:"black"},"Tag 3":{background:"#e9c46a",color:"black"},"Tag 4":{background:"#f4a261",color:"black"}};return o.jsx(t,{config:n,tags:e})},a=()=>o.jsx(t,{onDelete:()=>{},tags:["Apple","Orange","Banana"]});r.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"WithDelete"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const tags = ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'];
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => <TagsList onDelete={() => {}} tags={['Apple', 'Orange', 'Banana']} />",...a.parameters?.docs?.source}}};const I=["Default","WithDelete"];export{r as Default,a as WithDelete,I as __namedExportsOrder,q as default};
