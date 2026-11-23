import{j as a}from"./iframe-XscsSow5.js";import{I as i}from"./Icon-Jc1DkTXR.js";import{L as s}from"./Label-CCz5ec4K.js";import{_ as c}from"./index-default-C0I3bBxV.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-DanMEeNO.js";import"./_getPrototype-dFVwFHqx.js";import"./ModernAutoControlledComponent-BAVxVyJQ.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-CrtFdvd8.js";import"./toFinite-Dfj0KU41.js";import"./toNumber-DIkYOhwr.js";import"./forEach-3klWIlrl.js";import"./_arrayEach-DpGxo2Of.js";import"./Dimmer-DeH6gG4C.js";import"./Portal-DxEuHn5T.js";import"./keyboardKey-eR6bitll.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";const t=e=>a.jsx("div",{className:"tags-list",children:c.map(e.tags||[],r=>a.jsxs(s,{style:{backgroundColor:e.config&&e.config[r]&&e.config[r].background,color:e.config&&e.config[r]&&e.config[r].color,marginRight:"10px"},children:[r,e.onDelete&&a.jsx(i,{name:"delete",onClick:e.onDelete.bind(void 0,r)})]}))});t.__docgenInfo={description:"",methods:[],displayName:"TagsList",props:{config:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  [key: string]: {
    background: string,
    color: string
  }
}`,signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:`{
  background: string,
  color: string
}`,signature:{properties:[{key:"background",value:{name:"string",required:!0}},{key:"color",value:{name:"string",required:!0}}]},required:!0}}]}},description:""},onDelete:{required:!1,flowType:{name:"signature",type:"function",raw:"(tag: string) => void",signature:{arguments:[{name:"tag",type:{name:"string"}}],return:{name:"void"}}},description:""},tags:{required:!0,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""}}};const I={title:"Components/Semantic UI/TagsList",component:t},n=()=>{const e=["Tag 1","Tag 2","Tag 3","Tag 4","Tag 5"],r={"Tag 1":{background:"#264653",color:"white"},"Tag 2":{background:"#2a9d8f",color:"black"},"Tag 3":{background:"#e9c46a",color:"black"},"Tag 4":{background:"#f4a261",color:"black"}};return a.jsx(t,{config:r,tags:e})},o=()=>a.jsx(t,{onDelete:()=>{},tags:["Apple","Orange","Banana"]});n.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"WithDelete"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"() => <TagsList onDelete={() => {}} tags={['Apple', 'Orange', 'Banana']} />",...o.parameters?.docs?.source}}};const A=["Default","WithDelete"];export{n as Default,o as WithDelete,A as __namedExportsOrder,I as default};
