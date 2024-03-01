import{j as t}from"./jsx-runtime-BTCK_S7S.js";import{a as m}from"./chunk-WFFRPTHA-B2vgThZf.js";import"./index-CBqU2yxZ.js";import{M as a}from"./Menu-9i0apxqd.js";import{_ as n}from"./index-default-C_maRo4o.js";import"./preview-errors-CzpZmerH.js";import"./index-CKJfshIT.js";import"./v4-D8aEg3BZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./map-B4PnIEPz.js";import"./getElementType-CckcRzoH.js";import"./ModernAutoControlledComponent-DJBWk5EW.js";import"./assertThisInitialized-B9jnkVVz.js";import"./_arrayReduce-CrxnWFSq.js";import"./deburr-CEfyoYOr.js";import"./Icon-2tEtgK8g.js";const u=i=>t.jsx(a,{pointing:!0,secondary:!0,children:n.map(n.where(i.tabs,{visible:!0}),r=>t.jsx(a.Item,{active:r.active,name:r.label,onClick:i.onTabClick.bind(void 0,r)},r.key))});u.__docgenInfo={description:"",methods:[],displayName:"TabsMenu",props:{onTabClick:{required:!0,flowType:{name:"signature",type:"function",raw:"(tab: Tab) => void",signature:{arguments:[{name:"tab",type:{name:"signature",type:"object",raw:`{
  active: boolean,
  key: string,
  label: string,
  visible: boolean
}`,signature:{properties:[{key:"active",value:{name:"boolean",required:!0}},{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"visible",value:{name:"boolean",required:!0}}]}}}],return:{name:"void"}}},description:""},tabs:{required:!0,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  active: boolean,
  key: string,
  label: string,
  visible: boolean
}`,signature:{properties:[{key:"active",value:{name:"boolean",required:!0}},{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"visible",value:{name:"boolean",required:!0}}]}}],raw:"Array<Tab>"},description:""}}};const P={title:"Components/Semantic UI/TabsMenu"},e=()=>t.jsx(u,{onTabClick:m("tab-click"),tabs:[{active:!0,key:"profile",label:"Profile",visible:!0},{active:!1,key:"preferences",label:"Preferences",visible:!0},{active:!1,key:"settings",label:"Settings",visible:!0}]});e.__docgenInfo={description:"",methods:[],displayName:"Default"};var o,s,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`() => <TabsMenu onTabClick={action('tab-click')} tabs={[{
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
}]} />`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const S=["Default"];export{e as Default,S as __namedExportsOrder,P as default};
