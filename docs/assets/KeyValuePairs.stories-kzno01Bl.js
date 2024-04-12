import{j as t}from"./jsx-runtime-BTCK_S7S.js";import{r as s}from"./index-CBqU2yxZ.js";import{d as V}from"./index-DfmhmaGJ.js";import{G as i}from"./Grid-Czr5owxQ.js";import{B as g}from"./Button-Blq7Z6RX.js";import{I as v}from"./Input--hQVCRQV.js";import{_ as u}from"./index-default-C_maRo4o.js";import{i as m}from"./i18n-C8zWlANG.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZh2vnSw.js";import"./pickBy-CU2rOOKe.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./isPlainObject-Bu_b4Pek.js";import"./index-Cw1G72V2.js";import"./index-CKJfshIT.js";import"./tiny-invariant.cjs-DxxScMW_.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./preview-errors-CzpZmerH.js";import"./debounce-Bq1aTuh-.js";import"./extends-CCbyfPlC.js";import"./getElementType-CckcRzoH.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./Icon-2tEtgK8g.js";import"./Label-Cq1fb1cd.js";import"./ModernAutoControlledComponent-DJBWk5EW.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-CQoJOerW.js";import"./toFinite-KQ8KevIC.js";import"./forEach-CXlln0XP.js";import"./Dimmer-D_gwaesu.js";import"./Portal-DvhHJPzU.js";import"./keyboardKey-OMDgGVm3.js";import"./index-DZGZymok.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-B4PnIEPz.js";import"./i18next-Sc0HEOoc.js";import"./toPropertyKey-hKuLU48H.js";import"./defineProperty-CCxoMnQV.js";import"./inherits-D5wXBZoG.js";import"./createClass-D2z1h_eG.js";import"./getPrototypeOf-BYVhAdwF.js";const N=r=>e=>{const n=s.useCallback(()=>{e.onChange([...e.items,{}])},[e.items]),j=s.useCallback(d=>{e.onChange(u.reject(e.items,(p,c)=>c===d))},[e.items]),k=s.useCallback((d,p,c,{value:I})=>{e.onChange(u.map(e.items,(y,S)=>S!==d?y:{...y,[p]:I}))},[e.items]);return t.jsx(r,{...e,onAddItem:n,onRemoveItem:j,onUpdateItem:k})},l=N(r=>t.jsxs("div",{children:[t.jsx(g,{basic:!0,content:m.t("Common.buttons.add"),icon:"plus",onClick:r.onAddItem.bind(void 0),type:"button"}),t.jsxs(i,{padded:"vertically",children:[u.map(r.items,(e,n)=>t.jsxs(i.Row,{columns:3,children:[t.jsx(i.Column,{width:8,children:t.jsx(v,{fluid:!0,onChange:r.onUpdateItem.bind(void 0,n,"key"),placeholder:m.t("KeyValuePairs.labels.key"),value:e.key})}),t.jsx(i.Column,{width:7,children:t.jsx(v,{fluid:!0,onChange:r.onUpdateItem.bind(void 0,n,"value"),placeholder:m.t("KeyValuePairs.labels.value"),value:e.value})}),t.jsx(i.Column,{width:1,children:t.jsx(g,{color:"red",icon:"trash",onClick:r.onRemoveItem.bind(void 0,n)})})]})),u.isEmpty(r.items)&&t.jsx(i.Row,{columns:1,children:t.jsx(i.Column,{children:m.t("Common.labels.noRecords")})})]})]}));l.__docgenInfo={description:"",methods:[],displayName:"KeyValuePairs",props:{onAddItem:{required:!0,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onRemoveItem:{required:!0,flowType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{name:"index",type:{name:"number"}}],return:{name:"void"}}},description:""},onUpdateItem:{required:!0,flowType:{name:"signature",type:"function",raw:"(index: number, attribute: string, e: Event, data: any) => void",signature:{arguments:[{name:"index",type:{name:"number"}},{name:"attribute",type:{name:"string"}},{name:"e",type:{name:"Event"}},{name:"data",type:{name:"any"}}],return:{name:"void"}}},description:""},items:{required:!0,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string,
  value: string
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Array<Item>"},description:""},onChange:{required:!0,flowType:{name:"signature",type:"function",raw:"(items: Array<Item>) => void",signature:{arguments:[{name:"items",type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string,
  value: string
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Array<Item>"}}],return:{name:"void"}}},description:""}}};const he={title:"Components/Semantic UI/KeyValuePairs",decorators:[V.withKnobs]},a=()=>{const[r,e]=s.useState("[]");return t.jsx(l,{items:JSON.parse(r),onChange:n=>e(JSON.stringify(n))})},o=()=>{const[r,e]=s.useState(JSON.stringify([{key:"One",value:"First record"},{key:"Two",value:"Second record"}]));return t.jsx(l,{items:JSON.parse(r),onChange:n=>e(JSON.stringify(n))})};a.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"withExistingValue"};var h,f,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('[]');
  return <KeyValuePairs items={JSON.parse(value)} onChange={items => setValue(JSON.stringify(items))} />;
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var w,b,C;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(JSON.stringify([{
    key: 'One',
    value: 'First record'
  }, {
    key: 'Two',
    value: 'Second record'
  }]));
  return <KeyValuePairs items={JSON.parse(value)} onChange={items => setValue(JSON.stringify(items))} />;
}`,...(C=(b=o.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const fe=["Default","withExistingValue"];export{a as Default,fe as __namedExportsOrder,he as default,o as withExistingValue};