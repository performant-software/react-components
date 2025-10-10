import{j as t}from"./iframe-DlkFaX8z.js";import{M as a}from"./Menu-DR94J7md.js";import{_ as n}from"./index-default-C0I3bBxV.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./map-CS-mLOkU.js";import"./getElementType-DMivt9zn.js";import"./ModernAutoControlledComponent-fLFZ-Jlb.js";import"./assertThisInitialized-B9jnkVVz.js";import"./_arrayReduce-CrxnWFSq.js";import"./deburr-C7CGyvmO.js";import"./Icon-DIroxkwR.js";const s=i=>t.jsx(a,{pointing:!0,secondary:!0,children:n.map(n.where(i.tabs,{visible:!0}),r=>t.jsx(a.Item,{active:r.active,name:r.label,onClick:i.onTabClick.bind(void 0,r)},r.key))});s.__docgenInfo={description:"",methods:[],displayName:"TabsMenu",props:{onTabClick:{required:!0,flowType:{name:"signature",type:"function",raw:"(tab: Tab) => void",signature:{arguments:[{name:"tab",type:{name:"signature",type:"object",raw:`{
  active: boolean,
  key: string,
  label: string,
  visible: boolean
}`,signature:{properties:[{key:"active",value:{name:"boolean",required:!0}},{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"visible",value:{name:"boolean",required:!0}}]}}}],return:{name:"void"}}},description:""},tabs:{required:!0,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  active: boolean,
  key: string,
  label: string,
  visible: boolean
}`,signature:{properties:[{key:"active",value:{name:"boolean",required:!0}},{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"visible",value:{name:"boolean",required:!0}}]}}],raw:"Array<Tab>"},description:""}}};const{action:o}=__STORYBOOK_MODULE_ACTIONS__,_={title:"Components/Semantic UI/TabsMenu"},e=()=>t.jsx(s,{onTabClick:o("tab-click"),tabs:[{active:!0,key:"profile",label:"Profile",visible:!0},{active:!1,key:"preferences",label:"Preferences",visible:!0},{active:!1,key:"settings",label:"Settings",visible:!0}]});e.__docgenInfo={description:"",methods:[],displayName:"Default"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => <TabsMenu onTabClick={action('tab-click')} tabs={[{
  active: true,
  key: 'profile',
  label: 'Profile',
  visible: true
}, {
  active: false,
  key: 'preferences',
  label: 'Preferences',
  visible: true
}, {
  active: false,
  key: 'settings',
  label: 'Settings',
  visible: true
}]} />`,...e.parameters?.docs?.source}}};const q=["Default"];export{e as Default,q as __namedExportsOrder,_ as default};
