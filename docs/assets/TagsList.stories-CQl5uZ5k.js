import{j as o}from"./iframe-DlkFaX8z.js";import{I as i}from"./Icon-DIroxkwR.js";import{L as s}from"./Label-DBlcapIP.js";import{_ as c}from"./index-default-C0I3bBxV.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-DMivt9zn.js";import"./ModernAutoControlledComponent-fLFZ-Jlb.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-DG0_oYZ4.js";import"./toFinite-BMffxGsR.js";import"./forEach-TObsvMxQ.js";import"./Dimmer-Bt5A9HuE.js";import"./Portal-DOieImQz.js";import"./keyboardKey-DhEzKjiY.js";const t=e=>o.jsx("div",{className:"tags-list",children:c.map(e.tags||[],n=>o.jsxs(s,{style:{backgroundColor:e.config&&e.config[n]&&e.config[n].background,color:e.config&&e.config[n]&&e.config[n].color,marginRight:"10px"},children:[n,e.onDelete&&o.jsx(i,{name:"delete",onClick:e.onDelete.bind(void 0,n)})]}))});t.__docgenInfo={description:"",methods:[],displayName:"TagsList",props:{config:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  [key: string]: {
    background: string,
    color: string
  }
}`,signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:`{
  background: string,
  color: string
}`,signature:{properties:[{key:"background",value:{name:"string",required:!0}},{key:"color",value:{name:"string",required:!0}}]},required:!0}}]}},description:""},onDelete:{required:!1,flowType:{name:"signature",type:"function",raw:"(tag: string) => void",signature:{arguments:[{name:"tag",type:{name:"string"}}],return:{name:"void"}}},description:""},tags:{required:!0,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""}}};const w={title:"Components/Semantic UI/TagsList",component:t},r=()=>{const e=["Tag 1","Tag 2","Tag 3","Tag 4","Tag 5"],n={"Tag 1":{background:"#264653",color:"white"},"Tag 2":{background:"#2a9d8f",color:"black"},"Tag 3":{background:"#e9c46a",color:"black"},"Tag 4":{background:"#f4a261",color:"black"}};return o.jsx(t,{config:n,tags:e})},a=()=>o.jsx(t,{onDelete:()=>{},tags:["Apple","Orange","Banana"]});r.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"WithDelete"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => <TagsList onDelete={() => {}} tags={['Apple', 'Orange', 'Banana']} />",...a.parameters?.docs?.source}}};const L=["Default","WithDelete"];export{r as Default,a as WithDelete,L as __namedExportsOrder,w as default};
